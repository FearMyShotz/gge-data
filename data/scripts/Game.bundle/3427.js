Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SBuySeasonPassPromotionEventVO(t, i = -1) {
    var n = e.call(this) || this;
    n.KLRID = t;
    n.KLID = i;
    return n;
  }
  n.__extends(C2SBuySeasonPassPromotionEventVO, e);
  C2SBuySeasonPassPromotionEventVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_BUY_SEASON_PASS_PROMOTION;
  };
  return C2SBuySeasonPassPromotionEventVO;
}(o.BasicCommandVO);
exports.C2SBuySeasonPassPromotionEventVO = s;