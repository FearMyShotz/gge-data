Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceKickMemberVO(t) {
    var i = this;
    i.PID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).PID = t;
    return i;
  }
  n.__extends(C2SAllianceKickMemberVO, e);
  C2SAllianceKickMemberVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ALLIANCE_KICK_MEMBER;
  };
  return C2SAllianceKickMemberVO;
}(o.BasicCommandVO);
exports.C2SAllianceKickMemberVO = s;