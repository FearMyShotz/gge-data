Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SDeleteFriendConnectionVO(t) {
    var i = this;
    i.PID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).PID = t;
    return i;
  }
  n.__extends(C2SDeleteFriendConnectionVO, e);
  C2SDeleteFriendConnectionVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_DELETE_FRIEND_CONNECTION;
  };
  return C2SDeleteFriendConnectionVO;
}(o.BasicCommandVO);
exports.C2SDeleteFriendConnectionVO = s;