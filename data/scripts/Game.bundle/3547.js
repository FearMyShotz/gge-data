Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./546.js");
var r = createjs.Point;
var l = function (e) {
  function CastleFactionInvasionEventTopXScoreBarProperties(t, i, n, o = null, r = null, l = a.int(s.CastleScoreEventScoreBarProperties.NUMBER_OF_THRESHOLD_REWARDS), c = a.int(s.CastleScoreEventScoreBarProperties.NUMBER_OF_RANK_REWARDS)) {
    var u = this;
    u._topXRewardStartIndex = 0;
    CONSTRUCTOR_HACK;
    (u = e.call(this, t, i, n, o, r, l, c) || this)._topXRewardStartIndex = a.int(t.length - u.numRankRewards - u.numThresholdRewards);
    return u;
  }
  n.__extends(CastleFactionInvasionEventTopXScoreBarProperties, e);
  CastleFactionInvasionEventTopXScoreBarProperties.prototype.getReward = function (t) {
    if (t >= this.numThresholdRewards) {
      return e.prototype.getReward.call(this, this._topXRewardStartIndex + t);
    } else {
      return e.prototype.getReward.call(this, t);
    }
  };
  Object.defineProperty(CastleFactionInvasionEventTopXScoreBarProperties.prototype, "rewardIconDimension", {
    get: function () {
      return CastleFactionInvasionEventTopXScoreBarProperties.REWARD_ICON_DIMENSIONS_0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleScoreEventScoreBarProperties.prototype, "rewardIconDimension").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionInvasionEventTopXScoreBarProperties.__initialize_static_members = function () {
    CastleFactionInvasionEventTopXScoreBarProperties.REWARD_ICON_DIMENSIONS_0 = new r(37, 37);
  };
  return CastleFactionInvasionEventTopXScoreBarProperties;
}(s.CastleScoreEventScoreBarProperties);
exports.CastleFactionInvasionEventTopXScoreBarProperties = l;
o.classImplementsInterfaces(l, "IScorebarProperties");
l.__initialize_static_members();