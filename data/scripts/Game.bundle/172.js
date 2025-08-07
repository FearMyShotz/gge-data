Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleHighscoreEvent(t, i = null, n = -1, o = false, a = false) {
    var s = e.call(this, t, o, a) || this;
    s.params = null;
    s.leagueId = -1;
    s.params = i;
    s.leagueId = n;
    return s;
  }
  n.__extends(CastleHighscoreEvent, e);
  CastleHighscoreEvent.GET_HIGHSCORE_DATA = "get_highscore_data";
  CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR = "get_highscore_data_error";
  CastleHighscoreEvent.WEEKLY_HONOR_SCORE_UPDATED = "WEEKLY_HONOR_SCORE_UPDATED";
  CastleHighscoreEvent.REWARD_REDEEMED = "HighScore_REWARD_REDEEMED";
  CastleHighscoreEvent.AQUAPOINTS_HIGSCORE_ALLY_PLAYER = "aquapointshigscoreallyplayer";
  CastleHighscoreEvent.TEMPORARY_SERVER_HIGHSCORE = "temporaryServerHighscore";
  CastleHighscoreEvent.ALLIANCE_BATTLEGROUND_SERVER_HIGHSCORE = "ALLIANCE_BATTLEGROUND_SERVER_HIGHSCORE";
  return CastleHighscoreEvent;
}(createjs.Event);
exports.CastleHighscoreEvent = o;