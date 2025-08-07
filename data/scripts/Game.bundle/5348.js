Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./12.js");
var r = require("./74.js");
var l = require("./54.js");
var c = require("./4.js");
var u = require("./649.js");
var d = require("./5349.js");
var p = function (e) {
  function CastleAlienRerollData(t) {
    var i = this;
    i._rerollCountSoft = 0;
    i._rerollCountHard = 0;
    i._softChancesReroll = [];
    i._hardChancesReroll = [];
    i.requestRerollIsHard = false;
    i.showWarningPopup = true;
    CONSTRUCTOR_HACK;
    i = e.call(this) || this;
    var n = t.alienRerollChances;
    if (n != null) {
      for (var o = 0, a = n; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined) {
          var r = new d.AlienRerollChanceVO();
          r.parseXML(s);
          if (r.isSoftCurrency) {
            i._softChancesReroll.push(r);
          }
          if (r.isHardCurrency) {
            i._hardChancesReroll.push(r);
          }
        }
      }
    }
    i._softChancesReroll.sort(i.bindFunction(i.rerollChanceSort));
    i._hardChancesReroll.sort(i.bindFunction(i.rerollChanceSort));
    return i;
  }
  n.__extends(CastleAlienRerollData, e);
  CastleAlienRerollData.prototype.rerollChanceSort = function (e, t) {
    return e.amountUnits - t.amountUnits;
  };
  CastleAlienRerollData.prototype.getCostHard = function () {
    return a.int(this.alienRerollCosts[this.hardCountIndex].c2Cost);
  };
  CastleAlienRerollData.prototype.getCostSoftByKey = function (e) {
    var t = s.CollectableEnum.getTypeByServerKey(e);
    if (t) {
      if (t == s.CollectableEnum.C1) {
        return a.int(this.alienRerollCosts[this.softCountIndex].c1Cost);
      } else {
        return a.int(this.alienRerollCosts[this.softCountIndex].softCosts.getAmountOrDefaultByTypeVO(new r.CollectableTypeVO(s.CollectableEnum.GENERIC_CURRENCY, c.CastleModel.currencyData.getXmlCurrencyByKey(e).id)));
      }
    } else {
      return 0;
    }
  };
  Object.defineProperty(CastleAlienRerollData.prototype, "softCountIndex", {
    get: function () {
      return Math.min(this._rerollCountSoft, this.alienRerollCosts.length - 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAlienRerollData.prototype, "hardCountIndex", {
    get: function () {
      return Math.min(this._rerollCountHard, this.alienRerollCosts.length);
    },
    enumerable: true,
    configurable: true
  });
  CastleAlienRerollData.prototype.reset = function () {
    this._rerollCountSoft = 0;
    this._rerollCountHard = 0;
    this.showWarningPopup = true;
  };
  Object.defineProperty(CastleAlienRerollData.prototype, "alienRerollCosts", {
    get: function () {
      return c.CastleModel.rerollCostData.getRerollCostsByType(u.CastleRerollCostData.REROLL_TYPE_ALIEN);
    },
    enumerable: true,
    configurable: true
  });
  CastleAlienRerollData.prototype.parse_RCE = function (e) {
    if (e) {
      if (e.RCSC != null && e.RCSC !== undefined) {
        this._rerollCountSoft = a.int(e.RCSC);
      }
      if (e.RCHC != null && e.RCHC !== undefined) {
        this._rerollCountHard = a.int(e.RCHC);
      }
    }
  };
  Object.defineProperty(CastleAlienRerollData.prototype, "softChancesReroll", {
    get: function () {
      return this._softChancesReroll;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAlienRerollData.prototype, "hardChancesReroll", {
    get: function () {
      return this._hardChancesReroll;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAlienRerollData;
}(l.CastleBasicData);
exports.CastleAlienRerollData = p;
o.classImplementsInterfaces(p, "IUpdatable", "ICastleBasicData");