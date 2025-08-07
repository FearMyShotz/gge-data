Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ResourceCartData() {
    this._resourceType = o.CollectableEnum.UNKNOWN;
    this._amount = 0;
    this._receivedRemainingSeconds = 0;
    this._startTimestamp = NaN;
  }
  ResourceCartData.prototype.parseRciItem = function (e) {
    this._resourceType = a.CastleResourceCartsData.getEnumItemFromIndex(e.RT);
    this._amount = l.int(e.A);
    this._startTimestamp = c.CachedTimer.getCachedTimer() * s.ClientConstTime.MILLISEC_2_SEC;
    this._receivedRemainingSeconds = e.RS;
  };
  Object.defineProperty(ResourceCartData.prototype, "isCollectable", {
    get: function () {
      return this.secondsUntilCollect <= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceCartData.prototype, "secondsUntilCollect", {
    get: function () {
      var e = c.CachedTimer.getCachedTimer() * s.ClientConstTime.MILLISEC_2_SEC;
      return this._receivedRemainingSeconds - (e - this._startTimestamp);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceCartData.prototype, "resourceType", {
    get: function () {
      return this._resourceType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceCartData.prototype, "amount", {
    get: function () {
      return this._amount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceCartData.prototype, "totalDuration", {
    get: function () {
      return r.ResourceCartConst.CHARGETIME[a.CastleResourceCartsData.getIndexFromEnumItem(this.resourceType)];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceCartData.prototype, "receivedRemainingSeconds", {
    get: function () {
      return this._receivedRemainingSeconds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceCartData.prototype, "startTimestamp", {
    get: function () {
      return this._startTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  return ResourceCartData;
}();
exports.ResourceCartData = n;
var o = require("./12.js");
var a = require("./774.js");
var s = require("./28.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./30.js");