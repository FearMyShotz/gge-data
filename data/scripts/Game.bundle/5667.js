Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = function () {
  function XmlSeasonMedalVO() {
    this._id = 0;
    this._minHighscoreRank = 0;
    this._medalPoints = 0;
  }
  XmlSeasonMedalVO.prototype.parseXml = function (e) {
    this._id = n.int(o.CastleXMLUtils.getIntAttribute("medalID", e, -1));
    this._type = o.CastleXMLUtils.getStringAttribute("type", e);
    this._minHighscoreRank = n.int(o.CastleXMLUtils.getIntAttribute("minHighscoreRank", e));
    this._medalPoints = n.int(o.CastleXMLUtils.getIntAttribute("medalPoints", e));
  };
  Object.defineProperty(XmlSeasonMedalVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonMedalVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonMedalVO.prototype, "minHighscoreRank", {
    get: function () {
      return this._minHighscoreRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonMedalVO.prototype, "medalPoints", {
    get: function () {
      return this._medalPoints;
    },
    enumerable: true,
    configurable: true
  });
  return XmlSeasonMedalVO;
}();
exports.XmlSeasonMedalVO = a;