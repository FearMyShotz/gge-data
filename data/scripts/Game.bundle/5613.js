Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = function () {
  function XmlCurrencyRangeVO() {
    this._typeID = -1;
    this._typeName = "";
    this._currencyIDRange = [];
  }
  XmlCurrencyRangeVO.prototype.parseXml = function (e) {
    this._typeID = n.int(o.CastleXMLUtils.getIntAttribute("typeID", e, -1));
    this._typeName = o.CastleXMLUtils.getStringAttribute("typeName", e, "");
    this._currencyIDRange = o.CastleXMLUtils.getStringAttribute("currencyIDRange", e, "").split("-");
    this._currencyIDRange = [parseInt(this._currencyIDRange[0]), parseInt(this._currencyIDRange[1])];
  };
  Object.defineProperty(XmlCurrencyRangeVO.prototype, "typeID", {
    get: function () {
      return this._typeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCurrencyRangeVO.prototype, "typeName", {
    get: function () {
      return this._typeName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCurrencyRangeVO.prototype, "currencyIDRange", {
    get: function () {
      return this._currencyIDRange;
    },
    enumerable: true,
    configurable: true
  });
  return XmlCurrencyRangeVO;
}();
exports.XmlCurrencyRangeVO = a;