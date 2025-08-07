Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./5.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./18.js");
var _ = require("./51.js");
var m = require("./123.js");
var f = require("./572.js");
var O = require("./159.js");
var E = require("./37.js");
var y = require("./31.js");
var b = require("./19.js");
var D = require("./4.js");
var I = require("./371.js");
var T = require("./372.js");
var v = require("./2107.js");
var S = require("./2108.js");
var A = createjs.Point;
var L = function (e) {
  function CastleEventPackagePrimeSaleDialog() {
    var t = this;
    t.showAblePackages = [];
    t._packageTypeID = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleEventPackagePrimeSaleDialog, e);
  CastleEventPackagePrimeSaleDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._quantityComponent = new v.CastlePrimeSaleQuantityComponent(this.dialogDisp.mc_package_container.mc_quantity);
    this.dialogDisp.mc_time.y += CastleEventPackagePrimeSaleDialog.TIME_COMPONENT_OFFSET;
  };
  Object.defineProperty(CastleEventPackagePrimeSaleDialog.prototype, "merchantEvent", {
    get: function () {
      var e = l.castAs(D.CastleModel.specialEventData.getActiveEventBySoldPackage(this.showAblePackages[0]), "BuyPackagesEventVO");
      if (e && D.CastleModel.privateOfferData.isHiddenEvent(e.eventId)) {
        e = null;
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEventPackagePrimeSaleDialog.prototype, "isDiscountedPackageAvailable", {
    get: function () {
      return !!this.merchantEvent || !!this.vipPackages;
    },
    enumerable: true,
    configurable: true
  });
  CastleEventPackagePrimeSaleDialog.prototype.onErrorNoMerchantActive = function () {
    this.hide();
    x.CastleExternalDialog.dialogHandler.registerDefaultDialogs(w.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(d.Localize.text("generic_alert_watchout"), d.Localize.text("Could not find merchant for packageIDs " + this.showAblePackages[0])));
  };
  CastleEventPackagePrimeSaleDialog.prototype.getCharacterName = function () {
    if (this.merchantEvent) {
      return this.merchantEvent.eventFullsizeCharacterName;
    } else if (this.vipPackages) {
      return _.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_SWEET_PRINCESS;
    } else {
      return _.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_HERALD;
    }
  };
  Object.defineProperty(CastleEventPackagePrimeSaleDialog.prototype, "saveRubiesTextID", {
    get: function () {
      if (this.merchantEvent) {
        if (this._packageTypeID == CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST) {
          return "dialog_primesale_savePercentage";
        } else {
          return this.merchantEvent.primesaleSaveRubiesTextID;
        }
      } else {
        return "dialog_privateOffer_whaleChest_rubySave";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEventPackagePrimeSaleDialog.prototype, "descriptionTextID", {
    get: function () {
      switch (this._packageTypeID) {
        case CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST:
        case CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT:
          return this.merchantEvent.primesaleDescriptionTextID;
        case CastleEventPackagePrimeSaleDialog.TYPE_VIP_PACKAGE:
          return "dialog_primeday_primesale_vipPackages_description";
        case CastleEventPackagePrimeSaleDialog.TYPE_VIP_POINTS:
          return "dialog_primeday_primesale_vipPoints_description";
        case CastleEventPackagePrimeSaleDialog.TYPE_VIP_TIME:
          return "dialog_primeday_primesale_vipTime_description";
      }
      return "limitedOffer";
    },
    enumerable: true,
    configurable: true
  });
  CastleEventPackagePrimeSaleDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.dialogProperties.eventVO.canShowDialog()) {
      this.determineDisplayPackageType();
      this.dialogDisp.mc_limited_offer.gotoAndStop(2);
      this.dialogDisp.mc_limited_offer.txt_limited_offer.width = 264;
      this.itxt_percentOff = this.textFieldManager.registerTextField(this.dialogDisp.mc_percentOff.txt_percentOff, new h.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, []));
      this.itxt_oldCosts = this.textFieldManager.registerTextField(this.dialogDisp.mc_old_costs.txt_value, new p.LocalizedNumberVO(0));
      this.itxt_newCosts = this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_value, new p.LocalizedNumberVO(0));
      this.itxt_discountedPackageName = this.textFieldManager.registerTextField(this.dialogDisp.mc_package_container.txt_name, new h.LocalizedTextVO(""));
      this.itxt_limitedOffer = this.textFieldManager.registerTextField(this.dialogDisp.mc_limited_offer.txt_limited_offer, new h.LocalizedTextVO(""));
      this.itxt_discountedPackageName.verticalAlign = a.GGSVerticalAlign.MIDDLE;
      this.dialogDisp.mc_package_container.mc_package.mouseChildren = false;
      this.itxt_limitedOffer.textContentVO.textId = this.saveRubiesTextID;
      var i = D.CastleModel.eventPackageData.getEventPackageByID(this.showAblePackages[0]);
      this.setButtonCentered(this._packageTypeID == CastleEventPackagePrimeSaleDialog.TYPE_VIP_PACKAGE || this._packageTypeID == CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST);
      this.dialogDisp.mc_package_container.visible = this._packageTypeID != CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST;
      this.dialogDisp.prime_sale_list.visible = this._packageTypeID == CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST;
      this.showCostsAndDiscounts(i);
      this.showPackage(i);
      this.dialogDisp.mc_costs.mouseChildren = false;
      this.dialogDisp.mc_costs.toolTipText = "dialog_privateOffer_whaleChest_newPrice";
      this.dialogDisp.mc_old_costs.mouseChildren = false;
      this.dialogDisp.mc_old_costs.toolTipText = d.Localize.text("dialog_primeday_primesale_saveCosts", [this.dialogProperties.eventVO.discount]);
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new h.LocalizedTextVO(this.descriptionTextID));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_offer, new h.LocalizedTextVO("dialog_specialOfferDeco_title"));
      this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_buy, new h.LocalizedTextVO("dialog_questInfo_showMe"));
      this.textFieldManager.registerTextField(this.dialogDisp.btn_show_me.txt_value, new h.LocalizedTextVO("dialog_questInfo_showMe"));
    } else {
      this.hide();
    }
  };
  CastleEventPackagePrimeSaleDialog.prototype.hideLoaded = function (t = null) {
    if (this.rewardRenderer) {
      this.rewardRenderer.destroy();
    }
    if (this.sliderList) {
      this.sliderList.remove();
      this.sliderList.clear();
    }
    e.prototype.hideLoaded.call(this, t);
  };
  CastleEventPackagePrimeSaleDialog.prototype.getRemainingTime = function () {
    return g.int(this.dialogProperties.eventVO.remainingEventTimeInSeconds);
  };
  CastleEventPackagePrimeSaleDialog.prototype.timeToString = function (e) {
    return new h.LocalizedTextVO("dialog_primeday_specialoffer_endTimer", [N.CastleTimeStringHelper.getEventTimeString(e)]);
  };
  CastleEventPackagePrimeSaleDialog.prototype.showCostsAndDiscounts = function (e) {
    var t;
    t = this._packageTypeID == CastleEventPackagePrimeSaleDialog.TYPE_VIP_PACKAGE ? new h.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE, [new p.LocalizedNumberVO(this.dialogProperties.eventVO.discount)]) : this._packageTypeID == CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST ? new p.LocalizedNumberVO(this.dialogProperties.eventVO.discount) : new p.LocalizedNumberVO(e.basicPriceC2 - e.priceC2);
    this.itxt_oldCosts.textContentVO.numberValue = e.basicPriceC2;
    this.itxt_newCosts.textContentVO.numberValue = e.priceC2;
    this.itxt_limitedOffer.textContentVO.textReplacements = [t];
    this.itxt_percentOff.textContentVO.textReplacements = [this.dialogProperties.eventVO.discount];
    this.dialogDisp.mc_cross.visible = this._packageTypeID != CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST;
    this.dialogDisp.mc_old_costs.visible = this._packageTypeID != CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST;
    this.dialogDisp.mc_costs.visible = this._packageTypeID != CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST;
    this.dialogDisp.btn_ok.visible = this._packageTypeID != CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST;
    this.dialogDisp.btn_show_me.visible = this._packageTypeID == CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST;
    this.setButtonCentered(this._packageTypeID == CastleEventPackagePrimeSaleDialog.TYPE_VIP_PACKAGE || this._packageTypeID == CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST);
  };
  Object.defineProperty(CastleEventPackagePrimeSaleDialog.prototype, "vipPackages", {
    get: function () {
      return this.getEventPackageVOs(m.ClientConstPackages.PACKAGE_TYPE_VIP);
    },
    enumerable: true,
    configurable: true
  });
  CastleEventPackagePrimeSaleDialog.prototype.getEventPackageVOs = function (e = null) {
    var t = [];
    if (this.showAblePackages != null) {
      for (var i = 0, n = this.showAblePackages; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = D.CastleModel.eventPackageData.getEventPackageByID(o);
          if (a) {
            if (e == null || a.packageType == e) {
              t.push(a);
            }
          }
        }
      }
    }
    if (t.length > 0) {
      return t;
    } else {
      return null;
    }
  };
  CastleEventPackagePrimeSaleDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (this.dialogProperties.eventVO && e.specialEventVO.eventId == this.dialogProperties.eventVO.eventId) {
      this.hide();
    }
    if (!this.isDiscountedPackageAvailable) {
      this.hide();
    }
  };
  CastleEventPackagePrimeSaleDialog.prototype.showEventPackageList = function () {
    if (this.sliderList) {
      this.sliderList.resetItems();
    }
    this.sliderList = new V.SimpleScrollItemList(this.dialogDisp.prime_sale_list, null, 1);
    this.sliderList.scrollItemClass = F.CastlePrimeSaleScrollItem;
    for (var e = 0; e < this.showAblePackages.length; e++) {
      var t = new S.CastlePrimeSaleScrollItemVO(this.showAblePackages[e], this.dialogProperties.eventVO.discount);
      this.sliderList.pushContent(t);
    }
    this.sliderList.initList();
  };
  CastleEventPackagePrimeSaleDialog.prototype.showPackage = function (e) {
    this._eventPackageVO = e;
    if (this._packageTypeID == CastleEventPackagePrimeSaleDialog.TYPE_VIP_PACKAGE) {
      this.showVIPPackage();
    } else if (this._packageTypeID == CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST) {
      this.showEventPackageList();
    } else {
      this.showEventPackage();
    }
  };
  CastleEventPackagePrimeSaleDialog.prototype.showEventPackage = function () {
    this.dialogDisp.mc_package_container.gotoAndStop(1);
    var e = this.dialogDisp.mc_package_container.mc_package;
    var t = new A(e.width, e.height);
    var i = new y.CollectableRenderClips(e);
    i.addIconMc(e.mc_icon);
    i.addInfoBtn(this.dialogDisp.mc_package_container.btn_info);
    if (this.rewardRenderer) {
      this.rewardRenderer.destroy();
    }
    this.rewardRenderer = new M.CollectableRenderer(i, new b.CollectableRenderOptions(b.CollectableRenderOptions.SET_BASIC, t));
    this.rewardRenderer.updateWithNewVO(this._eventPackageVO.reward);
    this.itxt_discountedPackageName.textContentVO.textId = this._eventPackageVO.nameTextID;
    this.itxt_discountedPackageName.textContentVO.textReplacements = this._eventPackageVO.nameParams;
    this._quantityComponent.update(this._eventPackageVO);
  };
  CastleEventPackagePrimeSaleDialog.prototype.showVIPPackage = function () {
    this.dialogDisp.mc_package_container.gotoAndStop(2);
    var e = this.dialogDisp.mc_package_container.mc_package;
    var t = this.dialogDisp.mc_package_container.mc_package2;
    this.dialogDisp.mc_package_container.btn_info.visible = false;
    var i = new Library.CastleInterfaceElements_Icons.Icon_VipPoints_Big();
    r.MovieClipHelper.scaleToFit(i, 65, 50);
    var n = new Library.CastleInterfaceElements_Icons.Icon_VipTime();
    r.MovieClipHelper.scaleToFit(n, 75, 70);
    n.y = 7;
    r.MovieClipHelper.clearMovieClip(e.mc_icon);
    e.mc_icon.addChild(i);
    e.mouseChildren = false;
    e.toolTipText = "dialog_VipScreen_premiumPoints_v2";
    r.MovieClipHelper.clearMovieClip(t.mc_icon);
    t.mc_icon.addChild(n);
    t.mouseChildren = false;
    t.toolTipText = "dialog_VipScreen_vipTime";
    this.itxt_discountedPackageName.textContentVO.textId = "dialog_primeday_primesale_vipPackages_packageHeader";
  };
  CastleEventPackagePrimeSaleDialog.prototype.determineDisplayPackageType = function () {
    this.showAblePackages = this.dialogProperties.eventVO.showAblePackageIDs;
    var e = this.getEventPackageVOs();
    if (e && e[0].packageType == m.ClientConstPackages.PACKAGE_TYPE_VIP) {
      if (e.length > 1) {
        this._packageTypeID = CastleEventPackagePrimeSaleDialog.TYPE_VIP_PACKAGE;
      } else if (e[0].reward.itemType == P.CollectableEnum.VIP_POINTS) {
        this._packageTypeID = CastleEventPackagePrimeSaleDialog.TYPE_VIP_POINTS;
      } else if (e[0].reward.itemType == P.CollectableEnum.VIP_TIME) {
        this._packageTypeID = CastleEventPackagePrimeSaleDialog.TYPE_VIP_TIME;
      }
    } else if (this.merchantEvent) {
      if (this.showAblePackages.length > 1) {
        this._packageTypeID = CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST;
      } else {
        this._packageTypeID = CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT;
      }
    } else {
      this._packageTypeID = CastleEventPackagePrimeSaleDialog.TYPE_NONE;
    }
  };
  CastleEventPackagePrimeSaleDialog.prototype.onOkButton = function () {
    if (this.merchantEvent) {
      this.handleMerchantShowMe();
    } else if (this.vipPackages) {
      CastleEventPackagePrimeSaleDialog.handleVIPShowMe();
    } else {
      this.onErrorNoMerchantActive();
    }
    this.hide();
  };
  CastleEventPackagePrimeSaleDialog.handleVIPShowMe = function () {
    x.CastleExternalDialog.dialogHandler.registerDefaultDialogs(B.CastlePremiumMarketPlaceDialog, new I.CastlePremiumMarketPlaceDialogProperties(C.ClientConstCastle.CATEGORY_MARKETPLACE_VIP));
  };
  CastleEventPackagePrimeSaleDialog.prototype.handleMerchantShowMe = function () {
    var e;
    var t = this.merchantEvent;
    var i = D.CastleModel.areaData.activeArea.isMyArea && !!t && t.allowedAreaTypes.indexOf(D.CastleModel.areaData.activeAreaInfo.areaType) != -1;
    var n = false;
    var o = true;
    if (!!t && t.kingdomIDs.indexOf(D.CastleModel.kingdomData.activeKingdomID) != -1) {
      if (i) {
        if (this.layoutManager.isOnMap) {
          e = D.CastleModel.areaData.activeAreaInfo;
        } else {
          o = false;
        }
      } else if (t.allowedAreaTypes[0] == u.WorldConst.AREA_TYPE_TREASURE_CAMP) {
        n = true;
      } else {
        e = D.CastleModel.userData.castleList.getMainCastleByKingdomID(D.CastleModel.kingdomData.activeKingdomID);
      }
    } else {
      e = D.CastleModel.userData.castleList.getMainCastleByKingdomID(t.kingdomIDs[0]);
    }
    if (o) {
      this.controller.addEventListener(E.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onSwitchedToMerchantLocation));
      if (n && D.CastleModel.specialEventData.activeSeasonVO) {
        if (D.CastleModel.specialEventData.activeSeasonVO.isLocked) {
          D.CastleModel.specialEventData.activeSeasonVO.openDialog();
        } else {
          if (R.FlashBlockHelper.checkFlashBlock(D.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID)) {
            return;
          }
          D.CastleModel.smartfoxClient.sendCommandVO(new f.C2SJoinCampVO(D.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID));
        }
      } else {
        if (!e) {
          return;
        }
        if (R.FlashBlockHelper.checkFlashBlock(e.kingdomID)) {
          return;
        }
        D.CastleModel.smartfoxClient.sendCommandVO(new O.C2SJoinCastleVO(e.objectId, e.kingdomID));
      }
    } else {
      t.openMerchantDialog(true, this.showAblePackages[0]);
    }
  };
  CastleEventPackagePrimeSaleDialog.prototype.onSwitchedToMerchantLocation = function (e) {
    this.controller.removeEventListener(E.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onSwitchedToMerchantLocation));
    this.merchantEvent.openMerchantDialog(true, this.showAblePackages[0]);
  };
  Object.defineProperty(CastleEventPackagePrimeSaleDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleEventPackagePrimeSaleDialog.prototype.isEvent = function () {
    return true;
  };
  CastleEventPackagePrimeSaleDialog.NAME = "CastleEventPackagePrimeSalesDialogExternal";
  CastleEventPackagePrimeSaleDialog.TIME_COMPONENT_OFFSET = 15;
  CastleEventPackagePrimeSaleDialog.TYPE_NONE = -1;
  CastleEventPackagePrimeSaleDialog.TYPE_VIP_TIME = 0;
  CastleEventPackagePrimeSaleDialog.TYPE_VIP_POINTS = 1;
  CastleEventPackagePrimeSaleDialog.TYPE_VIP_PACKAGE = 2;
  CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT = 3;
  CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST = 4;
  return CastleEventPackagePrimeSaleDialog;
}(T.CastleAbstractPrimeSaleDialog);
exports.CastleEventPackagePrimeSaleDialog = L;
var P = require("./12.js");
var M = require("./186.js");
var R = require("./160.js");
var V = require("./2109.js");
var x = require("./11.js");
var w = require("./38.js");
var B = require("./315.js");
var F = require("./2618.js");
var N = require("./27.js");
c.classImplementsInterfaces(L, "ICollectableRendererList");