Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function SeasonLeagueMainDialogInfoEnum(t, i = a.SeasonLeagueMainDialogInfo.PAGE_TEXT) {
    return e.call(this, t, i) || this;
  }
  n.__extends(SeasonLeagueMainDialogInfoEnum, e);
  SeasonLeagueMainDialogInfoEnum.__initialize_static_members = function () {
    SeasonLeagueMainDialogInfoEnum.TOPIC_PASS_SEASON = new SeasonLeagueMainDialogInfoEnum("seasonPass", a.SeasonLeagueMainDialogInfo.PAGE_PASSES);
    SeasonLeagueMainDialogInfoEnum.TOPIC_PASS_EVENT = new SeasonLeagueMainDialogInfoEnum("eventPass", a.SeasonLeagueMainDialogInfo.PAGE_PASSES);
    SeasonLeagueMainDialogInfoEnum.TOPIC_PASS_PROMOTION = new SeasonLeagueMainDialogInfoEnum("promotionPass", a.SeasonLeagueMainDialogInfo.PAGE_PASSES);
    SeasonLeagueMainDialogInfoEnum.TOPIC_MEDALS = new SeasonLeagueMainDialogInfoEnum("medalOverview", a.SeasonLeagueMainDialogInfo.PAGE_MEDALS);
    SeasonLeagueMainDialogInfoEnum.TOPIC_INSTRUCTION = new SeasonLeagueMainDialogInfoEnum("introduction");
    SeasonLeagueMainDialogInfoEnum.TOPIC_CONNECTED_EVENTS = new SeasonLeagueMainDialogInfoEnum("connectedEvents");
    SeasonLeagueMainDialogInfoEnum.TOPIC_DIVISION_RANKING = new SeasonLeagueMainDialogInfoEnum("divisionRanking");
    SeasonLeagueMainDialogInfoEnum.TOPIC_DIVISION_RANKING_ALLIANCE = new SeasonLeagueMainDialogInfoEnum("divisionRanking_alliance");
    SeasonLeagueMainDialogInfoEnum.TOPIC_REPUTATION_PROMOTIONS = new SeasonLeagueMainDialogInfoEnum("reputationPromotions");
    SeasonLeagueMainDialogInfoEnum.TOPIC_SEASON_RANKING = new SeasonLeagueMainDialogInfoEnum("seasonRanking");
    SeasonLeagueMainDialogInfoEnum.TOPIC_SEASON_RANKING_ALLIANCE = new SeasonLeagueMainDialogInfoEnum("seasonRanking_alliance");
    SeasonLeagueMainDialogInfoEnum.TOPIC_INVASION_LEAGUE_REWARDS = new SeasonLeagueMainDialogInfoEnum("invasionLeagueRewards");
    SeasonLeagueMainDialogInfoEnum.TOPIC_LEAGUE_EVENT_END = new SeasonLeagueMainDialogInfoEnum("leagueEventEnd");
    SeasonLeagueMainDialogInfoEnum.TOPIC_LEAGUE_SEASON_END = new SeasonLeagueMainDialogInfoEnum("leagueSeasonEnd");
  };
  return SeasonLeagueMainDialogInfoEnum;
}(require("./958.js").InfoCatalogTopicEnum);
exports.SeasonLeagueMainDialogInfoEnum = o;
var a = require("./1659.js");
o.__initialize_static_members();