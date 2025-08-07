Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = function (e) {
  function MFSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MFSCommand, e);
  Object.defineProperty(MFSCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_FORWARD_SPY_LOG;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MFSCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
      case a.ERROR.ALREADY_HAS_SPY_REPORT:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return MFSCommand;
}(r.CastleCommand);
exports.MFSCommand = l;
o.classImplementsInterfaces(l, "IExecCommand");