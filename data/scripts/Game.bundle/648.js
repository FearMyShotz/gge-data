Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleRerollCostData(t) {
    var i = e.call(this) || this;
    i._rerollCostsByType = new Map();
    for (var n = 0, o = t.rerollCosts; n < o.length; n++) {
      var a = o[n];
      if (a !== undefined) {
        var r = new s.RerollCostVO(a);
        if (!i._rerollCostsByType.get(r.type)) {
          i._rerollCostsByType.set(r.type, []);
        }
        i._rerollCostsByType.get(r.type).push(r);
      }
    }
    return i;
  }
  n.__extends(CastleRerollCostData, e);
  CastleRerollCostData.prototype.getRerollCostsByType = function (e) {
    return this._rerollCostsByType.get(e);
  };
  CastleRerollCostData.prototype.getRerollCostsByTypeAndCount = function (e, t) {
    var i;
    for (var n = 0, o = this.getRerollCostsByType(e); n < o.length; n++) {
      var a = o[n];
      if (a.rerollCount == t) {
        return a;
      }
      if (!i || i.rerollCount < a.rerollCount) {
        i = a;
      }
    }
    return i;
  };
  CastleRerollCostData.prototype.getSoftCurrencyFreeRerollCountByType = function (e) {
    var t = this.getRerollCostsByType(e);
    var i = 0;
    if (t != null) {
      for (var n = 0, o = t; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          var s = 0;
          for (var r = 0, l = a.softCosts.list; r < l.length; r++) {
            var c = l[r];
            if (c !== undefined && c.amount > 0) {
              s++;
            }
          }
          if (a.c1Cost == 0 && s == 0) {
            i++;
          }
        }
      }
    }
    return i;
  };
  CastleRerollCostData.REROLL_TYPE_ALIEN = "alien";
  CastleRerollCostData.REROLL_TYPE_OFFICERS_SCHOOL = "officersSchool";
  CastleRerollCostData.REROLL_TYPE_PROLONG_TRAINING = "prolongTraining";
  CastleRerollCostData.REROLL_TYPE_CHARGE_EFFECT = "chargeEffect";
  return CastleRerollCostData;
}(require("./54.js").CastleBasicData);
exports.CastleRerollCostData = a;
var s = require("./3078.js");
o.classImplementsInterfaces(a, "IUpdatable", "ICastleBasicData");