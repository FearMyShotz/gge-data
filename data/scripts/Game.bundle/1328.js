Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./148.js");
var c = require("./28.js");
var u = require("./30.js");
var d = require("./4.js");
var p = require("./385.js");
var h = function (e) {
  function TreasureHuntMovementVO() {
    var t = this;
    t._treasureMapID = 0;
    t._tMapNodeID = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = TreasureHuntMovementVO.NAME;
    t.group = "Mapmovement";
    return t;
  }
  n.__extends(TreasureHuntMovementVO, e);
  TreasureHuntMovementVO.prototype.loadFromParamObject = function (e) {
    var t = e.M;
    this._objectId = t.MID;
    this._passedTime = t.PT;
    this._totalTime = t.TT;
    this._passedTimeMs = t.PT * c.ClientConstTime.SEC_2_MILLISEC;
    this._totalTimeMs = t.TT * c.ClientConstTime.SEC_2_MILLISEC;
    this._arivalTimeStamp = u.CachedTimer.getCachedTimer() + (this._totalTime - this._passedTime) * c.ClientConstTime.SEC_2_MILLISEC;
    this._direction = t.D;
    this._treasureMapID = r.int(e.MID);
    this._tMapNodeID = r.int(e.NID);
    this._treasureMapVO = d.CastleModel.treasureMapData.getTreasureMapByID(this._treasureMapID, false);
    this._tmapNode = this._treasureMapVO.getNodeById(this._tMapNodeID);
    this._sourceOwnerInfo = d.CastleModel.otherPlayerData.getOwnInfoVO();
    this._movementOwnerInfo = this._sourceOwnerInfo;
    if (a.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(this._treasureMapID) > -1) {
      this._targetOwnerInfo = g.CastleNPCOwnerFactory.generateEventOwner(this._tmapNode.eventID);
    } else {
      this._targetOwnerInfo = d.CastleModel.otherPlayerData.getOwnerInfoVO(l.ClientConstNPCs.NPC_ID_TREASURE_HUNT_DUNGEON);
    }
    this._sourceOwnerID = this._sourceOwnerInfo.playerID;
    this._targetOwnerID = this._targetOwnerInfo.playerID;
    this._movementOwnerID = this._sourceOwnerInfo.playerID;
    if (a.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(this._treasureMapID) > -1) {
      this._sourceArea = new C.EventCampMapobjectVO();
      this._sourceArea.parseAreaInfo([s.WorldConst.AREA_TYPE_TREASURE_CAMP, this._treasureMapID]);
    } else if (d.CastleModel.userData.castleList) {
      this._sourceArea = d.CastleModel.userData.castleList.getHomeCastle();
    }
    if (this._sourceArea) {
      this._sourceArea.ownerInfo = this._sourceOwnerInfo;
    }
    this._targetArea = new _.TreasureDungeonMapObjectVO();
    this._targetArea.parseAreaInfo([s.WorldConst.AREA_TYPE_TREASURE_DUNGEON, -1, -1, 1, 0, 0, this._treasureMapVO.kingdomID]);
    this._targetArea.ownerInfo = this._targetOwnerInfo;
    this._targetArea.type = this._tmapNode.nodeType;
    this._targetArea.mapID = this._tmapNode.mapID;
    this._targetArea.tMapNode = this._tmapNode;
    if (e.UM) {
      this.parseUnitMovement(e.UM);
    }
    this.parseArmy(e.FA);
  };
  Object.defineProperty(TreasureHuntMovementVO.prototype, "isVisibleOnWorldMap", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.ArmyAttackMapmovementVO.prototype, "isVisibleOnWorldMap").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureHuntMovementVO.prototype, "treasureMapID", {
    get: function () {
      return this._treasureMapID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureHuntMovementVO.prototype, "canBeRetreated", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.ArmyAttackMapmovementVO.prototype, "canBeRetreated").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureHuntMovementVO.prototype, "treasuremapNodeID", {
    get: function () {
      return this._tMapNodeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureHuntMovementVO.prototype, "tMapNodeID", {
    get: function () {
      return this._tMapNodeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureHuntMovementVO.prototype, "distance", {
    get: function () {
      return this._tmapNode.distance;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.ArmyAttackMapmovementVO.prototype, "distance").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureHuntMovementVO.prototype, "tmapNode", {
    get: function () {
      return this._tmapNode;
    },
    enumerable: true,
    configurable: true
  });
  TreasureHuntMovementVO.prototype.isTreasureMapMovement = function () {
    var e = false;
    var t = d.CastleModel.treasureMapData.getTreasureMapByID(this.treasureMapID);
    if (t) {
      e = t.isTreasureMap;
    }
    return e;
  };
  TreasureHuntMovementVO.__initialize_static_members = function () {
    TreasureHuntMovementVO.NAME = "Treasurehunt";
  };
  return TreasureHuntMovementVO;
}(p.ArmyAttackMapmovementVO);
exports.TreasureHuntMovementVO = h;
var g = require("./387.js");
var C = require("./732.js");
var _ = require("./603.js");
o.classImplementsInterfaces(h, "IMapMovementVO", "IArmyMapmovementVO");
h.__initialize_static_members();