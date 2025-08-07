Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./21.js");
var s = require("./26.js");
var r = require("./4.js");
var l = require("./134.js");
var c = require("./27.js");
var u = function (e) {
  function StatusIconUnitPrimeSaleEvent() {
    var t = e.call(this, "Btn_EventPackagePrimeSales") || this;
    t.setTooltip("dialog_specialOfferDeco_title");
    return t;
  }
  n.__extends(StatusIconUnitPrimeSaleEvent, e);
  StatusIconUnitPrimeSaleEvent.prototype.setVisibilityLoaded = function () {
    this._primeSaleEventVO = r.CastleModel.specialEventData.getActiveEventByEventId(o.EventConst.EVENTTYPE_UNIT_PRIME_SALE);
    if (this._primeSaleEventVO && r.CastleModel.userData.userLevel >= this._primeSaleEventVO.minLevel && !r.CastleModel.privateOfferData.isHiddenEvent(this._primeSaleEventVO.eventId)) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconUnitPrimeSaleEvent.prototype.onClick = function () {
    if (!r.CastleModel.tutorialData.isTutorialActive && this._primeSaleEventVO) {
      this._primeSaleEventVO.openDialog();
    }
  };
  StatusIconUnitPrimeSaleEvent.prototype.addEventListenerForVisibility = function () {
    r.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    r.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconUnitPrimeSaleEvent.prototype.removeEventListenerForVisibility = function () {
    r.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    r.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconUnitPrimeSaleEvent.prototype.onTimerUpdate = function (e = null) {
    if (this.icon && this._primeSaleEventVO) {
      var t = this._primeSaleEventVO ? c.CastleTimeStringHelper.getEventTimeString(this._primeSaleEventVO.remainingEventTimeInSeconds) : "-";
      this.itxt_label.textContentVO.stringValue = t;
      this.updateCache();
    }
  };
  StatusIconUnitPrimeSaleEvent.prototype.updateStatusIcon = function (e) {
    this.setVisibility();
  };
  StatusIconUnitPrimeSaleEvent.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconUnitPrimeSaleEvent.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  return StatusIconUnitPrimeSaleEvent;
}(l.AOfferHubItemStatusIcon);
exports.StatusIconUnitPrimeSaleEvent = u;