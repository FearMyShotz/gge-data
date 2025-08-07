Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./1422.js");
var l = require("./10.js");
var c = function (e) {
  function SMECommand() {
    return e.call(this) || this;
  }
  n.__extends(SMECommand, e);
  Object.defineProperty(SMECommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_SEND_FRIEND_EMAIL;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SMECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        this.controller.dispatchEvent(new r.FriendInviteEmailEvent(r.FriendInviteEmailEvent.SEND_EMAIL_RESPONSE, i));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return SMECommand;
}(l.CastleCommand);
exports.SMECommand = c;
o.classImplementsInterfaces(c, "IExecCommand");