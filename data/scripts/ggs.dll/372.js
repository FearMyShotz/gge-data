Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./30.js");
var a = createjs.TimerEvent;
var s = require("./3.js");
var r = require("./20.js");
var o = function () {
  function LicenseRefresher(e, t, n) {
    this._initialShowDelayTimeSeconds = e;
    this._licenseShowScheduleSeconds = t * 60;
    this._licencseDisplayDurationSeconds = n;
    this.initializeTimers();
    this._intervalReachCount = 0;
    this.licenseAgeRatingShowed = new r.Signal();
    this.licenseShowed = new r.Signal();
    this.licenseHided = new r.Signal();
  }
  LicenseRefresher.prototype.initializeTimers = function () {
    this.licenseShowSchedule = new s.Timer(this.secondsToMilliseconds(this._initialShowDelayTimeSeconds), 0);
    this.licenseDisplayDuration = new s.Timer(this.secondsToMilliseconds(this._licencseDisplayDurationSeconds), 1);
  };
  LicenseRefresher.prototype.secondsToMilliseconds = function (e) {
    return e * 1000;
  };
  LicenseRefresher.prototype.startRefreshing = function () {
    this.startLicenseShowSchedule();
  };
  LicenseRefresher.prototype.stopRefreshing = function () {
    this.licenseDisplayDuration.stop();
    this.licenseShowSchedule.stop();
    this.licenseShowSchedule.removeEventListener(a.TIMER, this.bindFunction(this.onLicenseShowScheduleIntervalReached));
    this.licenseDisplayDuration.removeEventListener(a.TIMER_COMPLETE, this.bindFunction(this.onLicenseDisplayDurationComplete));
  };
  LicenseRefresher.prototype.dispose = function () {
    this.stopRefreshing();
    this._intervalReachCount = 0;
    this.licenseAgeRatingShowed.removeAll();
    this.licenseShowed.removeAll();
    this.licenseHided.removeAll();
    this.licenseDisplayDuration = null;
    this.licenseShowSchedule = null;
    this.licenseAgeRatingShowed = null;
    this.licenseShowed = null;
    this.licenseHided = null;
  };
  LicenseRefresher.prototype.startLicenseShowSchedule = function () {
    if (!this.licenseShowSchedule.hasEventListener(a.TIMER)) {
      this.licenseShowSchedule.addEventListener(a.TIMER, this.bindFunction(this.onLicenseShowScheduleIntervalReached));
    }
    this.licenseShowSchedule.start();
  };
  LicenseRefresher.prototype.onLicenseShowScheduleIntervalReached = function (e = null) {
    i.debug("Interval reached after: " + this.licenseShowSchedule.delay / 1000 + " seconds / " + this.licenseShowSchedule.delay / 60000 + " minutes");
    if (!e) {
      this.licenseAgeRatingShowed.dispatch();
    }
    if (this._intervalReachCount == 0) {
      this.licenseShowSchedule.delay = this.secondsToMilliseconds(this._licenseShowScheduleSeconds - this._initialShowDelayTimeSeconds);
      this.licenseAgeRatingShowed.dispatch();
    } else if (this._intervalReachCount == 1) {
      this.licenseShowSchedule.delay = this.secondsToMilliseconds(this._licenseShowScheduleSeconds);
    }
    this.licenseShowed.dispatch();
    this.startLicenceHideTimer();
    this._intervalReachCount++;
  };
  LicenseRefresher.prototype.startLicenceHideTimer = function () {
    this.licenseDisplayDuration.addEventListener(a.TIMER_COMPLETE, this.bindFunction(this.onLicenseDisplayDurationComplete));
    this.licenseDisplayDuration.start();
  };
  LicenseRefresher.prototype.onLicenseDisplayDurationComplete = function (e) {
    i.debug("Hide license after: " + this.licenseDisplayDuration.delay / 1000 + " seconds / " + this.licenseDisplayDuration.delay / 60000 + " minutes");
    this.licenseDisplayDuration.removeEventListener(a.TIMER_COMPLETE, this.bindFunction(this.onLicenseDisplayDurationComplete));
    this.licenseHided.dispatch();
  };
  LicenseRefresher.NAME = "LicenseRefresher";
  return LicenseRefresher;
}();
exports.LicenseRefresher = o;