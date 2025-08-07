Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function ReduceMoatBonusStrategy() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ReduceMoatBonusStrategy, e);
  ReduceMoatBonusStrategy.prototype.getRelevantToolBonus = function (e) {
    return e.moatBonus;
  };
  ReduceMoatBonusStrategy.prototype.getRelevantDefenderBonus = function (e, t) {
    return t.defenderMoatBonus - e.attackerMoatReduction;
  };
  return ReduceMoatBonusStrategy;
}(require("./836.js").AReduceDefenseBonusStrategy);
exports.ReduceMoatBonusStrategy = a;
o.classImplementsInterfaces(a, "IFillToolSlotStrategy");