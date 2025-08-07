Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function LongTermPointEventRewardListProperties(t, i, n, o) {
    var a = this;
    a._rewardsReceived = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this)._rewardList = t;
    a._pointThreshholds = i;
    a._rewardsReceived = n;
    a._skin = o;
    return a;
  }
  n.__extends(LongTermPointEventRewardListProperties, e);
  Object.defineProperty(LongTermPointEventRewardListProperties.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventRewardListProperties.prototype, "pointThreshholds", {
    get: function () {
      return this._pointThreshholds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventRewardListProperties.prototype, "rewardsReceived", {
    get: function () {
      return this._rewardsReceived;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventRewardListProperties.prototype, "skin", {
    get: function () {
      return this._skin;
    },
    enumerable: true,
    configurable: true
  });
  return LongTermPointEventRewardListProperties;
}(require("./2.js").BasicProperties);
exports.LongTermPointEventRewardListProperties = o;