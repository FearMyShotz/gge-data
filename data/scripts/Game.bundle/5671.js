Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = function () {
  function XmlSeasonPromotionVO() {
    this._id = 0;
    this._minMedalPointsForUnlock = 0;
    this._majorRank = 0;
    this._minorRank = 0;
  }
  XmlSeasonPromotionVO.prototype.parseXml = function (e) {
    this._id = n.int(o.CastleXMLUtils.getIntAttribute("rankID", e, -1));
    this._minMedalPointsForUnlock = n.int(o.CastleXMLUtils.getIntAttribute("minMedalPointsForUnlock", e, -1));
    this._majorRank = n.int(o.CastleXMLUtils.getIntAttribute("majorRank", e, -1));
    this._minorRank = n.int(o.CastleXMLUtils.getIntAttribute("minorRank", e, -1));
  };
  XmlSeasonPromotionVO.prototype.getNameTextId = function () {
    return "seasonLeague_rank_" + this.id;
  };
  Object.defineProperty(XmlSeasonPromotionVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonPromotionVO.prototype, "minMedalPointsForUnlock", {
    get: function () {
      return this._minMedalPointsForUnlock;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonPromotionVO.prototype, "majorRank", {
    get: function () {
      return this._majorRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonPromotionVO.prototype, "minorRank", {
    get: function () {
      return this._minorRank;
    },
    enumerable: true,
    configurable: true
  });
  return XmlSeasonPromotionVO;
}();
exports.XmlSeasonPromotionVO = a;