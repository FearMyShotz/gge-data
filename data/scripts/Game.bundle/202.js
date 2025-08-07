Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./6.js");
var p = require("./368.js");
var h = require("./28.js");
var g = require("./3214.js");
var C = require("./1437.js");
var _ = require("./26.js");
var m = require("./30.js");
var f = require("./4.js");
var O = require("./308.js");
var E = require("./79.js");
var y = require("./3215.js");
var b = require("./3216.js");
var D = function (e) {
  function FactionEventVO() {
    var t = this;
    t._gotSEI = false;
    t._unlocked = false;
    t._ownFactionID = 0;
    t._mapSeed = 0;
    t._mainCampID = 0;
    t._redFactionPoints = 0;
    t._blueFactionPoints = 0;
    t._factionProtectionEndtime = 0;
    t._factionProtectionStatus = 0;
    t._noobProtectionEndtime = 0;
    t._lastManStandingRedActive = false;
    t._lastManStandingBlueActive = false;
    t._capitalReachableBlue = false;
    t._capitalReachableRed = false;
    t._isActiveInEvent = false;
    t._factionBalanceRed = 0.5;
    t._bluePlayers = 0;
    t._redPlayers = 0;
    t._rewardSetId = 0;
    t._ownLeagueID = 0;
    t._attackableCamps = [];
    t._rwdIndx = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._gotSEI = false;
    t._lastManStandingBlueActive = false;
    t._lastManStandingRedActive = false;
    t._leaguetypes = new Map();
    t._towerInfos = new Map();
    t._capitalInfos = new Map();
    t._villageInfos = new Map();
    t._ownLeagueID = 1;
    return t;
  }
  n.__extends(FactionEventVO, e);
  FactionEventVO.prototype.parseData = function (t, i, n) {
    e.prototype.parseData.call(this, t, i, n);
    var o = i.leaguetypeevents;
    if (o != null) {
      for (var s = 0, r = o; s < r.length; s++) {
        var l = r[s];
        if (l !== undefined && parseInt(l.eventID || "") == c.EventConst.EVENTTYPE_FACTION) {
          var u = parseInt(l.leaguetypeID || "");
          var d = parseInt(l.subType || "");
          var p = parseInt(l.rewardSetID || "");
          if (!a.DictionaryUtil.containsKey(this._leaguetypes, u)) {
            this._leaguetypes.set(u, new Map());
          }
          this._leaguetypes.get(u).set(p, new S.ALeagueTypeScoreEventVO(d));
          this._leaguetypes.get(u).get(p).eventId = c.EventConst.EVENTTYPE_FACTION;
          this._leaguetypes.get(u).get(p).parseData(t, i, {
            LID: u,
            RIDX: this._rwdIndx,
            RSID: p
          });
        }
      }
    }
  };
  FactionEventVO.prototype.parseParamObject = function (t) {
    e.prototype.parseParamObject.call(this, t);
    this._gotSEI = true;
    this._rewardSetId = d.int(t.RSID);
    this._unlocked = Boolean(t.UL);
    this._mapSeed = d.int(t.MS);
    this._rwdIndx = d.int(t.RIDX);
    if (t.FN) {
      this.loadFactionDataFromParamObject(t);
    }
    if (t.LID) {
      this._ownLeagueID = d.int(t.LID);
    }
    if (t.AC) {
      this._attackableCamps = t.AC;
    }
  };
  FactionEventVO.prototype.loadFactionDataFromParamObject = function (e) {
    if (e) {
      this._ownFactionID = d.int(e.FN.FID);
      this._mainCampID = d.int(e.FN.MC);
      this._factionProtectionEndtime = e.FN.PMT * h.ClientConstTime.SEC_2_MILLISEC + m.CachedTimer.getCachedTimer();
      this._factionProtectionStatus = d.int(e.FN.PMS);
      if (e.FN.NS) {
        this._noobProtectionEndtime = e.FN.NS * h.ClientConstTime.SEC_2_MILLISEC + m.CachedTimer.getCachedTimer();
      }
      f.CastleModel.specialEventData.dispatchEvent(new _.CastleSpecialEventEvent(_.CastleSpecialEventEvent.FACTION_EVENT_FACTION_PROTECTION_UPDATED, this));
    }
  };
  FactionEventVO.prototype.parse_uap = function (e) {
    if (e) {
      this._factionProtectionStatus = d.int(d.int(e.PMS));
      this._factionProtectionEndtime = e.PMT * h.ClientConstTime.SEC_2_MILLISEC + m.CachedTimer.getCachedTimer();
      this._noobProtectionEndtime = e.NS * h.ClientConstTime.SEC_2_MILLISEC + m.CachedTimer.getCachedTimer();
      f.CastleModel.specialEventData.dispatchEvent(new _.CastleSpecialEventEvent(_.CastleSpecialEventEvent.FACTION_EVENT_FACTION_PROTECTION_UPDATED, this));
    }
  };
  FactionEventVO.prototype.parse_FKI = function (e) {
    this._lastManStandingBlueActive = e.BFLMS == 1;
    this._lastManStandingRedActive = e.RFLMS == 1;
    this._isActiveInEvent = e.PA == 1;
    this._capitalReachableBlue = e.BCR == 1;
    this._capitalReachableRed = e.RCR == 1;
    if (I.Iso.data) {
      I.Iso.controller.dataUpdater.updateEventBuildings();
    }
    f.CastleModel.specialEventData.dispatchEvent(new _.CastleSpecialEventEvent(_.CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE, this));
    if (v.CastleLayoutManager.getInstance().currentState == v.CastleLayoutManager.STATE_WORLDMAP && f.CastleModel.kingdomData.activeKingdomID == u.FactionConst.KINGDOM_ID) {
      var t = v.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.getAreaViewportRectangle();
      f.CastleModel.worldmapData.updateAreaRange(t.x, t.y, t.x + t.width, t.y + t.height);
    }
  };
  FactionEventVO.prototype.parse_FGB = function (e) {
    this._redPlayers = Math.max(e.RP, 0);
    this._bluePlayers = Math.max(e.BP, 0);
    if (this._redPlayers + this._bluePlayers > 0) {
      this._factionBalanceRed = this._redPlayers / (this._redPlayers + this._bluePlayers);
    }
    f.CastleModel.specialEventData.dispatchEvent(new C.CastleFactionBalanceEvent(C.CastleFactionBalanceEvent.FACTION_BALACE_UPDATED, this._bluePlayers, this._redPlayers));
  };
  FactionEventVO.prototype.parse_AFD = function (e) {
    if (e.AC) {
      this._attackableCamps = e.AC;
      f.CastleModel.specialEventData.dispatchEvent(new _.CastleSpecialEventEvent(_.CastleSpecialEventEvent.FACTION_ATTACKABLE_DATA_UPDATED, this));
    }
  };
  Object.defineProperty(FactionEventVO.prototype, "remainingNoobProtectionTimeInSeconds", {
    get: function () {
      return Math.max((this._noobProtectionEndtime - m.CachedTimer.getCachedTimer()) * h.ClientConstTime.MILLISEC_2_SEC, 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "remainingFactionProtectionTimeInSeconds", {
    get: function () {
      return Math.max((this._factionProtectionEndtime - m.CachedTimer.getCachedTimer()) * h.ClientConstTime.MILLISEC_2_SEC, 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "factionProtectionStatus", {
    get: function () {
      return this._factionProtectionStatus;
    },
    enumerable: true,
    configurable: true
  });
  FactionEventVO.prototype.parseFactionPointsFromParamObject = function (e) {
    this._redFactionPoints = d.int(e.RFP);
    this._blueFactionPoints = d.int(e.BFP);
    f.CastleModel.specialEventData.dispatchEvent(new _.CastleSpecialEventEvent(_.CastleSpecialEventEvent.FACTION_EVENT_FACTIONPOINTS_UPDATED, this));
  };
  Object.defineProperty(FactionEventVO.prototype, "isLocked", {
    get: function () {
      return !this._unlocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "requiresAdditionalEventLib", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.ASpecialEventVO.prototype, "requiresAdditionalEventLib").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return FactionEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_Faction";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "mapSeed", {
    get: function () {
      return this._mapSeed;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "ownFaction", {
    get: function () {
      return this._ownFactionID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO, "BLUE_CREST_VO", {
    get: function () {
      var e = new O.CrestVO();
      e.setBackground(p.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 20615);
      e.setSymbols(p.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, p.ClientConstCrest.NPC_SYMBOL_FACTION_BLUE, 15132390);
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO, "RED_CREST_VO", {
    get: function () {
      var e = new O.CrestVO();
      e.setBackground(p.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 8852227);
      e.setSymbols(p.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, p.ClientConstCrest.NPC_SYMBOL_FACTION_RED, 14852110);
      return e;
    },
    enumerable: true,
    configurable: true
  });
  FactionEventVO.prototype.parseAdditionalXmlFromRoot = function (e) {
    var t = e.specialcamps;
    this._distanceMap = new Map();
    var i = 0;
    if (t != null) {
      for (var n = 0, o = t; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          i = parseInt(a.specialcampID || "");
          this._distanceMap.set(i, parseInt(a.distance || ""));
          if ((a.type || "") == "DUNGEON") {
            if (!this._towerInfos.get(i)) {
              this._towerInfos.set(i, new b.FactionTowerInfoVO().parseXML(a));
            }
          } else if ((a.type || "") == "CAPITAL") {
            if (!this._capitalInfos.get(i)) {
              this._capitalInfos.set(i, new y.FactionCapitalInfoVO().parseXML(a));
            }
          }
        }
      }
    }
  };
  Object.defineProperty(FactionEventVO.prototype, "mainCampID", {
    get: function () {
      return this._mainCampID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "redFactionPoints", {
    get: function () {
      return this._redFactionPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "blueFactionPoints", {
    get: function () {
      return this._blueFactionPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "percentRedFactionPoints", {
    get: function () {
      return s.MathBase.clamp(this.redFactionPoints / (this.redFactionPoints + this.blueFactionPoints) * 100, 0, 100);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "percentBlueFactionPoints", {
    get: function () {
      return s.MathBase.clamp(100 - this.percentRedFactionPoints, 0, 100);
    },
    enumerable: true,
    configurable: true
  });
  FactionEventVO.prototype.update = function () {
    if (this.factionProtectionStatus != FactionEventVO.FACTION_PROTECTION_STATUS_OFF) {
      if (this.remainingFactionProtectionTimeInSeconds <= 0) {
        f.CastleModel.smartfoxClient.sendCommandVO(new g.C2SUpdateFactionProtectionVO());
      } else {
        f.CastleModel.specialEventData.dispatchEvent(new _.CastleSpecialEventEvent(_.CastleSpecialEventEvent.FACTION_EVENT_FACTION_PROTECTION_TIMEUPDATE, this));
      }
    }
  };
  Object.defineProperty(FactionEventVO.prototype, "isActive", {
    get: function () {
      return Object.getOwnPropertyDescriptor(E.ASpecialEventVO.prototype, "isActive").get.call(this) && this._gotSEI && (!this.isOneLMSActive || f.CastleModel.kingdomData.isKingdomUnlocked(u.FactionConst.KINGDOM_ID));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.ASpecialEventVO.prototype, "isActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "lastManStandingRedActive", {
    get: function () {
      return this._lastManStandingRedActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "lastManStandingBlueActive", {
    get: function () {
      return this._lastManStandingBlueActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "capitalReachableBlue", {
    get: function () {
      return this._capitalReachableBlue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "capitalReachableRed", {
    get: function () {
      return this._capitalReachableRed;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "otherFactionKingPlayerId", {
    get: function () {
      if (this.ownFaction == u.FactionConst.BLUE_FACTION) {
        return l.DungeonConst.RED_FACTION_KING;
      } else if (this.ownFaction == u.FactionConst.RED_FACTION) {
        return l.DungeonConst.BLUE_FACTION_KING;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "isOtherCapitalReachable", {
    get: function () {
      if (this.ownFaction == u.FactionConst.BLUE_FACTION) {
        return this.capitalReachableRed;
      } else {
        return this.ownFaction == u.FactionConst.RED_FACTION && this.capitalReachableBlue;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "isSpectator", {
    get: function () {
      return this._unlocked && f.CastleModel.userData.getOwnMapObjects(-1, u.FactionConst.KINGDOM_ID).length == 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "isActiveInEvent", {
    get: function () {
      return this._isActiveInEvent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "isOneLMSActive", {
    get: function () {
      return this._lastManStandingBlueActive || this._lastManStandingRedActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "isMyFactionInLMS", {
    get: function () {
      if (this.ownFaction == u.FactionConst.BLUE_FACTION) {
        return this.lastManStandingBlueActive;
      } else {
        return this.ownFaction == u.FactionConst.RED_FACTION && this.lastManStandingRedActive;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "isOtherFactionInLMS", {
    get: function () {
      if (this.ownFaction == u.FactionConst.BLUE_FACTION) {
        return this.lastManStandingRedActive;
      } else {
        return this.ownFaction == u.FactionConst.RED_FACTION && this.lastManStandingBlueActive;
      }
    },
    enumerable: true,
    configurable: true
  });
  FactionEventVO.prototype.onDestroy = function () {
    if (this._gotSEI && f.CastleModel.kingdomData.isKingdomUnlocked(u.FactionConst.KINGDOM_ID)) {
      f.CastleModel.specialEventData.parse_SDE({
        SD: [c.EventConst.EVENTTYPE_FACTION]
      });
    }
    for (var e = 0, t = Array.from(f.CastleModel.armyData.mapMovements.values()); e < t.length; e++) {
      var i = t[e];
      if (i !== undefined && i.isMyMovement && i.kingdomID == u.FactionConst.KINGDOM_ID && i.lordVO) {
        f.CastleModel.lordData.lockLord(i.lordVO.id);
      }
    }
    f.CastleModel.armyData.removeAllMovementsByKingdomID(u.FactionConst.KINGDOM_ID);
    if (f.CastleModel.kingdomData.activeKingdomID == u.FactionConst.KINGDOM_ID) {
      o.CommandController.instance.executeCommand(T.IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
    }
  };
  Object.defineProperty(FactionEventVO.prototype, "factionBalanceRed", {
    get: function () {
      return this._factionBalanceRed;
    },
    enumerable: true,
    configurable: true
  });
  FactionEventVO.prototype.openDialog = function (e = true) {
    o.CommandController.instance.executeCommand(T.IngameClientCommands.OPEN_FACTION_EVENT_MAIN_DIALOG);
  };
  Object.defineProperty(FactionEventVO.prototype, "distanceMap", {
    get: function () {
      return this._distanceMap;
    },
    enumerable: true,
    configurable: true
  });
  FactionEventVO.prototype.getOwnLeagueEventVO = function () {
    return this._leaguetypes.get(this._ownLeagueID).get(this._rewardSetId);
  };
  Object.defineProperty(FactionEventVO.prototype, "leaguetypes", {
    get: function () {
      return this._leaguetypes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "ownLeagueID", {
    get: function () {
      return this._ownLeagueID;
    },
    enumerable: true,
    configurable: true
  });
  FactionEventVO.prototype.setRankAndPoints = function (e, t, i) {
    this.getOwnLeagueEventVO().setRankAndPoints([e[0]], [t[0]], null);
  };
  Object.defineProperty(FactionEventVO.prototype, "ownRank", {
    get: function () {
      return this.getOwnLeagueEventVO().ownRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "ownPoints", {
    get: function () {
      return this.getOwnLeagueEventVO().ownPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "towerInfos", {
    get: function () {
      return this._towerInfos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "capitalInfos", {
    get: function () {
      return this._capitalInfos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "villageInfos", {
    get: function () {
      return this._villageInfos;
    },
    enumerable: true,
    configurable: true
  });
  FactionEventVO.prototype.getTowerByID = function (e) {
    return this.towerInfos.get(e);
  };
  FactionEventVO.prototype.getTowersByLane = function (e) {
    var t = [];
    if (this.towerInfos != null) {
      for (var i = 0, n = Array.from(this.towerInfos.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.laneID == e) {
          t.push(o);
        }
      }
    }
    t.sort(this.bindFunction(this.sortByTowerID));
    return t;
  };
  FactionEventVO.prototype.sortByTowerID = function (e, t) {
    return e.specialCampID - t.specialCampID;
  };
  FactionEventVO.prototype.getVillageByPosition = function (e) {
    return this.villageInfos.get(e.toString());
  };
  FactionEventVO.prototype.getVillagesByTower = function (e) {
    var t = [];
    for (var i = 0, n = this.getTowerByID(e).villagePositions; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined) {
        t.push(this.getVillageByPosition(o));
      }
    }
    return t;
  };
  FactionEventVO.prototype.getTowerLanesByCapitalID = function (e) {
    var t = [];
    for (var i = 0, n = this.getCapitalByID(e).towerLanes; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined) {
        t.push(this.getTowersByLane(o));
      }
    }
    return t;
  };
  FactionEventVO.prototype.getCapitalByLane = function (e) {
    if (this.capitalInfos != null) {
      for (var t = 0, i = Array.from(this.capitalInfos.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.belongsToLane(e)) {
          return n;
        }
      }
    }
    return null;
  };
  FactionEventVO.prototype.getCapitalByID = function (e) {
    return this._capitalInfos.get(e);
  };
  Object.defineProperty(FactionEventVO.prototype, "attackableCamps", {
    get: function () {
      return this._attackableCamps;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "isInPreOrActivePeaceMode", {
    get: function () {
      return this.factionProtectionStatus == FactionEventVO.FACTION_PROTECTION_STATUS_PRETIME || this.factionProtectionStatus == FactionEventVO.FACTION_PROTECTION_STATUS_ACTIVE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "rewardSetId", {
    get: function () {
      return this._rewardSetId;
    },
    enumerable: true,
    configurable: true
  });
  FactionEventVO.EVENT_BUILDING_WOD = 267;
  FactionEventVO.FACTION_PROTECTION_STATUS_OFF = -1;
  FactionEventVO.FACTION_PROTECTION_STATUS_PRETIME = 0;
  FactionEventVO.FACTION_PROTECTION_STATUS_ACTIVE = 1;
  FactionEventVO.FACTION_PROTECTION_STATUS_COOLDOWN = 2;
  return FactionEventVO;
}(E.ASpecialEventVO);
exports.FactionEventVO = D;
var I = require("./33.js");
var T = require("./29.js");
var v = require("./17.js");
var S = require("./327.js");
r.classImplementsInterfaces(D, "IEventOverviewable", "IScoreUpdatable");