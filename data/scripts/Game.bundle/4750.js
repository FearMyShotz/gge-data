Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = require("./4751.js");
var c = require("./10.js");
var u = function (e) {
  function SDICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SDICommand, e);
  Object.defineProperty(SDICommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_SUPPORT_DEFENCE_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SDICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = r.CastleModel.supportDefenceData.parse_SDI(i);
        r.CastleModel.lordData.parse_GLI(i.gli);
        d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleSupportDefenceDialog, new l.CastleSupportDefenceDialogProperties(n));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return SDICommand;
}(c.CastleCommand);
exports.SDICommand = u;
var d = require("./9.js");
var p = require("./4752.js");
o.classImplementsInterfaces(u, "IExecCommand");