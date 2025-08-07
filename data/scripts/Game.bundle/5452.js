Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./83.js");
var l = require("./476.js");
var c = function (e) {
  function MessageFriendInviteSinglePaymentVO() {
    var t = this;
    t.friendID = 0;
    t.playerCount = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageFriendInviteSinglePaymentVO, e);
  Object.defineProperty(MessageFriendInviteSinglePaymentVO.prototype, "dialogInfo", {
    get: function () {
      return new r.DialogInfoVO(null, null, u.IngameClientCommands.GET_INVITE_A_FRIEND_RECEIVED_REWARDS, [this, u.IngameClientCommands.OPEN_INVITE_A_FRIEND_SINGLE_PAYMENT_REWARD_RECEIVED]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AMessageFriendInviteVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MessageFriendInviteSinglePaymentVO.prototype.parseSender = function () {
    return a.Localize.text("system");
  };
  MessageFriendInviteSinglePaymentVO.prototype.parseSubject = function () {
    return a.Localize.text("message_header_referFriend_reward");
  };
  MessageFriendInviteSinglePaymentVO.prototype.parseMessageHeader = function (e) {
    var t = e.split(o.MessageConst.SUBTYPE_META_DATA_SPLITTER);
    this.friendID = parseInt(t[0]);
    this.friendName = t[1];
    this.playerCount = s.int(t[2]);
  };
  return MessageFriendInviteSinglePaymentVO;
}(l.AMessageFriendInviteVO);
exports.MessageFriendInviteSinglePaymentVO = c;
var u = require("./29.js");