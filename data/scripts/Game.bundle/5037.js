Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./37.js");
var l = require("./476.js");
var c = function (e) {
  function RFICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RFICommand, e);
  Object.defineProperty(RFICommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_RESEARCH_FINISH_INSTANT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleDispatchingCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RFICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
      case a.ERROR.NOTHING_TO_SKIP:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    this.dispatchArrivedEvent(e, t);
    return false;
  };
  Object.defineProperty(RFICommand.prototype, "eventType", {
    get: function () {
      return r.CastleServerMessageArrivedEvent.RFI_ARRIVED;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleDispatchingCommand.prototype, "eventType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return RFICommand;
}(l.CastleDispatchingCommand);
exports.RFICommand = c;
o.classImplementsInterfaces(c, "IExecCommand");