Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./28.js");
var C = function (e) {
  function CastleTimeStringHelper() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleTimeStringHelper, e);
  CastleTimeStringHelper.getShortTimeString = function (e) {
    CastleTimeStringHelper.shortTimeFormatter ||= new l.CascadeDurationFormat("{minutes:02}:{seconds:02}", null, null, "{hours:02}:{minutes:02}:{seconds:02}");
    return CastleTimeStringHelper.shortTimeFormatter.apply(e);
  };
  CastleTimeStringHelper.getFullTimeString = function (e) {
    var t = h.int(e * 1000);
    var i = h.int(t / 1000);
    var n = h.int(i / 60);
    var a = h.int(n / 60);
    var s = h.int(a / 24);
    var r = h.int(s / 30);
    t -= i * 1000;
    i -= h.int(n * 60);
    n -= h.int(a * 60);
    a -= h.int(s * 24);
    for (var l = [r, s -= h.int(r * 30), a, n, i], c = "", d = 0; d < l.length; d++) {
      var p = h.int(l[d]);
      if (p > 0) {
        var g = CastleTimeStringHelper.TIME_TEXT_IDS[d] + (p > 1 ? "s" : "");
        var C = u.Localize.text(o.GenericTextIds.VALUE_SIMPLE_COMP, [p, u.Localize.text(g)]);
        c = c == "" ? C : u.Localize.text(o.GenericTextIds.VALUE_SIMPLE_COMP, [c, C]);
      }
    }
    return c;
  };
  CastleTimeStringHelper.getCantAttackTimeString = function (e) {
    return CastleTimeStringHelper.getEventTimeString(e);
  };
  CastleTimeStringHelper.getEventTimeString = function (e, t = h.int(g.ClientConstTime.SECONDS_PER_DAY), i = 2) {
    if (e >= t) {
      var n = e * 1000;
      var o = h.int(n / 1000);
      var a = h.int(o / 60);
      var r = h.int(a / 60);
      var l = h.int(r / 24);
      h.int(l / 30);
      n -= o * 1000;
      o -= h.int(a * 60);
      a -= h.int(r * 60);
      r -= h.int(l * 24);
      var c = s.MathBase.round(r / 24, 1) + l;
      var d = "generic_day" + ((c = s.MathBase.floor(c, i)) != 1 ? "s" : "");
      return u.Localize.number(c) + " " + u.Localize.text(d);
    }
    return CastleTimeStringHelper.getShortTimeString(e);
  };
  CastleTimeStringHelper.getLongEventTimeString = function (e) {
    var t = e * 1000;
    var i = h.int(t / 1000);
    var n = h.int(i / 60);
    var o = h.int(n / 60);
    var a = h.int(o / 24);
    h.int(a / 30);
    t -= i * 1000;
    i -= h.int(n * 60);
    n -= h.int(o * 60);
    o -= h.int(a * 24);
    if (a >= 1) {
      var l = s.MathBase.round(o / 24, 1) + a;
      var c = "generic_day" + ((l = s.MathBase.floor(l, 1)) != 1 ? "s" : "");
      var d = s.MathBase.floor(o / 24, 1);
      return a + u.Localize.text("generic_comma") + d.toString().substr(d.toString().indexOf(".") + 1) + " " + u.Localize.text(c);
    }
    if (o >= 1 || n >= 1) {
      return r.TimeStringHelper.getTimeToString(e, r.TimeStringHelper.ONE_TIME_FORMAT_ADVANCED, u.Localize.text, false, false, false, true);
    } else {
      return r.TimeStringHelper.getTimeToString(e, r.TimeStringHelper.TWO_TIME_FORMAT, u.Localize.text);
    }
  };
  CastleTimeStringHelper.getEventToolTipString = function (e) {
    var t = e * 1000;
    var i = h.int(t / 1000);
    var n = h.int(i / 60);
    var o = h.int(n / 60);
    var a = h.int(o / 24);
    var s = h.int(a / 30);
    t -= i * 1000;
    i -= h.int(n * 60);
    n -= h.int(o * 60);
    o -= h.int(a * 24);
    if ((a -= h.int(s * 30)) >= 1) {
      return u.Localize.text("resttime") + "\n" + r.TimeStringHelper.getShortTimeStringBySeconds(e);
    } else {
      return "resttime";
    }
  };
  CastleTimeStringHelper.getHoursOrDaysTooltip = function (e, t, i) {
    var n = e * 1000;
    var o = h.int(n / 1000);
    var a = h.int(o / 60);
    var r = h.int(a / 60);
    var l = h.int(r / 24);
    h.int(l / 30);
    n -= o * 1000;
    o -= h.int(a * 60);
    a -= h.int(r * 60);
    r -= h.int(l * 24);
    var c = 0;
    var u = "";
    if (l >= 1) {
      c = s.MathBase.round(r / 24, 1) + l;
      c = s.MathBase.floor(c, 2);
      u = i;
    } else {
      c = s.MathBase.round(a / 60, 1) + r;
      c = s.MathBase.floor(c, 2);
      u = t;
    }
    return {
      t: u,
      p: [new d.LocalizedNumberVO(c)]
    };
  };
  CastleTimeStringHelper.setEventTime = function (e, t, i = null, n = null, o = false) {
    var s = CastleTimeStringHelper.getEventTimeString(t, g.ClientConstTime.SECONDS_PER_DAY, 1);
    if (o) {
      s = u.Localize.digitalClock(s);
    }
    var r = a.GoodgameTextFieldManager.getInstance().registerTextField(e, new p.TextVO(s), n);
    if (i) {
      r.textAlign = i;
    }
  };
  CastleTimeStringHelper.setEventTimeToolTip = function (e, t) {
    e.mouseChildren = false;
    e.toolTipText = CastleTimeStringHelper.getEventToolTipString(t);
  };
  CastleTimeStringHelper.getDateStringFromDate = function (e) {
    return u.Localize.datetime(e, c.DateTimeStyle.SHORT, c.DateTimeStyle.NONE);
  };
  CastleTimeStringHelper.__initialize_static_members = function () {
    CastleTimeStringHelper.TIME_TEXT_IDS = [o.GenericTextIds.COMMON_MONTH, o.GenericTextIds.COMMON_DAY, o.GenericTextIds.COMMON_HOUR, o.GenericTextIds.COMMON_MINUTE, o.GenericTextIds.COMMON_SECOND];
  };
  return CastleTimeStringHelper;
}(u.Localize);
exports.CastleTimeStringHelper = C;
C.__initialize_static_members();