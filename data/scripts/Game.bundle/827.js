Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./18.js");
var h = require("./53.js");
var g = require("./137.js");
var C = require("./171.js");
var _ = require("./112.js");
var m = require("./222.js");
var f = require("./4.js");
var O = require("./35.js");
var E = require("./1103.js");
var y = require("./230.js");
var b = require("./386.js");
var D = function () {
  function CastleFightScreenVO() {
    this._waitTime = 0;
    this._targetActionType = 0;
    this._kingstowerBonus = 0;
    this._monumentBonus = 0;
    this._isCollectorAttack = false;
    this._collectorBooster = [];
    this._toolsSupportWodIds = [-1, -1, -1];
    this._targetCollectorCurrencyAmount = 0;
    this._openSelectBoosterDialog = false;
  }
  CastleFightScreenVO.getResourcesVectorItemRenderers = function () {
    var e = [];
    var t = new C.ComboboxItemRendererVO();
    t.itemLabel = u.Localize.text("dialog_attack_lootprio_all");
    t.data = {
      resource: c.CombatConst.LOOT_PRIO_NO
    };
    e.push(t);
    var i = new C.ComboboxItemRendererVO();
    i.itemLabel = u.Localize.text("wood");
    i.data = {
      resource: c.CombatConst.LOOT_PRIO_WOOD
    };
    e.push(i);
    var n = new C.ComboboxItemRendererVO();
    n.itemLabel = u.Localize.text("stone");
    n.data = {
      resource: c.CombatConst.LOOT_PRIO_STONE
    };
    e.push(n);
    var o = new C.ComboboxItemRendererVO();
    o.itemLabel = u.Localize.text("food");
    o.data = {
      resource: c.CombatConst.LOOT_PRIO_FOOD
    };
    e.push(o);
    var a = new C.ComboboxItemRendererVO();
    a.itemLabel = u.Localize.text("coal");
    a.data = {
      resource: c.CombatConst.LOOT_PRIO_COAL
    };
    e.push(a);
    var s = new C.ComboboxItemRendererVO();
    s.itemLabel = u.Localize.text("oliveoil");
    s.data = {
      resource: c.CombatConst.LOOT_PRIO_OIL
    };
    e.push(s);
    var r = new C.ComboboxItemRendererVO();
    r.itemLabel = u.Localize.text("glass");
    r.data = {
      resource: c.CombatConst.LOOT_PRIO_GLASS
    };
    e.push(r);
    var l = new C.ComboboxItemRendererVO();
    l.itemLabel = u.Localize.text("iron");
    l.data = {
      resource: c.CombatConst.LOOT_PRIO_IRON
    };
    e.push(l);
    return e;
  };
  CastleFightScreenVO.prototype.fillFromParamObject = function (e) {
    this._additionalEffects = new E.SimpleEffectSource();
    if (e.AE) {
      this._additionalEffects.parseEffects(e.AE);
    }
  };
  CastleFightScreenVO.prototype.addAdditionalWave = function () {};
  CastleFightScreenVO.prototype.deductLastWave = function () {};
  CastleFightScreenVO.prototype.getActionTravelTimeBonusForAreaType = function (e, t) {
    var i;
    var n = 0;
    var o = 0;
    var a = 0;
    var r = 0;
    var l = 0;
    var c = [];
    c.push(O.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS);
    var u = !!t && (!_.PlayerHelper.isNPCPlayer(t.playerID) || _.PlayerHelper.isNpcPvpPlayer(t.playerID)) && this.targetOwnerLevel >= s.PlayerConst.LEVEL_CAP;
    o += d.int(u ? f.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(y.CastleLegendSkillEffectsEnum.TRAVEL_ATTACK_BOOST) : 0);
    switch (this.targetActionType) {
      case p.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK:
      case p.ClientConstCastle.ACTION_TYPE_OUTPOSTATTACK:
      case p.ClientConstCastle.ACTION_TYPE_ATTACK:
      case p.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK:
        c.push(O.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS_PVP);
        break;
      case p.ClientConstCastle.ACTION_TYPE_SENDTROUPS:
        c.push(O.EffectTypeEnum.EFFECT_TYPE_STATIONING_SPEED_BONUS);
        break;
      case p.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE:
        c.push(O.EffectTypeEnum.EFFECT_TYPE_SUPPORT_SPEED_BONUS);
        break;
      case p.ClientConstCastle.ACTION_TYPE_CONQUER:
      case p.ClientConstCastle.ACTION_TYPE_ISLAND_ATTACK:
        c.push(O.EffectTypeEnum.EFFECT_TYPE_CONQUER_SPEED_BONUS);
        if (u || _.PlayerHelper.isEilandVillagePlayer(t.playerID)) {
          i = y.CastleLegendSkillEffectsEnum.TRAVEL_CONQUER_BOOST;
        }
    }
    if (c.length > 0 && c != null) {
      for (var h = 0, g = c; h < g.length; h++) {
        var C = g[h];
        if (C !== undefined) {
          n += e ? d.int(T.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(e, C, this._targetArea.areaType).strength) : 0;
          a += d.int(I.CastleTitleSystemHelper.returnTitleEffectValue(C, -1, this._targetArea.areaType, this._targetArea.spaceID).strength);
          r += d.int(f.CastleModel.researchData.getResearchEffectValue(C, this._targetArea.areaType, this._targetArea.spaceID, -1).strength);
          l += d.int(f.CastleModel.globalEffectData.getBonusByEffectType(C, this._targetArea.areaType, this._targetArea.spaceID));
        }
      }
    }
    if (i) {
      o += d.int(f.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(i));
    }
    return n + o + a + r + l;
  };
  Object.defineProperty(CastleFightScreenVO.prototype, "distance", {
    get: function () {
      return m.MapHelper.getDistanceByMapobjects(this.sourceArea, this.targetArea, true, this._targetActionType);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "sourceArea", {
    get: function () {
      return this._sourceArea;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "targetArea", {
    get: function () {
      return this._targetArea;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "sourceOwner", {
    get: function () {
      return this._sourceOwner;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "targetOwner", {
    get: function () {
      return this._targetOwner;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "unitInventory", {
    get: function () {
      return this._unitInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "strongholdUnitInventory", {
    get: function () {
      return this._strongholdUnitInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "spyInfo", {
    get: function () {
      return this._spyInfo;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightScreenVO.prototype.getTravelTime = function (e, t) {
    return 0;
  };
  CastleFightScreenVO.prototype.getTravelTimeBack = function (e, t) {
    return 0;
  };
  CastleFightScreenVO.prototype.getBoostedTravelTime = function (e, t, i) {
    return 0;
  };
  CastleFightScreenVO.prototype.getTravelCost = function (e) {
    return 0;
  };
  CastleFightScreenVO.prototype.getSumOfItems = function () {
    return 0;
  };
  CastleFightScreenVO.prototype.getSumOfTools = function () {
    return 0;
  };
  CastleFightScreenVO.prototype.getSumOfUnits = function () {
    return 0;
  };
  Object.defineProperty(CastleFightScreenVO.prototype, "waitTime", {
    get: function () {
      return this._waitTime;
    },
    set: function (e) {
      this._waitTime = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "targetActionType", {
    get: function () {
      return this._targetActionType;
    },
    set: function (e) {
      this._targetActionType = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "isConquerAttack", {
    get: function () {
      return this._targetActionType == p.ClientConstCastle.ACTION_TYPE_CONQUER || this._targetActionType == p.ClientConstCastle.ACTION_TYPE_CONQUERATTACK || this._targetActionType == p.ClientConstCastle.ACTION_TYPE_VILLAGE_ATTACK || this._targetActionType == p.ClientConstCastle.ACTION_TYPE_ISLAND_ATTACK || this._targetActionType == p.ClientConstCastle.ACTION_TYPE_LANDMARK_ATTACK;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "isOccupyConquerAttack", {
    get: function () {
      return this._targetActionType == p.ClientConstCastle.ACTION_TYPE_CONQUER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "detailViewObject", {
    get: function () {
      return this._targetArea;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "hasUnlockedTools", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "sourceOwnerCrestVO", {
    get: function () {
      if (this.sourceArea.kingdomID == r.FactionConst.KINGDOM_ID) {
        if (this.sourceOwner.factionID == r.FactionConst.BLUE_FACTION) {
          return v.FactionEventVO.BLUE_CREST_VO;
        } else {
          return v.FactionEventVO.RED_CREST_VO;
        }
      } else {
        return this.sourceOwner.crest;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "targetOwnerCrestVO", {
    get: function () {
      if (this.targetArea.kingdomID == r.FactionConst.KINGDOM_ID) {
        if (this.targetOwner.factionID == r.FactionConst.BLUE_FACTION) {
          return v.FactionEventVO.BLUE_CREST_VO;
        } else {
          return v.FactionEventVO.RED_CREST_VO;
        }
      } else {
        return this.targetOwner.crest;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "targetOwnerLevel", {
    get: function () {
      if (this._targetArea.isUnderConquerControl) {
        return this._targetOwner.playerLevel;
      } else {
        return this._targetArea.minimumOwnerLevel;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "baseWallBonus", {
    get: function () {
      return this._targetArea.baseWallBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "baseGateBonus", {
    get: function () {
      return this._targetArea.baseGateBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "baseMoatBonus", {
    get: function () {
      return this._targetArea.baseMoatBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "kingstowerBonus", {
    get: function () {
      return this._kingstowerBonus;
    },
    set: function (e) {
      this._kingstowerBonus = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "monumentBonus", {
    get: function () {
      return this._monumentBonus;
    },
    set: function (e) {
      this._monumentBonus = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "travelTimeIsSubscriptionBoosted", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "collecterBooster", {
    get: function () {
      return this._collectorBooster;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "toolsSupportWodIds", {
    get: function () {
      return this._toolsSupportWodIds;
    },
    set: function (e) {
      this._toolsSupportWodIds = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightScreenVO.prototype.resetCollectorBooster = function () {
    this._collectorBooster = [];
  };
  CastleFightScreenVO.prototype.addCollectorBooster = function (e, t) {
    this._collectorBooster.push([e, t]);
  };
  Object.defineProperty(CastleFightScreenVO.prototype, "isCollectorAttack", {
    get: function () {
      return this._isCollectorAttack;
    },
    set: function (e) {
      this._isCollectorAttack = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "isTempServerCollectorAttack", {
    get: function () {
      if (!n.EnvGlobalsHandler.globals.isOnTemporaryServer) {
        return false;
      }
      if (!A.instanceOfClass(this.targetArea, "CastleMapobjectVO")) {
        return false;
      }
      if (this.targetArea.kingdomID != a.WorldClassic.KINGDOM_ID) {
        return false;
      }
      var e = g.TempServerHelper.tmpServerEvent;
      if (!e) {
        return false;
      }
      if (e.settingVO.scoringSystem != b.TempServerConfigurationVO.SCORING_SYSTEM_COLLECTOR) {
        return false;
      }
      var t = S.castAs(f.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_ARMORER), "ArmorerEventVO");
      return !!t && t.containsEventPackage(e.settingVO.boosterCurrencyPackageID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "isTempServerRankSwapAttack", {
    get: function () {
      return !!n.EnvGlobalsHandler.globals.isOnTemporaryServer && !!A.instanceOfClass(this.targetArea, "CastleMapobjectVO") && this.targetArea.kingdomID == a.WorldClassic.KINGDOM_ID && !!g.TempServerHelper.tmpServerEvent && g.TempServerHelper.tmpServerEvent.settingVO.scoringSystem == b.TempServerConfigurationVO.SCORING_SYSTEM_RANK_SWAP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "isAllianceBattleGroundPlayerPointsAttack", {
    get: function () {
      return h.ABGHelper.isOnABGAndCollector && A.instanceOfClass(this.targetArea, "CastleMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "isAllianceBattleGroundTowerAttack", {
    get: function () {
      return h.ABGHelper.isOnABGAndTower && A.instanceOfClass(this.targetArea, "ABGAllianceTowerMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "targetCollectorCurrencyAmount", {
    get: function () {
      return this._targetCollectorCurrencyAmount;
    },
    set: function (e) {
      this._targetCollectorCurrencyAmount = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "openSelectBoosterDialog", {
    get: function () {
      return this._openSelectBoosterDialog;
    },
    set: function (e) {
      this._openSelectBoosterDialog = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "additionalEffects", {
    get: function () {
      return this._additionalEffects;
    },
    enumerable: true,
    configurable: true
  });
  return CastleFightScreenVO;
}();
exports.CastleFightScreenVO = D;
o.classImplementsInterfaces(D, "IFightScreenVO");
var I = require("./106.js");
var T = require("./111.js");
var v = require("./202.js");
var S = require("./1.js");
var A = require("./1.js");