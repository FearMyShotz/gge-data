Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./16.js");
var C = require("./123.js");
var _ = require("./39.js");
var m = require("./1210.js");
var f = require("./700.js");
var O = require("./118.js");
var E = require("./233.js");
var y = require("./26.js");
var b = require("./32.js");
var D = require("./71.js");
var I = require("./31.js");
var T = require("./19.js");
var v = require("./4.js");
var S = require("./8.js");
var A = function (e) {
  function AMerchantBuyDialog(t) {
    var i = this;
    i.tfCosts = null;
    i.COMPOSE_TEXT_ID = "lineBreak_TwoTexts";
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(AMerchantBuyDialog, e);
  AMerchantBuyDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([]);
    this.tfTitle = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new p.LocalizedTextVO(this.dialogTitle));
    this.tfDesc = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new p.LocalizedTextVO(""));
    if (this.dialogDisp.mc_discount) {
      this.tfDiscount = this.textFieldManager.registerTextField(this.dialogDisp.mc_discount.txt_priceReduction ? this.dialogDisp.mc_discount.txt_priceReduction : this.dialogDisp.mc_discount.txt_value, new p.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE, [0]));
    }
  };
  AMerchantBuyDialog.prototype.initBasicButtons = function (t) {
    t = t.concat(this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok, this.dialogDisp.btn_close);
    if (this.dialogDisp.btn_info) {
      t.push(this.dialogDisp.btn_info);
    }
    e.prototype.initBasicButtons.call(this, t);
  };
  AMerchantBuyDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.dialogDisp.mc_cost) {
      this.tfCosts = this.textFieldManager.registerTextField(this.dialogDisp.mc_cost.txt_text, new d.LocalizedNumberVO(0, true));
    }
    switch (this.packageVO.packageType) {
      case C.ClientConstPackages.PACKAGE_TYPE_GEM:
      case C.ClientConstPackages.PACKAGE_TYPE_ITEM:
        this.onInventorySpaceData();
    }
    this.handleDescription();
    this.handleBuyButton();
    this.handleDiscount();
    this.handleCost();
    this.handleReward();
  };
  AMerchantBuyDialog.prototype.handleBuyButton = function () {
    if (this.packageVO.isAvailable()) {
      S.ButtonHelper.delayEnableButton(this.dialogDisp.btn_ok, true);
      this.dialogDisp.btn_ok.toolTipText = null;
    } else {
      S.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
      if (this.packageVO.isStockLimited) {
        if (this.packageVO.isNotRebuyable) {
          this.dialogDisp.btn_ok.toolTipText = "dialog_shop_soldOut";
        } else {
          this.dialogDisp.btn_ok.toolTipText = "dialog_merchant_outOfStock_tooltip";
        }
      }
    }
  };
  AMerchantBuyDialog.prototype.handleDiscount = function () {
    if (this.dialogDisp.mc_discount) {
      var e = h.int(V.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.packageVO.packageID));
      if (e > 0) {
        this.dialogDisp.mc_discount.visible = true;
        this.tfDiscount.textContentVO.textReplacements = [-e];
      } else {
        this.dialogDisp.mc_discount.visible = false;
      }
    }
  };
  AMerchantBuyDialog.prototype.handleDescription = function () {
    var e;
    if (this.packageVO.isStockLimited) {
      this.tfDesc.textContentVO = new p.LocalizedTextVO(this.COMPOSE_TEXT_ID);
      if (this.packageVO.remainingStock > 1) {
        (e = new p.LocalizedTextVO("shop_limitedPackage_plural")).textReplacements = [this.packageVO.remainingStock];
      } else {
        e = this.packageVO.remainingStock <= 0 ? "dialog_shop_soldOut" : "shop_limitedPackage_singular";
      }
      this.setDescriptionTextParams([new p.LocalizedTextVO(this.packageVO.descriptionTextID, this.packageVO.descriptionParams), e]);
    } else {
      this.tfDesc.textContentVO = new p.LocalizedTextVO(this.packageVO.descriptionTextID, this.packageVO.descriptionParams);
    }
    this.tfDesc.autoFitToBounds = true;
  };
  AMerchantBuyDialog.prototype.setDescriptionText = function (e, t = null) {
    this.tfDesc.textContentVO.textId = e;
    this.setDescriptionTextParams(t);
  };
  AMerchantBuyDialog.prototype.setDescriptionTextParams = function (e = null) {
    this.tfDesc.textContentVO.textReplacements = e;
  };
  AMerchantBuyDialog.prototype.handleCost = function () {
    if (this.dialogDisp.mc_cost) {
      if (this.tfCosts && this.textFieldManager.isTextFieldRegistered(this.dialogDisp.mc_cost.txt_text)) {
        this.textFieldManager.unregisterTextField(this.dialogDisp.mc_cost.txt_text);
        this.tfCosts = null;
      }
      var e = new R.CollectableRenderer(new I.CollectableRenderClips(this.dialogDisp.mc_cost), new T.CollectableRenderOptions(T.CollectableRenderOptions.SET_COST_LIST, this.costIconSize));
      e.updateWithNewVO(this.totalPrice);
      this.collectableRenderList.push(e);
      this.handleTextColor();
      if (this.packageVO.isStockLimited && this.packageVO.remainingStock <= 0) {
        this.dialogDisp.mc_cost.visible = false;
      }
    }
  };
  Object.defineProperty(AMerchantBuyDialog.prototype, "costIconSize", {
    get: function () {
      return C.ClientConstPackages.ICON_SIZE_BUY_COST;
    },
    enumerable: true,
    configurable: true
  });
  AMerchantBuyDialog.prototype.handleReward = function () {
    var e = new T.CollectableRenderOptions(T.CollectableRenderOptions.SET_BASIC, this.rewardIconSize);
    e.tooltip.showEquipmentCountdown = false;
    var t = new R.CollectableRenderer(new I.CollectableRenderClips(this.dialogDisp.mc_reward).addInfoBtn(this.dialogDisp.btn_info), e);
    t.updateWithNewVO(this.packageVO.reward);
    this.collectableRenderList.push(t);
  };
  Object.defineProperty(AMerchantBuyDialog.prototype, "rewardIconSize", {
    get: function () {
      return C.ClientConstPackages.ICON_SIZE_BUY_REWARD;
    },
    enumerable: true,
    configurable: true
  });
  AMerchantBuyDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(b.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    v.CastleModel.specialEventData.addEventListener(y.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChange));
    v.CastleModel.specialEventData.addEventListener(y.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventsChange));
    this.controller.addEventListener(b.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onPriceAffordabilityChanged));
    this.controller.addEventListener(D.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onPriceAffordabilityChanged));
    this.controller.addEventListener(b.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onPriceAffordabilityChanged));
    if (this.packageVO.packageType == C.ClientConstPackages.PACKAGE_TYPE_GEM) {
      this.controller.addEventListener(E.CastleGemEvent.GEM_INVENTORY_UPDATE, this.bindFunction(this.onInventorySpaceData));
    } else if (this.packageVO.packageType == C.ClientConstPackages.PACKAGE_TYPE_ITEM) {
      this.controller.addEventListener(O.CastleEquipmentEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventorySpaceData));
    }
  };
  AMerchantBuyDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(b.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    v.CastleModel.specialEventData.removeEventListener(y.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChange));
    v.CastleModel.specialEventData.removeEventListener(y.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventsChange));
    this.controller.removeEventListener(b.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onPriceAffordabilityChanged));
    this.controller.removeEventListener(D.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onPriceAffordabilityChanged));
    this.controller.removeEventListener(b.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onPriceAffordabilityChanged));
    if (this.packageVO.packageType == C.ClientConstPackages.PACKAGE_TYPE_GEM) {
      this.controller.removeEventListener(E.CastleGemEvent.GEM_INVENTORY_UPDATE, this.bindFunction(this.onInventorySpaceData));
    }
    if (this.packageVO.packageType == C.ClientConstPackages.PACKAGE_TYPE_ITEM) {
      this.controller.removeEventListener(O.CastleEquipmentEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventorySpaceData));
    }
  };
  AMerchantBuyDialog.prototype.onEventsChange = function (e) {
    if (r.instanceOfClass(e.specialEventVO, "EventPackagePrimeSaleEventVO") && e.specialEventVO.packageIDs.indexOf(this.packageVO.packageID) > -1) {
      this.hide();
    }
    if (this.dialogProperties.specialEventVO && e.specialEventVO.eventId == this.dialogProperties.specialEventVO.eventId) {
      this.hide();
    }
  };
  AMerchantBuyDialog.prototype.onPriceAffordabilityChanged = function (e) {
    this.handleTextColor();
  };
  AMerchantBuyDialog.prototype.onLevelUp = function (e) {
    if (v.CastleModel.userData.userLevel > this.packageVO.maxLevel) {
      this.hide();
    }
  };
  AMerchantBuyDialog.prototype.onInventorySpaceData = function (e = null) {
    v.CastleModel.smartfoxClient.sendCommandVO(new m.C2SEquipmentSpaceLeftVO());
  };
  Object.defineProperty(AMerchantBuyDialog.prototype, "dialogTitle", {
    get: function () {
      return _.ClientConstTextIds.BUY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMerchantBuyDialog.prototype, "totalPrice", {
    get: function () {
      var e = this.packageVO.price.clone();
      e.amount = h.int(this.packageVO.price.amount * this.selectedPackagesAmount);
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMerchantBuyDialog.prototype, "packagePrice", {
    get: function () {
      return this.packageVO.price.amount;
    },
    enumerable: true,
    configurable: true
  });
  AMerchantBuyDialog.prototype.canAfford = function () {
    return this.currencyAvailable / (this.selectedPackagesAmount * this.packagePrice) >= 1;
  };
  AMerchantBuyDialog.prototype.handleTextColor = function () {
    this.setCostsTextColor(this.canAfford() ? g.ClientConstColor.FONT_DEFAULT_COLOR : g.ClientConstColor.FONT_INSUFFICIENT_COLOR);
  };
  Object.defineProperty(AMerchantBuyDialog.prototype, "currencyAvailable", {
    get: function () {
      return w.CostHelper.getAvailableGoods(new M.CollectableTypeVO().initByCollectable(this.packageVO.price));
    },
    enumerable: true,
    configurable: true
  });
  AMerchantBuyDialog.prototype.setTitleTextColor = function (e) {
    this.tfTitle.color = e;
  };
  AMerchantBuyDialog.prototype.setCostsTextColor = function (e) {
    if (this.dialogDisp.mc_cost && this.textFieldManager.isTextFieldRegistered(this.dialogDisp.mc_cost.txt_text)) {
      this.textFieldManager.getTextField(this.dialogDisp.mc_cost.txt_text).color = e;
    }
  };
  Object.defineProperty(AMerchantBuyDialog.prototype, "selectedPackagesAmount", {
    get: function () {
      return 1;
    },
    enumerable: true,
    configurable: true
  });
  AMerchantBuyDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (S.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_ok:
          this.onBtnOkClick();
          this.hide();
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_info:
          this.onBtnInfoClick();
      }
    }
  };
  AMerchantBuyDialog.prototype.onBtnOkClick = function () {
    if (this.canAfford() && this.physicalPackageLimit < 1) {
      this.handleNoSpaceLeft();
    } else {
      var e = -1;
      if (this.packageVO.hasCustomPrice) {
        e = this.totalPrice.amount;
      }
      var t = -1;
      var i = h.int(v.CastleModel.kingdomData.activeKingdomID);
      if (this.packageVO.reward.itemType == P.CollectableEnum.BUILDING) {
        t = v.CastleModel.userData.castleList.getCastleVOByID(v.CastleModel.areaData.activeAreaInfo.objectId, i) != null ? h.int(v.CastleModel.areaData.activeAreaInfo.objectId) : h.int(v.CastleModel.userData.castleList.getMainCastleByKingdomID(i).objectId);
      }
      v.CastleModel.smartfoxClient.sendCommandVO(new f.C2SBuyEventPackageVO(this.packageVO.packageID, this.getBuyType(), this.getBuyTypeId(), this.selectedPackagesAmount, i, t, e));
    }
  };
  AMerchantBuyDialog.prototype.getBuyType = function () {
    if (this.dialogProperties.buyType >= 0) {
      return h.int(this.dialogProperties.buyType);
    } else if (this.dialogProperties.privateOfferVO) {
      return h.int(l.PackageConst.BUY_TYPE_PRIVATE_OFFER);
    } else if (this.dialogProperties.specialEventVO) {
      if (r.instanceOfClass(this.dialogProperties.specialEventVO, "BuyPackagesEventVO")) {
        return h.int(this.dialogProperties.specialEventVO.buyType);
      } else {
        return h.int(l.PackageConst.BUY_TYPE_EVENT);
      }
    } else {
      return h.int(l.PackageConst.BUY_TYPE_SLUM);
    }
  };
  AMerchantBuyDialog.prototype.getBuyTypeId = function () {
    if (this.dialogProperties.buyTypeId >= 0) {
      return h.int(this.dialogProperties.buyTypeId);
    }
    switch (this.getBuyType()) {
      case l.PackageConst.BUY_TYPE_EVENT:
        return h.int(this.dialogProperties.specialEventVO.eventId);
      case l.PackageConst.BUY_TYPE_PRIVATE_OFFER:
        return h.int(this.dialogProperties.privateOfferVO.id);
      case l.PackageConst.BUY_TYPE_CRUSADEMAP:
        return h.int(v.CastleModel.specialEventData.activeSeasonVO.mapID);
      default:
        return -1;
    }
  };
  Object.defineProperty(AMerchantBuyDialog.prototype, "physicalPackageLimit", {
    get: function () {
      return Math.min(this.packageVO.remainingStock, this.getPhysicalPackageLimitByType());
    },
    enumerable: true,
    configurable: true
  });
  AMerchantBuyDialog.prototype.getPhysicalPackageLimitByType = function () {
    switch (this.packageVO.packageType) {
      case C.ClientConstPackages.PACKAGE_TYPE_DECO:
      case C.ClientConstPackages.PACKAGE_TYPE_BUILDING:
        return 1;
      case C.ClientConstPackages.PACKAGE_TYPE_GEM:
        return h.int(v.CastleModel.gemData.inventorySpace);
      case C.ClientConstPackages.PACKAGE_TYPE_ITEM:
        return h.int(v.CastleModel.equipData.inventorySpace);
      case C.ClientConstPackages.PACKAGE_TYPE_PLAGUEMONK:
        return h.int(c.SpyConst.MAX_OWNABLE_PLAGUEMONKS - v.CastleModel.spyData.totalPlagueMonks);
      case C.ClientConstPackages.PACKAGE_TYPE_RESOURCES:
        return this.getPhysicalPackageLimitResources();
      case C.ClientConstPackages.PACKAGE_TYPE_VIP:
        return this.getPhysicalPackageLimitVIP();
      case C.ClientConstPackages.PACKAGE_TYPE_SOLDIER:
        return this.getPhysicalPackageLimitSoldier();
      case C.ClientConstPackages.PACKAGE_TYPE_BOOSTER:
        return 1;
      case C.ClientConstPackages.PACKAGE_TYPE_CONSTRUCTION_ITEM:
        return h.int(v.CastleModel.constructionItemData.inventorySpaceLeft);
    }
    return this.packageVO.maxBuyPerClick;
  };
  AMerchantBuyDialog.prototype.getPhysicalPackageLimitSoldier = function () {
    var e;
    var t = 0;
    for (var i = 0, n = this.packageVO.rewards.list; i < n.length; i++) {
      e = n[i];
      t += h.int(e.amount);
    }
    if (this.layoutManager.isInTreasureCamp) {
      return h.int(v.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.getRemainingSoldierCapacity()) / t;
    } else {
      return this.packageVO.maxBuyPerClick;
    }
  };
  AMerchantBuyDialog.prototype.getPhysicalPackageLimitVIP = function () {
    if (this.packageVO.reward.itemType == P.CollectableEnum.VIP_POINTS) {
      return h.int(v.CastleModel.vipData.maxPointPackagesBuyable(h.int(this.packageVO.reward.amount)));
    } else {
      return h.int(v.CastleModel.vipData.maxTimePackagesBuyable(this.packageVO.reward.duration));
    }
  };
  AMerchantBuyDialog.prototype.getPhysicalPackageLimitResources = function () {
    if (this.packageVO.fillAllStorages) {
      return 1;
    }
    if (this.packageVO.ignoreResourceStorageCapacity) {
      return this.packageVO.maxBuyPerClick;
    }
    var e;
    if (this.packageVO.fillUpResourceStorage) {
      for (var t = 0, i = L.ClientConstCollectable.GROUP_LIST_RESOURCES; t < i.length; t++) {
        e = i[t];
        if (this.packageVO.getAmount(e) > 0 && !v.CastleModel.areaData.getActiveStorageItem(e).isFull) {
          return 1;
        }
      }
      return 0;
    }
    var n = this.packageVO.maxBuyPerClick;
    for (var o = 0, a = L.ClientConstCollectable.GROUP_LIST_RESOURCES; o < a.length; o++) {
      e = a[o];
      var s = h.int(this.packageVO.getAmount(e));
      if (s > 0) {
        n = h.int(Math.min(n, v.CastleModel.areaData.getActiveStorageItem(e).freeSpace / s));
      }
    }
    return h.int(Math.max(0, Math.min(this.packageVO.remainingStock, n)));
  };
  AMerchantBuyDialog.prototype.handleNoSpaceLeft = function () {
    var e;
    var t = 0;
    if (this.packageVO.isGiftPackage) {
      e = "alert_giftInventoryFull";
    } else if (this.packageVO.fillUpResourceStorage) {
      e = "dialog_storage_already_full";
    } else if (this.packageVO.isBannerPackage) {
      e = "dialog_storageFull";
    } else if (this.packageVO.packageType == C.ClientConstPackages.PACKAGE_TYPE_GEM) {
      e = (t = h.int(v.CastleModel.gemData.inventorySpace)) <= 0 ? "allyforge_tooltip_inventoryFull_gems" : t == 1 ? "dialog_inventoryFull_gems_singular" : "dialog_inventoryFull_gems";
    } else if (this.packageVO.packageType == C.ClientConstPackages.PACKAGE_TYPE_ITEM) {
      e = (t = h.int(v.CastleModel.equipData.inventorySpace)) <= 0 ? "allyforge_tooltip_inventoryFull_equipment" : t == 1 ? "dialog_inventoryFull_equipment_singular" : "dialog_inventoryFull_equipment";
    } else if (this.packageVO.packageType == C.ClientConstPackages.PACKAGE_TYPE_SOLDIER) {
      e = "alert_no_free_unitSpace";
    } else if (this.packageVO.packageType == C.ClientConstPackages.PACKAGE_TYPE_RESOURCES) {
      var i;
      e = "dialog_storageFull";
      if (this.packageVO.rewards.length == 1) {
        i = this.packageVO.rewards.getItemByIndex(0).itemType;
        t = h.int(v.CastleModel.areaData.getActiveStorageItem(i).freeSpace);
      }
      if (t > 0) {
        e += "_" + i.name;
      }
    } else if (this.packageVO.packageType == C.ClientConstPackages.PACKAGE_TYPE_CONSTRUCTION_ITEM) {
      e = "alert_ci_inventoryFull_copy";
    }
    x.CastleDialogHandler.getInstance().registerDefaultDialogs(B.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(u.Localize.text("generic_alert_watchout", []), u.Localize.text(e, [t])));
  };
  AMerchantBuyDialog.prototype.onBtnInfoClick = function () {};
  Object.defineProperty(AMerchantBuyDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMerchantBuyDialog.prototype, "packageVO", {
    get: function () {
      return this.dialogProperties.eventPackageVO;
    },
    enumerable: true,
    configurable: true
  });
  AMerchantBuyDialog.prototype.destroy = function () {
    if (this.tfCosts) {
      this.textFieldManager.unregisterTextFieldByReference(this.tfCosts);
      this.tfCosts = null;
    }
    e.prototype.destroy.call(this);
  };
  return AMerchantBuyDialog;
}(require("./11.js").CastleExternalDialog);
exports.AMerchantBuyDialog = A;
var L = require("./86.js");
var P = require("./12.js");
var M = require("./74.js");
var R = require("./186.js");
var V = require("./190.js");
var x = require("./9.js");
var w = require("./66.js");
var B = require("./38.js");
s.classImplementsInterfaces(A, "ICollectableRendererList");