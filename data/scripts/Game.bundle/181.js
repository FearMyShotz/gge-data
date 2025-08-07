Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./18.js");
var d = require("./2146.js");
var p = require("./22.js");
var h = require("./4.js");
var g = require("./165.js");
var C = require("./142.js");
var _ = require("./97.js");
var m = require("./35.js");
var f = require("./510.js");
var O = require("./588.js");
var E = require("./318.js");
var y = function (e) {
  function ToolUnitVO() {
    var t = this;
    t.wallBonus = 0;
    t.gateBonus = 0;
    t.moatBonus = 0;
    t.pointBonus = 0;
    t.reputationBonus = 0;
    t.defRangeBonus = 0;
    t.defMeleeBonus = 0;
    t.offRangeBonus = 0;
    t.offMeleeBonus = 0;
    t.khanTabletBonus = 0;
    t.samuraiBonus = 0;
    t._amountPerWave = 0;
    t.numberofDolls = 0;
    t.dollWod = 0;
    t.fameBonus = 0;
    t.xpBonus = 0;
    t.canBeUsedToAttackNPC = false;
    t.c1Bonus = 0;
    t.allianceCoinBonus = 0;
    t.allianceTokenBonus = 0;
    t.rageBonus = 0;
    t.khanMedalBonus = 0;
    t.pearlBooster = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(ToolUnitVO, e);
  ToolUnitVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this.wallBonus = parseInt(p.CastleXMLUtils.getValueOrDefault("wallBonus", t, "0")) * 0.01;
    this.gateBonus = parseInt(p.CastleXMLUtils.getValueOrDefault("gateBonus", t, "0")) * 0.01;
    this.moatBonus = parseInt(p.CastleXMLUtils.getValueOrDefault("moatBonus", t, "0")) * 0.01;
    this.pointBonus = parseInt(p.CastleXMLUtils.getValueOrDefault("pointBonus", t, "0")) * 0.01;
    this.reputationBonus = parseInt(p.CastleXMLUtils.getValueOrDefault("reputationBonus", t, "0")) * 0.01;
    this.defRangeBonus = parseInt(p.CastleXMLUtils.getValueOrDefault("defRangeBonus", t, "0")) * 0.01;
    this.defMeleeBonus = parseInt(p.CastleXMLUtils.getValueOrDefault("defMeleeBonus", t, "0")) * 0.01;
    this.offRangeBonus = parseInt(p.CastleXMLUtils.getValueOrDefault("offRangeBonus", t, "0")) * 0.01;
    this.offMeleeBonus = parseInt(p.CastleXMLUtils.getValueOrDefault("offMeleeBonus", t, "0")) * 0.01;
    this.attackType = String(p.CastleXMLUtils.getValueOrDefault("typ", t, "0", true));
    this.numberofDolls = parseInt(p.CastleXMLUtils.getValueOrDefault("numberofDolls", t, "0"));
    this.dollWod = parseInt(p.CastleXMLUtils.getValueOrDefault("dollWod", t, "0"));
    this.xpBonus = parseInt(p.CastleXMLUtils.getValueOrDefault("xpBonus", t, "0")) * 0.01;
    this.slotTypes = p.CastleXMLUtils.getValueOrDefault("slotTypes", t, "", true).split(",");
    this.fameBonus = parseInt(p.CastleXMLUtils.getValueOrDefault("fameBonus", t, "0")) * 0.01;
    this.canBeUsedToAttackNPC = parseInt(p.CastleXMLUtils.getValueOrDefault("canBeUsedToAttackNPC", t, "1")) == 1;
    this._amountPerWave = parseInt(p.CastleXMLUtils.getValueOrDefault("amountPerWave", t, "-1"));
    this.c1Bonus = parseInt(p.CastleXMLUtils.getValueOrDefault("c1Bonus", t, "0")) * 0.01;
    this.rageBonus = parseInt(p.CastleXMLUtils.getValueOrDefault("ragePointBonus", t, "0")) * 0.01;
    this.khanMedalBonus = parseInt(p.CastleXMLUtils.getValueOrDefault("khanMedalBooster", t, "0")) * 0.01;
    this.khanTabletBonus = parseInt(p.CastleXMLUtils.getValueOrDefault("khanTabletBooster", t, "0")) * 0.01;
    this.samuraiBonus = parseInt(p.CastleXMLUtils.getValueOrDefault("samuraiTokenBooster", t, "0")) * 0.01;
    this.allianceCoinBonus = parseInt(p.CastleXMLUtils.getValueOrDefault("royalCapitalCoinBooster", t, "0")) * 0.01;
    this.allianceTokenBonus = parseInt(p.CastleXMLUtils.getValueOrDefault("royalCapitalTokenBooster", t, "0")) * 0.01;
    this.pearlBooster = parseInt(p.CastleXMLUtils.getValueOrDefault("pearlBooster", t, "0")) * 0.01;
    this._effectsString = p.CastleXMLUtils.getStringAttribute("effects", t);
  };
  ToolUnitVO.prototype.getVisualClassName = function () {
    var t = e.prototype.getVisualClassName.call(this);
    if (o.BasicModel.basicLoaderData.isItemAssetVersioned(t)) {
      return t;
    } else {
      return "Unknown_Unit_Tools";
    }
  };
  ToolUnitVO.prototype.isToolForSlotType = function (e) {
    if (this.slotTypes != null) {
      for (var t = 0, i = this.slotTypes; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n == e) {
          return true;
        }
      }
    }
    return false;
  };
  Object.defineProperty(ToolUnitVO.prototype, "unitCategory", {
    get: function () {
      return u.ClientConstCastle.UNIT_CATEGORY_TOOLS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.BasicUnitVO.prototype, "unitCategory").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ToolUnitVO.prototype.requestInstantBuy = function (e, t, i, n, o = -1) {
    h.CastleModel.smartfoxClient.sendCommandVO(new d.C2SDefenceInstantBuyToolVO(this.wodId, e, t, i, n, o));
  };
  ToolUnitVO.prototype.getBonusString = function (e = 0) {
    if (this.effectTypes.length) {
      var t;
      var i = this.effectTypes[e];
      t = i.hasAbsoluteBonus ? this.isPositiveEffect(i) ? a.GenericTextIds.VALUE_NOMINAL_ADD : a.GenericTextIds.VALUE_NOMINAL_SUBTRACT : this.isPositiveEffect(i) ? a.GenericTextIds.VALUE_PERCENTAGE_ADD : a.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT;
      return new l.LocalizedTextVO(t, [this.getDisplayedBonusByEffect(i)]);
    }
    if (this.numberofDolls > 0) {
      return new l.LocalizedTextVO(a.GenericTextIds.VALUE_NOMINAL_ADD, [this.numberofDolls]);
    } else if (this.isSlowDownTool()) {
      return new l.LocalizedTextVO(this.unitSpeed.toString());
    } else {
      return null;
    }
  };
  ToolUnitVO.prototype.isPositiveEffect = function (e) {
    switch (e) {
      case E.ToolEffectType.OFF_MELEE_BONUS:
      case E.ToolEffectType.OFF_RANGE_BONUS:
        return this.attackType == u.ClientConstCastle.ATTACK_TOOL;
      case E.ToolEffectType.WALL_BONUS:
      case E.ToolEffectType.GATE_BONUS:
      case E.ToolEffectType.MOAT_BONUS:
      case E.ToolEffectType.DEF_MELEE_BONUS:
      case E.ToolEffectType.DEF_RANGE_BONUS:
        return this.attackType == u.ClientConstCastle.DEFENSE_TOOL;
    }
    return true;
  };
  ToolUnitVO.prototype.getDisplayedBonusByEffect = function (e, t = 1) {
    if (e.hasAbsoluteBonus) {
      return c.int(this.getBonusByEffect(e) * t);
    } else {
      return Math.round(this.getBonusByEffect(e) * 100 * t);
    }
  };
  ToolUnitVO.prototype.getBonusByEffect = function (e) {
    switch (e) {
      case E.ToolEffectType.WALL_BONUS:
        return this.wallBonus;
      case E.ToolEffectType.GATE_BONUS:
        return this.gateBonus;
      case E.ToolEffectType.MOAT_BONUS:
        return this.moatBonus;
      case E.ToolEffectType.POINT_BONUS:
        return this.pointBonus;
      case E.ToolEffectType.REPUTATION_BONUS:
        return this.reputationBonus;
      case E.ToolEffectType.DEF_RANGE_BONUS:
        return this.defRangeBonus;
      case E.ToolEffectType.DEF_MELEE_BONUS:
        return this.defMeleeBonus;
      case E.ToolEffectType.OFF_RANGE_BONUS:
        return this.offRangeBonus;
      case E.ToolEffectType.OFF_MELEE_BONUS:
        return this.offMeleeBonus;
      case E.ToolEffectType.KHAN_TABLET_BONUS:
        return this.khanTabletBonus;
      case E.ToolEffectType.SAMURAI_BONUS:
        return this.samuraiBonus;
      case E.ToolEffectType.ALLIANCE_CITY_COIN_BONUS:
        return this.allianceCoinBonus;
      case E.ToolEffectType.ALLIANCE_CITY_TOKEN_BONUS:
        return this.allianceTokenBonus;
      case E.ToolEffectType.XP_BONUS:
        return this.xpBonus;
      case E.ToolEffectType.LOOT_BONUS:
        return this.lootValue;
      case E.ToolEffectType.FAME_BONUS:
        return this.fameBonus;
      case E.ToolEffectType.C1_BONUS:
        return this.c1Bonus;
      case E.ToolEffectType.KHAN_MEDAL_BONUS:
        return this.khanMedalBonus;
      case E.ToolEffectType.PEARL_BONUS:
        return this.pearlBooster;
      case E.ToolEffectType.RAGE_BONUS:
        return this.rageBonus;
    }
    if (this.effects.length > 0) {
      for (var t = 0, i = this.effects; t < i.length; t++) {
        var n = i[t];
        if (n.effect.effectType.type.mappedToolEffectType == e) {
          if (e.hasAbsoluteBonus) {
            return this.getEffectValue(n.effect.effectType.type).strength;
          } else {
            return this.getEffectValue(n.effect.effectType.type).strength * 0.01;
          }
        }
      }
    }
    return 0;
  };
  Object.defineProperty(ToolUnitVO.prototype, "effectTypes", {
    get: function () {
      var e = this;
      if (this._effectTypes == null) {
        this._effectTypes = [];
        if (this.wallBonus) {
          this._effectTypes.push(E.ToolEffectType.WALL_BONUS);
        }
        if (this.gateBonus) {
          this._effectTypes.push(E.ToolEffectType.GATE_BONUS);
        }
        if (this.moatBonus) {
          this._effectTypes.push(E.ToolEffectType.MOAT_BONUS);
        }
        if (this.pointBonus) {
          this._effectTypes.push(E.ToolEffectType.POINT_BONUS);
        }
        if (this.reputationBonus) {
          this._effectTypes.push(E.ToolEffectType.REPUTATION_BONUS);
        }
        if (this.defRangeBonus) {
          this._effectTypes.push(E.ToolEffectType.DEF_RANGE_BONUS);
        }
        if (this.defMeleeBonus) {
          this._effectTypes.push(E.ToolEffectType.DEF_MELEE_BONUS);
        }
        if (this.offRangeBonus) {
          this._effectTypes.push(E.ToolEffectType.OFF_RANGE_BONUS);
        }
        if (this.offMeleeBonus) {
          this._effectTypes.push(E.ToolEffectType.OFF_MELEE_BONUS);
        }
        if (this.khanTabletBonus) {
          this._effectTypes.push(E.ToolEffectType.KHAN_TABLET_BONUS);
        }
        if (this.samuraiBonus) {
          this._effectTypes.push(E.ToolEffectType.SAMURAI_BONUS);
        }
        if (this.allianceCoinBonus) {
          this._effectTypes.push(E.ToolEffectType.ALLIANCE_CITY_COIN_BONUS);
        }
        if (this.allianceTokenBonus) {
          this._effectTypes.push(E.ToolEffectType.ALLIANCE_CITY_TOKEN_BONUS);
        }
        if (this.c1Bonus) {
          this._effectTypes.push(E.ToolEffectType.C1_BONUS);
        }
        if (this.xpBonus) {
          this._effectTypes.push(E.ToolEffectType.XP_BONUS);
        }
        if (this.lootValue) {
          this._effectTypes.push(E.ToolEffectType.LOOT_BONUS);
        }
        if (this.fameBonus) {
          this._effectTypes.push(E.ToolEffectType.FAME_BONUS);
        }
        if (this.khanMedalBonus) {
          this._effectTypes.push(E.ToolEffectType.KHAN_MEDAL_BONUS);
        }
        if (this.pearlBooster) {
          this._effectTypes.push(E.ToolEffectType.PEARL_BONUS);
        }
        if (this.rageBonus) {
          this._effectTypes.push(E.ToolEffectType.RAGE_BONUS);
        }
        if (this.effects.length > 0) {
          this.effects.forEach(function (t) {
            return e._effectTypes.push(t.effect.effectType.type.mappedToolEffectType);
          });
        }
      }
      return this._effectTypes;
    },
    enumerable: true,
    configurable: true
  });
  ToolUnitVO.prototype.getTooltipString = function (e = 1, t = ToolUnitVO.ALL_EFFECTS) {
    if (this.effectTypes.length > 0) {
      var i = 0;
      var n = 0;
      if (t == ToolUnitVO.ALL_EFFECTS) {
        i = 0;
        n = c.int(this.effectTypes.length - 1);
      } else {
        i = t;
        n = t;
      }
      var o = "";
      var a = false;
      for (var s = i; s <= n; s++) {
        var l;
        var u = this.effectTypes[s];
        l = u.hasAbsoluteBonus ? this.isPositiveEffect(u) ? "xFlat_Bonus_on" : "xFlat_Malus_on" : this.isPositiveEffect(u) ? "xPercent_Bonus_on_new" : "xPercent_Malus_on_new";
        if (a) {
          o += "\n";
        }
        a = true;
        o += r.Localize.text(l, [r.Localize.text(u.tooltipTextId), this.getDisplayedBonusByEffect(u, e)]);
      }
      return o;
    }
    if (this.isSlowDownTool()) {
      return r.Localize.text("light_and_heavystone_tooltip", [this.unitSpeed.toString()]);
    } else {
      return r.Localize.text("effect");
    }
  };
  Object.defineProperty(ToolUnitVO.prototype, "hasLimitedAmountPerWave", {
    get: function () {
      return this.amountPerWave > -1;
    },
    enumerable: true,
    configurable: true
  });
  ToolUnitVO.prototype.getInstantBuyInfoByUnitsVO = function (e) {
    var t = new O.InstantBuyInfoVO();
    var i = e.unlockedTools;
    if (this.costC2 > 0 && (t.isVisible = true, i != null)) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.wodId == this.wodId) {
          t.isEnabled = true;
          break;
        }
      }
    }
    if (t.isVisible == 1 && !t.isEnabled) {
      if (e.getAssociatedEventPackage(this._wodId) != null) {
        t.isEnabled = true;
      }
    }
    t.toolTip = t.isEnabled ? "dialog_fight_instantBuy" : this.getRequiredBuildingString();
    return t;
  };
  ToolUnitVO.prototype.isSlowDownTool = function () {
    return this._type == "HeavyStone" || this._type == "LightStone" || this._type == "BerimondAntiBoost";
  };
  ToolUnitVO.prototype.getAbsoluteBoostEffectType = function () {
    return m.EffectTypeEnum.EFFECT_TYPE_TOOL_PRODUCTION_TIME_BONUS;
  };
  ToolUnitVO.prototype.getCost = function (e) {
    var t = this.isOffensive ? _.CastleEffectEnum.REDUCEOFFENSIVETOOLSCOSTS : _.CastleEffectEnum.REDUCEDEFENSIVETOOLSCOSTS;
    var i = e.type != b.CollectableEnum.C2 ? Math.max(1 - h.CastleModel.areaData.activeConstructionItems.getConstructionItemEffectValue(t) / 100, 0) : 1;
    var n = c.int(this.isOnTempServer && e.type == b.CollectableEnum.C2 ? this.costC2 : this.costs.getAmountOrDefaultByTypeVO(e));
    return Math.round(n * i);
  };
  ToolUnitVO.prototype.getBoostedRecruitmentTime = function (e = 1) {
    var t = c.int(h.CastleModel.areaData.activeAreaInfo.areaType);
    var i = c.int(h.CastleModel.areaData.activeArea.spaceId);
    var n = m.EffectTypeEnum.EFFECT_TYPE_TOOL_PRODUCTION_SPEED_BOOST;
    var o = c.int(D.CastleTitleSystemHelper.returnTitleEffectValue(n, this.wodId).getValueforWodId(this.wodId));
    o += c.int(h.CastleModel.researchData.getResearchEffectValue(n, t, i, this.wodId).getValueforWodId(this.wodId));
    o += c.int(h.CastleModel.subscriptionData.getEffectValue(m.EffectTypeEnum.EFFECT_TYPE_TOOL_PRODUCTION_SPEED_BOOST));
    var a = c.int(this.getBaseRecruitmentTime());
    var s = h.CastleModel.militaryData.getBuildingProductionSpeed(this.unitBuildingType) + o;
    var r = Math.round(a / (s / 100));
    return c.int(this.getPremiumBoostedTime(s, a, e, r, 0));
  };
  Object.defineProperty(ToolUnitVO.prototype, "isRecruitTimeSubscriptionBuffed", {
    get: function () {
      return h.CastleModel.subscriptionData.getEffectValue(m.EffectTypeEnum.EFFECT_TYPE_TOOL_PRODUCTION_SPEED_BOOST) > 0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.BasicUnitVO.prototype, "isRecruitTimeSubscriptionBuffed").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolUnitVO.prototype, "applyFestival", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.BasicUnitVO.prototype, "applyFestival").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolUnitVO.prototype, "applyInstructor", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.BasicUnitVO.prototype, "applyInstructor").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolUnitVO.prototype, "hasPremiumBoostedTime", {
    get: function () {
      return h.CastleModel.userData.isInPeaceMode;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.BasicUnitVO.prototype, "hasPremiumBoostedTime").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolUnitVO.prototype, "effects", {
    get: function () {
      if (!this._effects) {
        this.parseEffects();
      }
      return this._effects;
    },
    enumerable: true,
    configurable: true
  });
  ToolUnitVO.prototype.getEffectValue = function (e, t = null) {
    if (t == null) {
      t = C.CastleEffectConditionVO.NULL_CONDITION;
    }
    var i = new e.valueClass();
    if (this.effects.length > 0) {
      this._effects.forEach(function (n) {
        if (n && n.matchesConditions(e, t.areaType, t.spaceId, t.wodId, t.otherPlayer)) {
          i.add(n.effectValue, null);
        }
      });
    }
    return i;
  };
  ToolUnitVO.prototype.parseEffects = function () {
    this._effects = [];
    if (!ToolUnitVO.effectMappingCreated) {
      ToolUnitVO.createEffectMapping();
    }
    if (this._effectsString != "") {
      for (var e = 0, t = this._effectsString.split(","); e < t.length; e++) {
        var i = t[e];
        if (i.length > 0) {
          var n = i.split("&");
          var o = h.CastleModel.effectsData.getEffectByID(parseInt(n[0]));
          var a = new g.BonusVO().parseFromValueString(o, n[1]);
          this._effects.push(a);
        }
      }
    }
  };
  ToolUnitVO.createEffectMapping = function () {
    ToolUnitVO.effectMappingCreated = true;
    m.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_WALL.mapToolEffectType(E.ToolEffectType.DEFENSE_UNIT_AMOUNT_WALL);
    m.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BONUS.mapToolEffectType(E.ToolEffectType.DEFENSE_BONUS);
    m.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_YARD.mapToolEffectType(E.ToolEffectType.DEFENSE_BOOST_YARD);
    m.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_YARD.mapToolEffectType(E.ToolEffectType.ATTACK_BOOST_YARD);
    m.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS.mapToolEffectType(E.ToolEffectType.ATTACK_BONUS);
    m.EffectTypeEnum.EFFECT_TYPE_ADDITIONAL_WAVE.mapToolEffectType(E.ToolEffectType.ADDITIONAL_WAVE);
    m.EffectTypeEnum.EFFECT_TYPE_KILL_ATTACKING_MELEE_TROOPS_YARD.mapToolEffectType(E.ToolEffectType.KILL_ATTACKING_MELEE_TROOPS_YARD);
    m.EffectTypeEnum.EFFECT_TYPE_KILL_ATTACKING_RANGED_TROOPS_YARD.mapToolEffectType(E.ToolEffectType.KILL_ATTACKING_RANGED_TROOPS_YARD);
    m.EffectTypeEnum.EFFECT_TYPE_KILL_ATTACKING_ANY_TROOPS_YARD.mapToolEffectType(E.ToolEffectType.KILL_ATTACKING_ANY_TROOPS_YARD);
    m.EffectTypeEnum.EFFECT_TYPE_KILL_DEFENDING_MELEE_TROOPS_YARD.mapToolEffectType(E.ToolEffectType.KILL_DEFENDING_MELEE_TROOPS_YARD);
    m.EffectTypeEnum.EFFECT_TYPE_KILL_DEFENDING_RANGED_TROOPS_YARD.mapToolEffectType(E.ToolEffectType.KILL_DEFENDING_RANGED_TROOPS_YARD);
    m.EffectTypeEnum.EFFECT_TYPE_KILL_DEFENDING_ANY_TROOPS_YARD.mapToolEffectType(E.ToolEffectType.KILL_DEFENDING_ANY_TROOPS_YARD);
  };
  Object.defineProperty(ToolUnitVO.prototype, "isSupportTool", {
    get: function () {
      return this.isOffenseSupportTool || this.isDefenceSupportTool;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolUnitVO.prototype, "isOffenseSupportTool", {
    get: function () {
      return this.slotTypes.indexOf(ToolUnitVO.SLOTTYPE_TOOL_SUPPORT_OFFENSE.toString()) != -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolUnitVO.prototype, "isDefenceSupportTool", {
    get: function () {
      return this.slotTypes.indexOf(ToolUnitVO.SLOTTYPE_TOOL_SUPPORT_DEFENSE.toString()) != -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolUnitVO.prototype, "amountPerWave", {
    get: function () {
      if (this.isOffenseSupportTool) {
        return 1;
      } else {
        return this._amountPerWave;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolUnitVO.prototype, "isBoosterTool", {
    get: function () {
      return this.effectTypes.some(function (e) {
        return E.ToolEffectType.BOOSTER_TYPES.indexOf(e) > -1;
      });
    },
    enumerable: true,
    configurable: true
  });
  ToolUnitVO.SLOTTYPE_SOLDIER = 0;
  ToolUnitVO.SLOTTYPE_TOOL_WALL = 1;
  ToolUnitVO.SLOTTYPE_TOOL_GATE = 2;
  ToolUnitVO.SLOTTYPE_TOOL_MOAT = 4;
  ToolUnitVO.SLOTTYPE_TOOL_KEEP = 5;
  ToolUnitVO.SLOTTYPE_TOOL_SUPPORT_DEFENSE = 6;
  ToolUnitVO.SLOTTYPE_TOOL_SUPPORT_OFFENSE = 10;
  ToolUnitVO.ALL_EFFECTS = -1;
  ToolUnitVO.effectMappingCreated = false;
  return ToolUnitVO;
}(f.BasicUnitVO);
exports.ToolUnitVO = y;
var b = require("./12.js");
var D = require("./106.js");
s.classImplementsInterfaces(y, "IInventoryVO", "IShopVO", "ICostVO");