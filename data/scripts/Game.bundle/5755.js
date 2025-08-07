Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function AllianceBattleGroundDungeonVO() {
    this.allianceBattleGroundDungeonID = 0;
    this.allianceBattleGroundScoringID = 0;
    this.dungeonlevel = 0;
    this.countVictory = 0;
    this.skipCost = 0;
    this.coolDown = 0;
  }
  AllianceBattleGroundDungeonVO.prototype.parseXML = function (e) {
    this.allianceBattleGroundDungeonID = parseInt(n.CastleXMLUtils.getValueOrDefault("allianceBattleGroundDungeonID", e, "0", true));
    this.allianceBattleGroundScoringID = parseInt(n.CastleXMLUtils.getValueOrDefault("allianceBattleGroundScoringID", e, "0", true));
    this.dungeonlevel = parseInt(n.CastleXMLUtils.getValueOrDefault("dungeonlevel", e, "0", true));
    this.countVictory = parseInt(n.CastleXMLUtils.getValueOrDefault("countVictory", e, "0", true));
    this.skipCost = parseInt(n.CastleXMLUtils.getValueOrDefault("skipCost", e, "0", true));
    this.coolDown = parseInt(n.CastleXMLUtils.getValueOrDefault("coolDown", e, "0", true));
    this.wallBonus = parseInt(n.CastleXMLUtils.getValueOrDefault("wallBonus", e, "0", true));
    this.gateBonus = parseInt(n.CastleXMLUtils.getValueOrDefault("gateBonus", e, "0", true));
  };
  return AllianceBattleGroundDungeonVO;
}();
exports.AllianceBattleGroundDungeonVO = o;