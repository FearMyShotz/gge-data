Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./274.js");
var s = require("./21.js");
var r = require("./26.js");
var l = require("./161.js");
var c = require("./4.js");
var u = function (e) {
  function StatusIconPaymentReward() {
    return e.call(this, "Btn_PaymentReward", null, d.AOfferHubBaseStatusIcon.PRIORITY_PRIME_DAY_EVENT) || this;
  }
  n.__extends(StatusIconPaymentReward, e);
  StatusIconPaymentReward.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
  };
  StatusIconPaymentReward.prototype.initTextField = function () {
    e.prototype.initTextField.call(this);
    if (this.itxt_label && this.itxt_label.visible && this._paymentEventVO && this._paymentEventVO.isTimeDisplayedInPercentage) {
      this.itxt_label.visible = false;
    }
  };
  StatusIconPaymentReward.prototype.displayTimeInPercentage = function () {
    this.updateRemainingFromTimestamps(this._paymentEventVO.startTimestamp, this._paymentEventVO.endTimestamp);
  };
  StatusIconPaymentReward.prototype.hide = function () {
    this._paymentEventVO = null;
    e.prototype.hide.call(this);
  };
  StatusIconPaymentReward.prototype.addEventListenerForVisibility = function () {
    c.CastleModel.specialEventData.addEventListener(r.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onPaymentRewardUpdate));
    c.CastleModel.specialEventData.addEventListener(r.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.controller.addEventListener(l.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onChangePossibilityToShowMe));
    c.CastleModel.timerData.addEventListener(s.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconPaymentReward.prototype.removeEventListenerForVisibility = function () {
    c.CastleModel.specialEventData.removeEventListener(r.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onPaymentRewardUpdate));
    c.CastleModel.specialEventData.removeEventListener(r.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.controller.removeEventListener(l.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onChangePossibilityToShowMe));
    c.CastleModel.timerData.removeEventListener(s.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconPaymentReward.prototype.onTimerUpdate = function (e = null) {
    if (this._paymentEventVO) {
      if (this._paymentEventVO.isTimeDisplayedInPercentage) {
        this.displayTimeInPercentage();
      } else if (this.itxt_label && !this._paymentEventVO.isTimeless) {
        this.itxt_label.textContentVO.stringValue = h.CastleTimeStringHelper.getEventTimeString(this._paymentEventVO.remainingEventTimeInSeconds);
      }
    }
  };
  StatusIconPaymentReward.prototype.setVisibilityLoaded = function () {
    this.updateCurrentEventVO();
    var e = !this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle;
    if (!c.CastleModel.tutorialData.isTutorialActive && e && this._paymentEventVO && !c.CastleModel.privateOfferData.isHiddenEvent(this._paymentEventVO.eventId)) {
      this.setVisibilityForSimplePrimeDay();
      this.show();
      this.updateCache(false);
    } else {
      this.hide();
    }
  };
  StatusIconPaymentReward.prototype.setVisibilityForSimplePrimeDay = function () {
    this.setTooltip(this.getTooltipBySkinID());
    if (this._innerIconClip) {
      this.customizeInnerIconClip(this._innerIconClip);
      this.addAndResizeInnerIcon();
    }
    if (this.iconDisp.barItem) {
      this.iconDisp.barItem.visible = false;
      if (this._paymentEventVO && this._paymentEventVO.isTimeDisplayedInPercentage) {
        this.iconDisp.barItem.visible = true;
      }
    }
    this.initTextField();
  };
  StatusIconPaymentReward.prototype.getTooltipBySkinID = function () {
    switch (this._paymentEventVO.skinID) {
      case 1:
        return "dialog_primeday_independenceDay_title";
      case a.ClientConstEvent.PRIMEDAY_SUPER:
      default:
        return "eventBuilding_decoOffer";
    }
  };
  StatusIconPaymentReward.prototype.updateCurrentEventVO = function () {
    this._paymentEventVO = c.CastleModel.specialEventData.getActiveEventByEventId(o.EventConst.EVENTTYPE_PAYMENTREWARD_SPECIAL_OFFER);
  };
  StatusIconPaymentReward.prototype.onChangePossibilityToShowMe = function (e) {
    this.setVisibility();
  };
  StatusIconPaymentReward.prototype.onClick = function () {
    if (this._paymentEventVO) {
      this._paymentEventVO.openDialog();
    }
  };
  StatusIconPaymentReward.prototype.onRemoveEvent = function (e) {
    if (p.instanceOfClass(e.specialEventVO, "PaymentrewardEventVO") && this._paymentEventVO && e.specialEventVO.eventId == this._paymentEventVO.eventId) {
      this.hide();
    }
  };
  StatusIconPaymentReward.prototype.onPaymentRewardUpdate = function (e) {
    this.updateCurrentEventVO();
    if (p.instanceOfClass(e.specialEventVO, "PaymentrewardEventVO") && e.specialEventVO.eventId != o.EventConst.EVENTTYPE_REACTIVATION_PRIME_DAY) {
      this.setVisibility();
    }
  };
  StatusIconPaymentReward.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.onTimerUpdate();
  };
  StatusIconPaymentReward.prototype.onInnerIconClipLoaded = function (t = null) {
    if (this.visible) {
      this.setVisibilityForSimplePrimeDay();
    }
    e.prototype.onInnerIconClipLoaded.call(this, t);
  };
  StatusIconPaymentReward.prototype.customizeInnerIconClip = function (t) {
    if (t && this._paymentEventVO) {
      e.prototype.customizeInnerIconClip.call(this, t);
      var i = 4 + this._paymentEventVO.skinID;
      if (i >= 100) {
        i -= 100;
      }
      t.gotoAndStop(i);
    }
  };
  return StatusIconPaymentReward;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.StatusIconPaymentReward = u;
var d = require("./175.js");
var p = require("./1.js");
var h = require("./27.js");