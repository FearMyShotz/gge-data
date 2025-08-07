Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./12.js");
var a = require("./8.js");
var s = require("./155.js");
var r = require("./4.js");
var o = createjs.TimerEvent;
var l = require("./3.js");
var u = function () {
  function ConnectionTrackingUtil() {
    this._timers = new Array();
  }
  Object.defineProperty(ConnectionTrackingUtil, "instance", {
    get: function () {
      ConnectionTrackingUtil._instance ||= new ConnectionTrackingUtil();
      return ConnectionTrackingUtil._instance;
    },
    enumerable: true,
    configurable: true
  });
  ConnectionTrackingUtil.prototype.measureRTT = function (e) {
    this.startTimer(e);
  };
  ConnectionTrackingUtil.prototype.timerCompleteHandler = function (e) {
    var t = e.target;
    this.disposeTimer(t);
    r.BasicModel.smartfoxClient.roundTripResponseSignal.addOnce(this.rttResponseHandler.bind(this, t.delay));
    r.BasicModel.smartfoxClient.executeRoundTrip();
  };
  ConnectionTrackingUtil.prototype.rttResponseHandler = function (e, t, n) {
    i.CommandController.instance.executeCommand(a.BasicController.COMMAND_TRACK_CONNECTION_TRACKING_EVENT, new s.ConnectionTrackingCommandVO(e, t.toString(), n));
  };
  ConnectionTrackingUtil.prototype.startTimer = function (e) {
    var t = new l.Timer(e, 1);
    t.addEventListener(o.TIMER_COMPLETE, this.bindFunction(this.timerCompleteHandler));
    t.start();
    this._timers.push(t);
  };
  ConnectionTrackingUtil.prototype.disposeTimer = function (e) {
    var t = this._timers.indexOf(e);
    if (t != -1) {
      (e = this._timers.splice(t, 1)[0]).removeEventListener(o.TIMER_COMPLETE, this.bindFunction(this.timerCompleteHandler));
      e.stop();
    }
  };
  ConnectionTrackingUtil.prototype.dispose = function () {
    for (r.BasicModel.smartfoxClient.roundTripResponseSignal.removeAll(); this._timers.length;) {
      this.disposeTimer(this._timers[0]);
    }
  };
  ConnectionTrackingUtil.SECOND_CONNECTION_EVENT_DELAY = 60000;
  ConnectionTrackingUtil.THIRD_CONNECTION_EVENT_DELAY = 120000;
  return ConnectionTrackingUtil;
}();
exports.ConnectionTrackingUtil = u;