Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function ReduceRangeBonusStrategy() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ReduceRangeBonusStrategy, e);
  ReduceRangeBonusStrategy.prototype.getRelevantToolBonus = function (e) {
    return e.defRangeBonus;
  };
  ReduceRangeBonusStrategy.prototype.getRelevantDefenderBonus = function (e, t) {
    return t.defenderRangeBonus - e.defenderRangeReduction;
  };
  ReduceRangeBonusStrategy.prototype.pickToolByStrategy = function (t, i, n, o, a, s, r, l) {
    if (i.hasRangeDefenders) {
      return e.prototype.pickToolByStrategy.call(this, t, i, n, o, a, s, r, l);
    } else {
      return null;
    }
  };
  return ReduceRangeBonusStrategy;
}(require("./834.js").AReduceDefenseBonusStrategy);
exports.ReduceRangeBonusStrategy = a;
o.classImplementsInterfaces(a, "IFillToolSlotStrategy");