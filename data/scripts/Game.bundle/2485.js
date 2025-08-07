Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceRerankMemberVO(t, i) {
    var n = this;
    n.PID = 0;
    n.R = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).PID = t;
    n.R = i;
    return n;
  }
  n.__extends(C2SAllianceRerankMemberVO, e);
  C2SAllianceRerankMemberVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ALLIANCE_RERANK_MEMBER;
  };
  return C2SAllianceRerankMemberVO;
}(o.BasicCommandVO);
exports.C2SAllianceRerankMemberVO = s;