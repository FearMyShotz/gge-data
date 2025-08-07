Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ToolEffectType(e, t, i, n = false) {
    this._absoluteBonus = false;
    this._sortOrder = 0;
    this._tooltipTextId = t;
    this._absoluteBonus = n;
    this._iconClass = i;
    this._sortOrder = e;
  }
  Object.defineProperty(ToolEffectType, "RAGE_BONUS", {
    get: function () {
      if (o.isUndefined(this._RAGE_BONUS)) {
        this._RAGE_BONUS = new ToolEffectType(0, "dialog_rageBooster_title", Library.CastleInterfaceElements_Icons.Icon_RageBoost);
      }
      return this._RAGE_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "KHAN_MEDAL_BONUS", {
    get: function () {
      if (o.isUndefined(this._KHAN_MEDAL_BONUS)) {
        this._KHAN_MEDAL_BONUS = new ToolEffectType(0, "khanMedals", Library.CastleInterfaceElements_Icons.Icon_KhanMedalBoost);
      }
      return this._KHAN_MEDAL_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "C1_BONUS", {
    get: function () {
      if (o.isUndefined(this._C1_BONUS)) {
        this._C1_BONUS = new ToolEffectType(0, "coinloot", Library.CastleInterfaceElements_Icons.Icon_LootPower);
      }
      return this._C1_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "LOOT_BONUS", {
    get: function () {
      if (o.isUndefined(this._LOOT_BONUS)) {
        this._LOOT_BONUS = new ToolEffectType(10, "lootplace_total", Library.CastleInterfaceElements_Icons.Icon_LootPower, true);
      }
      return this._LOOT_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "FAME_BONUS", {
    get: function () {
      if (o.isUndefined(this._FAME_BONUS)) {
        this._FAME_BONUS = new ToolEffectType(0, "dialog_fame_fame", Library.CastleInterfaceElements_Icons.Icon_Fame_Big);
      }
      return this._FAME_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "XP_BONUS", {
    get: function () {
      if (o.isUndefined(this._XP_BONUS)) {
        this._XP_BONUS = new ToolEffectType(11, a.ClientConstTextIds.XP, Library.CastleInterfaceElements_Icons.Icon_XP_Big);
      }
      return this._XP_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "SAMURAI_BONUS", {
    get: function () {
      if (o.isUndefined(this._SAMURAI_BONUS)) {
        this._SAMURAI_BONUS = new ToolEffectType(0, "lootedSamuraiTokens", Library.CastleInterfaceElements_Icons.Icon_SamuraiBoost);
      }
      return this._SAMURAI_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "ALLIANCE_CITY_TOKEN_BONUS", {
    get: function () {
      if (o.isUndefined(this._ALLIANCE_CITY_TOKEN_BONUS)) {
        this._ALLIANCE_CITY_TOKEN_BONUS = new ToolEffectType(0, "royalTokensBoost_icon_tt", Library.CastleInterfaceElements_Icons.Icon_AllianceTokenBoost);
      }
      return this._ALLIANCE_CITY_TOKEN_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "ALLIANCE_CITY_COIN_BONUS", {
    get: function () {
      if (o.isUndefined(this._ALLIANCE_CITY_COIN_BONUS)) {
        this._ALLIANCE_CITY_COIN_BONUS = new ToolEffectType(0, "royalCoinsBoost_icon_tt", Library.CastleInterfaceElements_Icons.Icon_AllianceCoinBoost);
      }
      return this._ALLIANCE_CITY_COIN_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "KHAN_TABLET_BONUS", {
    get: function () {
      if (o.isUndefined(this._KHAN_TABLET_BONUS)) {
        this._KHAN_TABLET_BONUS = new ToolEffectType(0, "lootedKhanTablets", Library.CastleInterfaceElements_Icons.Icon_KhanTabletBoost);
      }
      return this._KHAN_TABLET_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "OFF_MELEE_BONUS", {
    get: function () {
      if (o.isUndefined(this._OFF_MELEE_BONUS)) {
        this._OFF_MELEE_BONUS = new ToolEffectType(7, "offMeleeBonus", Library.CastleInterfaceElements_Icons.Icon_ToolCombatPowerMelee);
      }
      return this._OFF_MELEE_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "OFF_RANGE_BONUS", {
    get: function () {
      if (o.isUndefined(this._OFF_RANGE_BONUS)) {
        this._OFF_RANGE_BONUS = new ToolEffectType(9, "offRangeBonus", Library.CastleInterfaceElements_Icons.Icon_ToolCombatPowerRange);
      }
      return this._OFF_RANGE_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "DEF_MELEE_BONUS", {
    get: function () {
      if (o.isUndefined(this._DEF_MELEE_BONUS)) {
        this._DEF_MELEE_BONUS = new ToolEffectType(3, "defMeleeBonus", Library.CastleInterfaceElements_Icons.Icon_DefenceMelee);
      }
      return this._DEF_MELEE_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "DEF_RANGE_BONUS", {
    get: function () {
      if (o.isUndefined(this._DEF_RANGE_BONUS)) {
        this._DEF_RANGE_BONUS = new ToolEffectType(4, "defRangeBonus", Library.CastleInterfaceElements_Icons.Icon_DefenceRange);
      }
      return this._DEF_RANGE_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "REPUTATION_BONUS", {
    get: function () {
      if (o.isUndefined(this._REPUTATION_BONUS)) {
        this._REPUTATION_BONUS = new ToolEffectType(0, "reputation", Library.CastleInterfaceElements.FactionInvasion_CoatOfArms);
      }
      return this._REPUTATION_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "POINT_BONUS", {
    get: function () {
      if (o.isUndefined(this._POINT_BONUS)) {
        this._POINT_BONUS = new ToolEffectType(0, "factionHighscore_points", Library.CastleInterfaceElements.Faction_CoatOfArms);
      }
      return this._POINT_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "MOAT_BONUS", {
    get: function () {
      if (o.isUndefined(this._MOAT_BONUS)) {
        this._MOAT_BONUS = new ToolEffectType(5, "moatProtection", Library.CastleInterfaceElements_Icons.Icon_Btn_Moat);
      }
      return this._MOAT_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "WALL_BONUS", {
    get: function () {
      if (o.isUndefined(this._WALL_BONUS)) {
        this._WALL_BONUS = new ToolEffectType(2, "wallProtection", Library.CastleInterfaceElements_Icons.Icon_Defence);
      }
      return this._WALL_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "GATE_BONUS", {
    get: function () {
      if (o.isUndefined(this._GATE_BONUS)) {
        this._GATE_BONUS = new ToolEffectType(1, "gateProtection", Library.CastleInterfaceElements_Icons.Icon_Gate);
      }
      return this._GATE_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "PEARL_BONUS", {
    get: function () {
      if (o.isUndefined(this._PEARL_BONUS)) {
        this._PEARL_BONUS = new ToolEffectType(0, "pearlBooster_name", Library.CastleInterfaceElements_Icons.Icon_PearlBoost);
      }
      return this._PEARL_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "DEFENSE_UNIT_AMOUNT_WALL", {
    get: function () {
      if (o.isUndefined(this._DEFENSE_UNIT_AMOUNT_WALL)) {
        this._DEFENSE_UNIT_AMOUNT_WALL = new ToolEffectType(0, "bonusWallCapacity", Library.CastleInterfaceElements_Icons.Icon_defenseUnitAmountWall);
      }
      return this._DEFENSE_UNIT_AMOUNT_WALL;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "DEFENSE_BONUS", {
    get: function () {
      if (o.isUndefined(this._DEFENSE_BONUS)) {
        this._DEFENSE_BONUS = new ToolEffectType(0, "bonusDefencePower", Library.CastleInterfaceElements_Icons.Icon_defenseBonus);
      }
      return this._DEFENSE_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "DEFENSE_BOOST_YARD", {
    get: function () {
      if (o.isUndefined(this._DEFENSE_BOOST_YARD)) {
        this._DEFENSE_BOOST_YARD = new ToolEffectType(0, "bonusYardDefencePower", Library.CastleInterfaceElements_Icons.Icon_DefenseBoostYard);
      }
      return this._DEFENSE_BOOST_YARD;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "ATTACK_BOOST_YARD", {
    get: function () {
      if (o.isUndefined(this._ATTACK_BOOST_YARD)) {
        this._ATTACK_BOOST_YARD = new ToolEffectType(0, "attackBoostYard", Library.CastleInterfaceElements_Icons.Icon_AttackBoostYard);
      }
      return this._ATTACK_BOOST_YARD;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "ADDITIONAL_WAVE", {
    get: function () {
      if (o.isUndefined(this._ADDITIONAL_WAVE)) {
        this._ADDITIONAL_WAVE = new ToolEffectType(0, "additionalWaves", Library.CastleInterfaceElements_Icons.Icon_AdditionalWaves, true);
      }
      return this._ADDITIONAL_WAVE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "KILL_ATTACKING_MELEE_TROOPS_YARD", {
    get: function () {
      if (o.isUndefined(this._KILL_ATTACKING_MELEE_TROOPS_YARD)) {
        this._KILL_ATTACKING_MELEE_TROOPS_YARD = new ToolEffectType(0, "killAttackingMeleeTroopsYard", Library.CastleInterfaceElements_Icons.Icon_killAttackingMeleeTroopsYard, true);
      }
      return this._KILL_ATTACKING_MELEE_TROOPS_YARD;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "KILL_ATTACKING_RANGED_TROOPS_YARD", {
    get: function () {
      if (o.isUndefined(this._KILL_ATTACKING_RANGED_TROOPS_YARD)) {
        this._KILL_ATTACKING_RANGED_TROOPS_YARD = new ToolEffectType(0, "killAttackingRangedTroopsYard", Library.CastleInterfaceElements_Icons.Icon_killAttackingRangedTroopsYard, true);
      }
      return this._KILL_ATTACKING_RANGED_TROOPS_YARD;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "KILL_ATTACKING_ANY_TROOPS_YARD", {
    get: function () {
      if (o.isUndefined(this._KILL_ATTACKING_ANY_TROOPS_YARD)) {
        this._KILL_ATTACKING_ANY_TROOPS_YARD = new ToolEffectType(0, "killAttackingAnyTroopsYard", Library.CastleInterfaceElements_Icons.Icon_killAttackingAnyTroopsYard, true);
      }
      return this._KILL_ATTACKING_ANY_TROOPS_YARD;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "KILL_DEFENDING_MELEE_TROOPS_YARD", {
    get: function () {
      if (o.isUndefined(this._KILL_DEFENDING_MELEE_TROOPS_YARD)) {
        this._KILL_DEFENDING_MELEE_TROOPS_YARD = new ToolEffectType(0, "killDefendingMeleeTroopsYard", Library.CastleInterfaceElements_Icons.Icon_killDefendingMeleeTroopsYard, true);
      }
      return this._KILL_DEFENDING_MELEE_TROOPS_YARD;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "KILL_DEFENDING_RANGED_TROOPS_YARD", {
    get: function () {
      if (o.isUndefined(this._KILL_DEFENDING_RANGED_TROOPS_YARD)) {
        this._KILL_DEFENDING_RANGED_TROOPS_YARD = new ToolEffectType(0, "killDefendingRangedTroopsYard", Library.CastleInterfaceElements_Icons.Icon_killDefendingRangedTroopsYard, true);
      }
      return this._KILL_DEFENDING_RANGED_TROOPS_YARD;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "KILL_DEFENDING_ANY_TROOPS_YARD", {
    get: function () {
      if (o.isUndefined(this._KILL_DEFENDING_ANY_TROOPS_YARD)) {
        this._KILL_DEFENDING_ANY_TROOPS_YARD = new ToolEffectType(0, "killDefendingAnyTroopsYard", Library.CastleInterfaceElements_Icons.Icon_killDefendingAnyTroopsYard, true);
      }
      return this._KILL_DEFENDING_ANY_TROOPS_YARD;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "ATTACK_BONUS", {
    get: function () {
      if (o.isUndefined(this._ATTACK_BONUS)) {
        this._ATTACK_BONUS = new ToolEffectType(0, "attackBonus", Library.CastleInterfaceElements_Icons.Icon_attackBonus);
      }
      return this._ATTACK_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "ATTACK_UNIT_AMOUNT_REINFORCEMENT_BONUS", {
    get: function () {
      if (o.isUndefined(this._ATTACK_UNIT_AMOUNT_REINFORCEMENT_BONUS)) {
        this._ATTACK_UNIT_AMOUNT_REINFORCEMENT_BONUS = new ToolEffectType(0, "attackUnitAmountReinforcementBonus", Library.CastleInterfaceElements_Icons.Icon_attackBonus);
      }
      return this._ATTACK_UNIT_AMOUNT_REINFORCEMENT_BONUS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "ATTACK_UNIT_AMOUNT_REINFORCEMENT_BOOST", {
    get: function () {
      if (o.isUndefined(this._ATTACK_UNIT_AMOUNT_REINFORCEMENT_BOOST)) {
        this._ATTACK_UNIT_AMOUNT_REINFORCEMENT_BOOST = new ToolEffectType(0, "attackUnitAmountReinforcementBonus", Library.CastleInterfaceElements_Icons.Icon_attackBonus);
      }
      return this._ATTACK_UNIT_AMOUNT_REINFORCEMENT_BOOST;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType, "BOOSTER_TYPES", {
    get: function () {
      if (o.isUndefined(this._boosterTypes)) {
        this._boosterTypes = [this.C1_BONUS, this.POINT_BONUS, this.REPUTATION_BONUS, this.FAME_BONUS, this.XP_BONUS, this.KHAN_MEDAL_BONUS, this.KHAN_TABLET_BONUS, this.LOOT_BONUS, this.PEARL_BONUS, this.RAGE_BONUS, this.SAMURAI_BONUS];
      }
      return this._boosterTypes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType.prototype, "hasAbsoluteBonus", {
    get: function () {
      return this._absoluteBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType.prototype, "sortOrder", {
    get: function () {
      return this._sortOrder;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType.prototype, "iconClass", {
    get: function () {
      if (this == ToolEffectType._XP_BONUS && s.CastleModel.userData.isLegend) {
        return Library.CastleInterfaceElements_Icons.Icon_XP_Legend_Big;
      } else {
        return this._iconClass;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolEffectType.prototype, "tooltipTextId", {
    get: function () {
      if (this == ToolEffectType._XP_BONUS && s.CastleModel.userData.isLegend) {
        return a.ClientConstTextIds.LEGEND_XP;
      } else {
        return this._tooltipTextId;
      }
    },
    enumerable: true,
    configurable: true
  });
  return ToolEffectType;
}();
exports.ToolEffectType = n;
var o = require("./229.js");
var a = require("./39.js");
var s = require("./4.js");