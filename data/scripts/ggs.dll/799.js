Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./9.js");
var s = require("./4.js");
var r = function (e) {
  function BasicInviteFriendCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicInviteFriendCommand, e);
  BasicInviteFriendCommand.prototype.execute = function (e = null) {
    var t = e;
    if (t && t.length == 3) {
      var n = String(t.shift());
      var i = String(t.shift());
      var r = String(t.shift());
      s.BasicModel.smartfoxClient.sendMessage(a.BasicSmartfoxConstants.C2S_INVITE_FRIEND, [n, i, r]);
    }
  };
  return BasicInviteFriendCommand;
}(require("./6.js").SimpleCommand);
exports.BasicInviteFriendCommand = r;