Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SBuyBeggingKnightsPackageVO(t, i, n, o, a) {
    var s = this;
    s.SCID = 0;
    s.SKID = 0;
    s.WP = 0;
    s.SP = 0;
    s.FP = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this).SCID = t;
    s.SKID = i;
    s.WP = n;
    s.SP = o;
    s.FP = a;
    return s;
  }
  n.__extends(C2SBuyBeggingKnightsPackageVO, e);
  C2SBuyBeggingKnightsPackageVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_BUY_BEGGINGKNIGHTS_POINT;
  };
  return C2SBuyBeggingKnightsPackageVO;
}(o.BasicCommandVO);
exports.C2SBuyBeggingKnightsPackageVO = s;