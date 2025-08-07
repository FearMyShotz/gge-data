Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./21.js");
var s = require("./255.js");
var r = require("./30.js");
var l = require("./4.js");
var c = require("./664.js");
var u = function (e) {
  function StatusIconSpecialIngameOffer() {
    return e.call(this, "Btn_SpecialIngameOffer", new o.TextVO(""), g.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
  }
  n.__extends(StatusIconSpecialIngameOffer, e);
  StatusIconSpecialIngameOffer.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.setTooltip("dialog_specialIngameOffer_HappyHourTooltip");
  };
  StatusIconSpecialIngameOffer.prototype.addEventListenerForVisibility = function () {
    l.CastleModel.globalOfferData.addEventListener(s.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    l.CastleModel.globalOfferData.addEventListener(s.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
  };
  StatusIconSpecialIngameOffer.prototype.removeEventListenerForVisibility = function () {
    l.CastleModel.globalOfferData.removeEventListener(s.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    l.CastleModel.globalOfferData.removeEventListener(s.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
  };
  StatusIconSpecialIngameOffer.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconSpecialIngameOffer.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconSpecialIngameOffer.prototype.onClick = function () {
    if (this.isOutOfTutorial()) {
      p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleSpecialIngameOfferDialog, new c.CastleOfferDialogProperties(this._currentOffer));
    }
  };
  StatusIconSpecialIngameOffer.prototype.setVisibilityLoaded = function () {
    var e = !this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle;
    this._currentOffer = l.CastleModel.globalOfferData.getActiveOffer(d.CastleGlobalOfferData.EVENT_SPECIALINGAMEOFFER);
    if (this._currentOffer && e) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconSpecialIngameOffer.prototype.onTimerUpdate = function (e = null) {
    this.itxt_label.textContentVO.stringValue = e ? C.CastleTimeStringHelper.getEventTimeString(this._currentOffer.remainingDuration(e.nowValue)) : C.CastleTimeStringHelper.getEventTimeString(this._currentOffer.remainingDuration(r.CachedTimer.getCachedTimer()));
  };
  StatusIconSpecialIngameOffer.prototype.onOfferEnded = function (e) {
    this.setVisibility();
  };
  StatusIconSpecialIngameOffer.prototype.onOfferAdded = function (e) {
    if (!this._currentOffer && !l.CastleModel.globalOfferData.isPrivateOfferActive) {
      if (e.offerVO.offerType == d.CastleGlobalOfferData.EVENT_SPECIALINGAMEOFFER) {
        this._currentOffer = e.offerVO;
        this.show();
      }
    }
  };
  StatusIconSpecialIngameOffer.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.onTimerUpdate();
  };
  return StatusIconSpecialIngameOffer;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.StatusIconSpecialIngameOffer = u;
var d = require("./589.js");
var p = require("./9.js");
var h = require("./1732.js");
var g = require("./110.js");
var C = require("./27.js");