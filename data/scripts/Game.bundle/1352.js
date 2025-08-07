Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function TimeRangeValidator(e, t) {
    this.minFutureOffset = 0;
    this.maxFutureOffset = 0;
    this.minFutureOffset = e * o.ClientConstTime.SEC_2_MILLISEC;
    this.maxFutureOffset = t * o.ClientConstTime.SEC_2_MILLISEC;
  }
  TimeRangeValidator.prototype.validateTime = function (e, t = false) {
    var i = e.getTime();
    var n = this.absoluteMinTime;
    var a = this.absoluteMaxTime;
    if (i < n) {
      if (this._currentTime.getTime() <= i) {
        e.setTime(n);
      } else {
        var s = i + o.ClientConstTime.SECONDS_PER_DAY * o.ClientConstTime.SEC_2_MILLISEC;
        if (!t && s <= a) {
          e.setTime(s);
        } else {
          e.setTime(n);
        }
      }
    } else if (i > a) {
      e.setTime(a);
    }
  };
  TimeRangeValidator.prototype.isValid = function (e) {
    return e.getTime() >= this.absoluteMinTime && e.getTime() <= this.absoluteMaxTime;
  };
  Object.defineProperty(TimeRangeValidator.prototype, "absoluteMinTime", {
    get: function () {
      return this._currentTime.getTime() + this.minFutureOffset;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TimeRangeValidator.prototype, "absoluteMaxTime", {
    get: function () {
      return this._currentTime.getTime() + this.maxFutureOffset;
    },
    enumerable: true,
    configurable: true
  });
  TimeRangeValidator.prototype.updateCurrentTime = function () {
    this._currentTime = new Date();
  };
  Object.defineProperty(TimeRangeValidator.prototype, "currentTime", {
    set: function (e) {
      this._currentTime.setTime(e);
    },
    enumerable: true,
    configurable: true
  });
  TimeRangeValidator.prototype.canIncreaseDate = function (e) {
    var t = new Date(this.absoluteMaxTime);
    return e.getDate() < t.getDate() || e.getMonth() < t.getMonth() || e.getFullYear() < t.getFullYear();
  };
  TimeRangeValidator.prototype.canDecreaseDate = function (e) {
    var t = new Date(this.absoluteMinTime);
    return e.getDate() > t.getDate() || e.getMonth() > t.getMonth() || e.getFullYear() > t.getFullYear();
  };
  TimeRangeValidator.prototype.canIncreaseHours = function (e) {
    return this.absoluteMaxTime - e.getTime() >= o.ClientConstTime.HOURES_2_SEC * o.ClientConstTime.SEC_2_MILLISEC;
  };
  TimeRangeValidator.prototype.canDecreaseHours = function (e) {
    return e.getTime() - this.absoluteMinTime > o.ClientConstTime.MINUTES_2_MILLISEC * 59;
  };
  TimeRangeValidator.prototype.canIncreaseMinutes = function (e) {
    return this.absoluteMaxTime - e.getTime() >= o.ClientConstTime.SEC_2_MILLISEC * 60;
  };
  TimeRangeValidator.prototype.canDecreaseMinutes = function (e) {
    return e.getTime() - this.absoluteMinTime > 0;
  };
  return TimeRangeValidator;
}();
exports.TimeRangeValidator = n;
var o = require("./28.js");