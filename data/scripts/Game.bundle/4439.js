Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./6.js");
var u = require("./460.js");
var d = function (e) {
  function FactionInvasionEventVO() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).factionInvasionEventVOPlayerBlue = new g.ALeagueTypeScoreEventVO();
    t.factionInvasionEventVOPlayerRed = new g.ALeagueTypeScoreEventVO();
    t.factionInvasionEventVOAlliance = new g.ALeagueTypeScoreEventVO();
    t.eventOverviewConfig.eventOverviewDetails = h.EventOverviewDetailEnum.DETAILS_FACTION_INVASION;
    t.eventOverviewConfig.hasAllianceMode = true;
    return t;
  }
  n.__extends(FactionInvasionEventVO, e);
  FactionInvasionEventVO.prototype.parseData = function (t, i, n) {
    e.prototype.parseData.call(this, t, i, n);
    this.factionInvasionEventVOPlayerBlue = new g.ALeagueTypeScoreEventVO(l.EventConst.LEAGUETYPE_EVENT_SUBTYPE_FACTION_INVASION_BLUE);
    this.factionInvasionEventVOPlayerBlue.eventId = l.EventConst.EVENTTYPE_FACTION_INVASION;
    this.factionInvasionEventVOPlayerBlue.parseData(t, i, n.FB);
    this.factionInvasionEventVOPlayerRed = new g.ALeagueTypeScoreEventVO(l.EventConst.LEAGUETYPE_EVENT_SUBTYPE_FACTION_INVASION_RED);
    this.factionInvasionEventVOPlayerRed.eventId = l.EventConst.EVENTTYPE_FACTION_INVASION;
    this.factionInvasionEventVOPlayerRed.parseData(t, i, n.FR);
    this.factionInvasionEventVOAlliance = new g.ALeagueTypeScoreEventVO(l.EventConst.LEAGUETYPE_EVENT_SUBTYPE_FACTION_INVASION_ALLIANCE);
    this.factionInvasionEventVOAlliance.eventId = l.EventConst.EVENTTYPE_FACTION_INVASION;
    this.factionInvasionEventVOAlliance.parseData(t, i, n.A);
  };
  FactionInvasionEventVO.prototype.singleRewards = function (e) {
    if (e) {
      if (this.factionInvasionEventVOPlayerBlue) {
        return this.factionInvasionEventVOPlayerBlue.rewardLists;
      }
    } else if (this.factionInvasionEventVOPlayerRed) {
      return this.factionInvasionEventVOPlayerRed.rewardLists;
    }
    return null;
  };
  Object.defineProperty(FactionInvasionEventVO.prototype, "allianceRewards", {
    get: function () {
      if (this.factionInvasionEventVOAlliance) {
        return this.factionInvasionEventVOAlliance.rewardLists;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  FactionInvasionEventVO.prototype.singleEventVO = function (e) {
    if (e) {
      return this.factionInvasionEventVOPlayerBlue;
    } else {
      return this.factionInvasionEventVOPlayerRed;
    }
  };
  Object.defineProperty(FactionInvasionEventVO.prototype, "allianceEventVO", {
    get: function () {
      return this.factionInvasionEventVOAlliance;
    },
    enumerable: true,
    configurable: true
  });
  FactionInvasionEventVO.prototype.openDialog = function (e = true) {
    if (this.pointThresholds) {
      o.CommandController.instance.executeCommand(p.IngameClientCommands.OPEN_FACTION_INVASION_EVENT_MAIN_DIALOG);
    }
  };
  FactionInvasionEventVO.prototype.parseParamObject = function (t) {
    e.prototype.parseParamObject.call(this, t);
    this.refreshWorldMap();
  };
  FactionInvasionEventVO.prototype.onDestroy = function () {
    this.refreshWorldMap();
  };
  FactionInvasionEventVO.prototype.setRankAndPoints = function (e, t, i) {
    this.factionInvasionEventVOPlayerBlue.setRankAndPoints([e[0]], [t[0]], i ? [i[0]] : null);
    this.factionInvasionEventVOPlayerRed.setRankAndPoints([e[1]], [t[1]], i ? [i[1]] : null);
    this.factionInvasionEventVOAlliance.setRankAndPoints([e[2]], [t[2]], i ? [i[2]] : null);
  };
  FactionInvasionEventVO.prototype.baseCampLevel = function (e) {
    if (e == r.DungeonConst.BLUE_FACTION_KING) {
      return c.int(this.factionInvasionEventVOPlayerBlue.countVictories(this.factionInvasionEventVOPlayerBlue.leagueID)[0]);
    } else {
      return c.int(this.factionInvasionEventVOPlayerRed.countVictories(this.factionInvasionEventVOPlayerRed.leagueID)[0]);
    }
  };
  Object.defineProperty(FactionInvasionEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_berimondInvasion";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AScoreEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return FactionInvasionEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AScoreEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventVO.prototype, "maxPointsBlue", {
    get: function () {
      return this.factionInvasionEventVOPlayerBlue.maxPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventVO.prototype, "maxPointsRed", {
    get: function () {
      return this.factionInvasionEventVOPlayerRed.maxPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventVO.prototype, "rewardsReceivedBlue", {
    get: function () {
      return this.factionInvasionEventVOPlayerBlue.rewardsReceived;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventVO.prototype, "rewardsReceivedRed", {
    get: function () {
      return this.factionInvasionEventVOPlayerRed.rewardsReceived;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventVO.prototype, "rewardsReceivedAlliance", {
    get: function () {
      return this.factionInvasionEventVOAlliance.rewardsReceived;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventVO.prototype, "bluePoints", {
    get: function () {
      return this.factionInvasionEventVOPlayerBlue.ownPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventVO.prototype, "redPoints", {
    get: function () {
      return this.factionInvasionEventVOPlayerRed.ownPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventVO.prototype, "currentReputationFactionScale", {
    get: function () {
      if (this.factionInvasionEventVOPlayerRed.ownPoints + this.factionInvasionEventVOPlayerBlue.ownPoints == 0) {
        return 0.5;
      } else {
        return this.factionInvasionEventVOPlayerRed.ownPoints / (this.factionInvasionEventVOPlayerRed.ownPoints + this.factionInvasionEventVOPlayerBlue.ownPoints);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventVO.prototype, "redEventVO", {
    get: function () {
      return this.factionInvasionEventVOPlayerRed;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventVO.prototype, "blueEventVO", {
    get: function () {
      return this.factionInvasionEventVOPlayerBlue;
    },
    enumerable: true,
    configurable: true
  });
  FactionInvasionEventVO.prototype.isOwnWmoVO = function (e) {
    return s.instanceOfClass(e, "FactionInvasionCampMapObjectVO");
  };
  Object.defineProperty(FactionInvasionEventVO.prototype, "addToOverview", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AScoreEventVO.prototype, "addToOverview").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FactionInvasionEventVO.prototype.hasRewards = function () {
    return true;
  };
  FactionInvasionEventVO.prototype.getRewards = function (e) {
    if (e) {
      return this.factionInvasionEventVOAlliance.rewardLists;
    } else {
      return this.factionInvasionEventVOPlayerBlue.rewardLists;
    }
  };
  FactionInvasionEventVO.prototype.getRank = function (e) {
    return c.int(e ? this.factionInvasionEventVOAlliance.ownRank : this.factionInvasionEventVOPlayerBlue.ownRank);
  };
  FactionInvasionEventVO.prototype.getScore = function (e) {
    return c.int(e ? this.factionInvasionEventVOAlliance.ownPoints : this.factionInvasionEventVOPlayerBlue.ownPoints);
  };
  FactionInvasionEventVO.__initialize_static_members = function () {
    FactionInvasionEventVO.EVENT_BUILDING_WOD = 760;
  };
  return FactionInvasionEventVO;
}(u.AScoreEventVO);
exports.FactionInvasionEventVO = d;
var p = require("./29.js");
var h = require("./570.js");
var g = require("./327.js");
a.classImplementsInterfaces(d, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable");
d.__initialize_static_members();