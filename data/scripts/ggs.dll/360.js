Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./361.js");
var a = require("./2.js");
var s = createjs.Ticker;
var r = a.getLogger("CoreJS.PerformanceMonitoring.Proxy");
exports.isCurrentFrameRateBelowTargetFramerate = function (e = 5) {
  return s.getMeasuredFPS() < s.framerate - e;
};
var o = function () {
  function PerformanceMonitoringProxy() {
    this.measuredFpsList = [];
    this._loginPausedTimeInMs = 0;
    this._loginPauseStartTimeInMS = -1;
  }
  PerformanceMonitoringProxy.prototype.measure = function () {
    this.maxFps = s.framerate;
    var e = s.getMeasuredFPS();
    r.debug("PerformanceMonitoringProxy::measure @ ", new Date(), e);
    this.measuredFpsList.push(e);
  };
  Object.defineProperty(PerformanceMonitoringProxy.prototype, "averageMeasurementResults", {
    get: function () {
      var e = new i.PerformanceMonitoringVO();
      e.averageFPS = this.averageFps;
      e.maxFps = this.maxFps;
      r.debug("PerformanceMonitoringProxy::averageMeasurementResults ", e);
      return e;
    },
    enumerable: true,
    configurable: true
  });
  PerformanceMonitoringProxy.prototype.resetMeasurements = function () {
    while (this.measuredFpsList.length > 0) {
      this.measuredFpsList.pop();
    }
  };
  Object.defineProperty(PerformanceMonitoringProxy.prototype, "averageFps", {
    get: function () {
      var e;
      var t = this.measuredFpsList.length > 0 ? (e = this.measuredFpsList).reduce(function (e, t) {
        return e + t;
      }) / e.length : s.getMeasuredFPS();
      t = Math.round(t);
      r.debug("current target framerate " + s.framerate + " -   current avarage framerate " + t + "  }");
      return t;
    },
    enumerable: true,
    configurable: true
  });
  PerformanceMonitoringProxy.prototype.isAvarageFrameRateBelowTargetFramerate = function (e = 5) {
    return this.averageFps < s.framerate - e;
  };
  Object.defineProperty(PerformanceMonitoringProxy.prototype, "loginTime", {
    get: function () {
      r.debug("until logic and requirements of loginTime is understood i am returning milliseconds elapsed since first initialization of game");
      return s.getTime();
    },
    enumerable: true,
    configurable: true
  });
  PerformanceMonitoringProxy.prototype.pauseLoginTimeCounter = function () {
    if (this._loginPauseStartTimeInMS < 0) {
      this._loginPauseStartTimeInMS = Date.now();
    }
  };
  PerformanceMonitoringProxy.prototype.resumeLoginTimeCounter = function () {
    if (this._loginPauseStartTimeInMS >= 0) {
      this._loginPausedTimeInMs += Date.now() - this._loginPauseStartTimeInMS;
      this._loginPauseStartTimeInMS = -1;
    }
  };
  return PerformanceMonitoringProxy;
}();
exports.PerformanceMonitoringProxy = o;