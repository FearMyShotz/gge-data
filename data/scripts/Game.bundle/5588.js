Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./708.js");
var c = require("./4.js");
var u = require("./35.js");
var d = require("./230.js");
var p = require("./827.js");
var h = function (e) {
  function CastleSupportDefenceVO() {
    var t = e !== null && e.apply(this, arguments) || this;
    t._unitsYard = 0;
    t._unitsYardLimit = 0;
    t._allianceUnitYard = 0;
    t._allianceUnitYardLimit = 0;
    t._unitsWall = 0;
    t._unitsWallLimit = 0;
    return t;
  }
  n.__extends(CastleSupportDefenceVO, e);
  CastleSupportDefenceVO.prototype.fillFromParamObject = function (t) {
    this._sourceArea = c.CastleModel.userData.getOwnCastle(t.SCID);
    this._sourceOwner = c.CastleModel.otherPlayerData.getOwnInfoVO();
    this._targetArea = g.WorldmapObjectFactory.parseWorldMapArea(t.gaa.AI);
    if (this._targetArea.ownerInfo) {
      this._targetOwner = this._targetArea.ownerInfo;
    } else {
      this._targetOwner = c.CastleModel.otherPlayerData.parseOwnerInfo(t.gaa.OI[0]);
    }
    var i = this._targetArea.areaType == s.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER ? t.abe : t.B;
    this._spyInfo = new m.CastleSpyArmyInfoVO();
    this._spyInfo.parseArmyInfo(t.S, t.AS, i, t.LS);
    this._unitInventory = new O.UnitInventoryDictionary();
    this._unitInventory.fillFromWodAmountArray(t.gui.I);
    this._strongholdUnitInventory = new f.StrongholdUnitInventory();
    this._strongholdUnitInventory.fillFromWodAmountArray(t.gui.SHI);
    this._supportUnits = new _.CastleFightItemContainer(CastleSupportDefenceVO.ITEM_TYPES, CastleSupportDefenceVO.ITEM_LEVELS, 99, this.getDefenderLimit());
    this._allianceUnitYardLimit = t.AUYL || 0;
    this._unitsYardLimit = t.UYL - this._allianceUnitYardLimit || 0;
    this._unitsWallLimit = t.UWL || 0;
    if (this.spyInfo.itemsKeep) {
      var n = this.spyInfo.itemsKeep.getSoldierCount();
      this._unitsWall = this.spyInfo.totalWallSoldierCount;
      this._unitsYard = Math.min(n, this._unitsYardLimit);
      this._allianceUnitYard = Math.max(0, n - this._unitsYardLimit);
    }
    e.prototype.fillFromParamObject.call(this, t);
  };
  CastleSupportDefenceVO.prototype.getDefenderLimit = function () {
    if (l.instanceOf_ISupportCapacityVO(this._targetArea)) {
      return r.int(this._targetArea.supportCapacity - this.getUnitCountFromSupportMovements());
    } else {
      return r.int(Number.MAX_VALUE);
    }
  };
  CastleSupportDefenceVO.prototype.getArmy = function () {
    var e = [];
    for (var t = 0, i = this._supportUnits.getSlotList(); t < i.length; t++) {
      var n = i[t];
      if (n[0] != -1) {
        e.push([n[0], n[1]]);
      }
    }
    return e;
  };
  CastleSupportDefenceVO.prototype.getSumOfItems = function () {
    return this._supportUnits.sumOfItems;
  };
  CastleSupportDefenceVO.prototype.getSumOfTools = function () {
    return 0;
  };
  CastleSupportDefenceVO.prototype.getSumOfUnits = function () {
    return this._supportUnits.sumOfItems;
  };
  CastleSupportDefenceVO.prototype.getLowestTravelSpeed = function (e = null) {
    return r.int(this._supportUnits.getLowestTravelSpeed(false, e));
  };
  Object.defineProperty(CastleSupportDefenceVO.prototype, "supportUnits", {
    get: function () {
      return this._supportUnits;
    },
    enumerable: true,
    configurable: true
  });
  CastleSupportDefenceVO.prototype.getTravelCost = function (e) {
    var t = e ? C.CastleEffectsHelper.getTravelCostBonusForAreaType(e, this.targetArea.areaType, this.targetActionType) : 0;
    var i = 0;
    if (c.CastleModel.userData.isLegend) {
      i = c.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(d.CastleLegendSkillEffectsEnum.TRAVEL_COST_REDUCTION);
    }
    var n = c.CastleModel.costsData.getFinalCostsC1(s.TravelConst.getTravelCostC1(this.distance, this.getSumOfItems(), t, i));
    return Math.ceil(n);
  };
  CastleSupportDefenceVO.prototype.getTravelTime = function (e, t) {
    if (e.areaType == s.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP) {
      return 0;
    } else {
      return r.int(this.getBoostedTravelTime(e, 0, t));
    }
  };
  CastleSupportDefenceVO.prototype.getBoostedTravelTime = function (e, t, i) {
    if (this.getSumOfItems() == 0) {
      return 0;
    }
    var n = i ? this.getActionTravelTimeBonusForAreaType(i, null) : 0;
    var o = 1;
    if (c.CastleModel.allianceData.myAllianceVO) {
      o += c.CastleModel.allianceData.myAllianceVO.getTotalAllianceBuffEffectValue(u.EffectTypeEnum.EFFECT_TYPE_SUPPORT_SPEED_BONUS, this.targetArea.areaType, this.targetArea.spaceID, -1, e.controllerWorldMapOwnerInfoVO).strength / 100;
      if (this.travelTimeIsSubscriptionBoosted) {
        o += c.CastleModel.subscriptionData.getEffectValue(u.EffectTypeEnum.EFFECT_TYPE_SUPPORT_SPEED_BONUS, this.targetArea.areaType, this.targetArea.spaceID) / 100;
      }
    }
    return r.int(s.TravelConst.getTravelTimeWithHorse(this.getLowestTravelSpeed(i), this.distance, o, t, n, this.distance, false));
  };
  Object.defineProperty(CastleSupportDefenceVO.prototype, "travelTimeIsSubscriptionBoosted", {
    get: function () {
      return c.CastleModel.subscriptionData.getEffectValue(u.EffectTypeEnum.EFFECT_TYPE_SUPPORT_SPEED_BONUS, this.targetArea.areaType, this.targetArea.spaceID) > 0 && this.targetOwner.allianceID >= 0 && this.targetOwner.allianceID == this.sourceOwner.allianceID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleFightScreenVO.prototype, "travelTimeIsSubscriptionBoosted").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleSupportDefenceVO.prototype.getUnitCountFromSupportMovements = function () {
    var e = 0;
    var t = c.CastleModel.armyData.getMovementsToAreaPos(this.targetArea);
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && a.instanceOfClass(o, "SupportDefenceMapmovementVO")) {
          e += r.int(o.armySize);
        }
      }
    }
    return e;
  };
  CastleSupportDefenceVO.prototype.getMyUnitCountFromSupportMovements = function () {
    var e = 0;
    var t = c.CastleModel.armyData.getMyMovementsToAreaPos(this.targetArea);
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && a.instanceOfClass(o, "SupportDefenceMapmovementVO")) {
          e += r.int(o.armySize);
        }
      }
    }
    return e;
  };
  Object.defineProperty(CastleSupportDefenceVO.prototype, "unitsYardLimit", {
    get: function () {
      return this._unitsYardLimit;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSupportDefenceVO.prototype, "allianceUnitYardLimit", {
    get: function () {
      return this._allianceUnitYardLimit;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSupportDefenceVO.prototype, "unitsWallLimit", {
    get: function () {
      return this._unitsWallLimit;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSupportDefenceVO.prototype, "unitsYard", {
    get: function () {
      return this._unitsYard;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSupportDefenceVO.prototype, "allianceUnitYard", {
    get: function () {
      return this._allianceUnitYard;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSupportDefenceVO.prototype, "unitsWall", {
    get: function () {
      return this._unitsWall;
    },
    enumerable: true,
    configurable: true
  });
  CastleSupportDefenceVO.ITEM_TYPES = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  CastleSupportDefenceVO.ITEM_LEVELS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return CastleSupportDefenceVO;
}(p.CastleFightScreenVO);
exports.CastleSupportDefenceVO = h;
var g = require("./147.js");
var C = require("./111.js");
var _ = require("./552.js");
var m = require("./829.js");
var f = require("./553.js");
var O = require("./156.js");
o.classImplementsInterfaces(h, "IFightScreenVO");