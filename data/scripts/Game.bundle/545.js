Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./3.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./19.js");
var l = createjs.Point;
var c = function () {
  function CastleScoreEventScoreBarProperties(e, t, i, n = null, o = null, a = CastleScoreEventScoreBarProperties.NUMBER_OF_THRESHOLD_REWARDS, s = CastleScoreEventScoreBarProperties.NUMBER_OF_RANK_REWARDS) {
    this._numberOfRankRewards = 0;
    this._numberOfThresholdRewards = 0;
    this._rewardList = e;
    this._classTextID = t;
    this._toolTipValues = i;
    this._labels = n || [];
    this._descriptions = o || [];
    this._numberOfRankRewards = s;
    this._numberOfThresholdRewards = a;
  }
  Object.defineProperty(CastleScoreEventScoreBarProperties.prototype, "maxItemsPerReward", {
    get: function () {
      return CastleScoreEventScoreBarProperties.MAX_NUMBER_OF_REWARDS_PER_PACKAGE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleScoreEventScoreBarProperties.prototype, "numThresholdRewards", {
    get: function () {
      return this._numberOfThresholdRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleScoreEventScoreBarProperties.prototype, "numRankRewards", {
    get: function () {
      return this._numberOfRankRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleScoreEventScoreBarProperties.prototype, "orientation", {
    get: function () {
      return u.CastleScoreBarComponent.ORIENTATION_HORIZONTAL;
    },
    enumerable: true,
    configurable: true
  });
  CastleScoreEventScoreBarProperties.prototype.getOwnPointsText = function (e) {
    return new o.LocalizedNumberVO(e);
  };
  CastleScoreEventScoreBarProperties.prototype.getReward = function (e) {
    return this._rewardList[e];
  };
  CastleScoreEventScoreBarProperties.prototype.getToolTip = function (e, t) {
    var i;
    switch (this.getRewardTypeByIndex(e)) {
      case CastleScoreEventScoreBarProperties.TYPE_THRESHOLD:
        i = "dialog_" + this._classTextID + "_nobilityPoints_tooltip";
        break;
      case CastleScoreEventScoreBarProperties.TYPE_TOPX:
        i = t ? "dialog_" + this._classTextID + "_gotTopxReward_tooltip" : "dialog_" + this._classTextID + "_topxRewardCondition_tooltip";
        break;
      case CastleScoreEventScoreBarProperties.TYPE_WINNER:
        i = t ? "dialog_" + this._classTextID + "_gotRoyalReward_tooltip" : "dialog_" + this._classTextID + "_royalRewardCondition_tooltip";
    }
    if (i == "dialog_longPointsEvent_nobilityPoints_tooltip") {
      i = "dialog_dailyQuests_costs";
    }
    return {
      t: i,
      p: [s.int(this._toolTipValues[e] ? this._toolTipValues[e] : 1)]
    };
  };
  CastleScoreEventScoreBarProperties.prototype.getLabel = function (e) {
    if (isNaN(this._labels[e])) {
      return new a.LocalizedTextVO(this._labels[e]);
    } else {
      return new o.LocalizedNumberVO(this._labels[e]);
    }
  };
  CastleScoreEventScoreBarProperties.prototype.getDescription = function (e) {
    return new a.LocalizedTextVO(this._descriptions[e]);
  };
  CastleScoreEventScoreBarProperties.prototype.hasLabels = function () {
    return this._labels.length > 0;
  };
  Object.defineProperty(CastleScoreEventScoreBarProperties.prototype, "numLabels", {
    get: function () {
      if (this._labels) {
        return this._labels.length;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleScoreEventScoreBarProperties.prototype.hasDecriptions = function () {
    return this._descriptions.length > 0;
  };
  CastleScoreEventScoreBarProperties.prototype.setLabels = function (e) {
    this._labels = e || [];
  };
  CastleScoreEventScoreBarProperties.prototype.getRewardTypeByIndex = function (e) {
    if (e < this.numThresholdRewards) {
      return CastleScoreEventScoreBarProperties.TYPE_THRESHOLD;
    } else if (e == this.numThresholdRewards + this.numRankRewards - 1) {
      return CastleScoreEventScoreBarProperties.TYPE_WINNER;
    } else {
      return CastleScoreEventScoreBarProperties.TYPE_TOPX;
    }
  };
  Object.defineProperty(CastleScoreEventScoreBarProperties.prototype, "rewardIconDimension", {
    get: function () {
      return CastleScoreEventScoreBarProperties.REWARD_ICON_DIMENSIONS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleScoreEventScoreBarProperties.prototype, "collectableRenderOption", {
    get: function () {
      return r.CollectableRenderOptions.SET_BASIC;
    },
    enumerable: true,
    configurable: true
  });
  CastleScoreEventScoreBarProperties.prototype.preRenderFunc = function (e) {};
  CastleScoreEventScoreBarProperties.prototype.thresholdProgress = function (e, t, i) {
    var n = t[e];
    var o = e > 0 ? t[e - 1] : 0;
    return Math.min(1, Math.max(i - o, 0) / (n - o));
  };
  CastleScoreEventScoreBarProperties.__initialize_static_members = function () {
    CastleScoreEventScoreBarProperties.REWARD_ICON_DIMENSIONS = new l(40, 40);
    CastleScoreEventScoreBarProperties.MAX_NUMBER_OF_REWARDS_PER_PACKAGE = 2;
    CastleScoreEventScoreBarProperties.NUMBER_OF_THRESHOLD_REWARDS = 3;
    CastleScoreEventScoreBarProperties.NUMBER_OF_RANK_REWARDS = 2;
    CastleScoreEventScoreBarProperties.TYPE_THRESHOLD = 0;
    CastleScoreEventScoreBarProperties.TYPE_TOPX = 1;
    CastleScoreEventScoreBarProperties.TYPE_WINNER = 2;
  };
  return CastleScoreEventScoreBarProperties;
}();
exports.CastleScoreEventScoreBarProperties = c;
var u = require("./331.js");
n.classImplementsInterfaces(c, "IScorebarProperties");
c.__initialize_static_members();