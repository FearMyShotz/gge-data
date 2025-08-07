Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAcceptFriendRequestVO(t, i) {
    var n = this;
    n.PID = 0;
    n.MID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).PID = t;
    n.MID = i;
    return n;
  }
  n.__extends(C2SAcceptFriendRequestVO, e);
  C2SAcceptFriendRequestVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ACCEPT_FRIEND_REQUEST;
  };
  return C2SAcceptFriendRequestVO;
}(o.BasicCommandVO);
exports.C2SAcceptFriendRequestVO = s;