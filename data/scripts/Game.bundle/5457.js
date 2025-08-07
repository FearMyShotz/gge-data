Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./83.js");
var r = require("./477.js");
var l = function (e) {
  function MessageFriendReachedALevelVO() {
    var t = this;
    t.friendID = -1;
    t.playerCount = 0;
    t.levelReached = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageFriendReachedALevelVO, e);
  Object.defineProperty(MessageFriendReachedALevelVO.prototype, "dialogInfo", {
    get: function () {
      return new s.DialogInfoVO(null, null, c.IngameClientCommands.GET_INVITE_A_FRIEND_RECEIVED_REWARDS, [this, c.IngameClientCommands.OPEN_INVITE_A_FRIEND_LEVEL_REWARD_RECEIVED]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AMessageFriendInviteVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MessageFriendReachedALevelVO.prototype.parseSender = function () {
    return a.Localize.text("system");
  };
  MessageFriendReachedALevelVO.prototype.parseSubject = function () {
    return a.Localize.text("message_header_referFriend_reward");
  };
  MessageFriendReachedALevelVO.prototype.parseMessageHeader = function (e) {
    var t = e.split(o.MessageConst.SUBTYPE_META_DATA_SPLITTER);
    this.playerCount = parseInt(t[0]);
    this.levelReached = parseInt(t[1]);
    this.friendID = parseInt(t[2]);
    this.friendName = t[3];
  };
  return MessageFriendReachedALevelVO;
}(r.AMessageFriendInviteVO);
exports.MessageFriendReachedALevelVO = l;
var c = require("./29.js");