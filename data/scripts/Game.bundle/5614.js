Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./75.js");
var l = require("./22.js");
var c = require("./32.js");
var u = require("./12.js");
var d = require("./45.js");
var p = require("./234.js");
var h = require("./128.js");
var g = require("./15.js");
var C = require("./54.js");
var _ = require("./52.js");
var m = require("./5615.js");
var f = require("./5616.js");
var O = require("./5617.js");
var E = function (e) {
  function CurrencyData(t) {
    var i = e.call(this) || this;
    i._xmlCurrenciesById = new Map();
    i._xmlCurrenciesByName = new Map();
    i._xmlCurrenciesByKey = new Map();
    i._xmlResourceTypes = new Map();
    i._c1 = new p.CollectableItemC1VO();
    i._c2 = new h.CollectableItemC2VO();
    i._genericCurrencies = new Map();
    i._currencyRanges = new Map();
    i._configXml = t;
    i.parseXml();
    return i;
  }
  n.__extends(CurrencyData, e);
  CurrencyData.prototype.reset = function () {
    this._c1 = new p.CollectableItemC1VO();
    this._c2 = new h.CollectableItemC2VO();
    this._genericCurrencies = new Map();
  };
  CurrencyData.prototype.parseXml = function () {
    this._xmlCurrenciesById = new Map();
    var e = this._configXml.currencies;
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = new f.XmlCurrencyVO();
          o.parseXml(n);
          this._xmlCurrenciesById.set(o.id, o);
          this._xmlCurrenciesByName.set(o.name, o);
          this._xmlCurrenciesByKey.set(o.jsonKey, o);
        }
      }
    }
    this._xmlResourceTypes = new Map();
    var a = this._configXml.resources;
    if (a != null) {
      for (var s = 0, r = a; s < r.length; s++) {
        var l = r[s];
        if (l !== undefined) {
          (p = new O.XmlResourceVO()).parseXml(l);
          this._xmlResourceTypes.set(p.resourceID, p);
        }
      }
    }
    this._currencyRanges = new Map();
    var c = this._configXml.currencyTypes;
    if (c != null) {
      for (var u = 0, d = c; u < d.length; u++) {
        var p;
        var h = d[u];
        if (h !== undefined) {
          (p = new m.XmlCurrencyRangeVO()).parseXml(h);
          this._currencyRanges.set(p.typeID, p);
        }
      }
    }
    this.parseAdditionalXmlNode("currencyCaps", "parseXmlCaps");
    this.parseAdditionalXmlNode("currencyRarenesses", "parseXmlRareness");
    this.parseAdditionalXmlNode("currencyMinutesSkipValues", "parseXmlMinutesSkipValues");
  };
  CurrencyData.prototype.parseAdditionalXmlNode = function (e, t) {
    var i = this._configXml[e];
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          var r = s.int(l.CastleXMLUtils.getIntAttribute("currencyID", a, -1));
          if (r >= 0) {
            var c = this._xmlCurrenciesById.get(r);
            if (c) {
              c[t](a);
            }
          }
        }
      }
    }
  };
  CurrencyData.prototype.parseSCE = function (e) {
    var t = e;
    if (t) {
      for (var i = 0; i < t.length; ++i) {
        var n = t[i][0];
        var a = s.int(t[i][1]);
        if (!o.DictionaryUtil.containsKey(this._genericCurrencies, n)) {
          if (this.getXmlCurrencyByKey(n)) {
            this._genericCurrencies.set(n, d.CollectableHelper.createVO(u.CollectableEnum.GENERIC_CURRENCY, 0, this.getXmlCurrencyByKey(n).id));
          } else {
            o.error("CurrencyData.parseSCE(): Currency with key '" + n + "' doesn't exist in items.xml. Entry ignored.");
          }
        }
        var r = this._genericCurrencies.get(n);
        if (r) {
          r.amount = a;
        }
      }
      g.CastleBasicController.getInstance().dispatchEvent(new c.CastleUserDataEvent(c.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED));
    }
  };
  CurrencyData.prototype.parseGCU = function (e) {
    if (e) {
      this._c1.amount = e[u.CollectableEnum.C1.serverKey];
      this._c2.amount = e[u.CollectableEnum.C2.serverKey];
      g.CastleBasicController.getInstance().dispatchEvent(new c.CastleUserDataEvent(c.CastleUserDataEvent.CHANGE_USER_CURRENCY));
    }
  };
  CurrencyData.prototype.getXmlCurrencyById = function (e) {
    return this._xmlCurrenciesById.get(e);
  };
  CurrencyData.prototype.getXmlCurrencyByName = function (e) {
    return this._xmlCurrenciesByName.get(e);
  };
  CurrencyData.prototype.getXmlCurrencyByKey = function (e) {
    return this._xmlCurrenciesByKey.get(e);
  };
  CurrencyData.prototype.getXmlCurrenciesByIdRange = function (e, t = true) {
    var i = [];
    if (this._xmlCurrenciesById != null) {
      for (var n = 0, o = Array.from(this._xmlCurrenciesById.values()); n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && _.ClientConstCurrency.isInIdRange(e, a.id)) {
          i.push(a);
        }
      }
    }
    if (t) {
      i.sort(r.ClientConstSort.sortByXmlCurrencyId);
    }
    return i;
  };
  CurrencyData.prototype.getCurrencyById = function (e) {
    var t = this.getXmlCurrencyById(e);
    if (t && o.DictionaryUtil.containsKey(this._genericCurrencies, t.jsonKey)) {
      var i = this._genericCurrencies.get(t.jsonKey);
      if (i) {
        return i;
      }
    }
    return null;
  };
  CurrencyData.prototype.getCurrencyByKey = function (e) {
    return this._genericCurrencies.get(e);
  };
  CurrencyData.prototype.getCurrencyByType = function (e) {
    if (e) {
      switch (e.type) {
        case u.CollectableEnum.C1:
          return this.c1;
        case u.CollectableEnum.C2:
          return this.c2;
        default:
          return this.getCurrencyById(e.id);
      }
    }
    return null;
  };
  CurrencyData.prototype.getAmountById = function (e) {
    var t = this.getCurrencyById(e);
    return s.int(t ? t.amount : 0);
  };
  CurrencyData.prototype.getAmountByKey = function (e) {
    var t = this.getCurrencyByKey(e);
    return s.int(t ? t.amount : 0);
  };
  CurrencyData.prototype.getAmountByType = function (e) {
    var t = this.getCurrencyByType(e);
    return s.int(t ? t.amount : 0);
  };
  Object.defineProperty(CurrencyData.prototype, "c1Amount", {
    get: function () {
      return this._c1.amount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CurrencyData.prototype, "c2Amount", {
    get: function () {
      return this._c2.amount;
    },
    enumerable: true,
    configurable: true
  });
  CurrencyData.prototype.getAffordableAmount = function (e) {
    var t = s.int(Number.MAX_VALUE);
    for (var i = 0, n = e.getCostTypes(); i < n.length; i++) {
      var o = n[i];
      var a = s.int(e.getCost(o));
      if (a > 0) {
        t = s.int(Math.min(t, this.getAmountByType(o) / a));
      }
    }
    return t;
  };
  CurrencyData.prototype.getMinuteSkips = function () {
    var e = [];
    if (this._genericCurrencies != null) {
      for (var t = 0, i = Array.from(this._genericCurrencies.keys()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = this.getXmlCurrencyByKey(n);
          if (o && _.ClientConstCurrency.isInIdRange(this.getCurrencyRangeByID(_.ClientConstCurrency.ID_RANGE_MINUTE_SKIP), o.id)) {
            e.push(this._genericCurrencies.get(n));
          }
        }
      }
    }
    e.sort(r.ClientConstSort.sortByCurrencyId);
    return e;
  };
  CurrencyData.prototype.getCurrenciesByIdRange = function (e, t = true) {
    var i = [];
    if (this._genericCurrencies != null) {
      for (var n = 0, o = Array.from(this._genericCurrencies.values()); n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.isInIdRange(e)) {
          i.push(a);
        }
      }
    }
    if (t) {
      i.sort(r.ClientConstSort.sortByCurrencyId);
    }
    return i;
  };
  CurrencyData.prototype.getCurrenciesByIdRanges = function (e, t = true) {
    var i = [];
    if (this._genericCurrencies != null) {
      for (var n = 0, o = Array.from(this._genericCurrencies.values()); n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          for (var s = 0; s < e.length; ++s) {
            if (a.isInIdRange(e[s])) {
              i.push(a);
              break;
            }
          }
        }
      }
    }
    if (t) {
      i.sort(r.ClientConstSort.sortByCurrencyId);
    }
    return i;
  };
  Object.defineProperty(CurrencyData.prototype, "genericCurrencies", {
    get: function () {
      return this._genericCurrencies;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CurrencyData.prototype, "c1", {
    get: function () {
      return this._c1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CurrencyData.prototype, "c2", {
    get: function () {
      return this._c2;
    },
    enumerable: true,
    configurable: true
  });
  CurrencyData.prototype.getResourceXmlVO = function (e) {
    return this._xmlResourceTypes.get(e);
  };
  CurrencyData.prototype.getCurrencyRangeByID = function (e) {
    return this._currencyRanges.get(e).currencyIDRange;
  };
  CurrencyData.prototype.getGeneralItemsIdRange = function () {
    return [Math.min(this.getCurrencyRangeByID(_.ClientConstCurrency.ID_RANGE_GENERALS_ITEMS)[0], this.getCurrencyRangeByID(_.ClientConstCurrency.ID_RANGE_GENERALS_ITEMS_XP)[0], this.getCurrencyRangeByID(_.ClientConstCurrency.ID_RANGE_GENERALS_ITEMS_OFFERING)[0]), Math.max(this.getCurrencyRangeByID(_.ClientConstCurrency.ID_RANGE_GENERALS_ITEMS)[1], this.getCurrencyRangeByID(_.ClientConstCurrency.ID_RANGE_GENERALS_ITEMS_XP)[1], this.getCurrencyRangeByID(_.ClientConstCurrency.ID_RANGE_GENERALS_ITEMS_OFFERING)[1])];
  };
  return CurrencyData;
}(C.CastleBasicData);
exports.CurrencyData = E;
a.classImplementsInterfaces(E, "IUpdatable");