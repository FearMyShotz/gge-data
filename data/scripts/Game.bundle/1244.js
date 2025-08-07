Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = function (e) {
  function AdvancedTroopSelectionToolStrategy() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AdvancedTroopSelectionToolStrategy, e);
  AdvancedTroopSelectionToolStrategy.prototype.changeAmount = function (e, t, i, n, o) {
    var a = s.int(t - i.getTotalAmountOfUntit(e));
    if (a >= 0) {
      if (this.getFreeAndSameSlots(e, n).length > 0) {
        var r = s.int(t - i.getTotalAmountOfUntit(e));
        if ((r = s.int(this.addUnits(e, r, i, this.getSameSlots(e, n), o))) > 0 && (r = s.int(this.addUnits(e, r, i, this.getFreeSlots(e, n), o))) > 0) {
          this.exchangeWithExchangeable(e, r, i, this.getExchangeableSlots(e, n), o);
        }
      } else {
        this.exchangeWithExchangeable(e, t, i, this.getExchangeableSlots(e, n), o);
      }
    } else {
      this.deductUnits(a, e, t, n, o);
    }
  };
  AdvancedTroopSelectionToolStrategy.prototype.exchangeWithExchangeable = function (e, t, i, n, o) {
    for (var r = t; r > 0;) {
      var l = s.int(Math.min(r, a.TravelConst.MAX_TOOLS_PER_SLOT));
      r -= l;
      var c = n.pop();
      var u = i.getAllSlotsWithUnit(c.unitVO);
      u.splice(u.indexOf(c), 1);
      var d;
      var p = c.getAmount();
      for (c.unitVO = null; p > 0 && u.length != 0;) {
        d = u.shift();
        var h = s.int(Math.min(a.TravelConst.MAX_TOOLS_PER_SLOT - d.getAmount(), p));
        p -= h;
        d.unitVO.inventoryAmount = d.getAmount() + h;
      }
      o(e, c, l);
    }
  };
  AdvancedTroopSelectionToolStrategy.prototype.addUnits = function (e, t, i, n, o) {
    var r;
    for (var l = t, c = 0; l > 0 && n.length != 0;) {
      l -= c = (r = n.shift()).isFree() ? s.int(Math.min(a.TravelConst.MAX_TOOLS_PER_SLOT, l)) : s.int(Math.min(a.TravelConst.MAX_TOOLS_PER_SLOT - r.getAmount(), l));
      o(e, r, r.getAmount() + c);
    }
    return l;
  };
  AdvancedTroopSelectionToolStrategy.prototype.deductUnits = function (e, t, i, n, o) {
    var a = e;
    for (var r = s.int(n.length - 1); r >= 0; r--) {
      var l = n[r];
      if (!l.isFree() && l.getWodId() == t.wodId) {
        var c = s.int(Math.min(l.getAmount(), -a));
        a += c;
        o(t, l, l.getAmount() - c);
        if (a >= 0) {
          break;
        }
      }
    }
  };
  return AdvancedTroopSelectionToolStrategy;
}(require("./897.js").AdvancedTroopsSelectionStrategyBasics);
exports.AdvancedTroopSelectionToolStrategy = r;
o.classImplementsInterfaces(r, "IAdvancedTroopSelectionStrategy");