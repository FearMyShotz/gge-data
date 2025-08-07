Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./41.js");
var a = require("./159.js");
var s = require("./80.js");
var r = function () {
  function CascadeDurationFormat(e = null, t = null, n = null, i = null, a = null, s = null, r = null, o = null, l = null) {
    this._templates = [e, t, n, i, a, s, r, o, l];
  }
  CascadeDurationFormat.prototype.apply = function (e, t = null) {
    if (!t) {
      var n = this._templates.length;
      for (t = s.TimeType.MILLISECONDS; n--;) {
        if (this._templates[n]) {
          t = s.TimeType.values[n];
          break;
        }
      }
    }
    for (var r, o = new a.Time(e, s.TimeType.SECONDS, t), l = Math.min(s.TimeType.values.indexOf(o.major) + 1, this._templates.length); l-- != 0 && !(r = this._templates[l]););
    if (r) {
      return i.Localize.timeCustom(r, e, t);
    } else {
      return "";
    }
  };
  return CascadeDurationFormat;
}();
exports.CascadeDurationFormat = r;