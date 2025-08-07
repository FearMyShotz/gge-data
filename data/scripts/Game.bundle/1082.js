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
var u = require("./1.js");
var d = require("./5.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./5.js");
var C = require("./5.js");
var _ = require("./3.js");
var m = require("./3.js");
var f = require("./3.js");
var O = require("./3.js");
var E = require("./6.js");
var y = require("./18.js");
var b = require("./60.js");
var D = require("./3645.js");
var I = require("./159.js");
var T = require("./37.js");
var v = require("./1740.js");
var S = require("./4.js");
var A = require("./372.js");
var L = function (e) {
  function CastlePrimeSaleDialog() {
    var t = this;
    t.kingdomSortOrder = [];
    t.mainCastles = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastlePrimeSaleDialog, e);
  CastlePrimeSaleDialog.prototype.initSortArrays = function () {
    var e = E.int(S.CastleModel.kingdomData.activeKingdomID);
    this.mainCastles = [];
    this.kingdomSortOrder = [];
    if (S.CastleModel.kingdomData.activeKingdomID != C.WorldVolcano.KINGDOM_ID && S.CastleModel.userData.castleList.getMainCastleByKingdomID(C.WorldVolcano.KINGDOM_ID)) {
      this.mainCastles.push(S.CastleModel.userData.castleList.getMainCastleByKingdomID(C.WorldVolcano.KINGDOM_ID).objectId);
      this.kingdomSortOrder.push(C.WorldVolcano.KINGDOM_ID);
    }
    if (S.CastleModel.kingdomData.activeKingdomID != h.WorldDessert.KINGDOM_ID && S.CastleModel.userData.castleList.getMainCastleByKingdomID(h.WorldDessert.KINGDOM_ID)) {
      this.mainCastles.push(S.CastleModel.userData.castleList.getMainCastleByKingdomID(h.WorldDessert.KINGDOM_ID).objectId);
      this.kingdomSortOrder.push(h.WorldDessert.KINGDOM_ID);
    }
    if (S.CastleModel.kingdomData.activeKingdomID != g.WorldIce.KINGDOM_ID && S.CastleModel.userData.castleList.getMainCastleByKingdomID(g.WorldIce.KINGDOM_ID)) {
      this.mainCastles.push(S.CastleModel.userData.castleList.getMainCastleByKingdomID(g.WorldIce.KINGDOM_ID).objectId);
      this.kingdomSortOrder.push(g.WorldIce.KINGDOM_ID);
    }
    if (S.CastleModel.kingdomData.activeKingdomID != p.WorldClassic.KINGDOM_ID && S.CastleModel.userData.castleList.getMainCastleByKingdomID(p.WorldClassic.KINGDOM_ID)) {
      this.mainCastles.push(S.CastleModel.userData.castleList.getMainCastleByKingdomID(p.WorldClassic.KINGDOM_ID).objectId);
      this.kingdomSortOrder.push(p.WorldClassic.KINGDOM_ID);
    }
    if (S.CastleModel.userData.castleList.getMainCastleByKingdomID(e)) {
      this.mainCastles.push(S.CastleModel.userData.castleList.getMainCastleByKingdomID(e).objectId);
    }
    this.kingdomSortOrder.push(d.FactionConst.KINGDOM_ID);
    if (e != d.FactionConst.KINGDOM_ID) {
      this.kingdomSortOrder.push(e);
    }
  };
  CastlePrimeSaleDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.initSortArrays();
    this._discountedItem = this.primeSaleComponent.buildingVO;
    var i = this.isPrimeSaleUpgradeComponent ? _.Localize.text(a.GenericTextIds.VALUE_PERCENTAGE, [this.primeSaleComponent.discount]) : _.Localize.integer(this._discountedItem.basicCostC2 - this.primeSaleComponent.finalePriceC2);
    var n = this.isPrimeSaleUpgradeComponent ? "dialog_primeday_primesale_allLevels" : "building_level";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new f.LocalizedTextVO(CastlePrimeSaleDialog.DIALOG_COPY));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_offer, new f.LocalizedTextVO(CastlePrimeSaleDialog.DIALOG_TITLE));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_buy, new f.LocalizedTextVO(CastlePrimeSaleDialog.DIALOG_OK_BUTTON_TEXT));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_limited_offer.txt_limited_offer, new f.LocalizedTextVO(CastlePrimeSaleDialog.LIMITED_OFFER, [new O.TextVO(i)]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_percentOff.txt_percentOff, new f.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this.primeSaleComponent.discount]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_value, new m.LocalizedNumberVO(this.primeSaleComponent.finalePriceC2));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_old_costs.txt_value, new m.LocalizedNumberVO(this._discountedItem.costC2));
    var o = this.textFieldManager.registerTextField(this.dialogDisp.mc_buildingClip.txt_name, new f.LocalizedTextVO(this._discountedItem.getNameString()));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_buildingClip.txt_level, new f.LocalizedTextVO(n, [this._discountedItem.level]));
    if (this.primeSaleComponent.buildingVO.buildingGroundType == y.ClientConstCastle.BUILDINGGROUND_TYPE_DECO) {
      this.dialogDisp.mc_buildingClip.txt_level.visible = false;
      o.textContentVO = new f.LocalizedTextVO(this._discountedItem.name.toLowerCase() + "_" + this._discountedItem.type.toLowerCase() + "_name");
    } else {
      this.dialogDisp.mc_buildingClip.txt_level.visible = true;
    }
    this.dialogDisp.mc_buildingClip.visible = true;
    this.showBuilding();
    this.setButtonCentered(this.isPrimeSaleUpgradeComponent);
    this.dialogDisp.mc_costs.mouseChildren = false;
    this.dialogDisp.mc_costs.toolTipText = A.CastleAbstractPrimeSaleDialog.SPECIAL_PRICE;
    this.dialogDisp.mc_old_costs.mouseChildren = false;
    this.dialogDisp.mc_old_costs.toolTipText = _.Localize.text(A.CastleAbstractPrimeSaleDialog.SAVE_COSTS, [this.primeSaleComponent.discount]);
  };
  CastlePrimeSaleDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (this.dialogProperties && this.dialogProperties.eventVO && e.specialEventVO.eventId == this.dialogProperties.eventVO.eventId) {
      this.hide();
    }
  };
  CastlePrimeSaleDialog.prototype.onRemoveOffer = function (e) {
    if (this.isPrivateOffer_0 && e.offerVO == this.dialogPropertiesPrivateOffer.offerVO) {
      this.hide();
    }
  };
  CastlePrimeSaleDialog.prototype.showBuilding = function () {
    var e = this.dialogDisp.mc_buildingClip.mc_holderclip;
    s.MovieClipHelper.clearMovieClip(e);
    var t = "";
    if (u.instanceOfClass(this._discountedItem, "FactionPMoatMoatVO") || u.instanceOfClass(this._discountedItem, "FactionMoatMoatVO")) {
      t = S.CastleModel.kingdomData.getKingdomVOByID(d.FactionConst.KINGDOM_ID).kingdomName;
    } else if (u.instanceOfClass(this._discountedItem, "PremiumMoatVO") && S.CastleModel.kingdomData.activeKingdomID == d.FactionConst.KINGDOM_ID) {
      t = S.CastleModel.kingdomData.getKingdomVOByID(p.WorldClassic.KINGDOM_ID).kingdomName;
    }
    if (this.isPrimeSaleUpgradeComponent) {
      x.WodPicHelper.addWodPic(this.primeSaleComponent.highestLevelOfBuilding(), e, 180, 85, t);
    } else {
      x.WodPicHelper.addWodPic(this._discountedItem, e, 180, 85, t);
    }
    e.mouseChildren = false;
  };
  CastlePrimeSaleDialog.prototype.centerAndHighlightBuildingInShop = function () {
    P.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
    var e = l.castAs(this.layoutManager.getPanel(w.CastleDecoShopPanel), "CastleDecoShopPanel");
    if (e) {
      if (!e.centerAndHighlightBuildingInShop(this.primeSaleComponent.buildingVO.getLowestDowngradeVO())) {
        B.CastleExternalDialog.dialogHandler.registerDefaultDialogs(F.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(_.Localize.text("dialog_primeday_primesale_warningTitle"), _.Localize.text("dialog_primeday_primesale_warning")));
      }
    }
  };
  CastlePrimeSaleDialog.prototype.centerAndShowRingMenuOnBuilding = function (e) {
    var t = P.Iso.renderer.objects.provider.getObjectById(e);
    if (!u.instanceOfClass(t, "BasicMoatVE") && !u.instanceOfClass(t, "PremiumMoatVE") && !u.instanceOfClass(t, "FactionMoatMoatVE") && !u.instanceOfClass(t, "FactionPMoatMoatVE")) {
      P.Iso.renderer.camera.scrollToGridPos(t.vo.pos);
    }
    P.Iso.renderer.mouse.changeSelectedTarget(t);
  };
  CastlePrimeSaleDialog.prototype.onServerMessageArrived = function (e) {
    var t = this;
    if (e === undefined) {
      e = -1;
    }
    return function (i = null) {
      N.CastleBasicController.getInstance().removeEventListener(T.CastleServerMessageArrivedEvent.JAA_ARRIVED, t.jaaArrivedCallback);
      t.jaaArrivedCallback = null;
      if (e > 0) {
        t.centerAndShowRingMenuOnBuilding(e);
      } else {
        t.centerAndHighlightBuildingInShop();
      }
      V.CastleLayoutManager.getInstance().hideAllDialogs();
    };
  };
  CastlePrimeSaleDialog.prototype.onOkButton = function () {
    this.controller.addEventListener(v.CastleShowUpgradableBuildingsEvent.UPGRADABLE_BUILDINGS_DATA_RECEIVED, this.bindFunction(this.onShowmeUpgradeDataReceived));
    S.CastleModel.smartfoxClient.sendCommandVO(new D.C2SShowMeUpgradeBuildingsVO(this.primeSaleComponent.wodID, this.isPrimeSaleUpgradeComponent));
  };
  CastlePrimeSaleDialog.prototype.onShowmeUpgradeDataReceived = function (e) {
    if (e.paramObj.WOD == this.primeSaleComponent.wodID) {
      this.controller.removeEventListener(v.CastleShowUpgradableBuildingsEvent.UPGRADABLE_BUILDINGS_DATA_RECEIVED, this.bindFunction(this.onShowmeUpgradeDataReceived));
      var t = e.paramObj.UD;
      var i = 0;
      if (t.length < 1) {
        var n = l.castAs(S.CastleModel.wodData.createVObyWOD(this.primeSaleComponent.wodID, R.CastleWodData.TYPE_BUILDING), "ABasicBuildingVO");
        if (n) {
          var a = false;
          for (var s = 0, r = n.onlyInKingdomIds; s < r.length; s++) {
            var c = r[s];
            if (c !== undefined) {
              a = a || S.CastleModel.kingdomData.isKingdomUnlocked(c);
            }
          }
          if (!a) {
            B.CastleExternalDialog.dialogHandler.registerDefaultDialogs(F.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(_.Localize.text("dialog_primeday_primesale_warningTitle"), _.Localize.text("alert_kingdom_notEntered")));
            this.hide();
            return;
          }
        }
        if (e.paramObj.BE) {
          B.CastleExternalDialog.dialogHandler.registerDefaultDialogs(F.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(_.Localize.text("dialog_primeday_primesale_warningTitle"), _.Localize.text("dialog_primeday_primesale_buildingExists")));
        } else {
          B.CastleExternalDialog.dialogHandler.registerDefaultDialogs(F.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(_.Localize.text("dialog_primeday_primesale_warningTitle"), _.Localize.text("dialog_primeday_primesale_warningLevel")));
        }
        this.hide();
      } else {
        t.sort(this.bindFunction(this.sortPossibleBuildingArray));
        for (var u = 0; u < t.length; u++) {
          var d = t[u];
          if (S.CastleModel.areaData.activeAreaInfo.objectId == d[1]) {
            i = u;
          }
        }
        var p = isNaN(i) ? t[0] : t[i];
        this.goToCastleAndObject(p);
      }
    }
  };
  CastlePrimeSaleDialog.prototype.goToCastleAndObject = function (e) {
    var t = E.int(e.length > 2 ? e[2] : -1);
    if (e[1] == S.CastleModel.areaData.activeAreaInfo.objectId && this.layoutManager.isInMyCastle) {
      this.onServerMessageArrived(t)();
    } else {
      if (M.FlashBlockHelper.checkFlashBlock(e[0])) {
        return;
      }
      this.jaaArrivedCallback = this.onServerMessageArrived(t);
      this.controller.addEventListener(T.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.jaaArrivedCallback);
      S.CastleModel.smartfoxClient.sendCommandVO(new I.C2SJoinCastleVO(e[1], e[0]));
    }
  };
  CastlePrimeSaleDialog.prototype.sortPossibleBuildingArray = function (e, t) {
    if (this.mainCastles.indexOf(e[1]) > this.mainCastles.indexOf(t[1])) {
      return -1;
    } else if (this.mainCastles.indexOf(e[1]) < this.mainCastles.indexOf(t[1])) {
      return 1;
    } else if (this.kingdomSortOrder.indexOf(e[0]) > this.kingdomSortOrder.indexOf(t[0])) {
      return -1;
    } else if (this.kingdomSortOrder.indexOf(e[0]) < this.kingdomSortOrder.indexOf(t[0])) {
      return 1;
    } else {
      return 0;
    }
  };
  CastlePrimeSaleDialog.prototype.getRemainingTime = function () {
    if (this.isPrivateOffer_0) {
      return E.int(this.properties.offerVO.remainingSeconds);
    } else {
      return E.int(this.properties.eventVO.remainingEventTimeInSeconds);
    }
  };
  CastlePrimeSaleDialog.prototype.timeToString = function (e) {
    return new O.TextVO(_.Localize.text(CastlePrimeSaleDialog.SPECIAL_OFFER_TIMER, [k.CastleTimeStringHelper.getEventTimeString(e)]));
  };
  Object.defineProperty(CastlePrimeSaleDialog.prototype, "primeSaleComponent", {
    get: function () {
      if (this.isPrivateOffer_0) {
        var e = l.castAs(this.dialogPropertiesPrivateOffer.offerVO.getAdditionalComponentByName(b.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE), "OfferDescriptionAdditionalPrimeSale");
        var t = l.castAs(this.dialogPropertiesPrivateOffer.offerVO.getAdditionalComponentByName(b.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_UPGRADE), "OfferDescriptionAdditionalPrimeSaleUpgrade");
        if (e) {
          return e.primeSaleComponent;
        } else if (t) {
          return t.primeSaleComponent;
        } else {
          r.error("no primeSaleParameter found: " + this.dialogPropertiesPrivateOffer.offerVO);
          return null;
        }
      }
      return this.dialogProperties.eventVO.primeSaleComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeSaleDialog.prototype, "isPrivateOffer_0", {
    get: function () {
      return u.instanceOfClass(this.properties, "CastlePrivateOfferDialogProperties");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeSaleDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeSaleDialog.prototype, "dialogPropertiesPrivateOffer", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeSaleDialog.prototype, "isPrimeSaleUpgradeComponent", {
    get: function () {
      return u.instanceOfClass(this.primeSaleComponent, "PrimeSaleUpgradeComponent");
    },
    enumerable: true,
    configurable: true
  });
  CastlePrimeSaleDialog.prototype.isOffer = function () {
    return true;
  };
  CastlePrimeSaleDialog.prototype.isEvent = function () {
    return true;
  };
  CastlePrimeSaleDialog.prototype.onCloseButton = function () {
    if (this.jaaArrivedCallback) {
      this.controller.removeEventListener(T.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.jaaArrivedCallback);
      this.jaaArrivedCallback = null;
    }
  };
  CastlePrimeSaleDialog.NAME = "CastlePrimeSalesDialogExternal";
  CastlePrimeSaleDialog.DIALOG_TITLE = "dialog_specialOfferDeco_title";
  CastlePrimeSaleDialog.DIALOG_COPY = "dialog_primeday_primesale_description";
  CastlePrimeSaleDialog.DIALOG_OK_BUTTON_TEXT = "dialog_questInfo_showMe";
  CastlePrimeSaleDialog.SPECIAL_OFFER_TIMER = "dialog_primeday_specialoffer_endTimer";
  CastlePrimeSaleDialog.LIMITED_OFFER = "dialog_privateOffer_whaleChest_rubySave";
  return CastlePrimeSaleDialog;
}(A.CastleAbstractPrimeSaleDialog);
exports.CastlePrimeSaleDialog = L;
var P = require("./33.js");
var M = require("./160.js");
var R = require("./56.js");
var V = require("./17.js");
var x = require("./63.js");
var w = require("./260.js");
var B = require("./11.js");
var F = require("./38.js");
var N = require("./15.js");
var k = require("./27.js");
c.classImplementsInterfaces(L, "ICollectableRendererList");