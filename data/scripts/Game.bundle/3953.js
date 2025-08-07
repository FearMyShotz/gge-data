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
  function StatusIconPrimeAlliBonus() {
    var t = e.call(this, "Btn_PrimeAlliBonus", new s.TextVO(""), h.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
    t.setTooltip("dialog_specialOffer_HappyHourTooltip");
    return t;
  }
  n.__extends(StatusIconPrimeAlliBonus, e);
  StatusIconPrimeAlliBonus.prototype.addEventListenerForVisibility = function () {
    u.CastleModel.specialEventData.addEventListener(l.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventRefresh));
    u.CastleModel.specialEventData.addEventListener(l.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemove));
    this.controller.addEventListener(c.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
  };
  StatusIconPrimeAlliBonus.prototype.removeEventListenerForVisibility = function () {
    u.CastleModel.specialEventData.removeEventListener(l.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventRefresh));
    u.CastleModel.specialEventData.removeEventListener(l.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemove));
    this.controller.removeEventListener(c.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
  };
  StatusIconPrimeAlliBonus.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconPrimeAlliBonus.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconPrimeAlliBonus.prototype.onClick = function () {
    if (this.isOutOfTutorial()) {
      o.CommandController.instance.executeCommand(p.IngameClientCommands.OPEN_EVENT_DIALOG_COMMAND, this.primeAlliBonusEventVO);
    }
  };
  StatusIconPrimeAlliBonus.prototype.setVisibilityLoaded = function () {
    if (this.primeAlliBonusEventVO && u.CastleModel.userData.isInAlliance && this.isOutOfTutorial() && !u.CastleModel.privateOfferData.isHiddenEvent(this.primeAlliBonusEventVO.eventId)) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconPrimeAlliBonus.prototype.onTimerUpdate = function (e = null) {
    this.itxt_label.textContentVO.stringValue = C.CastleTimeStringHelper.getEventTimeString(this.primeAlliBonusEventVO.remainingEventTimeInSeconds);
  };
  StatusIconPrimeAlliBonus.prototype.onEventRefresh = function (e) {
    if (g.instanceOfClass(e.specialEventVO, "PrimeAlliBonusEventVO")) {
      this.setVisibility();
    }
  };
  StatusIconPrimeAlliBonus.prototype.onEventRemove = function (e) {
    if (g.instanceOfClass(e.specialEventVO, "PrimeAlliBonusEventVO")) {
      this.hide();
    }
  };
  StatusIconPrimeAlliBonus.prototype.onAllianceStatusChanged = function (e) {
    this.setVisibility();
  };
  Object.defineProperty(StatusIconPrimeAlliBonus.prototype, "primeAlliBonusEventVO", {
    get: function () {
      return u.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_ALLIPRIME);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconPrimeAlliBonus.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.onTimerUpdate();
  };
  return StatusIconPrimeAlliBonus;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.StatusIconPrimeAlliBonus = d;
var p = require("./29.js");
var h = require("./109.js");
var g = require("./1.js");
var C = require("./27.js");