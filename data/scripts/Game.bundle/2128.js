Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./18.js");
var l = require("./148.js");
var c = require("./28.js");
var u = require("./103.js");
var d = require("./30.js");
var p = require("./4.js");
var h = require("./64.js");
var g = require("./574.js");
var C = function (e) {
  function DungeonIsleMapobjectVO() {
    var t = this;
    t._isleID = -1;
    t._remainingVictories = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = "DungeonIsle";
    t._areaType = a.WorldConst.AREA_TYPE_ISLE_DUNGEON;
    t._occupierID = l.ClientConstNPCs.NPC_ID_EILAND_DUNGEON;
    t._isVisibleOnMap = false;
    t._objectId = -1;
    t._keepLevel = t._wallLevel = t._gateLevel = t._towerLevel = t._moatLevel = 0;
    t._equipmentUniqueIdSkin = 0;
    return t;
  }
  n.__extends(DungeonIsleMapobjectVO, e);
  DungeonIsleMapobjectVO.prototype.parseAreaInfo = function (e) {
    this._absAreaPosX = e[1];
    this._absAreaPosY = e[2];
    this._kingdomID = e[3];
    this._ownerInfo = p.CastleModel.otherPlayerData.getOwnerInfoVO(this._occupierID);
    this._secondsSinceEspionage = e[4];
    this._spyInfoReceivingTime = d.CachedTimer.getCachedTimer() * c.ClientConstTime.MILLISEC_2_SEC;
    this._isleID = s.int(e[5]);
    var t = p.CastleModel.eilandData.getIsleBlueprint(this._isleID);
    this._dungeonLevel = t.dungeonLevel;
    var i = s.int(e[6]);
    this._attackCooldownEndTimestamp = d.CachedTimer.getCachedTimer() + i * c.ClientConstTime.SEC_2_MILLISEC;
    this._victoryCount = e[7];
    this._remainingVictories = s.int(t.maxVictories - this._victoryCount);
    this._isVisibleOnMap = e[8] <= 0;
    this.dispatchEvent(u.EventInstanceMapper.getEvent(h.VisualVOEvent, h.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  Object.defineProperty(DungeonIsleMapobjectVO.prototype, "dungeonLevel", {
    get: function () {
      return this._dungeonLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.DungeonMapobjectVO.prototype, "dungeonLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonIsleMapobjectVO.prototype, "remainingVictories", {
    get: function () {
      return this._remainingVictories;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonIsleMapobjectVO.prototype, "baseGateBonus", {
    get: function () {
      return p.CastleModel.eilandData.getIsleBlueprint(this._isleID).baseGateBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.DungeonMapobjectVO.prototype, "baseGateBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonIsleMapobjectVO.prototype, "baseMoatBonus", {
    get: function () {
      return p.CastleModel.eilandData.getIsleBlueprint(this._isleID).baseMoatBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.DungeonMapobjectVO.prototype, "baseMoatBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonIsleMapobjectVO.prototype, "baseWallBonus", {
    get: function () {
      return p.CastleModel.eilandData.getIsleBlueprint(this._isleID).baseWallBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.DungeonMapobjectVO.prototype, "baseWallBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonIsleMapobjectVO.prototype, "cooldownCanBeSkipped", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.DungeonMapobjectVO.prototype, "cooldownCanBeSkipped").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonIsleMapobjectVO.prototype, "attackType", {
    get: function () {
      return r.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.DungeonMapobjectVO.prototype, "attackType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return DungeonIsleMapobjectVO;
}(g.DungeonMapobjectVO);
exports.DungeonIsleMapobjectVO = C;
o.classImplementsInterfaces(C, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");