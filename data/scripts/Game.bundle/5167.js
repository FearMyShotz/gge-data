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
  function TKTCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TKTCommand, e);
  Object.defineProperty(TKTCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_TREASUREMAP_SKIP_TRANSFER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  TKTCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.treasureMapData.parse_TMP(i.tmp);
        r.CastleModel.currencyData.parseGCU(i.gcu);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return true;
  };
  return TKTCommand;
}(l.CastleCommand);
exports.TKTCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");