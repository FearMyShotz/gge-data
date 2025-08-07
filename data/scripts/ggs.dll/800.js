Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./9.js");
var s = require("./4.js");
var r = function (e) {
  function BasicInviteFriendJsonCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicInviteFriendJsonCommand, e);
  BasicInviteFriendJsonCommand.prototype.execute = function (e = null) {
    var t = e;
    if (t && t.length == 3) {
      var n = {
        myname: String(t.shift()),
        name: String(t.shift()),
        mail: String(t.shift())
      };
      s.BasicModel.smartfoxClient.sendMessage(a.BasicSmartfoxConstants.C2S_INVITE_FRIEND, [JSON.stringify(n)]);
    }
  };
  return BasicInviteFriendJsonCommand;
}(require("./6.js").SimpleCommand);
exports.BasicInviteFriendJsonCommand = r;