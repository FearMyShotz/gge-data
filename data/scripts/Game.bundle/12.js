Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./55.js");
var s = function (e) {
  function CollectableEnum(t, i = null, n = null) {
    var a = e.call(this, t, o.BasicEnum.instantiationKey) || this;
    a._dataClass = i;
    a._viewClass = n;
    a.addObjectToDic(CollectableEnum._listByName, t, a);
    if (i) {
      CollectableEnum._listByDataClass.set(i, a);
      if (i.SERVER_KEY) {
        a.addObjectToDic(CollectableEnum._listByServerKey, i.SERVER_KEY, a);
      }
      if (i.XML_KEY) {
        a.addObjectToDic(CollectableEnum._listByXmlKey, i.XML_KEY, a);
      }
    }
    return a;
  }
  n.__extends(CollectableEnum, e);
  CollectableEnum.getTypeByName = function (e) {
    var t = CollectableEnum._listByName.get(e);
    return t || CollectableEnum.UNKNOWN;
  };
  CollectableEnum.getTypeByServerKey = function (e) {
    var t = CollectableEnum._listByServerKey.get(e);
    return t || CollectableEnum.UNKNOWN;
  };
  CollectableEnum.getTypeByXmlKey = function (e) {
    var t = CollectableEnum._listByXmlKey.get(e);
    return t || CollectableEnum.UNKNOWN;
  };
  CollectableEnum.getTypeByDataClass = function (e) {
    var t = CollectableEnum._listByDataClass.get(e);
    return t || CollectableEnum.UNKNOWN;
  };
  CollectableEnum.prototype.addObjectToDic = function (e, t, i) {
    if (Array.isArray(t)) {
      var n = t;
      if (!n) {
        return;
      }
      for (var o = 0; o < n.length; ++o) {
        this.addObjectToDic(e, n[o], i);
      }
    } else if (typeof t == "string") {
      e.set(t, i);
      e.set(t.toLocaleLowerCase(), i);
      e.set(a.ClientConstUtils.capitalizeFirstLetter(t), i);
    }
  };
  Object.defineProperty(CollectableEnum.prototype, "serverKey", {
    get: function () {
      if (this.dataClass) {
        return this.dataClass.SERVER_KEY;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableEnum.prototype, "xmlKey", {
    get: function () {
      if (this.dataClass) {
        return this.dataClass.XML_KEY;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableEnum.prototype, "dataClass", {
    get: function () {
      return this._dataClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableEnum.prototype, "viewClass", {
    get: function () {
      return this._viewClass;
    },
    enumerable: true,
    configurable: true
  });
  CollectableEnum.__initialize_static_members = function () {
    CollectableEnum._listByName = new Map();
    CollectableEnum._listByServerKey = new Map();
    CollectableEnum._listByXmlKey = new Map();
    CollectableEnum._listByDataClass = new Map();
    CollectableEnum.UNKNOWN = new CollectableEnum("unknown");
    var e = require("./289.js").CollectableItemRelicVO;
    var t = require("./856.js").CollectableItemRelicVE;
    CollectableEnum.RELIC_EQUIPMENT = new CollectableEnum("relicEquipment", e, t);
    var n = require("./269.js").CollectableItemWoodVO;
    var o = require("./3217.js").CollectableItemWoodVE;
    CollectableEnum.WOOD = new CollectableEnum("wood", n, o);
    var a = require("./268.js").CollectableItemStoneVO;
    var s = require("./3218.js").CollectableItemStoneVE;
    CollectableEnum.STONE = new CollectableEnum("stone", a, s);
    var r = require("./453.js").CollectableItemFoodVO;
    var l = require("./3219.js").CollectableItemFoodVE;
    CollectableEnum.FOOD = new CollectableEnum("food", r, l);
    var c = require("./504.js").CollectableItemCoalVO;
    var u = require("./3220.js").CollectableItemCoalVE;
    CollectableEnum.COAL = new CollectableEnum("coal", c, u);
    var d = require("./507.js").CollectableItemOilVO;
    var p = require("./3221.js").CollectableItemOilVE;
    CollectableEnum.OIL = new CollectableEnum("oil", d, p);
    var h = require("./505.js").CollectableItemGlassVO;
    var g = require("./3222.js").CollectableItemGlassVE;
    CollectableEnum.GLASS = new CollectableEnum("glass", h, g);
    var C = require("./506.js").CollectableItemIronVO;
    var _ = require("./3223.js").CollectableItemIronVE;
    CollectableEnum.IRON = new CollectableEnum("iron", C, _);
    var m = require("./1012.js").CollectableItemAquamarineVO;
    var f = require("./3224.js").CollectableItemAquamarineVE;
    CollectableEnum.AQUAMARINE = new CollectableEnum("aquamarin", m, f);
    var O = require("./532.js").CollectableItemMeadVO;
    var E = require("./3225.js").CollectableItemMeadVE;
    CollectableEnum.MEAD = new CollectableEnum("mead", O, E);
    var y = require("./481.js").CollectableItemBeefVO;
    var b = require("./3226.js").CollectableItemBeefVE;
    CollectableEnum.BEEF = new CollectableEnum("beef", y, b);
    var D = require("./636.js").CollectableItemHoneyVO;
    var I = require("./3227.js").CollectableItemHoneyVE;
    CollectableEnum.HONEY = new CollectableEnum("honey", D, I);
    var T = require("./234.js").CollectableItemC1VO;
    var v = require("./3228.js").CollectableItemC1VE;
    CollectableEnum.C1 = new CollectableEnum("cash", T, v);
    var S = require("./128.js").CollectableItemC2VO;
    var A = require("./3229.js").CollectableItemC2VE;
    CollectableEnum.C2 = new CollectableEnum("gold", S, A);
    var L = require("./155.js").CollectableItemGenericCurrencyVO;
    var P = require("./3230.js").CollectableItemGenericCurrencyVE;
    CollectableEnum.GENERIC_CURRENCY = new CollectableEnum("genericCurrency", L, P);
    var M = require("./611.js").CollectableItemEffectVO;
    var R = require("./3231.js").CollectableItemEffectVE;
    CollectableEnum.EFFECTS = new CollectableEnum("effects", M, R);
    var V = require("./411.js").CollectableItemUnitVO;
    var x = require("./3232.js").CollectableItemUnitVE;
    CollectableEnum.UNITS = new CollectableEnum("units", V, x);
    var w = require("./860.js").CollectableItemPlagueDoctorVO;
    var B = require("./3233.js").CollectableItemPlagueDoctorVE;
    CollectableEnum.PLAGUE_DOCTORS = new CollectableEnum("plagueDoctors", w, B);
    var F = require("./687.js").CollectableItemEquipmentRarenessVO;
    var N = require("./3234.js").CollectableItemEquipmentRarenessVE;
    CollectableEnum.EQUIPMENT_RARENESS = new CollectableEnum("equipmentRandom", F, N);
    var k = require("./1618.js").CollectableItemEquipmentUniqueVO;
    var U = require("./1619.js").CollectableItemEquipmentUniqueVE;
    CollectableEnum.EQUIPMENT_UNIQUE = new CollectableEnum("equipmentUnique", k, U);
    var G = require("./1051.js").CollectableItemEquipmentUniqueEnchantedVO;
    var H = require("./3235.js").CollectableItemEquipmentUniqueEnchantedVE;
    CollectableEnum.EQUIPMENT_UNIQUE_ENCHANTED = new CollectableEnum("equipmentEnchanted", G, H);
    var j = require("./1178.js").CollectableItemHeroRandomVO;
    var W = require("./3236.js").CollectableItemHeroRandomVE;
    CollectableEnum.HERO_RANDOM = new CollectableEnum("heroRandom", j, W);
    var Y = require("./926.js").CollectableItemGemVO;
    var K = require("./3237.js").CollectableItemGemVE;
    CollectableEnum.GEM = new CollectableEnum("gem", Y, K);
    var z = require("./859.js").CollectableItemGemRandomVO;
    var q = require("./3238.js").CollectableItemGemRandomVE;
    CollectableEnum.GEM_RANDOM = new CollectableEnum("gemRandom", z, q);
    var X = require("./3239.js").CollectableItemBoosterVO;
    var Q = require("./3241.js").CollectableItemBoosterVE;
    CollectableEnum.BOOSTER = new CollectableEnum("booster", X, Q);
    var J = require("./3242.js").CollectableItemGloryBoosterVO;
    var Z = require("./3243.js").CollectableItemGloryBoosterVE;
    CollectableEnum.GLORY_BOOSTER = new CollectableEnum("gloryBooster", J, Z);
    var $ = require("./3244.js").CollectableItemXpBoosterVO;
    var ee = require("./3245.js").CollectableItemXpBoosterVE;
    CollectableEnum.XP_BOOSTER = new CollectableEnum("xpBooster", $, ee);
    var te = require("./3246.js").CollectableItemGallantryBoosterVO;
    var ie = require("./3247.js").CollectableItemGallantryBoosterVE;
    CollectableEnum.GALLANTRY_BOOSTER = new CollectableEnum("gallantryBooster", te, ie);
    var ne = require("./3248.js").CollectableItemKhanTabletBoosterVO;
    var oe = require("./3249.js").CollectableItemKhanTabletBoosterVE;
    CollectableEnum.KHAN_TABLET_BOOSTER = new CollectableEnum("khanTabletBooster", ne, oe);
    var ae = require("./3250.js").CollectableItemSamuraiBoosterVO;
    var se = require("./3251.js").CollectableItemSamuraiBoosterVE;
    CollectableEnum.SAMURAI_BOOSTER = new CollectableEnum("samuraiBooster", ae, se);
    var re = require("./3252.js").CollectableItemAllianceCoinBoosterVO;
    var le = require("./3253.js").CollectableItemAllianceCoinBoosterVE;
    CollectableEnum.ALLIANCE_COIN_BOOSTER = new CollectableEnum("allianceCoinBooster", re, le);
    var ce = require("./3254.js").CollectableItemLongTermPointEventBoosterVO;
    var ue = require("./3255.js").CollectableItemLongTermPointEventBoosterVE;
    CollectableEnum.LONG_TERM_POINT_EVENT_BOOSTER = new CollectableEnum("longTermPointEventBooster", ce, ue);
    var de = require("./3256.js").CollectableItemReputationBoosterVO;
    var pe = require("./3257.js").CollectableItemReputationBoosterVE;
    CollectableEnum.REPUTATION_BOOSTER = new CollectableEnum("reputatioPointBooster", de, pe);
    var he = require("./3258.js").CollectableItemRageBoosterVO;
    var ge = require("./3259.js").CollectableItemRageBoosterVE;
    CollectableEnum.RAGE_POINT_BOOSTER = new CollectableEnum("rageBooster", he, ge);
    var Ce = require("./3260.js").CollectableItemKahnMedalBoosterVO;
    var _e = require("./3261.js").CollectableItemKhanMedalBoosterVE;
    CollectableEnum.KHAN_MEDAL_POINT_BOOSTER = new CollectableEnum("khanMedalBooster", Ce, _e);
    var me = require("./1262.js").CollectableItemVipPointVO;
    var fe = require("./3262.js").CollectableItemVipPointVE;
    CollectableEnum.VIP_POINTS = new CollectableEnum("vipPoints", me, fe);
    var Oe = require("./1263.js").CollectableItemVipTimeVO;
    var Ee = require("./3263.js").CollectableItemVipTimeVE;
    CollectableEnum.VIP_TIME = new CollectableEnum("vipTime", Oe, Ee);
    var ye = require("./1180.js").CollectableItemXpVO;
    var be = require("./3264.js").CollectableItemXpVE;
    CollectableEnum.XP = new CollectableEnum("xp", ye, be);
    var De = require("./3265.js").CollectableItemSkipDiscountVO;
    var Ie = require("./3267.js").CollectableItemSkipDiscountVE;
    CollectableEnum.SKIP_DISCOUNT = new CollectableEnum("skipDiscount", De, Ie);
    var Te = require("./3268.js").CollectableItemExtinguishFireVO;
    var ve = require("./3269.js").CollectableItemExtinguishFireVE;
    CollectableEnum.EXTINGUISH_FIRE = new CollectableEnum("extinguishFire", Te, ve);
    var Se = require("./3270.js").CollectableItemAlienProtectionVO;
    var Ae = require("./3271.js").CollectableItemAlienProtectionVE;
    CollectableEnum.ALIEN_PROTECTION = new CollectableEnum("alienProtection", Se, Ae);
    var Le = require("./1053.js").CollectableItemDungeonProtectionVO;
    var Pe = require("./3272.js").CollectableItemDungeonProtectionVE;
    CollectableEnum.DUNGEON_PROTECTION = new CollectableEnum("dungeonProtectionTime", Le, Pe);
    var Me = require("./291.js").CollectableItemBuildingVO;
    var Re = require("./3273.js").CollectableItemBuildingVE;
    CollectableEnum.BUILDING = new CollectableEnum("building", Me, Re);
    var Ve = require("./3274.js").CollectableItemResourcePointVO;
    var xe = require("./3275.js").CollectableItemResourcePointVE;
    CollectableEnum.RESOURCE_POINTS = new CollectableEnum("resourcePoints", Ve, xe);
    var we = require("./3276.js").CollectableItemAchievementPointVO;
    var Be = require("./3277.js").CollectableItemAchievementPointVE;
    CollectableEnum.ACHIEVEMENT_POINTS = new CollectableEnum("achievementPoints", we, Be);
    var Fe = require("./3278.js").CollectableItemCrestSymbolVO;
    var Ne = require("./3279.js").CollectableItemCrestSymbolVE;
    CollectableEnum.CREST_SYMBOL = new CollectableEnum("crestSymbol", Fe, Ne);
    var ke = require("./337.js").CollectableItemConstructionItemVO;
    var Ue = require("./3280.js").CollectableItemConstructionItemVE;
    CollectableEnum.CONSTRUCTION_ITEM = new CollectableEnum("constructionItem", ke, Ue);
    var Ge = require("./3281.js").CollectableItemAllianceGiftVO;
    var He = require("./3282.js").CollectableItemAllianceGiftVE;
    CollectableEnum.ALLIANCE_GIFT = new CollectableEnum("allianceGift", Ge, He);
    var je = require("./3283.js").CollectableItemPermanentUnitSlotVO;
    var We = require("./3284.js").CollectableItemPermanentUnitSlotVE;
    CollectableEnum.PERMANENT_UNIT_SLOT = new CollectableEnum("permanentUnitSlot", je, We);
    var Ye = require("./3285.js").CollectableItemPermanentToolSlotVO;
    var Ke = require("./3286.js").CollectableItemPermanentToolSlotVE;
    CollectableEnum.PERMANENT_TOOL_SLOT = new CollectableEnum("permanentToolSlot", Ye, Ke);
    var ze = require("./1476.js").CollectableItemConstructionItemBlueprintVO;
    var qe = require("./3287.js").CollectableItemConstructionItemBlueprintVE;
    CollectableEnum.CONSTRUCTION_ITEM_BLUEPRINT = new CollectableEnum("constructionItemBlueprint", ze, qe);
    var Xe = require("./3288.js").CollectableItemMaterialBagVO;
    var Qe = require("./3289.js").CollectableItemMaterialBagVE;
    CollectableEnum.MATERIAL_BAG = new CollectableEnum("materialBag", Xe, Qe);
    var Je = require("./3293.js").CollectableItemPaymentDoublerVO;
    var Ze = require("./3294.js").CollectableItemPaymentDoublerVE;
    CollectableEnum.PAYMENT_DOUBLER = new CollectableEnum("paymentDoubler", Je, Ze);
    var $e = require("./3295.js").CollectableItemWarEffortPointsVO;
    var et = require("./3296.js").CollectableItemWarEffortPointsVE;
    CollectableEnum.WAR_EFFORT_POINTS = new CollectableEnum("warEffortPoints", $e, et);
    var tt = require("./3297.js").CollectableItemGiftPackageVO;
    var it = require("./3298.js").CollectableItemGiftPackageVE;
    CollectableEnum.GIFT_PACKAGE = new CollectableEnum("giftPackage", tt, it);
    var nt = require("./1261.js").CollectableItemEventPackageVO;
    var ot = require("./3299.js").CollectableItemEventPackageVE;
    CollectableEnum.EVENT_PACKAGE = new CollectableEnum("eventPackage", nt, ot);
    var at = require("./1179.js").CollectableItemRandomRewardVO;
    var st = require("./3300.js").CollectableItemRandomRewardVE;
    CollectableEnum.RANDOM_REWARD = new CollectableEnum("randomReward", at, st);
    var rt = require("./1624.js").CollectableItemUnlockVO;
    var lt = require("./3301.js").CollectableItemUnlockVE;
    CollectableEnum.UNLOCK = new CollectableEnum("unlock", rt, lt);
    var ct = require("./1625.js").CollectableItemSeasonLeagueMedalVO;
    var ut = require("./3302.js").CollectableItemSeasonLeagueMedalVE;
    CollectableEnum.SEASON_LEAGUE_MEDALS = new CollectableEnum("seasonLeagueMedals", ct, ut);
    var dt = require("./649.js").CollectableItemSeasonLeagueSeasonPassVO;
    var pt = require("./3303.js").CollectableItemSeasonLeagueSeasonPassVE;
    CollectableEnum.SEASON_LEAGUE_SEASON_PASS = new CollectableEnum("seasonLeaguePass", dt, pt);
    var ht = require("./650.js").CollectableItemSeasonLeagueEventPassVO;
    var gt = require("./3304.js").CollectableItemSeasonLeagueEventPassVE;
    CollectableEnum.SEASON_LEAGUE_EVENT_PASS = new CollectableEnum("seasonLeaguePassEvent", ht, gt);
    var Ct = require("./542.js").CollectableItemSeasonLeaguePromotionPassVO;
    var _t = require("./3305.js").CollectableItemSeasonLeaguePromotionPassVE;
    CollectableEnum.SEASON_LEAGUE_PROMOTION_PASS = new CollectableEnum("seasonLeaguePassPromotion", Ct, _t);
    var mt = require("./651.js").CollectableItemUnlockAllPassVO;
    var ft = require("./3306.js").CollectableItemUnlockAllPassVE;
    CollectableEnum.SEASON_UNLOCK_ALL_PASS = new CollectableEnum("todo", mt, ft);
    var Ot = require("./1626.js").ACollectableItemLootBoxVO;
    var Et = require("./3307.js").ACollectableItemLootBoxVE;
    CollectableEnum.LOOT_BOX = new CollectableEnum("lootBox", Ot, Et);
    var yt = require("./3311.js").CollectableItemAllianceCrestLayoutVO;
    var bt = require("./3312.js").CollectableItemAllianceCrestLayoutVE;
    CollectableEnum.ALLIANCE_CREST_LAYOUT = new CollectableEnum("allianceCrestLayout", yt, bt);
  };
  return CollectableEnum;
}(o.BasicEnum);
exports.CollectableEnum = s;
s.__initialize_static_members();