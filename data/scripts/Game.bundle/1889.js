Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./69.js");
var l = require("./4.js");
var c = require("./460.js");
var u = function (e) {
  function AAlienInvasionEventVO(t = 0) {
    var i = this;
    i._targetZoneID = 0;
    i._sourceZoneID = 0;
    i.rerollCurrencyKeys = [];
    i.useReroll = false;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(AAlienInvasionEventVO, e);
  AAlienInvasionEventVO.prototype.parseData = function (t, i, n) {
    e.prototype.parseData.call(this, t, i, n);
    if (n.SP) {
      this.alienInvasionEventVO_player = new p.ALeagueTypeScoreEventVO();
      this.alienInvasionEventVO_player.eventId = this.eventId;
      this.alienInvasionEventVO_player.parseData(t, i, n.SP);
      this.alienInvasionEventVO_player.difficultyIDChoosen = this.difficultyIDChoosen;
      this.alienInvasionEventVO_player.difficultyScalingEnabled = this._difficultyScalingEnabled;
    }
    if (n.A) {
      this.alienInvasionEventVO_alliance = new p.ALeagueTypeScoreEventVO(a.EventConst.LEAGUETYPE_EVENT_SUBTYPE_ALIEN_INVASION_ALLIANCE);
      this.alienInvasionEventVO_alliance.eventId = this.eventId;
      this.alienInvasionEventVO_alliance.parseData(t, i, n.A);
      this.alienInvasionEventVO_alliance.difficultyIDChoosen = this.difficultyIDChoosen;
      this.alienInvasionEventVO_alliance.difficultyScalingEnabled = this._difficultyScalingEnabled;
      this.alienInvasionEventVO_alliance.isAllianceRewardScore = true;
    }
    this.useReroll = n.CRE == 1;
    if (n.RCKS) {
      this.rerollCurrencyKeys = n.RCKS;
    }
    l.CastleModel.alienRerollData.parse_RCE(n);
  };
  Object.defineProperty(AAlienInvasionEventVO.prototype, "isDualEvent", {
    get: function () {
      return !!this.alienInvasionEventVO_alliance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionEventVO.prototype, "singleEventVO", {
    get: function () {
      return this.alienInvasionEventVO_player;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionEventVO.prototype, "allianceEventVO", {
    get: function () {
      return this.alienInvasionEventVO_alliance;
    },
    enumerable: true,
    configurable: true
  });
  AAlienInvasionEventVO.prototype.openDialog = function (e = true) {
    if (this.needToOpenDifficultyDialog()) {
      if (!h.CastleDialogHandler.getInstance().isDialogRegistered(g.DifficultyScalingSelectDialog)) {
        h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.DifficultyScalingSelectDialog, new C.DifficultyScalingSelectDialogProperties(this.eventId));
      }
    } else if (this.pointThresholds) {
      this.executeOpenDialog(e, d.CastleAllianceAlienInvasionEventDialog, new this.eventDialogProperiesClass(this.eventId));
    }
  };
  AAlienInvasionEventVO.prototype.parseParamObject = function (t) {
    e.prototype.parseParamObject.call(this, t);
    this._targetZoneID = s.int(t.TZID);
    this._sourceZoneID = s.int(t.SZID);
    this.refreshWorldMap();
  };
  Object.defineProperty(AAlienInvasionEventVO.prototype, "targetZoneID", {
    get: function () {
      return this._targetZoneID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionEventVO.prototype, "sourceZoneID", {
    get: function () {
      return this._sourceZoneID;
    },
    enumerable: true,
    configurable: true
  });
  AAlienInvasionEventVO.prototype.isPlayerQualifiedForAllianceRewards = function () {
    return this.alienInvasionEventVO_player.isPlayerQualifiedForAllianceRewards;
  };
  AAlienInvasionEventVO.prototype.allianceRewardThresholdPoints = function () {
    return this.alienInvasionEventVO_player.allianceRewardThresholdPoints;
  };
  AAlienInvasionEventVO.prototype.onDestroy = function () {
    this.refreshWorldMap();
  };
  AAlienInvasionEventVO.prototype.setRankAndPoints = function (e, t, i) {
    this.alienInvasionEventVO_player.setRankAndPoints([e[0]], [t[0]], null);
    this.alienInvasionEventVO_alliance.setRankAndPoints([e[1]], [t[1]], null);
  };
  Object.defineProperty(AAlienInvasionEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      throw new r.AbstractMethodError();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.AScoreEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      throw new r.AbstractMethodError();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.AScoreEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AAlienInvasionEventVO.prototype.isOwnWmoVO = function (e) {
    throw new r.AbstractMethodError();
  };
  Object.defineProperty(AAlienInvasionEventVO.prototype, "eventDialogProperiesClass", {
    get: function () {
      throw new r.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  return AAlienInvasionEventVO;
}(c.AScoreEventVO);
exports.AAlienInvasionEventVO = u;
var d = require("./4356.js");
var p = require("./327.js");
var h = require("./9.js");
var g = require("./823.js");
var C = require("./1096.js");
o.classImplementsInterfaces(u, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable", "IAllianceRewardsQualifiable");