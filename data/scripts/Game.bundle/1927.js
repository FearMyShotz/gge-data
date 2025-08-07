Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./28.js");
var s = require("./30.js");
var r = function (e) {
  function BasicTimedNoClickProperties(t, i, n = 0) {
    var o = this;
    o.endTimestamp = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this)._title = t;
    o._copy = i;
    o.endTimestamp = s.CachedTimer.getCachedTimer() + n * a.ClientConstTime.SEC_2_MILLISEC;
    return o;
  }
  n.__extends(BasicTimedNoClickProperties, e);
  Object.defineProperty(BasicTimedNoClickProperties.prototype, "title", {
    get: function () {
      return this._title;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicTimedNoClickProperties.prototype, "copy", {
    get: function () {
      return this._copy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicTimedNoClickProperties.prototype, "remainingTimeInSeconds", {
    get: function () {
      console.log("BasicTimedNoClickProperties::remainingTimeInSeconds() - " + s.CachedTimer.getCachedTimer() + "-" + this.endTimestamp);
      return Math.max((this.endTimestamp - s.CachedTimer.getCachedTimer()) * a.ClientConstTime.MILLISEC_2_SEC, 0);
    },
    enumerable: true,
    configurable: true
  });
  return BasicTimedNoClickProperties;
}(o.BasicProperties);
exports.BasicTimedNoClickProperties = r;