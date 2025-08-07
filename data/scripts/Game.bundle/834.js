Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./18.js");
var r = require("./69.js");
var l = function () {
  function AReduceDefenseBonusStrategy() {}
  AReduceDefenseBonusStrategy.prototype.getRelevantToolBonus = function (e) {
    throw new r.AbstractMethodError();
  };
  AReduceDefenseBonusStrategy.prototype.getRelevantDefenderBonus = function (e, t) {
    throw new r.AbstractMethodError();
  };
  AReduceDefenseBonusStrategy.prototype.pickToolByStrategy = function (e, t, i, o, r, l, u, d) {
    var p = this.getRelevantDefenderBonus(e, t);
    if (p <= 0) {
      return null;
    }
    var h;
    for (var g = i.getTools(), C = -1, _ = -1, m = -1, f = -1, O = 0, E = 0; E < g.length; E++) {
      var y = n.castAs(g[E], "ToolUnitVO");
      if (y && y.attackType == s.ClientConstCastle.ATTACK_TOOL && c.AttackHelper.canUseToolForAttackOnTarget(l, y, r) && this.getRelevantToolBonus(y) > 0 && y.inventoryAmount > 0) {
        var b = Math.ceil(p / this.getRelevantToolBonus(y) * 100 / 100);
        var D = y.amountPerWave > 0 ? y.amountPerWave - d.getSumOfToolsByTool(y) : u.freeItems;
        var I = a.int(Math.min(y.inventoryAmount, o, D));
        if (b <= I) {
          if (b < _ || _ == -1) {
            C = a.int(y.wodId);
            _ = b;
          }
        } else {
          var T = this.getRelevantToolBonus(y) * I;
          if (T > O) {
            m = a.int(y.wodId);
            f = I;
            O = T;
          }
        }
      }
    }
    if (C != -1) {
      h = i.deductUnit(C, _);
    } else if (m != -1) {
      h = i.deductUnit(m, f);
    }
    return h;
  };
  return AReduceDefenseBonusStrategy;
}();
exports.AReduceDefenseBonusStrategy = l;
var c = require("./250.js");
o.classImplementsInterfaces(l, "IFillToolSlotStrategy");