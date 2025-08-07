Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./1809.js");
var r = require("./83.js");
var l = require("./476.js");
var c = function (e) {
  function MessageFriendInviteTeaserVO(t = false) {
    var i = this;
    i.friendID = 0;
    CONSTRUCTOR_HACK;
    return i = e.call(this) || this;
  }
  n.__extends(MessageFriendInviteTeaserVO, e);
  MessageFriendInviteTeaserVO.prototype.parseSender = function () {
    return a.Localize.text("system");
  };
  MessageFriendInviteTeaserVO.prototype.parseSubject = function () {
    return a.Localize.text("message_header_referFriend_teaser");
  };
  Object.defineProperty(MessageFriendInviteTeaserVO.prototype, "dialogInfo", {
    get: function () {
      return new r.DialogInfoVO(u.CastleInviteAFriendTeaserDialog, new s.CastleInviteAFriendTeaserDialogProperties(this.friendName));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AMessageFriendInviteVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MessageFriendInviteTeaserVO.prototype.parseMessageHeader = function (t) {
    var i = t.split(o.MessageConst.SUBTYPE_META_DATA_SPLITTER);
    this.friendID = parseInt(i[0]);
    this.friendName = i[1];
    e.prototype.parseMessageHeader.call(this, t);
  };
  return MessageFriendInviteTeaserVO;
}(l.AMessageFriendInviteVO);
exports.MessageFriendInviteTeaserVO = c;
var u = require("./1808.js");