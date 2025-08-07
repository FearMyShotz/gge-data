Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./7.js");
var s = require("./37.js");
var r = require("./475.js");
var l = function (e) {
  function CICCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CICCommand, e);
  Object.defineProperty(CICCommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_CRAFT_CONSTRUCTION_ITEM;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleDispatchingCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CICCommand.prototype, "eventType", {
    get: function () {
      return s.CastleServerMessageArrivedEvent.CIC_ARRIVED;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleDispatchingCommand.prototype, "eventType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CICCommand;
}(r.CastleDispatchingCommand);
exports.CICCommand = l;
o.classImplementsInterfaces(l, "IExecCommand");