Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./7.js");
var s = require("./10.js");
var r = function (e) {
  function CRLCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CRLCommand, e);
  Object.defineProperty(CRLCommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.C2S_CANCEL_RECRUITMENT_LOOP;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CRLCommand.prototype.executeCommand = function (e, t) {
    return true;
  };
  return CRLCommand;
}(s.CastleCommand);
exports.CRLCommand = r;
o.classImplementsInterfaces(r, "IExecCommand");