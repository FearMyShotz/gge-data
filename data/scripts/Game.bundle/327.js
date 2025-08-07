Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./22.js");
var r = function (e) {
  function ALeagueTypeScoreEventVO(t = 0) {
    var i = this;
    i._hardModePointsThreshold = 0;
    i._hardModePointsThresholdIndex = 0;
    i._rewardSetId = 0;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(ALeagueTypeScoreEventVO, e);
  ALeagueTypeScoreEventVO.prototype.parseBasicsFromParamObject = function (t) {
    e.prototype.parseBasicsFromParamObject.call(this, t);
    this._rewardSetId = a.int(t.RSID);
  };
  ALeagueTypeScoreEventVO.prototype.parseAdditionalXmlFromRoot = function (t) {
    e.prototype.parseAdditionalXmlFromRoot.call(this, t);
    var i = t.leaguetypeevents;
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          var r = parseInt(a.eventID || "");
          var l = parseInt(a.leaguetypeID || "");
          var c = parseInt(s.CastleXMLUtils.getValueOrDefault("subType", a, "0"));
          var u = parseInt(s.CastleXMLUtils.getValueOrDefault("rewardSetID", a, "0"));
          var d = this._rewardSetId <= 0 || u == this._rewardSetId;
          if (r == this._eventId && this.subTypeID == c && l == this._leagueID && d) {
            this.parseLeagueTypeEventElement(a);
            this.parseDifficultyScaling(a);
            return;
          }
        }
      }
    }
    throw new Error("Did not find matching leagueTypeEventEntry for eventId '" + this._eventId + "', leagueId '" + this._leagueID + "',subType '" + this.subTypeID + "' and rewardSetId '" + this._rewardSetId + "'.");
  };
  ALeagueTypeScoreEventVO.prototype.parseDifficultyScaling = function (e) {
    var t = (e.difficultyScalingRewardIDs || "").toString();
    this._scaledRewardListsRaw = l.CollectableManager.parser.createListsFromRewardIdsString(t, true, c.CollectableParser.DEFAULT_REWARD_DELIMITER, c.CollectableParser.DEFAULT_REWARD_SUBDELIMITER);
    this._difficultyIDForMaxPoints = s.CastleXMLUtils.getIntArrayFromString(e.difficultyIDforMaxPoints || "", ",");
    this._difficultyMaxPoints = s.CastleXMLUtils.getIntArrayFromString(e.difficultyMaxPoints || "", ",");
    this._scaledPointThreshholdsRaw = s.CastleXMLUtils.getIntArrayFromString(e.difficultyScalingNeededPointsForRewards || "", ",");
  };
  ALeagueTypeScoreEventVO.prototype.parseLeagueTypeEventElement = function (e) {
    this._hardModePointsThresholdIndex = -1;
    this._hardModePointsThreshold = parseInt(e.hardModeStart || "");
    this._topX = s.CastleXMLUtils.getIntArrayFromString(e.topXValue || "", ",");
    var t = s.CastleXMLUtils.getIntArrayFromString(e.neededPointsForRewards || "", ",");
    var i = a.int(t.length);
    this._pointThreshholds = [];
    this._pointThreshholdsHardMode = [];
    this._pointThreshholdsRaw = [];
    for (var n = 0; n < i; n++) {
      var o = a.int(a.int(t[n]));
      if (this._hardModePointsThreshold > 0 && o > this._hardModePointsThreshold) {
        if (this._hardModePointsThresholdIndex == -1) {
          this._hardModePointsThresholdIndex = n;
        }
        if (n == 0) {
          this._pointThreshholdsHardMode.push(o);
        } else {
          this._pointThreshholdsHardMode.push(o * this._pointScale);
        }
      } else if (n == 0) {
        this._pointThreshholds.push(o);
      } else {
        this._pointThreshholds.push(o * this._pointScale);
      }
      if (n == 0) {
        this._pointThreshholdsRaw.push(o);
      } else {
        this._pointThreshholdsRaw.push(o * this._pointScale);
      }
    }
    var r = (e.rewardIDs || "").toString();
    this._rewardListsRaw = l.CollectableManager.parser.createListsFromRewardIdsString(r, true, c.CollectableParser.DEFAULT_REWARD_DELIMITER, c.CollectableParser.DEFAULT_REWARD_SUBDELIMITER);
    var u = this._rewardListsRaw.length;
    var d = a.int(u - i);
    if (d == 0 && this._hardModePointsThresholdIndex == -1) {
      this._rewardLists = this._rewardListsRaw.slice();
    } else {
      this._rewardListsHardMode = this._rewardListsRaw.slice(this._hardModePointsThresholdIndex);
      this._rewardLists = this._rewardListsRaw.slice(0, this._hardModePointsThresholdIndex);
      this._rewardLists = this._rewardLists.concat(this._rewardListsHardMode.slice(this._rewardListsHardMode.length - d));
    }
    this._allianceRewardThresholdPoints = parseInt(s.CastleXMLUtils.getValueOrDefault("allianceRewardThresholdPoints", e, "0"));
  };
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "isDifficultyScalingActivated", {
    get: function () {
      return this._difficultyIDChoosen > 0 && this._difficultyIDForMaxPoints.indexOf(this._difficultyIDChoosen) >= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "pointThresholdsRaw", {
    get: function () {
      if (this.isDifficultyScalingActivated || this._difficultyScalingEnabled && this.isAllianceRewardScore) {
        return this._scaledPointThreshholdsRaw;
      } else {
        return this._pointThreshholds;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "hardModePointsThreshold", {
    get: function () {
      return this._hardModePointsThreshold;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "isHardMode", {
    get: function () {
      return !this.isDifficultyScalingActivated && this.hardModePointsThreshold > 0 && this.ownPoints >= this.hardModePointsThreshold;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "pointThreshholdsHardMode", {
    get: function () {
      return this._pointThreshholdsHardMode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "rewardListsHardMode", {
    get: function () {
      return this._rewardListsHardMode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "rewardListsRaw", {
    get: function () {
      return this._rewardListsRaw;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "pointThreshholdsRaw", {
    get: function () {
      return this._pointThreshholdsRaw;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "rewardsReceivedHardMode", {
    get: function () {
      var e = 0;
      for (e = 0; e < this.pointThreshholdsHardMode.length && !(this.pointThreshholdsHardMode[e] > this.ownPoints); ++e);
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "rewardsReceivedRaw", {
    get: function () {
      var e = 0;
      for (e = 0; e < this.pointThreshholdsRaw.length && !(this.pointThreshholdsRaw[e] > this.ownPoints); ++e);
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "rewardSetId", {
    get: function () {
      return this._rewardSetId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "isPlayerQualifiedForAllianceRewards", {
    get: function () {
      return this._ownPoints >= this._allianceRewardThresholdPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "allianceRewardThresholdPoints", {
    get: function () {
      return this._allianceRewardThresholdPoints;
    },
    enumerable: true,
    configurable: true
  });
  return ALeagueTypeScoreEventVO;
}(require("./460.js").AScoreEventVO);
exports.ALeagueTypeScoreEventVO = r;
var l = require("./50.js");
var c = require("./1175.js");
o.classImplementsInterfaces(r, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable");