Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./28.js");
var s = require("./22.js");
var r = require("./172.js");
var l = require("./30.js");
var c = require("./72.js");
var u = require("./4.js");
var d = require("./4282.js");
var p = function (e) {
  function CastleHighscoreData(t) {
    var i = e.call(this) || this;
    i._rankLastWeek = 0;
    i._rankActual = 0;
    i._nextRewardTime = 0;
    i._leaguageId = -1;
    i._highscoreBoni = [];
    var n = t.highscoreboni;
    if (n != null) {
      for (var a = 0, r = n; a < r.length; a++) {
        var l = r[a];
        if (l !== undefined) {
          i._highscoreBoni.push(new d.HighscoreBonusVO(parseInt(s.CastleXMLUtils.getValueOrDefault("leaguetypeID", l, "-1")), l.lowestRank !== "undefinded" ? o.int(l.lowestRank) : Number.MAX_VALUE, parseInt(s.CastleXMLUtils.getValueOrDefault("highestRank", l, "0", true)), parseInt(s.CastleXMLUtils.getValueOrDefault("c1Reward", l, "0")), s.CastleXMLUtils.getValueOrDefault("unitReward", l, ""), parseInt(s.CastleXMLUtils.getValueOrDefault("toolReward", l, "0")), parseInt(s.CastleXMLUtils.getValueOrDefault("minAmount", l, "0")), parseInt(s.CastleXMLUtils.getValueOrDefault("toolOffset", l, "0")), parseInt(s.CastleXMLUtils.getValueOrDefault("toolMinAmount", l, "0"))));
        }
      }
    }
    return i;
  }
  n.__extends(CastleHighscoreData, e);
  CastleHighscoreData.prototype.parseGWH = function (e) {
    this._rankLastWeek = parseInt(e.LWR);
    this._rankActual = parseInt(e.CWR);
    this._nextRewardTime = l.CachedTimer.getCachedTimer() + parseInt(e.RT) * a.ClientConstTime.SEC_2_MILLISEC;
    this._leaguageId = parseInt(e.LID);
    this.dispatchEvent(new r.CastleHighscoreEvent(r.CastleHighscoreEvent.WEEKLY_HONOR_SCORE_UPDATED));
  };
  CastleHighscoreData.prototype.parseRWB = function (e) {
    if (e.gcu) {
      u.CastleModel.currencyData.parseGCU(e.gcu);
    }
    if (e.gui) {
      u.CastleModel.militaryData.parse_GUI(e.gui);
    }
    this.dispatchEvent(new r.CastleHighscoreEvent(r.CastleHighscoreEvent.REWARD_REDEEMED, [true]));
  };
  CastleHighscoreData.prototype.getHighscoreBonusVOForRank = function (e, t) {
    if (this._highscoreBoni != null) {
      for (var i = 0, n = this._highscoreBoni; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.leagueId == e && t >= o.highestRank && t <= (o.lowestRank > 0 ? o.lowestRank : Number.MAX_VALUE)) {
          return o;
        }
      }
    }
    return null;
  };
  Object.defineProperty(CastleHighscoreData.prototype, "isReadyToCollect", {
    get: function () {
      return this._rankLastWeek > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHighscoreData.prototype, "rankLastWeek", {
    get: function () {
      return this._rankLastWeek;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHighscoreData.prototype, "rankActual", {
    get: function () {
      return this._rankActual;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHighscoreData.prototype, "nextRewardRemainingTime", {
    get: function () {
      return Math.max(0, (this._nextRewardTime - l.CachedTimer.getCachedTimer()) * a.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHighscoreData.prototype, "leaguageId", {
    get: function () {
      return this._leaguageId;
    },
    enumerable: true,
    configurable: true
  });
  return CastleHighscoreData;
}(c.CastleEventDispatcher);
exports.CastleHighscoreData = p;