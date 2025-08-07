Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function LordEffectFilterStrategyAttackPVE() {}
  LordEffectFilterStrategyAttackPVE.prototype.isGroupActive = function (e, t) {
    return true;
  };
  LordEffectFilterStrategyAttackPVE.prototype.getExcludedEffectTypes = function () {
    return [a.EffectTypeEnum.EFFECT_TYPE_STATIONING_SPEED_BONUS, a.EffectTypeEnum.EFFECT_TYPE_STATIONING_TRAVEL_COST_REDUCTION, a.EffectTypeEnum.EFFECT_TYPE_SUPPORT_SPEED_BONUS, a.EffectTypeEnum.EFFECT_TYPE_SUPPORT_TRAVEL_COST_REDUCTION, a.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_YARD];
  };
  LordEffectFilterStrategyAttackPVE.prototype.isEffectTypeIncluded = function (e) {
    return this.getExcludedEffectTypes().indexOf(e.type) === -1 && e.effectCategory != 7;
  };
  return LordEffectFilterStrategyAttackPVE;
}();
exports.LordEffectFilterStrategyAttackPVE = n;
var o = require("./1.js");
var a = require("./35.js");
o.classImplementsInterfaces(n, "ILordEffectFilterStrategy");