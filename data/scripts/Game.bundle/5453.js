Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./83.js");
var r = require("./477.js");
var l = function (e) {
  function MessageFriendInviteMultiplePaymentVO() {
    var t = this;
    t.playerCount = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageFriendInviteMultiplePaymentVO, e);
  Object.defineProperty(MessageFriendInviteMultiplePaymentVO.prototype, "dialogInfo", {
    get: function () {
      return new s.DialogInfoVO(null, null, c.IngameClientCommands.GET_INVITE_A_FRIEND_RECEIVED_REWARDS, [this, c.IngameClientCommands.OPEN_INVITE_A_FRIEND_MULTIPLE_PAYMENT_REWARD_RECEIVED]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AMessageFriendInviteVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MessageFriendInviteMultiplePaymentVO.prototype.parseSender = function () {
    return a.Localize.text("system");
  };
  MessageFriendInviteMultiplePaymentVO.prototype.parseSubject = function () {
    return a.Localize.text("message_header_referFriend_reward");
  };
  MessageFriendInviteMultiplePaymentVO.prototype.parseMessageHeader = function (e) {
    var t = e.split(o.MessageConst.SUBTYPE_META_DATA_SPLITTER);
    this.playerCount = parseInt(t[0]);
  };
  return MessageFriendInviteMultiplePaymentVO;
}(r.AMessageFriendInviteVO);
exports.MessageFriendInviteMultiplePaymentVO = l;
var c = require("./29.js");