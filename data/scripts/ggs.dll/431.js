Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./26.js");
var s = require("./8.js");
var r = require("./9.js");
var o = require("./12.js");
var l = function (e) {
  function LPPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(LPPCommand, e);
  Object.defineProperty(LPPCommand.prototype, "cmdId", {
    get: function () {
      return r.BasicSmartfoxConstants.S2C_LOST_PASSWORD_EVENT;
    },
    enumerable: true,
    configurable: true
  });
  LPPCommand.prototype.executeCommand = function (t, n) {
    o.CommandController.instance.executeCommand(s.BasicController.COMMAND_LOST_PASSWORD, t);
    return e.prototype.executeCommand.call(this, t, n);
  };
  return LPPCommand;
}(a.BasicCommand);
exports.LPPCommand = l;