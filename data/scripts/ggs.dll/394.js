Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./4.js");
var s = require("./6.js");
var r = require("./120.js");
var o = require("./17.js");
var l = require("./15.js");
var u = function (e) {
  function BasicProfilingTrackingCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicProfilingTrackingCommand, e);
  BasicProfilingTrackingCommand.prototype.execute = function (e = null) {
    var t = e;
    var n = r.PerformanceMonitoringService.getInstance();
    n.startMonitoring(t.measurements);
    n.onMeasurementFinished.add(function () {
      o.TrackingCache.getInstance().getEvent(l.TrackingEventIds.PROFILING);
      var e = n.performanceMonitoringProxy.averageMeasurementResults;
      n.trackingCommand.performTracking(e, a.BasicModel.userData.userLevel);
      n.externalLogCommand.performLog(e, 1);
    });
  };
  return BasicProfilingTrackingCommand;
}(s.SimpleCommand);
exports.BasicProfilingTrackingCommand = u;