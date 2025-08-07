Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./33.js");
var a = function () {
  function LordEffectFilterStrategyDefencePVE() {}
  LordEffectFilterStrategyDefencePVE.prototype.isGroupActive = function (e, t) {
    return true;
  };
  LordEffectFilterStrategyDefencePVE.prototype.getExcludedEffectTypes = function () {
    return [o.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_WALL_P_V_P];
  };
  LordEffectFilterStrategyDefencePVE.prototype.isEffectTypeIncluded = function (e) {
    return this.getExcludedEffectTypes().indexOf(e.type) === -1 && e.effectCategory != 7;
  };
  return LordEffectFilterStrategyDefencePVE;
}();
exports.LordEffectFilterStrategyDefencePVE = a;
n.classImplementsInterfaces(a, "ILordEffectFilterStrategy");