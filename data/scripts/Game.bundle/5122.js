Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./10.js");
var r = require("./7.js");
var l = function (e) {
  function SEDECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SEDECommand, e);
  Object.defineProperty(SEDECommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_SELECT_EVENT_AUTO_SCALING_DIFFICULTY_EVENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SEDECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return true;
  };
  return SEDECommand;
}(s.CastleCommand);
exports.SEDECommand = l;
o.classImplementsInterfaces(l, "IExecCommand");