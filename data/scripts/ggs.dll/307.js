Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./8.js");
var a = require("./9.js");
var s = require("./5.js");
var r = require("./96.js");
var o = require("./310.js");
var l = require("./154.js");
var u = require("./4.js");
var c = require("./3.js");
var _ = require("./2.js");
var d = createjs.TimerEvent;
var m = _.getLogger("CoreJS.PaymentHashRefresher");
var h = function () {
  function PaymentHashRefresher() {
    this.PAYMENT_HASH_EXPIRATION_TIME = 900000;
    this.PAYMENT_HASH_REQUEST_TIMEOUT = 30000;
    this.isRunning = false;
    this.isWaitingForResponse = false;
    this.hashExpirationTimer = new c.Timer(this.PAYMENT_HASH_EXPIRATION_TIME, 1);
    this.requestTimeoutTimer = new c.Timer(this.PAYMENT_HASH_REQUEST_TIMEOUT, 1);
  }
  PaymentHashRefresher.prototype.stopRefreshing = function () {
    this.isRunning = false;
    i.BasicController.getInstance().removeEventListener(l.BasicPaymentEvent.PAYMENT_HASH_CHANGED, this.bindFunction(this.onHashChanged));
    this.hashExpirationTimer.stop();
  };
  PaymentHashRefresher.prototype.resetAndStartRefreshing = function () {
    this.stopRefreshing();
    this.startRefreshing();
  };
  PaymentHashRefresher.prototype.startRefreshing = function () {
    if (!this.isRunning) {
      this.isRunning = true;
      i.BasicController.getInstance().addEventListener(l.BasicPaymentEvent.PAYMENT_HASH_CHANGED, this.bindFunction(this.onHashChanged));
      this.requestNewHash();
    }
  };
  PaymentHashRefresher.prototype.resetAndStartExpirationTimer = function () {
    if (this.env.useShortPaymentHashValidity && this.isRunning) {
      this.hashExpirationTimer.removeEventListener(d.TIMER_COMPLETE, this.bindFunction(this.onHashExpired));
      this.hashExpirationTimer.addEventListener(d.TIMER_COMPLETE, this.bindFunction(this.onHashExpired));
      this.hashExpirationTimer.reset();
      this.hashExpirationTimer.start();
    }
  };
  PaymentHashRefresher.prototype.requestNewHash = function () {
    this.isWaitingForResponse = true;
    this.requestTimeoutTimer.removeEventListener(d.TIMER_COMPLETE, this.bindFunction(this.onResponseTimeout));
    this.requestTimeoutTimer.addEventListener(d.TIMER_COMPLETE, this.bindFunction(this.onResponseTimeout));
    this.requestTimeoutTimer.reset();
    this.requestTimeoutTimer.start();
    u.BasicModel.smartfoxClient.sendMessage(a.BasicSmartfoxConstants.C2S_NEW_CASH_HASH, []);
  };
  PaymentHashRefresher.prototype.onHashExpired = function (e) {
    if (this.isRunning) {
      this.requestNewHash();
    }
  };
  PaymentHashRefresher.prototype.onResponseTimeout = function (e) {
    if (this.isWaitingForResponse) {
      m.info("response timeout, requesting again…");
      this.requestNewHash();
    }
  };
  PaymentHashRefresher.prototype.onHashChanged = function (e) {
    if (this.isWaitingForResponse) {
      this.isWaitingForResponse = false;
      this.requestTimeoutTimer.stop();
      r.ExternalInterfaceController.instance.executeJavaScriptFunction(new o.JavascriptCallSetCashHashFactory());
    }
    this.resetAndStartExpirationTimer();
  };
  Object.defineProperty(PaymentHashRefresher.prototype, "env", {
    get: function () {
      return s.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return PaymentHashRefresher;
}();
exports.PaymentHashRefresher = h;