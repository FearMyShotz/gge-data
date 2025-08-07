Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./357.js");
var a = require("./359.js");
var s = require("./360.js");
var r = require("./362.js");
var o = require("./82.js");
var l = require("./2.js");
var u = require("./3.js");
var c = createjs.TimerEvent;
var _ = l.getLogger("CoreJS.PerformanceMonitoring.Service");
exports.measurePerformanceBetweenMarks = function (e) {
  performance.measure(e, e + "_start", e + "_end");
  var t = performance.getEntriesByName(e)[0];
  _.debug("measured duration for " + e + ": " + t.duration);
  performance.clearMarks(e);
  performance.clearMeasures(e);
  return t;
};
var d = function () {
  function PerformanceMonitoringService() {
    this._isInitialized = false;
    this._isPaused = false;
    this.onMeasurementFinished = new o.NoneValueSignal();
    this._defaultMeasurements = [new r.MeasurementVO(5, 4, 40, 300)];
    if (PerformanceMonitoringService._PerformanceMonitoringService) {
      throw new Error("Calling constructor not allowed! Use getInstance instead.");
    }
  }
  PerformanceMonitoringService.getInstance = function () {
    if (PerformanceMonitoringService._PerformanceMonitoringService == null) {
      PerformanceMonitoringService._PerformanceMonitoringService = new PerformanceMonitoringService();
    }
    return PerformanceMonitoringService._PerformanceMonitoringService;
  };
  PerformanceMonitoringService.prototype.init = function (e, t) {
    if (this._isInitialized) {
      _.debug("PerformanceMonitoringService already initialized");
    } else {
      this.trackingCommand = new a.PerformanceMonitoringTrackingCommand();
      this.externalLogCommand = new i.PerformanceMonitoringExternalLogCommand(e);
      this.performanceMonitoringProxy = new s.PerformanceMonitoringProxy();
      this._isInitialized = true;
    }
  };
  PerformanceMonitoringService.prototype.startMonitoring = function (e) {
    _.debug("PerformanceMonitoringService::startMonitoring");
    if (e && e.length > 0) {
      this._measurements = e;
    } else {
      this._measurements = this._defaultMeasurements;
    }
    this._startedAt = Date.now();
    this._currentMeasurementIndex = 0;
    this._currentMeasurement = this._measurements[this._currentMeasurementIndex];
    this.startMeasurement();
  };
  PerformanceMonitoringService.prototype.stopMonitoring = function () {
    _.debug("PerformanceMonitoringService::STOP MONITORING");
    this.disposeSingleMeasurementTimer();
    clearTimeout(this._coolDownTimerId);
  };
  Object.defineProperty(PerformanceMonitoringService.prototype, "pause", {
    set: function (e) {
      if (e == 1) {
        _.debug("PerformanceMonitoringService::measurements paused");
        this.performanceMonitoringProxy.pauseLoginTimeCounter();
      } else {
        _.debug("PerformanceMonitoringService::measurements resumed");
        this.performanceMonitoringProxy.resumeLoginTimeCounter();
      }
      this._isPaused = e;
    },
    enumerable: true,
    configurable: true
  });
  PerformanceMonitoringService.prototype.startMeasurement = function () {
    if (this._currentMeasurement) {
      _.debug("PerformanceMonitoringService::startMeasurement will now collect " + this._currentMeasurement.measurements + " measurements (one every " + this._currentMeasurement.intervalBetweenMeasurements + " secs)");
      clearTimeout(this._coolDownTimerId);
      this.disposeSingleMeasurementTimer();
      this.performanceMonitoringProxy.resetMeasurements();
      this.onSingleMeasurement();
      this._singleMeasurementTimer = new u.Timer(this._currentMeasurement.intervalBetweenMeasurements * 1000, this._currentMeasurement.measurements);
      this._singleMeasurementTimer.addEventListener(c.TIMER, this.bindFunction(this.onSingleMeasurement));
      this._singleMeasurementTimer.addEventListener(c.TIMER_COMPLETE, this.bindFunction(this.onMeasurementsCompleted));
      this._singleMeasurementTimer.start();
    } else {
      this.stopMonitoring();
    }
  };
  PerformanceMonitoringService.prototype.onSingleMeasurement = function (e = null) {
    if (!this._isPaused) {
      this.performanceMonitoringProxy.measure();
    }
  };
  PerformanceMonitoringService.prototype.onMeasurementsCompleted = function (e) {
    var t = this;
    _.debug("PerformanceMonitoringService::FINISHED MONITORING");
    this.onMeasurementFinished.signal();
    this._coolDownTimerId = window.setTimeout(function () {
      if (Date.now() - t._startedAt > t._currentMeasurement.runUntil * 1000) {
        t._currentMeasurementIndex++;
        if (t._measurements[t._currentMeasurementIndex]) {
          t._currentMeasurement = t._measurements[t._currentMeasurementIndex];
        } else {
          t._currentMeasurement = null;
        }
      }
      t.startMeasurement();
    }, this._currentMeasurement.waitFor * 1000);
  };
  PerformanceMonitoringService.prototype.disposeSingleMeasurementTimer = function () {
    if (this._singleMeasurementTimer) {
      this._singleMeasurementTimer.stop();
      this._singleMeasurementTimer.removeEventListener(c.TIMER, this.onSingleMeasurement);
      this._singleMeasurementTimer.removeEventListener(c.TIMER_COMPLETE, this.onMeasurementsCompleted);
      this._singleMeasurementTimer = null;
    }
  };
  return PerformanceMonitoringService;
}();
exports.PerformanceMonitoringService = d;