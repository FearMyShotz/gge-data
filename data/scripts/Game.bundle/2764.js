Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function IsoMovementWorkPlaces(e) {
    this._workPlaces = new Map();
    this._isoData = e;
  }
  IsoMovementWorkPlaces.prototype.destroy = function () {
    this._workPlaces.clear();
  };
  IsoMovementWorkPlaces.prototype.reinit = function () {
    this._workPlaces = this._workPlaces || new Map();
    var e = this.isoData.objects.provider.getObjectByType(o.IsoObjectEnum.WOOD_RESOURCE_FIELD);
    this._workPlaces.set(o.IsoObjectEnum.MOVEMENT_WOOD_CUTTER, Array(e.spawnPoints.length).fill(false));
    var t = this.isoData.objects.provider.getObjectByType(o.IsoObjectEnum.STONE_RESOURCE_FIELD);
    this._workPlaces.set(o.IsoObjectEnum.MOVEMENT_STONE_CUTTER, Array(t.getWorkPointsByIndex(0).length * t.fieldAmount).fill(false));
    var i = this.isoData.objects.provider.getObjectByType(o.IsoObjectEnum.FOOD_RESOURCE_FIELD);
    this._workPlaces.set(o.IsoObjectEnum.MOVEMENT_FARMER, Array(i.getWorkPointsByIndex(0).length * i.fieldAmount).fill(false));
  };
  IsoMovementWorkPlaces.prototype.markWorkPlace = function (e, t, i) {
    this._workPlaces.get(e)[t] = i;
  };
  IsoMovementWorkPlaces.prototype.hasFreeSlot = function (e) {
    if (!this._workPlaces.has(e)) {
      return false;
    }
    for (var t = this._workPlaces.get(e), i = 0; i < t.length; ++i) {
      if (!t[i]) {
        return true;
      }
    }
    return false;
  };
  IsoMovementWorkPlaces.prototype.getIndexOfFreeSlot = function (e) {
    if (!this._workPlaces.has(e)) {
      return -1;
    }
    for (var t = this._workPlaces.get(e), i = [], n = 0; n < t.length; ++n) {
      if (!t[n]) {
        i.push(n);
      }
    }
    if (i.length <= 0) {
      return -1;
    } else {
      return s.int(i[a.ClientConstUtils.getRandomInt(0, i.length - 1)]);
    }
  };
  Object.defineProperty(IsoMovementWorkPlaces.prototype, "isoData", {
    get: function () {
      return this._isoData;
    },
    enumerable: true,
    configurable: true
  });
  return IsoMovementWorkPlaces;
}();
exports.IsoMovementWorkPlaces = n;
var o = require("./80.js");
var a = require("./55.js");
var s = require("./6.js");