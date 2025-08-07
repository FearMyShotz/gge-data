Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./33.js");
var a = function () {
  function LordEffectFilterStrategyStation() {}
  LordEffectFilterStrategyStation.prototype.isGroupActive = function (e, t) {
    return e == 5 && (t == 1 || t == 2);
  };
  LordEffectFilterStrategyStation.prototype.getExcludedEffectTypes = function () {
    return [o.EffectTypeEnum.EFFECT_TYPE_SUPPORT_SPEED_BONUS, o.EffectTypeEnum.EFFECT_TYPE_SUPPORT_TRAVEL_COST_REDUCTION, o.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS_PVP, o.EffectTypeEnum.EFFECT_TYPE_TRAVEL_COST_REDUCTION_PVP];
  };
  LordEffectFilterStrategyStation.prototype.isEffectTypeIncluded = function (e) {
    return this.getExcludedEffectTypes().indexOf(e.type) === -1 && e.effectCategory != 7;
  };
  return LordEffectFilterStrategyStation;
}();
exports.LordEffectFilterStrategyStation = a;
n.classImplementsInterfaces(a, "ILordEffectFilterStrategy");