Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./23.js");
var a = require("./283.js");
var s = require("./3.js");
var r = require("./2.js");
var o = createjs.TimerEvent;
var l = r.getLogger("Tracking.TrackingVerifier");
var u = function () {
  function TrackingVerifier() {
    var e = this;
    this.TRACKING_LIST_SEPARATOR = ";";
    this.TRACKING_TIMER_REPEAT_COUNT = 1;
    this._listOfFiredEvents = [];
    this._isActive = false;
    this.onVerificationTimerComplete = function (t) {
      return e.verifyTracking();
    };
  }
  TrackingVerifier.prototype.keepEvent = function (e) {
    if (this.isActive) {
      this._listOfFiredEvents.push(e.toString());
    }
  };
  TrackingVerifier.prototype.startVerification = function (e, t, n = 0) {
    if (this.isActive) {
      this._currentCase = e;
      this._currentTrackingPattern = t;
      if (n > 0) {
        this._verificationTimer = new s.Timer(n, this.TRACKING_TIMER_REPEAT_COUNT);
        this._verificationTimer.addEventListener(o.TIMER_COMPLETE, this.onVerificationTimerComplete);
        this._verificationTimer.start();
      } else {
        this.verifyTracking();
      }
    }
  };
  TrackingVerifier.prototype.verifyTracking = function () {
    var e = [];
    for (; this._currentTrackingPattern.length != 0;) {
      var t = this._currentTrackingPattern.pop();
      if (this.eventWasNotFired(t)) {
        e.push(t);
      }
    }
    if (e.length != 0) {
      l.error("Tracking verification error! Some tracking events were not fired: " + e.join(this.TRACKING_LIST_SEPARATOR) + ", please contact Core-team immediately.");
      i.ExternalLog.logger.log(new a.TrackingVerificationErrorLOFactory(a.TrackingVerificationErrorLOFactory.TRACKING_EVENTS_MISSING_ERROR, this._currentCase, e.join(this.TRACKING_LIST_SEPARATOR)));
    }
    this.dispose();
  };
  TrackingVerifier.prototype.eventWasNotFired = function (e) {
    return this._listOfFiredEvents.indexOf(e) == -1;
  };
  Object.defineProperty(TrackingVerifier.prototype, "isActive", {
    get: function () {
      return this._isActive;
    },
    set: function (e) {
      this._isActive = e;
      l.debug("Tracking verification is active: " + this._isActive);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TrackingVerifier.prototype, "listOfFiredEvents", {
    get: function () {
      return this._listOfFiredEvents.concat();
    },
    set: function (e) {
      if (e && e.length) {
        var t = e.length;
        var n = undefined;
        for (n = 0; n < t; n++) {
          if (this._listOfFiredEvents.indexOf(e[n]) < 0) {
            this._listOfFiredEvents.push(e[n]);
          }
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  TrackingVerifier.prototype.dispose = function () {
    if (this.isActive) {
      this.isActive = false;
      if (this._verificationTimer) {
        this._verificationTimer.stop();
        this._verificationTimer.removeEventListener(o.TIMER_COMPLETE, this.onVerificationTimerComplete);
        this._verificationTimer = null;
      }
      this._listOfFiredEvents = null;
      this._currentCase = null;
      this._currentTrackingPattern = null;
    }
  };
  return TrackingVerifier;
}();
exports.TrackingVerifier = u;