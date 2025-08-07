Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./4.js");
var r = require("./467.js");
var l = function (e) {
  function SeasonLeagueEndDialogProperties(t) {
    var i = e.call(this) || this;
    i._eventId = 0;
    i._points = 0;
    i._rank = 0;
    i._isSeasonPassEnabled = false;
    i._isEventPassEnabled = false;
    i._isPromotionPassEnabled = false;
    i._rewardSetId = 0;
    i._allianceRank = 0;
    i.instanceID = -1;
    i.seasonID = -1;
    i.rewardHubVO = null;
    i.rewardHubVO = t.rewardHubVO ? t.rewardHubVO : null;
    i._eventId = a.int(t.hasOwnProperty("EID") ? t.EID : -1);
    i._promotionVO = s.CastleModel.seasonLeagueData.xml.getPromotion(t.KLRID);
    i._points = a.int(t.KLCP);
    i._rank = a.int(t.R);
    i._isSeasonPassEnabled = t[g.CommKeys.SEASON_PASS_ENABLED] == 1;
    i._isEventPassEnabled = t[g.CommKeys.SEASON_EVENT_PASS_ENABLED] == 1;
    i._isPromotionPassEnabled = t[g.CommKeys.SEASON_PROMOTION_PASS_ENABLED] == 1;
    i._rewardSetId = a.int(t.RSID);
    i._leaguetypeID = a.int(t.KLLID);
    i.instanceID = a.int(t[g.CommKeys.INSTANCE_ID]);
    i.seasonID = a.int(t[g.CommKeys.SEASON_ID]);
    i._seasonMedals = new d.CollectableList();
    if (t.hasOwnProperty("KLM")) {
      for (var n = 0, o = t.KLM; n < o.length; n++) {
        var r = o[n];
        if (r !== undefined) {
          i._seasonMedals.addItem(u.CollectableHelper.createVO(c.CollectableEnum.SEASON_LEAGUE_MEDALS, r[1], r[0]));
        }
      }
    }
    i._allianceRank = a.int(t.hasOwnProperty("KLAR") ? t.KLAR : -1);
    i._allianceMedals = null;
    if (t.hasOwnProperty("KLAM")) {
      i._allianceMedals = new d.CollectableList();
      for (var l = 0, p = t.KLAM; l < p.length; l++) {
        r = p[l];
        i._allianceMedals.addItem(u.CollectableHelper.createVO(c.CollectableEnum.SEASON_LEAGUE_MEDALS, r[1], r[0]));
      }
    }
    return i;
  }
  n.__extends(SeasonLeagueEndDialogProperties, e);
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "isPromotionPassEnabled", {
    get: function () {
      return this._isPromotionPassEnabled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "leaguetypeID", {
    get: function () {
      return this._leaguetypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "isEventPassEnabled", {
    get: function () {
      return this._isEventPassEnabled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "isSeasonEventEndDialog", {
    get: function () {
      return this._eventId >= 0;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueEndDialogProperties.prototype.getEventName = function () {
    if (this.isSeasonEventEndDialog) {
      return r.ClientConstSeasonLeague.getEventName(this.eventId);
    } else {
      return "seasonLeague";
    }
  };
  SeasonLeagueEndDialogProperties.prototype.getPromotionRewardsVO = function () {
    var e = new h.SeasonLeaguePromotionRewardsComponentVO();
    if (this.rewardHubVO) {
      e.normalRewards.addList(this.rewardHubVO.rewardTiers[0].rewards);
      e.premiumRewards.addList(this.rewardHubVO.rewardTiers[1].rewards);
      e.hasCollectedNormal = false;
      e.hasCollectedPremium = false;
      e.isUnlocked = this.rewardHubVO.isExtraTierUnlocked;
    } else {
      if (this.isSeasonEventEndDialog) {
        e.normalRewards = s.CastleModel.seasonLeagueData.xml.getSeasonEventRewards(this.rewardSetId, this.eventId, this.promotionVO.id, false);
        e.premiumRewards = s.CastleModel.seasonLeagueData.xml.getSeasonEventRewards(this.rewardSetId, this.eventId, this.promotionVO.id, true);
      } else if (this.rank > 0 && this._seasonMedals.getAmountOrDefaultByTypeVO(new p.CollectableTypeVO(c.CollectableEnum.SEASON_LEAGUE_MEDALS, r.ClientConstSeasonLeague.MEDAL_ID_GOLD)) > 0) {
        e.normalRewards = s.CastleModel.rewardData.getListByIdVector(s.CastleModel.seasonLeagueData.xml.getSeasonEndRewardForRank(this.rewardSetId, this.rank, this._leaguetypeID).rewardIds);
      }
      e.hasCollectedNormal = false;
      e.hasCollectedPremium = false;
      e.isUnlocked = this.isSeasonPassEnabled || this.isPromotionPassEnabled;
    }
    return e;
  };
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "eventId", {
    get: function () {
      return this._eventId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "points", {
    get: function () {
      return this._points;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "isSeasonPassEnabled", {
    get: function () {
      return this._isSeasonPassEnabled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "rewardSetId", {
    get: function () {
      return this._rewardSetId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "seasonMedals", {
    get: function () {
      return this._seasonMedals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "promotionVO", {
    get: function () {
      return this._promotionVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "allianceRank", {
    get: function () {
      return this._allianceRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "allianceMedals", {
    get: function () {
      return this._allianceMedals;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueEndDialogProperties;
}(o.BasicProperties);
exports.SeasonLeagueEndDialogProperties = l;
var c = require("./12.js");
var u = require("./45.js");
var d = require("./48.js");
var p = require("./74.js");
var h = require("./1067.js");
var g = require("./5.js");