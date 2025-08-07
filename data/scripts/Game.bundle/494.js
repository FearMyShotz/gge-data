Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./22.js");
var s = function () {
  function XmlRelicEffectVO() {
    this._id = 0;
    this._effectId = 0;
    this._minValue = NaN;
    this._maxValue = NaN;
  }
  XmlRelicEffectVO.prototype.parseXml = function (e) {
    this._id = o.int(a.CastleXMLUtils.getIntAttribute("id", e, -1));
    this._effectId = o.int(a.CastleXMLUtils.getIntAttribute("effectID", e, -1));
    this._minValue = a.CastleXMLUtils.getIntAttribute("minimumValue", e, -1);
    this._maxValue = a.CastleXMLUtils.getIntAttribute("maximumValue", e, -1);
    this._effectType = a.CastleXMLUtils.getStringAttribute("relicEffectType", e);
    this._valueTextType = a.CastleXMLUtils.getStringAttribute("valueTextType", e);
  };
  Object.defineProperty(XmlRelicEffectVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEffectVO.prototype, "effectId", {
    get: function () {
      return this._effectId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEffectVO.prototype, "minValue", {
    get: function () {
      return this._minValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEffectVO.prototype, "maxValue", {
    get: function () {
      return this._maxValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEffectVO.prototype, "effectType", {
    get: function () {
      return this._effectType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEffectVO.prototype, "valueTextType", {
    get: function () {
      return this._valueTextType;
    },
    enumerable: true,
    configurable: true
  });
  XmlRelicEffectVO.EFFECT_TYPE_NORMAL = "normal";
  XmlRelicEffectVO.EFFECT_TYPE_UNIT_TOOL = "unitTool";
  XmlRelicEffectVO.EFFECT_TYPE_SORT_ORDER = [XmlRelicEffectVO.EFFECT_TYPE_NORMAL, XmlRelicEffectVO.EFFECT_TYPE_UNIT_TOOL, "economy"];
  XmlRelicEffectVO.VALUE_TYPE_INCREASE = "relicIncrease";
  XmlRelicEffectVO.VALUE_TYPE_DECREASE = "relicDecrease";
  return XmlRelicEffectVO;
}();
exports.XmlRelicEffectVO = s;
n.classImplementsInterfaces(s, "IXmlElementVO");