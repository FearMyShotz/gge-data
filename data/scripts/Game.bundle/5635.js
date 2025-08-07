Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function XmlCatalystVO() {
    this._currencyId = -1;
    this._forgeId = -1;
    this._deprecated = false;
    this._maxUsableFusionLevel = 0;
    this._tier = 0;
    this._addDecoDust = 0;
    this._costDecoDust = 0;
  }
  XmlCatalystVO.prototype.parseXml = function (e) {
    this._currencyId = o.int(a.CastleXMLUtils.getIntAttribute("currencyID", e, -1));
    this._forgeId = o.int(a.CastleXMLUtils.getIntAttribute("forgeID", e, -1));
    this._deprecated = a.CastleXMLUtils.getBooleanAttribute("deprecated", e, false);
    this._maxUsableFusionLevel = o.int(a.CastleXMLUtils.getIntAttribute("maxUsableFusionLevel", e, 0));
    this._tier = o.int(a.CastleXMLUtils.getIntAttribute("tier", e, 0));
    this._addDecoDust = o.int(a.CastleXMLUtils.getIntAttribute("addDecoDust", e, 0));
    this._costDecoDust = o.int(a.CastleXMLUtils.getIntAttribute("costDecoDust", e, 0));
  };
  Object.defineProperty(XmlCatalystVO.prototype, "currencyId", {
    get: function () {
      return this._currencyId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCatalystVO.prototype, "forgeId", {
    get: function () {
      return this._forgeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCatalystVO.prototype, "deprecated", {
    get: function () {
      return this._deprecated;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCatalystVO.prototype, "maxUsableFusionLevel", {
    get: function () {
      return this._maxUsableFusionLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCatalystVO.prototype, "tier", {
    get: function () {
      return this._tier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCatalystVO.prototype, "addDecoDust", {
    get: function () {
      return this._addDecoDust;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCatalystVO.prototype, "costDecoDust", {
    get: function () {
      return this._costDecoDust;
    },
    enumerable: true,
    configurable: true
  });
  return XmlCatalystVO;
}();
exports.XmlCatalystVO = n;
var o = require("./6.js");
var a = require("./22.js");