Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ClientConstHighscore() {}
  ClientConstHighscore.getLeagueIdByLevel = function (e) {
    for (var t = 0; t < ClientConstHighscore.LEAGUE_LEVELS.length; ++t) {
      if (e >= ClientConstHighscore.LEAGUE_LEVELS[t][0] && e <= ClientConstHighscore.LEAGUE_LEVELS[t][1]) {
        return t + 1;
      }
    }
    return 1;
  };
  ClientConstHighscore.__initialize_static_members = function () {
    ClientConstHighscore.LEAGUE_LEVELS = [[1, 19], [20, 29], [30, 39], [40, 49], [50, 69], [70, 70]];
  };
  return ClientConstHighscore;
}();
exports.ClientConstHighscore = n;
n.__initialize_static_members();