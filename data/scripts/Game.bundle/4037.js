Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./6.js");
var s = require("./21.js");
var r = require("./26.js");
var l = require("./4.js");
var c = function (e) {
  function StatusIconPrimeSaleReviveAllEvent() {
    var t = e.call(this, "Btn_PrimeSalesReviveAll", null, u.AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_REVIVE_ALL) || this;
    t.setTooltip("dialog_specialOfferDeco_title");
    return t;
  }
  n.__extends(StatusIconPrimeSaleReviveAllEvent, e);
  StatusIconPrimeSaleReviveAllEvent.prototype.setVisibilityLoaded = function () {
    this._primeSaleEventVO = l.CastleModel.specialEventData.getActiveEventByEventId(o.EventConst.EVENTTYPE_PRIME_SALES_REVIVE_ALL);
    if (this._primeSaleEventVO) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconPrimeSaleReviveAllEvent.prototype.onClick = function () {
    if (!l.CastleModel.tutorialData.isTutorialActive && this._primeSaleEventVO) {
      this._primeSaleEventVO.openDialog();
    }
  };
  StatusIconPrimeSaleReviveAllEvent.prototype.addEventListenerForVisibility = function () {
    l.CastleModel.specialEventData.addEventListener(r.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
    l.CastleModel.specialEventData.addEventListener(r.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconPrimeSaleReviveAllEvent.prototype.removeEventListenerForVisibility = function () {
    l.CastleModel.specialEventData.removeEventListener(r.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
    l.CastleModel.specialEventData.removeEventListener(r.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconPrimeSaleReviveAllEvent.prototype.updateStatusIcon = function (e) {
    this.setVisibility();
  };
  StatusIconPrimeSaleReviveAllEvent.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
  };
  StatusIconPrimeSaleReviveAllEvent.prototype.onTimerUpdate = function (e = null) {
    var t = 0;
    if (this._primeSaleEventVO) {
      t = a.int(this._primeSaleEventVO.remainingEventTimeInSeconds);
    }
    if (this.itxt_label) {
      this.itxt_label.textContentVO.stringValue = d.CastleTimeStringHelper.getEventTimeString(t);
    }
  };
  StatusIconPrimeSaleReviveAllEvent.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(s.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconPrimeSaleReviveAllEvent.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(s.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  return StatusIconPrimeSaleReviveAllEvent;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.StatusIconPrimeSaleReviveAllEvent = c;
var u = require("./175.js");
var d = require("./27.js");