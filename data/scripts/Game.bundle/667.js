Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./4.js");
var o = function () {
  function CastleEilandRewardsVO(e) {
    this.fillFromParamXML(e);
  }
  CastleEilandRewardsVO.prototype.fillFromParamXML = function (e) {
    this._rewardList = [];
    this._rewardPlayerList = [];
    var t;
    var i;
    var n = e.islandrewardranks;
    var o = 0;
    var l = 0;
    var c = 0;
    var u = 0;
    if (n != null) {
      for (var d = 0, p = n; d < p.length; d++) {
        if ((i = p[d]) !== undefined) {
          l = parseInt(i.islandRewardRankID || "");
          o = parseInt(i.cargoPointRequirement || "0");
          c = parseInt(s.CastleXMLUtils.getValueOrDefault("topXValue", i, "-1"));
          t = a.CollectableManager.parser.createListFromRewardIdsString(i.rewardIDs || "");
          u = parseInt(s.CastleXMLUtils.getValueOrDefault("islandRewardSetID", i, "-1"));
          this._rewardList.push(new r.CastleEilandRewardItemVO(l, o, t, c, u));
        }
      }
    }
    if ((n = e.islandPlayerRewards) != null) {
      for (var h = 0, g = n; h < g.length; h++) {
        if ((i = g[h]) !== undefined) {
          l = parseInt(i.islandPlayerRewardID || "");
          o = parseInt(i.cargoPointRequirement || "0");
          c = parseInt(s.CastleXMLUtils.getValueOrDefault("topXValue", i, "-1"));
          t = a.CollectableManager.parser.createListFromRewardIdsString(i.rewardIDs || "");
          u = parseInt(s.CastleXMLUtils.getValueOrDefault("islandRewardSetID", i, "-1"));
          this._rewardPlayerList.push(new r.CastleEilandRewardItemVO(l, o, t, c, u));
        }
      }
    }
  };
  CastleEilandRewardsVO.prototype.getActiveRewardItems = function () {
    var e = n.CastleModel.kingdomData.getKingdomVOByID(l.WorldIsland.KINGDOM_ID).rewardSet;
    return this._rewardList.filter(function (t) {
      var i = [];
      for (var n = 1; n < arguments.length; n++) {
        i[n - 1] = arguments[n];
      }
      return t.rewardSetID == e;
    });
  };
  CastleEilandRewardsVO.prototype.getActivePlayerRewardItems = function () {
    var e = n.CastleModel.kingdomData.getKingdomVOByID(l.WorldIsland.KINGDOM_ID).rewardSet;
    return this._rewardPlayerList.filter(function (t) {
      var i = [];
      for (var n = 1; n < arguments.length; n++) {
        i[n - 1] = arguments[n];
      }
      return t.rewardSetID == e;
    });
  };
  CastleEilandRewardsVO.prototype.getReward = function (e) {
    if (this._rewardList != null) {
      for (var t = 0, i = this._rewardList; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.id == e) {
          return n;
        }
      }
    }
    return null;
  };
  CastleEilandRewardsVO.__initialize_static_members = function () {
    CastleEilandRewardsVO.REWARD_BOOBY1 = 0;
    CastleEilandRewardsVO.REWARD_BOOBY2 = 1;
    CastleEilandRewardsVO.REWARD_BOOBY3 = 2;
    CastleEilandRewardsVO.REWARD_BOOBY4 = 3;
    CastleEilandRewardsVO.REWARD_BOOBY5 = 4;
    CastleEilandRewardsVO.REWARD_BOOBY6 = 5;
    CastleEilandRewardsVO.REWARD_TOPX = 6;
    CastleEilandRewardsVO.TOPX_MIN_RANK = 5;
  };
  return CastleEilandRewardsVO;
}();
exports.CastleEilandRewardsVO = o;
var a = require("./50.js");
var s = require("./22.js");
var r = require("./3694.js");
var l = require("./5.js");
o.__initialize_static_members();