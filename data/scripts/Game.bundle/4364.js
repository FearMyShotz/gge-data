Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./6.js");
var u = require("./51.js");
var d = require("./9.js");
var p = require("./17.js");
var h = require("./1320.js");
var g = require("./570.js");
var C = require("./823.js");
var _ = require("./1096.js");
var m = require("./820.js");
var f = require("./817.js");
var O = require("./4.js");
var E = require("./327.js");
var y = require("./460.js");
var b = require("./79.js");
var D = function (e) {
  function AllianceNomadInvasionEventVO() {
    var t = this;
    t._allianceRage = 0;
    t._playerRage = 0;
    t._playerTotalRage = 0;
    t._isAdvisorActive = false;
    t._isAdvisorActivationFree = false;
    t._advisorActivationCurrencyId = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).scoreEventVO = new E.ALeagueTypeScoreEventVO();
    t.allianceEventVO = new E.ALeagueTypeScoreEventVO();
    t.eventOverviewConfig.eventOverviewDetails = g.EventOverviewDetailEnum.DETAILS_POINT_EVENT_DEFAULT;
    t.eventOverviewConfig.hasAllianceMode = true;
    return t;
  }
  n.__extends(AllianceNomadInvasionEventVO, e);
  AllianceNomadInvasionEventVO.prototype.parseData = function (t, i, n) {
    e.prototype.parseData.call(this, t, i, n);
    if (n.SP) {
      this.scoreEventVO = new E.ALeagueTypeScoreEventVO();
      this.scoreEventVO.eventId = l.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE;
      this.scoreEventVO.parseData(t, i, n.SP);
      this.scoreEventVO.difficultyIDChoosen = this._difficultyIDChoosen;
      this.scoreEventVO.difficultyScalingEnabled = this._difficultyScalingEnabled;
    }
    if (n.A) {
      this.allianceEventVO = new E.ALeagueTypeScoreEventVO(l.EventConst.LEAGUETYPE_EVENT_SUBTYPE_ALIEN_INVASION_ALLIANCE);
      this.allianceEventVO.eventId = l.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE;
      this.allianceEventVO.parseData(t, i, n.A);
      this.allianceEventVO.difficultyIDChoosen = this._difficultyIDChoosen;
      this.allianceEventVO.difficultyScalingEnabled = this._difficultyScalingEnabled;
      this.allianceEventVO.isAllianceRewardScore = true;
    }
    if (n.ACE == 1) {
      this.khanEventVO = new E.ALeagueTypeScoreEventVO(l.EventConst.LEAGUETYPE_EVENT_SUBTYPE_ALLIANCE_CAMP_INVASION);
      this.khanEventVO.eventId = l.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE;
      this.khanEventVO.parseData(t, i, n.AC ? n.AC : {
        LID: 1,
        RSID: n.RSID
      });
      if (n.AC) {
        this._allianceRage = c.int(n.AC.AR);
        this._playerRage = c.int(n.AC.PCRP);
        this._playerTotalRage = c.int(n.AC.PTRP);
        this._allianceCamp = O.CastleModel.allianceInvasionCampData.getAllianceCamp(n.AC.ACID, this.isDifficultyScalingActivated ? n.AC.ACID : -1);
        this.khanEventVO.setRankAndPoints(null, [this._allianceCamp.level], null);
      }
    }
    this._isAdvisorActive = !!n[r.CommKeys.ADVISOR_ATTACK_IS_ACTIVATED] && n[r.CommKeys.ADVISOR_ATTACK_IS_ACTIVATED];
    this._isAdvisorActivationFree = !!n[r.CommKeys.ADVISOR_ATTACK_IS_FREE] && n[r.CommKeys.ADVISOR_ATTACK_IS_FREE];
    this._advisorActivationCurrencyId = n[r.CommKeys.ADVISOR_ATTACK_CURRENCY_ID] ? n[r.CommKeys.ADVISOR_ATTACK_CURRENCY_ID] : 0;
  };
  AllianceNomadInvasionEventVO.prototype.parseParamObject = function (t) {
    o.debug("------------------- NomadInvasionEventVO loading from paramObject");
    e.prototype.parseParamObject.call(this, t);
    if (p.CastleLayoutManager.getInstance().currentState == p.CastleLayoutManager.STATE_WORLDMAP) {
      o.debug("---------------------------- trying to re-render nomad/alien positions");
      p.CastleLayoutManager.getInstance().worldmapScreen.renderer.invalidateMap();
      var i = p.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.getAreaViewportRectangle();
      O.CastleModel.worldmapData.updateAreaRange(i.x, i.y, i.x + i.width, i.y + i.height);
    }
  };
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "scoreBarVO", {
    get: function () {
      return this.scoreEventVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "allianceBarVO", {
    get: function () {
      return this.allianceEventVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "khanCampBarVO", {
    get: function () {
      return this.khanEventVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return AllianceNomadInvasionEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_NomadInvasion";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return u.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_HERALD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.ASpecialEventVO.prototype, "eventFullsizeCharacterName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AllianceNomadInvasionEventVO.prototype.openDialog = function (e = true) {
    if (this.needToOpenDifficultyDialog()) {
      if (!d.CastleDialogHandler.getInstance().isDialogRegistered(C.DifficultyScalingSelectDialog)) {
        d.CastleDialogHandler.getInstance().registerDefaultDialogs(C.DifficultyScalingSelectDialog, new _.DifficultyScalingSelectDialogProperties(this.eventId));
      }
    } else {
      this.executeOpenDialog(e, m.CastleAllianceNomadInvasionDialog, new f.CastleAllianceNomadInvasionEventDialogProperties(m.CastleAllianceNomadInvasionDialog.TAB_POINTSEVENT));
    }
  };
  AllianceNomadInvasionEventVO.prototype.baseCampLevel = function () {
    return c.int(this.scoreEventVO.countVictories(this.scoreEventVO.leagueID)[0]);
  };
  AllianceNomadInvasionEventVO.prototype.setRankAndPoints = function (e, t, i) {
    this.scoreEventVO.setRankAndPoints([e[0]], [t[0]], null);
    this.allianceEventVO.setRankAndPoints([e[1]], [t[1]], null);
  };
  AllianceNomadInvasionEventVO.prototype.leagueLevels = function (e) {
    return this.allianceEventVO.leagueLevels(e);
  };
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "addToOverview", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.ASpecialEventVO.prototype, "addToOverview").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AllianceNomadInvasionEventVO.prototype.hasRewards = function () {
    return true;
  };
  AllianceNomadInvasionEventVO.prototype.getRewards = function (e) {
    if (e) {
      return this.allianceEventVO.rewardLists;
    } else {
      return this.scoreEventVO.rewardLists;
    }
  };
  AllianceNomadInvasionEventVO.prototype.getRank = function (e) {
    return c.int(e ? this.allianceEventVO.ownRank : this.scoreEventVO.ownRank);
  };
  AllianceNomadInvasionEventVO.prototype.getScore = function (e) {
    return c.int(e ? this.allianceEventVO.ownPoints : this.scoreEventVO.ownPoints);
  };
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "khanCampLevel", {
    get: function () {
      return this._allianceCamp.level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "allianceRage", {
    get: function () {
      return this._allianceRage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "playerRage", {
    get: function () {
      return this._playerRage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "neededPlayerRage", {
    get: function () {
      return this._allianceCamp.playerRageCap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "allianceCamp", {
    get: function () {
      return this._allianceCamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "canGetKhanRewards", {
    get: function () {
      return this._playerTotalRage >= s.AllianceInvasionConst.PLAYER_PARTICIPATION_RAGE_THRESHOLD;
    },
    enumerable: true,
    configurable: true
  });
  AllianceNomadInvasionEventVO.prototype.parse_RPR = function (e) {
    this._playerRage = c.int(e.PCRP);
    this._playerTotalRage = c.int(e.PTRP);
  };
  AllianceNomadInvasionEventVO.prototype.parse_AIC = function (e, t) {
    this._allianceRage = t;
    this.khanEventVO.setRankAndPoints(null, [e.level], null);
    this._allianceCamp = e;
  };
  AllianceNomadInvasionEventVO.prototype.isPlayerQualifiedForAllianceRewards = function () {
    return this.scoreEventVO.isPlayerQualifiedForAllianceRewards;
  };
  AllianceNomadInvasionEventVO.prototype.allianceRewardThresholdPoints = function () {
    return this.scoreEventVO.allianceRewardThresholdPoints;
  };
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "isAdvisorActive", {
    get: function () {
      return this._isAdvisorActive;
    },
    set: function (e) {
      this._isAdvisorActive = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "isAdvisorActivationFree", {
    get: function () {
      return this._isAdvisorActivationFree;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "advisorActivationCurrencyId", {
    get: function () {
      return this._advisorActivationCurrencyId;
    },
    enumerable: true,
    configurable: true
  });
  AllianceNomadInvasionEventVO.prototype.getAdvisorActivationInfo = function () {
    return new h.AdvisorActivationInfoVO(this._isAdvisorActive, this._isAdvisorActivationFree, this._advisorActivationCurrencyId);
  };
  AllianceNomadInvasionEventVO.EVENT_BUILDING_WOD = 74;
  return AllianceNomadInvasionEventVO;
}(y.AScoreEventVO);
exports.AllianceNomadInvasionEventVO = D;
a.classImplementsInterfaces(D, "IEventOverviewable", "IScoreUpdatable", "IAllianceCampUpdateable", "IAllianceRewardsQualifiable", "IAdvisorEventVO");