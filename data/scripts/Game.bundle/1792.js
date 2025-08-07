Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./69.js");
var a = function () {
  function AFillFlankStrategy() {
    this.fillToolStrategyPool();
  }
  AFillFlankStrategy.prototype.fillFlankWithTools = function (e, t, i, n, o, a, s) {
    for (var r = 0, l = e.items; r < l.length; r++) {
      var c = l[r];
      if (c !== undefined && c && c.isFree() && c.isUnlocked() && n.getToolCount() > 0 && e.freeItems > 0) {
        for (var u = false; !u && this._toolStrategyPool.length > 0;) {
          var d = this._toolStrategyPool[this._toolStrategyPool.length - 1].pickToolByStrategy(t, i, n, e.freeItems, o, a, e, s);
          if (d && d.isToolForSlotType(c.slotType)) {
            if (e.getTotalAmountOfUntit(d) > 0) {
              (c = e.getAllSlotsWithUnit(d)[0]).unitVO.inventoryAmount += d.inventoryAmount;
            } else {
              c.unitVO = d;
            }
            if (t) {
              t.updateEffectsWithNewTool(d);
            }
            u = true;
          } else {
            this._toolStrategyPool.pop();
            u = false;
          }
        }
        if (!u) {
          break;
        }
      }
    }
    return true;
  };
  AFillFlankStrategy.prototype.fillFlankWithSoldiers = function (e, t, i, n, o) {
    for (var a = 0; a < e.items.length; a++) {
      var s = e.items[a];
      if (s.isFree() && s.isUnlocked() && n.getSoldierCount() > 0 && e.freeItems > 0) {
        var r = this.pickSoldierStack(e, t, i, n, o);
        if (!r) {
          break;
        }
        e.items[a].unitVO = r;
      }
    }
    return true;
  };
  AFillFlankStrategy.prototype.checkFlank = function (e, t, i) {
    if (t.sumOfItems == 0) {
      for (var n = 0, o = e.items; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          if (!a.isFree()) {
            i.addUnit(a.unitVO.wodId, a.getAmount());
            a.unitVO = null;
          }
        }
      }
      return false;
    }
    return true;
  };
  AFillFlankStrategy.prototype.pickSoldierStack = function (e, t, i, n, a) {
    throw new o.AbstractMethodError();
  };
  AFillFlankStrategy.prototype.fillToolStrategyPool = function () {
    this._toolStrategyPool = [];
    this._toolStrategyPool.push(new r.ReduceMoatBonusStrategy());
    this._toolStrategyPool.push(new l.ReduceRangeBonusStrategy());
    this._toolStrategyPool.push(new s.ReduceGateBonusStrategy());
    this._toolStrategyPool.push(new c.ReduceWallBonusStrategy());
  };
  return AFillFlankStrategy;
}();
exports.AFillFlankStrategy = a;
var s = require("./3839.js");
var r = require("./3840.js");
var l = require("./3841.js");
var c = require("./3842.js");
n.classImplementsInterfaces(a, "IFillFlankStrategy");