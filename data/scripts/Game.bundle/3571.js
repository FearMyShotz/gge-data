Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./389.js");
var u = require("./15.js");
var d = require("./4.js");
var p = require("./3572.js");
var h = require("./374.js");
var g = function (e) {
  function OpenInviteAFriendTutorialFinisherCommand() {
    var t = this;
    t.messageType = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(OpenInviteAFriendTutorialFinisherCommand, e);
  OpenInviteAFriendTutorialFinisherCommand.prototype.execute = function (t = null) {
    e.prototype.execute.call(this, t);
    var i = 1;
    if (t && s.instanceOfClass(t, "MessageFriendJoinTheGameVO")) {
      this.messageType = l.int(r.MessageConst.MESSAGE_TYPE_FRIEND_JOIN_THE_GAME);
      i = l.int(t.friendID);
    } else if (t && s.instanceOfClass(t, "MessageFindAFriendVO")) {
      this.messageType = l.int(r.MessageConst.MESSAGE_TYPE_FIND_A_FRIEND);
      i = l.int(t.friendID);
    }
    if (i > 0) {
      u.CastleBasicController.getInstance().addEventListener(c.CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.onInfoReceived));
      d.CastleModel.smartfoxClient.sendCommandVO(new h.C2SGetDetailPlayerInfo(i));
    }
  };
  OpenInviteAFriendTutorialFinisherCommand.prototype.onInfoReceived = function (e) {
    u.CastleBasicController.getInstance().removeEventListener(c.CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.onInfoReceived));
    var t = e.params[0];
    var i = d.CastleModel.otherPlayerData.getOwnerInfoVO(t.ownerID);
    var n = this.messageType == r.MessageConst.MESSAGE_TYPE_FRIEND_JOIN_THE_GAME ? f.InviteAFriendInviterMessageDialog : m.CastleInviteAFriendTutorialFinishDialog;
    C.CastleDialogHandler.getInstance().registerDefaultDialogs(n, new p.CastleInviteAfriendTutorialFinishDialogProperties(i, t));
  };
  Object.defineProperty(OpenInviteAFriendTutorialFinisherCommand, "layoutManager", {
    get: function () {
      return _.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return OpenInviteAFriendTutorialFinisherCommand;
}(o.SimpleCommand);
exports.OpenInviteAFriendTutorialFinisherCommand = g;
var C = require("./9.js");
var _ = require("./17.js");
var m = require("./3573.js");
var f = require("./3575.js");
a.classImplementsInterfaces(g, "ISimpleCommand");