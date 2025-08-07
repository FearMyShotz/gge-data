Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./7.js");
var s = require("./10.js");
var r = function (e) {
  function AAACommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AAACommand, e);
  Object.defineProperty(AAACommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_ALLIANCE_ANSWER_APPLICATION;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AAACommand.prototype.executeCommand = function (e, t) {
    this.showErrorDialog(e, t);
    return false;
  };
  return AAACommand;
}(s.CastleCommand);
exports.AAACommand = r;
o.classImplementsInterfaces(r, "IExecCommand");