Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function RewardTierVO(e, t, i, n) {
    this._rewardType = e;
    this._isCollected = t;
    this._rewards = i;
    this._rewardIds = n;
  }
  Object.defineProperty(RewardTierVO.prototype, "rewardType", {
    get: function () {
      return this._rewardType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardTierVO.prototype, "isCollected", {
    get: function () {
      return this._isCollected;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardTierVO.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardTierVO.prototype, "rewardIds", {
    get: function () {
      return this._rewardIds;
    },
    enumerable: true,
    configurable: true
  });
  return RewardTierVO;
}();
exports.RewardTierVO = n;