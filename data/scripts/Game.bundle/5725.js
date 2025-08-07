Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./22.js");
var s = function () {
  function XmlRelicEffectPowerRatingVO() {
    this._id = 0;
    this._threshold = 0;
  }
  XmlRelicEffectPowerRatingVO.prototype.parseXml = function (e) {
    this._id = o.int(a.CastleXMLUtils.getIntAttribute("id", e, -1));
    this._threshold = o.int(a.CastleXMLUtils.getIntAttribute("threshold", e, -1));
  };
  Object.defineProperty(XmlRelicEffectPowerRatingVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEffectPowerRatingVO.prototype, "threshold", {
    get: function () {
      return this._threshold;
    },
    enumerable: true,
    configurable: true
  });
  return XmlRelicEffectPowerRatingVO;
}();
exports.XmlRelicEffectPowerRatingVO = s;
n.classImplementsInterfaces(s, "IXmlElementVO");