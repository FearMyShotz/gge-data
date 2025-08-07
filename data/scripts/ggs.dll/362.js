Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  return function MeasurementVO(e, t, n, i) {
    this.measurements = e;
    this.intervalBetweenMeasurements = t;
    this.waitFor = n;
    this.runUntil = i;
  };
}();
exports.MeasurementVO = i;