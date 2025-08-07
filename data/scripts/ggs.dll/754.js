var i;
var a;
var s;
/*!
 * Globalize v1.7.0 2021-08-02T11:53Z Released under the MIT license
 * http://git.io/TrdQbw
 */
a = [require("./42.js"), require("./57.js"), require("./98.js"), require("./158.js"), require("./66.js"), require("./99.js")];
if ((s = typeof (i = function (e, t) {
  var n = t._formatMessage;
  var i = t._runtimeBind;
  var a = t._validateCldr;
  var s = t._validateDefaultLocale;
  var r = t._validateParameterPresence;
  var o = t._validateParameterTypeString;
  var l = t._validateParameterTypeNumber;
  t.formatRelativeTime = t.prototype.formatRelativeTime = function (e, t, n) {
    r(e, "value");
    l(e, "value");
    return this.relativeTimeFormatter(t, n)(e);
  };
  t.relativeTimeFormatter = t.prototype.relativeTimeFormatter = function (e, t) {
    var u;
    var c;
    var _;
    var d;
    var m;
    var h;
    r(e, "unit");
    o(e, "unit");
    c = this.cldr;
    u = [e, t = t || {}];
    s(c);
    c.on("get", a);
    try {
      m = function (e, t, n) {
        var i;
        var a;
        var s;
        var r = n.form;
        if (r) {
          e = e + "-" + r;
        }
        i = t.main(["dates", "fields", e]);
        a = {
          "relativeTime-type-future": i["relativeTime-type-future"],
          "relativeTime-type-past": i["relativeTime-type-past"]
        };
        for (s in i) {
          if (i.hasOwnProperty(s) && /relative-type-(-?[0-9]+)/.exec(s)) {
            a[s] = i[s];
          }
        }
        return a;
      }(e, c, t);
    } finally {
      c.off("get", a);
    }
    h = function (e, t, i) {
      return function relativeTimeFormatter(a) {
        r(a, "value");
        l(a, "value");
        return function (e, t, i, a) {
          var s;
          var r = a["relative-type-" + e];
          return r || (s = e <= 0 ? a["relativeTime-type-past"] : a["relativeTime-type-future"], e = Math.abs(e), r = s["relativeTimePattern-count-" + i(e)], n(r, [t(e)]));
        }(a, e, t, i);
      };
    }(_ = this.numberFormatter(t), d = this.pluralGenerator(), m);
    i(u, c, h, [_, d, m]);
    return h;
  };
  return t;
}) == "function" ? i.apply(exports, a) : i) !== undefined) {
  module.exports = s;
}