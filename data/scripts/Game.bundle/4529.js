Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./28.js");
var r = require("./30.js");
var l = require("./4.js");
var c = require("./1143.js");
var u = function (e) {
  function SeasonLeagueEventVO() {
    var t = this;
    t._originalEventDays = 0;
    t._remainingEventDays = 0;
    t._rewardSetId = 0;
    t._hasAllianceRanking = false;
    t._leaguetypeID = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(SeasonLeagueEventVO, e);
  SeasonLeagueEventVO.prototype.parseParamObject = function (t) {
    e.prototype.parseParamObject.call(this, t);
    this._remainingEventDays = a.int(t.KLRD);
    this._originalEventDays = a.int(t.KLRT);
    this._rewardSetId = a.int(t.RSID);
    this._hasAllianceRanking = t.KLARE == 1;
    this._leaguetypeID = t.KLLID || 0;
  };
  SeasonLeagueEventVO.prototype.openDialog = function (e = true) {
    l.CastleModel.seasonLeagueData.openEventDialog();
  };
  Object.defineProperty(SeasonLeagueEventVO.prototype, "endTimestamp", {
    get: function () {
      if (this._remainingEventDays <= 1) {
        var e = l.CastleModel.seasonLeagueData.getActiveSeasonEventVO();
        if (e) {
          return e.endTimestamp;
        }
      }
      return r.CachedTimer.getCachedTimer() + this.remainingEventDays * s.ClientConstTime.SECONDS_PER_DAY * s.ClientConstTime.SEC_2_MILLISEC;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.ATriggerEventVO.prototype, "endTimestamp").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEventVO.prototype, "remainingEventDays", {
    get: function () {
      return this._remainingEventDays;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEventVO.prototype, "originalEventDays", {
    get: function () {
      return this._originalEventDays;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEventVO.prototype, "rewardSetId", {
    get: function () {
      return this._rewardSetId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEventVO.prototype, "hasAllianceRanking", {
    get: function () {
      return this._hasAllianceRanking;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEventVO.prototype, "leaguetypeID", {
    get: function () {
      return this._leaguetypeID;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueEventVO;
}(c.ATriggerEventVO);
exports.SeasonLeagueEventVO = u;
o.classImplementsInterfaces(u, "IEventOverviewable");