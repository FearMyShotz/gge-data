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
  function MOSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MOSCommand, e);
  Object.defineProperty(MOSCommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_OPEN_GATE_START;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MOSCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        c.CastleModel.currencyData.parseGCU(i.gcu);
        c.CastleModel.userData.parse_MOS(i);
        return true;
      case s.ERROR.INVALID_PARAMETER_VALUE:
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_information"), r.Localize.text("error_openGate_eilandProtection")));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return MOSCommand;
}(u.CastleCommand);
exports.MOSCommand = d;
var p = require("./9.js");
var h = require("./38.js");
a.classImplementsInterfaces(d, "IExecCommand");