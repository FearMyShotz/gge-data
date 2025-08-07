Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./123.js");
var d = require("./698.js");
var p = require("./4.js");
var h = require("./8.js");
var g = function (e) {
  function ModernPackageShopBuyElementBottomMenu() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ModernPackageShopBuyElementBottomMenu, e);
  ModernPackageShopBuyElementBottomMenu.prototype.init = function (t) {
    e.prototype.init.call(this, t);
    h.ButtonHelper.initButtons([this.disp.btn_cancel, this.disp.btn_ok], L.ClickFeedbackButtonHover, 1);
  };
  ModernPackageShopBuyElementBottomMenu.prototype.update = function () {
    e.prototype.update.call(this);
    this.updateBuyButton();
  };
  ModernPackageShopBuyElementBottomMenu.prototype.updateBuyButton = function () {
    var e = this.parentDialog.dialogProperties.eventPackageVO;
    if (e.isAvailable()) {
      var t = this.parentDialog.getElement(O.ModernPackageShopBuyElementEnum.COSTS);
      if (t && t.getMaxBuyablePackages() <= 0 && C.ClientConstCollectable.GROUP_LIST_BASIC_CURRENCY.indexOf(this.packageVO.price.itemType) < 0) {
        h.ButtonHelper.enableButton(this.disp.btn_ok, false);
        if (t.getMaxBuyablePackages(false) <= 0) {
          this.disp.btn_ok.toolTipText = "dialog_notEnoughCurrency_title";
        } else if (t.getInventorySpaceLeft() <= 0) {
          this.disp.btn_ok.toolTipText = "errorCode_152";
        }
      } else {
        h.ButtonHelper.delayEnableButton(this.disp.btn_ok, true);
        this.disp.btn_ok.toolTipText = null;
      }
    } else {
      h.ButtonHelper.enableButton(this.disp.btn_ok, false);
      if (e.isStockLimited) {
        if (e.isNotRebuyable) {
          this.disp.btn_ok.toolTipText = "dialog_shop_soldOut";
        } else {
          this.disp.btn_ok.toolTipText = "dialog_merchant_outOfStock_tooltip";
        }
      }
    }
  };
  ModernPackageShopBuyElementBottomMenu.prototype.handleNoSpaceLeft = function () {
    var e;
    var t = 0;
    if (this.packageVO.isGiftPackage) {
      e = "alert_giftInventoryFull";
    } else if (this.packageVO.fillUpResourceStorage) {
      e = "dialog_storage_already_full";
    } else if (this.packageVO.isBannerPackage) {
      e = "dialog_storageFull";
    } else if (this.packageVO.packageType == u.ClientConstPackages.PACKAGE_TYPE_GEM) {
      e = (t = c.int(p.CastleModel.gemData.inventorySpace)) <= 0 ? "allyforge_tooltip_inventoryFull_gems" : t == 1 ? "dialog_inventoryFull_gems_singular" : "dialog_inventoryFull_gems";
    } else if (this.packageVO.packageType == u.ClientConstPackages.PACKAGE_TYPE_ITEM || this.packageVO.packageType == u.ClientConstPackages.PACKAGE_TYPE_RELIC_ITEM) {
      e = (t = c.int(p.CastleModel.equipData.inventorySpace)) <= 0 ? "allyforge_tooltip_inventoryFull_equipment" : t == 1 ? "dialog_inventoryFull_equipment_singular" : "dialog_inventoryFull_equipment";
    } else if (this.packageVO.packageType == u.ClientConstPackages.PACKAGE_TYPE_SOLDIER) {
      e = "alert_no_free_unitSpace";
    } else if (this.packageVO.packageType == u.ClientConstPackages.PACKAGE_TYPE_RESOURCES) {
      var i;
      e = "dialog_storageFull";
      if (this.packageVO.rewards.length == 1) {
        i = this.packageVO.rewards.getItemByIndex(0).itemType;
        t = c.int(p.CastleModel.areaData.getActiveStorageItem(i).freeSpace);
      }
      if (t > 0) {
        e += "_" + i.name;
      }
    } else if (this.packageVO.packageType == u.ClientConstPackages.PACKAGE_TYPE_CONSTRUCTION_ITEM) {
      e = "alert_ci_inventoryFull_copy";
    } else if (this.packageVO.packageType == u.ClientConstPackages.PACKAGE_TYPE_VIP) {
      e = this.packageVO.reward.itemType == _.CollectableEnum.VIP_POINTS ? "dialog_buyVipPoints_maxAmountTotal_v2" : "dialog_buyVipTime_maxAmount";
    }
    m.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(f.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(l.Localize.text("generic_alert_watchout", []), l.Localize.text(e, [t])), A.CastleDialogConsts.DIALOG_TYPE_MODAL);
  };
  ModernPackageShopBuyElementBottomMenu.prototype.getBuyType = function () {
    if (this.dialogProperties.buyType >= 0) {
      return c.int(this.dialogProperties.buyType);
    } else if (this.dialogProperties.privateOfferVO) {
      return c.int(r.PackageConst.BUY_TYPE_PRIVATE_OFFER);
    } else if (this.dialogProperties.specialEventVO) {
      if (E.instanceOfClass(this.dialogProperties.specialEventVO, "BuyPackagesEventVO")) {
        return c.int(this.dialogProperties.specialEventVO.buyType);
      } else {
        return c.int(r.PackageConst.BUY_TYPE_EVENT);
      }
    } else {
      return c.int(r.PackageConst.BUY_TYPE_SLUM);
    }
  };
  ModernPackageShopBuyElementBottomMenu.prototype.getBuyTypeId = function () {
    if (this.dialogProperties.buyTypeId >= 0) {
      return c.int(this.dialogProperties.buyTypeId);
    }
    switch (this.getBuyType()) {
      case r.PackageConst.BUY_TYPE_EVENT:
        return c.int(this.dialogProperties.specialEventVO.eventId);
      case r.PackageConst.BUY_TYPE_PRIVATE_OFFER:
        return c.int(this.dialogProperties.privateOfferVO.id);
      case r.PackageConst.BUY_TYPE_CRUSADEMAP:
        return c.int(p.CastleModel.specialEventData.activeSeasonVO.mapID);
      default:
        return -1;
    }
  };
  Object.defineProperty(ModernPackageShopBuyElementBottomMenu.prototype, "physicalPackageLimit", {
    get: function () {
      return Math.min(this.packageVO.remainingStock, this.getPhysicalPackageLimitByType());
    },
    enumerable: true,
    configurable: true
  });
  ModernPackageShopBuyElementBottomMenu.prototype.getPhysicalPackageLimitByType = function () {
    switch (this.packageVO.packageType) {
      case u.ClientConstPackages.PACKAGE_TYPE_DECO:
      case u.ClientConstPackages.PACKAGE_TYPE_BUILDING:
        return this.packageVO.remainingStock;
      case u.ClientConstPackages.PACKAGE_TYPE_GEM:
        return c.int(p.CastleModel.gemData.inventorySpace);
      case u.ClientConstPackages.PACKAGE_TYPE_ITEM:
      case u.ClientConstPackages.PACKAGE_TYPE_RELIC_ITEM:
        return c.int(p.CastleModel.equipData.inventorySpace);
      case u.ClientConstPackages.PACKAGE_TYPE_PLAGUEMONK:
        return c.int(s.SpyConst.MAX_OWNABLE_PLAGUEMONKS - p.CastleModel.spyData.totalPlagueMonks);
      case u.ClientConstPackages.PACKAGE_TYPE_RESOURCES:
        return this.getPhysicalPackageLimitResources();
      case u.ClientConstPackages.PACKAGE_TYPE_VIP:
        return this.getPhysicalPackageLimitVIP();
      case u.ClientConstPackages.PACKAGE_TYPE_SOLDIER:
        return this.getPhysicalPackageLimitSoldier();
      case u.ClientConstPackages.PACKAGE_TYPE_CONSTRUCTION_ITEM:
        return c.int(p.CastleModel.constructionItemData.inventorySpaceLeft);
    }
    return this.packageVO.maxBuyPerClick;
  };
  ModernPackageShopBuyElementBottomMenu.prototype.getPhysicalPackageLimitSoldier = function () {
    var e;
    var t = 0;
    for (var i = 0, n = this.packageVO.rewards.list; i < n.length; i++) {
      e = n[i];
      t += c.int(e.amount);
    }
    if (m.CastleComponent.layoutManager.isInTreasureCamp) {
      return c.int(p.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.getRemainingSoldierCapacity()) / t;
    } else {
      return this.packageVO.maxBuyPerClick;
    }
  };
  ModernPackageShopBuyElementBottomMenu.prototype.getPhysicalPackageLimitVIP = function () {
    if (this.packageVO.reward.itemType == _.CollectableEnum.VIP_POINTS) {
      return c.int(p.CastleModel.vipData.maxPointPackagesBuyable(this.packageVO.reward.amount));
    } else {
      return c.int(p.CastleModel.vipData.maxTimePackagesBuyable(this.packageVO.reward.duration));
    }
  };
  ModernPackageShopBuyElementBottomMenu.prototype.getPhysicalPackageLimitResources = function () {
    if (this.packageVO.fillAllStorages) {
      return 1;
    }
    if (this.packageVO.ignoreResourceStorageCapacity) {
      return this.packageVO.maxBuyPerClick;
    }
    var e;
    if (this.packageVO.fillUpResourceStorage) {
      for (var t = 0, i = C.ClientConstCollectable.GROUP_LIST_RESOURCES; t < i.length; t++) {
        e = i[t];
        if (this.packageVO.getAmount(e) > 0 && !p.CastleModel.areaData.getActiveStorageItem(e).isFull) {
          return 1;
        }
      }
      return 0;
    }
    var n = this.packageVO.maxBuyPerClick;
    for (var o = 0, a = C.ClientConstCollectable.GROUP_LIST_RESOURCES; o < a.length; o++) {
      e = a[o];
      var s = c.int(this.packageVO.getAmount(e));
      if (s > 0) {
        n = c.int(Math.min(n, p.CastleModel.areaData.getActiveStorageItem(e).freeSpace / s));
      }
    }
    return c.int(Math.max(0, Math.min(this.packageVO.remainingStock, n)));
  };
  ModernPackageShopBuyElementBottomMenu.prototype.onClick = function (t) {
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.disp.btn_cancel:
          this.parentDialog.hide();
          break;
        case this.disp.btn_ok:
          this.onOfferAccepted();
      }
    }
  };
  ModernPackageShopBuyElementBottomMenu.prototype.onOfferAccepted = function () {
    var e = this.parentDialog.getElement(O.ModernPackageShopBuyElementEnum.COSTS);
    var t = !e || e.getMaxBuyablePackages() > 0;
    var i = this.parentDialog.getElement(O.ModernPackageShopBuyElementEnum.AMOUNT);
    var n = c.int(i ? i.getSelectedPackageAmount() : 1);
    var o = P.CastleEquipmentInventoryFullDialog.getAmountOverMax(this.dialogProperties.eventPackageVO, true);
    var a = P.CastleEquipmentInventoryFullDialog.getAmountOverMax(this.dialogProperties.eventPackageVO, false);
    if (this.packageVO.packageType == u.ClientConstPackages.PACKAGE_TYPE_BUNDLE && (o > 0 || a > 0)) {
      D.CastleDialogHandler.getInstance().registerDefaultDialogs(P.CastleEquipmentInventoryFullDialog, new M.CastleEquipmentInventoryFullDialogProperties(this.dialogProperties.eventPackageVO));
    } else if ((t || e && e.getMaxBuyablePackages() == 0) && this.physicalPackageLimit < Math.max(n, 1)) {
      this.handleNoSpaceLeft();
    } else {
      var s = -1;
      if (this.packageVO.hasCustomPrice) {
        s = this.packageVO.price.amount * n;
      }
      var r = -1;
      var l = c.int(p.CastleModel.kingdomData.activeKingdomID);
      if (this.packageVO.reward.itemType == _.CollectableEnum.BUILDING) {
        r = p.CastleModel.userData.castleList.getCastleVOByID(p.CastleModel.areaData.activeAreaInfo.objectId, l) != null ? c.int(p.CastleModel.areaData.activeAreaInfo.objectId) : c.int(p.CastleModel.userData.castleList.getMainCastleByKingdomID(l).objectId);
      }
      if (this.packageVO instanceof y.PrivateBestsellerShopPackageVO) {
        if (t || this.packageVO.price.itemType != _.CollectableEnum.C1) {
          if (t || this.packageVO.price.itemType != _.CollectableEnum.C2) {
            p.CastleModel.smartfoxClient.sendCommandVO(new b.C2SBuyBestsellerOfferVO(this.dialogProperties.privateOfferVO.id, n, this.packageVO.parentOfferID));
          } else {
            D.CastleDialogHandler.getInstance().registerDefaultDialogs(S.CastleNoMoneyC2Dialog, new I.CastleNoMoneyC2DialogProperties());
          }
        } else {
          D.CastleDialogHandler.getInstance().registerDefaultDialogs(v.CastleNoMoneyC1Dialog, new T.CastleNoMoneyC1DialogProperties());
        }
      } else {
        p.CastleModel.smartfoxClient.sendCommandVO(new d.C2SBuyEventPackageVO(this.packageVO.packageID, this.getBuyType(), this.getBuyTypeId(), n, l, r, s));
      }
      this.parentDialog.hide();
    }
  };
  Object.defineProperty(ModernPackageShopBuyElementBottomMenu.prototype, "packageVO", {
    get: function () {
      return this.parentDialog.dialogProperties.eventPackageVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernPackageShopBuyElementBottomMenu.prototype, "dialogProperties", {
    get: function () {
      return this.parentDialog.dialogProperties;
    },
    enumerable: true,
    configurable: true
  });
  return ModernPackageShopBuyElementBottomMenu;
}(require("./431.js").AModernPackageShopBuyElement);
exports.ModernPackageShopBuyElementBottomMenu = g;
var C = require("./86.js");
var _ = require("./12.js");
var m = require("./14.js");
var f = require("./38.js");
var O = require("./591.js");
a.classImplementsInterfaces(g, "ICollectableRendererList");
var E = require("./1.js");
var y = require("./1260.js");
var b = require("./2215.js");
var D = require("./9.js");
var I = require("./135.js");
var T = require("./351.js");
var v = require("./352.js");
var S = require("./138.js");
var A = require("./43.js");
var L = require("./20.js");
var P = require("./2216.js");
var M = require("./2217.js");