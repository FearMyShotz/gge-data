Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function RankingRewardVO(e, t, i) {
    this._rank = 0;
    this._usePoints = false;
    this._listIndex = 0;
    this._collectableList = e;
    this._rank = t;
    this._usePoints = i;
  }
  Object.defineProperty(RankingRewardVO.prototype, "collectableList", {
    get: function () {
      return this._collectableList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RankingRewardVO.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RankingRewardVO.prototype, "usePoints", {
    get: function () {
      return this._usePoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RankingRewardVO.prototype, "listIndex", {
    get: function () {
      return this._listIndex;
    },
    set: function (e) {
      this._listIndex = e;
    },
    enumerable: true,
    configurable: true
  });
  return RankingRewardVO;
}();
exports.RankingRewardVO = n;