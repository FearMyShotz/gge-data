Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./346.js");
var r = function (e) {
  function AdvancedTroopSelectionDefaultStrategy() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AdvancedTroopSelectionDefaultStrategy, e);
  AdvancedTroopSelectionDefaultStrategy.prototype.changeAmount = function (e, t, i, n, o) {
    var s = a.int(t - i.getTotalAmountOfUntit(e));
    if (s >= 0) {
      if (this.getFreeAndSameSlots(e, n).length > 0) {
        this.addUnits(e, t, i, n, o);
      } else {
        this.exchangeWithExchangeable(e, t, i, this.getExchangeableSlots(e, n), o);
      }
    } else {
      this.deductUnits(s, e, t, n, o);
    }
  };
  AdvancedTroopSelectionDefaultStrategy.prototype.exchangeWithExchangeable = function (e, t, i, n, o) {
    var r = n[n.length - 1];
    if (r) {
      var l = i.getFirstSlotWithUnit(r.unitVO);
      l.unitVO.inventoryAmount += r.getAmount();
      l.outline = a.int(s.CastleFightItemVO.OUTLINE_NONE);
      r.unitVO = null;
      o(e, r, t);
    }
  };
  AdvancedTroopSelectionDefaultStrategy.prototype.addUnits = function (e, t, i, n, o) {
    var s;
    var r = false;
    for (var l = 0; l < n.length; l++) {
      var c = n[l];
      if (c.getWodId() == e.wodId) {
        s = c;
        break;
      }
      if (!r && c.isFree()) {
        r = true;
        s = c;
      }
    }
    o(e, s, a.int(t - (i.getTotalAmountOfUntit(e) - s.getAmount())));
  };
  AdvancedTroopSelectionDefaultStrategy.prototype.deductUnits = function (e, t, i, n, o) {
    var s = e;
    for (var r = a.int(n.length - 1); r >= 0; r--) {
      var l = n[r];
      if (!l.isFree() && l.getWodId() == t.wodId) {
        var c = a.int(Math.min(l.getAmount(), -s));
        s += c;
        o(t, l, l.getAmount() - c);
        if (s >= 0) {
          break;
        }
      }
    }
  };
  return AdvancedTroopSelectionDefaultStrategy;
}(require("./897.js").AdvancedTroopsSelectionStrategyBasics);
exports.AdvancedTroopSelectionDefaultStrategy = r;
o.classImplementsInterfaces(r, "IAdvancedTroopSelectionStrategy");