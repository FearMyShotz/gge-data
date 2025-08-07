Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./17.js");
var a = require("./28.js");
var s = require("./4.js");
var r = require("./21.js");
var l = function () {
  function GZPTrackingController() {
    this._trackingTimeInterval = -1;
    this._isRunning = false;
  }
  GZPTrackingController.getInstance = function () {
    GZPTrackingController._instance ||= new GZPTrackingController();
    return GZPTrackingController._instance;
  };
  GZPTrackingController.prototype.startTracking = function () {
    if (this._isRunning) {
      this.stopTracking();
    }
    this._isRunning = true;
    this._trackingTimeInterval = this.getTimeInterval();
    s.CastleModel.timerData.addEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
  };
  GZPTrackingController.prototype.onTickEvent = function (e) {
    if (this._trackingTimeInterval != -1) {
      this._trackingTimeInterval -= a.ClientConstTime.SEC_2_MILLISEC;
      if (this.layoutManager.currentState == n.BasicLayoutManager.STATE_CONNECT) {
        this.stopTracking();
      }
      if (this._isRunning && this._trackingTimeInterval <= 0) {
        n.ClientFunnelTrackingController.getInstance().trackState(n.ClientFunnelGameStates.GZP_RNG);
        this.stopTracking();
        this.startTracking();
      }
    }
  };
  GZPTrackingController.prototype.getTimeInterval = function () {
    var e = Math.random() * (GZPTrackingController.MAX_INTERVAL - GZPTrackingController.MIN_INTERVAL + 1) + GZPTrackingController.MIN_INTERVAL;
    return Math.floor(e);
  };
  GZPTrackingController.prototype.stopTracking = function () {
    this._isRunning = false;
    this._trackingTimeInterval = -1;
    s.CastleModel.timerData.removeEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
  };
  Object.defineProperty(GZPTrackingController.prototype, "layoutManager", {
    get: function () {
      return o.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  GZPTrackingController.MAX_INTERVAL = 180000;
  GZPTrackingController.MIN_INTERVAL = 5000;
  return GZPTrackingController;
}();
exports.GZPTrackingController = l;