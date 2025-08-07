Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./85.js");
var a = require("./979.js");
var s = require("./2.js");
var r = createjs.Shape;
var o = createjs.Event;
var l = function () {
  function FpsMeasurement() {
    this.logger = s.getLogger(i.FPS_MEASUREMENT_LOGGER);
    this._counterAsShape = new r();
    this._samples = [];
  }
  FpsMeasurement.prototype.start = function (e = null) {
    this.cleanupSamples();
    this._samplingTime = Date.now();
    this._framesNumber = 0;
    this._counterAsShape.addEventListener(o.ENTER_FRAME, this.bindFunction(this.measure));
    this.logger.debug("Executing old method, result not guaranteed");
  };
  FpsMeasurement.prototype.stop = function (e = null) {
    this._counterAsShape.removeEventListener(o.ENTER_FRAME, this.bindFunction(this.measure));
    this.logger.debug("Executing old method, result not guaranteed");
  };
  FpsMeasurement.prototype.dispose = function () {
    if (this._counterAsShape) {
      this._counterAsShape.removeEventListener(o.ENTER_FRAME, this.bindFunction(this.measure));
      this._counterAsShape = null;
    }
    this.logger.debug("Executing old method, result not guaranteed");
  };
  Object.defineProperty(FpsMeasurement.prototype, "results", {
    get: function () {
      var e = new a.FpsMeasurementResults();
      e.minFps = Math.min.apply(null, this._samples);
      e.maxFps = Math.max.apply(null, this._samples);
      e.averageFps = (e.minFps + e.maxFps) * 0.5;
      this.logger.debug("Executing old method, result not guaranteed");
      return e;
    },
    enumerable: true,
    configurable: true
  });
  FpsMeasurement.prototype.cleanupSamples = function () {
    while (this._samples.length > 0) {
      this._samples.shift();
    }
    this.logger.debug("Executing old method, result not guaranteed");
  };
  FpsMeasurement.prototype.measure = function (e) {
    var t = Date.now() - this._samplingTime;
    this._framesNumber++;
    if (t > 1000) {
      this._fps = this._framesNumber * 1000 / t;
      this._samples.push(this._fps);
      this._samplingTime = Date.now();
      this._framesNumber = 0;
      this._samplesSum += this._fps;
    }
    this.logger.debug("Executing old method, result not guaranteed");
  };
  return FpsMeasurement;
}();
exports.FpsMeasurement = l;