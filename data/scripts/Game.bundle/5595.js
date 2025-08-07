Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./50.js");
var o = require("./22.js");
var a = function () {
  function CastleTempServerDailyTaskRewardVO() {
    this.id = 0;
    this.minDailyTaskPointsPerDay = 0;
  }
  CastleTempServerDailyTaskRewardVO.prototype.parseXML = function (e) {
    this.id = parseInt(o.CastleXMLUtils.getValueOrDefault("tempServerDailyTaskRewardID", e, "0"));
    var t = parseInt(o.CastleXMLUtils.getValueOrDefault("rewardID", e, "0"));
    this.minDailyTaskPointsPerDay = parseInt(o.CastleXMLUtils.getValueOrDefault("minDailyTaskPointsPerDay", e, "0"));
    this.rankRewards = n.CollectableManager.parser.createListFromRewardIdsString(t.toString());
  };
  Object.defineProperty(CastleTempServerDailyTaskRewardVO.prototype, "minDailyTaskPoints", {
    get: function () {
      return this.minDailyTaskPointsPerDay;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTempServerDailyTaskRewardVO;
}();
exports.CastleTempServerDailyTaskRewardVO = a;