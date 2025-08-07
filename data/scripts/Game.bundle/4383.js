Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SBuyArtifactPieceVO(t, i, n) {
    var o = this;
    o.A = 0;
    o.EID = 0;
    o.KID = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).A = t;
    o.EID = i;
    o.KID = n;
    return o;
  }
  n.__extends(C2SBuyArtifactPieceVO, e);
  C2SBuyArtifactPieceVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_BUY_ARTIFACT_PIECE;
  };
  return C2SBuyArtifactPieceVO;
}(o.BasicCommandVO);
exports.C2SBuyArtifactPieceVO = s;