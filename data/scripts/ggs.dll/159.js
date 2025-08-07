Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./80.js");
var a = function () {
  function Time(e, t = null, n = null) {
    this._mls = NaN;
    this._milliseconds = NaN;
    this._seconds = NaN;
    this._minutes = NaN;
    this._hours = NaN;
    this._days = NaN;
    this._weeks = NaN;
    this._months = NaN;
    this._years = NaN;
    this._millenniums = NaN;
    t = t || i.TimeType.MILLISECONDS;
    n = n || i.TimeType.BIGGEST;
    this.update(e, t, n);
  }
  Object.defineProperty(Time.prototype, "major", {
    get: function () {
      return this._major;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Time.prototype, "milliseconds", {
    get: function () {
      return this._milliseconds;
    },
    set: function (e) {
      this.update(e, i.TimeType.MILLISECONDS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Time.prototype, "seconds", {
    get: function () {
      return this._seconds;
    },
    set: function (e) {
      this.update(e, i.TimeType.SECONDS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Time.prototype, "minutes", {
    get: function () {
      return this._minutes;
    },
    set: function (e) {
      this.update(e, i.TimeType.MINUTES);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Time.prototype, "hours", {
    get: function () {
      return this._hours;
    },
    set: function (e) {
      this.update(e, i.TimeType.HOURS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Time.prototype, "days", {
    get: function () {
      return this._days;
    },
    set: function (e) {
      this.update(e, i.TimeType.DAYS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Time.prototype, "weeks", {
    get: function () {
      return this._weeks;
    },
    set: function (e) {
      this.update(e, i.TimeType.WEEKS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Time.prototype, "months", {
    get: function () {
      return this._months;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Time.prototype, "years", {
    get: function () {
      return this._years;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Time.prototype, "millenniums", {
    get: function () {
      return this._millenniums;
    },
    enumerable: true,
    configurable: true
  });
  Time.prototype.roundTo = function (e) {
    this.update(this._mls, i.TimeType.MILLISECONDS, e);
  };
  Time.prototype.update = function (e, t, n) {
    var a;
    if (n === undefined) {
      n = null;
    }
    this._milliseconds = this._seconds = this._minutes = this._hours = this._days = this._weeks = 0;
    e = e < 0 ? 0 : e;
    n = n || i.TimeType.BIGGEST;
    this._major = t;
    this._mls = this._milliseconds = e * t.milliseconds;
    var s = i.TimeType.values.length - 1;
    var r = i.TimeType.values.indexOf(t);
    var o = 0;
    for (o = s; o > r; o--) {
      a = i.TimeType.values[o];
      if (this._mls / a.milliseconds >= 1 && a.milliseconds <= n.milliseconds) {
        this._major = a;
        break;
      }
    }
    if (this._major != i.TimeType.MILLISECONDS) {
      var l = i.TimeType.values.length;
      var u = [this._milliseconds];
      var c = NaN;
      var _ = NaN;
      for (o = 1; o < l && (a = i.TimeType.values[o], c = _ = u[o - 1], _ %= a.rate, u[o] = (c - _) / a.rate, u[o - 1] = _, a != this._major); o++);
      u.reverse();
      this._milliseconds = Number(u.pop());
      this._seconds = u.pop() || 0;
      this._minutes = u.pop() || 0;
      this._hours = u.pop() || 0;
      this._days = u.pop() || 0;
      this._weeks = u.pop() || 0;
      this._months = u.pop() || 0;
      this._years = u.pop() || 0;
      this._millenniums = u.pop() || 0;
    }
  };
  Time.prototype.toVector = function () {
    return [this._milliseconds, this._seconds, this._minutes, this._hours, this._days, this._weeks, this._months, this._years, this._millenniums];
  };
  return Time;
}();
exports.Time = a;