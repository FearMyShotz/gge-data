Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function ABGAllianceTowerInfoVO() {
    this.allianceTowerID = 0;
    this.countVictory = 0;
    this.level = 0;
    this.lordID = 0;
    this.unitCapacity = 0;
    this.defeatedPVPBasePoints = 0;
    this.allianceTowerLevelMultiplier = 0;
    this.addStatuette = 0;
  }
  ABGAllianceTowerInfoVO.prototype.parseXML = function (e) {
    this.allianceTowerID = parseInt(n.CastleXMLUtils.getValueOrDefault("allianceTowerID", e, "0"));
    this.countVictory = parseInt(n.CastleXMLUtils.getValueOrDefault("countVictory", e, "0"));
    this.level = parseInt(n.CastleXMLUtils.getValueOrDefault("level", e, "0"));
    this.lordID = parseInt(n.CastleXMLUtils.getValueOrDefault("lordID", e, "0"));
    this.unitCapacity = parseInt(n.CastleXMLUtils.getValueOrDefault("unitCapacity", e, "0"));
    this.defeatedPVPBasePoints = parseInt(n.CastleXMLUtils.getValueOrDefault("defeatedPVPBasePoints", e, "0"));
    this.allianceTowerLevelMultiplier = parseInt(n.CastleXMLUtils.getValueOrDefault("allianceTowerLevelMultiplier", e, "0"));
    this.addStatuette = parseInt(n.CastleXMLUtils.getValueOrDefault("addStatuette", e, "0"));
  };
  return ABGAllianceTowerInfoVO;
}();
exports.ABGAllianceTowerInfoVO = o;