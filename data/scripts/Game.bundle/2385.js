Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SSendFriendRequestVO(t) {
    var i = this;
    i.PID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).PID = t;
    return i;
  }
  n.__extends(C2SSendFriendRequestVO, e);
  C2SSendFriendRequestVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SEND_FRIEND_REQUEST;
  };
  return C2SSendFriendRequestVO;
}(o.BasicCommandVO);
exports.C2SSendFriendRequestVO = s;