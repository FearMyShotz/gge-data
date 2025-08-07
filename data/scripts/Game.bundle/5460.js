Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SDeclineFriendRequestVO(t, i) {
    var n = this;
    n.PID = 0;
    n.MID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).PID = t;
    n.MID = i;
    return n;
  }
  n.__extends(C2SDeclineFriendRequestVO, e);
  C2SDeclineFriendRequestVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_DECLINE_FRIEND_REQUEST;
  };
  return C2SDeclineFriendRequestVO;
}(o.BasicCommandVO);
exports.C2SDeclineFriendRequestVO = s;