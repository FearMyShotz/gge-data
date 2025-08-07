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
  function HRACommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(HRACommand, e);
  Object.defineProperty(HRACommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_REVIVE_ALL_HOSPITAL_UNITS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  HRACommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        c.CastleModel.currencyData.parseGCU(i.gcu);
        c.CastleModel.militaryData.parse_GUI(i.gui);
        c.CastleModel.areaData.activeArea.updater.parseGPA(i.gpa);
        break;
      case s.ERROR.INVALID_AMOUNT:
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_information"), r.Localize.text("alert_hospital_amountOutdated")));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return HRACommand;
}(u.CastleCommand);
exports.HRACommand = d;
var p = require("./9.js");
var h = require("./38.js");
a.classImplementsInterfaces(d, "IExecCommand");