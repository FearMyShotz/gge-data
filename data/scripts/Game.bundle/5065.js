Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = require("./9.js");
var c = require("./38.js");
var u = require("./2.js");
var d = require("./3.js");
var p = function (e) {
  function TLEPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TLEPCommand, e);
  Object.defineProperty(TLEPCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GLOBAL_SERVER_REGISTER_OR_LOGIN_EP;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  TLEPCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        break;
      case a.ERROR.NO_EVENT:
        l.CastleDialogHandler.getInstance().registerDialogs(c.CastleStandardOkDialog, new u.BasicStandardOkDialogProperties(d.Localize.text("generic_alert_information"), d.Localize.text("alert_tempServer_serverNotAvailable")));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return TLEPCommand;
}(r.CastleCommand);
exports.TLEPCommand = p;
o.classImplementsInterfaces(p, "IExecCommand");