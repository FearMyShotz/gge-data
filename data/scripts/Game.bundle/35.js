Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./84.js");
var r = require("./4.js");
var l = require("./1995.js");
var c = require("./1996.js");
var u = require("./1997.js");
var d = require("./1998.js");
var p = require("./1999.js");
var h = require("./2000.js");
var g = require("./2001.js");
var C = require("./2002.js");
var _ = require("./409.js");
var m = require("./2003.js");
var f = require("./2004.js");
var O = require("./855.js");
var E = require("./2005.js");
var y = function (e) {
  function EffectTypeEnum(t, i = null, n = null) {
    var s = e.call(this, t.toString(), o.BasicEnum.instantiationKey) || this;
    s._id = 0;
    s._id = t;
    s._valueClass = i || _.EffectValueSimple;
    s._simpleValueTextID = n || a.GenericTextIds.VALUE_PERCENTAGE_ADD;
    return s;
  }
  n.__extends(EffectTypeEnum, e);
  Object.defineProperty(EffectTypeEnum.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectTypeEnum.prototype, "valueClass", {
    get: function () {
      return this._valueClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectTypeEnum.prototype, "simpleValueTextID", {
    get: function () {
      return this._simpleValueTextID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectTypeEnum.prototype, "mappedToolEffectType", {
    get: function () {
      return this._mappedToolEffectType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectTypeEnum.prototype, "simpleEffectIconClass", {
    get: function () {
      if (!EffectTypeEnum.simpleIconsInitialized) {
        EffectTypeEnum.__initializeSimpleEffectIcons();
        EffectTypeEnum.simpleIconsInitialized = true;
      }
      if (this == EffectTypeEnum.EFFECT_TYPE_BUILDING_XP_BOOST || this == EffectTypeEnum.EFFECT_TYPE_BATTLE_XP_BOOST || this == EffectTypeEnum.EFFECT_TYPE_BATTLE_EXP_BONUS) {
        if (r.CastleModel.userData.level < 70) {
          return Library.CastleInterfaceElements_Icons.Icon_XP_Big_Bonus;
        } else {
          return Library.CastleInterfaceElements_Icons.Icon_XP_Legend_Big_Bonus;
        }
      } else {
        return this._simpleEffectIconClass;
      }
    },
    set: function (e) {
      this._simpleEffectIconClass = e;
    },
    enumerable: true,
    configurable: true
  });
  EffectTypeEnum.getByID = function (e) {
    return this.getByProperty(EffectTypeEnum, "id", e, EffectTypeEnum.EFFECT_TYPE_UNKNOWN);
  };
  EffectTypeEnum.prototype.mapToolEffectType = function (e) {
    this._mappedToolEffectType = e;
  };
  EffectTypeEnum.__initialize_static_members = function () {
    EffectTypeEnum.EFFECT_TYPE_UNKNOWN = new EffectTypeEnum(-1);
    EffectTypeEnum.EFFECT_TYPE_FAME_DEFENSE_BONUS = new EffectTypeEnum(0);
    EffectTypeEnum.EFFECT_TYPE_CONQUER_SPEED_BONUS = new EffectTypeEnum(1);
    EffectTypeEnum.EFFECT_TYPE_LOOT_REDUCTION = new EffectTypeEnum(2);
    EffectTypeEnum.EFFECT_TYPE_PERCEPTION_BONUS = new EffectTypeEnum(3);
    EffectTypeEnum.EFFECT_TYPE_FIRE_BRIGADE_BOOST = new EffectTypeEnum(4);
    EffectTypeEnum.EFFECT_TYPE_OCCUPATION_TIME_REDUCTION = new EffectTypeEnum(5);
    EffectTypeEnum.EFFECT_TYPE_WALL_BONUS = new EffectTypeEnum(6);
    EffectTypeEnum.EFFECT_TYPE_GATE_BONUS = new EffectTypeEnum(7);
    EffectTypeEnum.EFFECT_TYPE_MOAT_BONUS = new EffectTypeEnum(8);
    EffectTypeEnum.EFFECT_TYPE_MELEE_BONUS = new EffectTypeEnum(9);
    EffectTypeEnum.EFFECT_TYPE_RANGE_BONUS = new EffectTypeEnum(10);
    EffectTypeEnum.EFFECT_TYPE_NPC_DEFENSE_BONUS = new EffectTypeEnum(11);
    EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_WALL = new EffectTypeEnum(12);
    EffectTypeEnum.EFFECT_TYPE_FAME_OFFENSE_BONUS = new EffectTypeEnum(13);
    EffectTypeEnum.EFFECT_TYPE_HONOR_BONUS = new EffectTypeEnum(14);
    EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS = new EffectTypeEnum(15);
    EffectTypeEnum.EFFECT_TYPE_LOOT_BONUS = new EffectTypeEnum(16);
    EffectTypeEnum.EFFECT_TYPE_STEALTH_BONUS = new EffectTypeEnum(17);
    EffectTypeEnum.EFFECT_TYPE_FIRE_BOOST = new EffectTypeEnum(18);
    EffectTypeEnum.EFFECT_TYPE_WALL_REDUCTION = new EffectTypeEnum(19);
    EffectTypeEnum.EFFECT_TYPE_GATE_REDUCTION = new EffectTypeEnum(20);
    EffectTypeEnum.EFFECT_TYPE_MOAT_REDUCTION = new EffectTypeEnum(21);
    EffectTypeEnum.EFFECT_TYPE_MAGIC_FIND_BONUS = new EffectTypeEnum(22);
    EffectTypeEnum.EFFECT_TYPE_OFFENSIVE_MELEE_BONUS = new EffectTypeEnum(23);
    EffectTypeEnum.EFFECT_TYPE_OFFENSIVE_RANGE_BONUS = new EffectTypeEnum(24);
    EffectTypeEnum.EFFECT_TYPE_SMASH_CHANCE = new EffectTypeEnum(25);
    EffectTypeEnum.EFFECT_TYPE_TRAVEL_COST_REDUCTION = new EffectTypeEnum(26);
    EffectTypeEnum.EFFECT_TYPE_COOLDOWN_REDUCTION = new EffectTypeEnum(27);
    EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_FLANK = new EffectTypeEnum(28);
    EffectTypeEnum.EFFECT_TYPE_SKIN = new EffectTypeEnum(29);
    EffectTypeEnum.EFFECT_TYPE_SKIN_BARON = new EffectTypeEnum(30);
    EffectTypeEnum.EFFECT_TYPE_DEFENSE_BONUS = new EffectTypeEnum(31);
    EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_YARD = new EffectTypeEnum(32);
    EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_YARD = new EffectTypeEnum(33);
    EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_FRONT = new EffectTypeEnum(34);
    EffectTypeEnum.EFFECT_TYPE_HIDEOUT_CAPACITY = new EffectTypeEnum(35);
    EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS = new EffectTypeEnum(36);
    EffectTypeEnum.EFFECT_TYPE_LOOT_CAPACITY = new EffectTypeEnum(37);
    EffectTypeEnum.EFFECT_TYPE_RETURN_TRAVEL_BOOST = new EffectTypeEnum(38);
    EffectTypeEnum.EFFECT_TYPE_SUPPORT_SPEED_BONUS = new EffectTypeEnum(39);
    EffectTypeEnum.EFFECT_TYPE_STATIONING_SPEED_BONUS = new EffectTypeEnum(40);
    EffectTypeEnum.EFFECT_TYPE_STATIONING_TRAVEL_COST_REDUCTION = new EffectTypeEnum(41);
    EffectTypeEnum.EFFECT_TYPE_SUPPORT_TRAVEL_COST_REDUCTION = new EffectTypeEnum(42);
    EffectTypeEnum.EFFECT_TYPE_TRAVEL_COST_REDUCTION_PVP = new EffectTypeEnum(43);
    EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS_PVP = new EffectTypeEnum(44);
    EffectTypeEnum.EFFECT_TYPE_RETURN_TRAVEL_BOOST_PVP = new EffectTypeEnum(45);
    EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_WALL_P_V_P = new EffectTypeEnum(46);
    EffectTypeEnum.EFFECT_TYPE_DEFENSE_SUPPORT_UNITS = new EffectTypeEnum(47, c.EquippableEffectValueSupportUnits, a.GenericTextIds.VALUE_NOMINAL_ADD);
    EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS = new EffectTypeEnum(48);
    EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_FRONT = new EffectTypeEnum(49);
    EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_FLANK = new EffectTypeEnum(50);
    EffectTypeEnum.EFFECT_TYPE_ATTACK_SUPPORT_UNITS = new EffectTypeEnum(51, c.EquippableEffectValueSupportUnits, a.GenericTextIds.VALUE_NOMINAL_ADD);
    EffectTypeEnum.EFFECT_TYPE_RESOURCE_DEPOSIT_BOOST = new EffectTypeEnum(52);
    EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_FRONT = new EffectTypeEnum(53);
    EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_FLANK = new EffectTypeEnum(54);
    EffectTypeEnum.EFFECT_TYPE_MEMBER = new EffectTypeEnum(56);
    EffectTypeEnum.EFFECT_ENABLE_BUILDINGS = new EffectTypeEnum(57, h.EffectValueIdList);
    EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_COUNT_WALL = new EffectTypeEnum(58, null, a.GenericTextIds.VALUE_NOMINAL_ADD);
    EffectTypeEnum.EFFECT_TYPE_ALLIANCE_CITY_WALL_LEVEL = new EffectTypeEnum(60);
    EffectTypeEnum.EFFECT_TYPE_ALLIANCE_CITY_GATE_LEVEL = new EffectTypeEnum(67);
    EffectTypeEnum.EFFECT_TYPE_ALLIANCE_CITY_MOAT_LEVEL = new EffectTypeEnum(68);
    EffectTypeEnum.EFFECT_TYPE_ALLIANCE_CITY_TOOL_IDS = new EffectTypeEnum(61, m.EffectValueTools);
    EffectTypeEnum.EFFECT_TYPE_FOOD_PRODUCTION_BONUS = new EffectTypeEnum(69, null, a.GenericTextIds.VALUE_NOMINAL_ADD);
    EffectTypeEnum.EFFECT_TYPE_ROYAL_LOOT_BONUS_ALLIANCE_CITY_COINS = new EffectTypeEnum(64);
    EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE = new EffectTypeEnum(70, O.EffectValueWodID);
    EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST = new EffectTypeEnum(71, O.EffectValueWodID);
    EffectTypeEnum.EFFECT_TYPE_TOOL_PRODUCTION_SPEED_BOOST = new EffectTypeEnum(72, O.EffectValueWodID);
    EffectTypeEnum.EFFECT_TYPE_SPY_COUNT_BOOST = new EffectTypeEnum(73);
    EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BOOST = new EffectTypeEnum(74);
    EffectTypeEnum.EFFECT_TYPE_COIN_LOOT_BOOST = new EffectTypeEnum(75);
    EffectTypeEnum.EFFECT_TYPE_FACTION_POINT_GAIN_BOOST = new EffectTypeEnum(76);
    EffectTypeEnum.EFFECT_TYPE_ALLIANCE_FAME_GAIN_BOOST = new EffectTypeEnum(77);
    EffectTypeEnum.EFFECT_TYPE_AUXILIARY_CAPACITY_BOOST = new EffectTypeEnum(78);
    EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS = new EffectTypeEnum(79, h.EffectValueIdList);
    EffectTypeEnum.EFFECT_TYPE_FOOD_PRODUCTION_BOOST = new EffectTypeEnum(80);
    EffectTypeEnum.EFFECT_TYPE_ISLAND_KING = new EffectTypeEnum(81);
    EffectTypeEnum.EFFECT_TYPE_MORALE_BOOST = new EffectTypeEnum(82);
    EffectTypeEnum.EFFECT_TYPE_ENEMY_FAME_BOOST = new EffectTypeEnum(83);
    EffectTypeEnum.EFFECT_TYPE_ENEMY_LOOT_BOOST = new EffectTypeEnum(84);
    EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE_ALL = new EffectTypeEnum(85, null, a.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT);
    EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST_ALL = new EffectTypeEnum(86);
    EffectTypeEnum.EFFECT_TYPE_BATTLE_XP_BOOST = new EffectTypeEnum(88);
    EffectTypeEnum.EFFECT_TYPE_BUILDING_XP_BOOST = new EffectTypeEnum(89);
    EffectTypeEnum.EFFECT_TYPE_DISABLE_UNITS = new EffectTypeEnum(90, h.EffectValueIdList);
    EffectTypeEnum.EFFECT_TYPE_ESPIONAGE_SPEED_BOOST = new EffectTypeEnum(91);
    EffectTypeEnum.EFFECT_TYPE_WOOD_PRODUCTION_BOOST = new EffectTypeEnum(92);
    EffectTypeEnum.EFFECT_TYPE_STONE_PRODUCTION_BOOST = new EffectTypeEnum(93);
    EffectTypeEnum.EFFECT_TYPE_TAX_COLLECTOR_BOOST = new EffectTypeEnum(94);
    EffectTypeEnum.EFFECT_TYPE_TAX_COLLECTOR_NO_RUBIES = new EffectTypeEnum(95);
    EffectTypeEnum.EFFECT_TYPE_MARKET_CARRIAGE_CAPACITY_BOOST = new EffectTypeEnum(96);
    EffectTypeEnum.EFFECT_TYPE_AMOUNT_GUARDS_BOOST = new EffectTypeEnum(97);
    EffectTypeEnum.EFFECT_TYPE_AMOUNT_SPIES_BOOST = new EffectTypeEnum(98);
    EffectTypeEnum.EFFECT_TYPE_AMOUNT_PEASANT_BOOST = new EffectTypeEnum(99);
    EffectTypeEnum.EFFECT_TYPE_AMOUNT_POPULATION_BOOST = new EffectTypeEnum(100);
    EffectTypeEnum.EFFECT_TYPE_AMOUNT_POPULATION_BONUS = new EffectTypeEnum(101);
    EffectTypeEnum.EFFECT_TYPE_UNIT_SPEED_BONUS = new EffectTypeEnum(102, f.EffectValueUnitSpeedBoost);
    EffectTypeEnum.EFFECT_TYPE_TRAVEL_KINGDOM_TROOP_TIME_BOOST = new EffectTypeEnum(103);
    EffectTypeEnum.EFFECT_TYPE_TRAVEL_KINGDOM_MARKET_TIME_BOOST = new EffectTypeEnum(104);
    EffectTypeEnum.EFFECT_TYPE_FAME_BOOST = new EffectTypeEnum(105);
    EffectTypeEnum.EFFECT_TYPE_HOSPITAL_SLOT_BONUS = new EffectTypeEnum(106);
    EffectTypeEnum.EFFECT_TYPE_RESEARCH_BOOST = new EffectTypeEnum(107);
    EffectTypeEnum.EFFECT_TYPE_RESEARCH_BONUS = new EffectTypeEnum(108);
    EffectTypeEnum.EFFECT_TYPE_FORGE_COST_BOOST = new EffectTypeEnum(109);
    EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_TIME_BONUS = new EffectTypeEnum(110);
    EffectTypeEnum.EFFECT_TYPE_TOOL_PRODUCTION_TIME_BONUS = new EffectTypeEnum(111);
    EffectTypeEnum.EFFECT_TYPE_WOOD_PRODUCTION_BONUS = new EffectTypeEnum(112);
    EffectTypeEnum.EFFECT_TYPE_STONE_PRODUCTION_BONUS = new EffectTypeEnum(113);
    EffectTypeEnum.EFFECT_TYPE_LOOT_CAPACITY_BOOST = new EffectTypeEnum(114);
    EffectTypeEnum.EFFECT_TYPE_BATTLE_EXP_BONUS = new EffectTypeEnum(115);
    EffectTypeEnum.EFFECT_TYPE_ENABLE_CONSTRUCTIONITEM_RECIPE_ID = new EffectTypeEnum(116, h.EffectValueIdList);
    EffectTypeEnum.EFFECT_TYPE_TOOL_PRODUCTION_SPEED_BOOST_ALL = new EffectTypeEnum(117);
    EffectTypeEnum.EFFECT_TYPE_STRONGER_PEASANT = new EffectTypeEnum(118);
    EffectTypeEnum.EFFECT_TYPE_HOSPITAL_CAPACITY_BONUS = new EffectTypeEnum(119);
    EffectTypeEnum.EFFECT_TYPE_PREMIUM_UNIT_HEALING_BOOST = new EffectTypeEnum(120);
    EffectTypeEnum.EFFECT_TYPE_NON_PREMIUM_UNIT_HEALING_BOOST = new EffectTypeEnum(121);
    EffectTypeEnum.EFFECT_TYPE_TRANSPORT_TAX_DECREASE_BOOST = new EffectTypeEnum(122);
    EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BONUS = new EffectTypeEnum(123);
    EffectTypeEnum.EFFECT_TYPE_FREE_SKIP_BONUS = new EffectTypeEnum(124);
    EffectTypeEnum.EFFECT_TYPE_RESEARCH_COST_BONUS = new EffectTypeEnum(125);
    EffectTypeEnum.EFFECT_TYPE_BASE_RECRUITMENT_TIME_BOOST = new EffectTypeEnum(126);
    EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SLOT_BONUS = new EffectTypeEnum(127);
    EffectTypeEnum.EFFECT_TYPE_BUILDING_COSTS_BONUS = new EffectTypeEnum(128);
    EffectTypeEnum.EFFECT_TYPE_GLORY_DECAY = new EffectTypeEnum(129);
    EffectTypeEnum.EFFECT_TYPE_CHARM_BOOST = new EffectTypeEnum(130);
    EffectTypeEnum.EFFECT_TYPE_NOMAD_TABLET_BOOST = new EffectTypeEnum(131);
    EffectTypeEnum.EFFECT_TYPE_REPUTATION_BOOST = new EffectTypeEnum(132);
    EffectTypeEnum.EFFECT_TYPE_SAMURAI_TOKEN_BOOST = new EffectTypeEnum(133);
    EffectTypeEnum.EFFECT_TYPE_KHAN_MEDAL_BOOST = new EffectTypeEnum(134);
    EffectTypeEnum.EFFECT_TYPE_RAGE_BOOST = new EffectTypeEnum(135);
    EffectTypeEnum.EFFECT_TYPE_AUTO_SELL = new EffectTypeEnum(136);
    EffectTypeEnum.EFFECT_TYPE_AUTO_SPY = new EffectTypeEnum(137);
    EffectTypeEnum.EFFECT_TYPE_FOOD_CAPACITY_BONUS = new EffectTypeEnum(138, null, a.GenericTextIds.VALUE_NOMINAL_ADD);
    EffectTypeEnum.EFFECT_TYPE_COLLECTOR_BOOST = new EffectTypeEnum(139);
    EffectTypeEnum.EFFECT_TYPE_COAL_PRODUCTION_BOOST = new EffectTypeEnum(140);
    EffectTypeEnum.EFFECT_TYPE_OIL_PRODUCTION_BOOST = new EffectTypeEnum(141);
    EffectTypeEnum.EFFECT_TYPE_GLASS_PRODUCTION_BOOST = new EffectTypeEnum(142);
    EffectTypeEnum.EFFECT_TYPE_IRON_PRODUCTION_BOOST = new EffectTypeEnum(143);
    EffectTypeEnum.EFFECT_TYPE_TEMP_SERVER_COLLECTOR_BOOST = new EffectTypeEnum(144);
    EffectTypeEnum.EFFECT_TYPE_BUILD_SPEED_BOOST = new EffectTypeEnum(145);
    EffectTypeEnum.EFFECT_TYPE_CLASSIC_RESOURCE_PRODUCTION_BONUS = new EffectTypeEnum(146);
    EffectTypeEnum.EFFECT_TYPE_KINGDOM_RESOURCE_PRODUCTION_BONUS = new EffectTypeEnum(147);
    EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS_UNIT = new EffectTypeEnum(148, l.EffectValueMap);
    EffectTypeEnum.EFFECT_TYPE_SPEED_BOOST_UNIT = new EffectTypeEnum(149, l.EffectValueMap);
    EffectTypeEnum.EFFECT_TYPE_LOOT_VALUE_BOOST_UNIT = new EffectTypeEnum(150, l.EffectValueMap);
    EffectTypeEnum.EFFECT_TYPE_MARKET_CARRIAGE_CAPACITY_BONUS = new EffectTypeEnum(151, null, a.GenericTextIds.VALUE_NOMINAL_ADD);
    EffectTypeEnum.EFFECT_TYPE_FOOD_CONSUMPTION_REDUCTION = new EffectTypeEnum(152);
    EffectTypeEnum.EFFECT_TYPE_FAME_BOOST_UNIT = new EffectTypeEnum(154, l.EffectValueMap);
    EffectTypeEnum.EFFECT_TYPE_ADDITIONAL_WAVE = new EffectTypeEnum(156);
    EffectTypeEnum.EFFECT_TYPE_MEAD_PRODUCTION_INCREASE = new EffectTypeEnum(160, null, a.GenericTextIds.VALUE_NOMINAL_ADD);
    EffectTypeEnum.EFFECT_TYPE_UNBOOSTED_MEAD_PRODUCTION = new EffectTypeEnum(161, null, a.GenericTextIds.VALUE_NOMINAL_ADD);
    EffectTypeEnum.EFFECT_TYPE_HONEY_PRODUCTION_INCREASE = new EffectTypeEnum(162, null, a.GenericTextIds.VALUE_NOMINAL_ADD);
    EffectTypeEnum.EFFECT_TYPE_UNBOOSTED_HONEY_PRODUCTION = new EffectTypeEnum(163, null, a.GenericTextIds.VALUE_NOMINAL_ADD);
    EffectTypeEnum.EFFECT_TYPE_MEAD_PRODUCTION_BOOST = new EffectTypeEnum(164);
    EffectTypeEnum.EFFECT_TYPE_HONEY_PRODUCTION_BOOST = new EffectTypeEnum(165);
    EffectTypeEnum.EFFECT_TYPE_MEAD_STORAGE_BONUS = new EffectTypeEnum(166, null, a.GenericTextIds.VALUE_NOMINAL_ADD);
    EffectTypeEnum.EFFECT_TYPE_HONEY_STORAGE_BONUS = new EffectTypeEnum(167, null, a.GenericTextIds.VALUE_NOMINAL_ADD);
    EffectTypeEnum.EFFECT_TYPE_CURRENCY_LOOT_BOOST = new EffectTypeEnum(168, E.EffectValueCurrencyBoost);
    EffectTypeEnum.EFFECT_TYPE_ENABLE_EXPANSION = new EffectTypeEnum(169, h.EffectValueIdList);
    EffectTypeEnum.EFFECT_TYPE_ENABLE_CRAFTINGRECIPE = new EffectTypeEnum(170, h.EffectValueIdList);
    EffectTypeEnum.EFFECT_TYPE_UNLOCK_ABILITY = new EffectTypeEnum(178, h.EffectValueIdList);
    EffectTypeEnum.EFFECT_TYPE_KILL_ATTACKING_MELEE_TROOPS_YARD = new EffectTypeEnum(172);
    EffectTypeEnum.EFFECT_TYPE_KILL_ATTACKING_RANGED_TROOPS_YARD = new EffectTypeEnum(173);
    EffectTypeEnum.EFFECT_TYPE_KILL_ATTACKING_ANY_TROOPS_YARD = new EffectTypeEnum(174);
    EffectTypeEnum.EFFECT_TYPE_KILL_DEFENDING_MELEE_TROOPS_YARD = new EffectTypeEnum(175);
    EffectTypeEnum.EFFECT_TYPE_KILL_DEFENDING_RANGED_TROOPS_YARD = new EffectTypeEnum(176);
    EffectTypeEnum.EFFECT_TYPE_KILL_DEFENDING_ANY_TROOPS_YARD = new EffectTypeEnum(177);
    EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_REINFORCEMENT_BONUS = new EffectTypeEnum(179, null, a.GenericTextIds.VALUE_NOMINAL_ADD);
    EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_REINFORCEMENT_BOOST = new EffectTypeEnum(180);
    EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BONUS = new EffectTypeEnum(181, null, a.GenericTextIds.VALUE_NOMINAL_ADD);
    EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BOOST = new EffectTypeEnum(182);
    EffectTypeEnum.EFFECT_TYPE_ALLIANCE_DEFENSE_UNIT_AMOUNT_YARD_BONUS = new EffectTypeEnum(183, null, a.GenericTextIds.VALUE_NOMINAL_ADD);
    EffectTypeEnum.EFFECT_TYPE_ALLIANCE_DEFENSE_UNIT_AMOUNT_YARD_BOOST = new EffectTypeEnum(184);
    EffectTypeEnum.EFFECT_TYPE_AUTO_SKIP = new EffectTypeEnum(185);
    EffectTypeEnum.EFFECT_TYPE_REFINED_RESOURCE_PRODUCTION_BOOST = new EffectTypeEnum(186);
    EffectTypeEnum.EFFECT_TYPE_COMPONENT_PRODUCTION_BOOST = new EffectTypeEnum(187);
    EffectTypeEnum.CRAFTING_QUEUE_PRODUCTION_BOOST = new EffectTypeEnum(188, l.EffectValueMap);
    EffectTypeEnum.EFFECT_TYPE_BEEF_PRODUCTION_INCREASE = new EffectTypeEnum(189, null, a.GenericTextIds.VALUE_NOMINAL_ADD);
    EffectTypeEnum.EFFECT_TYPE_UNBOOSTED_BEEF_PRODUCTION = new EffectTypeEnum(190, null, a.GenericTextIds.VALUE_NOMINAL_ADD);
    EffectTypeEnum.EFFECT_TYPE_BEEF_PRODUCTION_BOOST = new EffectTypeEnum(191);
    EffectTypeEnum.EFFECT_TYPE_BEEF_STORAGE_BONUS = new EffectTypeEnum(192, null, a.GenericTextIds.VALUE_NOMINAL_ADD);
    EffectTypeEnum.EFFECT_TYPE_ENABLE_CRAFTINGRECIPE_GROUPS = new EffectTypeEnum(193, h.EffectValueIdList);
    EffectTypeEnum.EFFECT_TYPE_UNIT_WALL_ABSOLUTE_AMOUNT = new EffectTypeEnum(194, null, a.GenericTextIds.VALUE_NOMINAL_ADD);
    EffectTypeEnum.EFFECT_TYPE_CONSTRUCTION_QUEUE = new EffectTypeEnum(195, null, a.GenericTextIds.VALUE_NOMINAL_ADD);
    EffectTypeEnum.EFFECT_TYPE_SIMULTANEOUS_CONSTRUCTION = new EffectTypeEnum(196, null, a.GenericTextIds.VALUE_NOMINAL_ADD);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_POWER_SURGE = new EffectTypeEnum(1001);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_RISE_TO_THE_TASK = new EffectTypeEnum(1002);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_GIANT_SLAYER = new EffectTypeEnum(1003);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_AURA_OF_PROTECTION = new EffectTypeEnum(1004);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_INTIMIDATE = new EffectTypeEnum(1005);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_STRENGTH_IN_NUMBERS = new EffectTypeEnum(1006);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_HORDEBREAKER = new EffectTypeEnum(1007);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_OUTNUMBERED_NOT_OUTMATCHED = new EffectTypeEnum(1008);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_STAND_BEHIND_ME = new EffectTypeEnum(1009);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_LIVE_TO_FIGHT_ANOTHER = new EffectTypeEnum(1010);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_STRATEGICAL_RETREAT = new EffectTypeEnum(1011);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_REINFORCEMENTS = new EffectTypeEnum(1012);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_SABOTAGE = new EffectTypeEnum(1013);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_HEART_OF_A_WARRIOR = new EffectTypeEnum(1014);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_TOWERING_SHIELD = new EffectTypeEnum(1015);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_WALL_AMOUNT = new EffectTypeEnum(1016);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_NO_SOLDIER_LEFT_BEHIND = new EffectTypeEnum(1017);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_HEROIC_DEFENSE = new EffectTypeEnum(1018);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_MIND_CLARITY_EVEN_WAVE = new EffectTypeEnum(1019, C.EffectValueMindClarity);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_ASPECT_OF_THE_DRAGON = new EffectTypeEnum(1020);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_AYALA_FALCON = new EffectTypeEnum(1021, u.EffectValueAyalaFalcon);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_AMBUSH = new EffectTypeEnum(1022);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_LONGBOWS = new EffectTypeEnum(1023, g.EffectValueLongbows);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_VOLLEY = new EffectTypeEnum(1024);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_REINFORCED_ARROWS = new EffectTypeEnum(1025);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_PLUNDER = new EffectTypeEnum(1026, O.EffectValueWodID);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_YOUR_CUT = new EffectTypeEnum(1027);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_HIDDEN_TREASURES = new EffectTypeEnum(1028, p.EffectValueHiddenTreasures);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_GOLD_RUSH = new EffectTypeEnum(1029);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_VENGENCE = new EffectTypeEnum(1030);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_CANNON_BARRAGE = new EffectTypeEnum(1031);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_DRAGONBREATH = new EffectTypeEnum(1032);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_WINGS_WHIRLWIND = new EffectTypeEnum(1033, p.EffectValueHiddenTreasures);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_TAILWHIP = new EffectTypeEnum(1034);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_DRAGONSCALE_ARMOR = new EffectTypeEnum(1035, d.EffectValueDragonscaleArmor);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_DRAGON_CLAW_BLADES = new EffectTypeEnum(1036);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_TASTY_SNACK = new EffectTypeEnum(1037);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_EXHALTED = new EffectTypeEnum(1038);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_LASTING_WOUNDS = new EffectTypeEnum(1039);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_RANGE_REDUCTION = new EffectTypeEnum(1040);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_POISON_ARROWS = new EffectTypeEnum(1041);
    EffectTypeEnum.EFFECT_TYPE_ABILITY_VENGENCE_BOOST_YARD_DEF = new EffectTypeEnum(1042);
  };
  EffectTypeEnum.__initializeSimpleEffectIcons = function () {
    EffectTypeEnum.EFFECT_TYPE_FAME_DEFENSE_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Fame_Big;
    EffectTypeEnum.EFFECT_TYPE_CONQUER_SPEED_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_TravelTime;
    EffectTypeEnum.EFFECT_TYPE_LOOT_REDUCTION.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_LootPower;
    EffectTypeEnum.EFFECT_TYPE_PERCEPTION_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_google;
    EffectTypeEnum.EFFECT_TYPE_FIRE_BRIGADE_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_FireProtection;
    EffectTypeEnum.EFFECT_TYPE_OCCUPATION_TIME_REDUCTION.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Occupation_Time_Reduction;
    EffectTypeEnum.EFFECT_TYPE_WALL_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Defence;
    EffectTypeEnum.EFFECT_TYPE_GATE_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Gate;
    EffectTypeEnum.EFFECT_TYPE_MOAT_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Btn_Moat;
    EffectTypeEnum.EFFECT_TYPE_MELEE_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_DefenceMelee;
    EffectTypeEnum.EFFECT_TYPE_RANGE_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_DefenceRange;
    EffectTypeEnum.EFFECT_TYPE_NPC_DEFENSE_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_NPC_Defense_bonus;
    EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_WALL.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_defenseUnitAmountWall;
    EffectTypeEnum.EFFECT_TYPE_FAME_OFFENSE_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Fame_Big;
    EffectTypeEnum.EFFECT_TYPE_HONOR_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Honor;
    EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_TravelTime;
    EffectTypeEnum.EFFECT_TYPE_LOOT_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_LootPower;
    EffectTypeEnum.EFFECT_TYPE_STEALTH_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_google;
    EffectTypeEnum.EFFECT_TYPE_FIRE_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_FireBoost;
    EffectTypeEnum.EFFECT_TYPE_WALL_REDUCTION.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Defence;
    EffectTypeEnum.EFFECT_TYPE_GATE_REDUCTION.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Gate;
    EffectTypeEnum.EFFECT_TYPE_MOAT_REDUCTION.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Btn_Moat;
    EffectTypeEnum.EFFECT_TYPE_MAGIC_FIND_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_MagicFindBonus;
    EffectTypeEnum.EFFECT_TYPE_OFFENSIVE_MELEE_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_ToolCombatPowerMelee;
    EffectTypeEnum.EFFECT_TYPE_OFFENSIVE_RANGE_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_ToolCombatPowerRange;
    EffectTypeEnum.EFFECT_TYPE_SMASH_CHANCE.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Smash_Chance;
    EffectTypeEnum.EFFECT_TYPE_TRAVEL_COST_REDUCTION.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_TravelCostReduction;
    EffectTypeEnum.EFFECT_TYPE_COOLDOWN_REDUCTION.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_AttakCooldownReduction;
    EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_FLANK.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_UnitAmountFlank;
    EffectTypeEnum.EFFECT_TYPE_DEFENSE_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_defenseBonus;
    EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_YARD.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_DefenseBoostYard;
    EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_YARD.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_AttackBoostYard;
    EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_FRONT.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_UnitAmountFront;
    EffectTypeEnum.EFFECT_TYPE_HIDEOUT_CAPACITY.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_SaveStorage;
    EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_attackBonus;
    EffectTypeEnum.EFFECT_TYPE_LOOT_CAPACITY.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_LootPower;
    EffectTypeEnum.EFFECT_TYPE_RETURN_TRAVEL_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_ReturnSpeedBoost;
    EffectTypeEnum.EFFECT_TYPE_SUPPORT_SPEED_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_TravelTime;
    EffectTypeEnum.EFFECT_TYPE_STATIONING_SPEED_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_TravelTime;
    EffectTypeEnum.EFFECT_TYPE_STATIONING_TRAVEL_COST_REDUCTION.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_TravelCostReduction;
    EffectTypeEnum.EFFECT_TYPE_SUPPORT_TRAVEL_COST_REDUCTION.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_TravelCostReduction;
    EffectTypeEnum.EFFECT_TYPE_TRAVEL_COST_REDUCTION_PVP.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_TravelCostReduction;
    EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS_PVP.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_TravelTime;
    EffectTypeEnum.EFFECT_TYPE_RETURN_TRAVEL_BOOST_PVP.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_ReturnSpeedBoost;
    EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_WALL_P_V_P.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_defenseUnitAmountWall;
    EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_COUNT_WALL.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_defenseUnitAmountWall;
    EffectTypeEnum.EFFECT_TYPE_DEFENSE_SUPPORT_UNITS.simpleEffectIconClass = null;
    EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_FRONT.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Defense_Boost_Front;
    EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_FLANK.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Defense_Boost_Flank;
    EffectTypeEnum.EFFECT_TYPE_ATTACK_SUPPORT_UNITS.simpleEffectIconClass = null;
    EffectTypeEnum.EFFECT_TYPE_RESOURCE_DEPOSIT_BOOST.simpleEffectIconClass = null;
    EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_FRONT.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Attack_Boost_Front;
    EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_FLANK.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Attack_Boost_Flank;
    EffectTypeEnum.EFFECT_TYPE_COIN_LOOT_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Currency_Big;
    EffectTypeEnum.EFFECT_TYPE_BATTLE_XP_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_XP_Big;
    EffectTypeEnum.EFFECT_TYPE_FAME_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Fame_Big;
    EffectTypeEnum.EFFECT_TYPE_LOOT_CAPACITY_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_LootPower;
    EffectTypeEnum.EFFECT_TYPE_BATTLE_EXP_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_XP_Big;
    EffectTypeEnum.EFFECT_TYPE_NOMAD_TABLET_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_KhanTabletBoost;
    EffectTypeEnum.EFFECT_TYPE_SAMURAI_TOKEN_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_SamuraiBoost;
    EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS_UNIT.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_attackBonus;
    EffectTypeEnum.EFFECT_TYPE_SPEED_BOOST_UNIT.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_TravelTime;
    EffectTypeEnum.EFFECT_TYPE_LOOT_VALUE_BOOST_UNIT.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_LootPower;
    EffectTypeEnum.EFFECT_TYPE_FAME_BOOST_UNIT.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Fame_Big;
    EffectTypeEnum.EFFECT_TYPE_ADDITIONAL_WAVE.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_AdditionalWaves;
    EffectTypeEnum.EFFECT_TYPE_MARKET_CARRIAGE_CAPACITY_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Market_Carriage_Capacity;
    EffectTypeEnum.EFFECT_TYPE_MARKET_CARRIAGE_CAPACITY_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Market_Carriage_Capacity;
    EffectTypeEnum.EFFECT_TYPE_CLASSIC_RESOURCE_PRODUCTION_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Classsic_Resource_Rroduction_Bonus;
    EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_REINFORCEMENT_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Attack_Unit_Amount_Reinforcement;
    EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_REINFORCEMENT_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Attack_Unit_Amount_Reinforcement;
    EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements.Icon_UnitAmount_Keep;
    EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements.Icon_UnitAmount_Keep;
    EffectTypeEnum.EFFECT_TYPE_ALLIANCE_DEFENSE_UNIT_AMOUNT_YARD_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_AllianceDefenseUnitAmountYardBonus;
    EffectTypeEnum.EFFECT_TYPE_ALLIANCE_DEFENSE_UNIT_AMOUNT_YARD_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_AllianceDefenseUnitAmountYardBonus;
    EffectTypeEnum.EFFECT_TYPE_OIL_PRODUCTION_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Boost_Oliveoil;
    EffectTypeEnum.EFFECT_TYPE_GLASS_PRODUCTION_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Boost_Glass;
    EffectTypeEnum.EFFECT_TYPE_COAL_PRODUCTION_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Boost_Coal;
    EffectTypeEnum.EFFECT_TYPE_FOOD_PRODUCTION_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Boost_Food;
    EffectTypeEnum.EFFECT_TYPE_MEAD_PRODUCTION_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_MeadBoost;
    EffectTypeEnum.EFFECT_TYPE_UNBOOSTED_MEAD_PRODUCTION.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Mead_production;
    EffectTypeEnum.EFFECT_TYPE_FOOD_CAPACITY_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_FoodStorage;
    EffectTypeEnum.EFFECT_TYPE_IRON_PRODUCTION_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Boost_Iron;
    EffectTypeEnum.EFFECT_TYPE_STONE_PRODUCTION_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Boost_Stone;
    EffectTypeEnum.EFFECT_TYPE_WOOD_PRODUCTION_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Boost_Wood;
    EffectTypeEnum.EFFECT_TYPE_UNBOOSTED_HONEY_PRODUCTION.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_HoneyBoost;
    EffectTypeEnum.EFFECT_TYPE_HONEY_STORAGE_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_HoneyStorage_Bonus;
    EffectTypeEnum.EFFECT_TYPE_MEAD_STORAGE_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_MeadStorageBonus;
    EffectTypeEnum.EFFECT_TYPE_TOOL_PRODUCTION_TIME_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_ToolProductionBonus;
    EffectTypeEnum.EFFECT_TYPE_TOOL_PRODUCTION_SPEED_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_ToolProductionBoost;
    EffectTypeEnum.EFFECT_TYPE_TOOL_PRODUCTION_SPEED_BOOST_ALL.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_ToolProductionBoost;
    EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST_ALL.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_RecruitmentBoost;
    EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_RecruitmentBoost;
    EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE_ALL.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_recruitmentCostDecreaseAll;
    EffectTypeEnum.EFFECT_TYPE_FOOD_PRODUCTION_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Boost_Food;
    EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Market_Carriage_SpeedBonus;
    EffectTypeEnum.EFFECT_TYPE_BUILDING_XP_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_XP_Big_Bonus;
    EffectTypeEnum.CRAFTING_QUEUE_PRODUCTION_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_ToolProductionBoost;
    EffectTypeEnum.EFFECT_TYPE_BEEF_PRODUCTION_INCREASE.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Beef_production;
    EffectTypeEnum.EFFECT_TYPE_UNBOOSTED_BEEF_PRODUCTION.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_BeefBoost;
    EffectTypeEnum.EFFECT_TYPE_BEEF_PRODUCTION_BOOST.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_BeefBoost;
    EffectTypeEnum.EFFECT_TYPE_BEEF_STORAGE_BONUS.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_BeefStorage;
    EffectTypeEnum.EFFECT_TYPE_CONSTRUCTION_QUEUE.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_Crane;
    EffectTypeEnum.EFFECT_TYPE_SIMULTANEOUS_CONSTRUCTION.simpleEffectIconClass = Library.CastleInterfaceElements.Icon_SimultaneousConstruction;
    EffectTypeEnum.EFFECT_TYPE_UNIT_WALL_ABSOLUTE_AMOUNT.simpleEffectIconClass = Library.CastleInterfaceElements_Icons.Icon_AbsoluteWallCapacity;
  };
  EffectTypeEnum.simpleIconsInitialized = false;
  return EffectTypeEnum;
}(s.CastleEnum);
exports.EffectTypeEnum = y;
y.__initialize_static_members();