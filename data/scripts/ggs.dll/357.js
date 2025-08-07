Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./23.js");
var a = require("./358.js");
var s = require("./5.js");
var r = require("./2.js").getLogger("PerformanceMonitoringExternalLogCommand");
var o = function () {
  function PerformanceMonitoringExternalLogCommand(e) {
    this._userLevel = 1;
    this._type = e;
  }
  PerformanceMonitoringExternalLogCommand.prototype.performLog = function (e, t) {
    r.debug(e);
    if (PerformanceMonitoringExternalLogCommand.ALLOW_EXECUTION === undefined) {
      PerformanceMonitoringExternalLogCommand.ALLOW_EXECUTION = !!s.EnvGlobalsHandler.globals.isTest || Math.random() * 100 <= PerformanceMonitoringExternalLogCommand.LOG_PERC;
    }
    if (PerformanceMonitoringExternalLogCommand.ALLOW_EXECUTION) {
      i.ExternalLog.logger.log(new a.PerformanceMonitoringLogLOFactory(a.PerformanceMonitoringLogLOFactory.AVERAGE_MEASUREMENT_DATA, e, this._userLevel, t, this._type, s.EnvGlobalsHandler.globals.sessionLength * 1000));
    }
  };
  Object.defineProperty(PerformanceMonitoringExternalLogCommand.prototype, "userLevel", {
    set: function (e) {
      this._userLevel = e;
    },
    enumerable: true,
    configurable: true
  });
  PerformanceMonitoringExternalLogCommand.LOG_PERC = 5;
  PerformanceMonitoringExternalLogCommand.ALLOW_EXECUTION = undefined;
  return PerformanceMonitoringExternalLogCommand;
}();
exports.PerformanceMonitoringExternalLogCommand = o;