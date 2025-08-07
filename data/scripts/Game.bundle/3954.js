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
  function StatusIconPrimeTimeOffer() {
    var t = e.call(this, "Btn_PrivatePrimeTimeOffer", new o.TextVO(""), h.AOfferHubBaseStatusIcon.PRIORITY_PRIVATE_PRIME_TIME) || this;
    t.setTooltip("dialog_specialOffer_HappyHourTooltip");
    return t;
  }
  n.__extends(StatusIconPrimeTimeOffer, e);
  StatusIconPrimeTimeOffer.prototype.addEventListenerForVisibility = function () {
    l.CastleModel.globalOfferData.addEventListener(s.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    l.CastleModel.globalOfferData.addEventListener(s.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
  };
  StatusIconPrimeTimeOffer.prototype.removeEventListenerForVisibility = function () {
    l.CastleModel.globalOfferData.removeEventListener(s.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    l.CastleModel.globalOfferData.removeEventListener(s.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
  };
  StatusIconPrimeTimeOffer.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconPrimeTimeOffer.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconPrimeTimeOffer.prototype.setVisibilityLoaded = function () {
    this.currentOfferVO = l.CastleModel.globalOfferData.getActivePrivatePrimeTimeOffer();
    if (this.currentOfferVO && !this.currentOfferVO.isTimeless) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconPrimeTimeOffer.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    if (this.iconDisp.barItem) {
      this.iconDisp.barItem.visible = false;
    }
  };
  StatusIconPrimeTimeOffer.prototype.onClick = function () {
    d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastlePrivatePrimeTimeOfferDialog, new c.CastleOfferDialogProperties(this.currentOfferVO));
  };
  StatusIconPrimeTimeOffer.prototype.onTimerUpdate = function (e = null) {
    this.itxt_label.textContentVO.stringValue = e ? g.CastleTimeStringHelper.getEventTimeString(this.currentOfferVO.remainingDuration(e.nowValue)) : g.CastleTimeStringHelper.getEventTimeString(this.currentOfferVO.remainingDuration(r.CachedTimer.getCachedTimer()));
  };
  StatusIconPrimeTimeOffer.prototype.onOfferEnded = function (e) {
    this.setVisibility();
  };
  StatusIconPrimeTimeOffer.prototype.onOfferAdded = function (e) {
    this.setVisibility();
  };
  StatusIconPrimeTimeOffer.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.onTimerUpdate();
  };
  return StatusIconPrimeTimeOffer;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.StatusIconPrimeTimeOffer = u;
var d = require("./9.js");
var p = require("./814.js");
var h = require("./175.js");
var g = require("./27.js");