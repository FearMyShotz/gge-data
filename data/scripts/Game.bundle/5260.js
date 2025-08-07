Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AreaDataStorageItem(e) {
    this._amount = 0;
    this._maxAmount = 0;
    this._resourceType = o.CollectableEnum.UNKNOWN;
    this._fieldEfficiency = -1;
    this._productionPerSec = 0;
    this._boostFactor = 1;
    this._resourceType = e;
  }
  AreaDataStorageItem.prototype.parseGPA = function (e) {
    var t = this._resourceType.serverKey;
    this._productionPerSec = e["D" + t] / 10;
    this._maxAmount = e["MR" + t];
    this._boostFactor = e[t + "M"] / 100;
  };
  AreaDataStorageItem.prototype.parseGCA = function (e) {
    this._fieldEfficiency = a.int(e["RA" + this._resourceType.serverKey]);
  };
  AreaDataStorageItem.prototype.parseGRC = function (e) {
    if (e[this._resourceType.serverKey] != null) {
      var t = e[this._resourceType.serverKey];
      this._amount = a.int(a.int(t));
    }
  };
  AreaDataStorageItem.prototype.timeTillHasEnoughResources = function (e) {
    var t = (e - this._amount) / this._productionPerSec;
    return a.int(Math.max(t * 60 * 60, 0));
  };
  Object.defineProperty(AreaDataStorageItem.prototype, "filledInPercent", {
    get: function () {
      return Math.max(0, Math.min(1, this._amount / this._maxAmount));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataStorageItem.prototype, "isFull", {
    get: function () {
      return this._amount >= this._maxAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataStorageItem.prototype, "freeSpace", {
    get: function () {
      return Math.max(0, this._maxAmount - this._amount);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataStorageItem.prototype, "fieldEfficiency", {
    get: function () {
      return this._fieldEfficiency;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataStorageItem.prototype, "amount", {
    get: function () {
      return this._amount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataStorageItem.prototype, "maxAmount", {
    get: function () {
      return this._maxAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataStorageItem.prototype, "productionPerSec", {
    get: function () {
      return this._productionPerSec;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataStorageItem.prototype, "boostFactor", {
    get: function () {
      return this._boostFactor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataStorageItem.prototype, "resourceType", {
    get: function () {
      return this._resourceType;
    },
    enumerable: true,
    configurable: true
  });
  return AreaDataStorageItem;
}();
exports.AreaDataStorageItem = n;
var o = require("./12.js");
var a = require("./6.js");