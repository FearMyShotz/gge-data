Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./442.js");
var c = require("./259.js");
var u = function (e) {
  function CastleTimedYesNoDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleTimedYesNoDialog.NAME) || this;
  }
  n.__extends(CastleTimedYesNoDialog, e);
  CastleTimedYesNoDialog.prototype.initLoaded = function (t = null) {
    this.timerField ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_timer, new r.TextVO(""));
    e.prototype.initLoaded.call(this, t);
  };
  CastleTimedYesNoDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.timer = new c.CastleTimerComponent(this.timerField, this.bindFunction(this.getTimeString), this.timedDialogProperties.remainingTimeInSeconds);
    this.timer.addEventListener(l.CastleTimerComponentEvent.TIMER_EXPIRED, this.bindFunction(this.onTimerExpired));
  };
  CastleTimedYesNoDialog.prototype.getTimeString = function (e) {
    return s.Localize.text(this.timedDialogProperties.timerTextID, [o.TimeStringHelper.getShortTimeStringBySeconds(e, o.TimeStringHelper.HOURS_MINUTES_SECONDS_FORMAT)]);
  };
  CastleTimedYesNoDialog.prototype.onTimerExpired = function (e) {
    this.hide();
  };
  CastleTimedYesNoDialog.prototype.hideLoaded = function (t = null) {
    if (!this.timer.isExpired()) {
      this.timer.stop();
    }
    e.prototype.hideLoaded.call(this, t);
  };
  Object.defineProperty(CastleTimedYesNoDialog.prototype, "timedDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTimedYesNoDialog.__initialize_static_members = function () {
    CastleTimedYesNoDialog.NAME = "CastleTimedYesNoEx";
  };
  return CastleTimedYesNoDialog;
}(require("./449.js").CastleLargeYesNoDialog);
exports.CastleTimedYesNoDialog = u;
a.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();