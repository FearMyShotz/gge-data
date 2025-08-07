Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./21.js");
var l = require("./26.js");
var c = require("./4.js");
var u = function (e) {
  function StatusIconPrimeSaleEvent() {
    var t = e.call(this, "Btn_PrimeSales", null, d.AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_BUILDINGS) || this;
    t.setTooltip("dialog_specialOfferDeco_title");
    return t;
  }
  n.__extends(StatusIconPrimeSaleEvent, e);
  StatusIconPrimeSaleEvent.prototype.setVisibilityLoaded = function () {
    this._primeSaleEventVO = c.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_PRIME_SALES);
    if (this._primeSaleEventVO && c.CastleModel.userData.userLevel >= this._primeSaleEventVO.minLevel && !c.CastleModel.privateOfferData.isHiddenEvent(this._primeSaleEventVO.eventId)) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconPrimeSaleEvent.prototype.onClick = function () {
    if (!c.CastleModel.tutorialData.isTutorialActive && this._primeSaleEventVO) {
      this._primeSaleEventVO.openDialog();
    }
  };
  StatusIconPrimeSaleEvent.prototype.addEventListenerForVisibility = function () {
    c.CastleModel.specialEventData.addEventListener(l.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    c.CastleModel.specialEventData.addEventListener(l.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconPrimeSaleEvent.prototype.removeEventListenerForVisibility = function () {
    c.CastleModel.specialEventData.removeEventListener(l.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    c.CastleModel.specialEventData.removeEventListener(l.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconPrimeSaleEvent.prototype.onTimerUpdate = function (e = null) {
    if (this.icon && this.icon.txt_label && this._primeSaleEventVO) {
      var t = this._primeSaleEventVO ? p.CastleTimeStringHelper.getEventTimeString(this._primeSaleEventVO.remainingEventTimeInSeconds) : "-";
      this.textFieldManager.registerTextField(this.icon.txt_label, new s.TextVO(t), new o.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
      this.updateCache();
    }
  };
  StatusIconPrimeSaleEvent.prototype.updateStatusIcon = function (e) {
    this.setVisibility();
  };
  StatusIconPrimeSaleEvent.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconPrimeSaleEvent.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  return StatusIconPrimeSaleEvent;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.StatusIconPrimeSaleEvent = u;
var d = require("./175.js");
var p = require("./27.js");