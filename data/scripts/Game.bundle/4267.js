Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./368.js");
var r = require("./1419.js");
var l = require("./565.js");
var c = require("./72.js");
var u = require("./4.js");
var d = require("./4268.js");
var p = require("./4269.js");
var h = function (e) {
  function CastleCrestSymbolData(t) {
    var i = e.call(this) || this;
    i._standardCrestSymbols = new Map();
    i._premiumCrestSymbols = new Map();
    i._npcCrestSymbols = new Map();
    i.createNPCSymbols();
    i.parseXML(t);
    return i;
  }
  n.__extends(CastleCrestSymbolData, e);
  CastleCrestSymbolData.prototype.createNPCSymbols = function () {
    for (var e = 0, t = s.ClientConstCrest.NPC_SYMBOL_IDS; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined) {
        this.createNPCCrestSymbol(i);
      }
    }
  };
  CastleCrestSymbolData.prototype.parseXML = function (e) {
    var t = e.crestsymbols;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          if ((o.requiredAchievementID || "").length > 0) {
            this.createPremiumCrestSymbol(o);
          } else {
            this.createStandardCrestSymbol(o);
          }
        }
      }
    }
  };
  CastleCrestSymbolData.prototype.createNPCCrestSymbol = function (e) {
    var t = new p.StandardCrestSymbolVO(e);
    this._npcCrestSymbols.set(e, t);
  };
  CastleCrestSymbolData.prototype.parse_gus = function (e, t) {
    this._unlockedPremiumSymbols = [];
    this._boughtPremiumSymbols = [];
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var a = n[i];
        if (a !== undefined) {
          var s = this.getCrestSymbolVOByID(a);
          if (o.instanceOfClass(s, "PremiumCrestSymbolVO")) {
            this._unlockedPremiumSymbols.push(s);
          }
        }
      }
    }
    if (t != null) {
      for (var r = 0, l = t; r < l.length; r++) {
        var c = l[r];
        if (c !== undefined) {
          var u = this.getCrestSymbolVOByID(c);
          if (o.instanceOfClass(u, "PremiumCrestSymbolVO")) {
            if (this._unlockedPremiumSymbols.indexOf(u) < 0) {
              this._unlockedPremiumSymbols.push(u);
            }
            this._boughtPremiumSymbols.push(u);
          }
        }
      }
    }
    this.broadcastUpdate();
  };
  CastleCrestSymbolData.prototype.broadcastUpdate = function () {
    this.dispatchEvent(new r.CastleCrestSymbolDataEvent(r.CastleCrestSymbolDataEvent.CREST_SYMBOL_DATA_UPDATED));
  };
  CastleCrestSymbolData.prototype.createStandardCrestSymbol = function (e) {
    var t = parseInt(e.crestSymbolID || "");
    var i = new p.StandardCrestSymbolVO(t);
    this._standardCrestSymbols.set(t, i);
  };
  CastleCrestSymbolData.prototype.createPremiumCrestSymbol = function (e) {
    var t = parseInt(e.crestSymbolID || "");
    var i = new d.PremiumCrestSymbolVO(t);
    i.parseXML(e);
    this._premiumCrestSymbols.set(t, i);
  };
  Object.defineProperty(CastleCrestSymbolData.prototype, "standardCrestSymbols", {
    get: function () {
      return this._standardCrestSymbols;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCrestSymbolData.prototype, "premiumCrestSymbols", {
    get: function () {
      return this._premiumCrestSymbols;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCrestSymbolData.prototype, "unlockedPremiumSymbols", {
    get: function () {
      return this._unlockedPremiumSymbols;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCrestSymbolData.prototype, "boughtPremiumSymbols", {
    get: function () {
      return this._boughtPremiumSymbols;
    },
    enumerable: true,
    configurable: true
  });
  CastleCrestSymbolData.prototype.getCrestSymbolVOByID = function (e) {
    var t;
    if (this.standardCrestSymbols.get(e)) {
      t = this.standardCrestSymbols.get(e);
    } else if (this.premiumCrestSymbols.get(e)) {
      t = this.premiumCrestSymbols.get(e);
    } else if (this._npcCrestSymbols.get(e)) {
      t = this._npcCrestSymbols.get(e);
    }
    return t;
  };
  CastleCrestSymbolData.prototype.getRandomStandardSymbol = function () {
    var e = this.getAllStandardSymbolIDsAsSortedArray();
    var t = a.int(Math.random() * (e.length - 1));
    var i = a.int(e[t]);
    return this.getCrestSymbolVOByID(i);
  };
  CastleCrestSymbolData.prototype.isSymbolUnlocked = function (e) {
    var t = false;
    if (o.instanceOfClass(e, "PremiumCrestSymbolVO")) {
      if (u.CastleModel.crestSymbolData.unlockedPremiumSymbols && u.CastleModel.crestSymbolData.unlockedPremiumSymbols.indexOf(e) >= 0) {
        t = true;
      }
    } else {
      t = true;
    }
    return t;
  };
  CastleCrestSymbolData.prototype.isSymbolBought = function (e) {
    var t = false;
    if (o.instanceOfClass(e, "PremiumCrestSymbolVO")) {
      if (u.CastleModel.crestSymbolData.boughtPremiumSymbols && u.CastleModel.crestSymbolData.boughtPremiumSymbols.indexOf(e) >= 0) {
        t = true;
      }
    } else {
      t = true;
    }
    return t;
  };
  CastleCrestSymbolData.prototype.getAllPremiumSymbolIDsAsSortedArray = function () {
    var e = [];
    if (this._premiumCrestSymbols != null) {
      for (var t = 0, i = Array.from(this._premiumCrestSymbols.keys()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e.push(this._premiumCrestSymbols.get(n).id);
        }
      }
    }
    e.sort(l.numericSort);
    return e;
  };
  CastleCrestSymbolData.prototype.getAllStandardSymbolIDsAsSortedArray = function () {
    var e = [];
    if (this._standardCrestSymbols != null) {
      for (var t = 0, i = Array.from(this._standardCrestSymbols.keys()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e.push(this._standardCrestSymbols.get(n).id);
        }
      }
    }
    e.sort(l.numericSort);
    return e;
  };
  CastleCrestSymbolData.prototype.getAllAvailableSymbols = function () {
    var e = [];
    if (this._standardCrestSymbols != null) {
      for (var t = 0, i = Array.from(this._standardCrestSymbols.keys()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && o.instanceOfClass(this._standardCrestSymbols.get(n), "StandardCrestSymbolVO")) {
          e.push(this._standardCrestSymbols.get(n));
        }
      }
    }
    if (this._boughtPremiumSymbols != null) {
      for (var a = 0, s = this._boughtPremiumSymbols; a < s.length; a++) {
        var r = s[a];
        if (r !== undefined) {
          e.push(r);
        }
      }
    }
    return e;
  };
  return CastleCrestSymbolData;
}(c.CastleEventDispatcher);
exports.CastleCrestSymbolData = h;