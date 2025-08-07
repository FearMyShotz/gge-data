Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function ReduceWallBonusStrategy() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ReduceWallBonusStrategy, e);
  ReduceWallBonusStrategy.prototype.getRelevantToolBonus = function (e) {
    return e.wallBonus;
  };
  ReduceWallBonusStrategy.prototype.getRelevantDefenderBonus = function (e, t) {
    return t.defenderWallBonus - e.attackerWallReduction;
  };
  return ReduceWallBonusStrategy;
}(require("./836.js").AReduceDefenseBonusStrategy);
exports.ReduceWallBonusStrategy = a;
o.classImplementsInterfaces(a, "IFillToolSlotStrategy");