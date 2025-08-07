Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./7.js");
var l = require("./4.js");
var c = require("./5150.js");
var u = require("./10.js");
var d = function (e) {
  function TXCCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TXCCommand, e);
  Object.defineProperty(TXCCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_COLLECT_TAX;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  TXCCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleModel.currencyData.parseGCU(i.gcu);
        l.CastleModel.taxData.parse_TXI(i.txi);
        var n = s.int(i.CT);
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleGetTaxDialog, new c.CastleGetTaxDialogProperties(n));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return TXCCommand;
}(u.CastleCommand);
exports.TXCCommand = d;
var p = require("./9.js");
var h = require("./5151.js");
o.classImplementsInterfaces(d, "IExecCommand");