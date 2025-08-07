Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./28.js");
var a = createjs.TimerEvent;
var s = function (e) {
  function Timer(t, n = 0) {
    var i = e.call(this) || this;
    i._delay = 0;
    i._currentCount = 0;
    i._running = false;
    i.updateInterval = 1000;
    i.lastCount = 1000;
    i.lastTimeStamp = 0;
    i.$update = function (e) {
      var t = e.timeStamp;
      if (t - i.lastTimeStamp >= i._delay) {
        i.lastCount = i.updateInterval;
      } else {
        i.lastCount -= 1000;
        if (i.lastCount > 0) {
          return false;
        }
        i.lastCount += i.updateInterval;
      }
      i.lastTimeStamp = t;
      i._currentCount++;
      var n = i.repeatCount > 0 && i._currentCount >= i.repeatCount;
      var s = i;
      i.dispatchEvent(new createjs.Event(a.TIMER, false, false), s);
      if (n) {
        i.stop();
        i.dispatchEvent(new createjs.Event(a.TIMER_COMPLETE, false, false), s);
      }
      return false;
    };
    i.delay = t;
    i.repeatCount = +n | 0;
    return i;
  }
  i.__extends(Timer, e);
  Object.defineProperty(Timer.prototype, "delay", {
    get: function () {
      return this._delay;
    },
    set: function (e) {
      if (e < 1) {
        e = 1;
      }
      if (this._delay != e) {
        this._delay = e;
        this.lastCount = this.updateInterval = Math.round(e * 60);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Timer.prototype, "currentCount", {
    get: function () {
      return this._currentCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Timer.prototype, "running", {
    get: function () {
      return this._running;
    },
    enumerable: true,
    configurable: true
  });
  Timer.prototype.reset = function () {
    this.stop();
    this._currentCount = 0;
  };
  Timer.prototype.start = function () {
    if (!this._running) {
      this.lastCount = this.updateInterval;
      this.lastTimeStamp = Date.now();
      createjs.Ticker.addEventListener("tick", this.$update);
      this._running = true;
    }
  };
  Timer.prototype.stop = function () {
    if (this._running) {
      createjs.Ticker.removeEventListener("tick", this.$update);
      this._running = false;
    }
  };
  return Timer;
}(createjs.EventDispatcher);
exports.Timer = s;