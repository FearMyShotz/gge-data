Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./4.js");
var c = require("./1721.js");
var u = function (e) {
  function CastleFactionEventScoreBarProperties(t, i, n, o, a = null, s = null) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n, o, a, s) || this;
  }
  n.__extends(CastleFactionEventScoreBarProperties, e);
  Object.defineProperty(CastleFactionEventScoreBarProperties.prototype, "numThresholdRewards", {
    get: function () {
      return CastleFactionEventScoreBarProperties.NUMBER_OF_THRESHOLD_REWARDS_1;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastlePaginatedScoreEventScoreBarProperties.prototype, "numThresholdRewards").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionEventScoreBarProperties.prototype, "numRankRewards", {
    get: function () {
      return CastleFactionEventScoreBarProperties.NUMBER_OF_RANK_REWARDS_1;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastlePaginatedScoreEventScoreBarProperties.prototype, "numRankRewards").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionEventScoreBarProperties.prototype.currentPage = function () {
    return r.int(this._pagination.currentPage);
  };
  CastleFactionEventScoreBarProperties.prototype.maxPages = function () {
    return r.int(this._pagination.maxPages);
  };
  CastleFactionEventScoreBarProperties.prototype.getOwnPointsText = function (e) {
    return new s.LocalizedNumberVO(l.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FACTION).ownPoints);
  };
  CastleFactionEventScoreBarProperties.prototype.nextThresholdProgress = function (e, t, i) {
    var n = t[e = r.int(this.getPaginatedIndex(e) + 1)];
    var o = e > 0 ? t[e - 1] : 0;
    return Math.min(1, Math.max(i - o, 0) / (n - o));
  };
  CastleFactionEventScoreBarProperties.__initialize_static_members = function () {
    CastleFactionEventScoreBarProperties.NUMBER_OF_THRESHOLD_REWARDS_1 = 3;
    CastleFactionEventScoreBarProperties.NUMBER_OF_RANK_REWARDS_1 = 3;
  };
  return CastleFactionEventScoreBarProperties;
}(c.CastlePaginatedScoreEventScoreBarProperties);
exports.CastleFactionEventScoreBarProperties = u;
o.classImplementsInterfaces(u, "IScorebarProperties");
u.__initialize_static_members();