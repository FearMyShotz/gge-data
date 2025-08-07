Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = function () {
  function LordEffectFilterStrategyDefencePVP() {}
  LordEffectFilterStrategyDefencePVP.prototype.isGroupActive = function (e, t) {
    return true;
  };
  LordEffectFilterStrategyDefencePVP.prototype.getExcludedEffectTypes = function () {
    return [];
  };
  LordEffectFilterStrategyDefencePVP.prototype.isEffectTypeIncluded = function (e) {
    return this.getExcludedEffectTypes().indexOf(e.type) === -1 && e.effectCategory != 7;
  };
  return LordEffectFilterStrategyDefencePVP;
}();
exports.LordEffectFilterStrategyDefencePVP = o;
n.classImplementsInterfaces(o, "ILordEffectFilterStrategy");