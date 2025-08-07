Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AutoRecruitmentHelper() {}
  AutoRecruitmentHelper.getCurrentListLoopCount = function (e) {
    return 0;
  };
  AutoRecruitmentHelper.createAutoRecruitSnapshot = function (e) {
    for (var t = l.CastleModel.militaryData.getPackageListById(e).slotsArray, i = [], n = 0; n < t.length; ++n) {
      var o = t[n];
      if (o && o.wodId >= 0) {
        i.push({
          ID: o.wodId,
          A: o.amount,
          CBS: o.numOfBoost,
          IA: o.amount
        });
      }
    }
    return i;
  };
  AutoRecruitmentHelper.isEventKingdom = function (e) {
    switch (e) {
      case s.WorldIsland.KINGDOM_ID:
      case a.FactionConst.KINGDOM_ID:
        return true;
      default:
        return false;
    }
  };
  AutoRecruitmentHelper.getRemainingEventKingdomTime = function (e) {
    var t;
    switch (e) {
      case s.WorldIsland.KINGDOM_ID:
        return r.int(l.CastleModel.kingdomData.getKingdomVOByID(s.WorldIsland.KINGDOM_ID).resetTime);
      case a.FactionConst.KINGDOM_ID:
        t = l.CastleModel.specialEventData.getActiveEventByEventId(o.EventConst.EVENTTYPE_FACTION);
        return r.int(t ? t.remainingEventTimeInSeconds : 0);
      default:
        return 0;
    }
  };
  return AutoRecruitmentHelper;
}();
exports.AutoRecruitmentHelper = n;
var o = require("./5.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./4.js");