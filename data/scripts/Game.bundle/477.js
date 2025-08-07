Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./99.js");
var a = function (e) {
  function AMessageFriendInviteVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AMessageFriendInviteVO, e);
  AMessageFriendInviteVO.prototype.parseMessageHeader = function (e) {
    this._senderName = e;
  };
  AMessageFriendInviteVO.prototype.parseSender = function () {
    return this._senderName;
  };
  Object.defineProperty(AMessageFriendInviteVO.prototype, "additionalIconName", {
    get: function () {
      return "CastleMessageIconsFriendInvite";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.AMessageVO.prototype, "additionalIconName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return AMessageFriendInviteVO;
}(o.AMessageVO);
exports.AMessageFriendInviteVO = a;