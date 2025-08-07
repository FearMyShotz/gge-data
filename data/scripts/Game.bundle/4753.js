Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = function (e) {
  function StrongestDefenceSupportFlankStrategy() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(StrongestDefenceSupportFlankStrategy, e);
  StrongestDefenceSupportFlankStrategy.prototype.pickSoldierStack = function (e, t, i, n) {
    var o = 0;
    var s = 0;
    var l = n.getSoldiers();
    if (l != null) {
      for (var c = 0, u = l; c < u.length; c++) {
        var d = u[c];
        if (d !== undefined && (d.fightType == r.BasicUnitVO.FIGHTTYPE_DEF || d.isHybrid)) {
          var p = (d.meleeDefence + d.rangeDefence) * d.inventoryAmount;
          if (p > o) {
            o = p;
            s = a.int(d.wodId);
          }
        }
      }
    }
    if (o == 0) {
      return null;
    } else {
      return n.deductUnit(s, e.freeItems);
    }
  };
  return StrongestDefenceSupportFlankStrategy;
}(require("./1792.js").AFillFlankStrategy);
exports.StrongestDefenceSupportFlankStrategy = s;
var r = require("./510.js");
o.classImplementsInterfaces(s, "IFillFlankStrategy");