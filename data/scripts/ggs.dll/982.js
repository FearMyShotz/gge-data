Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./2.js");
var s = require("./85.js");
var r = require("./14.js");
var o = function (e) {
  function MeasurementLogFactory(t) {
    var n = e.call(this) || this;
    n.logger = a.getLogger(s.FPS_MEASUREMENT_LOGGER);
    n._subErrorId = 40002;
    n._eventData = t;
    return n;
  }
  i.__extends(MeasurementLogFactory, e);
  MeasurementLogFactory.prototype.create = function () {
    this._log = e.prototype.create.call(this);
    this.setLogData();
    this.logger.debug("Executing old method, result not guaranteed");
    return this._log;
  };
  MeasurementLogFactory.prototype.setLogData = function () {
    this._log.logData[r.ExternalLoggingConstants.PARAM_LOG_TYPE] = r.ExternalLoggingConstants.LOGGING_TYPE_LOG;
    this._log.logData[r.ExternalLoggingConstants.PARAM_LOG_EVENT_ID] = MeasurementLogFactory.PERFORMANCE_MONITORING_LOG;
    for (var e in this._eventData) {
      this._log.logData[e] = this._eventData[e];
    }
    this.logger.debug("Executing old method, result not guaranteed");
  };
  MeasurementLogFactory.PERFORMANCE_MONITORING_LOG = 40;
  return MeasurementLogFactory;
}(require("./21.js").BasicLogObjectFactory);
exports.MeasurementLogFactory = o;