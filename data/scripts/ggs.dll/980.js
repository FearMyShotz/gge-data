Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function FpsMeasurementConfig() {}
  Object.defineProperty(FpsMeasurementConfig.prototype, "canBeExecutedManually", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FpsMeasurementConfig.prototype, "canBeInterrupted", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FpsMeasurementConfig.prototype, "pauseOnApplicationDeactivate", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FpsMeasurementConfig.prototype, "delayInMilliseconds", {
    get: function () {
      return 5000;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FpsMeasurementConfig.prototype, "durationInMilliseconds", {
    get: function () {
      return 30000;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FpsMeasurementConfig.prototype, "minimalDurationInMilliseconds", {
    get: function () {
      return 10000;
    },
    enumerable: true,
    configurable: true
  });
  return FpsMeasurementConfig;
}();
exports.FpsMeasurementConfig = i;