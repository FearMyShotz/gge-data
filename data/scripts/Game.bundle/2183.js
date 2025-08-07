Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = function () {
  function LordEffectFilterStrategyFullPassive() {}
  LordEffectFilterStrategyFullPassive.prototype.isGroupActive = function (e, t) {
    return false;
  };
  LordEffectFilterStrategyFullPassive.prototype.getExcludedEffectTypes = function () {
    return [];
  };
  LordEffectFilterStrategyFullPassive.prototype.isEffectTypeIncluded = function (e) {
    return this.getExcludedEffectTypes().indexOf(e.type) === -1;
  };
  return LordEffectFilterStrategyFullPassive;
}();
exports.LordEffectFilterStrategyFullPassive = o;
n.classImplementsInterfaces(o, "ILordEffectFilterStrategy");