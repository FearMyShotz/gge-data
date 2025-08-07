var i;
var a;
var s;
/*!
 * Globalize v1.7.0 2021-08-02T11:53Z Released under the MIT license
 * http://git.io/TrdQbw
 */
a = [require("./42.js"), require("./57.js"), require("./98.js"), require("./158.js")];
if ((s = typeof (i = function (e, t) {
  var n = t._formatMessage;
  var i = t._runtimeBind;
  var a = t._validateParameterPresence;
  var s = t._validateParameterTypePlainObject;
  var r = t._validateParameterTypeNumber;
  var o = t._validateParameterTypeString;
  var l = ["acceleration", "angle", "area", "digital", "duration", "length", "mass", "power", "pressure", "speed", "temperature", "volume"];
  function u(e, t, n) {
    var i;
    e = e.replace(/\//, "-per-");
    [""].concat(l).some(function (a) {
      return i = n.main(["units", t, a.length ? a + "-" + e : e]);
    });
    if ((i = function stripPluralGarbage(e) {
      var t;
      var n;
      if (e) {
        t = {};
        for (n in e) {
          t[n.replace(/unitPattern-count-/, "")] = e[n];
        }
      }
      return t;
    }(i)) || !/-per-/.test(e) || (e = e.split("-per-"), (i = e.map(function (e) {
      return u(e, t, n);
    }))[0] && i[1])) {
      return i;
    }
  }
  var c = u;
  t.formatUnit = t.prototype.formatUnit = function (e, t, n) {
    a(e, "value");
    r(e, "value");
    return this.unitFormatter(t, n)(e);
  };
  t.unitFormatter = t.prototype.unitFormatter = function (e, t) {
    var l;
    var u;
    var _;
    var d;
    var m;
    a(e, "unit");
    o(e, "unit");
    s(t, "options");
    l = [e, t = t || {}];
    m = function (e, t, n) {
      var i;
      var a;
      i = n.main(["units", t, "per/compoundUnitPattern"]);
      a = c(e, t, n);
      return {
        compoundUnitPattern: i,
        unitProperties: a
      };
    }(e, t.form || "long", this.cldr);
    d = function (e, t, i) {
      return function unitFormatter(s) {
        a(s, "value");
        r(s, "value");
        return function (e, t, i, a) {
          var s;
          var r;
          var o;
          var l;
          var u;
          var c;
          var _;
          var d;
          var m = a.compoundUnitPattern;
          a = a.unitProperties;
          o = t(e);
          _ = i(e);
          if (a instanceof Array) {
            r = a[0];
            u = a[1];
            d = u.hasOwnProperty("one") ? "one" : "other";
            s = n(r[_], [o]);
            l = n(u[d], [""]).trim();
            return n(m, [s, l]);
          } else {
            c = a[_];
            return n(c, [o]);
          }
        }(s, e, t, i);
      };
    }(u = t.numberFormatter || this.numberFormatter(), _ = this.pluralGenerator(), m);
    i(l, this.cldr, d, [u, _, m]);
    return d;
  };
  return t;
}) == "function" ? i.apply(exports, a) : i) !== undefined) {
  module.exports = s;
}