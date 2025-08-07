Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./28.js");
var a = require("./30.js");
var s = require("./221.js");
var r = function () {
  function SubscriptionActivePackageVO() {
    this._serverId = -1;
    this._endTimestamp = 0;
    this._endTimestampWithGracePeriod = 0;
    this._type = s.SubscriptionPackageEnum.UNKNOWN;
  }
  SubscriptionActivePackageVO.prototype.parseServerObject = function (e) {
    this._serverId = n.int(e.STID);
    this._endTimestamp = a.CachedTimer.getFreshTimer() + e.RS * o.ClientConstTime.SEC_2_MILLISEC;
    this._endTimestampWithGracePeriod = a.CachedTimer.getFreshTimer() + e.RSGP * o.ClientConstTime.SEC_2_MILLISEC;
    this._type = s.SubscriptionPackageEnum.getTypeByServerId(this._serverId);
  };
  SubscriptionActivePackageVO.prototype.isActive = function () {
    return this.getRemainingSecondWithGracePeriod() > 0;
  };
  SubscriptionActivePackageVO.prototype.getRemainingSeconds = function () {
    return n.int((this._endTimestamp - a.CachedTimer.getCachedTimer()) * o.ClientConstTime.MILLISEC_2_SEC);
  };
  SubscriptionActivePackageVO.prototype.getRemainingSecondWithGracePeriod = function () {
    return n.int((this._endTimestampWithGracePeriod - a.CachedTimer.getCachedTimer()) * o.ClientConstTime.MILLISEC_2_SEC);
  };
  Object.defineProperty(SubscriptionActivePackageVO.prototype, "serverId", {
    get: function () {
      return this._serverId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionActivePackageVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionActivePackageVO.prototype, "endTimestamp", {
    get: function () {
      return this._endTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionActivePackageVO.prototype, "endTimestampWithGracePeriod", {
    get: function () {
      return this._endTimestampWithGracePeriod;
    },
    enumerable: true,
    configurable: true
  });
  return SubscriptionActivePackageVO;
}();
exports.SubscriptionActivePackageVO = r;