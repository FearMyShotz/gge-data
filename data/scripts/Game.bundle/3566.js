Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./389.js");
var l = require("./15.js");
var c = require("./4.js");
var u = require("./3567.js");
var d = require("./374.js");
var p = function (e) {
  function OpenInviteAFriendLevelRewardReceivedCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenInviteAFriendLevelRewardReceivedCommand, e);
  OpenInviteAFriendLevelRewardReceivedCommand.prototype.execute = function (e = null) {
    if (!e || !s.instanceOfClass(e, "MessageFriendReachedALevelVO")) {
      throw new Error("OpenInviteAFriendLevelRewardReceivedCommand expects a MessageFriendReachedALevelVO as its commandVars");
    }
    var t = e;
    if (t.friendID > -1) {
      this.openInviteAFriendRewardReceivedWithPlayerInfoDialog(t);
    } else {
      this.openInviteAFriendRewardReceivedDialog(t);
    }
  };
  OpenInviteAFriendLevelRewardReceivedCommand.prototype.openInviteAFriendRewardReceivedDialog = function (e) {
    h.CastleDialogHandler.getInstance().registerDefaultDialogs(C.InviteAFriendLevelRewardReceivedDialog, new u.InviteAFriendLevelRewardReceivedDialogProperties(e.playerCount, e.levelReached));
  };
  OpenInviteAFriendLevelRewardReceivedCommand.prototype.openInviteAFriendRewardReceivedWithPlayerInfoDialog = function (e) {
    var t = this.createOnInfoReceivedCallback(e.playerCount, e.levelReached);
    l.CastleBasicController.getInstance().addEventListener(r.CastlePlayerInfoEvent.GET_PLAYERINFO, t);
    c.CastleModel.smartfoxClient.sendCommandVO(new d.C2SGetDetailPlayerInfo(e.friendID));
  };
  OpenInviteAFriendLevelRewardReceivedCommand.prototype.createOnInfoReceivedCallback = function (e, t) {
    function i(n) {
      l.CastleBasicController.getInstance().removeEventListener(r.CastlePlayerInfoEvent.GET_PLAYERINFO, i);
      var o = n.params[0];
      var a = c.CastleModel.otherPlayerData.getOwnerInfoVO(o.ownerID);
      h.CastleDialogHandler.getInstance().registerDefaultDialogs(_.InviteAFriendLevelRewardReceivedWithPlayerInfoDialog, new u.InviteAFriendLevelRewardReceivedDialogProperties(e, t, a, o));
    }
    return i;
  };
  Object.defineProperty(OpenInviteAFriendLevelRewardReceivedCommand.prototype, "layoutManager", {
    get: function () {
      return g.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return OpenInviteAFriendLevelRewardReceivedCommand;
}(o.SimpleCommand);
exports.OpenInviteAFriendLevelRewardReceivedCommand = p;
var h = require("./9.js");
var g = require("./17.js");
var C = require("./1721.js");
var _ = require("./3568.js");
a.classImplementsInterfaces(p, "ISimpleCommand");