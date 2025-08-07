Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SListLeaderboardScoresPageVO(t, i, n, o = 1) {
    var a = e.call(this) || this;
    a.LT = 0;
    a.LID = -1;
    a.M = 0;
    a.R = 1;
    a.R = o;
    a.LT = t;
    a.LID = i;
    a.M = n;
    return a;
  }
  n.__extends(C2SListLeaderboardScoresPageVO, e);
  C2SListLeaderboardScoresPageVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_LIST_LEADERBOARD_SCORE_PAGE;
  };
  return C2SListLeaderboardScoresPageVO;
}(o.BasicCommandVO);
exports.C2SListLeaderboardScoresPageVO = s;