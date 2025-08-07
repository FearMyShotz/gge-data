Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./4.js");
var s = function (e) {
  function SeasonLeagueBuyPassesDialogProperties(t = true, i = true, n = -1, o = -1, s = -1, r = -1, l = -1) {
    var c = e.call(this) || this;
    c.useEventSale = t;
    c.usePromotionSale = i;
    c.eventID = n;
    c.instanceID = n;
    c.promotionID = s;
    c.rewardSetID = r;
    c.leagueTypeID = l;
    if (r < 0 && a.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO()) {
      c.rewardSetID = a.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO().rewardSetId;
      c.leagueTypeID = a.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO().leaguetypeID;
    }
    return c;
  }
  n.__extends(SeasonLeagueBuyPassesDialogProperties, e);
  return SeasonLeagueBuyPassesDialogProperties;
}(o.BasicProperties);
exports.SeasonLeagueBuyPassesDialogProperties = s;