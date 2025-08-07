Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./6.js");
var r = require("./1679.js");
var l = require("./4.js");
var c = require("./3461.js");
var u = function (e) {
  function CastleAchievementData(t) {
    var i = this;
    i._achievementPoints = 0;
    i._totalPossibleAchievementPoints = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._achievementSeries = new Map();
    i._achievements = new Map();
    i._totalPossibleAchievementPoints = 0;
    i._lastThreeAchievementIDs = [0, 0, 0];
    i._achievementPoints = 0;
    var n = t.achievements;
    if (n != null) {
      for (var o = 0, s = n; o < s.length; o++) {
        var r = s[o];
        if (r !== undefined) {
          var l;
          var u = parseInt(r.achievementSeriesID || "");
          if (a.DictionaryUtil.containsKey(i._achievementSeries, u)) {
            l = i._achievementSeries.get(u);
          } else {
            (l = new c.AchievementSerieVO()).fillFromParamXML(r);
            i._achievementSeries.set(u, l);
          }
          var p = new d.AchievementVO(l);
          p.fillFromParamXML(r);
          l.addAchievementVO(p);
          i._achievements.set(p.achievementID, p);
          i._totalPossibleAchievementPoints += p.achievementPoints;
        }
      }
    }
    return i;
  }
  n.__extends(CastleAchievementData, e);
  CastleAchievementData.prototype.reset = function () {
    e.prototype.reset.call(this);
    if (this._achievementSeries != null) {
      for (var t = 0, i = Array.from(this._achievementSeries.values()); t < i.length; t++) {
        i[t].reset();
      }
    }
    if (this._achievements != null) {
      for (var n = 0, o = Array.from(this._achievements.values()); n < o.length; n++) {
        o[n].reset();
      }
    }
    this._lastThreeAchievementIDs = [0, 0, 0];
    this._achievementPoints = 0;
  };
  CastleAchievementData.prototype.parse_vli = function (e) {
    this._achievementPoints = s.int(e.AVP);
    this.parse_FA(e.FA);
    this.parse_RA(e.RA);
    this.dispatchEvent(new r.CastleAchievementDataEvent(r.CastleAchievementDataEvent.ACHIEVEMENT_REFRESHED));
  };
  CastleAchievementData.prototype.parse_RA = function (e) {
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && this._achievements.get(n.AID)) {
          this._achievements.get(n.AID).setProgress(n.P);
        }
      }
    }
  };
  CastleAchievementData.prototype.parse_FA = function (e) {
    if (e) {
      var t = 0;
      for (t = 0; t < e.length; ++t) {
        this._achievements.get(e[t]).setFinished();
      }
      var i = 0;
      for (t = s.int(e.length - 1); t >= 0 && i < 3; --t) {
        if (this._achievements.get(e[t]).achievementSerieVO.achievementSeriesID != CastleAchievementData.MAIN_ACHIEVMENT_SERIESID) {
          this._lastThreeAchievementIDs[i] = e[t];
          ++i;
        }
      }
    }
  };
  Object.defineProperty(CastleAchievementData.prototype, "lastThreeAchievementIDs", {
    get: function () {
      return this._lastThreeAchievementIDs;
    },
    enumerable: true,
    configurable: true
  });
  CastleAchievementData.prototype.getAchievementSeriesByCategory = function (e) {
    var t = [];
    if (this._achievementSeries != null) {
      for (var i = 0, n = Array.from(this._achievementSeries.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.category == e && (!o.isHidden || o.isHidden && o.isSerieFinished)) {
          t.push(o);
        }
      }
    }
    t.sort(this.bindFunction(this.sortBySeriesID));
    return t;
  };
  CastleAchievementData.prototype.sortBySeriesID = function (e, t) {
    return e.achievementSeriesID - t.achievementSeriesID;
  };
  CastleAchievementData.prototype.getAchievementByID = function (e) {
    return this._achievements.get(e);
  };
  CastleAchievementData.prototype.isDifficultyUnlocked = function (e) {
    for (var t = 0, i = Array.from(this._achievements.values()); t < i.length; t++) {
      var n = i[t];
      if (n.unlocksDifficulty == e) {
        return n.achievementFinished;
      }
    }
    return true;
  };
  CastleAchievementData.prototype.getAchievementForUnlockDifficulty = function (e) {
    for (var t = 0, i = Array.from(this._achievements.values()); t < i.length; t++) {
      var n = i[t];
      if (n.unlocksDifficulty == e) {
        return n;
      }
    }
    return null;
  };
  CastleAchievementData.prototype.getAchievementSeriesByID = function (e) {
    return this._achievementSeries.get(e);
  };
  Object.defineProperty(CastleAchievementData.prototype, "totalPossibleAchievementPoints", {
    get: function () {
      return this._totalPossibleAchievementPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAchievementData.prototype, "userProgressInPercent", {
    get: function () {
      return Math.round(this.achievementPoints / this._totalPossibleAchievementPoints * 100);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAchievementData.prototype, "achievementPoints", {
    get: function () {
      return this._achievementPoints;
    },
    enumerable: true,
    configurable: true
  });
  CastleAchievementData.prototype.calculateMainAchievementByAP = function () {
    for (var e = this.getAchievementSeriesByID(CastleAchievementData.MAIN_ACHIEVMENT_SERIESID), t = s.int(l.CastleModel.castleAchievementData.achievementPoints), i = 1; i <= e.numberOfAchievementsInSeries;) {
      if (e.achievements[i].conditions[0].amount > t) {
        return e.achievements[i];
      }
      i++;
    }
    return e.achievements[e.numberOfAchievementsInSeries];
  };
  CastleAchievementData.MAIN_ACHIEVMENT_SERIESID = 0;
  return CastleAchievementData;
}(require("./54.js").CastleBasicData);
exports.CastleAchievementData = u;
var d = require("./3462.js");
o.classImplementsInterfaces(u, "IUpdatable", "ICastleBasicData");