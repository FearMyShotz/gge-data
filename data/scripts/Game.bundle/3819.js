Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./32.js");
var c = require("./15.js");
var u = require("./4.js");
var d = require("./977.js");
var p = function (e) {
  function GetInviteAFriendReceivedRewardsCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GetInviteAFriendReceivedRewardsCommand, e);
  GetInviteAFriendReceivedRewardsCommand.prototype.execute = function (e = null) {
    if (!e || !r.instanceOfClass(e[0], "AMessageFriendInviteVO")) {
      throw new Error("OpenInviteAFriendLevelRewardReceivedCommand expects a AMessageFriendInviteVO as its commandVars");
    }
    this.messageFriendInviteVO = e[0];
    this.commandToOpenRewardDialog = String(e[1]);
    c.CastleBasicController.getInstance().addEventListener(l.CastleUserDataEvent.FRIEND_INVITE_INFO_UPDATED, this.bindFunction(this.onInviteInfoUpdated));
    u.CastleModel.smartfoxClient.sendCommandVO(new d.C2SFriendInviteInfoVO());
  };
  GetInviteAFriendReceivedRewardsCommand.prototype.onInviteInfoUpdated = function (e) {
    c.CastleBasicController.getInstance().removeEventListener(l.CastleUserDataEvent.FRIEND_INVITE_INFO_UPDATED, this.bindFunction(this.onInviteInfoUpdated));
    o.CommandController.instance.executeCommand(this.commandToOpenRewardDialog, this.messageFriendInviteVO);
  };
  return GetInviteAFriendReceivedRewardsCommand;
}(a.SimpleCommand);
exports.GetInviteAFriendReceivedRewardsCommand = p;
s.classImplementsInterfaces(p, "ISimpleCommand");