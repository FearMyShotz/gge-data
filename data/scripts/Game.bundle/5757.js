Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function LandmarkVO() {
    this.landmarkID = 0;
    this.emptyMinConquerLevel = 0;
    this.minDefenseLevel = 0;
    this.defaultLevel = 0;
    this.isDefault = false;
    this.preBuiltCastleID = 0;
  }
  LandmarkVO.prototype.parseXML = function (e) {
    this.landmarkID = parseInt(n.CastleXMLUtils.getValueOrDefault("landmarkID", e, "0"));
    this.emptyMinConquerLevel = parseInt(n.CastleXMLUtils.getValueOrDefault("emptyMinConquerLevel", e, "0"));
    this.minDefenseLevel = parseInt(n.CastleXMLUtils.getValueOrDefault("minDefenseLevel", e, "0"));
    this.defaultLevel = parseInt(n.CastleXMLUtils.getValueOrDefault("defaultLevel", e, "0"));
    this.isDefault = parseInt(n.CastleXMLUtils.getValueOrDefault("isDefault", e, "0")) == 1;
    this.preBuiltCastleID = parseInt(n.CastleXMLUtils.getValueOrDefault("preBuiltCastleID", e, "0"));
  };
  return LandmarkVO;
}();
exports.LandmarkVO = o;