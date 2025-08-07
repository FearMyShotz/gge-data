Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = require("./3.js");
var a = require("./6.js");
var s = function () {
  function ClientConstSeasonLeague() {}
  ClientConstSeasonLeague.getEventNames = function () {
    var e = new Map();
    e.set(n.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE, "alien");
    e.set(n.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, "nomad");
    e.set(n.EventConst.EVENTTYPE_SAMURAI_INVASION, "samurai");
    e.set(n.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE, "bloodcrow");
    e.set(n.EventConst.EVENTTYPE_FACTION, "berimond");
    e.set(n.EventConst.EVENTTYPE_FACTION_INVASION, "berimondInvasion");
    return e;
  };
  ClientConstSeasonLeague.getEventName = function (e) {
    if (o.DictionaryUtil.containsKey(ClientConstSeasonLeague.EVENT_NAMES, e)) {
      return ClientConstSeasonLeague.EVENT_NAMES.get(e);
    } else {
      return "";
    }
  };
  ClientConstSeasonLeague.getPointsIconFrame = function (e) {
    switch (e) {
      case n.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
        return 2;
      case n.EventConst.EVENTTYPE_SAMURAI_INVASION:
        return 3;
      case n.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE:
      case n.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE:
        return 4;
      case n.EventConst.EVENTTYPE_FACTION:
        return 5;
      case n.EventConst.EVENTTYPE_FACTION_INVASION:
        return 6;
      default:
        return 1;
    }
  };
  ClientConstSeasonLeague.getPointsIconTooltipTextId = function (e) {
    switch (e) {
      case n.EventConst.EVENTTYPE_NOMADINVASION:
      case n.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
        return "dialog_nomadInvasion_nomadPoints";
      case n.EventConst.EVENTTYPE_SAMURAI_INVASION:
      case n.EventConst.EVENTTYPE_SAMURAI_ALIEN_INVASION:
        return "dialog_samuraiInvasion_samuraiPoints";
      case n.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE:
      case n.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE:
        return "dialog_fame_title";
      case n.EventConst.EVENTTYPE_FACTION:
        return "event_title_3";
      case n.EventConst.EVENTTYPE_FACTION_INVASION:
        return "factionHighscore_points";
      default:
        return "";
    }
  };
  ClientConstSeasonLeague.__initialize_static_members = function () {
    ClientConstSeasonLeague.MEDAL_ID_GOLD = a.int(n.SeasonConst.GOLD_MEDAL_ID);
    ClientConstSeasonLeague.MEDAL_ID_SILVER = a.int(n.SeasonConst.SILVER_MEDAL_ID);
    ClientConstSeasonLeague.MEDAL_ID_BRONZE = a.int(n.SeasonConst.BRONZE_MEDAL_ID);
    ClientConstSeasonLeague.EVENT_NAMES = ClientConstSeasonLeague.getEventNames();
    ClientConstSeasonLeague.MEDAL_IDS = [ClientConstSeasonLeague.MEDAL_ID_GOLD, ClientConstSeasonLeague.MEDAL_ID_SILVER, ClientConstSeasonLeague.MEDAL_ID_BRONZE, ClientConstSeasonLeague.MEDAL_ID_GLASS, ClientConstSeasonLeague.MEDAL_ID_COPPER, ClientConstSeasonLeague.MEDAL_ID_STONE, ClientConstSeasonLeague.MEDAL_ID_WOOD];
  };
  ClientConstSeasonLeague.MEDAL_ID_GLASS = 4;
  ClientConstSeasonLeague.MEDAL_ID_COPPER = 5;
  ClientConstSeasonLeague.MEDAL_ID_STONE = 6;
  ClientConstSeasonLeague.MEDAL_ID_WOOD = 7;
  return ClientConstSeasonLeague;
}();
exports.ClientConstSeasonLeague = s;
s.__initialize_static_members();