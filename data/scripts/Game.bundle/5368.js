Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./75.js");
var o = require("./22.js");
var a = function () {
  function CollectorEventRewardVO(e) {
    this._minCurrencyAmount = 0;
    this._eventOptionID = 0;
    this._id = 0;
    this._id = parseInt(o.CastleXMLUtils.getValueOrDefault("collectorEventRewardsID", e, "0", true));
    this._eventOptionID = parseInt(o.CastleXMLUtils.getValueOrDefault("eventOptionID", e, "0", true));
    this._minCurrencyAmount = parseInt(o.CastleXMLUtils.getValueOrDefault("minCurrencyAmount", e, "0", true));
    var t = parseInt(o.CastleXMLUtils.getValueOrDefault("rewardID", e, "0", true));
    this._collectable = s.CollectableManager.parser.createListFromRewardIdsString(t.toString(), true);
    this._collectable.sort(n.ClientConstSort.sortCombinedEventRewards);
  }
  Object.defineProperty(CollectorEventRewardVO.prototype, "collectable", {
    get: function () {
      return this._collectable;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorEventRewardVO.prototype, "minCurrencyAmount", {
    get: function () {
      return this._minCurrencyAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorEventRewardVO.prototype, "eventOptionID", {
    get: function () {
      return this._eventOptionID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorEventRewardVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  return CollectorEventRewardVO;
}();
exports.CollectorEventRewardVO = a;
var s = require("./50.js");