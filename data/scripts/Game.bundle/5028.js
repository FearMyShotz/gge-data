Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./7.js");
var s = require("./10.js");
var r = function (e) {
  function SRMCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SRMCommand, e);
  Object.defineProperty(SRMCommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.C2S_SET_RECRUITMENT_MODE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SRMCommand.prototype.executeCommand = function (e, t) {
    return true;
  };
  return SRMCommand;
}(s.CastleCommand);
exports.SRMCommand = r;
o.classImplementsInterfaces(r, "IExecCommand");