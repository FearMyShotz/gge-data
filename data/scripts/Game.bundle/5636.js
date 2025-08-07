Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function XmlForgeMinuteSkipVO() {
    this._id = -1;
    this._forgeId = -1;
    this._currencyId = -1;
  }
  XmlForgeMinuteSkipVO.prototype.parseXml = function (e) {
    this._id = o.int(a.CastleXMLUtils.getIntAttribute("id", e, -1));
    this._forgeId = o.int(a.CastleXMLUtils.getIntAttribute("forgeID", e, -1));
    this._currencyId = o.int(a.CastleXMLUtils.getIntAttribute("currencyID", e, -1));
  };
  Object.defineProperty(XmlForgeMinuteSkipVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlForgeMinuteSkipVO.prototype, "forgeId", {
    get: function () {
      return this._forgeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlForgeMinuteSkipVO.prototype, "currencyId", {
    get: function () {
      return this._currencyId;
    },
    enumerable: true,
    configurable: true
  });
  return XmlForgeMinuteSkipVO;
}();
exports.XmlForgeMinuteSkipVO = n;
var o = require("./6.js");
var a = require("./22.js");