Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleEilandTextComposer() {}
  CastleEilandTextComposer.generateBonusText = function (e, t = a.int(Number.MAX_VALUE)) {
    var i = "";
    for (var n = CastleEilandTextComposer.generateCompleteBonusList(e), o = 0; o < n.length; o++) {
      i += n[o];
      if (o < n.length - 1) {
        i += "\n";
      }
      if (o > t - 1) {
        i += CastleEilandTextComposer.getTranslatedText("dialog_VipBonus_andMoreBonus");
        break;
      }
    }
    return i;
  };
  CastleEilandTextComposer.generateCompleteBonusList = function (e) {
    var t = [];
    if (e.hasAllEffectTypes([s.EffectTypeEnum.EFFECT_TYPE_ENEMY_FAME_BOOST, s.EffectTypeEnum.EFFECT_TYPE_ENEMY_LOOT_BOOST])) {
      CastleEilandTextComposer.pushIfNotEmpty(t, CastleEilandTextComposer.getTranslatedText("dialog_eiland_fameLoot_malus", e.getBoniVOByFirstFoundEffectType([s.EffectTypeEnum.EFFECT_TYPE_ENEMY_FAME_BOOST, s.EffectTypeEnum.EFFECT_TYPE_ENEMY_LOOT_BOOST]).strength));
    }
    if (e.hasOneOrMoreEffectTypes([s.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE, s.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE_ALL], true)) {
      CastleEilandTextComposer.pushIfNotEmpty(t, CastleEilandTextComposer.getTranslatedText("dialog_eiland_recruitCost_malus", e.getBoniVOByFirstFoundEffectType([s.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE, s.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE_ALL]).strength));
    }
    if (e.hasOneOrMoreEffectTypes([s.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST, s.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST_ALL])) {
      CastleEilandTextComposer.pushIfNotEmpty(t, CastleEilandTextComposer.getTranslatedText("dialog_eiland_recruitBuildspeed_bonus", e.getBoniVOByFirstFoundEffectType([s.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST, s.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST_ALL]).strength));
    }
    for (var i = 0, n = e.boni; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined) {
        if (o.effect.effectTypeID == s.EffectTypeEnum.EFFECT_TYPE_FOOD_PRODUCTION_BOOST.id) {
          CastleEilandTextComposer.pushIfNotEmpty(t, CastleEilandTextComposer.getTranslatedText("dialog_eiland_foodProduction_bonus", o.strength));
        }
        if (o.effect.effectTypeID == s.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS.id) {
          CastleEilandTextComposer.pushIfNotEmpty(t, CastleEilandTextComposer.getTranslatedText("dialog_eiland_attack_bonus", o.strength));
        }
        if (o.effect.effectTypeID == s.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BOOST.id && o.strength < 0) {
          CastleEilandTextComposer.pushIfNotEmpty(t, CastleEilandTextComposer.getTranslatedText("dialog_eiland_publicOrder_malus", o.strength));
        }
        if (o.effect.effectTypeID == s.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS.id && o.strength < 0) {
          CastleEilandTextComposer.pushIfNotEmpty(t, CastleEilandTextComposer.getTranslatedText("dialog_eiland_armyBoost_malus", o.strength));
        }
        if (o.effect.effectTypeID == s.EffectTypeEnum.EFFECT_TYPE_SPY_COUNT_BOOST.id) {
          CastleEilandTextComposer.pushIfNotEmpty(t, CastleEilandTextComposer.getTranslatedText("dialog_eiland_spy_bonus", o.strength));
        }
      }
    }
    return t;
  };
  CastleEilandTextComposer.pushIfNotEmpty = function (e, t) {
    if (t != null && t != "") {
      e.push(t);
    }
  };
  CastleEilandTextComposer.getTranslatedText = function (e, t = 0) {
    if (t == 0) {
      return null;
    }
    var i = Math.abs(t);
    return o.Localize.text(e, [i]);
  };
  return CastleEilandTextComposer;
}();
exports.CastleEilandTextComposer = n;
var o = require("./3.js");
var a = require("./6.js");
var s = require("./35.js");