Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./22.js");
var r = require("./460.js");
var l = require("./1909.js");
var c = function (e) {
  function APointEventTypeScoreEventVO(t = 0) {
    var i = this;
    i._pointEventTypeID = -1;
    i._disableRanking = false;
    i._kingdomId = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this)._rewardLists = [];
    i.scoreConditions = [];
    return i;
  }
  n.__extends(APointEventTypeScoreEventVO, e);
  APointEventTypeScoreEventVO.prototype.parseBasicsFromParamObject = function (t) {
    e.prototype.parseBasicsFromParamObject.call(this, t);
    if (t.PET) {
      this._pointEventTypeID = a.int(t.PET);
    }
    this.addRewardsToList(t.R);
  };
  APointEventTypeScoreEventVO.prototype.addRewardsToList = function (e) {
    if (e) {
      for (var t = 0; t < e.length; t++) {
        this._rewardLists.push(u.CollectableManager.parser.s2cParamList.createList(e[t]));
      }
    }
  };
  APointEventTypeScoreEventVO.prototype.parseAdditionalXmlFromRoot = function (t) {
    var i;
    var n = 0;
    e.prototype.parseAdditionalXmlFromRoot.call(this, t);
    var o = t.pointeventtypes;
    if (o != null) {
      for (var a = 0, r = o; a < r.length; a++) {
        var l = r[a];
        if (l !== undefined) {
          if (parseInt(l.pointEventTypeID || "") == this._pointEventTypeID) {
            i = s.CastleXMLUtils.getIntArrayFromString(l.pointEventQuestIDs || "", ",");
          }
        }
      }
    }
    if (!i || i.length == 0) {
      throw new Error("Did not find matching pointeventtype XML node for event ID " + this._eventId + " and point event type ID " + this._pointEventTypeID + ".");
    }
    if (i != null) {
      for (var c = 0, u = i; c < u.length; c++) {
        var d = u[c];
        if (d !== undefined) {
          var p = t.pointeventquests;
          if (p != null) {
            for (var h = 0, g = p; h < g.length; h++) {
              var C = g[h];
              if (C !== undefined) {
                if (parseInt(C.pointEventQuestID || "") == d) {
                  var _ = parseInt(C.leaguetypeID || "");
                  n = parseInt(s.CastleXMLUtils.getValueOrDefault("subType", C, "0"));
                  if (_ == this._leagueID && this.subTypeID == n) {
                    this.parsePointEventQuest(C);
                    return;
                  }
                }
              }
            }
          }
        }
      }
    }
    throw new Error("Did not find matching pointeventquest XML node for event ID " + this._eventId + ", league ID " + this._leagueID + ", subtype " + n + " and any of " + i.toString() + " quest IDs.");
  };
  APointEventTypeScoreEventVO.prototype.getCondition = function (e) {
    return this.scoreConditions[e];
  };
  Object.defineProperty(APointEventTypeScoreEventVO.prototype, "conditionCount", {
    get: function () {
      return this.scoreConditions.length;
    },
    enumerable: true,
    configurable: true
  });
  APointEventTypeScoreEventVO.prototype.parsePointEventQuest = function (e) {
    this._kingdomId = parseInt(s.CastleXMLUtils.getValueOrDefault("kID", e, "-1"));
    for (var t = (e.conditions || "").split("#"), i = [], n = 0; n < t.length; n++) {
      i[n] = t[n].toString().split("+");
    }
    var o = s.CastleXMLUtils.getValueOrDefault("pointsPerTier", e, "");
    var r = s.CastleXMLUtils.getIntArrayFromString(o, ",");
    if (r.length != i.length) {
      throw new Error("The length of pointsPerTier and conditions in pointeventquest XML node with id " + (e.pointEventQuestID || "") + ":  must be the same!");
    }
    this.scoreConditions.length = 0;
    for (var c = 0; c < i.length; ++c) {
      this.scoreConditions.push(new l.ScoreConditionVO(r[c], i[c], this._kingdomId));
    }
    this._topX = s.CastleXMLUtils.getIntArrayFromString(s.CastleXMLUtils.getValueOrDefault("topXValue", e, ""), ",");
    this._pointThreshholds = [];
    this._pointThreshholds.push(a.int(s.CastleXMLUtils.getValueOrDefault("neededPointsForReward1", e, null)));
    this._pointThreshholds.push(a.int(s.CastleXMLUtils.getValueOrDefault("neededPointsForReward2", e, null)) * this._pointScale);
    this._pointThreshholds.push(a.int(s.CastleXMLUtils.getValueOrDefault("neededPointsForReward3", e, null)) * this._pointScale);
    this._disableRanking = parseInt(s.CastleXMLUtils.getValueOrDefault("hasInvisibleRanking", e, "0")) != 0;
  };
  Object.defineProperty(APointEventTypeScoreEventVO.prototype, "disableRanking", {
    get: function () {
      return this._disableRanking;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APointEventTypeScoreEventVO.prototype, "kingdomId", {
    get: function () {
      return this._kingdomId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APointEventTypeScoreEventVO.prototype, "isKingdomSpecific", {
    get: function () {
      return this._kingdomId >= 0;
    },
    enumerable: true,
    configurable: true
  });
  return APointEventTypeScoreEventVO;
}(r.AScoreEventVO);
exports.APointEventTypeScoreEventVO = c;
var u = require("./50.js");
o.classImplementsInterfaces(c, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable");