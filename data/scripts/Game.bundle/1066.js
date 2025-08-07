Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./3.js");
var a = require("./12.js");
var s = require("./19.js");
var r = require("./4.js");
var l = require("./545.js");
var c = require("./52.js");
var u = require("./331.js");
var d = createjs.Point;
var p = function () {
  function DailyQuestScoreBarProperties(e) {
    this._rewardList = e;
  }
  Object.defineProperty(DailyQuestScoreBarProperties.prototype, "maxItemsPerReward", {
    get: function () {
      return DailyQuestScoreBarProperties.MAX_NUMBER_OF_REWARDS_PER_PACKAGE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestScoreBarProperties.prototype, "numThresholdRewards", {
    get: function () {
      return DailyQuestScoreBarProperties.NUMBER_OF_THRESHOLD_REWARDS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestScoreBarProperties.prototype, "numRankRewards", {
    get: function () {
      return DailyQuestScoreBarProperties.NUMBER_OF_RANK_REWARDS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestScoreBarProperties.prototype, "orientation", {
    get: function () {
      return u.CastleScoreBarComponent.ORIENTATION_VERTICAL;
    },
    enumerable: true,
    configurable: true
  });
  DailyQuestScoreBarProperties.prototype.getOwnPointsText = function (e) {
    return new o.NumberVO(e);
  };
  DailyQuestScoreBarProperties.prototype.getReward = function (e) {
    return this._rewardList[e];
  };
  DailyQuestScoreBarProperties.prototype.getToolTip = function (e, t) {
    return {
      t: "dialog_dailyQuests_rank" + (e + 1) + "_tooltip",
      p: [l.CastleQuestData.DAILY_QUEST_THRESHOLDS[e]]
    };
  };
  DailyQuestScoreBarProperties.prototype.getLabel = function (e) {
    return new o.NumberVO(l.CastleQuestData.DAILY_QUEST_THRESHOLDS[e]);
  };
  DailyQuestScoreBarProperties.prototype.getDescription = function (e) {
    return null;
  };
  DailyQuestScoreBarProperties.prototype.hasLabels = function () {
    return true;
  };
  DailyQuestScoreBarProperties.prototype.hasDecriptions = function () {
    return false;
  };
  Object.defineProperty(DailyQuestScoreBarProperties.prototype, "rewardIconDimension", {
    get: function () {
      return DailyQuestScoreBarProperties.REWARD_DIMENSION;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestScoreBarProperties.prototype, "collectableRenderOption", {
    get: function () {
      return s.CollectableRenderOptions.SET_ADVANCED;
    },
    enumerable: true,
    configurable: true
  });
  DailyQuestScoreBarProperties.prototype.preRenderFunc = function (e) {
    if (e.itemVO) {
      var t = e.getRenderer(s.CollectableRenderOptions.ICON_TRANSFORM);
      switch (e.itemVO.itemType) {
        case a.CollectableEnum.EQUIPMENT_RARENESS:
        case a.CollectableEnum.EQUIPMENT_UNIQUE:
        case a.CollectableEnum.HERO_RANDOM:
        case a.CollectableEnum.GEM:
        case a.CollectableEnum.GEM_RANDOM:
        case a.CollectableEnum.VIP_TIME:
          t.transform.offset.y = 4;
          t.transform.scale = 1.1;
          break;
        case a.CollectableEnum.C1:
        case a.CollectableEnum.C2:
        case a.CollectableEnum.WOOD:
        case a.CollectableEnum.STONE:
        case a.CollectableEnum.FOOD:
          t.transform.scale = 0.9;
          t.transform.offset.y = -3;
          break;
        case a.CollectableEnum.GENERIC_CURRENCY:
          if (!e.itemVO.isInIdRange(r.CastleModel.currencyData.getCurrencyRangeByID(c.ClientConstCurrency.ID_RANGE_MINUTE_SKIP))) {
            break;
          }
        case a.CollectableEnum.UNITS:
        case a.CollectableEnum.GENERIC_CURRENCY:
          t.transform.scale = 0.8;
          t.transform.offset.y = -2;
          break;
        case a.CollectableEnum.BUILDING:
          t.transform.offset.y = 3;
      }
    }
  };
  DailyQuestScoreBarProperties.prototype.thresholdProgress = function (e, t, i) {
    var n = t[e];
    var o = e > 0 ? t[e - 1] : 0;
    return Math.min(1, Math.max(i - o, 0) / (n - o));
  };
  Object.defineProperty(DailyQuestScoreBarProperties.prototype, "numLabels", {
    get: function () {
      if (l.CastleQuestData.DAILY_QUEST_THRESHOLDS) {
        return l.CastleQuestData.DAILY_QUEST_THRESHOLDS.length;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  DailyQuestScoreBarProperties.__initialize_static_members = function () {
    DailyQuestScoreBarProperties.MAX_NUMBER_OF_REWARDS_PER_PACKAGE = 4;
    DailyQuestScoreBarProperties.NUMBER_OF_THRESHOLD_REWARDS = 4;
    DailyQuestScoreBarProperties.NUMBER_OF_RANK_REWARDS = 0;
    DailyQuestScoreBarProperties.REWARD_DIMENSION = new d(33, 33);
  };
  return DailyQuestScoreBarProperties;
}();
exports.DailyQuestScoreBarProperties = p;
n.classImplementsInterfaces(p, "IScorebarProperties");
p.__initialize_static_members();