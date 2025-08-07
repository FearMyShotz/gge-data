Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function GenericScoreBarRewardListSublayerProperties(t, i, n, o, a = "", s = "", r = true) {
    var l = this;
    l._rewardsReceived = 0;
    l._isPlayerQualifiedForRewards = true;
    CONSTRUCTOR_HACK;
    (l = e.call(this) || this)._rewardList = t;
    l._pointThreshholds = i;
    l._rewardsReceived = n;
    l._additionalText = o;
    l._customPointTextID = a;
    l._customGrantTypeTextID = s;
    l._isPlayerQualifiedForRewards = r;
    return l;
  }
  n.__extends(GenericScoreBarRewardListSublayerProperties, e);
  GenericScoreBarRewardListSublayerProperties.prototype.isPlayerQualifiedForRewards = function () {
    return this._isPlayerQualifiedForRewards;
  };
  Object.defineProperty(GenericScoreBarRewardListSublayerProperties.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericScoreBarRewardListSublayerProperties.prototype, "pointThreshholds", {
    get: function () {
      return this._pointThreshholds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericScoreBarRewardListSublayerProperties.prototype, "rewardsReceived", {
    get: function () {
      return this._rewardsReceived;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericScoreBarRewardListSublayerProperties.prototype, "additionalText", {
    get: function () {
      return this._additionalText;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericScoreBarRewardListSublayerProperties.prototype, "customPointTextID", {
    get: function () {
      return this._customPointTextID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericScoreBarRewardListSublayerProperties.prototype, "customGrantTypeTextID", {
    get: function () {
      return this._customGrantTypeTextID;
    },
    enumerable: true,
    configurable: true
  });
  return GenericScoreBarRewardListSublayerProperties;
}(require("./2.js").BasicProperties);
exports.GenericScoreBarRewardListSublayerProperties = o;