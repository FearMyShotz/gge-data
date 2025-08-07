Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./4.js");
var o = require("./3428.js");
var a = function () {
  function RewardHubParser() {}
  RewardHubParser.prototype.parse = function (e) {
    var t;
    n.CastleModel.rewardHubData.reset();
    for (var i = 0; i < e.length; i++) {
      (t = new o.RewardHubVO()).parseData(e[i]);
      n.CastleModel.rewardHubData.rewardHubVOs.push(t);
    }
    n.CastleModel.rewardHubData.setAmountOfPendingRewards(n.CastleModel.rewardHubData.rewardHubVOs.length, false);
  };
  RewardHubParser.prototype.updateUnlockedRewards = function (e) {
    if (e) {
      var t;
      for (var i = 0; i < n.CastleModel.rewardHubData.rewardHubVOs.length; i++) {
        t = n.CastleModel.rewardHubData.rewardHubVOs[i];
        for (var o = 0; o < e.length; o++) {
          if (e[o] == t.hubRewardID) {
            t.extraTierUnlocked = true;
          }
        }
      }
    }
  };
  return RewardHubParser;
}();
exports.RewardHubParser = a;