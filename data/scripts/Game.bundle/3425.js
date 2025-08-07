Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SBuySeasonPassEventEventVO(t = -1, i = -1) {
    var n = e.call(this) || this;
    n.EID = t;
    n.IID = i;
    return n;
  }
  n.__extends(C2SBuySeasonPassEventEventVO, e);
  C2SBuySeasonPassEventEventVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_BUY_SEASON_PASS_EVENT;
  };
  return C2SBuySeasonPassEventEventVO;
}(o.BasicCommandVO);
exports.C2SBuySeasonPassEventEventVO = s;