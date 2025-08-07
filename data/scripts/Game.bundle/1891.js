Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function TempServerRankRangeVO() {
    this.minRank = 0;
    this.maxRank = 0;
    this.rankPoints = 0;
  }
  TempServerRankRangeVO.prototype.parseXML = function (e) {
    this.minRank = parseInt(n.CastleXMLUtils.getValueOrDefault("minRank", e, "0"));
    this.maxRank = parseInt(n.CastleXMLUtils.getValueOrDefault("maxRank", e, "0"));
    this.rankPoints = parseInt(n.CastleXMLUtils.getValueOrDefault("rankPoints", e, "0"));
  };
  return TempServerRankRangeVO;
}();
exports.TempServerRankRangeVO = o;