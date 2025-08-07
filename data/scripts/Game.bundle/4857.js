Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = function (e) {
  function SFRCommand() {
    return e.call(this) || this;
  }
  n.__extends(SFRCommand, e);
  Object.defineProperty(SFRCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_SEND_FRIEND_REQUEST;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SFRCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return SFRCommand;
}(r.CastleCommand);
exports.SFRCommand = l;
o.classImplementsInterfaces(l, "IExecCommand");