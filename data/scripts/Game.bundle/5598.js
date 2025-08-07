Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./22.js");
var a = require("./1968.js");
var s = function () {
  function CastleTempServerRewardVO() {
    this.id = 0;
    this.rewardSetID = 0;
  }
  CastleTempServerRewardVO.prototype.parseXML = function (e) {
    this.id = parseInt(o.CastleXMLUtils.getValueOrDefault("tempServerRankID", e, "0"));
    var t = parseInt(o.CastleXMLUtils.getValueOrDefault("rewardID", e, "0"));
    var i = parseInt(o.CastleXMLUtils.getValueOrDefault("participationPoints", e, "0"));
    this.rewardSetID = parseInt(o.CastleXMLUtils.getValueOrDefault("rewardSetID", e, "0"));
    if (i > 0) {
      this.rankReward = new a.RankingRewardVO(r.CollectableManager.parser.createListFromRewardIdsString(t.toString()), i, true);
    }
    var n = parseInt(o.CastleXMLUtils.getValueOrDefault("rank", e, "0"));
    if (n > 0) {
      this.rankReward = new a.RankingRewardVO(r.CollectableManager.parser.createListFromRewardIdsString(t.toString()), n, false);
    }
  };
  CastleTempServerRewardVO.prototype.getId = function () {
    return this.id;
  };
  return CastleTempServerRewardVO;
}();
exports.CastleTempServerRewardVO = s;
var r = require("./50.js");
n.classImplementsInterfaces(s, "ICastleXmlNode");