Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./12.js");
var s = require("./8.js");
var r = function (e) {
  function BasicInitalizeControllerCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicInitalizeControllerCommand, e);
  BasicInitalizeControllerCommand.prototype.execute = function (e = null) {
    a.CommandController.instance.executeCommand(s.BasicController.COMMAND_INIT_SERVERCOMMANDS);
    this.initializeGameControllers();
  };
  BasicInitalizeControllerCommand.prototype.initializeGameControllers = function () {};
  BasicInitalizeControllerCommand.prototype.initSoundController = function (e) {
    s.BasicController.getInstance().soundController = e;
    s.BasicController.getInstance().soundController.initialize();
  };
  return BasicInitalizeControllerCommand;
}(require("./6.js").SimpleCommand);
exports.BasicInitalizeControllerCommand = r;