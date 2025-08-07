Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./28.js");
var l = require("./37.js");
var c = require("./53.js");
var u = require("./30.js");
var d = require("./15.js");
var p = require("./54.js");
var h = require("./5749.js");
var g = require("./5750.js");
var C = require("./5751.js");
var _ = require("./5752.js");
var m = require("./5753.js");
var f = require("./5754.js");
var O = require("./5755.js");
var E = require("./1160.js");
var y = require("./683.js");
var b = require("./5756.js");
var D = require("./965.js");
var I = require("./5757.js");
var T = function (e) {
  function CastleAllianceBattleGroundData(t) {
    var i = e.call(this) || this;
    i._configs = new Map();
    i._preBuildCastles = new Map();
    i._startResources = new Map();
    i._scoringSystems = new Map();
    i._rewardVO = [];
    i._dungeonVOs = [];
    i._allianceTowerVOs = [];
    i._allianceTowerEffectXmlVOs = [];
    i._allianceTowerEffectActivationVOs = [];
    i.timestampTillNextTowerRevive = 0;
    i.timestampTillNextTowerRelink = 0;
    i.parseXML(t);
    return i;
  }
  n.__extends(CastleAllianceBattleGroundData, e);
  CastleAllianceBattleGroundData.prototype.parseXML = function (e) {
    for (var t = 0, i = e.allianceTowerEffectsActivations; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        var o = new g.ABGAllianceTowerEffectActivationVO();
        o.parseXML(n);
        this._allianceTowerEffectActivationVOs.push(o);
      }
    }
    for (var a = 0, s = e.allianceTowerEffects; a < s.length; a++) {
      var r = s[a];
      if (r !== undefined) {
        var l = new _.ABGAllianceTowerEffectXmlVO();
        l.parseXML(r);
        this._allianceTowerEffectXmlVOs.push(l);
      }
    }
    for (var c = 0, u = e.allianceTowers; c < u.length; c++) {
      var d = u[c];
      if (d !== undefined) {
        var p = new m.ABGAllianceTowerInfoVO();
        p.parseXML(d);
        this._allianceTowerVOs.push(p);
      }
    }
    for (var h = 0, C = e.allianceBattleGroundDungeons; h < C.length; h++) {
      var D = C[h];
      if (D !== undefined) {
        var T = new O.AllianceBattleGroundDungeonVO();
        T.parseXML(D);
        this._dungeonVOs.push(T);
      }
    }
    for (var v = 0, S = e.allianceBattleGroundScorings; v < S.length; v++) {
      var A = S[v];
      if (A !== undefined) {
        var L = new y.AllianceBattleGroundScoringVO();
        L.parseXML(A);
        this._scoringSystems.set(L.scoringID, L);
      }
    }
    for (var P = 0, M = e.startResources; P < M.length; P++) {
      var R = M[P];
      if (R !== undefined) {
        var V = new b.StartResourcesVO();
        V.parseXML(R);
        this._startResources.set(V.startResourceID, V);
      }
    }
    for (var x = 0, w = e.allianceBattleGroundPreBuiltCastles; x < w.length; x++) {
      var B = w[x];
      if (B !== undefined) {
        var F = new E.SpecialServerPreBuiltCastleVO();
        F.parseXML(B);
        this._preBuildCastles.set(F.preBuiltCastleID, F);
      }
    }
    for (var N = 0, k = e.allianceBattleGroundRankRewards; N < k.length; N++) {
      var U = k[N];
      if (U !== undefined) {
        var G = new I.AllianceBattlegroundRewardVO();
        G.parseXML(U);
        this._rewardVO.push(G);
      }
    }
    for (var H = 0, j = e.allianceBattleGroundSettings; H < j.length; H++) {
      var W = j[H];
      if (W !== undefined) {
        var Y = new f.AllianceBattleGroundConfigurationVO();
        Y.parseXML(W);
        this._configs.set(Y.settingID, Y);
      }
    }
  };
  CastleAllianceBattleGroundData.prototype.getRewardsByRewardSetID = function (e) {
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
  CastleAllianceBattleGroundData.prototype.getConfigVOByID = function (e) {
    return this._configs.get(e);
  };
  CastleAllianceBattleGroundData.prototype.getPreBuildCastleVOByID = function (e) {
    return this._preBuildCastles.get(e);
  };
  CastleAllianceBattleGroundData.prototype.getStartResourcesVOByID = function (e) {
    return this._startResources.get(e);
  };
  CastleAllianceBattleGroundData.prototype.getScoringSystemByID = function (e) {
    return this._scoringSystems.get(e);
  };
  CastleAllianceBattleGroundData.prototype.getDungeonMaxLevel = function () {
    if (!c.ABGHelper.abgEvent) {
      return 0;
    }
    var e = s.int(c.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoringID);
    var t = 1;
    if (this._dungeonVOs != null) {
      for (var i = 0, n = this._dungeonVOs; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.allianceBattleGroundScoringID == e && o.dungeonlevel > t) {
          t = o.dungeonlevel;
        }
      }
    }
    return t;
  };
  CastleAllianceBattleGroundData.prototype.getDungeonVOByVictoryCount = function (e) {
    if (!c.ABGHelper.abgEvent) {
      return null;
    }
    var t;
    var i = s.int(c.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoringID);
    if (this._dungeonVOs != null) {
      for (var n = 0, o = this._dungeonVOs; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.allianceBattleGroundScoringID == i && ((!t || t.dungeonlevel < a.dungeonlevel) && (t = a), a.countVictory == e)) {
          return a;
        }
      }
    }
    return t;
  };
  CastleAllianceBattleGroundData.prototype.getDungeonVOByDungeonLevel = function (e) {
    var t = c.ABGHelper.abgEvent ? s.int(c.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoringID) : -1;
    var i = this.getDungeonMaxLevel();
    if (e > i) {
      e = i;
    }
    if (this._dungeonVOs != null) {
      for (var n = 0, o = this._dungeonVOs; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && (a.allianceBattleGroundScoringID == t || t == -1) && (a.dungeonlevel == e || t == -1)) {
          return a;
        }
      }
    }
    return null;
  };
  CastleAllianceBattleGroundData.prototype.getDungeonSkipCost = function (e, t) {
    var i = this.getDungeonVOByVictoryCount(e);
    return s.int(Math.max(1, i.skipCost * t / 180 / 60));
  };
  CastleAllianceBattleGroundData.prototype.parseAlliancePerformance = function (e) {
    this.alliancePerformanceVOs = [];
    for (var t = 0, i = e.AME; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        var o = new D.AllianceBattlegroundAlliancePerformanceVO();
        o.parseData(n);
        this.alliancePerformanceVOs.push(o);
      }
    }
  };
  CastleAllianceBattleGroundData.prototype.getTowerInfoByCountVictory = function (e) {
    var t;
    var i = 0;
    if (this._allianceTowerVOs != null) {
      for (var n = 0, o = this._allianceTowerVOs; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.countVictory <= e && a.countVictory >= i) {
          i = a.countVictory;
          t = a;
        }
      }
    }
    return t;
  };
  CastleAllianceBattleGroundData.prototype.getTowerInfoByCountLevel = function (e) {
    if (this._allianceTowerVOs != null) {
      for (var t = 0, i = this._allianceTowerVOs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.level == e) {
          return n;
        }
      }
    }
    return null;
  };
  CastleAllianceBattleGroundData.prototype.parseTRT = function (e) {
    this.timestampTillNextTowerRelink = u.CachedTimer.getCachedTimer() + e[a.CommKeys.SECONDS_TILL_NEXT_RE_LINK] * r.ClientConstTime.SEC_2_MILLISEC;
    this.timestampTillNextTowerRevive = u.CachedTimer.getCachedTimer() + e[a.CommKeys.SECONDS_TILL_NEXT_REVIVE] * r.ClientConstTime.SEC_2_MILLISEC;
    this.controller.dispatchEvent(new l.CastleServerMessageArrivedEvent(l.CastleServerMessageArrivedEvent.ABG_TIMERS, []));
  };
  Object.defineProperty(CastleAllianceBattleGroundData.prototype, "remainingSecondsTillRelink", {
    get: function () {
      return (this.timestampTillNextTowerRelink - u.CachedTimer.getCachedTimer()) * r.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattleGroundData.prototype, "remainingSecondsTillRevive", {
    get: function () {
      return (this.timestampTillNextTowerRevive - u.CachedTimer.getCachedTimer()) * r.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattleGroundData.prototype, "allianceTowerEffectXmlVOs", {
    get: function () {
      return this._allianceTowerEffectXmlVOs;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattleGroundData.prototype.parseTBI = function (e) {
    var t;
    if (c.ABGHelper.abgEvent) {
      var i = new Map();
      for (var n = 0; n < e.TE.length; n++) {
        var o = e.TE[n];
        i.set(o.TEID, o);
      }
      var a = this.getAvailableAllianceTowerEffects();
      for (n = 0; n < a.length; n++) {
        var s = a[n];
        var r = i.get(s.allianceTowerEffectID);
        if (r) {
          s.parseServerParams(r);
        } else {
          s.reset();
        }
      }
      t = new h.ABGAllianceTowerBuffInfoVO(a, e.TEA);
    } else {
      t = new h.ABGAllianceTowerBuffInfoVO([], false);
    }
    d.CastleBasicController.getInstance().dispatchEvent(new l.CastleServerMessageArrivedEvent(l.CastleServerMessageArrivedEvent.ABG_TOWERS_BUFF_INFO, [t]));
    return t;
  };
  CastleAllianceBattleGroundData.prototype.getAvailableAllianceTowerEffects = function () {
    var e = [];
    for (var t = 0; t < this._allianceTowerEffectXmlVOs.length; t++) {
      var i = this._allianceTowerEffectXmlVOs[t];
      if (c.ABGHelper.abgEvent.settingVO.availableAllianceTowerEffectIDs.indexOf(i.allianceTowerEffectID) > -1) {
        e.push(new C.ABGAllianceTowerEffectVO(i));
      }
    }
    return e;
  };
  CastleAllianceBattleGroundData.prototype.getAllianceTowerEffectActivationCost = function () {
    var e;
    for (var t = 0; t < this._allianceTowerEffectActivationVOs.length; t++) {
      var i = this._allianceTowerEffectActivationVOs[t];
      if (this.remainingSecondsTillRevive < i.remainingTime && (!e || e && i.remainingTime < e.remainingTime)) {
        e = i;
      }
    }
    return s.int(e ? e.costC2 : 0);
  };
  return CastleAllianceBattleGroundData;
}(p.CastleBasicData);
exports.CastleAllianceBattleGroundData = T;
o.classImplementsInterfaces(T, "IUpdatable", "ICastleBasicData");