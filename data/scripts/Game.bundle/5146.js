Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./7.js");
var s = require("./37.js");
var r = require("./476.js");
var l = function (e) {
  function SURCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SURCommand, e);
  Object.defineProperty(SURCommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_GET_SURVEY_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleDispatchingCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SURCommand.prototype, "eventType", {
    get: function () {
      return s.CastleServerMessageArrivedEvent.SUR_ARRIVED;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleDispatchingCommand.prototype, "eventType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return SURCommand;
}(r.CastleDispatchingCommand);
exports.SURCommand = l;
o.classImplementsInterfaces(l, "IExecCommand");