Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function XmlFusionForgeVO() {
    this._forgeId = -1;
    this._dustCurrencyID = 0;
    this._usableMinuteSkipsPerDay = 0;
  }
  XmlFusionForgeVO.prototype.parseXml = function (e) {
    this._forgeId = o.int(a.CastleXMLUtils.getIntAttribute("forgeID", e, -1));
    this._dustCurrencyID = o.int(a.CastleXMLUtils.getIntAttribute("dustCurrencyID", e, 0));
    this._usableMinuteSkipsPerDay = o.int(a.CastleXMLUtils.getIntAttribute("usableMinuteSkipsPerDay", e, 0));
  };
  Object.defineProperty(XmlFusionForgeVO.prototype, "forgeId", {
    get: function () {
      return this._forgeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionForgeVO.prototype, "dustCurrencyID", {
    get: function () {
      return this._dustCurrencyID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionForgeVO.prototype, "usableMinuteSkipsPerDay", {
    get: function () {
      return this._usableMinuteSkipsPerDay;
    },
    enumerable: true,
    configurable: true
  });
  return XmlFusionForgeVO;
}();
exports.XmlFusionForgeVO = n;
var o = require("./6.js");
var a = require("./22.js");