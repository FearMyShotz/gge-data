Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./7.js");
var r = function (e) {
  function C2SListLeaderboardScoresWindowVO(t, i, n, o = "") {
    var s = e.call(this) || this;
    s.LT = 0;
    s.LID = -1;
    s.M = 0;
    s.SI = "";
    s.SI = a.TextValide.getValideSmartFoxJSONTextMessage(o);
    s.LT = t;
    s.LID = i;
    s.M = n;
    return s;
  }
  n.__extends(C2SListLeaderboardScoresWindowVO, e);
  C2SListLeaderboardScoresWindowVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_LIST_LEADERBOARD_SCORE_WINDOW;
  };
  return C2SListLeaderboardScoresWindowVO;
}(o.BasicCommandVO);
exports.C2SListLeaderboardScoresWindowVO = r;