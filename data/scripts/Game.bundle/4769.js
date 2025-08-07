Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./7.js");
var s = require("./37.js");
var r = require("./475.js");
var l = function (e) {
  function DCICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DCICommand, e);
  Object.defineProperty(DCICommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_DISASSEMBLE_CONSTRUCTION_ITEM;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleDispatchingCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DCICommand.prototype, "eventType", {
    get: function () {
      return s.CastleServerMessageArrivedEvent.DCI_ARRIVED;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleDispatchingCommand.prototype, "eventType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return DCICommand;
}(r.CastleDispatchingCommand);
exports.DCICommand = l;
o.classImplementsInterfaces(l, "IExecCommand");