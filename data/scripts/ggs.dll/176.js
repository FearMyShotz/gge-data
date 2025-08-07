Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function BasicNetworkUpdateCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicNetworkUpdateCommand, e);
  BasicNetworkUpdateCommand.prototype.execute = function (e = null) {};
  return BasicNetworkUpdateCommand;
}(require("./36.js").BasicClientCommand);
exports.BasicNetworkUpdateCommand = a;