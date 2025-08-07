Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./22.js");
var s = function () {
  function XmlRelicEffectListVO() {
    this._id = 0;
  }
  XmlRelicEffectListVO.prototype.parseXml = function (e) {
    this._id = o.int(a.CastleXMLUtils.getIntAttribute("id", e, -1));
    this._relicEffectIds = a.CastleXMLUtils.createIntListFromAttribute("relicEffectIDs", e);
  };
  Object.defineProperty(XmlRelicEffectListVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEffectListVO.prototype, "relicEffectIds", {
    get: function () {
      return this._relicEffectIds;
    },
    enumerable: true,
    configurable: true
  });
  return XmlRelicEffectListVO;
}();
exports.XmlRelicEffectListVO = s;
n.classImplementsInterfaces(s, "IXmlElementVO");