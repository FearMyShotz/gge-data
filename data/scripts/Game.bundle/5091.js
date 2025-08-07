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
  function FTLCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FTLCommand, e);
  Object.defineProperty(FTLCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_FORTUNE_TELLER_EVENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FTLCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        if (i) {
          r.CastleModel.fortuneTeller.parseFTL(i);
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return FTLCommand;
}(l.CastleCommand);
exports.FTLCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");