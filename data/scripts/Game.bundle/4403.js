Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ColossusRankingItemVO() {
    this._playerRank = 0;
    this._playerPoints = 0;
    this._playerId = 0;
  }
  ColossusRankingItemVO.prototype.updateVO = function (e, t, i, n) {
    this._playerRank = e;
    this._playerName = t;
    this._playerPoints = o.int(i);
    this._playerId = n;
  };
  Object.defineProperty(ColossusRankingItemVO.prototype, "playerRank", {
    get: function () {
      return this._playerRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColossusRankingItemVO.prototype, "playerName", {
    get: function () {
      return this._playerName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColossusRankingItemVO.prototype, "playerPoints", {
    get: function () {
      return this._playerPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColossusRankingItemVO.prototype, "playerId", {
    get: function () {
      return this._playerId;
    },
    enumerable: true,
    configurable: true
  });
  return ColossusRankingItemVO;
}();
exports.ColossusRankingItemVO = n;
var o = require("./6.js");