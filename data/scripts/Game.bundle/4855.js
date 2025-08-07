Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = function (e) {
  function AFRCommand() {
    return e.call(this) || this;
  }
  n.__extends(AFRCommand, e);
  Object.defineProperty(AFRCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_ACCEPT_FRIEND_REQUEST;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AFRCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return AFRCommand;
}(r.CastleCommand);
exports.AFRCommand = l;
o.classImplementsInterfaces(l, "IExecCommand");