Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./346.js");
var r = function (e) {
  function AdvancedTroopSelectionDefenceStrategy() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AdvancedTroopSelectionDefenceStrategy, e);
  AdvancedTroopSelectionDefenceStrategy.prototype.changeAmount = function (e, t, i, n, o) {
    if (a.int(t - i.getTotalAmountOfUntit(e)) >= 0) {
      if (this.getFreeAndSameSlots(e, n).length > 0) {
        this.changeUnits(e, t, this.getFreeAndSameSlots(e, n), o);
      } else {
        this.exchangeWithExchangeable(e, t, i, this.getExchangeableSlots(e, n), o);
      }
    } else {
      this.changeUnits(e, t, this.getSameSlots(e, n), o);
    }
  };
  AdvancedTroopSelectionDefenceStrategy.prototype.exchangeWithExchangeable = function (e, t, i, n, o) {
    if (n && !(n.length <= 0)) {
      var r = n[n.length - 1];
      var l = i.getAllSlotsWithUnit(r.unitVO);
      var c = (r = l.pop()).getAmount();
      r.unitVO = null;
      var u = a.int(c / l.length);
      var d = a.int(c % l.length);
      for (var p = a.int(l.length - 1); p >= 0; p--) {
        var h = l[p];
        h.unitVO.inventoryAmount += u + (d > 0 ? 1 : 0);
        h.outline = a.int(s.CastleFightItemVO.OUTLINE_NONE);
        d--;
      }
      o(e, r, t);
    }
  };
  AdvancedTroopSelectionDefenceStrategy.prototype.changeUnits = function (e, t, i, n) {
    var o = a.int(t / i.length);
    var s = a.int(t % i.length);
    if (i != null) {
      for (var r = 0, l = i; r < l.length; r++) {
        var c = l[r];
        if (c !== undefined) {
          var u = o + (s > 0 ? 1 : 0);
          s--;
          n(e, c, u);
        }
      }
    }
  };
  return AdvancedTroopSelectionDefenceStrategy;
}(require("./897.js").AdvancedTroopsSelectionStrategyBasics);
exports.AdvancedTroopSelectionDefenceStrategy = r;
o.classImplementsInterfaces(r, "IAdvancedTroopSelectionStrategy");