Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./28.js");
var r = require("./21.js");
var l = require("./30.js");
var c = function (e) {
  function CastleTimerData() {
    var t = this;
    t._dailyResetTimestamp = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleTimerData, e);
  CastleTimerData.prototype.executeUpdate = function (e) {
    if (this._timeEvent) {
      this._timeEvent.nowValue = e;
    } else {
      this._timeEvent = new r.CastleTimerEvent(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, e);
    }
    this.dispatchEvent(this._timeEvent);
  };
  CastleTimerData.prototype.parse_DRT = function (e) {
    if (e) {
      this._dailyResetTimestamp = a.int(l.CachedTimer.getCachedTimer() + e.STR * s.ClientConstTime.SEC_2_MILLISEC);
    }
  };
  Object.defineProperty(CastleTimerData.prototype, "timeTillDailyResetInSec", {
    get: function () {
      return Math.max((this._dailyResetTimestamp - l.CachedTimer.getCachedTimer()) * s.ClientConstTime.MILLISEC_2_SEC, 0);
    },
    enumerable: true,
    configurable: true
  });
  CastleTimerData.prototype.reset = function () {
    this._dailyResetTimestamp = 0;
  };
  return CastleTimerData;
}(require("./54.js").CastleBasicData);
exports.CastleTimerData = c;
o.classImplementsInterfaces(c, "IUpdatable", "ICastleBasicData");