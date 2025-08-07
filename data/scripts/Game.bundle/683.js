Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function AllianceBattleGroundScoringVO() {
    this.scoringID = 0;
    this.metropolisDecay = 0;
    this.kingstowerDecay = 0;
    this.playerSteal = 0;
    this.allianceSteal = 0;
  }
  AllianceBattleGroundScoringVO.prototype.parseXML = function (e) {
    this.scoringID = parseInt(n.CastleXMLUtils.getValueOrDefault("scoringID", e, "0", true));
    this.scoring = n.CastleXMLUtils.getValueOrDefault("scoring", e, "0", true);
    this.metropolisDecay = parseInt(n.CastleXMLUtils.getValueOrDefault("metropolisDecay", e, "0"));
    this.kingstowerDecay = parseInt(n.CastleXMLUtils.getValueOrDefault("kingstowerDecay", e, "0"));
    this.playerSteal = parseInt(n.CastleXMLUtils.getValueOrDefault("playerSteal", e, "0"));
    this.allianceSteal = parseInt(n.CastleXMLUtils.getValueOrDefault("allianceSteal", e, "0"));
  };
  AllianceBattleGroundScoringVO.SCORING_SYSTEM_ALLIANCE_COLLECTOR = "AllianceCollector";
  AllianceBattleGroundScoringVO.SCORING_SYSTEM_ALLIANCE_TOWER = "AllianceTower";
  return AllianceBattleGroundScoringVO;
}();
exports.AllianceBattleGroundScoringVO = o;