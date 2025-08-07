Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./21.js");
var l = require("./26.js");
var c = require("./161.js");
var u = require("./4.js");
var d = function (e) {
  function StatusIconTieredPaymentReward() {
    return e.call(this, "Btn_TieredPaymentReward", null, p.AOfferHubBaseStatusIcon.PRIORITY_PRIME_DAY_TIERED) || this;
  }
  n.__extends(StatusIconTieredPaymentReward, e);
  StatusIconTieredPaymentReward.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.onTimerUpdate();
  };
  StatusIconTieredPaymentReward.prototype.onTimerUpdate = function (e = null) {
    if (this._paymentEventVO && !this._paymentEventVO.isTimeless) {
      this.setTime();
      this.itxt_label.visible = true;
    } else {
      this.itxt_label.visible = false;
    }
  };
  StatusIconTieredPaymentReward.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    if (this._paymentEventVO && !this._paymentEventVO.isTimeless) {
      u.CastleModel.timerData.addEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    }
  };
  StatusIconTieredPaymentReward.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    u.CastleModel.timerData.removeEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconTieredPaymentReward.prototype.setTime = function () {
    this.itxt_label.textContentVO.stringValue = o.TimeStringHelper.getHoureMinuteSecondTimeString(this._paymentEventVO.remainingEventTimeInSeconds);
    this.updateCache();
  };
  StatusIconTieredPaymentReward.prototype.setVisibilityLoaded = function () {
    this.updateCurrentEventVO();
    var e = !this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle;
    var t = s.int(this._paymentEventVO ? this._paymentEventVO.maxBuyCount - this._paymentEventVO.boughtAllRewardsCount : 0);
    if (u.CastleModel.tutorialData.isTutorialActive || !e || !this._paymentEventVO || t <= 0 || u.CastleModel.privateOfferData.isHiddenEvent(this._paymentEventVO.eventId)) {
      this.hide();
    } else {
      this.setTooltip("dialog_primeday_paymentTier_hudIcon_tooltip");
      this.show();
    }
  };
  StatusIconTieredPaymentReward.prototype.addEventListenerForVisibility = function () {
    u.CastleModel.specialEventData.addEventListener(l.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onPaymentRewardUpdate));
    u.CastleModel.specialEventData.addEventListener(l.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.controller.addEventListener(c.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onChangePossibilityToShowMe));
  };
  StatusIconTieredPaymentReward.prototype.removeEventListenerForVisibility = function () {
    u.CastleModel.specialEventData.removeEventListener(l.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onPaymentRewardUpdate));
    u.CastleModel.specialEventData.removeEventListener(l.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.controller.removeEventListener(c.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onChangePossibilityToShowMe));
  };
  StatusIconTieredPaymentReward.prototype.onChangePossibilityToShowMe = function (e) {
    this.setVisibility();
  };
  StatusIconTieredPaymentReward.prototype.onClick = function () {
    if (this._paymentEventVO) {
      this._paymentEventVO.openDialog();
    }
  };
  StatusIconTieredPaymentReward.prototype.onRemoveEvent = function (e) {
    if (h.instanceOfClass(e.specialEventVO, "PaymentrewardEventVO") && this._paymentEventVO && e.specialEventVO.eventId == this._paymentEventVO.eventId) {
      this.hide();
    }
  };
  StatusIconTieredPaymentReward.prototype.onPaymentRewardUpdate = function (e) {
    this.updateCurrentEventVO();
    if (h.instanceOfClass(e.specialEventVO, "PaymentrewardEventVO") && e.specialEventVO.eventId != a.EventConst.EVENTTYPE_REACTIVATION_PRIME_DAY) {
      this.setVisibility();
    }
  };
  StatusIconTieredPaymentReward.prototype.updateCurrentEventVO = function () {
    this._paymentEventVO = u.CastleModel.specialEventData.getActiveEventByAnyEventId([a.EventConst.EVENTTYPE_TIERED_PRIME_DAY]);
  };
  return StatusIconTieredPaymentReward;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.StatusIconTieredPaymentReward = d;
var p = require("./175.js");
var h = require("./1.js");