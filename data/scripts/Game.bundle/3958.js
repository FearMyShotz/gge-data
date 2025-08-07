Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./21.js");
var r = require("./26.js");
var l = require("./4.js");
var c = require("./27.js");
var u = require("./3959.js");
var d = function (e) {
  function StatusIconWorldCup() {
    var t = e.call(this, "Btn_WorldCup", new a.TextVO(""), g.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
    t.setTooltip("dialog_worldCup");
    return t;
  }
  n.__extends(StatusIconWorldCup, e);
  StatusIconWorldCup.prototype.addEventListenerForVisibility = function () {
    l.CastleModel.specialEventData.addEventListener(r.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onVoteStarted));
    l.CastleModel.specialEventData.addEventListener(r.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnded));
  };
  StatusIconWorldCup.prototype.removeEventListenerForVisibility = function () {
    l.CastleModel.specialEventData.removeEventListener(r.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onVoteStarted));
    l.CastleModel.specialEventData.removeEventListener(r.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnded));
  };
  StatusIconWorldCup.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(s.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconWorldCup.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(s.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconWorldCup.prototype.setVisibilityLoaded = function () {
    this.worldCupEventVO = l.CastleModel.specialEventData.getActiveEventByEventId(o.EventConst.EVENTTYPE_WORLD_CUP);
    if (this.worldCupEventVO && this.worldCupEventVO.remainingEventTimeInSeconds > 0 && l.CastleModel.userData.userLevel >= this.worldCupEventVO.minLevel && !l.CastleModel.privateOfferData.isHiddenEvent(this.worldCupEventVO.eventId)) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconWorldCup.prototype.onClick = function () {
    if (this.isOutOfTutorial()) {
      p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleWorldCupDialog, new u.CastleWorldCupDialogProperties(this.worldCupEventVO));
    }
  };
  StatusIconWorldCup.prototype.onTimerUpdate = function (e = null) {
    this.itxt_label.textContentVO.stringValue = c.CastleTimeStringHelper.getEventTimeString(this.worldCupEventVO.remainingEventTimeInSeconds);
  };
  StatusIconWorldCup.prototype.onEventEnded = function (e) {
    this.setVisibility();
  };
  StatusIconWorldCup.prototype.onVoteStarted = function (e) {
    this.setVisibility();
  };
  StatusIconWorldCup.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.onTimerUpdate();
  };
  return StatusIconWorldCup;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.StatusIconWorldCup = d;
var p = require("./9.js");
var h = require("./3960.js");
var g = require("./109.js");