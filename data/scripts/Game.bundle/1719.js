Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = function (e) {
  function CastlePaginatedScoreEventScoreBarProperties(t, i, n, o, a = null, s = null, l = CastlePaginatedScoreEventScoreBarProperties.NUMBER_OF_THRESHOLD_REWARDS_0, c = CastlePaginatedScoreEventScoreBarProperties.NUMBER_OF_RANK_REWARDS_0) {
    var u = this;
    CONSTRUCTOR_HACK;
    (u = e.call(this, i, n, o, a, s, l, c) || this)._pagination = t;
    u._pagination.maxPages = r.int(i.length - u.numRankRewards - (u.numThresholdRewards - 1));
    return u;
  }
  n.__extends(CastlePaginatedScoreEventScoreBarProperties, e);
  CastlePaginatedScoreEventScoreBarProperties.prototype.getToolTip = function (t, i) {
    var n = e.prototype.getToolTip.call(this, t, i);
    n.p = [this._toolTipValues[this.getPaginatedIndex(t)] ? this._toolTipValues[this.getPaginatedIndex(t)] : 1];
    return n;
  };
  CastlePaginatedScoreEventScoreBarProperties.prototype.getLabel = function (e) {
    if (isNaN(this._labels[this.getPaginatedIndex(e)])) {
      return new s.LocalizedTextVO(this._labels[this.getPaginatedIndex(e)]);
    } else {
      return new a.LocalizedNumberVO(this._labels[this.getPaginatedIndex(e)]);
    }
  };
  CastlePaginatedScoreEventScoreBarProperties.prototype.getDescription = function (e) {
    return new s.LocalizedTextVO(this._descriptions[this.getPaginatedIndex(e)]);
  };
  CastlePaginatedScoreEventScoreBarProperties.prototype.getReward = function (e) {
    return this._rewardList[this.getPaginatedIndex(e)];
  };
  CastlePaginatedScoreEventScoreBarProperties.prototype.getPaginatedIndex = function (e) {
    if (e >= this.numThresholdRewards) {
      return e + this._pagination.maxPages - 1;
    } else {
      return e + this._pagination.currentPageIndex;
    }
  };
  CastlePaginatedScoreEventScoreBarProperties.prototype.thresholdProgress = function (t, i, n) {
    return e.prototype.thresholdProgress.call(this, this.getPaginatedIndex(t), i, n);
  };
  CastlePaginatedScoreEventScoreBarProperties.__initialize_static_members = function () {
    CastlePaginatedScoreEventScoreBarProperties.NUMBER_OF_THRESHOLD_REWARDS_0 = 2;
    CastlePaginatedScoreEventScoreBarProperties.NUMBER_OF_RANK_REWARDS_0 = 3;
  };
  return CastlePaginatedScoreEventScoreBarProperties;
}(require("./545.js").CastleScoreEventScoreBarProperties);
exports.CastlePaginatedScoreEventScoreBarProperties = l;
o.classImplementsInterfaces(l, "IScorebarProperties");
l.__initialize_static_members();