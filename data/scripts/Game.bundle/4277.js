Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./22.js");
var s = function () {
  function EffectCapVO() {
    this._id = 0;
    this._maxTotalBonus = 0;
  }
  EffectCapVO.prototype.parseXml = function (e) {
    this._id = o.int(a.CastleXMLUtils.getIntAttribute("capID", e, -1));
    this._maxTotalBonus = o.int(e.maxTotalBonus) || Number.MAX_VALUE;
  };
  Object.defineProperty(EffectCapVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectCapVO.prototype, "maxTotalBonus", {
    get: function () {
      return this._maxTotalBonus;
    },
    enumerable: true,
    configurable: true
  });
  return EffectCapVO;
}();
exports.EffectCapVO = s;
n.classImplementsInterfaces(s, "IXmlElementVO");