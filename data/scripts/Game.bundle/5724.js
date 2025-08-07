Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./22.js");
var s = function () {
  function XmlRelicEnchanterVO() {
    this._level = 0;
    this._relicNormalEffectBoost = NaN;
    this._chance = NaN;
    this._c1Cost = 0;
    this._c2Cost = 0;
    this._costRelicFragments = 0;
  }
  XmlRelicEnchanterVO.prototype.parseXml = function (e) {
    this._level = o.int(a.CastleXMLUtils.getIntAttribute("level", e));
    this._relicNormalEffectBoost = a.CastleXMLUtils.getNumberAttribute("relicNormalEffectBoost", e);
    this._chance = a.CastleXMLUtils.getNumberAttribute("chance", e);
    this._c1Cost = o.int(a.CastleXMLUtils.getIntAttribute("c1Cost", e));
    this._c2Cost = o.int(a.CastleXMLUtils.getIntAttribute("c2Cost", e));
    this._costRelicFragments = o.int(a.CastleXMLUtils.getIntAttribute("costRelicFragment", e));
  };
  Object.defineProperty(XmlRelicEnchanterVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEnchanterVO.prototype, "relicNormalEffectBoost", {
    get: function () {
      return this._relicNormalEffectBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEnchanterVO.prototype, "chance", {
    get: function () {
      return this._chance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEnchanterVO.prototype, "c1Cost", {
    get: function () {
      return this._c1Cost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEnchanterVO.prototype, "c2Cost", {
    get: function () {
      return this._c2Cost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEnchanterVO.prototype, "costRelicFragments", {
    get: function () {
      return this._costRelicFragments;
    },
    enumerable: true,
    configurable: true
  });
  return XmlRelicEnchanterVO;
}();
exports.XmlRelicEnchanterVO = s;
n.classImplementsInterfaces(s, "IXmlElementVO");