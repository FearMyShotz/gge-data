Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function AlienRerollChanceVO() {
    this._amountUnits = 0;
    this._chance = NaN;
    this._isSoftCurrency = false;
    this._isHardCurrency = false;
  }
  AlienRerollChanceVO.prototype.parseXML = function (e) {
    this._amountUnits = parseInt(n.CastleXMLUtils.getValueOrDefault("amountUnits", e, "0", true));
    this._chance = parseInt(n.CastleXMLUtils.getValueOrDefault("chance", e, "0", true)) / 1000;
    this._isSoftCurrency = parseInt(n.CastleXMLUtils.getValueOrDefault("isSoftCurrency", e, "0")) == 1;
    this._isHardCurrency = parseInt(n.CastleXMLUtils.getValueOrDefault("isHardCurrency", e, "0")) == 1;
  };
  Object.defineProperty(AlienRerollChanceVO.prototype, "amountUnits", {
    get: function () {
      return this._amountUnits;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienRerollChanceVO.prototype, "chance", {
    get: function () {
      return this._chance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienRerollChanceVO.prototype, "isSoftCurrency", {
    get: function () {
      return this._isSoftCurrency;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienRerollChanceVO.prototype, "isHardCurrency", {
    get: function () {
      return this._isHardCurrency;
    },
    enumerable: true,
    configurable: true
  });
  return AlienRerollChanceVO;
}();
exports.AlienRerollChanceVO = o;