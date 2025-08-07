Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function ReduceGateBonusStrategy() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ReduceGateBonusStrategy, e);
  ReduceGateBonusStrategy.prototype.getRelevantToolBonus = function (e) {
    return e.gateBonus;
  };
  ReduceGateBonusStrategy.prototype.getRelevantDefenderBonus = function (e, t) {
    return t.defenderGateBonus - e.attackerGateReduction;
  };
  return ReduceGateBonusStrategy;
}(require("./834.js").AReduceDefenseBonusStrategy);
exports.ReduceGateBonusStrategy = a;
o.classImplementsInterfaces(a, "IFillToolSlotStrategy");