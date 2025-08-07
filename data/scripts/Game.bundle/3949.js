Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./21.js");
var l = require("./26.js");
var c = require("./32.js");
var u = require("./4.js");
var d = function (e) {
  function StatusIconAlliPaymentBonus() {
    var t = e.call(this, "Btn_AlliPaymentBonus", new s.TextVO(""), h.AOfferHubBaseStatusIcon.PRIORITY_ALLIANCE_PRIME_TIME) || this;
    t.setTooltip("dialog_specialOffer_HappyHourTooltip");
    return t;
  }
  n.__extends(StatusIconAlliPaymentBonus, e);
  StatusIconAlliPaymentBonus.prototype.addEventListenerForVisibility = function () {
    u.CastleModel.specialEventData.addEventListener(l.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventRefresh));
    u.CastleModel.specialEventData.addEventListener(l.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemove));
    this.controller.addEventListener(c.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
  };
  StatusIconAlliPaymentBonus.prototype.removeEventListenerForVisibility = function () {
    u.CastleModel.specialEventData.removeEventListener(l.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventRefresh));
    u.CastleModel.specialEventData.removeEventListener(l.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemove));
    this.controller.removeEventListener(c.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
  };
  StatusIconAlliPaymentBonus.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconAlliPaymentBonus.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconAlliPaymentBonus.prototype.onClick = function () {
    if (this.isOutOfTutorial()) {
      o.CommandController.instance.executeCommand(p.IngameClientCommands.OPEN_EVENT_DIALOG_COMMAND, this.alliPaymentBonusEventVO);
    }
  };
  StatusIconAlliPaymentBonus.prototype.setVisibilityLoaded = function () {
    if (this.alliPaymentBonusEventVO && u.CastleModel.userData.isInAlliance && !u.CastleModel.tutorialData.isTutorialActive && !u.CastleModel.privateOfferData.isHiddenEvent(this.alliPaymentBonusEventVO.eventId)) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconAlliPaymentBonus.prototype.onTimerUpdate = function (e = null) {
    if (this.alliPaymentBonusEventVO) {
      this.itxt_label.textContentVO.stringValue = C.CastleTimeStringHelper.getEventTimeString(this.alliPaymentBonusEventVO.remainingEventTimeInSeconds);
    }
  };
  StatusIconAlliPaymentBonus.prototype.onEventRefresh = function (e) {
    if (g.instanceOfClass(e.specialEventVO, "AlliPaymentBonusEventVO")) {
      this.setVisibility();
    }
  };
  StatusIconAlliPaymentBonus.prototype.onEventRemove = function (e) {
    if (g.instanceOfClass(e.specialEventVO, "AlliPaymentBonusEventVO")) {
      this.hide();
    }
  };
  StatusIconAlliPaymentBonus.prototype.onAllianceStatusChanged = function (e) {
    this.setVisibility();
  };
  Object.defineProperty(StatusIconAlliPaymentBonus.prototype, "alliPaymentBonusEventVO", {
    get: function () {
      return u.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_ALLIPAYMENT);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconAlliPaymentBonus.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.onTimerUpdate();
  };
  return StatusIconAlliPaymentBonus;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.StatusIconAlliPaymentBonus = d;
var p = require("./29.js");
var h = require("./175.js");
var g = require("./1.js");
var C = require("./27.js");