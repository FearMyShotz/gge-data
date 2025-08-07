Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./761.js");
var s = function (e) {
  function TimeType(t, n, i, a) {
    var s = e.call(this, t, a) || this;
    s._milliseconds = 0;
    s._rate = 0;
    s._milliseconds = i * (n ? n.milliseconds : 1);
    s._previous = n;
    s._rate = i;
    TimeType._values.push(s);
    return s;
  }
  i.__extends(TimeType, e);
  Object.defineProperty(TimeType, "values", {
    get: function () {
      return TimeType._values.concat();
    },
    enumerable: true,
    configurable: true
  });
  TimeType.getByName = function (e) {
    return a.BasicEnum.getByProperty(TimeType, "name", e, null);
  };
  Object.defineProperty(TimeType.prototype, "milliseconds", {
    get: function () {
      return this._milliseconds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TimeType.prototype, "previous", {
    get: function () {
      return this._previous;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TimeType.prototype, "rate", {
    get: function () {
      return this._rate;
    },
    enumerable: true,
    configurable: true
  });
  TimeType._values = [];
  TimeType.MILLISECONDS = new TimeType("milliseconds", null, 1, a.BasicEnum.instantiationKey);
  TimeType.SECONDS = new TimeType("seconds", TimeType.MILLISECONDS, 1000, a.BasicEnum.instantiationKey);
  TimeType.MINUTES = new TimeType("minutes", TimeType.SECONDS, 60, a.BasicEnum.instantiationKey);
  TimeType.HOURS = new TimeType("hours", TimeType.MINUTES, 60, a.BasicEnum.instantiationKey);
  TimeType.DAYS = new TimeType("days", TimeType.HOURS, 24, a.BasicEnum.instantiationKey);
  TimeType.WEEKS = new TimeType("weeks", TimeType.DAYS, 7, a.BasicEnum.instantiationKey);
  TimeType.MONTHS = new TimeType("months", TimeType.WEEKS, 4, a.BasicEnum.instantiationKey);
  TimeType.YEARS = new TimeType("years", TimeType.MONTHS, 12, a.BasicEnum.instantiationKey);
  TimeType.MILLENNIUMS = new TimeType("millenniums", TimeType.YEARS, 1000, a.BasicEnum.instantiationKey);
  TimeType.BIGGEST = TimeType.MILLENNIUMS;
  TimeType.SMALLEST = TimeType.MILLISECONDS;
  return TimeType;
}(a.BasicEnum);
exports.TimeType = s;