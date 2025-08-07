Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./4.js");
var r = function (e) {
  function MultiEventRewardEventInfoVO(t, i, n, o, a, s = null) {
    var r = this;
    r._eventID = 0;
    r._topXCount = 0;
    r._rank = 0;
    r._score = 0;
    CONSTRUCTOR_HACK;
    (r = e.call(this) || this)._eventID = t;
    r._rewards = i;
    r._rank = n;
    r._score = o;
    r._topXCount = a;
    r._skin = s;
    r._rewards.combineDuplicatedItems();
    r._rewards.sort(l.ClientConstSort.sortCombinedEventRewards);
    r._eventTitle = r.setEventTitleByEventID(r._eventID);
    return r;
  }
  n.__extends(MultiEventRewardEventInfoVO, e);
  MultiEventRewardEventInfoVO.prototype.setEventTitleByEventID = function (e) {
    var t = s.CastleModel.specialEventData.createEventVOByEventID(e);
    if (this._skin && a.instanceOfClass(t, "LongTermPointEventEventVO")) {
      t.skin = this._skin;
    }
    return t.eventBuildingNameId;
  };
  Object.defineProperty(MultiEventRewardEventInfoVO.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiEventRewardEventInfoVO.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiEventRewardEventInfoVO.prototype, "eventTitle", {
    get: function () {
      return this._eventTitle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiEventRewardEventInfoVO.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiEventRewardEventInfoVO.prototype, "score", {
    get: function () {
      return this._score;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiEventRewardEventInfoVO.prototype, "topXCount", {
    get: function () {
      return this._topXCount;
    },
    enumerable: true,
    configurable: true
  });
  return MultiEventRewardEventInfoVO;
}(o.ScrollItemVO);
exports.MultiEventRewardEventInfoVO = r;
var l = require("./75.js");