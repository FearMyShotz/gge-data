Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./7.js");
var s = require("./1156.js");
var r = function (e) {
  function FNTCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FNTCommand, e);
  Object.defineProperty(FNTCommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_FIND_NEXT_TOWER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.FNMCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FNTCommand;
}(s.FNMCommand);
exports.FNTCommand = r;
o.classImplementsInterfaces(r, "IExecCommand");