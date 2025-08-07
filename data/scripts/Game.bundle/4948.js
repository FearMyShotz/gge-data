Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./140.js");
var l = require("./10.js");
var c = function (e) {
  function RMSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RMSCommand, e);
  Object.defineProperty(RMSCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_READ_MESSAGES;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RMSCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        this.controller.dispatchEvent(new r.CastleMessageDataEvent(r.CastleMessageDataEvent.NEW_MESSAGE_BODY, [i.MTXT, i.ABI]));
        break;
      case a.ERROR.NO_SUCH_MESSAGE:
      case a.ERROR.MESSAGEDATA_TOO_OLD:
        this.controller.dispatchEvent(new r.CastleMessageDataEvent(r.CastleMessageDataEvent.MESSAGE_NO_EXIST));
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return RMSCommand;
}(l.CastleCommand);
exports.RMSCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");