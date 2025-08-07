Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./159.js");
var a = require("./80.js");
var s = require("./319.js");
var r = require("./323.js");
var o = require("./324.js");
var l = function () {
  function DynamicDurationFormat(e) {
    this._processor = e;
    this._inlineDurationFormat = new r.InlineDurationFormat();
  }
  DynamicDurationFormat.prototype.apply = function (e, t, n, s) {
    var r = this;
    if (t === undefined) {
      t = 2;
    }
    if (n === undefined) {
      n = true;
    }
    if (s === undefined) {
      s = null;
    }
    var l = (s || DynamicDurationFormat.DEFAULT_TEMPLATES).data;
    var u = new i.Time(isNaN(e) ? 0 : e, a.TimeType.SECONDS, a.TimeType.DAYS);
    var c = t === 0 || t > l.length ? l.length - 1 : t - 1;
    var _ = a.TimeType.values.indexOf(a.TimeType.DAYS) - a.TimeType.values.indexOf(u.major);
    var d = u.toVector();
    var m = l[c][_];
    var h = this._processor.text(m);
    return o.DurationFormatUtils.replacePlaceholders(h, function (e, t) {
      var i = r._inlineDurationFormat.parse(t);
      i.fill = i.fill || (n ? "0" : null) || "";
      i.width = String(i.width || (n ? 2 + (i.precision ? Number(i.precision) + 1 : 0) : 0));
      var a = o.DurationFormatUtils.timeTypeNames.indexOf(e);
      return i.apply(r._processor.text, d, a);
    });
  };
  DynamicDurationFormat.DEFAULT_TEMPLATES = new s.LocalizedTimeFormatVO("generic_time_t1_d", "generic_time_t1_h", "generic_time_t1_m", "generic_time_t1_s", "generic_time_t2_d", "generic_time_t2_h", "generic_time_t2_m", "generic_time_t3_d", "generic_time_t3_h", "generic_time_t4_d");
  return DynamicDurationFormat;
}();
exports.DynamicDurationFormat = l;