Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./18.js");
var r = require("./713.js");
var l = require("./1239.js");
var c = function (e) {
  function StrongestDefenceCounterRatioConsideredFlankStrategy() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(StrongestDefenceCounterRatioConsideredFlankStrategy, e);
  StrongestDefenceCounterRatioConsideredFlankStrategy.prototype.pickSoldierStack = function (e, t, i, n, o) {
    var c = 0;
    var u = 0;
    var d = 0;
    var p = 0;
    var h = 0;
    t ||= new l.AttackerFlankEffectVO();
    var g = i ? i.getMeleeDefenceValue(0, t.defenderRangeReduction) : 0;
    var C = i ? i.getRangeDefenceValue(t.defenderRangeReduction, 0) : 0;
    var _ = 1;
    var m = 1;
    if (g + C > 0) {
      _ = g / (g + C);
      m = C / (g + C);
    }
    var f = n.getSoldiers();
    if (f != null) {
      for (var O = 0, E = f; O < E.length; O++) {
        var y = E[O];
        if (y !== undefined && (y.isOffensive || y.isAllround)) {
          if (y.healingCostC1 > 0 && !o.isUnitFilterActive(r.AutoFillOptions.UNIT_FILTER_C1)) {
            continue;
          }
          if (y.healingCostC2 > 0 && !o.isUnitFilterActive(r.AutoFillOptions.UNIT_FILTER_C2)) {
            continue;
          }
          if (y.meadSupply > 0 && !o.isUnitFilterActive(r.AutoFillOptions.UNIT_FILTER_MEAD)) {
            continue;
          }
          if (y.beefSupply > 0 && !o.isUnitFilterActive(r.AutoFillOptions.UNIT_FILTER_BEEF)) {
            continue;
          }
          var b = t.getSoldierStackAttackValue(y, e.freeItems);
          if (y.unitType == s.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE && o.isUnitFilterActive(r.AutoFillOptions.UNIT_FILTER_MELEE)) {
            if (b > c) {
              c = b;
              d = a.int(y.wodId);
            }
          } else if (y.unitType == s.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE && o.isUnitFilterActive(r.AutoFillOptions.UNIT_FILTER_RANGE) && b > u) {
            u = b;
            p = a.int(y.wodId);
          }
        }
      }
    }
    if (c + u == 0) {
      return null;
    }
    if (c == 0) {
      h = p;
    } else if (u == 0) {
      h = d;
    } else {
      h = c * m >= u * _ ? d : p;
    }
    return n.deductUnit(h, e.freeItems);
  };
  return StrongestDefenceCounterRatioConsideredFlankStrategy;
}(require("./1792.js").AFillFlankStrategy);
exports.StrongestDefenceCounterRatioConsideredFlankStrategy = c;
o.classImplementsInterfaces(c, "IFillFlankStrategy");