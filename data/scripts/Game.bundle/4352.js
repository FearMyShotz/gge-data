Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleXmlPropertyVO() {
    this._id = -1;
    this._value = 0;
  }
  CastleXmlPropertyVO.prototype.fillByXmlNode = function (e) {
    this._id = parseInt(o.CastleXMLUtils.getValueOrDefault("propertyID", e, "-1", true));
    this._name = o.CastleXMLUtils.getValueOrDefault("name", e, "", false);
    this._value = parseFloat(o.CastleXMLUtils.getValueOrDefault("value", e, "0", true));
  };
  Object.defineProperty(CastleXmlPropertyVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleXmlPropertyVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleXmlPropertyVO.prototype, "value", {
    get: function () {
      return this._value;
    },
    enumerable: true,
    configurable: true
  });
  return CastleXmlPropertyVO;
}();
exports.CastleXmlPropertyVO = n;
var o = require("./22.js");