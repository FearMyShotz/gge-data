Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function RenderScheduler() {
    this.RENDER_SCHEDULER_ACTIVE = false;
    this.isRunning = false;
    this.tasks = [];
    this.autoTerminateDelay = 0;
  }
  RenderScheduler.prototype.start = function () {
    if (!this.isRunning) {
      createjs.Ticker.addEventListener("tick", this.bindFunction(this.process));
      this.isRunning = true;
    }
  };
  RenderScheduler.prototype.process = function (e) {
    var t = 0;
    var i = 1000 / e.delta >> 1;
    for (var n = 0; n < this.tasks.length; n++) {
      if (t >= i) {
        return;
      }
      var o = this.tasks.shift();
      if (!Function.prototype.call.apply(o)) {
        t++;
      }
    }
    if (t === 0) {
      this.autoTerminateDelay++;
      if (this.autoTerminateDelay > 3) {
        this.terminate();
      }
    } else {
      this.autoTerminateDelay = 0;
    }
  };
  RenderScheduler.prototype.addTask = function (e) {
    if (this.RENDER_SCHEDULER_ACTIVE) {
      this.tasks.push(e);
      this.start();
    } else {
      Function.prototype.call.apply(e);
    }
  };
  RenderScheduler.prototype.terminate = function () {
    createjs.Ticker.removeEventListener("tick", this.bindFunction(this.process));
    this.isRunning = false;
    this.autoTerminateDelay = 0;
    if (this.tasks.length) {
      this.tasks = [];
    }
  };
  return RenderScheduler;
}();
exports.renderScheduler = window.renderScheduler = new n();