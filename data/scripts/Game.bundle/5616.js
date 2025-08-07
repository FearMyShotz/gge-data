Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./55.js");
var a = require("./22.js");
var s = function () {
  function XmlCurrencyVO() {
    this._id = -1;
    this._name = "";
    this._jsonKey = "";
    this._assetName = "";
    this._softCap = -1;
    this._hardCap = -1;
    this._rareness = -1;
    this._minutesSkipValue = -1;
    this._tier = -1;
  }
  XmlCurrencyVO.prototype.parseXml = function (e) {
    this._id = n.int(a.CastleXMLUtils.getIntAttribute("currencyID", e, -1));
    this._name = a.CastleXMLUtils.getStringAttribute("Name", e, "");
    this._jsonKey = a.CastleXMLUtils.getStringAttribute("JSONKey", e, "");
    this._assetName = a.CastleXMLUtils.getStringAttribute("assetName", e, "");
    this._tier = n.int(o.ClientConstUtils.getSuffixNumberFromString(this._name));
  };
  XmlCurrencyVO.prototype.parseXmlCaps = function (e) {
    this._softCap = n.int(a.CastleXMLUtils.getIntAttribute("softCap", e, -1));
    this._hardCap = n.int(a.CastleXMLUtils.getIntAttribute("hardCap", e, -1));
  };
  XmlCurrencyVO.prototype.parseXmlRareness = function (e) {
    this._rareness = n.int(a.CastleXMLUtils.getIntAttribute("rareness", e, -1));
  };
  XmlCurrencyVO.prototype.parseXmlMinutesSkipValues = function (e) {
    this._minutesSkipValue = n.int(a.CastleXMLUtils.getIntAttribute("MinutesSkipValue", e, -1));
  };
  Object.defineProperty(XmlCurrencyVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCurrencyVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCurrencyVO.prototype, "jsonKey", {
    get: function () {
      return this._jsonKey;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCurrencyVO.prototype, "assetName", {
    get: function () {
      return this._assetName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCurrencyVO.prototype, "softCap", {
    get: function () {
      return this._softCap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCurrencyVO.prototype, "hardCap", {
    get: function () {
      return this._hardCap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCurrencyVO.prototype, "rareness", {
    get: function () {
      return this._rareness;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCurrencyVO.prototype, "minutesSkipValue", {
    get: function () {
      return this._minutesSkipValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCurrencyVO.prototype, "tier", {
    get: function () {
      return this._tier;
    },
    enumerable: true,
    configurable: true
  });
  return XmlCurrencyVO;
}();
exports.XmlCurrencyVO = s;