Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AllianceGiftVO() {
    this._id = 0;
    this._expiredTimeStamp = NaN;
    this._collectInProgress = false;
  }
  AllianceGiftVO.prototype.parseArray = function (e) {
    if (e) {
      this._reward = o.CollectableManager.parser.s2cParamList.createList([e]).getFirstItemOfType(a.CollectableEnum.ALLIANCE_GIFT);
      this._expiredTimeStamp = l.CachedTimer.getCachedTimer() + e[2] * s.ClientConstTime.SEC_2_MILLISEC;
      this._id = r.int(e[3]);
    }
  };
  Object.defineProperty(AllianceGiftVO.prototype, "reward", {
    get: function () {
      return this._reward;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceGiftVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceGiftVO.prototype, "expiredTimeStamp", {
    get: function () {
      return this._expiredTimeStamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceGiftVO.prototype, "remainingTimeInSeconds", {
    get: function () {
      return (this._expiredTimeStamp - l.CachedTimer.getCachedTimer()) * s.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceGiftVO.prototype, "collectInProgress", {
    get: function () {
      return this._collectInProgress;
    },
    set: function (e) {
      this._collectInProgress = e;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceGiftVO;
}();
exports.AllianceGiftVO = n;
var o = require("./50.js");
var a = require("./12.js");
var s = require("./28.js");
var r = require("./6.js");
var l = require("./30.js");