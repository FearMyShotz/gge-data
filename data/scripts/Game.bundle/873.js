Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./51.js");
var p = require("./60.js");
var h = require("./255.js");
var g = require("./26.js");
var C = require("./4.js");
var _ = require("./130.js");
var m = require("./42.js");
var f = require("./8.js");
var O = require("./106.js");
var E = require("./1200.js");
var y = require("./11.js");
var b = require("./2083.js");
var D = require("./166.js");
var I = require("./341.js");
var T = function (e) {
  function CastleResourceWaitDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleResourceWaitDialog.NAME) || this;
  }
  n.__extends(CastleResourceWaitDialog, e);
  CastleResourceWaitDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    var i = [this.dialogDisp.btn_close, this.dialogDisp.mc_bottom.btn_ok, this.dialogDisp.mc_bottom.btn_boost, this.dialogDisp.mc_bottom.btn_to_trader, this.dialogDisp.mc_bottom.btn_skip_rubies];
    this.resourceWaitComponents = [];
    for (var n = 0; n < v.ClientConstCollectable.GROUP_LIST_RESOURCES.length; n++) {
      var o = this.dialogDisp["mc_info" + n];
      if (!o) {
        break;
      }
      i.push(o.btn_skip_production);
      this.resourceWaitComponents.push(new P.ResourceWaitComponent(o));
    }
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new c.LocalizedTextVO(""));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.LocalizedTextVO("generic_alert_information"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_youNeed, new c.LocalizedTextVO("dialog_resourceWait_youNeed"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom.speechbubble.merchant_txt, new c.LocalizedTextVO("dialog_resourceWait_traderSpeechBubble"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom.btn_to_trader.txt, new c.LocalizedTextVO("dialog_resourceWait_toTraderButton")).verticalAlign = m.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom.btn_skip_rubies.txt, new c.LocalizedTextVO("dialog_resourceWait_buildForRubiesButton")).verticalAlign = m.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    O.CharacterHelper.createCharacterBig(d.ClientConstCharacter.CHAR_ID_OVERSEER, this.dialogDisp.mc_charPlaceHolder, 176, 149);
    this.dialogDisp.mc_bottom.btn_boost.toolTipText = "boostResources";
    this.dialogDisp.mc_bottom.btn_boost.mc_discount.visible = C.CastleModel.boosterSaleData.hideDiscount();
    this.initBasicButtons(i);
  };
  CastleResourceWaitDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    C.CastleModel.specialEventData.addEventListener(g.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventChanged));
    C.CastleModel.specialEventData.addEventListener(g.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventChanged));
    C.CastleModel.specialEventData.addEventListener(h.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferChanged));
    C.CastleModel.specialEventData.addEventListener(h.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferChanged));
    C.CastleModel.privateOfferData.addEventListener(_.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.onOfferChanged));
    C.CastleModel.privateOfferData.addEventListener(_.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferChanged));
    C.CastleModel.privateOfferData.addEventListener(_.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onOfferChanged));
  };
  CastleResourceWaitDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    C.CastleModel.specialEventData.removeEventListener(g.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventChanged));
    C.CastleModel.specialEventData.removeEventListener(g.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventChanged));
    C.CastleModel.specialEventData.removeEventListener(h.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferChanged));
    C.CastleModel.specialEventData.removeEventListener(h.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferChanged));
    C.CastleModel.privateOfferData.removeEventListener(_.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.onOfferChanged));
    C.CastleModel.privateOfferData.removeEventListener(_.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferChanged));
    C.CastleModel.privateOfferData.removeEventListener(_.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onOfferChanged));
    this.hideResourceDisplays();
  };
  CastleResourceWaitDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.updateResourceMerchant();
    this.updateResourceDisplays();
    this.updateDialogSize();
    this.itxt_description.textContentVO.textId = this.dialogProperties.descriptionTextId;
  };
  CastleResourceWaitDialog.prototype.onEventChanged = function (e) {
    if (e.specialEventVO.eventId == a.EventConst.EVENTTYPE_MERCHANT || e.specialEventVO.eventId == a.EventConst.EVENTTYPE_MERCHANT_FACTION) {
      this.updateResourceMerchant();
      this.updateDialogSize();
    }
  };
  CastleResourceWaitDialog.prototype.onOfferChanged = function (e) {
    this.updateResourceMerchant();
    this.updateDialogSize();
  };
  CastleResourceWaitDialog.prototype.updateDialogSize = function () {
    var e = u.int(Math.max(0, this.resourceWaitComponents.length - this.dialogProperties.getNumberOfMissingResources())) * 37.5 + (this.merchantActiveAndSellsAllNecessaryResources ? 0 : 90);
    this.dialogDisp.bg.height = 605 - e;
    this.dialogDisp.mc_bottom.y = 255 - e;
    this.dialogDisp.y = e;
    this.updatePosition();
  };
  CastleResourceWaitDialog.prototype.updateResourceMerchant = function () {
    var e = this.merchantActiveAndSellsAllNecessaryResources;
    this.dialogDisp.mc_bottom.btn_ok.visible = !e;
    this.dialogDisp.mc_bottom.btn_boost.visible = !e && this.dialogProperties.hasAnyProduction && CastleResourceWaitDialog.isOverseersEnabled;
    this.dialogDisp.mc_bottom.speechbubble.visible = e;
    this.dialogDisp.mc_bottom.mc_char.visible = e;
    this.dialogDisp.mc_bottom.btn_to_trader.visible = e;
    this.dialogDisp.mc_bottom.btn_skip_rubies.visible = e && this.dialogProperties.isSkippableWithRubies;
    if (e) {
      f.ButtonHelper.enableButton(this.dialogDisp.mc_bottom.btn_skip_rubies, this.hasStorageForDirectPay());
      this.dialogDisp.mc_bottom.btn_skip_rubies.toolTipText = this.hasStorageForDirectPay() ? null : "dialog_storageFull";
    }
  };
  CastleResourceWaitDialog.prototype.updateResourceDisplays = function () {
    var e = 0;
    for (var t = 0, i = v.ClientConstCollectable.GROUP_LIST_RESOURCES; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        var o = u.int(this.dialogProperties.getMissing(n));
        if (o > 0) {
          this.resourceWaitComponents[e].setResource(n, o, this.dialogProperties.getProduction(n), CastleResourceWaitDialog.isOverseersEnabled);
          e++;
        }
      }
    }
    this.hideResourceDisplays(e);
  };
  CastleResourceWaitDialog.prototype.hideResourceDisplays = function (e = 0) {
    for (var t = e; t < this.resourceWaitComponents.length; ++t) {
      this.resourceWaitComponents[t].setResource(null, 0, 0, false);
    }
  };
  CastleResourceWaitDialog.prototype.hasStorageForDirectPay = function () {
    for (var e = 0, t = v.ClientConstCollectable.GROUP_LIST_RESOURCES; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined && C.CastleModel.areaData.getActiveStorageItem(i).maxAmount < this.dialogProperties.getMissing(i)) {
        return false;
      }
    }
    return true;
  };
  Object.defineProperty(CastleResourceWaitDialog.prototype, "merchantActiveAndSellsAllNecessaryResources", {
    get: function () {
      return CastleResourceWaitDialog.isMerchantActive && this.merchantSellsAllNecessaryResources();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceWaitDialog, "isOverseersEnabled", {
    get: function () {
      return !L.CastleLayoutManager.getInstance().isInEventState && C.CastleModel.kingdomData.activeKingdomID != s.FactionConst.KINGDOM_ID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceWaitDialog, "isMerchantActive", {
    get: function () {
      return CastleResourceWaitDialog.merchantEventVO != null || CastleResourceWaitDialog.privateOfferMerchantVO != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceWaitDialog, "merchantEventVO", {
    get: function () {
      var e;
      if ((e = L.CastleLayoutManager.getInstance().isInEventState || C.CastleModel.kingdomData.activeKingdomID == s.FactionConst.KINGDOM_ID ? C.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_MERCHANT_FACTION) : C.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_MERCHANT)) && e.isBuildingVisibleInArea(C.CastleModel.userData.userLevel, C.CastleModel.areaData.activeAreaInfo.areaType, C.CastleModel.kingdomData.activeKingdomID, C.CastleModel.areaData.activeAreaInfo.mapID)) {
        return e;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceWaitDialog, "privateOfferMerchantVO", {
    get: function () {
      var e = u.int(C.CastleModel.privateOfferData.getPrivateOfferMerchantID());
      if (e != -1) {
        var t = C.CastleModel.privateOfferData.getOfferById(e);
        var i = t.getDescriptionByName("visualComponents").visuals.get("isoObject");
        if (i.isVisible && i.isIsoObjectVisibleByArea(C.CastleModel.areaData.activeAreaInfo.areaType)) {
          return t;
        }
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  CastleResourceWaitDialog.prototype.merchantSellsAllNecessaryResources = function () {
    var e = CastleResourceWaitDialog.getMerchantPackages(C.CastleModel.userData.userLevel, C.CastleModel.userData.userLegendLevel, C.CastleModel.areaData.activeAreaInfo.areaType);
    if (!e) {
      return false;
    }
    for (var t = 0, i = v.ClientConstCollectable.GROUP_LIST_RESOURCES; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined && this.dialogProperties.getMissing(n) > 0) {
        var o = false;
        if (e != null) {
          for (var a = 0, s = e; a < s.length; a++) {
            var r = s[a];
            if (r !== undefined && r.getAmount(n) > 0) {
              o = true;
              break;
            }
          }
        }
        if (!o) {
          return false;
        }
      }
    }
    return true;
  };
  CastleResourceWaitDialog.getMerchantPackages = function (e, t, i) {
    var n = CastleResourceWaitDialog.privateOfferMerchantVO;
    if (n) {
      return n.getAdditionalComponentByName(p.ClientConstOffer.OFFER_ADDITIONAL_PACKAGE_IDS).getVisiblePackages(e, t, i);
    }
    var o = CastleResourceWaitDialog.merchantEventVO;
    if (o) {
      return o.getVisiblePackages(e, t, i);
    } else {
      return null;
    }
  };
  CastleResourceWaitDialog.prototype.onClick = function (t) {
    if (f.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      for (var i = 0; i < this.resourceWaitComponents.length; ++i) {
        if (t.target == this.dialogDisp["mc_info" + i].btn_skip_production) {
          this.resourceWaitComponents[i].onClickSkipProduction();
          this.hide();
          return;
        }
      }
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.mc_bottom.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.mc_bottom.btn_boost:
          this.hide();
          A.CastleDialogHandler.getInstance().registerDefaultDialogs(M.CastleResourceBoostDialog, new E.CastleRessourcesBoostDialogProperties());
          break;
        case this.dialogDisp.mc_bottom.btn_to_trader:
          if (CastleResourceWaitDialog.privateOfferMerchantVO) {
            A.CastleDialogHandler.getInstance().registerDefaultDialogs(V.CastleResourceMerchantEventDialog, new I.CastlePrivateOfferDialogProperties(CastleResourceWaitDialog.privateOfferMerchantVO));
          } else if (CastleResourceWaitDialog.merchantEventVO) {
            A.CastleDialogHandler.getInstance().registerDefaultDialogs(V.CastleResourceMerchantEventDialog, new D.CastleGenericMerchantDialogProperties(CastleResourceWaitDialog.merchantEventVO));
          }
          this.hide();
          break;
        case this.dialogDisp.mc_bottom.btn_skip_rubies:
          A.CastleDialogHandler.getInstance().registerDefaultDialogs(R.CastleStandardPayYesNoDialog, new b.CastleStandardPayYesNoDialogProperties(l.Localize.text("dialog_resourceWait_buildForRubiesPopup"), this.bindFunction(this.skipForRubies), null, null, "CharMerchant", this.dialogProperties.getMissing(S.CollectableEnum.WOOD), this.dialogProperties.getMissing(S.CollectableEnum.STONE), this.dialogProperties.getMissing(S.CollectableEnum.FOOD), this.dialogProperties.getMissing(S.CollectableEnum.COAL), this.dialogProperties.getMissing(S.CollectableEnum.OIL), this.dialogProperties.getMissing(S.CollectableEnum.GLASS), this.dialogProperties.getMissing(S.CollectableEnum.AQUAMARINE), this.dialogProperties.getMissing(S.CollectableEnum.IRON)));
      }
    }
  };
  CastleResourceWaitDialog.prototype.skipForRubies = function (e = null) {
    if (this.dialogProperties.skipCommand) {
      C.CastleModel.smartfoxClient.sendCommandVO(this.dialogProperties.skipCommand);
    }
    if (u.int(r.ResourceConst.getC2PriceForResources([this.dialogProperties.getMissing(S.CollectableEnum.WOOD), this.dialogProperties.getMissing(S.CollectableEnum.STONE), this.dialogProperties.getMissing(S.CollectableEnum.FOOD), this.dialogProperties.getMissing(S.CollectableEnum.COAL), this.dialogProperties.getMissing(S.CollectableEnum.OIL), this.dialogProperties.getMissing(S.CollectableEnum.GLASS), this.dialogProperties.getMissing(S.CollectableEnum.IRON)])) <= C.CastleModel.currencyData.c2Amount) {
      this.hide();
    }
  };
  CastleResourceWaitDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    this.onMouseInOrOut(t, true);
  };
  CastleResourceWaitDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this.onMouseInOrOut(t, false);
  };
  CastleResourceWaitDialog.prototype.onMouseInOrOut = function (e, t) {
    for (var i = 0; i < this.resourceWaitComponents.length; ++i) {
      if (e.target == this.dialogDisp["mc_info" + i].btn_skip_production) {
        this.resourceWaitComponents[i].setBoosted(t);
      }
    }
    if (e.target == this.dialogDisp.mc_bottom.btn_boost) {
      this.setAllBoosted(t);
    }
  };
  CastleResourceWaitDialog.prototype.setAllBoosted = function (e) {
    for (var t = 0; t < this.resourceWaitComponents.length; ++t) {
      this.resourceWaitComponents[t].setBoosted(e);
    }
  };
  Object.defineProperty(CastleResourceWaitDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleResourceWaitDialog.__initialize_static_members = function () {
    CastleResourceWaitDialog.NAME = "CastleResourceWait";
  };
  return CastleResourceWaitDialog;
}(y.CastleExternalDialog);
exports.CastleResourceWaitDialog = T;
var v = require("./86.js");
var S = require("./12.js");
var A = require("./9.js");
var L = require("./17.js");
var P = require("./2084.js");
var M = require("./874.js");
var R = require("./2092.js");
var V = require("./699.js");
o.classImplementsInterfaces(T, "ICollectableRendererList");
T.__initialize_static_members();