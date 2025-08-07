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
  function SEQCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SEQCommand, e);
  Object.defineProperty(SEQCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_SELL_EQUIPMENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SEQCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.lordData.parse_GLI(i.gli);
        r.CastleModel.currencyData.parseGCU(i.gcu);
        r.CastleModel.equipData.parse_ESL(i.esl);
        r.CastleModel.gemData.parse_ESL(i.esl);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return SEQCommand;
}(l.CastleCommand);
exports.SEQCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");