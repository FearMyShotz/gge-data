Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = require("./3539.js");
var a = function () {
  function RewardHubTextsFactory() {}
  RewardHubTextsFactory.createRewardHubItemTextVO = function (e) {
    var t;
    switch (e.mainEventID) {
      case n.EventConst.EVENTTYPE_KINGDOMS_LEAGUE:
        var i = "event_title_" + e.mainEventID;
        t = isNaN(e.promotionID) || e.promotionID == 0 ? new o.RewardHubItemTextVO(i, "dialog_rewardHub_eventEndReward") : new o.RewardHubItemTextVO(i, "dialog_rewardHub_promotionReward");
        break;
      default:
        t = new o.RewardHubItemTextVO("event_title_" + e.mainEventID, "dialog_rewardHub_eventEndReward");
    }
    return t;
  };
  return RewardHubTextsFactory;
}();
exports.RewardHubTextsFactory = a;