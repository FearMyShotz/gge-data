Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SAllianceSetSearchMemberVO(t, i) {
    var n = this;
    n.IS = 0;
    n.IA = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).IS = a.int(t ? 1 : 0);
    n.IA = a.int(i ? 1 : 0);
    return n;
  }
  n.__extends(C2SAllianceSetSearchMemberVO, e);
  C2SAllianceSetSearchMemberVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_ALLIANCE_SET_SEARCH_MEMBER;
  };
  return C2SAllianceSetSearchMemberVO;
}(o.BasicCommandVO);
exports.C2SAllianceSetSearchMemberVO = r;