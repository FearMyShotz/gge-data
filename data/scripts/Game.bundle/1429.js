Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleVIPLevelInfoTextComposer() {}
  CastleVIPLevelInfoTextComposer.generateBonusText = function (e, t = l.int(Number.MAX_VALUE)) {
    var i = "";
    for (var n = CastleVIPLevelInfoTextComposer.generateCompleteBonusList(e), o = 0; o < n.length; o++) {
      i += n[o];
      if (o < n.length - 1) {
        i += "\n";
      }
      if (o > t - 1) {
        i += CastleVIPLevelInfoTextComposer.getTranslatedText("dialog_VipBonus_andMoreBonus");
        break;
      }
    }
    return i;
  };
  CastleVIPLevelInfoTextComposer.generateCompleteBonusList = function (e) {
    var t = [];
    t.push(CastleVIPLevelInfoTextComposer.getTranslatedText("dialog_VipBonus_premiumBanner_v2"));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(t, CastleVIPLevelInfoTextComposer.generateResourceBoost(e, o.CollectableEnum.WOOD, s.WorldConst.AREA_TYPE_CASTLE));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(t, CastleVIPLevelInfoTextComposer.generateResourceBoost(e, o.CollectableEnum.STONE, s.WorldConst.AREA_TYPE_CASTLE));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(t, CastleVIPLevelInfoTextComposer.generateResourceBoost(e, o.CollectableEnum.FOOD, s.WorldConst.AREA_TYPE_CASTLE));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(t, CastleVIPLevelInfoTextComposer.generateResourceBoost(e, o.CollectableEnum.WOOD, s.WorldConst.AREA_TYPE_OUTPOST));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(t, CastleVIPLevelInfoTextComposer.generateResourceBoost(e, o.CollectableEnum.STONE, s.WorldConst.AREA_TYPE_OUTPOST));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(t, CastleVIPLevelInfoTextComposer.generateResourceBoost(e, o.CollectableEnum.FOOD, s.WorldConst.AREA_TYPE_OUTPOST));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(t, CastleVIPLevelInfoTextComposer.generateResourceBoost(e, o.CollectableEnum.WOOD, s.WorldConst.AREA_TYPE_KINGDOM_CASTLE));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(t, CastleVIPLevelInfoTextComposer.generateResourceBoost(e, o.CollectableEnum.STONE, s.WorldConst.AREA_TYPE_KINGDOM_CASTLE));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(t, CastleVIPLevelInfoTextComposer.generateResourceBoost(e, o.CollectableEnum.FOOD, s.WorldConst.AREA_TYPE_KINGDOM_CASTLE));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(t, CastleVIPLevelInfoTextComposer.getBonusText(e.bonusLoginKeys, "dialog_VipBonus_additionalLoginbonus_box"));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(t, CastleVIPLevelInfoTextComposer.getBonusText(e.attackSpeedBonus, "dialog_VipBonus_boostAttackspeed"));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(t, CastleVIPLevelInfoTextComposer.getBonusText(e.attackFameBonus, "dialog_VipBonus_boostAttackFame"));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(t, CastleVIPLevelInfoTextComposer.getBonusText(e.taxBonus, "dialog_VipBonus_boostTaxCollector"));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(t, CastleVIPLevelInfoTextComposer.getBonusText(e.productionBonusSlots, "dialog_VipBonus_freeProductionSlot_singular", "dialog_VipBonus_freeProductionSlot_plural"));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(t, CastleVIPLevelInfoTextComposer.getBonusText(e.recruitmentBonusSlots, "dialog_VipBonus_freeRecruitmentSlot_singular", "dialog_VipBonus_freeRecruitmentSlot_plural"));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(t, CastleVIPLevelInfoTextComposer.getBonusText(e.freePremiumCommandersPerDay, "dialog_VipBonus_freePremiumGeneral_singular", "dialog_VipBonus_freePremiumGeneral_plural"));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(t, CastleVIPLevelInfoTextComposer.getBonusText(e.magicFindBonus, "dialog_VipBonus_magicFindBonus"));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(t, CastleVIPLevelInfoTextComposer.getBonusText(e.taxCollector12HoursNoRubies ? 1 : 0, "dialog_VipBonus_FreeTaxCollector_12h"));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(t, CastleVIPLevelInfoTextComposer.getBonusText(e.taxCollector24HoursNoRubies ? 1 : 0, "dialog_VipBonus_FreeTaxCollector_24h"));
    return t;
  };
  CastleVIPLevelInfoTextComposer.getBonusText = function (e, t, i = null) {
    if (e > 0) {
      if (i) {
        return CastleVIPLevelInfoTextComposer.getTranslatedText(a.ClientConstUtils.chooseSingularOrPluralTextID(e, t, i), [e]);
      } else {
        return CastleVIPLevelInfoTextComposer.getTranslatedText(t, [e]);
      }
    } else {
      return null;
    }
  };
  CastleVIPLevelInfoTextComposer.pushIfNotEmpty = function (e, t) {
    if (t != null && t != "") {
      e.push(t);
    }
  };
  CastleVIPLevelInfoTextComposer.generateResourceBoost = function (e, t, i) {
    var n = l.int(e.getResourceBoostForArea(t, i));
    if (n > 0) {
      return CastleVIPLevelInfoTextComposer.getTranslatedText(CastleVIPLevelInfoTextComposer.getResBoostTextID(t, i), [n]);
    } else {
      return null;
    }
  };
  CastleVIPLevelInfoTextComposer.getResBoostTextID = function (e, t) {
    var i = "dialog_VipBonus_boost" + a.ClientConstUtils.capitalizeFirstLetter(e.name) + "Production_";
    switch (t) {
      case s.WorldConst.AREA_TYPE_CASTLE:
        i += "main";
        break;
      case s.WorldConst.AREA_TYPE_OUTPOST:
        i += "AP";
        break;
      case s.WorldConst.AREA_TYPE_KINGDOM_CASTLE:
        i += "kingdoms";
    }
    return i;
  };
  CastleVIPLevelInfoTextComposer.getTranslatedText = function (e, t = null) {
    return r.Localize.text(e, t);
  };
  return CastleVIPLevelInfoTextComposer;
}();
exports.CastleVIPLevelInfoTextComposer = n;
var o = require("./12.js");
var a = require("./55.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");