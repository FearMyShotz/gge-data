Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = function () {
  function SeasonLeaguePromotionRewardsComponentVO(e = null, t = null, i = false, n = false, o = false) {
    this._isUnlocked = false;
    this.hasCollectedNormal = false;
    this.hasCollectedPremium = false;
    this._normalRewards = new a.CollectableList();
    this._premiumRewards = new a.CollectableList();
    if (e) {
      this._normalRewards = e;
    }
    if (t) {
      this._premiumRewards = t;
    }
    this._isUnlocked = i;
    this.hasCollectedNormal = n;
    this.hasCollectedPremium = o;
  }
  SeasonLeaguePromotionRewardsComponentVO.prototype.createCombinedRewardList = function () {
    var e = new a.CollectableList();
    if (this.normalRewards) {
      e.addList(this.normalRewards);
    }
    if (this.premiumRewards) {
      e.addList(this.premiumRewards);
    }
    return e;
  };
  SeasonLeaguePromotionRewardsComponentVO.prototype.isIndexPremiumReward = function (e) {
    return e >= this.normalRewards.length && e < this.normalRewards.length + this.premiumRewards.length;
  };
  SeasonLeaguePromotionRewardsComponentVO.prototype.getNumberOfRewards = function () {
    return n.int(this.normalRewards.length + this.premiumRewards.length);
  };
  Object.defineProperty(SeasonLeaguePromotionRewardsComponentVO.prototype, "isUnlocked", {
    get: function () {
      return this._isUnlocked;
    },
    set: function (e) {
      this._isUnlocked = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeaguePromotionRewardsComponentVO.prototype, "normalRewards", {
    get: function () {
      return this._normalRewards;
    },
    set: function (e) {
      this._normalRewards = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeaguePromotionRewardsComponentVO.prototype, "premiumRewards", {
    get: function () {
      return this._premiumRewards;
    },
    set: function (e) {
      this._premiumRewards = e;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeaguePromotionRewardsComponentVO;
}();
exports.SeasonLeaguePromotionRewardsComponentVO = o;
var a = require("./48.js");