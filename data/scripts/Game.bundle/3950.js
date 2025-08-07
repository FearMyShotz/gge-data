Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./21.js");
var s = require("./255.js");
var r = require("./30.js");
var l = require("./4.js");
var c = require("./665.js");
var u = function (e) {
  function StatusIconDynamicOffer() {
    var t = e.call(this, "Btn_DynamicOffer", new o.TextVO(""), h.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
    t.setTooltip("dialog_specialIngameOffer_DynamicOfferTooltip");
    return t;
  }
  n.__extends(StatusIconDynamicOffer, e);
  StatusIconDynamicOffer.prototype.addEventListenerForVisibility = function () {
    l.CastleModel.globalOfferData.addEventListener(s.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
  };
  StatusIconDynamicOffer.prototype.removeEventListenerForVisibility = function () {
    l.CastleModel.globalOfferData.removeEventListener(s.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
  };
  StatusIconDynamicOffer.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconDynamicOffer.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconDynamicOffer.prototype.onClick = function () {
    if (this.isOutOfTutorial()) {
      d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleDynamicOfferDialog, new c.CastleOfferDialogProperties(this._currentOffer));
    }
  };
  StatusIconDynamicOffer.prototype.setVisibilityLoaded = function () {
    var e = !this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle;
    if (!this._currentOffer && l.CastleModel.globalOfferData.isGlobalOfferActive) {
      this.hide();
    }
    if (this._currentOffer && e) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconDynamicOffer.prototype.onTimerUpdate = function (e = null) {
    this.itxt_label.textContentVO.stringValue = e ? g.CastleTimeStringHelper.getEventTimeString(this._currentOffer.remainingDuration(e.nowValue)) : g.CastleTimeStringHelper.getEventTimeString(this._currentOffer.remainingDuration(r.CachedTimer.getCachedTimer()));
  };
  StatusIconDynamicOffer.prototype.onOfferEnded = function (e) {
    this.setVisibility();
  };
  StatusIconDynamicOffer.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.onTimerUpdate();
  };
  return StatusIconDynamicOffer;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.StatusIconDynamicOffer = u;
var d = require("./9.js");
var p = require("./3951.js");
var h = require("./109.js");
var g = require("./27.js");