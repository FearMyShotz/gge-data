Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./7.js");
var s = require("./1156.js");
var r = function (e) {
  function FECCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FECCommand, e);
  Object.defineProperty(FECCommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_FIND_NEXT_ENEMY_CASTLE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.FNMCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FECCommand;
}(s.FNMCommand);
exports.FECCommand = r;
o.classImplementsInterfaces(r, "IExecCommand");