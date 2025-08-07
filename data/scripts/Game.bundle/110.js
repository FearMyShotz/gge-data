Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleEffectsHelper() {}
  CastleEffectsHelper.getAccumulatedEffectValueForTypes = function (e, t, i, n = null) {
    var o = new e[0].valueClass();
    if (e != null) {
      for (var a = 0, s = e; a < s.length; a++) {
        var r = s[a];
        if (r !== undefined) {
          o.add(CastleEffectsHelper.getAccumulatedEffectValueForType(r, t, i, n), null);
        }
      }
    }
    return o;
  };
  CastleEffectsHelper.getAccumulatedEffectValueForType = function (e, t, i, n = null) {
    var a = [];
    var s = [];
    if (t) {
      a = a.concat(t.getUniqueBoni(false, e, i.areaType, null, true));
    }
    a = a.concat(l.CastleModel.userData.getGlobalConstructionItemEffectsByType(e, i));
    s = (s = (s = (s = (s = (s = s.concat(o.CastleTitleSystemHelper.returnTitleEffectsByType(e, i))).concat(l.CastleModel.researchData.getResearchEffectsByType(e, i))).concat(l.CastleModel.globalEffectData.getGlobalEffectsByType(e, i))).concat(l.CastleModel.subscriptionData.getSubscriptionEffectsByType(e, i))).concat(l.CastleModel.legendSkillData.getSceatSkillEffectsByType(e, i))).concat(l.CastleModel.userData.playerCrest.getEffectsByType(e, i));
    if (l.CastleModel.userData.isInAlliance && l.CastleModel.allianceData.myAllianceVO) {
      s = s.concat(l.CastleModel.allianceData.myAllianceVO.getTotalAllianceBuffEffectsByType(e, i));
    }
    if (n) {
      for (var r = 0; r < n.length; r++) {
        var c = n[r];
        if (c.ignoreCap) {
          s = s.concat(c.getBonusVOsByType(e, i));
        } else {
          a = a.concat(c.getBonusVOsByType(e, i));
        }
      }
    }
    var u = CastleEffectsHelper.getTotalEffectValue(a) || new e.valueClass();
    var d = CastleEffectsHelper.getTotalEffectValue(s, true) || new e.valueClass();
    u.add(d, null);
    return u;
  };
  CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea = function (e, t, i, n = true) {
    var o = CastleEffectsHelper.getTotalEffectValue(e.getUniqueBoni(false, t, i, null, n));
    return o || new t.valueClass();
  };
  CastleEffectsHelper.getTotalEffectValue = function (e, t = false) {
    if (e.length == 0) {
      return null;
    }
    var i;
    var n = new Map();
    if (e != null) {
      for (var o = 0, a = e; o < a.length; o++) {
        var s = a[o];
        if (s) {
          var r = s.capID;
          if (!n.get(r)) {
            n.set(r, new s.effect.effectType.type.valueClass());
          }
          i = n.get(r);
          var l = t ? null : [s.maxValueStrength];
          i.add(s.effectValue, l);
        }
      }
    }
    var c = new e[0].effect.effectType.type.valueClass();
    if (n != null) {
      for (var u = 0, d = Array.from(n.values()); u < d.length; u++) {
        var p = d[u];
        if (p !== undefined) {
          c.add(p, null);
        }
      }
    }
    return c;
  };
  CastleEffectsHelper.getUnitOnTheWallBonusForAreaType = function (e, t, i = false) {
    return r.int(CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(e, c.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_WALL, t).strength) + r.int(i ? l.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(u.CastleLegendSkillEffectsEnum.ADDITIONAL_UNIT_AMOUNT_ON_WALL) : 0);
  };
  CastleEffectsHelper.getTotalLordLootCapacityBonusForArea = function (e, t, i = false) {
    return r.int(CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(e, c.EffectTypeEnum.EFFECT_TYPE_LOOT_CAPACITY, t).strength);
  };
  CastleEffectsHelper.getUnitsOnTheFlankBonusForAreaType = function (e, t, i = false) {
    return r.int(CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(e, c.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_FLANK, t.areaType).strength);
  };
  CastleEffectsHelper.getUnitsOnTheFrontBonusForAreaType = function (e, t, i = false) {
    return r.int(CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(e, c.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_FRONT, t.areaType).strength);
  };
  CastleEffectsHelper.getUnitsOnTheYardWaveBonusForAreaType = function (e, t) {
    return r.int(CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(e, c.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_REINFORCEMENT_BONUS, t.areaType).strength);
  };
  CastleEffectsHelper.getUnitsOnTheYardWaveBoostForAreaType = function (e, t) {
    var i = r.int(CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(e, c.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_REINFORCEMENT_BOOST, t.areaType).strength);
    return s.EffectConst.boostToModifier(i);
  };
  CastleEffectsHelper.getTravelCostBonusForAreaType = function (e, t, i, n = false) {
    var o = 0;
    var s = [];
    s.push(c.EffectTypeEnum.EFFECT_TYPE_TRAVEL_COST_REDUCTION);
    switch (i) {
      case a.ClientConstCastle.ACTION_TYPE_ATTACK:
      case a.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK:
      case a.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK:
        s.push(c.EffectTypeEnum.EFFECT_TYPE_TRAVEL_COST_REDUCTION_PVP);
        break;
      case a.ClientConstCastle.ACTION_TYPE_SENDTROUPS:
        s.push(c.EffectTypeEnum.EFFECT_TYPE_STATIONING_TRAVEL_COST_REDUCTION);
        break;
      case a.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE:
        s.push(c.EffectTypeEnum.EFFECT_TYPE_SUPPORT_TRAVEL_COST_REDUCTION);
    }
    if (s != null) {
      for (var l = 0, u = s; l < u.length; l++) {
        var d = u[l];
        if (d !== undefined) {
          o += r.int(CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(e, d, t).strength);
        }
      }
    }
    return o;
  };
  CastleEffectsHelper.getFullAttackBonusForLordByFlankAndAreaType = function (e, t, i, n) {
    var o = 0;
    o += CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(e, c.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS, t).strength;
    var a = n ? c.EffectTypeEnum.EFFECT_TYPE_MELEE_BONUS : c.EffectTypeEnum.EFFECT_TYPE_RANGE_BONUS;
    o += CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(e, a, t).strength;
    var s = n ? c.EffectTypeEnum.EFFECT_TYPE_OFFENSIVE_MELEE_BONUS : c.EffectTypeEnum.EFFECT_TYPE_OFFENSIVE_RANGE_BONUS;
    return (o += CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(e, s, t).strength) / 100;
  };
  CastleEffectsHelper.getFullDefenseBonusForLordByFlankAndAreaType = function (e, t, i, n) {
    var o = 0;
    o += CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(e, c.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BONUS, t).strength;
    var s = n ? c.EffectTypeEnum.EFFECT_TYPE_MELEE_BONUS : c.EffectTypeEnum.EFFECT_TYPE_RANGE_BONUS;
    o += CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(e, s, t).strength;
    if (i == a.ClientConstCastle.FLANK_MIDDLE) {
      o += CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(e, c.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_YARD, t).rawValues[0];
    }
    return o / 100;
  };
  CastleEffectsHelper.getNameTextId = function (e) {
    switch (e) {
      case s.AllianceConst.TYPE_MEMBERS:
        return "dialog_alliance_member";
      case s.AllianceConst.TYPE_DEFENSE_SPEED_BOOST:
        return "dialog_alliance_defenseBoost";
      case s.AllianceConst.TYPE_MARKET_SPEED_BOOST:
        return "dialog_alliance_marketBoost";
      case s.AllianceConst.TYPE_DEPOSIT_BONUS:
        return "dialog_alliance_depositBonus";
      case s.AllianceConst.TYPE_MARAUDER_BONUS:
        return "dialog_alliance_permanentBoost_lootCapacity";
      case s.AllianceConst.TYPE_ATTACK_SPEED_BOOST:
        return "dialog_alliance_movementBoost";
      case s.AllianceConst.TYPE_TEMP_GLORY_BOOST:
        return "dialog_alliance_temporaryBoost_glory";
      case s.AllianceConst.TYPE_TEMP_DEFENSE_SPEED_BOOST:
        return "dialog_alliance_temporaryBoost_supportTravel";
      case s.AllianceConst.TYPE_TEMP_ATTACK_POWER_BOOST:
        return "dialog_alliance_temporaryBoost_attackPower";
      case s.AllianceConst.TYPE_TEMP_DEFENSE_POWER_BOOST:
        return "dialog_alliance_temporaryBoost_defencePower";
      case s.AllianceConst.TYPE_RAGE_POINT_BOOST:
        return "dialog_alliance_temporaryBoost_allianceRageBoost";
      case s.AllianceConst.TYPE_COOLDOWN_REDUCTION_KHAN:
        return "dialog_alliance_temporaryBoost_allianceCooldownReductionKhan";
      case s.AllianceConst.TYPE_COOLDOWN_REDUCTION_NOMADS:
        return "dialog_alliance_temporaryBoost_allianceCooldownReductionNomad";
      case s.AllianceConst.TYPE_ALIEN_ATTACK_BOOST:
        return "dialog_alliance_temporaryBoost_allianceAttackBoostAliens";
      case s.AllianceConst.TYPE_DAIMYO_ATTACK_BOOST:
        return "dialog_alliance_temporaryBoost_allianceAttackBoostDaimyo";
      case s.AllianceConst.TYPE_KHAN_DEFENSE_BOOST:
        return "dialog_alliance_temporaryBoost_allianceDefenseBoostKhan";
      case s.AllianceConst.TYPE_HEALING_SPEED_BOOST:
        return "dialog_alliance_temporaryBoost_healingSpeedIncreaseBoostPremium";
      case s.AllianceConst.TYPE_INFLUENCE_POINT_BOOST:
        return "dialog_alliance_temporaryBoost_BGCollectorBoost";
      case s.AllianceConst.TYPE_COOLDOWN_REDUCTION_SAMURAI_CAMP:
        return "dialog_alliance_temporaryBoost_allianceSamuraiCooldownReduction";
      case s.AllianceConst.TYPE_COOLDOWN_REDUCTION_DAIYMO:
        return "dialog_alliance_temporaryBoost_allianceDaimyoCooldownReduction";
    }
    return null;
  };
  CastleEffectsHelper.isDefenseEffect = function (e) {
    switch (e) {
      case c.EffectTypeEnum.EFFECT_TYPE_FAME_DEFENSE_BONUS:
      case c.EffectTypeEnum.EFFECT_TYPE_LOOT_REDUCTION:
      case c.EffectTypeEnum.EFFECT_TYPE_PERCEPTION_BONUS:
      case c.EffectTypeEnum.EFFECT_TYPE_FIRE_BRIGADE_BOOST:
      case c.EffectTypeEnum.EFFECT_TYPE_WALL_BONUS:
      case c.EffectTypeEnum.EFFECT_TYPE_GATE_BONUS:
      case c.EffectTypeEnum.EFFECT_TYPE_MOAT_BONUS:
      case c.EffectTypeEnum.EFFECT_TYPE_MELEE_BONUS:
      case c.EffectTypeEnum.EFFECT_TYPE_RANGE_BONUS:
      case c.EffectTypeEnum.EFFECT_TYPE_NPC_DEFENSE_BONUS:
      case c.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BONUS:
      case c.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_YARD:
      case c.EffectTypeEnum.EFFECT_TYPE_HIDEOUT_CAPACITY:
      case c.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_WALL:
      case c.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_WALL_P_V_P:
      case c.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_COUNT_WALL:
      case c.EffectTypeEnum.EFFECT_TYPE_DEFENSE_SUPPORT_UNITS:
      case c.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_FRONT:
      case c.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_FLANK:
      case c.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BONUS:
      case c.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BOOST:
        return true;
    }
    return false;
  };
  CastleEffectsHelper.isAttackEffect = function (e) {
    switch (e) {
      case c.EffectTypeEnum.EFFECT_TYPE_CONQUER_SPEED_BONUS:
      case c.EffectTypeEnum.EFFECT_TYPE_OCCUPATION_TIME_REDUCTION:
      case c.EffectTypeEnum.EFFECT_TYPE_FAME_OFFENSE_BONUS:
      case c.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS:
      case c.EffectTypeEnum.EFFECT_TYPE_LOOT_BONUS:
      case c.EffectTypeEnum.EFFECT_TYPE_STEALTH_BONUS:
      case c.EffectTypeEnum.EFFECT_TYPE_FIRE_BOOST:
      case c.EffectTypeEnum.EFFECT_TYPE_WALL_REDUCTION:
      case c.EffectTypeEnum.EFFECT_TYPE_GATE_REDUCTION:
      case c.EffectTypeEnum.EFFECT_TYPE_MOAT_REDUCTION:
      case c.EffectTypeEnum.EFFECT_TYPE_MAGIC_FIND_BONUS:
      case c.EffectTypeEnum.EFFECT_TYPE_OFFENSIVE_MELEE_BONUS:
      case c.EffectTypeEnum.EFFECT_TYPE_OFFENSIVE_RANGE_BONUS:
      case c.EffectTypeEnum.EFFECT_TYPE_SMASH_CHANCE:
      case c.EffectTypeEnum.EFFECT_TYPE_TRAVEL_COST_REDUCTION:
      case c.EffectTypeEnum.EFFECT_TYPE_COOLDOWN_REDUCTION:
      case c.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_FLANK:
      case c.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_YARD:
      case c.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_FRONT:
      case c.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS:
      case c.EffectTypeEnum.EFFECT_TYPE_LOOT_CAPACITY:
      case c.EffectTypeEnum.EFFECT_TYPE_RETURN_TRAVEL_BOOST:
      case c.EffectTypeEnum.EFFECT_TYPE_TRAVEL_COST_REDUCTION_PVP:
      case c.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS_PVP:
      case c.EffectTypeEnum.EFFECT_TYPE_RETURN_TRAVEL_BOOST_PVP:
      case c.EffectTypeEnum.EFFECT_TYPE_ATTACK_SUPPORT_UNITS:
      case c.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_FRONT:
      case c.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_FLANK:
      case c.EffectTypeEnum.EFFECT_TYPE_COIN_LOOT_BOOST:
      case c.EffectTypeEnum.EFFECT_TYPE_LOOT_CAPACITY_BOOST:
      case c.EffectTypeEnum.EFFECT_TYPE_NOMAD_TABLET_BOOST:
      case c.EffectTypeEnum.EFFECT_TYPE_SAMURAI_TOKEN_BOOST:
      case c.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS_UNIT:
      case c.EffectTypeEnum.EFFECT_TYPE_SPEED_BOOST_UNIT:
      case c.EffectTypeEnum.EFFECT_TYPE_LOOT_VALUE_BOOST_UNIT:
      case c.EffectTypeEnum.EFFECT_TYPE_FAME_BOOST_UNIT:
      case c.EffectTypeEnum.EFFECT_TYPE_ADDITIONAL_WAVE:
      case c.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_REINFORCEMENT_BOOST:
      case c.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_REINFORCEMENT_BONUS:
        return true;
    }
    return false;
  };
  return CastleEffectsHelper;
}();
exports.CastleEffectsHelper = n;
var o = require("./117.js");
var a = require("./18.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./4.js");
var c = require("./33.js");
var u = require("./214.js");