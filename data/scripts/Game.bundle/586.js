Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./6.js");
var l = require("./4.js");
var c = require("./1224.js");
var u = function (e) {
  function UnitInventoryList() {
    var t = this;
    t.isStrongholdInventory = false;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._inventoryItemList = [];
    return t;
  }
  n.__extends(UnitInventoryList, e);
  Object.defineProperty(UnitInventoryList.prototype, "units", {
    get: function () {
      return this._inventoryItemList;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.AUnitInventory.prototype, "units").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  UnitInventoryList.prototype.removeUnit = function (e) {};
  UnitInventoryList.prototype.addUnitReference = function (e) {
    this._inventoryItemList.push(e);
  };
  UnitInventoryList.prototype.addUnit = function (e, t) {
    if (!(t <= 0)) {
      var i = a.castAs(l.CastleModel.wodData.createVObyWOD(e, d.CastleWodData.TYPE_UNIT), "BasicUnitVO");
      if (!i) {
        throw new Error("Tried to add an invalid unit (wodID: " + e + ") to inventory. iXML verison: " + o.EnvGlobalsHandler.globals.versionInformation.itemXmlVersion);
      }
      i.inventoryAmount = t;
      i.isStronghold = this.isStrongholdInventory;
      this._inventoryItemList.push(i);
      if (!this.blockEventDispatch) {
        this.dispatchChange();
      }
    }
  };
  UnitInventoryList.prototype.retainAll = function (e) {
    for (var t = 0; t < this._inventoryItemList.length; ++t) {
      if (!e(this._inventoryItemList[t])) {
        this._inventoryItemList.splice(t, 1);
        --t;
      }
    }
  };
  UnitInventoryList.prototype.getUnitCountByWodId = function (e) {
    return r.int(this.getUnitCount(this.byWodId(e)));
  };
  UnitInventoryList.prototype.byWodId = function (e) {
    return function (t) {
      return t.wodId == e;
    };
  };
  UnitInventoryList.prototype.clear = function () {
    this._inventoryItemList = [];
  };
  return UnitInventoryList;
}(c.AUnitInventory);
exports.UnitInventoryList = u;
var d = require("./56.js");
s.classImplementsInterfaces(u, "IUnitInventory");