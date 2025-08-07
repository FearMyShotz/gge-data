Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./21.js");
var s = require("./26.js");
var r = require("./4.js");
var l = function (e) {
  function StatusIconRelicEnchanterPrimeSaleEvent() {
    var t = e.call(this, "Btn_RelicEnchanterPrimeSale", null, c.AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_RELICUS) || this;
    t.setTooltip("dialog_primeday_primesale_relicEnchanterHudIcon_tooltip");
    return t;
  }
  n.__extends(StatusIconRelicEnchanterPrimeSaleEvent, e);
  StatusIconRelicEnchanterPrimeSaleEvent.prototype.setVisibilityLoaded = function () {
    this._relicEnchanterPrimeSaleEventVO = r.CastleModel.specialEventData.getActiveEventByEventId(o.EventConst.EVENTTYPE_PRIME_SALES_RELIC_ENCHANTER);
    if (this._relicEnchanterPrimeSaleEventVO && r.CastleModel.userData.userLevel >= this._relicEnchanterPrimeSaleEventVO.minLevel && !r.CastleModel.privateOfferData.isHiddenEvent(this._relicEnchanterPrimeSaleEventVO.eventId)) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconRelicEnchanterPrimeSaleEvent.prototype.onClick = function () {
    if (!r.CastleModel.tutorialData.isTutorialActive && this._relicEnchanterPrimeSaleEventVO) {
      this._relicEnchanterPrimeSaleEventVO.openDialog();
    }
  };
  StatusIconRelicEnchanterPrimeSaleEvent.prototype.addEventListenerForVisibility = function () {
    r.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    r.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconRelicEnchanterPrimeSaleEvent.prototype.removeEventListenerForVisibility = function () {
    r.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    r.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconRelicEnchanterPrimeSaleEvent.prototype.onTimerUpdate = function (e = null) {
    if (this.icon && this.icon.txt_label && this._relicEnchanterPrimeSaleEventVO) {
      var t = this._relicEnchanterPrimeSaleEventVO ? u.CastleTimeStringHelper.getEventTimeString(this._relicEnchanterPrimeSaleEventVO.remainingEventTimeInSeconds) : "-";
      this.itxt_label.textContentVO.stringValue = t;
      this.updateCache();
    }
  };
  StatusIconRelicEnchanterPrimeSaleEvent.prototype.updateStatusIcon = function (e) {
    this.setVisibility();
  };
  StatusIconRelicEnchanterPrimeSaleEvent.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconRelicEnchanterPrimeSaleEvent.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  return StatusIconRelicEnchanterPrimeSaleEvent;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.StatusIconRelicEnchanterPrimeSaleEvent = l;
var c = require("./175.js");
var u = require("./27.js");