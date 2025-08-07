Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./6.js");
var s = require("./5.js");
var r = function (e) {
  function BasicClientCommand(t = false) {
    return e.call(this, t) || this;
  }
  i.__extends(BasicClientCommand, e);
  Object.defineProperty(BasicClientCommand.prototype, "env", {
    get: function () {
      return s.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicClientCommand;
}(a.SimpleCommand);
exports.BasicClientCommand = r;