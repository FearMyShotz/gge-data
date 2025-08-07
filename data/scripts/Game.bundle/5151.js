Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = require("./10.js");
var c = function (e) {
  function TXSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TXSCommand, e);
  Object.defineProperty(TXSCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_START_COLLECT_TAX;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  TXSCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.currencyData.parseGCU(i.gcu);
        r.CastleModel.taxData.parse_TXI(i.txi);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return TXSCommand;
}(l.CastleCommand);
exports.TXSCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");