Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./6.js");
var r = function (e) {
  function CastleFactionEventWinDialogProperties(t) {
    var i = this;
    i._hasWon = false;
    i._factionWonID = 0;
    i._rank = 0;
    i._points = 0;
    i._playerFactionID = 0;
    i._boobyPricePointsNeeded = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).parseParamObject(t);
    return i;
  }
  n.__extends(CastleFactionEventWinDialogProperties, e);
  CastleFactionEventWinDialogProperties.prototype.parseParamObject = function (e) {
    this._hasWon = parseInt(e.W) == 1;
    this._rank = s.int(e.R);
    this._boobyPricePointsNeeded = s.int(e.BS);
    this._points = s.int(e.S);
    this._factionWonID = this.factionWonID;
    this._playerFactionID = s.int(e.FID);
    this._rewardList = l.CollectableManager.parser.createListFromRewardIdsString(a.TextValide.parseChatJSONMessage(e.RID), false, "+");
  };
  Object.defineProperty(CastleFactionEventWinDialogProperties.prototype, "hasWon", {
    get: function () {
      return this._hasWon;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionEventWinDialogProperties.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionEventWinDialogProperties.prototype, "points", {
    get: function () {
      return this._points;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionEventWinDialogProperties.prototype, "factionWonID", {
    get: function () {
      return this._factionWonID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionEventWinDialogProperties.prototype, "boobyPricePointsNeeded", {
    get: function () {
      return this._boobyPricePointsNeeded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionEventWinDialogProperties.prototype, "playerFactionID", {
    get: function () {
      return this._playerFactionID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionEventWinDialogProperties.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  return CastleFactionEventWinDialogProperties;
}(o.BasicProperties);
exports.CastleFactionEventWinDialogProperties = r;
var l = require("./50.js");