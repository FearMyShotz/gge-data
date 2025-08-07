Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./4.js");
var s = function (e) {
  function CastleAllianceBattleGroundEventEndDialogProperties(t = -1, i = -1) {
    var n = e.call(this) || this;
    n.playerRank = 0;
    n.allianceRank = 0;
    n.playerPoints = 0;
    n.alliancePoints = 0;
    n.settingID = 1;
    n.isCrossplay = false;
    if (t > 0) {
      n.playerRewards = a.CastleModel.rewardData.getCopiedListById(t);
    }
    if (i > 0) {
      n.allianceRewards = a.CastleModel.rewardData.getCopiedListById(i);
    }
    return n;
  }
  n.__extends(CastleAllianceBattleGroundEventEndDialogProperties, e);
  Object.defineProperty(CastleAllianceBattleGroundEventEndDialogProperties.prototype, "playerDailyRewardIDs", {
    set: function (e) {
      this.dailyPlayerRewards = null;
      if (e) {
        this.dailyPlayerRewards = a.CastleModel.rewardData.getListByIdArray(Array.isArray(e) ? e : [e]);
      }
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceBattleGroundEventEndDialogProperties;
}(o.BasicProperties);
exports.CastleAllianceBattleGroundEventEndDialogProperties = s;