Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./5457.js");
var r = require("./83.js");
var l = require("./476.js");
var c = function (e) {
  function MessageFriendRequestVO() {
    var t = this;
    t._otherPlayerID = 0;
    t._isNewFriendship = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageFriendRequestVO, e);
  MessageFriendRequestVO.prototype.parseMessageHeader = function (e) {
    var t = e.split("+");
    this._otherPlayerID = parseInt(t[0]);
    this._otherPlayerName = t[1];
    this._isNewFriendship = !!parseInt(t[2]);
  };
  MessageFriendRequestVO.prototype.parseSubject = function () {
    if (this.messageType == o.MessageConst.MESSAGE_TYPE_FRIEND_INVITE) {
      return a.Localize.text("dialog_friendRequest_message_header");
    } else {
      return a.Localize.text("dialog_friendAccepted_message_header");
    }
  };
  MessageFriendRequestVO.prototype.parseSender = function () {
    return this.senderName || this.otherPlayerName;
  };
  Object.defineProperty(MessageFriendRequestVO.prototype, "dialogInfo", {
    get: function () {
      return new r.DialogInfoVO(u.CastleFriendRequestDialog, new s.CastleFriendRequestDialogProperties(this));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AMessageFriendInviteVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageFriendRequestVO.prototype, "otherPlayerID", {
    get: function () {
      return this._otherPlayerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageFriendRequestVO.prototype, "otherPlayerName", {
    get: function () {
      return this._otherPlayerName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageFriendRequestVO.prototype, "isNewFriendship", {
    get: function () {
      return this._isNewFriendship;
    },
    enumerable: true,
    configurable: true
  });
  return MessageFriendRequestVO;
}(l.AMessageFriendInviteVO);
exports.MessageFriendRequestVO = c;
var u = require("./5458.js");