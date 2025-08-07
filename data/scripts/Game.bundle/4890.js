Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./7.js");
var c = require("./4.js");
var u = require("./10.js");
var d = function (e) {
  function HDUCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(HDUCommand, e);
  Object.defineProperty(HDUCommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_DISMISS_HOSPITAL_UNITS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  HDUCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        c.CastleModel.militaryData.parse_GUI(i.gui);
        break;
      case s.ERROR.INVALID_AMOUNT:
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_information"), r.Localize.text("alert_hospital_amountOutdated")));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return HDUCommand;
}(u.CastleCommand);
exports.HDUCommand = d;
var p = require("./9.js");
var h = require("./38.js");
a.classImplementsInterfaces(d, "IExecCommand");