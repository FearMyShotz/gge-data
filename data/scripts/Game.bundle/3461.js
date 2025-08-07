Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AchievementSerieVO() {
    this._achievementSeriesID = 0;
    this._numberOfAchievementsInSeries = 0;
    this._currentSeriesStep = 0;
    this._kingdomID = 0;
    this._isHidden = false;
  }
  AchievementSerieVO.prototype.reset = function () {
    this._currentSeriesStep = 1;
  };
  AchievementSerieVO.prototype.fillFromParamXML = function (e) {
    this._achievementSeriesID = parseInt(e.achievementSeriesID || "");
    this._numberOfAchievementsInSeries = parseInt(e.numberOfAchievementsInSeries || "");
    this._category = e.category || "";
    this._kingdomID = parseInt(e.triggerKingdomID || "");
    this._isHidden = parseInt(s.CastleXMLUtils.getValueOrDefault("hidden", e, "0")) == 1;
    this._hideIconText = s.CastleXMLUtils.getBooleanAttribute("hideIconText", e);
    this._achievements = [];
    this._currentSeriesStep = 1;
  };
  AchievementSerieVO.prototype.addAchievementVO = function (e) {
    this._achievements[e.achievementSeriesNumber] = e;
  };
  AchievementSerieVO.prototype.setAndCheckNextStep = function (e) {
    if (e >= this._currentSeriesStep) {
      this._currentSeriesStep = e + 1;
    }
  };
  Object.defineProperty(AchievementSerieVO.prototype, "achievements", {
    get: function () {
      return this._achievements;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementSerieVO.prototype, "nameString", {
    get: function () {
      return a.Localize.text("achievementName_" + this._achievementSeriesID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementSerieVO.prototype, "category", {
    get: function () {
      return this._category;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementSerieVO.prototype, "achievementSeriesID", {
    get: function () {
      return this._achievementSeriesID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementSerieVO.prototype, "numberOfAchievementsInSeries", {
    get: function () {
      return this._numberOfAchievementsInSeries;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementSerieVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementSerieVO.prototype, "isSerieFinished", {
    get: function () {
      return this._currentSeriesStep > this._numberOfAchievementsInSeries;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementSerieVO.prototype, "achievementInProgress", {
    get: function () {
      if (this.isSerieFinished) {
        return this.achievements[this._currentSeriesStep - 1];
      } else {
        return this.achievements[this._currentSeriesStep];
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementSerieVO.prototype, "currentSeriesStep", {
    get: function () {
      return this._currentSeriesStep;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementSerieVO.prototype, "displayName", {
    get: function () {
      return "Achievement_" + this.achievementSeriesID;
    },
    enumerable: true,
    configurable: true
  });
  AchievementSerieVO.prototype.getFilePath = function () {
    return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.displayName);
  };
  Object.defineProperty(AchievementSerieVO.prototype, "displayDisp", {
    get: function () {
      if (this.achievementClip) {
        return this.achievementClip;
      } else {
        this.achievementClip = new r.CastleGoodgameExternalClip(this.displayName, this.getFilePath(), null, 0, false);
        this.achievementClip.recycleAsset = false;
        return this.achievementClip.asDisplayObject();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementSerieVO.prototype, "level", {
    get: function () {
      if (this.isSerieFinished) {
        return this.numberOfAchievementsInSeries;
      } else {
        return this.currentSeriesStep;
      }
    },
    enumerable: true,
    configurable: true
  });
  AchievementSerieVO.prototype.getYellowBarString = function (e = -1) {
    var t = e < 0 ? this.achievementInProgress : this.achievements[e];
    switch (this.achievementSeriesID) {
      case 10:
        return String(l.CastleModel.wodData.getBuildingVOById(parseInt(t.conditions[0].additionalParams[0])).level);
      case 203:
      case 204:
        return String(t.conditions[0].additionalParams[0]);
      default:
        return String(t.totalMaxProgress);
    }
  };
  AchievementSerieVO.prototype.useSingularTextID = function () {
    var e = this.achievementInProgress;
    if (e.conditions[0] != null && e.conditions[0].amount == 1) {
      var t = a.Localize.text("achievementDesc_" + this.achievementSeriesID + "_singular");
      return t.length > 0 && t != "achievementDesc_" + this.achievementSeriesID + "_singular";
    }
    return false;
  };
  AchievementSerieVO.prototype.generateDescriptionParameter = function () {
    var e = this.achievementInProgress;
    switch (this.achievementSeriesID) {
      case 10:
        return [l.CastleModel.wodData.getBuildingVOById(parseInt(e.conditions[0].additionalParams[0])).level];
      case 203:
      case 204:
        return [parseInt(e.conditions[0].additionalParams[0])];
      case 111:
      case 118:
      case 119:
      case 120:
        return [e.conditions[0].amount, parseInt(e.conditions[0].additionalParams[0])];
      case 100:
      case 101:
      case 102:
        return [String(e.conditions[0].amount), l.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).kingdomNameString];
      case 103:
      case 104:
      case 105:
      case 106:
        return [a.Localize.text("research_" + l.CastleModel.researchData.researchVOs.get(parseInt(e.conditions[0].additionalParams[0])).groupID + "_title")];
      case 116:
      case 117:
        return [e.conditions[0].amount, a.Localize.text("equipment_rarity_" + l.CastleModel.equipData.getRareStringFromRareID(parseInt(e.conditions[0].additionalParams[0])).toLowerCase())];
      case 363:
        var t = l.CastleModel.constructionItemData.getConstructionItemVO(parseInt(e.conditions[0].additionalParams[0]));
        return [e.conditions[0].amount, a.Localize.text(t.nameTextId), t.level];
      case 360:
        return [e.conditions[0].amount, l.CastleModel.wodData.getBuildingVOById(parseInt(e.conditions[0].additionalParams[0].split("|")[0])).level];
      case 366:
      case 367:
      case 368:
      case 369:
        return [l.CastleModel.wodData.getUnitVOByWodId(parseInt(e.conditions[0].additionalParams[0])).level];
      case 370:
      case 371:
      case 372:
      case 373:
      case 374:
        return [e.conditions[0].amount, a.Localize.text(l.CastleModel.eventDifficultyScaling.getDifficultyVOByDifficultyID(parseInt(e.conditions[0].additionalParams[0])).name_textID)];
      default:
        return [e.conditions[0].amount];
    }
  };
  Object.defineProperty(AchievementSerieVO.prototype, "isHidden", {
    get: function () {
      return this._isHidden;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementSerieVO.prototype, "hideIconText", {
    get: function () {
      return this._hideIconText;
    },
    enumerable: true,
    configurable: true
  });
  return AchievementSerieVO;
}();
exports.AchievementSerieVO = n;
var o = require("./2.js");
var a = require("./3.js");
var s = require("./22.js");
var r = require("./24.js");
var l = require("./4.js");