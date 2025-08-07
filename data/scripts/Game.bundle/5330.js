Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./60.js");
var c = require("./418.js");
var u = require("./21.js");
var d = require("./26.js");
var p = require("./29.js");
var h = require("./4.js");
var g = require("./130.js");
var C = require("./1083.js");
var _ = require("./1743.js");
var m = require("./665.js");
var f = require("./1084.js");
var O = require("./1746.js");
var E = require("./814.js");
var y = require("./1081.js");
var b = require("./1739.js");
var D = require("./1082.js");
var I = require("./472.js");
var T = require("./110.js");
var v = require("./175.js");
var S = require("./134.js");
var A = function (e) {
  function StatusIconPrivateOffer(t, i, n, o) {
    var a = this;
    a._panelType = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this, StatusIconPrivateOffer.getButtonNameByType(t), new s.TextVO(""), T.ACastleStatusIcon.PRIORITY_MIDDLE, {
      po: i,
      pt: o
    }) || this)._buttonType = t;
    a.verifyData();
    var r = a._currentPrivateOfferVO.getQuestConditionByName(l.ClientConstOffer.QUEST_CONDITION_INTEGER_PLAYER_LEVEL + l.ClientConstOffer.TYPE_MIN);
    if (r && r.conditionTextReplacements && r.conditionTextReplacements.length > 0) {
      a.setTooltip(n, [r.conditionTextReplacements[0]]);
    } else {
      a.setTooltip(n);
    }
    return a;
  }
  n.__extends(StatusIconPrivateOffer, e);
  StatusIconPrivateOffer.prototype.preInit = function (t = null) {
    e.prototype.preInit.call(this, t);
    this._currentPrivateOfferVO = t.po;
    this._panelType = r.int(t.pt);
  };
  StatusIconPrivateOffer.getButtonNameByType = function (e) {
    switch (e) {
      case StatusIconPrivateOffer.NAME_ORIGINAL_BTN_PRIVATE_PRIME_TIME_OFFER:
        return StatusIconPrivateOffer.NAME_BTN_PRIVATE_PRIME_TIME_OFFER;
      default:
        return e;
    }
  };
  StatusIconPrivateOffer.prototype.addEventListenerForVisibility = function () {
    e.prototype.addEventListenerForVisibility.call(this);
    h.CastleModel.privateOfferData.addEventListener(g.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    h.CastleModel.specialEventData.addEventListener(d.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onSpecialEvent));
    h.CastleModel.specialEventData.addEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEvent));
  };
  StatusIconPrivateOffer.prototype.removeEventListenerForVisibility = function () {
    e.prototype.removeEventListenerForVisibility.call(this);
    h.CastleModel.privateOfferData.removeEventListener(g.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    h.CastleModel.specialEventData.removeEventListener(d.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onSpecialEvent));
    h.CastleModel.specialEventData.removeEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEvent));
  };
  StatusIconPrivateOffer.prototype.onSpecialEvent = function (e) {
    this.setVisibility();
  };
  StatusIconPrivateOffer.prototype.verifyData = function () {
    if (!this._currentPrivateOfferVO) {
      throw new Error("StatusIconPrivateOffer StatusIcon is initialized without a private-offer");
    }
  };
  StatusIconPrivateOffer.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    if (this.iconDisp.barItem) {
      this.iconDisp.barItem.visible = false;
      if (this._currentPrivateOfferVO && this._currentPrivateOfferVO.isTimeDisplayedInPercentage) {
        this.iconDisp.barItem.visible = true;
      }
    }
  };
  StatusIconPrivateOffer.prototype.displayTimeInPercentage = function () {
    this.updateRemainingFromTimestamps(this._currentPrivateOfferVO.startTimestamp, this._currentPrivateOfferVO.endTimestamp);
  };
  StatusIconPrivateOffer.prototype.onOfferRemoved = function (e) {
    if (!e || e.offerVO.id == this._currentPrivateOfferVO.id) {
      h.CastleModel.privateOfferData.removeEventListener(g.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
      this._currentPrivateOfferVO = null;
      this.hide();
      var t = L.castAs(this.layoutManager.getPanel(I.CastleStatusPanel), "CastleStatusPanel");
      if (t) {
        t.removeStatusIcon(this._panelType, this);
      }
    }
  };
  StatusIconPrivateOffer.prototype.onTimerUpdate = function (e = null) {
    if (!this._currentPrivateOfferVO || this._currentPrivateOfferVO.id < 0) {
      this.onOfferRemoved(null);
    } else {
      if (this._currentPrivateOfferVO.remainingSeconds <= 0 && !this._currentPrivateOfferVO.hasInfiniteTime) {
        h.CastleModel.privateOfferData.sendCheckDuration(this._currentPrivateOfferVO.id);
      }
      if (this._currentPrivateOfferVO.hasInfiniteTime && this.itxt_label) {
        this.itxt_label.clearText();
      } else if (this._currentPrivateOfferVO.isTimeDisplayedInPercentage) {
        this.updateRemainingFromTimestamps(this._currentPrivateOfferVO.startTimestamp, this._currentPrivateOfferVO.endTimestamp);
      } else if (this.itxt_label) {
        this.itxt_label.textContentVO.stringValue = P.CastleTimeStringHelper.getEventTimeString(this._currentPrivateOfferVO.remainingSeconds);
      }
    }
  };
  StatusIconPrivateOffer.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconPrivateOffer.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconPrivateOffer.prototype.setVisibilityLoaded = function () {
    if (this._currentPrivateOfferVO) {
      var e;
      var t = L.castAs(this._currentPrivateOfferVO.getAdditionalComponentByName(l.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE), "OfferDescriptionAdditionalPrimeSale");
      var i = L.castAs(this._currentPrivateOfferVO.getAdditionalComponentByName(l.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_UPGRADE), "OfferDescriptionAdditionalPrimeSaleUpgrade");
      var n = this._currentPrivateOfferVO.getVisualComponentByName(l.ClientConstOffer.OFFER_VISUAL_INTERFACE_BUTTON);
      var o = L.castAs(h.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_PRIME_SALES), "PrimeSaleEventVO");
      if (o) {
        e = o.primeSaleComponent;
      }
      if (t && !t.primeSaleComponent.isAvailableInKingdom() || i && !i.primeSaleComponent.isAvailableInKingdom() || t && e && e.wodID == t.primeSaleComponent.wodID && e.discount > t.primeSaleComponent.discount || n && n.hiddenByABTest || this._currentPrivateOfferVO.isOneTimeOffer) {
        this.hide();
      } else {
        this.show();
      }
    } else {
      this.dispose();
    }
  };
  StatusIconPrivateOffer.prototype.onClick = function () {
    if (this.verifyOffer()) {
      var e = L.castAs(this._currentPrivateOfferVO.getAdditionalComponentByName(l.ClientConstOffer.OFFER_ADDITIONAL_CLIENT_TRACKING), "OfferDescriptionAdditionalClientTracking");
      if (e) {
        h.CastleModel.smartfoxClient.sendCommandVO(new c.C2SClientSideTrackingVO(e.trackingKey, this._currentPrivateOfferVO.id));
      }
      o.CommandController.instance.executeCommand(p.IngameClientCommands.OPEN_PRIVATE_OFFER_DIALOG_COMMAND, this._currentPrivateOfferVO);
    } else {
      this.onOfferRemoved(null);
    }
  };
  StatusIconPrivateOffer.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.onTimerUpdate();
  };
  Object.defineProperty(StatusIconPrivateOffer.prototype, "priority", {
    get: function () {
      if (this._currentPrivateOfferVO) {
        switch (m.CastlePrivateOfferDialogCreator.getPrivateOfferDialogName(this._currentPrivateOfferVO)) {
          case E.CastlePrivatePrimeTimeOfferDialog.NAME:
            return v.AOfferHubBaseStatusIcon.PRIORITY_PRIVATE_PRIME_TIME;
          case y.CastlePrimeDayPODialog.NAME:
          case b.CastlePrimeDayPOSMSDialog.NAME:
          case O.CastlePrivatePrimeDayOfferDynamicDialog.OFFER_NAME:
            return v.AOfferHubBaseStatusIcon.PRIORITY_PRIVATEOFFER_PRIME_DAY;
          case _.CastleMultiChestDialog.NAME:
            return v.AOfferHubBaseStatusIcon.PRIORITY_PRIVATEOFFER_MULTIREWARD_CHEST;
          case C.CastleChestDialog.NAME:
            return v.AOfferHubBaseStatusIcon.PRIORITY_PRIVATEOFFER_CHEST;
          case D.CastlePrimeSaleDialog.NAME:
            return v.AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_BUILDINGS;
          case f.CastlePrivateOfferTimeChallengeDialog.NAME:
            return v.AOfferHubBaseStatusIcon.PRIORITY_ALLIANCE_TIME_CHALLENGE;
          case M.CastlePrivateBestsellerShopDialog.OFFER_NAME:
            return v.AOfferHubBaseStatusIcon.PRIORITY_PRIVATE_BESTSELLER_SHOP;
        }
      }
      return Object.getOwnPropertyDescriptor(T.ACastleStatusIcon.prototype, "priority").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(S.AOfferHubItemStatusIcon.prototype, "priority").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconPrivateOffer.prototype.verifyOffer = function () {
    return !!h.CastleModel.privateOfferData.getOfferById(this._currentPrivateOfferVO.id);
  };
  StatusIconPrivateOffer.NAME_BTN_PRIVATE_PRIME_TIME_OFFER = "Btn_PrivatePrimeTimeOffer";
  StatusIconPrivateOffer.NAME_ORIGINAL_BTN_PRIVATE_PRIME_TIME_OFFER = "Btn_PrivatePrimeTimeOffer";
  return StatusIconPrivateOffer;
}(S.AOfferHubItemStatusIcon);
exports.StatusIconPrivateOffer = A;
var L = require("./1.js");
var P = require("./27.js");
var M = require("./1748.js");