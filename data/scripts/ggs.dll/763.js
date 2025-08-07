Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./159.js");
var a = require("./80.js");
var s = require("./323.js");
var r = require("./324.js");
var o = function () {
  function SimpleDurationFormat(e) {
    this._processor = e;
    this._inlineDurationFormat = new s.InlineDurationFormat();
  }
  SimpleDurationFormat.bestRounding = function (e) {
    var t = a.TimeType.MILLISECONDS;
    r.DurationFormatUtils.forAllPlaceholders(e, function (e) {
      var n = a.TimeType.getByName(e);
      if (n && n.milliseconds > t.milliseconds) {
        t = n;
      }
    });
    return t;
  };
  SimpleDurationFormat.prototype.apply = function (e, t, n) {
    var s = this;
    if (n === undefined) {
      n = null;
    }
    var o = this._processor.text(e);
    n = n || SimpleDurationFormat.bestRounding(o);
    var l = new i.Time(t, a.TimeType.SECONDS, n).toVector();
    var u = this._processor.text.bind(this._processor);
    return r.DurationFormatUtils.replacePlaceholders(o, function (e, t) {
      var n = r.DurationFormatUtils.timeTypeNames.indexOf(e);
      return s._inlineDurationFormat.parse(t).apply(u, l, n);
    });
  };
  return SimpleDurationFormat;
}();
exports.SimpleDurationFormat = o;