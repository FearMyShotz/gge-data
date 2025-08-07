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
  function ANLCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ANLCommand, e);
  Object.defineProperty(ANLCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_ALLIANCE_NEWSLETTER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ANLCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        this.controller.dispatchEvent(new r.CastleMessageDataEvent(r.CastleMessageDataEvent.SENT_OK));
        return true;
      default:
        this.showErrorDialog(e, t);
        this.controller.dispatchEvent(new r.CastleMessageDataEvent(r.CastleMessageDataEvent.SENT_ERROR));
    }
    return false;
  };
  return ANLCommand;
}(l.CastleCommand);
exports.ANLCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");