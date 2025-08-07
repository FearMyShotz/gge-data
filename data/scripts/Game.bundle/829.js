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
var _ = require("./119.js");
var m = require("./223.js");
var f = require("./4.js");
var O = require("./33.js");
var E = require("./1104.js");
var y = require("./214.js");
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
    var o = [];
    o.push(O.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS);
    var a = !!t && (!_.PlayerHelper.isNPCPlayer(t.playerID) || _.PlayerHelper.isNpcPvpPlayer(t.playerID)) && this.targetOwnerLevel >= s.PlayerConst.LEVEL_CAP;
    d.int(a ? f.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(y.CastleLegendSkillEffectsEnum.TRAVEL_ATTACK_BOOST) : 0);
    switch (this.targetActionType) {
      case p.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK:
      case p.ClientConstCastle.ACTION_TYPE_OUTPOSTATTACK:
      case p.ClientConstCastle.ACTION_TYPE_ATTACK:
      case p.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK:
        o.push(O.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS_PVP);
        break;
      case p.ClientConstCastle.ACTION_TYPE_SENDTROUPS:
        o.push(O.EffectTypeEnum.EFFECT_TYPE_STATIONING_SPEED_BONUS);
        break;
      case p.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE:
        o.push(O.EffectTypeEnum.EFFECT_TYPE_SUPPORT_SPEED_BONUS);
        break;
      case p.ClientConstCastle.ACTION_TYPE_CONQUER:
      case p.ClientConstCastle.ACTION_TYPE_ISLAND_ATTACK:
        o.push(O.EffectTypeEnum.EFFECT_TYPE_CONQUER_SPEED_BONUS);
        if (a || _.PlayerHelper.isEilandVillagePlayer(t.playerID)) {
          i = y.CastleLegendSkillEffectsEnum.TRAVEL_CONQUER_BOOST;
        }
    }
    if (o.length > 0 && o != null) {
      for (var r = 0, l = o; r < l.length; r++) {
        var c = l[r];
        if (c !== undefined) {
          n += e ? d.int(I.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(e, c, this._targetArea.areaType).strength) : 0;
        }
      }
    }
    if (i) {
      d.int(f.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(i));
    }
    f.CastleModel.globalEffectData.getBonusByEffectType(O.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS, this._targetArea.areaType, this._targetArea.spaceID);
    return n;
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
          return T.FactionEventVO.BLUE_CREST_VO;
        } else {
          return T.FactionEventVO.RED_CREST_VO;
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
          return T.FactionEventVO.BLUE_CREST_VO;
        } else {
          return T.FactionEventVO.RED_CREST_VO;
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
      if (!S.instanceOfClass(this.targetArea, "CastleMapobjectVO")) {
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
      var t = v.castAs(f.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_ARMORER), "ArmorerEventVO");
      return !!t && t.containsEventPackage(e.settingVO.boosterCurrencyPackageID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "isTempServerRankSwapAttack", {
    get: function () {
      return !!n.EnvGlobalsHandler.globals.isOnTemporaryServer && !!S.instanceOfClass(this.targetArea, "CastleMapobjectVO") && this.targetArea.kingdomID == a.WorldClassic.KINGDOM_ID && !!g.TempServerHelper.tmpServerEvent && g.TempServerHelper.tmpServerEvent.settingVO.scoringSystem == b.TempServerConfigurationVO.SCORING_SYSTEM_RANK_SWAP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "isAllianceBattleGroundPlayerPointsAttack", {
    get: function () {
      return h.ABGHelper.isOnABGAndCollector && S.instanceOfClass(this.targetArea, "CastleMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "isAllianceBattleGroundTowerAttack", {
    get: function () {
      return h.ABGHelper.isOnABGAndTower && S.instanceOfClass(this.targetArea, "ABGAllianceTowerMapobjectVO");
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
var I = require("./110.js");
var T = require("./202.js");
var v = require("./1.js");
var S = require("./1.js");