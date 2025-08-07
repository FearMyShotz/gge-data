Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./28.js");
var s = require("./21.js");
var r = require("./442.js");
var l = require("./30.js");
var c = require("./72.js");
var u = require("./4.js");
var d = function (e) {
  function CastleTimerComponent(t, i, n = 0, o = "") {
    var a = e.call(this) || this;
    a.remainingTimeStamp = NaN;
    a._timerID = "";
    a._isRunning = false;
    a._getTimeString = i;
    a.itxt_timer = t;
    a._timerID = o;
    if (n > 0) {
      a.start(n);
    }
    return a;
  }
  n.__extends(CastleTimerComponent, e);
  CastleTimerComponent.prototype.start = function (e = 0) {
    if (e > 0) {
      this.remainingTimeStamp = l.CachedTimer.getCachedTimer() + e * a.ClientConstTime.SEC_2_MILLISEC;
    }
    if (!this._isRunning) {
      u.CastleModel.timerData.addEventListener(s.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTimer));
      this._isRunning = true;
    }
    this.updateTimer(null);
  };
  CastleTimerComponent.prototype.stop = function () {
    if (this._isRunning) {
      u.CastleModel.timerData.removeEventListener(s.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTimer));
      this._isRunning = false;
    }
  };
  CastleTimerComponent.prototype.updateTimer = function (e) {
    if (this.itxt_timer && this.itxt_timer.textContentVO) {
      if (o.instanceOfClass(this.itxt_timer.textContentVO, "LocalizedTextVO")) {
        this.itxt_timer.textContentVO.textReplacements = [this._getTimeString(this.remainingTimeInSeconds)];
      } else {
        this.itxt_timer.textContentVO.stringValue = this._getTimeString(this.remainingTimeInSeconds);
      }
      if (this.isExpired()) {
        this.dispatchEvent(new r.CastleTimerComponentEvent(r.CastleTimerComponentEvent.TIMER_EXPIRED, this.timerID));
        this.stop();
      }
    } else {
      this.stop();
    }
  };
  CastleTimerComponent.prototype.isExpired = function () {
    return this.remainingTimeInSeconds <= 0;
  };
  Object.defineProperty(CastleTimerComponent.prototype, "remainingTimeInSeconds", {
    get: function () {
      return (this.remainingTimeStamp - l.CachedTimer.getCachedTimer()) * a.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTimerComponent.prototype, "timerID", {
    get: function () {
      return this._timerID;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTimerComponent;
}(c.CastleEventDispatcher);
exports.CastleTimerComponent = d;