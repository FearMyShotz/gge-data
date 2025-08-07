Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function LeaderboardRewardVO() {}
  LeaderboardRewardVO.prototype.fillFromParamXML = function (e) {
    this._leaderboardRewardID = parseInt(e.leaderboardRewardID || "");
    this._eventTypeID = parseInt(e.eventTypeID || "");
    this._leaderboardRewardSetID = parseInt(e.leaderboardRewardSetID || "");
    this._maxRank = parseInt(e.maxRank || "");
    this._rewardIDs = n.CastleXMLUtils.createIntListFromAttribute("rewardIDs", e);
    this._leagueTypeID = parseInt(e.leagueID || "-1");
  };
  Object.defineProperty(LeaderboardRewardVO.prototype, "leaderboardRewardID", {
    get: function () {
      return this._leaderboardRewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderboardRewardVO.prototype, "eventTypeID", {
    get: function () {
      return this._eventTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderboardRewardVO.prototype, "leaderboardRewardSetID", {
    get: function () {
      return this._leaderboardRewardSetID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderboardRewardVO.prototype, "maxRank", {
    get: function () {
      return this._maxRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderboardRewardVO.prototype, "rewardIDs", {
    get: function () {
      return this._rewardIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderboardRewardVO.prototype, "leagueTypeID", {
    get: function () {
      return this._leagueTypeID;
    },
    enumerable: true,
    configurable: true
  });
  return LeaderboardRewardVO;
}();
exports.LeaderboardRewardVO = o;