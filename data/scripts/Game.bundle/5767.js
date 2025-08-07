Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function CastleNewsletterVO() {}
  CastleNewsletterVO.prototype.parseXML = function (e) {
    this._newsLetterID = parseInt(n.CastleXMLUtils.getValueOrDefault("newsLetterID", e, "0"));
    this._rewardID = parseInt(n.CastleXMLUtils.getValueOrDefault("rewardID", e, "0"));
  };
  Object.defineProperty(CastleNewsletterVO.prototype, "newsLetterID", {
    get: function () {
      return this._newsLetterID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNewsletterVO.prototype, "rewardID", {
    get: function () {
      return this._rewardID;
    },
    enumerable: true,
    configurable: true
  });
  return CastleNewsletterVO;
}();
exports.CastleNewsletterVO = o;