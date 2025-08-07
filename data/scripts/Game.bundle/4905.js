Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./820.js");
var l = require("./10.js");
var c = function (e) {
  function KSCCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(KSCCommand, e);
  Object.defineProperty(KSCCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_SELECT_PREBUILT_CASTLE_ID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  KSCCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        this.controller.dispatchEvent(new r.PrebuiltCastleResponseEvent(false));
        break;
      default:
        this.controller.dispatchEvent(new r.PrebuiltCastleResponseEvent(true));
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return KSCCommand;
}(l.CastleCommand);
exports.KSCCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");