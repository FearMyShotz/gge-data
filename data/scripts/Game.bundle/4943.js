Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = require("./10.js");
var c = function (e) {
  function MCDCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MCDCommand, e);
  Object.defineProperty(MCDCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_MESSAGE_RESTRICTION;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MCDCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.messageData.parse_MCD(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return MCDCommand;
}(l.CastleCommand);
exports.MCDCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");