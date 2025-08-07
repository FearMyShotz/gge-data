Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = function (e) {
  function BFLCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BFLCommand, e);
  Object.defineProperty(BFLCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_SET_MEAD_PRIORITY;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BFLCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        JSON.parse(t[1]);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return BFLCommand;
}(r.CastleCommand);
exports.BFLCommand = l;
o.classImplementsInterfaces(l, "IExecCommand");