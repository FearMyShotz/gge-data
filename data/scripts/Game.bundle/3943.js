Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./21.js");
var s = require("./26.js");
var r = require("./4.js");
var l = function (e) {
  function StatusIconEquipmentEnhancerPrimeSaleEvent() {
    var t = e.call(this, "Btn_EquipmentEnhancerPrimeSale", null, c.AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_TECHNICUS) || this;
    t.setTooltip("dialog_primeday_primesale_enchanterHudIcon_tooltip");
    return t;
  }
  n.__extends(StatusIconEquipmentEnhancerPrimeSaleEvent, e);
  StatusIconEquipmentEnhancerPrimeSaleEvent.prototype.setVisibilityLoaded = function () {
    this._equipmentEnhancerprimeSaleEventVO = r.CastleModel.specialEventData.getActiveEventByEventId(o.EventConst.EVENTTYPE_PRIME_SALES_TECHNICUS);
    if (this._equipmentEnhancerprimeSaleEventVO && r.CastleModel.userData.userLevel >= this._equipmentEnhancerprimeSaleEventVO.minLevel && !r.CastleModel.privateOfferData.isHiddenEvent(this._equipmentEnhancerprimeSaleEventVO.eventId) && r.CastleModel.specialEventData.isEventActive(o.EventConst.EVENTTYPE_ENCHANTER)) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconEquipmentEnhancerPrimeSaleEvent.prototype.onClick = function () {
    if (!r.CastleModel.tutorialData.isTutorialActive && this._equipmentEnhancerprimeSaleEventVO) {
      this._equipmentEnhancerprimeSaleEventVO.openDialog();
    }
  };
  StatusIconEquipmentEnhancerPrimeSaleEvent.prototype.addEventListenerForVisibility = function () {
    r.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    r.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconEquipmentEnhancerPrimeSaleEvent.prototype.removeEventListenerForVisibility = function () {
    r.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    r.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconEquipmentEnhancerPrimeSaleEvent.prototype.onTimerUpdate = function (e = null) {
    if (this.icon && this._equipmentEnhancerprimeSaleEventVO) {
      var t = this._equipmentEnhancerprimeSaleEventVO ? u.CastleTimeStringHelper.getEventTimeString(this._equipmentEnhancerprimeSaleEventVO.remainingEventTimeInSeconds) : "-";
      this.itxt_label.textContentVO.stringValue = t;
    }
    this.updateCache();
  };
  StatusIconEquipmentEnhancerPrimeSaleEvent.prototype.updateStatusIcon = function (e) {
    this.setVisibility();
  };
  StatusIconEquipmentEnhancerPrimeSaleEvent.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconEquipmentEnhancerPrimeSaleEvent.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  return StatusIconEquipmentEnhancerPrimeSaleEvent;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.StatusIconEquipmentEnhancerPrimeSaleEvent = l;
var c = require("./175.js");
var u = require("./27.js");