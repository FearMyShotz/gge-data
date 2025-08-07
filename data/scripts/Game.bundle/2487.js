Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AllianceRankVO(t, i) {
    var n = this;
    n.rankID = 0;
    n.isRankOfUser = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).rankID = t;
    n.isRankOfUser = t == i;
    return n;
  }
  n.__extends(AllianceRankVO, e);
  return AllianceRankVO;
}(require("./2.js").ScrollItemVO);
exports.AllianceRankVO = o;