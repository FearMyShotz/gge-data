Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./476.js");
var s = require("./37.js");
var r = require("./7.js");
var l = function (e) {
  function FCECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FCECommand, e);
  Object.defineProperty(FCECommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_GET_FEAST_COST_REDUCTION;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleDispatchingCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FCECommand.prototype, "eventType", {
    get: function () {
      return s.CastleServerMessageArrivedEvent.FCE_ARRIVED;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleDispatchingCommand.prototype, "eventType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FCECommand;
}(a.CastleDispatchingCommand);
exports.FCECommand = l;
o.classImplementsInterfaces(l, "IExecCommand");