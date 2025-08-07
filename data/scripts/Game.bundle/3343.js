Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ClientConstFilter() {}
  ClientConstFilter.filterVisibleObjectivesForTreasureMap = function (e) {
    return function (t, i = 0, n = null) {
      return t.mapID == e && ClientConstFilter.filterVisibleObjectives(t, i, n);
    };
  };
  ClientConstFilter.filterVisibleObjectives = function (e, t = 0, i = null) {
    return !e.hidden && e.isLegal() && e.isObjective;
  };
  ClientConstFilter.filterVisibleQuests = function (e, t, i) {
    return !e.isStarterQuest && !e.hidden && e.isLegal() && !e.isObjective;
  };
  ClientConstFilter.filterByPriority = function (e) {
    return function (t, i, n) {
      return t.sortPriority == e;
    };
  };
  ClientConstFilter.filterVisibleQuestsForKingdom = function (e) {
    return function (t, i, n) {
      return t.shownKingdomID == e && ClientConstFilter.filterVisibleQuests(t, i, n) || t.isTemporaryQuest;
    };
  };
  ClientConstFilter.filterVisibleQuestsForCategory = function (e) {
    return function (t, i, n) {
      return t.questCategory == e && ClientConstFilter.filterVisibleQuests(t, i, n);
    };
  };
  ClientConstFilter.filterActiveQuests = function (e, t, i) {
    return (e.shownKingdomID <= 0 || e.shownKingdomID > 0 && o.CastleModel.kingdomData.isKingdomUnlocked(e.shownKingdomID)) && (e.isCampaignQuest || e.eventID == 0 || e.eventID > 0 && !!o.CastleModel.specialEventData.getActiveEventByEventId(e.eventID));
  };
  ClientConstFilter.filterEventQuests = function (e, t, i) {
    return e.eventID > 0 || e.mapID > 0;
  };
  ClientConstFilter.filterXpQuests = function (e, t, i) {
    return !ClientConstFilter.filterEventQuests(e, t, i) && e.isGettingXpFromThisQuest;
  };
  ClientConstFilter.filterC2Quests = function (e, t, i) {
    return !ClientConstFilter.filterEventQuests(e, t, i) && !e.isGettingXpFromThisQuest && e.isC2RewardQuest;
  };
  ClientConstFilter.filterLeftOverQuests = function (e, t, i) {
    return !ClientConstFilter.filterEventQuests(e, t, i) && !ClientConstFilter.filterXpQuests(e, t, i) && !ClientConstFilter.filterC2Quests(e, t, i);
  };
  ClientConstFilter.filterQuestIsNotBuyRuby = function (e, t, i) {
    return !e.isBuyRubyQuest;
  };
  ClientConstFilter.filterQuestIsBuyRuby = function (e, t, i) {
    return e.isBuyRubyQuest;
  };
  return ClientConstFilter;
}();
exports.ClientConstFilter = n;
var o = require("./4.js");