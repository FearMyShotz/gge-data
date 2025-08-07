Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function LeaderBoardEvent(t, i, n = false, o = false) {
    var a = e.call(this, t, n, o) || this;
    a.params = null;
    a.params = i;
    return a;
  }
  n.__extends(LeaderBoardEvent, e);
  LeaderBoardEvent.LEADERBOARD_SCORE_DATA = "leaderboard_score_data";
  LeaderBoardEvent.LEADERBOARD_SEARCH_DATA = "leaderboard_search_data";
  LeaderBoardEvent.LEADERBOARD_DATA_ERROR = "leaderboard_data_error";
  return LeaderBoardEvent;
}(createjs.Event);
exports.LeaderBoardEvent = o;