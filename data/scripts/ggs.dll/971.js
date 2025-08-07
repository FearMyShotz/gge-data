Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./499.js");
var a = function () {
  function Time(e, t = null, n = null) {
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
    var s;
    var r = i.TimeType.values.length - 1;
    var o = i.TimeType.values.indexOf(t);
    for (s = r; s > o; s--) {
      a = i.TimeType.values[s];
      if (this._mls / a.milliseconds >= 1 && a.milliseconds <= n.milliseconds) {
        this._major = a;
        break;
      }
    }
    if (this._major != i.TimeType.MILLISECONDS) {
      var l;
      var u;
      var c = i.TimeType.values.length;
      var _ = [this._milliseconds];
      for (s = 1; s < c && (a = i.TimeType.values[s], l = u = _[s - 1], u %= a.rate, _[s] = (l - u) / a.rate, _[s - 1] = u, a != this._major); s++);
      _.reverse();
      this._milliseconds = Number(_.pop());
      this._seconds = _.pop() || 0;
      this._minutes = _.pop() || 0;
      this._hours = _.pop() || 0;
      this._days = _.pop() || 0;
      this._weeks = _.pop() || 0;
      this._months = _.pop() || 0;
      this._years = _.pop() || 0;
      this._millenniums = _.pop() || 0;
    }
  };
  Time.prototype.toVector = function () {
    return [this._milliseconds, this._seconds, this._minutes, this._hours, this._days, this._weeks, this._months, this._years, this._millenniums];
  };
  return Time;
}();
exports.Time = a;