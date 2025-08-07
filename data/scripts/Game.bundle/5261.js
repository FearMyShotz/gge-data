Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./6.js");
var d = require("./4.js");
var p = function (e) {
  function AreaDataStorage() {
    var t = e.call(this) || this;
    t.reset();
    return t;
  }
  n.__extends(AreaDataStorage, e);
  AreaDataStorage.prototype.reset = function () {
    this._items = new Map();
    for (var e = 0, t = h.ClientConstCollectable.GROUP_LIST_RESOURCES; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined) {
        this.addStorageSave(i);
      }
    }
  };
  AreaDataStorage.prototype.addStorageSave = function (e) {
    if (!this._items.get(e)) {
      this._items.set(e, new C.AreaDataStorageItem(e));
    }
  };
  AreaDataStorage.prototype.parseGPA = function (e) {
    if (this._items != null) {
      for (var t = 0, i = Array.from(this._items.values()); t < i.length; t++) {
        i[t].parseGPA(e);
      }
    }
  };
  AreaDataStorage.prototype.parseGCA = function (e) {
    if (this._items != null) {
      for (var t = 0, i = Array.from(this._items.values()); t < i.length; t++) {
        i[t].parseGCA(e);
      }
    }
  };
  AreaDataStorage.prototype.parseGRC = function (e) {
    if (this._items != null) {
      for (var t = 0, i = Array.from(this._items.values()); t < i.length; t++) {
        i[t].parseGRC(e);
      }
    }
  };
  AreaDataStorage.prototype.getItem = function (e) {
    this.addStorageSave(e);
    return this._items.get(e);
  };
  AreaDataStorage.prototype.getSpecialItem = function () {
    var e = g.CollectableEnum.UNKNOWN;
    switch (this.areaData.areaInfo.kingdomID) {
      case a.WorldClassic.KINGDOM_ID:
        e = g.CollectableEnum.IRON;
        break;
      case r.WorldIce.KINGDOM_ID:
        e = g.CollectableEnum.COAL;
        break;
      case s.WorldDessert.KINGDOM_ID:
        e = g.CollectableEnum.OIL;
        break;
      case c.WorldVolcano.KINGDOM_ID:
        e = g.CollectableEnum.GLASS;
        break;
      case l.WorldIsland.KINGDOM_ID:
        e = g.CollectableEnum.AQUAMARINE;
    }
    return this.getItem(e);
  };
  AreaDataStorage.prototype.getReceivableSpecialResources = function () {
    var e = [];
    if (d.CastleModel.userData.isLegend) {
      e.push(g.CollectableEnum.COAL);
      e.push(g.CollectableEnum.OIL);
      e.push(g.CollectableEnum.GLASS);
      e.push(g.CollectableEnum.IRON);
      if (d.CastleModel.userData.userLegendLevel >= this.minHoneyMeadLegendLevel && d.CastleModel.kingdomData.activeKingdomID == l.WorldIsland.KINGDOM_ID) {
        e.push(g.CollectableEnum.HONEY);
      }
    } else {
      var t = this.getProducibleSpecialResource();
      if (t) {
        e.push(t);
      }
    }
    return e;
  };
  Object.defineProperty(AreaDataStorage.prototype, "minHoneyMeadLegendLevel", {
    get: function () {
      return m.MathBase.min(d.CastleModel.wodData.getBuildingVOById(_.ClientConstCastle.BREWERY_BUILDING_WOD).requiredLegendLevel, d.CastleModel.wodData.getBuildingVOById(_.ClientConstCastle.BEEKEEPER_BUILDING_WOD).requiredLegendLevel);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataStorage.prototype, "minBeefLegendLevel", {
    get: function () {
      return this.minHoneyMeadLegendLevel;
    },
    enumerable: true,
    configurable: true
  });
  AreaDataStorage.prototype.getProducibleSpecialResource = function () {
    switch (d.CastleModel.kingdomData.activeKingdomID) {
      case r.WorldIce.KINGDOM_ID:
        return g.CollectableEnum.COAL;
      case c.WorldVolcano.KINGDOM_ID:
        return g.CollectableEnum.GLASS;
      case s.WorldDessert.KINGDOM_ID:
        return g.CollectableEnum.OIL;
      case a.WorldClassic.KINGDOM_ID:
        if (d.CastleModel.userData.isLegend) {
          return g.CollectableEnum.IRON;
        } else {
          return null;
        }
      default:
        return null;
    }
  };
  AreaDataStorage.prototype.getAffordableAmount = function (e) {
    var t = u.int(Number.MAX_VALUE);
    for (var i = 0, n = e.getCostTypes(); i < n.length; i++) {
      var o = n[i];
      var a = u.int(e.getCost(o));
      var s = this.getItem(o.type);
      if (a > 0 && s) {
        t = u.int(Math.min(t, s.amount / a));
      }
    }
    return t;
  };
  return AreaDataStorage;
}(require("./562.js").AAreaDataComponent);
exports.AreaDataStorage = p;
var h = require("./86.js");
var g = require("./12.js");
var C = require("./5262.js");
var _ = require("./18.js");
var m = require("./2.js");
o.classImplementsInterfaces(p, "ICollectableRendererList", "IAreaDataComponent");