Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./22.js");
var s = function () {
  function XmlRelicPowerDistributionVO() {
    this._power = 0;
    this._shares = 0;
  }
  XmlRelicPowerDistributionVO.prototype.parseXml = function (e) {
    this._power = o.int(a.CastleXMLUtils.getIntAttribute("power", e, -1));
    this._shares = o.int(a.CastleXMLUtils.getIntAttribute("shares", e, -1));
  };
  Object.defineProperty(XmlRelicPowerDistributionVO.prototype, "power", {
    get: function () {
      return this._power;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicPowerDistributionVO.prototype, "shares", {
    get: function () {
      return this._shares;
    },
    enumerable: true,
    configurable: true
  });
  return XmlRelicPowerDistributionVO;
}();
exports.XmlRelicPowerDistributionVO = s;
n.classImplementsInterfaces(s, "IXmlElementVO");