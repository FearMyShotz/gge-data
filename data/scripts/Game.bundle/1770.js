Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./51.js");
var c = require("./9.js");
var u = require("./825.js");
var d = require("./1097.js");
var p = require("./1094.js");
var h = require("./1088.js");
var g = require("./460.js");
var C = function (e) {
  function SamuraiInvasionEventVO() {
    var t = this;
    t._daimyoInfoVO = new f.SamuraiInvasionDaimyoInfoVO();
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).scoreEventVO = new _.ALeagueTypeScoreEventVO();
    t.alliancescoreEventVO = new _.ALeagueTypeScoreEventVO();
    t.buyPackagesEventVO = new m.BuyPackagesEventVO();
    return t;
  }
  n.__extends(SamuraiInvasionEventVO, e);
  SamuraiInvasionEventVO.prototype.parseData = function (t, i, n) {
    e.prototype.parseData.call(this, t, i, n);
    this.scoreEventVO = new _.ALeagueTypeScoreEventVO();
    this.scoreEventVO.eventId = s.EventConst.EVENTTYPE_SAMURAI_INVASION;
    this.scoreEventVO.parseData(t, i, n.SP);
    this.scoreEventVO.difficultyIDChoosen = this._difficultyIDChoosen;
    this.scoreEventVO.difficultyScalingEnabled = this._difficultyScalingEnabled;
    this.alliancescoreEventVO = new _.ALeagueTypeScoreEventVO(s.EventConst.LEAGUETYPE_EVENT_SUBTYPE_SAMURAI_INVASION);
    this.alliancescoreEventVO.eventId = s.EventConst.EVENTTYPE_SAMURAI_INVASION;
    this.alliancescoreEventVO.parseData(t, i, n.A);
    this.alliancescoreEventVO.difficultyIDChoosen = this._difficultyIDChoosen;
    this.alliancescoreEventVO.difficultyScalingEnabled = this._difficultyScalingEnabled;
    this.alliancescoreEventVO.isAllianceRewardScore = true;
    this.buyPackagesEventVO.parseData(t, i, n);
    this._daimyoInfoVO.parseServerObject(n.DY);
  };
  SamuraiInvasionEventVO.prototype.parseParamObject = function (t) {
    e.prototype.parseParamObject.call(this, t);
    this.refreshWorldMap();
  };
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "eventPackagesVO", {
    get: function () {
      return this.buyPackagesEventVO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.AScoreEventVO.prototype, "eventPackagesVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "scoreBarVO", {
    get: function () {
      return this.scoreEventVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "allianceBarVO", {
    get: function () {
      return this.alliancescoreEventVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return SamuraiInvasionEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.AScoreEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_samuraiInvasion";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.AScoreEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return l.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_SAMURAI_HUNTER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.AScoreEventVO.prototype, "eventFullsizeCharacterName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SamuraiInvasionEventVO.prototype.openDialog = function (e = true) {
    if (this.needToOpenDifficultyDialog()) {
      if (!c.CastleDialogHandler.getInstance().isDialogRegistered(u.DifficultyScalingSelectDialog)) {
        c.CastleDialogHandler.getInstance().registerDefaultDialogs(u.DifficultyScalingSelectDialog, new d.DifficultyScalingSelectDialogProperties(this.eventId));
      }
    } else if (this.pointThresholds) {
      this.executeOpenDialog(e, p.CastleAllianceSamuraiInvasionDialog, new h.CastleAllianceSamuraiInvasionEventDialogProperties(this));
    }
  };
  SamuraiInvasionEventVO.prototype.baseCampLevel = function () {
    return r.int(this.scoreEventVO.countVictories(this.scoreEventVO.leagueID)[0]);
  };
  SamuraiInvasionEventVO.prototype.onDestroy = function () {
    this.refreshWorldMap();
  };
  SamuraiInvasionEventVO.prototype.setRankAndPoints = function (e, t, i) {
    this.scoreEventVO.setRankAndPoints([e[0]], [t[0]], null);
    this.alliancescoreEventVO.setRankAndPoints([e[1]], [t[1]], null);
  };
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "ownRank", {
    get: function () {
      return this.scoreEventVO.ownRank;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.AScoreEventVO.prototype, "ownRank").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "ownPoints", {
    get: function () {
      return this.scoreEventVO.ownPoints;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.AScoreEventVO.prototype, "ownPoints").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SamuraiInvasionEventVO.prototype.isOwnWmoVO = function (e) {
    return a.instanceOfClass(e, "SamuraiCampMapObjectVO");
  };
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "addToOverview", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.AScoreEventVO.prototype, "addToOverview").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SamuraiInvasionEventVO.prototype.hasRewards = function () {
    return true;
  };
  SamuraiInvasionEventVO.prototype.getRewards = function (e) {
    if (e) {
      return this.alliancescoreEventVO.rewardLists;
    } else {
      return this.scoreEventVO.rewardLists;
    }
  };
  SamuraiInvasionEventVO.prototype.getRank = function (e) {
    return r.int(e ? this.alliancescoreEventVO.ownRank : this.scoreEventVO.ownRank);
  };
  SamuraiInvasionEventVO.prototype.getScore = function (e) {
    return r.int(e ? this.alliancescoreEventVO.ownPoints : this.scoreEventVO.ownPoints);
  };
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "daimyoInfoVO", {
    get: function () {
      return this._daimyoInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  SamuraiInvasionEventVO.prototype.isPlayerQualifiedForAllianceRewards = function () {
    return this.scoreEventVO.isPlayerQualifiedForAllianceRewards;
  };
  SamuraiInvasionEventVO.prototype.allianceRewardThresholdPoints = function () {
    return this.scoreEventVO.allianceRewardThresholdPoints;
  };
  SamuraiInvasionEventVO.__initialize_static_members = function () {
    SamuraiInvasionEventVO.EVENT_BUILDING_WOD = 635;
  };
  SamuraiInvasionEventVO.EVENT_BUILDING_WOD = 635;
  return SamuraiInvasionEventVO;
}(g.AScoreEventVO);
exports.SamuraiInvasionEventVO = C;
var _ = require("./327.js");
var m = require("./184.js");
var f = require("./3734.js");
o.classImplementsInterfaces(C, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable", "IAllianceRewardsQualifiable");
C.__initialize_static_members();