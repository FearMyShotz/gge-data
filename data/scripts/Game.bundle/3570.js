Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./389.js");
var r = require("./15.js");
var l = require("./4.js");
var c = require("./1723.js");
var u = require("./374.js");
var d = function (e) {
  function OpenInviteAFriendSinglePaymentRewardReceivedCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenInviteAFriendSinglePaymentRewardReceivedCommand, e);
  OpenInviteAFriendSinglePaymentRewardReceivedCommand.prototype.execute = function (e = null) {
    var t = e;
    this.openInviteAFriendSinglePaymentReceivedDialog(t);
  };
  OpenInviteAFriendSinglePaymentRewardReceivedCommand.prototype.openInviteAFriendSinglePaymentReceivedDialog = function (e) {
    var t = this.createOnInfoReceivedCallback(e.playerCount);
    r.CastleBasicController.getInstance().addEventListener(s.CastlePlayerInfoEvent.GET_PLAYERINFO, t);
    l.CastleModel.smartfoxClient.sendCommandVO(new u.C2SGetDetailPlayerInfo(e.friendID));
  };
  OpenInviteAFriendSinglePaymentRewardReceivedCommand.prototype.createOnInfoReceivedCallback = function (e) {
    function t(i) {
      r.CastleBasicController.getInstance().removeEventListener(s.CastlePlayerInfoEvent.GET_PLAYERINFO, t);
      var n = i.params[0];
      var o = l.CastleModel.otherPlayerData.getOwnerInfoVO(n.ownerID);
      p.CastleDialogHandler.getInstance().registerDefaultDialogs(g.InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog, new c.InviteAFriendPaymentRewardReceivedDialogProperties(e, o, n));
    }
    return t;
  };
  Object.defineProperty(OpenInviteAFriendSinglePaymentRewardReceivedCommand.prototype, "layoutManager", {
    get: function () {
      return h.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return OpenInviteAFriendSinglePaymentRewardReceivedCommand;
}(o.SimpleCommand);
exports.OpenInviteAFriendSinglePaymentRewardReceivedCommand = d;
var p = require("./9.js");
var h = require("./17.js");
var g = require("./3571.js");
a.classImplementsInterfaces(d, "ISimpleCommand");