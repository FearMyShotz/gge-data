Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function HighscoreBonusVO(e, t, i, n, a, s, r, l, c) {
    this._highestRank = 0;
    this._lowestRank = 0;
    this._c1Reward = 0;
    this._minAmount = 0;
    this._toolRewardWod = 0;
    this._toolOffset = 0;
    this._toolMinAmount = 0;
    this._leagueId = 0;
    this._leagueId = e;
    this._lowestRank = t;
    this._highestRank = i;
    this._c1Reward = n;
    this._unitRewards = [];
    this._toolRewardWod = s;
    this._minAmount = r;
    this._toolOffset = l;
    this._toolMinAmount = c;
    var u = a.split("#");
    if (u != null) {
      for (var d = 0, p = u; d < p.length; d++) {
        var h = p[d];
        if (h !== undefined) {
          var g = h.split("+");
          if (parseInt(g[0]) > 0) {
            this._unitRewards.push(new o.HighscoreBonusUnitRewardVO(parseInt(g[0]), parseInt(g[1])));
          }
        }
      }
    }
  }
  Object.defineProperty(HighscoreBonusVO.prototype, "highestRank", {
    get: function () {
      return this._highestRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HighscoreBonusVO.prototype, "lowestRank", {
    get: function () {
      return this._lowestRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HighscoreBonusVO.prototype, "c1Reward", {
    get: function () {
      return this._c1Reward;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HighscoreBonusVO.prototype, "unitRewards", {
    get: function () {
      return this._unitRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HighscoreBonusVO.prototype, "minAmount", {
    get: function () {
      return this._minAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HighscoreBonusVO.prototype, "toolRewardWod", {
    get: function () {
      return this._toolRewardWod;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HighscoreBonusVO.prototype, "toolOffset", {
    get: function () {
      return this._toolOffset;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HighscoreBonusVO.prototype, "toolMinAmount", {
    get: function () {
      return this._toolMinAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HighscoreBonusVO.prototype, "leagueId", {
    get: function () {
      return this._leagueId;
    },
    enumerable: true,
    configurable: true
  });
  return HighscoreBonusVO;
}();
exports.HighscoreBonusVO = n;
var o = require("./4283.js");