Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./83.js");
var a = createjs.TimerEvent;
var s = createjs.Text;
var r = require("./3.js");
var o = require("./20.js");
var l = function () {
  function ShutDownControlTimer(e) {
    this.shutDownTimerText = new s();
    ShutDownControlTimer._secondsUntilShutDown = e;
    this.initCountDownTimer();
    this.showCountDownTimer = new o.Signal();
    this.hideCountDownTimer = new o.Signal();
  }
  ShutDownControlTimer.prototype.initCountDownTimer = function () {
    this.shutDownTimer = new r.Timer(1000, ShutDownControlTimer._secondsUntilShutDown);
  };
  ShutDownControlTimer.prototype.startCountDown = function () {
    this.startShutDownTimer();
  };
  ShutDownControlTimer.prototype.startShutDownTimer = function () {
    this.shutDownTimer.addEventListener(a.TIMER, this.bindFunction(this.onShutDownTimer));
    this.shutDownTimer.start();
  };
  ShutDownControlTimer.prototype.onShutDownTimer = function (e) {
    this.showCountDownTimer.dispatch();
    this.hideCountDown();
  };
  ShutDownControlTimer.prototype.hideCountDown = function () {
    this.shutDownTimer.addEventListener(a.TIMER_COMPLETE, this.bindFunction(this.onShutDownTimerComplete));
  };
  ShutDownControlTimer.prototype.onShutDownTimerComplete = function (e) {
    this.hideCountDownTimer.dispatch();
  };
  ShutDownControlTimer.prototype.stopShutDownTimer = function () {
    this.showCountDownTimer.removeAll();
    this.hideCountDownTimer.removeAll();
    this.shutDownTimer.stop();
    this.shutDownTimer.removeEventListener(a.TIMER, this.bindFunction(this.onShutDownTimer));
    this.shutDownTimer.removeEventListener(a.TIMER_COMPLETE, this.bindFunction(this.onShutDownTimerComplete));
  };
  Object.defineProperty(ShutDownControlTimer.prototype, "showTimerCountdown", {
    get: function () {
      var e = Math.floor((i.IdentityManagementConstants.SHUTDOWN_CONTROL_TIMER - this.shutDownTimer.currentCount) / 60);
      var t = (i.IdentityManagementConstants.SHUTDOWN_CONTROL_TIMER - this.shutDownTimer.currentCount) % 60;
      this.shutDownTimerText.text = t >= 10 ? e + ":" + t : e + ":0" + t;
      return this.shutDownTimerText.text.toString();
    },
    enumerable: true,
    configurable: true
  });
  ShutDownControlTimer.NAME = "ShutDownControlTimer";
  return ShutDownControlTimer;
}();
exports.ShutDownControlTimer = l;