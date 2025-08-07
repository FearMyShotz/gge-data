Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./12.js");
var s = require("./6.js");
var r = require("./8.js");
var o = function (e) {
  function BasicConnectionFailedCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicConnectionFailedCommand, e);
  BasicConnectionFailedCommand.prototype.execute = function (e = null) {
    a.CommandController.instance.executeCommand(r.BasicController.COMMAND_PREPARE_RECONNECT);
  };
  return BasicConnectionFailedCommand;
}(s.SimpleCommand);
exports.BasicConnectionFailedCommand = o;