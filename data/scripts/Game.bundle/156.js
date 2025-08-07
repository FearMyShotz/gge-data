Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./6.js");
var c = require("./4.js");
var u = require("./1224.js");
var d = function (e) {
  function UnitInventoryDictionary() {
    var t = e.call(this) || this;
    t._inventoryItems = new Map();
    t.blockEventDispatch = false;
    return t;
  }
  n.__extends(UnitInventoryDictionary, e);
  UnitInventoryDictionary.prototype.getUnit = function (e) {
    return this._inventoryItems.get(e);
  };
  UnitInventoryDictionary.prototype.onInventoryItemChanged = function (e) {};
  Object.defineProperty(UnitInventoryDictionary.prototype, "units", {
    get: function () {
      return this._inventoryItems;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AUnitInventory.prototype, "units").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  UnitInventoryDictionary.prototype.getUnitCountByWodId = function (e) {
    return l.int(this._inventoryItems.get(e) ? this._inventoryItems.get(e).inventoryAmount : 0);
  };
  UnitInventoryDictionary.prototype.clear = function () {
    this._inventoryItems = new Map();
    this.blockEventDispatch = false;
  };
  UnitInventoryDictionary.prototype.changeUnitAmount = function (e, t) {
    var i = l.int(this._inventoryItems.get(e) ? this._inventoryItems.get(e).inventoryAmount : 0);
    this.setUnit(e, t + i);
  };
  UnitInventoryDictionary.prototype.addUnit = function (e, t) {
    this.changeUnitAmount(e, Math.max(0, t));
  };
  UnitInventoryDictionary.prototype.addUnitReference = function (e) {
    this._inventoryItems.set(e.wodId, e);
  };
  UnitInventoryDictionary.prototype.removeUnit = function (e) {
    if (a.DictionaryUtil.containsKey(this._inventoryItems, e)) {
      this._inventoryItems.delete(e);
    }
  };
  UnitInventoryDictionary.prototype.setUnit = function (e, t = 1) {
    if (t <= 0) {
      this._inventoryItems.delete(e);
      if (!this.blockEventDispatch) {
        this.dispatchChange();
      }
      return;
    }
    if (!this._inventoryItems.get(e)) {
      var i = c.CastleModel.wodData.createVObyWOD(e, p.CastleWodData.TYPE_UNIT);
      if (!s.instanceOfClass(i, "BasicUnitVO")) {
        o.warn("Tried to add an invalid unit (wodID: " + e + ") to inventory");
        return;
      }
      this._inventoryItems.set(e, i);
    }
    this._inventoryItems.get(e).inventoryAmount = t;
    this.onInventoryItemChanged(e);
    if (!this.blockEventDispatch) {
      this.dispatchChange();
    }
  };
  UnitInventoryDictionary.prototype.deductUnit = function (e, t) {
    var i = null;
    if (this._inventoryItems.get(e) && t > 0) {
      var n = l.int(this._inventoryItems.get(e).inventoryAmount);
      t = l.int(Math.min(t, n));
      (i = c.CastleModel.wodData.createVObyWOD(e, p.CastleWodData.TYPE_UNIT)).inventoryAmount = t;
      this.changeUnitAmount(e, Math.min(0, -t));
    }
    return i;
  };
  UnitInventoryDictionary.prototype.retainAll = function (e) {
    if (this._inventoryItems != null) {
      for (var t = 0, i = Array.from(this._inventoryItems.keys()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          if (!e(this._inventoryItems.get(n))) {
            this._inventoryItems.delete(n);
          }
        }
      }
    }
  };
  return UnitInventoryDictionary;
}(u.AUnitInventory);
exports.UnitInventoryDictionary = d;
var p = require("./56.js");
r.classImplementsInterfaces(d, "IMergedUnitInventory", "IUnitInventory");