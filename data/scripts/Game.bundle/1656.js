Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./4.js");
var r = require("./40.js");
var l = require("./322.js");
var c = function (e) {
  function SeasonLeaguePromotionProgressBarComponent(t) {
    var i = e.call(this, t) || this;
    i._rank = 0;
    return i;
  }
  n.__extends(SeasonLeaguePromotionProgressBarComponent, e);
  SeasonLeaguePromotionProgressBarComponent.prototype.update = function (e, t = -1) {
    if (t >= 0) {
      this._rank = t;
    }
    var i = a.int(s.CastleModel.seasonLeagueData.server.medalPoints);
    var n = i + a.int(s.CastleModel.seasonLeagueData.xml.getSeasonMedalForRank(this.rank).medalPoints);
    var o = s.CastleModel.seasonLeagueData.hasReachedHighestPromotion();
    var r = s.CastleModel.seasonLeagueData.getCurrentPlayerPromotion();
    var c = s.CastleModel.seasonLeagueData.xml.getPromotion(r.id + 1);
    var u = !!c && n >= c.minMedalPointsForUnlock;
    var d = new l.SimpleProgressBarComponent(this.disp, 238);
    var p = 0;
    p = o ? 1 : i / c.minMedalPointsForUnlock;
    d.setProgressByPercent(p);
    d.fillMc = this.disp.mc_addition;
    var h = 0;
    h = e ? o ? 0 : u ? 1 : n / c.minMedalPointsForUnlock : 0;
    d.setProgressByPercent(h);
  };
  Object.defineProperty(SeasonLeaguePromotionProgressBarComponent.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeaguePromotionProgressBarComponent;
}(r.CastleItemRenderer);
exports.SeasonLeaguePromotionProgressBarComponent = c;
o.classImplementsInterfaces(c, "ICollectableRendererList");