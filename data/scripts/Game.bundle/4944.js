Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = function (e) {
  function MFBCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MFBCommand, e);
  Object.defineProperty(MFBCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_FORWARD_BATTLE_LOG;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MFBCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return MFBCommand;
}(r.CastleCommand);
exports.MFBCommand = l;
o.classImplementsInterfaces(l, "IExecCommand");