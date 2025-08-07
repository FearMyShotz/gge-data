Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./12.js");
var r = require("./45.js");
var l = function (e) {
  function SeasonLeagueDailyRewardDialogProperties(t) {
    var i = e.call(this) || this;
    i._eventId = 0;
    i._rank = -1;
    i._allianceRank = -1;
    i._eventId = a.int(t.EID);
    i._rank = a.int(t.R);
    i._reward = r.CollectableHelper.createVO(s.CollectableEnum.SEASON_LEAGUE_MEDALS, 1, t.KLMID);
    i._allianceRank = a.int(t.hasOwnProperty("KLAR") ? t.KLAR : -1);
    i._allianceReward = t.hasOwnProperty("KLAMID") ? r.CollectableHelper.createVO(s.CollectableEnum.SEASON_LEAGUE_MEDALS, 1, t.KLAMID) : null;
    return i;
  }
  n.__extends(SeasonLeagueDailyRewardDialogProperties, e);
  Object.defineProperty(SeasonLeagueDailyRewardDialogProperties.prototype, "reward", {
    get: function () {
      return this._reward;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueDailyRewardDialogProperties.prototype, "eventId", {
    get: function () {
      return this._eventId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueDailyRewardDialogProperties.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueDailyRewardDialogProperties.prototype, "allianceRank", {
    get: function () {
      return this._allianceRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueDailyRewardDialogProperties.prototype, "allianceReward", {
    get: function () {
      return this._allianceReward;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueDailyRewardDialogProperties;
}(o.BasicProperties);
exports.SeasonLeagueDailyRewardDialogProperties = l;