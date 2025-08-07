Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./6.js");
var u = require("./4.js");
var d = require("./35.js");
var p = require("./552.js");
var h = require("./828.js");
var g = function (e) {
  function CastleTreasureHuntFightscreenVO() {
    var t = this;
    t._eventID = -1;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleTreasureHuntFightscreenVO, e);
  CastleTreasureHuntFightscreenVO.prototype.fillFromParamObject = function (e) {
    this._treasureMapVO = u.CastleModel.treasureMapData.getTreasureMapByID(e.MID);
    this._tmapNode = this._treasureMapVO.getNodeById(e.NID);
    this.initSeasonID();
    this._sourceOwner = u.CastleModel.otherPlayerData.getOwnInfoVO();
    this._targetOwner = u.CastleModel.otherPlayerData.getOwnerInfoVO(this._tmapNode.ownerID);
    if (this._treasureMapVO.hasCamp) {
      this._sourceArea = new C.EventCampMapobjectVO();
    } else {
      this._sourceArea = u.CastleModel.userData.castleList.getMainCastleByKingdomID(r.WorldClassic.KINGDOM_ID);
    }
    var t = new _.TreasureDungeonMapObjectVO();
    t.parseAreaInfo([l.WorldConst.AREA_TYPE_TREASURE_DUNGEON, -1, -1, 0, a.DungeonConst.getVictories(this._tmapNode.dungeonlevel, 0), 0, 0]);
    t.tmapID = this._treasureMapVO.mapID;
    t.tMapNode = this._tmapNode;
    t.baseGateBonus = this._tmapNode.gateBonus;
    t.baseWallBonus = this._tmapNode.wallBonus;
    t.ownerInfo = this._targetOwner;
    t.mapID = this._tmapNode.mapID;
    this._targetArea = t;
    this._spyInfo = new f.CastleSpyArmyInfoVO();
    this._spyInfo.parseArmyInfo(e.S, e.AS, e.B, e.LS);
    this._unitInventory = new E.UnitInventoryDictionary();
    this._strongholdUnitInventory = new O.StrongholdUnitInventory();
    this._unitInventory.fillFromWodAmountArray(e.gui.I);
    this._strongholdUnitInventory.fillFromWodAmountArray(e.gui.SHI);
    this._army = new y.CastleAttackArmyVO();
    this._army.init(this._tmapNode.dungeonlevel, false, false, this._targetArea);
    this._yardWaveItemContainer = new p.CastleFightItemContainer([0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], 0, 10000);
    this._supportItemContainer = new p.CastleFightItemContainer(a.CombatConst.ITEMS_ASUPPORT_TOOLS, a.CombatConst.LEVELS_SUPPORT_TOOLS_HOME_AWORKSHOP, this.homeWorkshopLevel);
  };
  CastleTreasureHuntFightscreenVO.prototype.addAdditionalWave = function () {
    this._army.addAdditionalWave(this._tmapNode.dungeonlevel, false, this._targetArea);
  };
  CastleTreasureHuntFightscreenVO.prototype.deductLastWave = function () {
    this.unitInventory.addAll(this._army.getUnitVectorFromCompleteWave(this.army.getWaveCount() - 1));
    this._army.deductLastWave();
  };
  CastleTreasureHuntFightscreenVO.prototype.initSeasonID = function () {
    if (u.CastleModel.specialEventData.activeSeasonVO && u.CastleModel.specialEventData.activeSeasonVO.treasureMapVO && u.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID == this.treasureMapVO.mapID) {
      this._eventID = c.int(u.CastleModel.specialEventData.activeSeasonVO.eventId);
    }
  };
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "distance", {
    get: function () {
      return this._tmapNode.distance;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastleAttackInfoVO.prototype, "distance").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureHuntFightscreenVO.prototype.getTravelTime = function (e, t) {
    var i = t ? m.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(t, d.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS, this.targetArea.areaType).strength : 0;
    var n = 1 + u.CastleModel.globalEffectData.getBonusByEffectType(d.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS, this.targetArea.areaType) / 100;
    return c.int(s.TravelConst.getTravelTime(this.getLowestTravelSpeed(false, t), this.distance, n, i, false));
  };
  CastleTreasureHuntFightscreenVO.prototype.getBoostedTravelTime = function (e, t, i) {
    return 0;
  };
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "waitTime", {
    get: function () {
      return 0;
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "isConquerAttack", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastleAttackInfoVO.prototype, "isConquerAttack").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "treasureMapVO", {
    get: function () {
      return this._treasureMapVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "tmapNode", {
    get: function () {
      return this._tmapNode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "detailViewObject", {
    get: function () {
      this._tmapNode.eventID = this._eventID;
      return this._tmapNode;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastleAttackInfoVO.prototype, "detailViewObject").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "targetOwnerLevel", {
    get: function () {
      return this._tmapNode.dungeonlevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastleAttackInfoVO.prototype, "targetOwnerLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "baseWallBonus", {
    get: function () {
      return this._tmapNode.wallBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastleAttackInfoVO.prototype, "baseWallBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "baseGateBonus", {
    get: function () {
      return this._tmapNode.gateBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastleAttackInfoVO.prototype, "baseGateBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "baseMoatBonus", {
    get: function () {
      return 0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastleAttackInfoVO.prototype, "baseMoatBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "morality", {
    get: function () {
      return this._treasureMapVO.morality;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastleAttackInfoVO.prototype, "morality").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleTreasureHuntFightscreenVO;
}(h.CastleAttackInfoVO);
exports.CastleTreasureHuntFightscreenVO = g;
var C = require("./732.js");
var _ = require("./603.js");
var m = require("./111.js");
var f = require("./829.js");
var O = require("./553.js");
var E = require("./156.js");
var y = require("./1776.js");
o.classImplementsInterfaces(g, "IFightScreenVO");