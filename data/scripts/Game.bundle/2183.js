Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = function () {
  function LordEffectFilterStrategyFullActive() {}
  LordEffectFilterStrategyFullActive.prototype.isGroupActive = function (e, t) {
    return true;
  };
  LordEffectFilterStrategyFullActive.prototype.getExcludedEffectTypes = function () {
    return [];
  };
  LordEffectFilterStrategyFullActive.prototype.isEffectTypeIncluded = function (e) {
    return this.getExcludedEffectTypes().indexOf(e.type) === -1;
  };
  return LordEffectFilterStrategyFullActive;
}();
exports.LordEffectFilterStrategyFullActive = o;
n.classImplementsInterfaces(o, "ILordEffectFilterStrategy");