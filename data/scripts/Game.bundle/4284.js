Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./54.js");
var s = require("./4.js");
var r = require("./4285.js");
var l = function (e) {
  function CastleLeaderBoardRewardsData(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._leaderboardRewards = new Map();
    var n = t.leaderboardRewards;
    if (n != null) {
      for (var o = 0, a = n; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined) {
          var l = parseInt(s.leaderboardRewardID || "");
          var c = new r.LeaderboardRewardVO();
          c.fillFromParamXML(s);
          i._leaderboardRewards.set(l, c);
        }
      }
    }
    return i;
  }
  n.__extends(CastleLeaderBoardRewardsData, e);
  CastleLeaderBoardRewardsData.prototype.getRewardListForDialogList = function (e, t, i = -1) {
    var n = [];
    this._leaderboardRewards.forEach(function (o) {
      if (o.eventTypeID == e && o.leaderboardRewardSetID == t && (i == -1 || o.leagueTypeID == i)) {
        n.push({
          rank: o.maxRank,
          rewards: s.CastleModel.rewardData.getListByIdArray(o.rewardIDs)
        });
      }
    });
    n.sort(function (e, t) {
      return e.rank - t.rank;
    });
    var o = [];
    for (var a = 0; a < n.length; a++) {
      var r = {};
      var l = undefined;
      var c = undefined;
      if (a == 0) {
        l = 1;
        c = n[a].rank;
      } else {
        l = n[a - 1].rank + 1;
        c = n[a].rank;
      }
      r.rank = l == c ? [c] : [l, c];
      r.rewards = n[a].rewards;
      r.index = a;
      o.push(r);
    }
    return o;
  };
  return CastleLeaderBoardRewardsData;
}(a.CastleBasicData);
exports.CastleLeaderBoardRewardsData = l;
o.classImplementsInterfaces(l, "IUpdatable", "ICastleBasicData");