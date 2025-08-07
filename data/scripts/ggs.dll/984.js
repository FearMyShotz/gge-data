Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./85.js");
var a = require("./2.js");
var s = function () {
  function MeasurementFacade() {
    this.logger = a.getLogger(i.FPS_MEASUREMENT_LOGGER);
  }
  MeasurementFacade.prototype.start = function (e) {
    this.logger.debug("MeasurementFacade.start is not implemented yet");
  };
  MeasurementFacade.prototype.stop = function (e) {
    this.logger.debug("MeasurementFacade.stop is not implemented yet");
  };
  MeasurementFacade.prototype.activate = function () {
    this.logger.debug("MeasurementFacade.activate is not implemented yet");
  };
  MeasurementFacade.prototype.deactivate = function () {
    this.logger.debug("MeasurementFacade.deactivate is not implemented yet");
  };
  return MeasurementFacade;
}();
exports.MeasurementFacade = s;