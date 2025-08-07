Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./17.js");
var a = require("./15.js");
var s = require("./5.js");
var r = require("./2.js").getLogger("PerformanceMonitoringTrackingCommand");
var o = function () {
  function PerformanceMonitoringTrackingCommand() {}
  PerformanceMonitoringTrackingCommand.prototype.performTracking = function (e, t) {
    r.debug(e);
    if (PerformanceMonitoringTrackingCommand.ALLOW_EXECUTION === undefined) {
      PerformanceMonitoringTrackingCommand.ALLOW_EXECUTION = !!s.EnvGlobalsHandler.globals.isTest || Math.random() * 100 <= PerformanceMonitoringTrackingCommand.TRACK_ONLY_PERC;
    }
    if (PerformanceMonitoringTrackingCommand.ALLOW_EXECUTION) {
      var n = i.TrackingCache.getInstance().getEvent(a.TrackingEventIds.PROFILING);
      n.level = t;
      n.fps = e.averageFPS;
      n.maxFps = e.maxFps;
      n.memoryUsage = window.performance && window.performance.memory && window.performance.memory.usedJSHeapSize || 0;
      n.storeId = s.EnvGlobalsHandler.globals.storeId;
      i.TrackingCache.getInstance().sendEvent(a.TrackingEventIds.PROFILING);
    }
  };
  PerformanceMonitoringTrackingCommand.TRACK_ONLY_PERC = 100;
  PerformanceMonitoringTrackingCommand.ALLOW_EXECUTION = undefined;
  return PerformanceMonitoringTrackingCommand;
}();
exports.PerformanceMonitoringTrackingCommand = o;