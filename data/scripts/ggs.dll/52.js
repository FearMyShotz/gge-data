Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./5.js");
var s = function (e) {
  function BasicTrackingCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicTrackingCommand, e);
  Object.defineProperty(BasicTrackingCommand.prototype, "commandIsAllowed", {
    get: function () {
      return !this.env.isLocal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicTrackingCommand.prototype, "env", {
    get: function () {
      return a.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicTrackingCommand;
}(require("./6.js").SimpleCommand);
exports.BasicTrackingCommand = s;