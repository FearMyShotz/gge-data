Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./46.js");
var l = require("./325.js");
var c = require("./15.js");
var u = require("./4.js");
var d = require("./5624.js");
var p = require("./324.js");
var h = require("./5625.js");
var g = require("./5626.js");
var C = function () {
  function DecoStorageVO(e) {
    this._storageIDs = [];
    this._regularDecos = new Map();
    this._customDecos = [];
    this._uniqueDecos = [];
    this._storageIDs.push(e);
  }
  DecoStorageVO.prototype.parseSIN = function (e) {
    this._regularDecos = new Map();
    if (e && e.RD) {
      for (var t = 0, i = e.RD; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = new h.DecoStorageRegularDecoVO();
          o.parseData(n);
          if (this._storageIDs.indexOf(_.DecorationConst.AREA_INVENTORY_STORAGE_ID) > -1) {
            o.localStorageAmount = o.amount;
          }
          if (u.CastleModel.wodData.getBuildingVOById(o.wodId)) {
            this._regularDecos.set(o.wodId, o);
          }
        }
      }
    }
    this._customDecos = [];
    if (e && e.CD) {
      for (var a = 0, s = e.CD; a < s.length; a++) {
        n = s[a];
        var r = new d.DecoStorageCustomDecoVO();
        r.parseData(n);
        this._customDecos.push(r);
      }
    }
    this._uniqueDecos = [];
    if (e && e.UD) {
      for (var l = 0, c = e.UD; l < c.length; l++) {
        n = c[l];
        var p = new g.DecoStorageUniqueDecoVO();
        p.parseData(n);
        this._uniqueDecos.push(p);
      }
    }
  };
  DecoStorageVO.prototype.markAllDecosAsSeen = function () {
    var e = this.getNewAmount();
    if (this._regularDecos != null) {
      for (var t = 0, i = Array.from(this._regularDecos.values()); t < i.length; t++) {
        i[t].newAmount = 0;
      }
    }
    if (this._customDecos != null) {
      for (var n = 0, o = this._customDecos; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          a.isNew = false;
        }
      }
    }
    if (this._uniqueDecos != null) {
      for (var s = 0, r = this._uniqueDecos; s < r.length; s++) {
        var l = r[s];
        if (l !== undefined) {
          l.isNew = false;
        }
      }
    }
    if (e > 0) {
      c.CastleBasicController.getInstance().dispatchEvent(new p.DecoStorageEvent(p.DecoStorageEvent.ON_NEW_INDICATOR_UPDATED));
    }
  };
  DecoStorageVO.prototype.getNewAmount = function (e = true, t = true) {
    var i = 0;
    if (this._regularDecos != null) {
      for (var n = 0, o = Array.from(this._regularDecos.values()); n < o.length; n++) {
        var a = o[n];
        var s = u.CastleModel.wodData.getBuildingVOById(a.wodId) instanceof l.ADecoBuildingVO;
        if (e && s || t && !s) {
          i += a.newAmount;
        }
      }
    }
    if (e) {
      if (this._customDecos != null) {
        for (var r = 0, c = this._customDecos; r < c.length; r++) {
          var d = c[r];
          if (d !== undefined && d.isNew) {
            i++;
          }
        }
      }
      if (this._uniqueDecos != null) {
        for (var p = 0, h = this._uniqueDecos; p < h.length; p++) {
          var g = h[p];
          if (g !== undefined && g.isNew) {
            i++;
          }
        }
      }
    }
    return i;
  };
  DecoStorageVO.prototype.getCappedNewAmount = function (e = true, t = true) {
    return Math.min(this.getNewAmount(e, t), 99);
  };
  DecoStorageVO.prototype.getCustomDecoByCustomId = function (e) {
    if (this._customDecos != null) {
      for (var t = 0, i = this._customDecos; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.customId == e) {
          return n;
        }
      }
    }
    return null;
  };
  DecoStorageVO.prototype.getUniqueDecoByCustomId = function (e) {
    if (this._uniqueDecos != null) {
      for (var t = 0, i = this._uniqueDecos; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.uniqueId == e) {
          return n;
        }
      }
    }
    return null;
  };
  DecoStorageVO.prototype.isNew = function (e) {
    if (a.instanceOfClass(e, "CustomDecoBuildingVO")) {
      var t = e;
      var i = this.getCustomDecoByCustomId(t.uniqueBuildingId);
      if (i) {
        return i.isNew;
      }
    }
    if (a.instanceOfClass(e, "DecoBuildingVO")) {
      var n = e;
      if (n.uniqueBuildingId >= 0) {
        var s = this.getUniqueDecoByCustomId(n.uniqueBuildingId);
        if (s) {
          return s.isNew;
        }
      }
    }
    return !!o.DictionaryUtil.containsKey(this._regularDecos, e.wodId) && this._regularDecos.get(e.wodId).newAmount > 0;
  };
  DecoStorageVO.prototype.isDecoInStorage = function (e) {
    return a.instanceOfClass(e, "DecoBuildingVO") && o.DictionaryUtil.containsKey(this._regularDecos, e.wodId);
  };
  DecoStorageVO.prototype.getAmount = function (e) {
    if (o.DictionaryUtil.containsKey(this._regularDecos, e)) {
      return this._regularDecos.get(e).amount;
    }
    for (var t = 0, i = this._customDecos; t < i.length; t++) {
      if (i[t].wodId == e) {
        return 1;
      }
    }
    for (var n = 0, a = this._uniqueDecos; n < a.length; n++) {
      if (a[n].wodId == e) {
        return 1;
      }
    }
    return 0;
  };
  DecoStorageVO.prototype.getAmountForBuildMenu = function (e) {
    var t = this.getRelevantWodIdListForBuildMenu(e);
    if (t.length <= 0) {
      return this.getAmount(e);
    }
    var i = 0;
    for (var n = 0; n < t.length; ++n) {
      i += s.int(this.getAmount(t[n]));
    }
    return i;
  };
  DecoStorageVO.prototype.getRelevantWodIdListForBuildMenu = function (e) {
    var t = [];
    var i = r.IsoHelper.data.createIsoObjectVOByXml(e);
    if (i) {
      t.push(i.wodId);
      for (var n = i.getUpgradeVO(); n != null;) {
        t.push(n.wodId);
        n = n.getUpgradeVO();
      }
    }
    return t;
  };
  DecoStorageVO.prototype.getHighestBuildingLevel = function (e) {
    var t;
    var i = this.getRelevantWodIdListForBuildMenu(e);
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && this.getAmount(a) > 0) {
          var s = castAs(r.IsoHelper.data.createIsoObjectVOByXml(a, null, false), "AShopVO");
          if (s && (!t || t.level < s.level)) {
            t = s;
          }
        }
      }
    }
    return t;
  };
  DecoStorageVO.prototype.getAllDecosAsBuildings = function () {
    var e = [];
    if (this._regularDecos != null) {
      for (var t = 0, i = Array.from(this._regularDecos.values()); t < i.length; t++) {
        var n = i[t];
        if (n) {
          var o = r.IsoHelper.data.createIsoObjectVOByXml(n.wodId);
          if (o) {
            e.push(o);
          }
        }
      }
    }
    return e = (e = e.concat(this.getCustomDecosAsBuildings())).concat(this.getUniqueDecosAsBuildings());
  };
  DecoStorageVO.prototype.getCustomDecosAsBuildings = function () {
    var e = [];
    if (this._customDecos != null) {
      for (var t = 0, i = this._customDecos; t < i.length; t++) {
        var o = i[t];
        if (o !== undefined) {
          var a = castAs(r.IsoHelper.data.createIsoObjectVOByXml(o.wodId), "CustomDecoBuildingVO");
          if (a) {
            a.customDecoPoints = o.decoValue;
            a.customId = o.customId;
            e.push(a);
          } else {
            n.warn("DecoStorageVO.getCustomDecosAsBuildings(): wodId '" + o.wodId + "' is not a customDecoBuilding. Should be investigated.");
          }
        }
      }
    }
    return e;
  };
  DecoStorageVO.prototype.getUniqueDecosAsBuildings = function () {
    var e = [];
    if (this._uniqueDecos != null) {
      for (var t = 0, i = this._uniqueDecos; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = castAs(r.IsoHelper.data.createIsoObjectVOByXml(n.wodId), "ABasicBuildingVO");
          if (a.instanceOfClass(o, "DecoBuildingVO")) {
            var s = o;
            s.fusionInfoVO.serverXP = n.fusionXP;
            s.fusionInfoVO.uniqueId = n.uniqueId;
          }
          e.push(o);
        }
      }
    }
    return e;
  };
  DecoStorageVO.prototype.isEventKingdomStorage = function () {
    return this.storageIDs.indexOf(_.DecorationConst.GLOBAL_DECORATION_STORAGE_ID) == -1;
  };
  DecoStorageVO.prototype.getCurrentCapacity = function () {
    return s.int(this._uniqueDecos.length + this._customDecos.length);
  };
  DecoStorageVO.prototype.getMaxCapacity = function () {
    return s.int(_.DecorationConst.SOFT_CAP);
  };
  DecoStorageVO.prototype.isCapacityFull = function () {
    return this.getCurrentCapacity() >= this.getMaxCapacity();
  };
  Object.defineProperty(DecoStorageVO.prototype, "regularDecos", {
    get: function () {
      return this._regularDecos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageVO.prototype, "customDecos", {
    get: function () {
      return this._customDecos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageVO.prototype, "storageIDs", {
    get: function () {
      return this._storageIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageVO.prototype, "uniqueDecos", {
    get: function () {
      return this._uniqueDecos;
    },
    enumerable: true,
    configurable: true
  });
  DecoStorageVO.prototype.addDecoStorage = function (e) {
    for (var t = 0, i = Array.from(e.regularDecos.keys()); t < i.length; t++) {
      var n = i[t];
      if (this._regularDecos.has(n)) {
        this._regularDecos.get(n).amount = this._regularDecos.get(n).amount + e.regularDecos.get(n).amount;
        this._regularDecos.get(n).newAmount = this._regularDecos.get(n).newAmount + e.regularDecos.get(n).newAmount;
        this._regularDecos.get(n).localStorageAmount = this._regularDecos.get(n).localStorageAmount + e.regularDecos.get(n).localStorageAmount;
      } else {
        this._regularDecos.set(n, e.regularDecos.get(n));
      }
    }
    this._customDecos = this._customDecos.concat(e.customDecos);
    this._uniqueDecos = this._uniqueDecos.concat(e.uniqueDecos);
    for (var o = 0, a = e.storageIDs; o < a.length; o++) {
      var s = a[o];
      if (this._storageIDs.indexOf(s) == -1) {
        this._storageIDs.push(s);
      }
    }
  };
  DecoStorageVO.prototype.isInLocalStorage = function (e) {
    return !!this.regularDecos.has(e.wodId) && this.regularDecos.get(e.wodId).localStorageAmount > 0;
  };
  DecoStorageVO.prototype.getNewAmountByWodID = function (e) {
    if (this._regularDecos.has(e)) {
      return this._regularDecos.get(e).newAmount;
    } else {
      return 0;
    }
  };
  return DecoStorageVO;
}();
exports.DecoStorageVO = C;
var _ = require("./5.js");