Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./123.js");
var a = require("./60.js");
var s = require("./18.js");
var r = function () {
  function TimeStringHelper() {}
  TimeStringHelper.getShortTimeStringBySeconds = function (e, t = "") {
    return TimeStringHelper.getShortTimeString(e * 1000, t);
  };
  TimeStringHelper.getShortTimeStringByMinutes = function (e, t = "") {
    return TimeStringHelper.getShortTimeString(e * 1000 * 60, t);
  };
  TimeStringHelper.getShortTimeString = function (e, t = "") {
    if (e <= 0) {
      return "-";
    }
    var n = a.int(e / 1000);
    var i = a.int(n / 60);
    var r = a.int(i / 60);
    var o = "";
    n -= i * 60;
    i -= r * 60;
    o += TimeStringHelper.addLeadingZero(i);
    if (t == TimeStringHelper.TWO_TIME_FORMAT && r == 0 || t != TimeStringHelper.TWO_TIME_FORMAT) {
      o += ":";
      o += TimeStringHelper.addLeadingZero(n);
    }
    if (r > 0 || t == TimeStringHelper.HOURS_MINUTES_SECONDS_FORMAT) {
      o = TimeStringHelper.addLeadingZero(r) + ":" + o;
    }
    return s.Localize.digitalClock(o);
  };
  TimeStringHelper.getHoureMinutesTimeString = function (e) {
    if (e <= 0) {
      return "-";
    }
    var t = a.int(e / 60);
    var n = a.int(t / 60);
    var i = "";
    if ((t -= n * 60) < 10) {
      i += "0";
    }
    i = n + ":" + (i += t);
    return s.Localize.digitalClock(i);
  };
  TimeStringHelper.getHoureMinuteSecondTimeString = function (e) {
    if (e <= 0) {
      return s.Localize.digitalClock("00:00:00");
    }
    var t = a.int(e % 60);
    var n = a.int(e / 60 % 60);
    var i = a.int(e / 3600);
    var r = "";
    r += (i < 10 ? "0" : "") + i;
    r += ":" + (n < 10 ? "0" : "") + n;
    r += ":" + (t < 10 ? "0" : "") + t;
    return s.Localize.digitalClock(r);
  };
  TimeStringHelper.getNewDateToString = function (e, t, n) {
    if (e <= 0) {
      return "-";
    }
    var i = new Date(e);
    var a = "-";
    if (t == TimeStringHelper.DATE_DAY_FORMAT) {
      a = n("generic_dayformat", [TimeStringHelper.getDayStringFromDate(i), TimeStringHelper.getMonthStringFromDate(i), TimeStringHelper.getYearStringFromDate(i)]);
    } else if (t == TimeStringHelper.DATE_SHORT_DAY_FORMAT) {
      a = n("generic_dayformat_short", [TimeStringHelper.getDayStringFromDate(i), TimeStringHelper.getMonthStringFromDate(i)]);
    }
    return a;
  };
  TimeStringHelper.getYearStringFromDate = function (e) {
    return e.getFullYear().toString();
  };
  TimeStringHelper.getMonthStringFromDate = function (e) {
    if (e.getMonth() + 1 < 10) {
      return "0" + (e.getMonth() + 1);
    } else {
      return (e.getMonth() + 1).toString();
    }
  };
  TimeStringHelper.getDayStringFromDate = function (e) {
    if (e.getDate() < 10) {
      return "0" + e.getDate();
    } else {
      return e.getDate().toString();
    }
  };
  TimeStringHelper.getDateToString = function (e, t, n) {
    if (e <= 0) {
      return "-";
    }
    var i = "";
    var a = new Date(e);
    if (t == TimeStringHelper.DATE_DAY_FORMAT_WITHOUT_YEAR) {
      return a.getDate() + "." + (a.getMonth() + 1);
    } else if (t == TimeStringHelper.DATE_DAY_FORMAT) {
      return a.getDate() + "." + (a.getMonth() + 1) + "." + a.getFullYear();
    } else if (t == TimeStringHelper.DATE_SHORT_DAY_FORMAT) {
      return n("generic_dayformat_short", [a.getDate() < 10 ? "0" + a.getDate() : a.getDate().toString(), a.getMonth() + 1 < 10 ? "0" + (a.getMonth() + 1) : (a.getMonth() + 1).toString]);
    } else {
      if (t == TimeStringHelper.DATE_TIMEOCLOCK_FORMAT) {
        i += a.getHours() + ".";
        if (a.getMinutes() < 10) {
          i += "0";
        }
        i += a.getMinutes();
      }
      if (t == TimeStringHelper.DATE_TIMEOCLOCK_FORMAT_ADVANCED) {
        if (a.getHours() < 10) {
          i += "0";
        }
        i += a.getHours() + ":";
        if (a.getMinutes() < 10) {
          i += "0";
        }
        i += a.getMinutes();
      }
      return i + n("timeformat_clock");
    }
  };
  TimeStringHelper.multiOrShortTimeString = function (e, t, n) {
    var i = e;
    return i += n ? "_short" : t != 1 ? "s" : "";
  };
  TimeStringHelper.getTimeToString = function (e, t, n, s = false, r = false, o = false, l = false) {
    if (e <= 0) {
      return "-";
    }
    if (l && !r) {
      e = TimeStringHelper.roundTimeToNextHour(e);
    }
    var u;
    var c = e * 1000;
    var _ = a.int(c / 1000);
    var d = a.int(_ / 60);
    var m = a.int(d / 60);
    var h = a.int(m / 24);
    var p = a.int(h / 30);
    var g = "";
    var E = "";
    c -= _ * 1000;
    _ -= d * 60;
    d -= m * 60;
    if (t != TimeStringHelper.ONE_TIME_HOURS_FORMAT) {
      m -= h * 24;
      h -= p * 30;
    }
    if (t != TimeStringHelper.ONE_TIME_HOURS_FORMAT && p > 0) {
      g = p + " " + n(E = TimeStringHelper.multiOrShortTimeString("generic_month", p, r));
      if (t == TimeStringHelper.ONE_TIME_FORMAT_ADVANCED) {
        return (u = i.MathBase.round(h / 30, 1) + p) + " " + n(E = TimeStringHelper.multiOrShortTimeString("generic_month", u, r));
      }
      if (t == TimeStringHelper.ONE_TIME_FORMAT) {
        return g;
      }
    }
    if (t != TimeStringHelper.ONE_TIME_HOURS_FORMAT && h > 0) {
      E = TimeStringHelper.multiOrShortTimeString("generic_day", h, r);
      if (g.length > 0) {
        g += s ? "\n" : " ";
      }
      g += h + " " + n(E);
      if (t == TimeStringHelper.ONE_TIME_FORMAT_ADVANCED) {
        return (u = i.MathBase.round(m / 24, 1) + h) + " " + n(E = TimeStringHelper.multiOrShortTimeString("generic_day", u, r));
      }
      if (t == TimeStringHelper.ONE_TIME_FORMAT) {
        return g;
      }
      if (p > 0) {
        return g;
      }
    }
    if (m > 0) {
      if (o && h > 0) {
        var C = i.MathBase.floor(d / 60, 1);
        if (C >= 1) {
          m++;
        } else if (C > 0) {
          return g + " " + m + n("generic_comma") + C.toString().substr(C.toString().indexOf(".") + 1) + " " + n("generic_hours");
        }
      }
      E = TimeStringHelper.multiOrShortTimeString("generic_hour", m, r);
      if (g.length > 0) {
        g += s ? "\n" : " ";
      }
      g += m + " " + n(E);
      if (t.indexOf("onetime") >= 0 || t == TimeStringHelper.TWO_TIME_FORMAT && h > 0) {
        return g;
      }
    }
    if (d > 0) {
      E = TimeStringHelper.multiOrShortTimeString("generic_minute", d, r);
      if (g.length > 0) {
        g += s ? "\n" : " ";
      }
      g += d + " " + n(E);
      if (t.indexOf("onetime") >= 0 || t == TimeStringHelper.TWO_TIME_FORMAT && (m > 0 || h > 0)) {
        return g;
      }
    } else if (t == TimeStringHelper.TWO_TIME_FORMAT && g != "") {
      return g;
    }
    if (_ > 0) {
      E = TimeStringHelper.multiOrShortTimeString("generic_second", _, r);
      if (g.length > 0) {
        g += s ? "\n" : " ";
      }
      g += _ + " " + n(E);
    }
    return g;
  };
  TimeStringHelper.roundTimeToNextHour = function (e) {
    if (e > 3600) {
      e += 1800;
    }
    return e;
  };
  TimeStringHelper.addLeadingZero = function (e) {
    var t = String(e);
    if (e < 10) {
      t = "0" + e;
    }
    return t;
  };
  TimeStringHelper.getDateStringFromDate = function (e, t) {
    return t("generic_dayformat", [e.getDate(), e.getMonth() + 1, e.getFullYear()]);
  };
  TimeStringHelper.getTimeStringFromDate = function (e, t, n = TimeStringHelper.TWO_TIME_FORMAT) {
    var i = "";
    i += e.getHours() < 10 ? "0" + e.getHours() : String(e.getHours());
    i += ":" + (e.getMinutes() < 10 ? "0" + e.getMinutes() : String(e.getMinutes()));
    if (n == TimeStringHelper.HOURS_MINUTES_SECONDS_FORMAT) {
      i += ":" + (e.getSeconds() < 10 ? "0" + e.getSeconds() : String(e.getSeconds()));
    }
    return s.Localize.digitalClock(i);
  };
  TimeStringHelper.getCommaTimeStringFromSeconds = function (e, t, n = "") {
    if (e <= 0) {
      return "-";
    }
    var s;
    var r = e * 1000;
    var o = a.int(r / 1000);
    var l = a.int(o / 60);
    var u = a.int(l / 60);
    var c = a.int(u / 24);
    var _ = a.int(c / 30);
    var d = _;
    var m = a.int(c - _ * 30);
    var h = a.int(u - c * 24);
    var p = a.int(l - u * 60);
    var g = a.int(o - l * 60);
    if (d > 0) {
      if ((s = i.MathBase.ceil(m / 30, 1)) >= 1) {
        d++;
      } else if (s > 0) {
        return d + t("generic_comma") + s.toString().substr(s.toString().indexOf(".") + 1) + " " + t("generic_months");
      }
      return d + " " + t(TimeStringHelper.multiOrShortTimeString("generic_month", d, false));
    }
    if (m > 0) {
      if ((s = i.MathBase.ceil(h / 24, 1)) >= 1) {
        m++;
      } else if (s > 0) {
        return m + t("generic_comma") + s.toString().substr(s.toString().indexOf(".") + 1) + " " + t("generic_days");
      }
      return m + " " + t(TimeStringHelper.multiOrShortTimeString("generic_day", m, false));
    }
    if (n == TimeStringHelper.HOURS_MINUTES_SECONDS_FORMAT) {
      return TimeStringHelper.getShortTimeString(r, TimeStringHelper.HOURS_MINUTES_SECONDS_FORMAT);
    }
    if (h > 0) {
      if ((s = i.MathBase.ceil(p / 60, 1)) >= 1) {
        h++;
      } else if (s > 0) {
        return h + t("generic_comma") + s.toString().substr(s.toString().indexOf(".") + 1) + " " + t("generic_hours");
      }
      return h + " " + t(TimeStringHelper.multiOrShortTimeString("generic_hour", h, false));
    }
    if (p > 0) {
      return p + " " + t(TimeStringHelper.multiOrShortTimeString("generic_minute", p, false));
    } else if (g > 0) {
      return g + " " + t(TimeStringHelper.multiOrShortTimeString("generic_second", g, false));
    } else {
      return "";
    }
  };
  TimeStringHelper.getPrimeTimeToString = function (e, t) {
    if (e <= 0) {
      return "-";
    }
    var n = a.int(e);
    var i = a.int(n / 60);
    var s = "";
    n -= i * 60;
    return s += i > 0 ? i + " " + t(TimeStringHelper.multiOrShortTimeString("generic_minute", i, false)) : n + " " + t(TimeStringHelper.multiOrShortTimeString("generic_second", n, false));
  };
  TimeStringHelper.getTextIdFormattedTimeString = function (e, t, n, i) {
    var s = Math.floor(e / 86400);
    var r = a.int(e / 60 % 60);
    var o = a.int(e / 3600 % 24);
    if (s == 0) {
      return i(n, [o, r]);
    } else {
      return i(t, [s, o, r]);
    }
  };
  TimeStringHelper.TWO_TIME_FORMAT = "nonMiliSec";
  TimeStringHelper.DATE_DAY_FORMAT = "dateDay";
  TimeStringHelper.DATE_DAY_FORMAT_WITHOUT_YEAR = "dateDayWithoutYear";
  TimeStringHelper.DATE_SHORT_DAY_FORMAT = "shortDay";
  TimeStringHelper.DATE_TIMEOCLOCK_FORMAT = "dateTimeOclock";
  TimeStringHelper.DATE_TIMEOCLOCK_FORMAT_ADVANCED = "dateTimeOclockAdvanced";
  TimeStringHelper.ONE_TIME_FORMAT = "onetime";
  TimeStringHelper.ONE_TIME_FORMAT_ADVANCED = "onetimeAdvanced";
  TimeStringHelper.ONE_TIME_HOURS_FORMAT = "onetimehour";
  TimeStringHelper.HOURS_MINUTES_SECONDS_FORMAT = "hoursMinutesSeconds";
  return TimeStringHelper;
}();
exports.TimeStringHelper = r;