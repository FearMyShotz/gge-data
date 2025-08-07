Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./1966.js");
var c = require("./48.js");
var u = require("./54.js");
var d = require("./9.js");
var p = require("./887.js");
var h = require("./5590.js");
var g = require("./5594.js");
var C = require("./4.js");
var _ = require("./165.js");
var m = require("./386.js");
var f = require("./5595.js");
var O = require("./5596.js");
var E = require("./1891.js");
var y = require("./1160.js");
var b = function (e) {
  function CastleTempServerData(t) {
    var i = e.call(this) || this;
    i._configs = new Map();
    i._rankRanges = [];
    i._rewardVO = [];
    i._dailyTasksThresholds = [];
    i._preBuildCastles = new Map();
    i.openChargeEffectRerollDialogOnParse = false;
    i.parseXML(t);
    return i;
  }
  n.__extends(CastleTempServerData, e);
  CastleTempServerData.prototype.parseXML = function (e) {
    for (var t = 0, i = e.tempServerRankRewards; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        var o = new O.CastleTempServerRewardVO();
        o.parseXML(n);
        this._rewardVO.push(o);
      }
    }
    for (var a = 0, s = e.tempServerRankPoints; a < s.length; a++) {
      var r = s[a];
      if (r !== undefined) {
        var l = new E.TempServerRankRangeVO();
        l.parseXML(r);
        this._rankRanges.push(l);
      }
    }
    for (var c = 0, u = e.tempServerSettings; c < u.length; c++) {
      var d = u[c];
      if (d !== undefined) {
        var p = new m.TempServerConfigurationVO();
        p.parseXML(d);
        this._configs.set(p.settingID, p);
      }
    }
    for (var h = 0, g = e.tempServerDailyTaskRewards; h < g.length; h++) {
      var C = g[h];
      if (C !== undefined) {
        var _ = new f.CastleTempServerDailyTaskRewardVO();
        _.parseXML(C);
        this._dailyTasksThresholds.push(_);
      }
    }
    for (var b = 0, D = e.tempServerPreBuiltCastles; b < D.length; b++) {
      var I = D[b];
      if (I !== undefined) {
        var T = new y.SpecialServerPreBuiltCastleVO();
        T.parseXML(I);
        this._preBuildCastles.set(T.preBuiltCastleID, T);
      }
    }
  };
  Object.defineProperty(CastleTempServerData.prototype, "dailyRewardLevels", {
    get: function () {
      if (this._dailyTasksThresholds) {
        return this._dailyTasksThresholds.length;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleTempServerData.prototype.getDailyTaskRewardsByPoints = function (e) {
    var t = new c.CollectableList();
    if (this._dailyTasksThresholds != null) {
      for (var i = 0, n = this._dailyTasksThresholds; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && e >= o.minDailyTaskPoints) {
          t.addList(o.rankRewards);
        }
      }
    }
    t.combineDuplicatedItems();
    return t;
  };
  CastleTempServerData.prototype.getMaxMinDailyTaskThreshold = function () {
    var e = 0;
    if (this._dailyTasksThresholds != null) {
      for (var t = 0, i = this._dailyTasksThresholds; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.minDailyTaskPoints > e) {
          e = n.minDailyTaskPoints;
        }
      }
    }
    return e;
  };
  CastleTempServerData.prototype.getDailyTaskRewardsAsOverviewItems = function () {
    var e = [];
    var t = this._dailyTasksThresholds;
    t.sort(this.bindFunction(this.sortByPoints));
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = s.Localize.text("dialog_tempServer_dailyTask_rewards_steps", [o.id, o.minDailyTaskPoints]);
          var r = new p.SeasonLeagueRewardOverviewDialogItemVO(a, o.rankRewards);
          e.push(r);
        }
      }
    }
    return e;
  };
  CastleTempServerData.prototype.sortByPoints = function (e, t) {
    return t.minDailyTaskPoints - e.minDailyTaskPoints;
  };
  CastleTempServerData.prototype.getReachedRewardStepsByPoints = function (e) {
    var t = 0;
    var i = 0;
    if (this._dailyTasksThresholds != null) {
      for (var n = 0, o = this._dailyTasksThresholds; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          if (a.minDailyTaskPoints <= e) {
            t++;
          }
          i++;
        }
      }
    }
    return [t, i];
  };
  CastleTempServerData.prototype.getConfigVOByID = function (e) {
    return this._configs.get(e);
  };
  CastleTempServerData.prototype.getRewardsByRewardSetID = function (e) {
    var t = [];
    if (this._rewardVO != null) {
      for (var i = 0, n = this._rewardVO; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.rewardSetID == e) {
          t.push(o.rankReward);
        }
      }
    }
    return t;
  };
  Object.defineProperty(CastleTempServerData.prototype, "tempServerMultiplierEventVO", {
    get: function () {
      return C.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_TEMPSERVER_MULTIPLIER);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTempServerData.prototype, "currentMinMultiplier", {
    get: function () {
      if (this.tempServerMultiplierEventVO) {
        return this.tempServerMultiplierEventVO.currentMinMultiplier;
      } else {
        return 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTempServerData.prototype, "currentMaxMultiplier", {
    get: function () {
      if (this.tempServerMultiplierEventVO) {
        return this.tempServerMultiplierEventVO.currentMaxMultiplier;
      } else {
        return 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleTempServerData.prototype.getDailyRankVOByID = function (e) {
    if (this._dailyTasksThresholds != null) {
      for (var t = 0, i = this._dailyTasksThresholds; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.id == e) {
          return n;
        }
      }
    }
    return null;
  };
  CastleTempServerData.prototype.getDailyRankPointsByRank = function (e) {
    var t = 0;
    if (this._rankRanges != null) {
      for (var i = 0, n = this._rankRanges; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && e <= o.minRank && e >= o.maxRank) {
          t = o.rankPoints;
          break;
        }
      }
    }
    return t;
  };
  CastleTempServerData.prototype.getRankRangeByRank = function (e) {
    if (this._rankRanges != null) {
      for (var t = 0, i = this._rankRanges; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && e <= n.minRank && e >= n.maxRank) {
          return n;
        }
      }
    }
    return null;
  };
  CastleTempServerData.prototype.parse_RerollChargeEffects = function (e) {
    var t = C.CastleModel.effectsData.getEffectByID(e.CCOE[0][0]);
    var i = new _.BonusVO().parseFromValueArray(t, e.CCOE[0][1]);
    var n = r.int(e.CCNE && e.CCNE.length > 0 ? e.CCNE[0][0] : -1);
    var o = n > 0 ? e.CCNE[0][1] : [-1];
    var a = (t = C.CastleModel.effectsData.getEffectByID(n)) ? new _.BonusVO().parseFromValueArray(t, o) : null;
    if (this.openChargeEffectRerollDialogOnParse) {
      d.CastleDialogHandler.getInstance().registerDialogs(h.CastleTempServerEffectRerollDialog, new g.CastleTempServerEffectRerollDialogProperties(this.lastTargetForRerollCharge, i, a));
      this.openChargeEffectRerollDialogOnParse = false;
    }
    this.dispatchEvent(new l.CastleTempServerEventEvent(l.CastleTempServerEventEvent.TEMPSERVER_CHARGE_EFFECT_ARRIVED, [i, a]));
  };
  CastleTempServerData.prototype.getPreBuildCastleVOByID = function (e) {
    return this._preBuildCastles.get(e);
  };
  return CastleTempServerData;
}(u.CastleBasicData);
exports.CastleTempServerData = b;
o.classImplementsInterfaces(b, "IUpdatable", "ICastleBasicData");