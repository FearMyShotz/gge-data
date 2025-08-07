Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function IsoViewScaleScheduler(e) {
    this.autoTerminateDelay = 0;
    this.isRunning = false;
    this.camera = e;
  }
  IsoViewScaleScheduler.prototype.start = function () {
    if (!this.isRunning) {
      createjs.Ticker.addEventListener("tick", this.bindFunction(this.process));
      this.isRunning = true;
    }
  };
  IsoViewScaleScheduler.prototype.process = function () {
    var e = this.camera.isoRenderer.objects.getCompleteObjectsList();
    var t = this.camera.getCurrentZoomValue() > 0.5 ? 1 : 0.6;
    var i = 0;
    for (var n = e.length - 1; n >= 0; n--) {
      if (i > 3) {
        return;
      }
      var o = e[n];
      if (!this.canSkip(o) && o.needsReCache(t)) {
        o.onCameraZoomChanged();
        i++;
      }
    }
    if (i === 0) {
      this.autoTerminateDelay++;
      if (this.autoTerminateDelay > 100) {
        this.terminate();
      }
    } else {
      this.autoTerminateDelay = 0;
    }
  };
  IsoViewScaleScheduler.prototype.canSkip = function (e) {
    return e instanceof a.AIsoMovementVE || e instanceof o.CastleGroundVE;
  };
  IsoViewScaleScheduler.prototype.terminate = function () {
    createjs.Ticker.removeEventListener("tick", this.bindFunction(this.process));
    this.isRunning = false;
    this.autoTerminateDelay = 0;
  };
  return IsoViewScaleScheduler;
}();
exports.IsoViewScaleScheduler = n;
var o = require("./1187.js");
var a = require("./489.js");