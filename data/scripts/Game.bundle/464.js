Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = function (e) {
  function RewardsDialogScoreBarProperties(t, i, n, o = null, a = null, s = 1, r = 3) {
    var l = this;
    l.nextRewardIndex = 0;
    l._nextRewardTextColor = -1;
    CONSTRUCTOR_HACK;
    return l = e.call(this, t, i, n, o, a, s, r) || this;
  }
  n.__extends(RewardsDialogScoreBarProperties, e);
  RewardsDialogScoreBarProperties.prototype.getToolTip = function (t, i) {
    if (this._classTextID == null) {
      return null;
    }
    var n = e.prototype.getToolTip.call(this, t, i);
    n.p = [this._toolTipValues[this.getRewardIndex(t)] ? this._toolTipValues[this.getRewardIndex(t)] : 1];
    return n;
  };
  RewardsDialogScoreBarProperties.prototype.getLabel = function (e) {
    var t = this.getRewardIndex(e);
    if (!isNaN(this._labels[t])) {
      return new a.LocalizedNumberVO(this._labels[t]);
    }
    if (this._labels[t]) {
      return new s.LocalizedTextVO(this._labels[t]);
    }
    var i = this._labels.length - 1 - RewardsDialogScoreBarProperties.MAX_TOP_X;
    return new s.LocalizedTextVO(this._labels[i + e]);
  };
  RewardsDialogScoreBarProperties.prototype.getDescription = function (e) {
    return new s.LocalizedTextVO(this._descriptions[this.getRewardIndex(e)]);
  };
  RewardsDialogScoreBarProperties.prototype.getReward = function (e) {
    return this._rewardList[this.getRewardIndex(e)];
  };
  RewardsDialogScoreBarProperties.prototype.getRewardIndex = function (e) {
    if (e) {
      return r.int(e - 1 + this._rewardList.length - this.numRankRewards);
    } else {
      return this.nextRewardIndex;
    }
  };
  RewardsDialogScoreBarProperties.prototype.thresholdProgress = function (t, i, n) {
    for (var o = r.int(i.length - 1); o >= 0; --o) {
      if (i[o] <= n) {
        this.nextRewardIndex = r.int(Math.min(o + 1, i.length - 1));
        break;
      }
    }
    return e.prototype.thresholdProgress.call(this, this.getRewardIndex(t), i, n);
  };
  Object.defineProperty(RewardsDialogScoreBarProperties.prototype, "nextRewardTextColor", {
    get: function () {
      return this._nextRewardTextColor;
    },
    set: function (e) {
      this._nextRewardTextColor = e;
    },
    enumerable: true,
    configurable: true
  });
  RewardsDialogScoreBarProperties.MAX_TOP_X = 3;
  return RewardsDialogScoreBarProperties;
}(require("./546.js").CastleScoreEventScoreBarProperties);
exports.RewardsDialogScoreBarProperties = l;
o.classImplementsInterfaces(l, "IScorebarProperties");