Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./308.js");
var r = function (e) {
  function CastleEilandPlayerRankingItemVO(t) {
    var i = this;
    i.playerID = 0;
    i.playerLevel = 0;
    i.hasUnlockedEiland = false;
    i.aquaPoints = 0;
    i.allianceRank = 0;
    i.rank = 0;
    i.isSearchResult = false;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).playerID = a.int(t[0]);
    i.playerName = t[1];
    i.playerLevel = a.int(t[2]);
    i.hasUnlockedEiland = t[3] == 1;
    i.aquaPoints = a.int(t[4]);
    i.allianceRank = a.int(t[5]);
    i.crestVO = new s.CrestVO();
    if (t[6]) {
      i.crestVO.loadFromParamObject(t[6]);
    }
    return i;
  }
  n.__extends(CastleEilandPlayerRankingItemVO, e);
  return CastleEilandPlayerRankingItemVO;
}(o.ScrollItemVO);
exports.CastleEilandPlayerRankingItemVO = r;