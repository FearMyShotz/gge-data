Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./35.js");
var a = function () {
  function LordEffectFilterStrategyAttack() {}
  LordEffectFilterStrategyAttack.prototype.isGroupActive = function (e, t) {
    return true;
  };
  LordEffectFilterStrategyAttack.prototype.getExcludedEffectTypes = function () {
    return [o.EffectTypeEnum.EFFECT_TYPE_STATIONING_SPEED_BONUS, o.EffectTypeEnum.EFFECT_TYPE_STATIONING_TRAVEL_COST_REDUCTION, o.EffectTypeEnum.EFFECT_TYPE_SUPPORT_SPEED_BONUS, o.EffectTypeEnum.EFFECT_TYPE_SUPPORT_TRAVEL_COST_REDUCTION, o.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_YARD];
  };
  LordEffectFilterStrategyAttack.prototype.isEffectTypeIncluded = function (e) {
    return this.getExcludedEffectTypes().indexOf(e.type) === -1 && e.effectCategory != 7;
  };
  return LordEffectFilterStrategyAttack;
}();
exports.LordEffectFilterStrategyAttack = a;
n.classImplementsInterfaces(a, "ILordEffectFilterStrategy");