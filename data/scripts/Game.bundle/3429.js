Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./3430.js");
var o = require("./5.js");
var a = require("./4.js");
var s = require("./811.js");
var r = function () {
  function RewardHubVO() {
    this._counters = [];
    this._mainEventID = 0;
    this._subEventID = 0;
    this._promotionID = 0;
    this._isGlobalRanking = false;
  }
  RewardHubVO.prototype.parseData = function (e) {
    var t = [];
    t.push(this.parseRewardTier(s.RewardHubData.REWARD_TYPE_GUARANTEED, e.basicTier));
    t.push(this.parseRewardTier(s.RewardHubData.REWARD_TYPE_EXTRA, e.extraTier));
    this._hubRewardID = e.hubRewardID;
    this._extraTierUnlockCostC2 = e.extraTierUnlockCostC2;
    this._rewardTiers = t;
    this._popUpId = e.visualComponent.preUpgradePopup[o.CommKeys.POPUP_ID];
    this._popUpData = e.visualComponent.preUpgradePopup[o.CommKeys.POPUP_VALUE];
    this._popUpData.rewardHubVO = this;
    this._counters = e.visualComponent.counters;
    this._isGlobalRanking = e.visualComponent.isGlobalRanking == 1;
    this._extraTierUnlockedByParent = Boolean(e.extraTierUnlockedByParent);
    this._extraTierUnlocked = Boolean(e.extraTierUnlocked);
    this._promotionID = parseInt(e.visualComponent.promotionID);
    this._mainEventID = this._promotionID ? o.EventConst.EVENTTYPE_KINGDOMS_LEAGUE : parseInt(e.visualComponent.eventID);
    this._subEventID = e.visualComponent.subEventID ? parseInt(e.visualComponent.subEventID) : 0;
  };
  RewardHubVO.prototype.parseRewardTier = function (e, t) {
    var i = a.CastleModel.rewardData.getListByIdArray(t.rewardIds);
    return new n.RewardTierVO(e, Boolean(t.collected), i, t.rewardIds);
  };
  Object.defineProperty(RewardHubVO.prototype, "hubRewardID", {
    get: function () {
      return this._hubRewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "extraTierUnlockCostC2", {
    get: function () {
      return this._extraTierUnlockCostC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "isExtraTierUnlocked", {
    get: function () {
      return this._extraTierUnlocked || this._extraTierUnlockedByParent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "extraTierUnlockedByParent", {
    set: function (e) {
      this._extraTierUnlockedByParent = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "extraTierUnlocked", {
    set: function (e) {
      this._extraTierUnlocked = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "rewardTiers", {
    get: function () {
      return this._rewardTiers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "popUpId", {
    get: function () {
      return this._popUpId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "popUpData", {
    get: function () {
      this._popUpData.rewardHubVO = this;
      return this._popUpData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "counters", {
    get: function () {
      return this._counters;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "mainEventID", {
    get: function () {
      return this._mainEventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "subEventID", {
    get: function () {
      return this._subEventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "promotionID", {
    get: function () {
      return this._promotionID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "isGlobalRanking", {
    get: function () {
      return this._isGlobalRanking;
    },
    enumerable: true,
    configurable: true
  });
  return RewardHubVO;
}();
exports.RewardHubVO = r;