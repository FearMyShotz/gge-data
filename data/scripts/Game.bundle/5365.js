Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function CollectEventInfoVO(e) {
    this._collectorEventOptionID = 0;
    this._collectorCurrencyID = 0;
    this._collectorKeyCurrencyID = 0;
    this._collectorKeyBoost = 0;
    this._collectorKeyLimit = 0;
    this._collectorKeyPackageID = 0;
    this._baseCollectorBoost = 0;
    this._eventStartCurrencyAmount = 0;
    this._dailyCurrencyIncrease = 0;
    this._collectorEventColor = 0;
    this._rewards = [];
    this._collectorEventOptionID = parseInt(n.CastleXMLUtils.getValueOrDefault("collectorEventOptionID", e, "0", true));
    this._collectorCurrencyID = parseInt(n.CastleXMLUtils.getValueOrDefault("collectorCurrencyID", e, "0", true));
    this._collectorKeyCurrencyID = parseInt(n.CastleXMLUtils.getValueOrDefault("collectorKeyCurrencyID", e, "0", true));
    this._collectorKeyBoost = parseInt(n.CastleXMLUtils.getValueOrDefault("collectorKeyBoost", e, "0", true));
    this._collectorKeyLimit = parseInt(n.CastleXMLUtils.getValueOrDefault("collectorKeyLimit", e, "0", true));
    this._collectorKeyPackageID = parseInt(n.CastleXMLUtils.getValueOrDefault("collectorKeyPackageID", e, "0", true));
    this._baseCollectorBoost = parseInt(n.CastleXMLUtils.getValueOrDefault("baseCollectorBoost", e, "0", true));
    this._eventStartCurrencyAmount = parseInt(n.CastleXMLUtils.getValueOrDefault("eventStartCurrencyAmount", e, "0", true));
    this._dailyCurrencyIncrease = parseInt(n.CastleXMLUtils.getValueOrDefault("dailyCurrencyIncrease", e, "0", true));
    this._collectorEventSkinName = n.CastleXMLUtils.getValueOrDefault("collectorEventSkinName", e, "Default", true);
    this._collectorEventColor = parseInt("0x" + n.CastleXMLUtils.getValueOrDefault("collectorEventColor", e, "FF88FF"));
  }
  CollectEventInfoVO.prototype.addCollectEventRewardVO = function (e) {
    this._rewards.push(e);
    this._rewards.sort(this.bindFunction(this.sortByMinPoints));
  };
  CollectEventInfoVO.prototype.sortByMinPoints = function (e, t) {
    return e.minCurrencyAmount - t.minCurrencyAmount;
  };
  Object.defineProperty(CollectEventInfoVO.prototype, "collectorEventOptionID", {
    get: function () {
      return this._collectorEventOptionID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventInfoVO.prototype, "collectorCurrencyID", {
    get: function () {
      return this._collectorCurrencyID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventInfoVO.prototype, "collectorKeyCurrencyID", {
    get: function () {
      return this._collectorKeyCurrencyID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventInfoVO.prototype, "collectorKeyBoost", {
    get: function () {
      return this._collectorKeyBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventInfoVO.prototype, "collectorKeyLimit", {
    get: function () {
      return this._collectorKeyLimit;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventInfoVO.prototype, "collectorKeyPackageID", {
    get: function () {
      return this._collectorKeyPackageID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventInfoVO.prototype, "baseCollectorBoost", {
    get: function () {
      return this._baseCollectorBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventInfoVO.prototype, "eventStartCurrencyAmount", {
    get: function () {
      return this._eventStartCurrencyAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventInfoVO.prototype, "dailyCurrencyIncrease", {
    get: function () {
      return this._dailyCurrencyIncrease;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventInfoVO.prototype, "collectorEventSkinName", {
    get: function () {
      return this._collectorEventSkinName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventInfoVO.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventInfoVO.prototype, "collectorEventColor", {
    get: function () {
      return this._collectorEventColor;
    },
    enumerable: true,
    configurable: true
  });
  return CollectEventInfoVO;
}();
exports.CollectEventInfoVO = o;