Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SFriendInviteInfoVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SFriendInviteInfoVO, e);
  C2SFriendInviteInfoVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_FRIEND_INVITE_INFO;
  };
  return C2SFriendInviteInfoVO;
}(o.BasicCommandVO);
exports.C2SFriendInviteInfoVO = s;