Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function SeasonLeagueEvent(t, i = null, n = true, o = false) {
    var a = e.call(this, t, n, o) || this;
    a.params = i;
    return a;
  }
  n.__extends(SeasonLeagueEvent, e);
  SeasonLeagueEvent.ON_INFO_UPDATED = "onInfoUpdated";
  SeasonLeagueEvent.ON_OWN_RANKS_UPDATED = "onOwnRanksUpdated";
  SeasonLeagueEvent.ON_PASS_PRICES_UPDATED = "ON_PASS_PRICES_UPDATED";
  SeasonLeagueEvent.ON_PASS_SEASON_BOUGHT = "ON_PASS_SEASON_BOUGHT";
  SeasonLeagueEvent.ON_PASS_EVENT_BOUGHT = "ON_PASS_EVENT_BOUGHT";
  SeasonLeagueEvent.ON_PASS_PROMOTION_BOUGHT = "ON_PASS_PROMOTION_BOUGHT";
  return SeasonLeagueEvent;
}(createjs.Event);
exports.SeasonLeagueEvent = o;