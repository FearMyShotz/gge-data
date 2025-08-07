Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./85.js");
var a = require("./984.js");
var s = require("./2.js");
var r = function () {
  function Measurements() {
    this.logger = s.getLogger(i.FPS_MEASUREMENT_LOGGER);
  }
  Measurements.createMeasurement = function (e, t, n = null, i = null) {
    var r = new a.MeasurementFacade();
    s.getLogger("FPSMeasurement").debug("Measurements.createMeasurement is not implemented yet");
    return r;
  };
  Measurements.getMeasurement = function (e) {
    var t = new a.MeasurementFacade();
    s.getLogger("FPSMeasurement").debug("Measurements.getMeasurement is not implemented yet");
    return t;
  };
  Measurements.removeMeasurement = function (e) {
    s.getLogger("FPSMeasurement").debug("Measurements.removeMeasurement is not implemented yet");
  };
  Measurements.removeMeasurementsOf = function (e) {
    s.getLogger("FPSMeasurement").debug("Measurements.removeMeasurementsOf is not implemented yet");
  };
  return Measurements;
}();
exports.Measurements = r;