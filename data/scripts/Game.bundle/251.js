Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  return function CastleScoreBarProgressVO(e, t, i, n, o = 0, a = true, s = 0) {
    this.ownPoints = 0;
    this.ownRank = 0;
    this.rewardsReceived = 0;
    this.isPlayerQualifiedForAllianceRewards = true;
    this.allianceRewardThresholdPoints = 0;
    this.ownPoints = e;
    this.ownRank = t;
    this.pointThresholds = i;
    this.topX = n;
    this.rewardsReceived = o;
    this.isPlayerQualifiedForAllianceRewards = a;
    this.allianceRewardThresholdPoints = s;
  };
}();
exports.CastleScoreBarProgressVO = n;