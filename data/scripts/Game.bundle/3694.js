Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleEilandRewardItemVO(e, t, i, n, o) {
    this._id = 0;
    this._topXValue = -1;
    this._cargoPointsNeeded = 0;
    this._id = e;
    this._cargoPointsNeeded = t;
    this._rewardList = i;
    this._topXValue = n;
    this._rewardSetID = o;
  }
  Object.defineProperty(CastleEilandRewardItemVO.prototype, "cargoPointsNeeded", {
    get: function () {
      return this._cargoPointsNeeded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandRewardItemVO.prototype, "isTopXReward", {
    get: function () {
      return this._topXValue > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandRewardItemVO.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandRewardItemVO.prototype, "topXValue", {
    get: function () {
      return this._topXValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandRewardItemVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandRewardItemVO.prototype, "rewardSetID", {
    get: function () {
      return this._rewardSetID;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEilandRewardItemVO;
}();
exports.CastleEilandRewardItemVO = n;