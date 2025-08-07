Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./14.js");
var s = require("./170.js");
var r = function (e) {
  function PerformanceMonitoringLogLOFactory(t, n, i, a, s, r) {
    var o = e.call(this) || this;
    o._subErrorId = t;
    o._averageMeasurementResults = n;
    o._userLevel = i;
    o._performanceCategory = a;
    o._type = s;
    o._sessionLengthMs = r;
    return o;
  }
  i.__extends(PerformanceMonitoringLogLOFactory, e);
  PerformanceMonitoringLogLOFactory.prototype.create = function () {
    var t = e.prototype.create.call(this);
    t.logData.set(a.ExternalLoggingConstants.PARAM_LOG_TYPE, a.ExternalLoggingConstants.LOGGING_TYPE_LOG.toString());
    t.logData.set(a.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, PerformanceMonitoringLogLOFactory.PERFORMANCE_MONITORING_LOG.toString());
    t.logData.set(PerformanceMonitoringLogLOFactory.PARAM_FPS, this._averageMeasurementResults.averageFPS.toString());
    t.logData.set(PerformanceMonitoringLogLOFactory.PARAM_MAX_FPS, this._averageMeasurementResults.maxFps.toString());
    t.logData.set(PerformanceMonitoringLogLOFactory.PARAM_TOTAL_MEMORY_USAGE, this._averageMeasurementResults.averageTotalMemoryUsageInMB.toString());
    t.logData.set(PerformanceMonitoringLogLOFactory.PARAM_PRIVATE_MEMORY_USAGE, this._averageMeasurementResults.averagePrivateMemoryUsageInMB.toString());
    t.logData.set(PerformanceMonitoringLogLOFactory.PARAM_USER_LEVEL, this._userLevel.toString());
    t.logData.set(PerformanceMonitoringLogLOFactory.PARAM_SESSION_LENGTH_MS, this._sessionLengthMs.toString());
    if (this._type === s.PerformanceMonitoringEnvTypeEnum.Mobile) {
      t.logData.set(PerformanceMonitoringLogLOFactory.PARAM_PERFORMANCE_CATEGORY, this._performanceCategory.toString());
      t.logData.set(PerformanceMonitoringLogLOFactory.PARAM_DOWNLOAD_RATE, this._averageMeasurementResults.downloadRateInKBs.toString());
      t.logData.set(PerformanceMonitoringLogLOFactory.PARAM_DOWNLOAD_CONTENT_AMOUNT_EXTERNAL, this._averageMeasurementResults.downloadContentAmountExternal.toString());
      t.logData.set(PerformanceMonitoringLogLOFactory.PARAM_DOWNLOAD_CONTENT_AMOUNT_LOCAL, this._averageMeasurementResults.downloadContentAmountLocal.toString());
      t.logData.set(PerformanceMonitoringLogLOFactory.PARAM_DOWNLOAD_CONTENT_SIZE_EXTERNAL, this._averageMeasurementResults.downloadContentSizeExternalInKB.toString());
      t.logData.set(PerformanceMonitoringLogLOFactory.PARAM_DOWNLOAD_CONTENT_SIZE_LOCAL, this._averageMeasurementResults.downloadContentSizeLocalInKB.toString());
      t.logData.set(PerformanceMonitoringLogLOFactory.PARAM_LOGIN_TIME, this._averageMeasurementResults.loginTime.toString());
    }
    return t;
  };
  PerformanceMonitoringLogLOFactory.AVERAGE_MEASUREMENT_DATA = 40001;
  PerformanceMonitoringLogLOFactory.PERFORMANCE_MONITORING_LOG = 40;
  PerformanceMonitoringLogLOFactory.PARAM_FPS = "fps";
  PerformanceMonitoringLogLOFactory.PARAM_MAX_FPS = "maxFps";
  PerformanceMonitoringLogLOFactory.PARAM_TOTAL_MEMORY_USAGE = "totalMemoryUsageInMB";
  PerformanceMonitoringLogLOFactory.PARAM_PRIVATE_MEMORY_USAGE = "privateMemoryUsageInMB";
  PerformanceMonitoringLogLOFactory.PARAM_PERFORMANCE_CATEGORY = "performanceCategory";
  PerformanceMonitoringLogLOFactory.PARAM_USER_LEVEL = "userLevel";
  PerformanceMonitoringLogLOFactory.PARAM_DOWNLOAD_RATE = "downloadRateInKBs";
  PerformanceMonitoringLogLOFactory.PARAM_DOWNLOAD_CONTENT_AMOUNT_EXTERNAL = "downloadContentAmountExternal";
  PerformanceMonitoringLogLOFactory.PARAM_DOWNLOAD_CONTENT_AMOUNT_LOCAL = "downloadContentAmountLocal";
  PerformanceMonitoringLogLOFactory.PARAM_DOWNLOAD_CONTENT_SIZE_EXTERNAL = "downloadContentSizeExternalInKB";
  PerformanceMonitoringLogLOFactory.PARAM_DOWNLOAD_CONTENT_SIZE_LOCAL = "downloadContentSizeLocalInKB";
  PerformanceMonitoringLogLOFactory.PARAM_LOGIN_TIME = "loginTime";
  PerformanceMonitoringLogLOFactory.PARAM_SESSION_LENGTH_MS = "sessionLengthMs";
  return PerformanceMonitoringLogLOFactory;
}(require("./21.js").BasicLogObjectFactory);
exports.PerformanceMonitoringLogLOFactory = r;