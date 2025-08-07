Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = function (e) {
  function JCACommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(JCACommand, e);
  Object.defineProperty(JCACommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_JOIN_CASTLE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  JCACommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return JCACommand;
}(r.CastleCommand);
exports.JCACommand = l;
o.classImplementsInterfaces(l, "IExecCommand");