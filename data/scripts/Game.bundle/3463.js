Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AchievementVO(e) {
    this._achievementID = 0;
    this._achievementSeriesNumber = 0;
    this._requiredAchievementID = 0;
    this._achievementPoints = 0;
    this._unlocksDifficulty = 0;
    this._achievementFinished = false;
    this._achievementSerie = e;
  }
  AchievementVO.prototype.reset = function () {
    this._achievementFinished = false;
  };
  AchievementVO.prototype.fillFromParamXML = function (e) {
    this._achievementID = parseInt(e.achievementID || 0);
    this._achievementPoints = parseInt(e.achievementPoints || 0);
    this._requiredAchievementID = parseInt(e.requiredAchievementID || 0);
    this._achievementSeriesNumber = parseInt(e.achievementSeriesNumber || 0);
    this._unlocksDifficulty = parseInt(e.unlocksDifficulty || 0);
    this._rewards = o.CollectableManager.parser.x2cRewards.createList(e);
    var t = (e.conditions || "").split("#");
    this._conditions = [];
    for (var i = 0; i < t.length; ++i) {
      this._conditions[i] = new l.AchievementConditionVO(t[i]);
    }
    this._achievementFinished = false;
  };
  AchievementVO.prototype.setProgress = function (e) {
    var t = true;
    for (var i = 0; i < e.length; ++i) {
      this._conditions[i].currentProgress = e[i] > -1 ? e[i] : this._conditions[i].amount;
      t = t && this._conditions[i].hasFinished;
    }
    this._achievementFinished = t;
    if (this._achievementFinished) {
      this._achievementSerie.setAndCheckNextStep(this._achievementSeriesNumber);
    }
  };
  AchievementVO.prototype.setFinished = function () {
    if (this._conditions != null) {
      for (var e = 0, t = this._conditions; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.currentProgress = i.amount;
        }
      }
    }
    this._achievementFinished = true;
    this._achievementSerie.setAndCheckNextStep(this._achievementSeriesNumber);
  };
  Object.defineProperty(AchievementVO.prototype, "totalMaxProgress", {
    get: function () {
      var e = 0;
      if (this._conditions != null) {
        for (var t = 0, i = this._conditions; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            e += n.amount;
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  AchievementVO.prototype.currentProgress = function () {
    var e = 0;
    var t = 0;
    if (this._conditions != null) {
      for (var i = 0, n = this._conditions; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          e++;
          t += o.percentFinished();
        }
      }
    }
    return t / e;
  };
  AchievementVO.prototype.currentRelativeProgress = function () {
    if (this._achievementSerie.achievementSeriesID != a.CastleAchievementData.MAIN_ACHIEVMENT_SERIESID) {
      return -1;
    } else {
      return this.currentRelativeAchievementPoints() / this.requiredRelativeAchievementPoints();
    }
  };
  AchievementVO.prototype.currentRelativeAchievementPoints = function () {
    return r.CastleModel.castleAchievementData.achievementPoints - this.previosAchievementRequiredPoints();
  };
  AchievementVO.prototype.requiredRelativeAchievementPoints = function () {
    return this._conditions[0].amount - this.previosAchievementRequiredPoints();
  };
  AchievementVO.prototype.previosAchievementRequiredPoints = function () {
    if (this._requiredAchievementID > 0) {
      return r.CastleModel.castleAchievementData.getAchievementSeriesByID(a.CastleAchievementData.MAIN_ACHIEVMENT_SERIESID).achievements[this._requiredAchievementID]._conditions[0].amount;
    } else {
      return 0;
    }
  };
  Object.defineProperty(AchievementVO.prototype, "totalCurrentProgress", {
    get: function () {
      var e = 0;
      if (this._conditions != null) {
        for (var t = 0, i = this._conditions; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            e += n.currentProgress;
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "achievementID", {
    get: function () {
      return this._achievementID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "achievementPoints", {
    get: function () {
      return this._achievementPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "requiredAchievementID", {
    get: function () {
      return this._requiredAchievementID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "achievementSeriesNumber", {
    get: function () {
      return this._achievementSeriesNumber;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "conditions", {
    get: function () {
      return this._conditions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "achievementSerieVO", {
    get: function () {
      return this._achievementSerie;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "displayDisp", {
    get: function () {
      var e = new s.CastleGoodgameExternalClip(this._achievementSerie.displayName, this._achievementSerie.getFilePath(), null, 0, false);
      e.recycleAsset = false;
      return e.asDisplayObject();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "hasYellowBar", {
    get: function () {
      switch (this.conditions[0].type) {
        case "tools":
          return false;
        default:
          return this.totalMaxProgress > 1 || this.achievementSerieVO.numberOfAchievementsInSeries > 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "hasDifficultyUnlock", {
    get: function () {
      return this._unlocksDifficulty > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "unlocksDifficulty", {
    get: function () {
      return this._unlocksDifficulty;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "achievementFinished", {
    get: function () {
      return this._achievementFinished;
    },
    enumerable: true,
    configurable: true
  });
  return AchievementVO;
}();
exports.AchievementVO = n;
var o = require("./50.js");
var a = require("./811.js");
var s = require("./24.js");
var r = require("./4.js");
var l = require("./3464.js");