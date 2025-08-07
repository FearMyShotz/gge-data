Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./22.js");
var r = require("./210.js");
var l = require("./48.js");
var c = require("./15.js");
var u = require("./4.js");
var d = function (e) {
  function AScoreEventVO(t = 0) {
    var i = this;
    i._subTypeID = 0;
    i._numberOfLeagues = 0;
    i._ownRank = -1;
    i._ownPoints = 0;
    i._maxPoints = 0;
    i._leagueID = 1;
    i._pointScale = 1;
    i._pointThreshholds = [];
    i._topX = [];
    i._rewardLists = [];
    i._difficultyIDChoosen = -1;
    i._difficultyScalingEnabled = false;
    i.isAllianceRewardScore = false;
    i._leaderBoardRewardSetID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._subTypeID = t;
    i.eventOverviewConfig.eventOverviewDetails = p.EventOverviewDetailEnum.DETAILS_POINT_EVENT_DEFAULT;
    return i;
  }
  n.__extends(AScoreEventVO, e);
  AScoreEventVO.prototype.parseAdditionalXmlFromRoot = function (e) {
    this.generateLeagueLevelsList(e);
  };
  AScoreEventVO.prototype.parseBasicsFromParamObject = function (t) {
    e.prototype.parseBasicsFromParamObject.call(this, t);
    if (t[h.CommKeys.EVENT_DIFFICULTY_ID] != undefined) {
      this._difficultyIDChoosen = a.int(t[h.CommKeys.EVENT_DIFFICULTY_ID]);
    }
    this._difficultyScalingEnabled = t[h.CommKeys.EVENT_AUTO_SCALING_ENABLED] != undefined && a.int(t[h.CommKeys.EVENT_AUTO_SCALING_ENABLED]) == 1;
    if (!this._difficultyScalingEnabled) {
      this._difficultyIDChoosen = 0;
    }
    if (t.LID) {
      this._leagueID = a.int(t.LID);
    }
    if (t.OR) {
      this._ownRank = a.int(t.OR);
    }
    if (t.ST) {
      this._subTypeID = a.int(t.ST);
    }
    if (t.OP) {
      this._ownPoints = a.int(t.OP);
      if (this.seasonLeague) {
        this.seasonLeague.participatedOnEvent = this._ownPoints > 0;
      }
    }
    if (t.SC) {
      this._pointScale = a.int(a.int(t.SC));
    }
    if (t.LRSI) {
      this._leaderBoardRewardSetID = t.LRSI;
    }
  };
  AScoreEventVO.prototype.leagueLevels = function (e) {
    if (this._leagueLevels.get(e) && this._leagueLevels.get(e).length == 2) {
      return this._leagueLevels.get(e);
    } else {
      return ["-", "-"];
    }
  };
  AScoreEventVO.prototype.needToOpenDifficultyDialog = function () {
    return this._difficultyIDChoosen == -1;
  };
  AScoreEventVO.prototype.countVictories = function (e) {
    return this._countVictories.get(e);
  };
  AScoreEventVO.prototype.generateLeagueLevelsList = function (e) {
    this._leagueLevels = new Map();
    this._countVictories = new Map();
    this._numberOfLeagues = 0;
    var t = e.leaguetypes;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = parseInt(o.leaguetypeID || "");
          var r = parseInt(o.eventID || "");
          var l = parseInt(o.minLevel || "");
          var c = parseInt(o.maxLevel || "");
          var u = parseInt(o.countVictoryMin || "");
          var d = parseInt(o.countVictoryMax || "");
          var p = parseInt(s.CastleXMLUtils.getValueOrDefault("subType", o, "0"));
          if (this.eventId == r && p == this._subTypeID) {
            this._leagueLevels.set(a, [l, c]);
            this._countVictories.set(a, [u, d]);
            this._numberOfLeagues++;
          }
        }
      }
    }
  };
  Object.defineProperty(AScoreEventVO.prototype, "difficultyIDChoosen", {
    get: function () {
      return this._difficultyIDChoosen;
    },
    set: function (e) {
      this._difficultyIDChoosen = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "difficultyScalingEnabled", {
    set: function (e) {
      this._difficultyScalingEnabled = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "maxPointsForThisDifficulty", {
    get: function () {
      return this._difficultyMaxPoints[this._difficultyIDForMaxPoints.indexOf(this._difficultyIDChoosen)];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "isDifficultyScalingActivated", {
    get: function () {
      return this._difficultyIDChoosen > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "pointThresholdsRaw", {
    get: function () {
      return this._pointThreshholds;
    },
    enumerable: true,
    configurable: true
  });
  AScoreEventVO.prototype.getHighest4RewardsForDifficulty = function (e) {
    var t = new l.CollectableList();
    var i = this._pointThreshholds.length - 1;
    var n = e > 0 && this._difficultyIDForMaxPoints.indexOf(e) >= 0;
    if (n) {
      var o = this._difficultyMaxPoints[this._difficultyIDForMaxPoints.indexOf(e)];
      for (i = 0; i <= this._scaledPointThreshholdsRaw.length && !(i + 1 >= this._scaledPointThreshholdsRaw.length) && !(this._scaledPointThreshholdsRaw[i + 1] > o); i++);
    }
    for (; t.length < 4; i--) {
      t.addList((n ? this._scaledRewardListsRaw : this._rewardLists)[i]);
    }
    return t;
  };
  AScoreEventVO.prototype.getRewardsAndPointsArrayForDifficultyDescending = function (e) {
    var t = [];
    var i = e > 0 && this._difficultyIDForMaxPoints.indexOf(e) >= 0 || this.isAllianceRewardScore;
    var n = i ? this._scaledRewardListsRaw : this._rewardLists;
    var o = i ? this._scaledPointThreshholdsRaw : this._pointThreshholds;
    var a = o[o.length - 1];
    if (i) {
      var s = 0;
      s = this.isAllianceRewardScore ? this._difficultyIDForMaxPoints.length - 1 : this._difficultyIDForMaxPoints.indexOf(e);
      a = this._difficultyMaxPoints[s];
    }
    var r = n.length - 1;
    for (s = 0; r >= 0; r--, s++) {
      if (r >= o.length || o[r] <= a) {
        var l;
        var c = 0;
        switch (r) {
          case n.length - 1:
            l = 1;
            break;
          case n.length - 2:
            l = this._topX[1];
            break;
          case n.length - 3:
            l = this._topX[0];
            break;
          default:
            c = this._scaledPointThreshholdsRaw[r];
        }
        t.push([l, c, n[r], s]);
      }
    }
    return t;
  };
  AScoreEventVO.prototype.getRewardGroupsAndPointsArrayForDifficultyDescending = function () {
    var e = [];
    var t = this._difficultyIDForMaxPoints.length - 1;
    var i = this._scaledRewardListsRaw.length - 4;
    do {
      var n;
      n = t > 0 && this._difficultyMaxPoints[t] <= this._difficultyMaxPoints[t - 1] ? [this._difficultyIDForMaxPoints[t], this._difficultyIDForMaxPoints[t - 1]] : [this._difficultyIDForMaxPoints[t]];
      var o = this._difficultyMaxPoints[t - n.length];
      var a = [];
      while (i >= 0) {
        var s = this._scaledPointThreshholdsRaw[i];
        if (s <= o) {
          break;
        }
        a.push([s, this._scaledRewardListsRaw[i]]);
        i--;
      }
      e.push([n, a]);
      t -= n.length;
    } while (t > -1);
    return e;
  };
  AScoreEventVO.prototype.getRewardsForChoosenDifficultyAscending = function () {
    var e = [];
    var t = this._difficultyIDChoosen > 0 && this._difficultyIDForMaxPoints.indexOf(this._difficultyIDChoosen) >= 0 || this.isAllianceRewardScore;
    var i = t ? this._scaledRewardListsRaw : this._rewardLists;
    var n = t ? this._scaledPointThreshholdsRaw : this._pointThreshholds;
    var o = n[n.length - 1];
    if (!this.isAllianceRewardScore) {
      var a = 0;
      a = this.isAllianceRewardScore ? this._difficultyIDForMaxPoints.length - 1 : this._difficultyIDForMaxPoints.indexOf(this._difficultyIDChoosen);
      o = this._difficultyMaxPoints[a];
    }
    for (var s = 0; s < i.length; s++) {
      if (s >= n.length || n[s] <= o) {
        e.push(i[s]);
      }
    }
    return e;
  };
  AScoreEventVO.prototype.getThreshholdsForChoosenDifficultyAscending = function () {
    if (!this._difficultyIDForMaxPoints) {
      return this._pointThreshholds;
    }
    var e = [];
    var t = this._difficultyIDChoosen > 0 && this._difficultyIDForMaxPoints.indexOf(this._difficultyIDChoosen) >= 0 || this.isAllianceRewardScore;
    var i = t ? this._scaledPointThreshholdsRaw : this._pointThreshholds;
    var n = i[i.length - 1];
    if (!t) {
      return i;
    }
    var o = 0;
    o = this.isAllianceRewardScore ? this._difficultyIDForMaxPoints.length - 1 : this._difficultyIDForMaxPoints.indexOf(this._difficultyIDChoosen);
    n = this._difficultyMaxPoints[o];
    for (var a = 0; a < i.length; a++) {
      if (i[a] <= n) {
        e.push(i[a]);
      }
    }
    return e;
  };
  AScoreEventVO.prototype.setRankAndPoints = function (e, t, i) {
    if (e) {
      this._ownRank = e[0];
    }
    if (t) {
      this._ownPoints = t[0];
    }
    if (i) {
      this._maxPoints = i[0];
    }
    c.CastleBasicController.getInstance().dispatchEvent(new r.CastleScoreEventEvent(r.CastleScoreEventEvent.UPDATE_POINTS));
  };
  Object.defineProperty(AScoreEventVO.prototype, "leagueID", {
    get: function () {
      return this._leagueID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "pointThresholds", {
    get: function () {
      if (this.isDifficultyScalingActivated || this._difficultyScalingEnabled && this.isAllianceRewardScore) {
        return this.getThreshholdsForChoosenDifficultyAscending();
      } else {
        return this._pointThreshholds;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "ownRank", {
    get: function () {
      return this._ownRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "ownPoints", {
    get: function () {
      if (this._ownPoints) {
        return this._ownPoints;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "numberOfLeagues", {
    get: function () {
      return this._numberOfLeagues;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "topX", {
    get: function () {
      return this._topX;
    },
    enumerable: true,
    configurable: true
  });
  AScoreEventVO.prototype.setDynamicTopX = function (e) {
    this._topX = e;
  };
  Object.defineProperty(AScoreEventVO.prototype, "subTypeID", {
    get: function () {
      return this._subTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "rewardLists", {
    get: function () {
      if (this.isDifficultyScalingActivated || this._difficultyScalingEnabled && this.isAllianceRewardScore) {
        return this.getRewardsForChoosenDifficultyAscending();
      } else {
        return this._rewardLists;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "rewardsReceived", {
    get: function () {
      var e = 0;
      for (e = 0; e < this.pointThresholds.length && !(this.pointThresholds[e] > this.maxPoints); ++e);
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "maxPoints", {
    get: function () {
      return Math.max(this._maxPoints, this._ownPoints);
    },
    enumerable: true,
    configurable: true
  });
  AScoreEventVO.prototype.getGlobalLeaderBoardRewards = function (e = -1) {
    return u.CastleModel.leaderboardRewardsData.getRewardListForDialogList(this.eventId, this._leaderBoardRewardSetID, e);
  };
  return AScoreEventVO;
}(require("./79.js").ASpecialEventVO);
exports.AScoreEventVO = d;
var p = require("./571.js");
var h = require("./5.js");
o.classImplementsInterfaces(d, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable");