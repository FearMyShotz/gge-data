Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./8.js");
var s = require("./84.js");
var r = function (e) {
  function BasicReconnectCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicReconnectCommand, e);
  BasicReconnectCommand.prototype.execute = function (e = null) {
    s.BasicDialogHandler.getInstance().destroy();
    a.BasicController.getInstance().paymentHash = null;
  };
  return BasicReconnectCommand;
}(require("./6.js").SimpleCommand);
exports.BasicReconnectCommand = r;