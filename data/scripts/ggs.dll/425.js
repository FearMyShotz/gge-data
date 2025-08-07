Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./26.js");
var s = require("./83.js");
var r = require("./8.js");
var o = require("./9.js");
var l = require("./421.js");
var u = require("./25.js");
var c = require("./40.js");
var _ = require("./65.js");
var d = require("./12.js");
var m = require("./18.js");
var h = function (e) {
  function CPSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(CPSCommand, e);
  Object.defineProperty(CPSCommand.prototype, "cmdId", {
    get: function () {
      return o.BasicSmartfoxConstants.S2C_CHILD_PROTECTION_AUTO_SHUTDOWN_EVENT;
    },
    enumerable: true,
    configurable: true
  });
  CPSCommand.prototype.executeCommand = function (t, n) {
    switch (t) {
      case s.IdentityManagementConstants.ERROR_SHUT_DOWN_ALERT:
        this._shutDownControlTimer = new l.ShutDownControlTimer(s.IdentityManagementConstants.SHUTDOWN_CONTROL_TIMER);
        this._shutDownControlTimer.startCountDown();
        this.layoutManager.showDialog(c.CommonDialogNames.StandardOkDialog_NAME, new _.BasicStandardOkDialogProperties(m.Localize.text("generic_alert_warning"), m.Localize.text("generic_alert_korea_logoutCountdown", [this._shutDownControlTimer.showTimerCountdown, m.Localize.text])));
        break;
      case s.IdentityManagementConstants.ERROR_UNDERAGE_LOGOUT:
        this.env.underAgeConnectionLost = true;
        this._shutDownControlTimer.stopShutDownTimer();
        d.CommandController.instance.executeCommand(r.BasicController.COMMAND_LOGOUT);
    }
    return e.prototype.executeCommand.call(this, t, n);
  };
  Object.defineProperty(CPSCommand.prototype, "layoutManager", {
    get: function () {
      return u.BasicLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CPSCommand;
}(a.BasicCommand);
exports.CPSCommand = h;