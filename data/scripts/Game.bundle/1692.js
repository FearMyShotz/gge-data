Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./4.js");
var r = function (e) {
  function SeasonLeaguePromotionDialogProperties(t) {
    var i = e.call(this) || this;
    i._isSeasonPassEnabled = false;
    i.isPromoPassEnabled = false;
    i._rewardSetId = 0;
    i.seasonID = -1;
    i.rewardHubVO = null;
    i._promotionVO = s.CastleModel.seasonLeagueData.xml.getPromotion(t.KLRID);
    i._isSeasonPassEnabled = t.KLP == 1;
    i.isPromoPassEnabled = a.int(t[c.CommKeys.SEASON_PROMOTION_PASS_ENABLED]) == 1;
    i._rewardSetId = a.int(t.RSID);
    i._leaguetypeID = a.int(t.KLLID);
    i.seasonID = a.int(t[c.CommKeys.SEASON_ID]);
    i.rewardHubVO = t.rewardHubVO ? t.rewardHubVO : null;
    return i;
  }
  n.__extends(SeasonLeaguePromotionDialogProperties, e);
  SeasonLeaguePromotionDialogProperties.prototype.getPromotionRewardsVO = function () {
    var e = new l.SeasonLeaguePromotionRewardsComponentVO();
    if (this.rewardHubVO) {
      e.normalRewards.addList(this.rewardHubVO.rewardTiers[0].rewards);
      e.premiumRewards.addList(this.rewardHubVO.rewardTiers[1].rewards);
      e.hasCollectedNormal = false;
      e.hasCollectedPremium = false;
      e.isUnlocked = this.rewardHubVO.isExtraTierUnlocked;
    } else {
      e.normalRewards = s.CastleModel.seasonLeagueData.xml.getPromotionRewards(this.rewardSetId, this.promotionVO.id, false, this._leaguetypeID);
      e.premiumRewards = s.CastleModel.seasonLeagueData.xml.getPromotionRewards(this.rewardSetId, this.promotionVO.id, true, this._leaguetypeID);
      e.hasCollectedNormal = false;
      e.hasCollectedPremium = false;
      e.isUnlocked = this.isSeasonPassEnabled || this.isPromoPassEnabled;
    }
    return e;
  };
  Object.defineProperty(SeasonLeaguePromotionDialogProperties.prototype, "promotionVO", {
    get: function () {
      return this._promotionVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeaguePromotionDialogProperties.prototype, "isSeasonPassEnabled", {
    get: function () {
      return this._isSeasonPassEnabled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeaguePromotionDialogProperties.prototype, "rewardSetId", {
    get: function () {
      return this._rewardSetId;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeaguePromotionDialogProperties;
}(o.BasicProperties);
exports.SeasonLeaguePromotionDialogProperties = r;
var l = require("./1068.js");
var c = require("./5.js");