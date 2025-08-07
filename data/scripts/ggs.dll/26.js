Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./5.js");
var a = function () {
  function BasicCommand() {}
  BasicCommand.prototype.executeCommand = function (e, t) {
    return true;
  };
  Object.defineProperty(BasicCommand.prototype, "env", {
    get: function () {
      return i.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicCommand.prototype, "cmdId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  return BasicCommand;
}();
exports.BasicCommand = a;