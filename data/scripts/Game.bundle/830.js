Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./6.js");
var p = require("./18.js");
var h = require("./44.js");
var g = require("./4.js");
var C = require("./147.js");
var _ = require("./110.js");
var m = require("./552.js");
var f = require("./214.js");
var O = require("./831.js");
var E = require("./553.js");
var y = require("./156.js");
var b = require("./1778.js");
var D = require("./829.js");
var I = function (e) {
  function CastleAttackInfoVO() {
    var t = this;
    t._morality = 0;
    t._autoSkipCooldownType = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleAttackInfoVO, e);
  CastleAttackInfoVO.prototype.fillFromParamObject = function (t) {
    this._unitInventory = new y.UnitInventoryDictionary();
    this._strongholdUnitInventory = new E.StrongholdUnitInventory();
    this._army = new b.CastleAttackArmyVO();
    if (t.MB) {
      this._morality = t.MB;
    }
    switch (this.targetActionType) {
      case p.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK:
        var i = t.gaa.AI;
        this._targetArea = C.WorldmapObjectFactory.parseWorldMapArea(i);
        this._targetOwner = this._targetArea.ownerInfo;
        this._unitInventory.fillFromWodAmountArray(t.gui.I);
        this._strongholdUnitInventory.fillFromWodAmountArray(t.gui.SHI);
        break;
      case p.ClientConstCastle.ACTION_TYPE_LANDMARK_ATTACK:
      case p.ClientConstCastle.ACTION_TYPE_VILLAGE_ATTACK:
      case p.ClientConstCastle.ACTION_TYPE_ISLAND_ATTACK:
        this._targetArea = C.WorldmapObjectFactory.parseWorldMapArea(t.gaa.AI);
        this._targetOwner = this._targetArea.ownerInfo;
        this._unitInventory.fillFromWodAmountArray(t.gui.I);
        this._strongholdUnitInventory.fillFromWodAmountArray(t.gui.SHI);
        break;
      case p.ClientConstCastle.ACTION_TYPE_BOSSDUNGEONATTACK:
        var n = t.gaa.AI;
        var o = C.WorldmapObjectFactory.generateBossDungeonByXY(n[0], n[1], g.CastleModel.kingdomData.activeKingdomID);
        o.parseAreaInfo(n);
        this._targetArea = o;
        this._targetOwner = o.ownerInfo;
        this._unitInventory.fillFromWodAmountArray(t.gui.I);
        this._strongholdUnitInventory.fillFromWodAmountArray(t.gui.SHI);
        break;
      case p.ClientConstCastle.ACTION_TYPE_ATTACK:
      case p.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK:
        this._targetArea = C.WorldmapObjectFactory.parseWorldMapArea(t.gaa.AI);
        this._targetOwner = this._targetArea.controllerWorldMapOwnerInfoVO;
        this._unitInventory.fillFromWodAmountArray(t.gui.I);
        this._strongholdUnitInventory.fillFromWodAmountArray(t.gui.SHI);
        break;
      default:
        this._unitInventory.fillFromWodAmountArray(t.gui.I);
        this._strongholdUnitInventory.fillFromWodAmountArray(t.gui.SHI);
    }
    if (this._targetArea) {
      this._army.init(this.targetOwnerLevel, this.targetActionType == p.ClientConstCastle.ACTION_TYPE_CONQUER || this.targetActionType == p.ClientConstCastle.ACTION_TYPE_CONQUERATTACK, this.targetArea.areaType == r.WorldConst.AREA_TYPE_FACTION_TOWER || this.targetArea.areaType == r.WorldConst.AREA_TYPE_FACTION_CAPITAL, this._targetArea);
    }
    this._sourceArea = g.CastleModel.userData.getOwnCastle(t.SCID, t.KID);
    this._sourceOwner = g.CastleModel.otherPlayerData.getOwnInfoVO();
    this._kingstowerBonus = t.KTB ? t.KTB : 0;
    if (g.CastleModel.userData.isInAlliance && g.CastleModel.allianceData.myAllianceVO) {
      this._monumentBonus = g.CastleModel.allianceData.myAllianceVO.landmarksList.getMonumentBonus();
    } else {
      this._monumentBonus = g.CastleModel.userData.monumentList.getLandmarkBonus();
    }
    var a = t.abe || t.B;
    this._spyInfo = new O.CastleSpyArmyInfoVO();
    this._spyInfo.parseArmyInfo(t.S, t.AS, a, t.LS);
    g.CastleModel.lordData.parse_GLI(t.gli);
    this._homeWorkshopLevel = t.HAWL;
    this._supportItemContainer = new m.CastleFightItemContainer(u.CombatConst.ITEMS_ASUPPORT_TOOLS, u.CombatConst.LEVELS_SUPPORT_TOOLS_HOME_AWORKSHOP, this.homeWorkshopLevel);
    this._yardWaveItemContainer = new m.CastleFightItemContainer([0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], 0, 10000);
    e.prototype.fillFromParamObject.call(this, t);
  };
  CastleAttackInfoVO.prototype.addAdditionalWave = function () {
    this._army.addAdditionalWave(this.targetOwnerLevel, this.targetActionType == p.ClientConstCastle.ACTION_TYPE_CONQUER || this.targetActionType == p.ClientConstCastle.ACTION_TYPE_CONQUERATTACK, this._targetArea);
  };
  CastleAttackInfoVO.prototype.deductLastWave = function () {
    this.unitInventory.addAll(this._army.getUnitVectorFromCompleteWave(this.army.getWaveCount() - 1));
    this._army.deductLastWave();
  };
  CastleAttackInfoVO.prototype.getLowestTravelSpeed = function (e = false, t = null) {
    var i = d.int(this._army.getLowestTravelSpeed(e, t));
    return i = d.int(Math.min(i, this._yardWaveItemContainer.getLowestTravelSpeed(e, t)));
  };
  CastleAttackInfoVO.prototype.getTravelTime = function (e, t) {
    return d.int(this.calculateTravelTime(e.controllerWorldMapOwnerInfoVO, 0, t));
  };
  CastleAttackInfoVO.prototype.calculateTravelTime = function (e, t, i, n = false, o = false) {
    if (this.getSumOfItems() == 0) {
      return 0;
    }
    var a = 1;
    var r = 0;
    if (g.CastleModel.userData.userLevel <= c.TutorialConst.TUTORIAL_END_LEVEL && e.playerID < 0) {
      a = s.TravelConst.TRAVEL_BOOST_TUTORIAL;
    }
    if (o) {
      r = g.CastleModel.boostData.returnSpeedBoosterVO.returnSpeedForCurrentLevel / 100;
    }
    var u = this.getActionTravelTimeBonusForAreaType(i, e);
    if (l.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(this._targetArea.mapID) < 0) {
      u += g.CastleModel.vipData.currentActiveVIPLevel.attackSpeedBonus;
    }
    var p = a + r;
    var C = this.isTempServerRankSwapAttack ? 0 : s.TravelConst.calculateLowLevelBoost(g.CastleModel.userData.userLevel, h.SpecialServerHelper.isOnSpecialServer);
    return d.int(s.TravelConst.getTravelTimeWithHorse(this.getLowestTravelSpeed(n, i), this.getCorrectedAttackDistance(), p + C, t, u, this.getCorrectedAttackDistance(), false));
  };
  CastleAttackInfoVO.prototype.getBoostedTravelTime = function (e, t, i) {
    return d.int(this.calculateTravelTime(e.controllerWorldMapOwnerInfoVO, t, i, false));
  };
  CastleAttackInfoVO.prototype.getCorrectedAttackDistance = function () {
    if (this.targetArea.areaType == r.WorldConst.AREA_TYPE_CAPITAL) {
      return Math.min(Math.max(this.distance, s.TravelConst.CAPITAL_CONQUER_MIN_ATTACK_DISTANCE), s.TravelConst.CAPITAL_CONQUER_MAX_ATTACK_DISTANCE);
    } else if (this.targetArea.areaType == r.WorldConst.AREA_TYPE_METROPOL) {
      return Math.min(Math.max(this.distance, s.TravelConst.METROPOL_CONQUER_MIN_ATTACK_DISTANCE), s.TravelConst.METROPOL_CONQUER_MAX_ATTACK_DISTANCE);
    } else {
      return this.distance;
    }
  };
  CastleAttackInfoVO.prototype.getTravelCost = function (e) {
    return Math.ceil(g.CastleModel.costsData.getFinalCostsC1(s.TravelConst.getAttackTravelCostC1(this.distance, this.getSumOfItems(), e ? _.CastleEffectsHelper.getTravelCostBonusForAreaType(e, this.targetArea.areaType, this.targetActionType) : 0, g.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(f.CastleLegendSkillEffectsEnum.TRAVEL_COST_REDUCTION), g.CastleModel.userData.attackCounter.attackCount, g.CastleModel.userData.attackCounter.attackCountThreshold, g.CastleModel.userData.attackCounter.attackCountGrowthRate)));
  };
  Object.defineProperty(CastleAttackInfoVO.prototype, "isAlienAttack", {
    get: function () {
      return o.instanceOfClass(this._targetArea, "AAlienInvasionMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  CastleAttackInfoVO.prototype.isAttackComplete = function () {
    return this._army.isAnyWaveComplete();
  };
  CastleAttackInfoVO.prototype.getSumOfItems = function () {
    return this._army.getSumOfItems() + (this._supportItemContainer ? this._supportItemContainer.sumOfItems : 0) + (this._yardWaveItemContainer ? this._yardWaveItemContainer.sumOfItems : 0);
  };
  CastleAttackInfoVO.prototype.getSumOfTools = function () {
    return this._army.getSumOfTools();
  };
  CastleAttackInfoVO.prototype.getSumOfUnits = function () {
    return this._army.getSumOfUnits();
  };
  CastleAttackInfoVO.prototype.getLevelGate = function () {
    return d.int(this._targetArea.gateLevel);
  };
  CastleAttackInfoVO.prototype.getLevelWall = function () {
    return d.int(this._targetArea.wallLevel);
  };
  CastleAttackInfoVO.prototype.getLevelMoat = function () {
    return d.int(this._targetArea.moatLevel);
  };
  CastleAttackInfoVO.prototype.getLevelWallGate = function () {
    return d.int(this._targetArea.wallLevel + this._targetArea.gateLevel);
  };
  Object.defineProperty(CastleAttackInfoVO.prototype, "army", {
    get: function () {
      return this._army;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackInfoVO.prototype, "hasUnlockedTools", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(D.CastleFightScreenVO.prototype, "hasUnlockedTools").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackInfoVO.prototype, "morality", {
    get: function () {
      return this._morality;
    },
    set: function (e) {
      this._morality = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackInfoVO.prototype, "homeWorkshopLevel", {
    get: function () {
      return this._homeWorkshopLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackInfoVO.prototype, "yardWaveContainer", {
    get: function () {
      return this._yardWaveItemContainer;
    },
    set: function (e) {
      this._yardWaveItemContainer = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackInfoVO.prototype, "supportItemContainer", {
    get: function () {
      return this._supportItemContainer;
    },
    set: function (e) {
      this._supportItemContainer = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackInfoVO.prototype, "toolsSupportWodIds", {
    get: function () {
      var e = [];
      if (this._supportItemContainer) {
        this._supportItemContainer.items.forEach(function (t) {
          if (t.unitVO) {
            e.push(t.unitVO.wodId);
          } else {
            e.push(-1);
          }
        });
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackInfoVO.prototype, "autoSkipCooldownType", {
    get: function () {
      return this._autoSkipCooldownType;
    },
    set: function (e) {
      this._autoSkipCooldownType = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackInfoVO.prototype, "advisorAttacks", {
    get: function () {
      return this._advisorAttacks;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackInfoVO.prototype, "advisorAttacksBattlelog", {
    get: function () {
      return this._advisorAttacksBattlelog;
    },
    enumerable: true,
    configurable: true
  });
  CastleAttackInfoVO.prototype.setAdvisor = function (e = 0, t = false) {
    this._advisorAttacks = e;
    this._advisorAttacksBattlelog = t;
  };
  return CastleAttackInfoVO;
}(D.CastleFightScreenVO);
exports.CastleAttackInfoVO = I;
a.classImplementsInterfaces(I, "IFightScreenVO");