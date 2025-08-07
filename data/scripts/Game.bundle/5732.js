Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./22.js");
var s = function () {
  function XmlWorldmapSkinVO() {
    this._id = 0;
    this._definesMoat = false;
    this._definesAllCastleLevels = false;
    this._definesResources = false;
    this._increasedSize = false;
  }
  XmlWorldmapSkinVO.prototype.parseXml = function (e) {
    this._id = o.int(a.CastleXMLUtils.getIntAttribute("skinID", e, -1));
    this._name = a.CastleXMLUtils.getStringAttribute("name", e);
    this._definesMoat = a.CastleXMLUtils.getBooleanAttribute("definesMoat", e);
    this._definesAllCastleLevels = a.CastleXMLUtils.getBooleanAttribute("definesAllCastleLevels", e);
    this._definesResources = a.CastleXMLUtils.getBooleanAttribute("definesResources", e);
    this._increasedSize = a.CastleXMLUtils.getBooleanAttribute("increasedSize", e);
  };
  Object.defineProperty(XmlWorldmapSkinVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlWorldmapSkinVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlWorldmapSkinVO.prototype, "definesMoat", {
    get: function () {
      return this._definesMoat;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlWorldmapSkinVO.prototype, "definesAllCastleLevels", {
    get: function () {
      return this._definesAllCastleLevels;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlWorldmapSkinVO.prototype, "definesResources", {
    get: function () {
      return this._definesResources;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlWorldmapSkinVO.prototype, "increasedSize", {
    get: function () {
      return this._increasedSize;
    },
    enumerable: true,
    configurable: true
  });
  return XmlWorldmapSkinVO;
}();
exports.XmlWorldmapSkinVO = s;
n.classImplementsInterfaces(s, "IXmlElementVO");