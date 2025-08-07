Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./26.js");
var s = require("./8.js");
var r = require("./9.js");
var o = require("./12.js");
var l = function (e) {
  function VPMCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(VPMCommand, e);
  Object.defineProperty(VPMCommand.prototype, "cmdId", {
    get: function () {
      return r.BasicSmartfoxConstants.S2C_VERIFY_PLAYER_MAIL_EVENT;
    },
    enumerable: true,
    configurable: true
  });
  VPMCommand.prototype.executeCommand = function (t, n) {
    o.CommandController.instance.executeCommand(s.BasicController.COMMAND_VERIFY_PLAYER_MAIL, t);
    return e.prototype.executeCommand.call(this, t, n);
  };
  return VPMCommand;
}(a.BasicCommand);
exports.VPMCommand = l;