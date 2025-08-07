Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./7.js");
var u = require("./10.js");
var d = function (e) {
  function SSDCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SSDCommand, e);
  Object.defineProperty(SSDCommand.prototype, "cmdId", {
    get: function () {
      return c.ClientConstSF.S2C_SERVER_SHUTDOWN;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SSDCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case r.ERROR.ALL_OK:
        p.CastleDialogHandler.getInstance().registerDialogs(h.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(l.Localize.text("generic_alert_warning"), l.Localize.text("servershutdownpremonition_registered_copy", [a.TimeStringHelper.getTimeToString(60, a.TimeStringHelper.ONE_TIME_HOURS_FORMAT, l.Localize.text)])));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return SSDCommand;
}(u.CastleCommand);
exports.SSDCommand = d;
var p = require("./9.js");
var h = require("./38.js");
s.classImplementsInterfaces(d, "IExecCommand");