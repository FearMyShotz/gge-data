Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./50.js");
var a = require("./1968.js");
var s = require("./22.js");
var r = function () {
  function AllianceBattlegroundRewardVO() {
    this.id = 0;
    this.rewardSetID = 0;
  }
  AllianceBattlegroundRewardVO.prototype.parseXML = function (e) {
    this.id = parseInt(s.CastleXMLUtils.getValueOrDefault("allianceBattleGroundRankRewardID", e, "0"));
    var t = parseInt(s.CastleXMLUtils.getValueOrDefault("rewardID", e, "0"));
    var i = parseInt(s.CastleXMLUtils.getValueOrDefault("participationPoints", e, "0"));
    this.rewardSetID = parseInt(s.CastleXMLUtils.getValueOrDefault("rewardSetID", e, "0"));
    if (i > 0) {
      this.rankReward = new a.RankingRewardVO(o.CollectableManager.parser.createListFromRewardIdsString(t.toString()), i, true);
    }
    var n = parseInt(s.CastleXMLUtils.getValueOrDefault("rank", e, "0"));
    if (n > 0) {
      this.rankReward = new a.RankingRewardVO(o.CollectableManager.parser.createListFromRewardIdsString(t.toString()), n, false);
    }
  };
  AllianceBattlegroundRewardVO.prototype.getId = function () {
    return this.id;
  };
  return AllianceBattlegroundRewardVO;
}();
exports.AllianceBattlegroundRewardVO = r;
n.classImplementsInterfaces(r, "ICastleXmlNode");