Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./83.js");
var r = require("./477.js");
var l = function (e) {
  function MessageFindAFriendVO() {
    var t = this;
    t.friendID = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageFindAFriendVO, e);
  Object.defineProperty(MessageFindAFriendVO.prototype, "dialogInfo", {
    get: function () {
      return new s.DialogInfoVO(null, null, c.IngameClientCommands.OPEN_INVITE_A_FRIEND_TUTORIAL_FINISHER, this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AMessageFriendInviteVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MessageFindAFriendVO.prototype.parseSubject = function () {
    return a.Localize.text("message_header_referFriend_inviter");
  };
  MessageFindAFriendVO.prototype.parseMessageHeader = function (e) {
    var t = e.split(o.MessageConst.SUBTYPE_META_DATA_SPLITTER);
    this.friendID = parseInt(t[0]);
    this.friendName = t[1];
  };
  MessageFindAFriendVO.prototype.parseSender = function () {
    return this.friendName;
  };
  return MessageFindAFriendVO;
}(r.AMessageFriendInviteVO);
exports.MessageFindAFriendVO = l;
var c = require("./29.js");