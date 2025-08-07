Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./7.js");
var r = function (e) {
  function C2SSearchLeaderboardScoresEventVO(t, i) {
    var n = e.call(this) || this;
    n.LT = 0;
    n.SV = "";
    n.SV = a.TextValide.getValideSmartFoxJSONTextMessage(i);
    n.LT = t;
    return n;
  }
  n.__extends(C2SSearchLeaderboardScoresEventVO, e);
  C2SSearchLeaderboardScoresEventVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_SEARCH_LEADERBOARD_SCORE_EVENT;
  };
  return C2SSearchLeaderboardScoresEventVO;
}(o.BasicCommandVO);
exports.C2SSearchLeaderboardScoresEventVO = r;