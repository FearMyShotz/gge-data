Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./4.js");
var c = function (e) {
  function TimeLimitedCampaignEventEventVO() {
    var t = this;
    t._receivedReward = false;
    t._endRewardValue = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(TimeLimitedCampaignEventEventVO, e);
  TimeLimitedCampaignEventEventVO.prototype.parseParamObject = function (e) {
    this._rewardList = l.CastleModel.rewardData.getListByIdArray(e.RIDS);
    this._receivedReward = e.COL == 1;
    this._endRewardValue = r.int(e[a.CommKeys.END_REWARD_VALUE]);
    this._campaignQuests = [];
    var t = e.CQS;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var s = l.CastleModel.questData.createQuest(o.QID);
          s.fillFromParams(o);
          this._campaignQuests.push(s);
        }
      }
    }
    this._campaignQuests.sort(this.bindFunction(this.sortByOrder));
    for (var c = 0; c < this._campaignQuests.length; c++) {
      this.campaignQuests[c].campaignSortOrder = c + 1;
    }
  };
  TimeLimitedCampaignEventEventVO.prototype.sortByOrder = function (e, t) {
    if (e.campaignQuestTimeStamp != t.campaignQuestTimeStamp) {
      return e.campaignQuestTimeStamp - t.campaignQuestTimeStamp;
    } else {
      return e.campaignQuestID - t.campaignQuestID;
    }
  };
  TimeLimitedCampaignEventEventVO.prototype.getQuestByID = function (e) {
    if (this.campaignQuests != null) {
      for (var t = 0, i = this.campaignQuests; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.questID == e) {
          return n;
        }
      }
    }
    return null;
  };
  TimeLimitedCampaignEventEventVO.prototype.parseCQS = function (e) {
    this.parseParamObject(e);
  };
  Object.defineProperty(TimeLimitedCampaignEventEventVO.prototype, "rewards", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TimeLimitedCampaignEventEventVO.prototype, "receivedReward", {
    get: function () {
      return this._receivedReward;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TimeLimitedCampaignEventEventVO.prototype, "buyCost", {
    get: function () {
      var e = 0;
      if (this._campaignQuests != null) {
        for (var t = 0, i = this._campaignQuests; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined && n.isCompleted) {
            e++;
          }
        }
      }
      return s.TimeLimitedCampaignConst.calculateEndRewardPurchaseCost(this._endRewardValue, this._campaignQuests.length, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TimeLimitedCampaignEventEventVO.prototype, "campaignQuests", {
    get: function () {
      return this._campaignQuests;
    },
    enumerable: true,
    configurable: true
  });
  return TimeLimitedCampaignEventEventVO;
}(require("./79.js").ASpecialEventVO);
exports.TimeLimitedCampaignEventEventVO = c;
o.classImplementsInterfaces(c, "IEventOverviewable");