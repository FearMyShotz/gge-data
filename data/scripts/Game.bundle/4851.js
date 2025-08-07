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
  function SGECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SGECommand, e);
  Object.defineProperty(SGECommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_SELL_GEM;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SGECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        r.CastleModel.gemData.parse_SGE();
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return SGECommand;
}(l.CastleCommand);
exports.SGECommand = c;
o.classImplementsInterfaces(c, "IExecCommand");