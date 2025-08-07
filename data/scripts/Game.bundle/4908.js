Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./37.js");
var u = require("./15.js");
var d = function (e) {
  function CastleCPSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleCPSCommand, e);
  CastleCPSCommand.prototype.executeCommand = function (t, i) {
    switch (t) {
      case r.IdentityManagementConstants.ERROR_SHUT_DOWN_ALERT:
        this._shutDownControlTimer = new l.ShutDownControlTimer(r.IdentityManagementConstants.SHUTDOWN_CONTROL_TIMER);
        u.CastleBasicController.getInstance().dispatchEvent(new c.CastleServerMessageArrivedEvent(c.CastleServerMessageArrivedEvent.CPS_ARRIVED, [this._shutDownControlTimer]));
        this._shutDownControlTimer.startCountDown();
        p.CastleDialogHandler.getInstance().registerDialogs(h.CastleNotifyDialog, new a.BasicStandardOkDialogProperties(null, o.BasicModel.languageData.getTextById("generic_alert_korea_logoutCountdown", [this._shutDownControlTimer.showTimerCountdown])));
        break;
      case r.IdentityManagementConstants.ERROR_UNDERAGE_LOGOUT:
        e.prototype.executeCommand.call(this, t, i);
    }
    return true;
  };
  return CastleCPSCommand;
}(s.CPSCommand);
exports.CastleCPSCommand = d;
var p = require("./9.js");
var h = require("./4909.js");