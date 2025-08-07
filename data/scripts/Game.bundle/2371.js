Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SBuyTreasureMapPieceVO(t, i) {
    var n = this;
    n.A = 0;
    n.MID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).A = t;
    n.MID = i;
    return n;
  }
  n.__extends(C2SBuyTreasureMapPieceVO, e);
  C2SBuyTreasureMapPieceVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_BUY_TREASUREMAP_PIECE;
  };
  return C2SBuyTreasureMapPieceVO;
}(o.BasicCommandVO);
exports.C2SBuyTreasureMapPieceVO = s;