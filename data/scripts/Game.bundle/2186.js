Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./33.js");
var a = function () {
  function LordEffectFilterStrategySupport() {}
  LordEffectFilterStrategySupport.prototype.isGroupActive = function (e, t) {
    return e == 5 && (t == 1 || t == 2) || e == 6 && t == 1;
  };
  LordEffectFilterStrategySupport.prototype.getExcludedEffectTypes = function () {
    return [o.EffectTypeEnum.EFFECT_TYPE_STATIONING_SPEED_BONUS, o.EffectTypeEnum.EFFECT_TYPE_STATIONING_TRAVEL_COST_REDUCTION, o.EffectTypeEnum.EFFECT_TYPE_RETURN_TRAVEL_BOOST_PVP, o.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS_PVP, o.EffectTypeEnum.EFFECT_TYPE_TRAVEL_COST_REDUCTION_PVP];
  };
  LordEffectFilterStrategySupport.prototype.isEffectTypeIncluded = function (e) {
    return this.getExcludedEffectTypes().indexOf(e.type) === -1 && e.effectCategory != 7;
  };
  return LordEffectFilterStrategySupport;
}();
exports.LordEffectFilterStrategySupport = a;
n.classImplementsInterfaces(a, "ILordEffectFilterStrategy");