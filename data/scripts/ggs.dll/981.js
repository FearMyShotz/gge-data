Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./85.js");
var a = require("./2.js");
var s = function () {
  function FpsMeasurementTrackingEventHandler() {
    this.logger = a.getLogger(i.FPS_MEASUREMENT_LOGGER);
  }
  FpsMeasurementTrackingEventHandler.prototype.parse = function (e, t, n) {
    this.logger.debug("FpsMeasurementTrackingEventHandler.parse is not implemented yet");
  };
  FpsMeasurementTrackingEventHandler.prototype.send = function () {
    this.logger.debug("FpsMeasurementTrackingEventHandler.send is not implemented yet");
  };
  return FpsMeasurementTrackingEventHandler;
}();
exports.FpsMeasurementTrackingEventHandler = s;