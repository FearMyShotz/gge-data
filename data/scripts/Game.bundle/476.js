Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./69.js");
var r = require("./37.js");
var l = function (e) {
  function CastleDispatchingCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleDispatchingCommand, e);
  CastleDispatchingCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    this.dispatchArrivedEvent(e, t);
    return false;
  };
  CastleDispatchingCommand.prototype.dispatchArrivedEvent = function (e, t) {
    this.controller.dispatchEvent(new r.CastleServerMessageArrivedEvent(this.eventType, [e, t]));
  };
  Object.defineProperty(CastleDispatchingCommand.prototype, "eventType", {
    get: function () {
      throw new s.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  return CastleDispatchingCommand;
}(require("./10.js").CastleCommand);
exports.CastleDispatchingCommand = l;
o.classImplementsInterfaces(l, "IExecCommand");