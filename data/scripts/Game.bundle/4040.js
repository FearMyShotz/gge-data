Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./274.js");
var s = require("./26.js");
var r = require("./161.js");
var l = require("./4.js");
var c = function (e) {
  function StatusIconReactivationPaymentRewardEvent() {
    return e.call(this, "Btn_PaymentReward") || this;
  }
  n.__extends(StatusIconReactivationPaymentRewardEvent, e);
  StatusIconReactivationPaymentRewardEvent.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
  };
  StatusIconReactivationPaymentRewardEvent.prototype.displayTimeInPercentage = function () {
    this.updateRemainingFromTimestamps(this._paymentEventVO.startTimestamp, this._paymentEventVO.endTimestamp);
  };
  StatusIconReactivationPaymentRewardEvent.prototype.hide = function () {
    this._paymentEventVO = null;
    e.prototype.hide.call(this);
  };
  StatusIconReactivationPaymentRewardEvent.prototype.addEventListenerForVisibility = function () {
    l.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onPaymentRewardUpdate));
    l.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.controller.addEventListener(r.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onChangePossibilityToShowMe));
  };
  StatusIconReactivationPaymentRewardEvent.prototype.removeEventListenerForVisibility = function () {
    l.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onPaymentRewardUpdate));
    l.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.controller.removeEventListener(r.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onChangePossibilityToShowMe));
  };
  StatusIconReactivationPaymentRewardEvent.prototype.onTimerUpdate = function (e = null) {
    if (this._paymentEventVO && this._paymentEventVO.isTimeDisplayedInPercentage) {
      this.displayTimeInPercentage();
    }
  };
  StatusIconReactivationPaymentRewardEvent.prototype.setVisibilityLoaded = function () {
    this.updateCurrentEventVO();
    var e = !this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle;
    if (this._paymentEventVO && e && !l.CastleModel.privateOfferData.isHiddenEvent(this._paymentEventVO.eventId)) {
      this.setTooltip(this.getTooltipBySkinID());
      var t = 4 + this._paymentEventVO.skinID;
      if (t >= 100) {
        t -= 100;
      }
      this.icon.gotoAndStop(t);
      if (this.iconDisp.barItem) {
        this.iconDisp.barItem.visible = false;
        if (this._paymentEventVO && this._paymentEventVO.isTimeDisplayedInPercentage) {
          this.iconDisp.barItem.visible = true;
        }
      }
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconReactivationPaymentRewardEvent.prototype.getTooltipBySkinID = function () {
    switch (this._paymentEventVO.skinID) {
      case 1:
        return "dialog_primeday_independenceDay_title";
      case a.ClientConstEvent.PRIMEDAY_SUPER:
      default:
        return "eventBuilding_decoOffer";
    }
  };
  StatusIconReactivationPaymentRewardEvent.prototype.updateCurrentEventVO = function () {
    this._paymentEventVO = l.CastleModel.specialEventData.getActiveEventByAnyEventId([o.EventConst.EVENTTYPE_REACTIVATION_PRIME_DAY]);
  };
  StatusIconReactivationPaymentRewardEvent.prototype.onChangePossibilityToShowMe = function (e) {
    this.setVisibility();
  };
  StatusIconReactivationPaymentRewardEvent.prototype.onClick = function () {
    if (!l.CastleModel.tutorialData.isTutorialActive && this._paymentEventVO) {
      this._paymentEventVO.openDialog();
    }
  };
  StatusIconReactivationPaymentRewardEvent.prototype.onRemoveEvent = function (e) {
    if (u.instanceOfClass(e.specialEventVO, "PaymentrewardEventVO") && this._paymentEventVO && e.specialEventVO.eventId == this._paymentEventVO.eventId) {
      this.hide();
    }
  };
  StatusIconReactivationPaymentRewardEvent.prototype.onPaymentRewardUpdate = function (e) {
    this.updateCurrentEventVO();
    if (u.instanceOfClass(e.specialEventVO, "PaymentrewardEventVO") && e.specialEventVO.eventId == o.EventConst.EVENTTYPE_REACTIVATION_PRIME_DAY) {
      this.setVisibility();
    }
  };
  StatusIconReactivationPaymentRewardEvent.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.onTimerUpdate();
  };
  return StatusIconReactivationPaymentRewardEvent;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.StatusIconReactivationPaymentRewardEvent = c;
var u = require("./1.js");