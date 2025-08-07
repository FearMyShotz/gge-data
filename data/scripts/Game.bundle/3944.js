Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./21.js");
var s = require("./26.js");
var r = require("./32.js");
var l = require("./4.js");
var c = require("./130.js");
var u = function (e) {
  function StatusIconEventPackagePrimeSaleEvent() {
    var t = e.call(this, "Btn_EventPackagePrimeSales", null, d.AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_PACKAGES) || this;
    t.setTooltip("dialog_specialOfferDeco_title");
    return t;
  }
  n.__extends(StatusIconEventPackagePrimeSaleEvent, e);
  StatusIconEventPackagePrimeSaleEvent.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
  };
  StatusIconEventPackagePrimeSaleEvent.prototype.setVisibilityLoaded = function () {
    this._eventPackagePrimeSaleEventVO = l.CastleModel.specialEventData.getActiveEventByEventId(o.EventConst.EVENTTYPE_EVENT_PACKAGE_PRIME_SALES);
    if (this._eventPackagePrimeSaleEventVO && this.isVisible()) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconEventPackagePrimeSaleEvent.prototype.isVisible = function () {
    return this._eventPackagePrimeSaleEventVO.canShowDialog();
  };
  StatusIconEventPackagePrimeSaleEvent.prototype.onClick = function () {
    if (!l.CastleModel.tutorialData.isTutorialActive && this._eventPackagePrimeSaleEventVO) {
      this._eventPackagePrimeSaleEventVO.openDialog();
    }
  };
  StatusIconEventPackagePrimeSaleEvent.prototype.addEventListenerForVisibility = function () {
    this.controller.addEventListener(r.CastleUserDataEvent.CHANGE_USER_LIFETIME_SPENT, this.bindFunction(this.updateStatusIcon));
    this.controller.addEventListener(r.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.updateStatusIcon));
    l.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    l.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
    l.CastleModel.specialEventData.addEventListener(c.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.updateStatusIcon));
    l.CastleModel.specialEventData.addEventListener(c.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.updateStatusIcon));
    l.CastleModel.specialEventData.addEventListener(c.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconEventPackagePrimeSaleEvent.prototype.removeEventListenerForVisibility = function () {
    this.controller.removeEventListener(r.CastleUserDataEvent.CHANGE_USER_LIFETIME_SPENT, this.bindFunction(this.updateStatusIcon));
    this.controller.removeEventListener(r.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.updateStatusIcon));
    l.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    l.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
    l.CastleModel.specialEventData.removeEventListener(c.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.updateStatusIcon));
    l.CastleModel.specialEventData.removeEventListener(c.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.updateStatusIcon));
    l.CastleModel.specialEventData.removeEventListener(c.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconEventPackagePrimeSaleEvent.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    l.CastleModel.timerData.addEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconEventPackagePrimeSaleEvent.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    l.CastleModel.timerData.removeEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconEventPackagePrimeSaleEvent.prototype.onTimerUpdate = function (e) {
    var t;
    if (e === undefined) {
      e = null;
    }
    if (this.icon) {
      t = this._eventPackagePrimeSaleEventVO ? p.CastleTimeStringHelper.getEventTimeString(this._eventPackagePrimeSaleEventVO.remainingEventTimeInSeconds) : "-";
      this._itxt_label.textContentVO.stringValue = t;
      this.updateCache();
    }
  };
  StatusIconEventPackagePrimeSaleEvent.prototype.updateStatusIcon = function (e) {
    this.setVisibility();
  };
  return StatusIconEventPackagePrimeSaleEvent;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.StatusIconEventPackagePrimeSaleEvent = u;
var d = require("./175.js");
var p = require("./27.js");