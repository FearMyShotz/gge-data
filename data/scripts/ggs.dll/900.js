Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./23.js");
var a = require("./488.js");
var s = require("./30.js");
var r = createjs.TimerEvent;
var o = require("./3.js");
var l = require("./20.js");
var u = function () {
  function PolicyPingTest(e, t, n, i, a, s) {
    this.ip = e;
    this.port = t;
    this.blueBox = i;
    this.zone = n;
    this.testIsFinished = new l.Signal();
    this.delay = a;
    this.playerId = s;
  }
  PolicyPingTest.prototype.startTimer = function () {
    this.delayTimer = new o.Timer(this.delay, 1);
    this.delayTimer.addEventListener(r.TIMER_COMPLETE, this.bindFunction(this.startTest));
    this.delayTimer.start();
  };
  PolicyPingTest.prototype.startTest = function (e) {
    this.disposeDelayTimer();
  };
  PolicyPingTest.prototype.disposeDelayTimer = function () {
    if (this.delayTimer) {
      this.delayTimer.stop();
      this.delayTimer.removeEventListener(r.TIMER_COMPLETE, this.bindFunction(this.startTest));
      this.delayTimer = null;
    }
  };
  PolicyPingTest.prototype.handleConnect = function (e) {
    s.debug("successfully connected!");
    this.startTime = Date.now();
  };
  PolicyPingTest.prototype.handleData = function (e) {
    if (e.data.indexOf("policy") != -1) {
      this.endTime = Date.now();
      var t = this.endTime - this.startTime;
      s.debug("roundtrip time measured:" + t + " ms");
      this.dispatchResults(t);
      this.closeConnection();
      this.removeSocketListeners();
    }
  };
  PolicyPingTest.prototype.dispatchResults = function (e) {
    this.testIsFinished.dispatch(this.delay, e, this.blueBox);
  };
  PolicyPingTest.prototype.onIOError = function (e) {
    s.debug("IO error:" + e.text);
    i.ExternalLog.logger.log(new a.SocketErrorLOFactory(a.SocketErrorLOFactory.POLICY_PING_TEST_IO_ERROR, this.ip, this.port, this.zone, e.text, this.blueBox));
    this.removeSocketListeners();
  };
  PolicyPingTest.prototype.onSecurityError = function (e) {
    s.debug(" security error:" + e.text);
    i.ExternalLog.logger.log(new a.SocketErrorLOFactory(a.SocketErrorLOFactory.POLICY_PING_TEST_SECURITY_ERROR, this.ip, this.port, this.zone, e.text, this.blueBox));
    this.removeSocketListeners();
  };
  PolicyPingTest.prototype.closeConnection = function () {
    s.debug("connection closed");
  };
  PolicyPingTest.prototype.removeSocketListeners = function () {
    this.testSocket;
    if (this.testIsFinished) {
      this.testIsFinished.removeAll();
      this.testIsFinished = null;
    }
  };
  PolicyPingTest.prototype.dispose = function () {
    this.disposeDelayTimer();
    this.removeSocketListeners();
  };
  PolicyPingTest.TIMEOUT_TIME = 20000;
  return PolicyPingTest;
}();
exports.PolicyPingTest = u;