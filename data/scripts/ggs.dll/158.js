var i;
var a;
var s;
/*!
 * Globalize v1.7.0 2021-08-02T11:53Z Released under the MIT license
 * http://git.io/TrdQbw
 */
a = [require("./42.js"), require("./57.js"), require("./66.js"), require("./99.js")];
if ((s = typeof (i = function (e, t) {
  var n;
  var i = t._runtimeBind;
  var a = t._validateCldr;
  var s = t._validateDefaultLocale;
  var r = t._validateParameterPresence;
  var o = t._validateParameterType;
  var l = t._validateParameterTypePlainObject;
  n = function () {
    'use strict';

    function e(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) {
          n[t] = e[t];
        }
        return n;
      }
      return Array.from(e);
    }
    function t(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var n = function () {
      function defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || false;
          i.configurable = true;
          if ("value" in i) {
            i.writable = true;
          }
          Object.defineProperty(e, i.key, i);
        }
      }
      return function (e, t, n) {
        if (t) {
          defineProperties(e.prototype, t);
        }
        if (n) {
          defineProperties(e, n);
        }
        return e;
      };
    }();
    var i = function () {
      function Parser() {
        t(this, Parser);
      }
      n(Parser, [{
        key: "parse",
        value: function parse(e) {
          var t = this;
          if (e === "i = 0 or n = 1") {
            return "n >= 0 && n <= 1";
          } else if (e === "i = 0,1") {
            return "n >= 0 && n < 2";
          } else if (e === "i = 1 and v = 0") {
            this.v0 = 1;
            return "n == 1 && v0";
          } else {
            return e.replace(/([tv]) (!?)= 0/g, function (e, n, i) {
              var a = n + "0";
              t[a] = 1;
              if (i) {
                return "!" + a;
              } else {
                return a;
              }
            }).replace(/\b[fintv]\b/g, function (e) {
              t[e] = 1;
              return e;
            }).replace(/([fin]) % (10+)/g, function (e, n, i) {
              var a = n + i;
              t[a] = 1;
              return a;
            }).replace(/n10+ = 0/g, "t0 && $&").replace(/(\w+ (!?)= )([0-9.]+,[0-9.,]+)/g, function (e, t, n, i) {
              if (e === "n = 0,1") {
                return "(n == 0 || n == 1)";
              } else if (n) {
                return t + i.split(",").join(" && " + t);
              } else {
                return "(" + t + i.split(",").join(" || " + t) + ")";
              }
            }).replace(/(\w+) (!?)= ([0-9]+)\.\.([0-9]+)/g, function (e, n, i, a, s) {
              if (Number(a) + 1 === Number(s)) {
                if (i) {
                  return n + " != " + a + " && " + n + " != " + s;
                } else {
                  return "(" + n + " == " + a + " || " + n + " == " + s + ")";
                }
              } else if (i) {
                return "(" + n + " < " + a + " || " + n + " > " + s + ")";
              } else if (n === "n") {
                t.t0 = 1;
                return "(t0 && n >= " + a + " && n <= " + s + ")";
              } else {
                return "(" + n + " >= " + a + " && " + n + " <= " + s + ")";
              }
            }).replace(/ and /g, " && ").replace(/ or /g, " || ").replace(/ = /g, " == ");
          }
        }
      }, {
        key: "vars",
        value: function (e) {
          function vars() {
            return e.apply(this, arguments);
          }
          vars.toString = function () {
            return e.toString();
          };
          return vars;
        }(function () {
          var e = [];
          if (this.i) {
            e.push("i = s[0]");
          }
          if (this.f || this.v) {
            e.push("f = s[1] || ''");
          }
          if (this.t) {
            e.push("t = (s[1] || '').replace(/0+$/, '')");
          }
          if (this.v) {
            e.push("v = f.length");
          }
          if (this.v0) {
            e.push("v0 = !s[1]");
          }
          if (this.t0 || this.n10 || this.n100) {
            e.push("t0 = Number(s[0]) == n");
          }
          for (var t in this) {
            if (/^.10+$/.test(t)) {
              var n = t[0] === "n" ? "t0 && s[0]" : t[0];
              e.push(t + " = " + n + ".slice(-" + t.substr(2).length + ")");
            }
          }
          if (e.length) {
            return "var " + ["s = String(n).split('.')"].concat(e).join(", ");
          } else {
            return "";
          }
        })
      }]);
      return Parser;
    }();
    var a = function () {
      function MakePlural(e) {
        var n = arguments[1] === undefined ? MakePlural : arguments[1];
        var a = n.cardinals;
        var s = n.ordinals;
        t(this, MakePlural);
        if (!a && !s) {
          throw new Error("At least one type of plural is required");
        }
        this.lc = e;
        this.categories = {
          cardinal: [],
          ordinal: []
        };
        this.parser = new i();
        this.fn = this.buildFunction(a, s);
        this.fn._obj = this;
        this.fn.categories = this.categories;
        this.fn.toString = this.fnToString.bind(this);
        return this.fn;
      }
      n(MakePlural, [{
        key: "compile",
        value: function compile(t, n) {
          var i;
          var a = [];
          var s = MakePlural.rules[t][this.lc];
          if (!s) {
            if (n) {
              throw new Error("Locale \"" + this.lc + "\" " + t + " rules not found");
            }
            this.categories[t] = ["other"];
            return "'other'";
          }
          for (var r in s) {
            var o = s[r].trim().split(/\s*@\w*/);
            i = o;
            var l = Array.isArray(i) ? i : Array.from(i);
            var u = l[0];
            l.slice(1);
            var c = r.replace("pluralRule-count-", "");
            if (u) {
              a.push([this.parser.parse(u), c]);
            }
          }
          this.categories[t] = a.map(function (e) {
            return e[1];
          }).concat("other");
          if (a.length === 1) {
            return "(" + a[0][0] + ") ? '" + a[0][1] + "' : 'other'";
          } else {
            return [].concat(e(a.map(function (e) {
              return "(" + e[0] + ") ? '" + e[1] + "'";
            })), ["'other'"]).join("\n      : ");
          }
        }
      }, {
        key: "buildFunction",
        value: function buildFunction(t, n) {
          var i = this;
          var a = {
            vars: function vars(e) {
              return ("  " + e + ";").replace(/(.{1,78})(,|$) ?/g, "$1$2\n      ");
            },
            cond: function cond(e) {
              return ("  " + e + ";").replace(/(.{1,78}) (\|\| |$) ?/gm, "$1\n          $2");
            }
          };
          var s = [n && ["ordinal", !t], t && ["cardinal", true]].map(function compile(t) {
            if (t) {
              return (t[1] ? "return " : "if (ord) return ") + i.compile.apply(i, e(t));
            } else {
              return "";
            }
          }).map(a.cond);
          var r = [a.vars(this.parser.vars())].concat(e(s)).join("\n").replace(/\s+$/gm, "").replace(/^[\s;]*[\r\n]+/gm, "");
          var o = n && t ? "n, ord" : "n";
          return new Function(o, r);
        }
      }, {
        key: "fnToString",
        value: function fnToString(e) {
          return Function.prototype.toString.call(this.fn).replace(/^function( \w+)?/, e ? "function " + e : "function").replace("\n/**/", "");
        }
      }], [{
        key: "load",
        value: function load() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
            t[n] = arguments[n];
          }
          t.forEach(function (e) {
            var t = e && e.supplemental || null;
            if (!t) {
              throw new Error("Data does not appear to be CLDR data");
            }
            MakePlural.rules = {
              cardinal: t["plurals-type-cardinal"] || MakePlural.rules.cardinal,
              ordinal: t["plurals-type-ordinal"] || MakePlural.rules.ordinal
            };
          });
          return MakePlural;
        }
      }]);
      return MakePlural;
    }();
    a.cardinals = true;
    a.ordinals = false;
    a.rules = {
      cardinal: {},
      ordinal: {}
    };
    return a;
  }();
  function u(e, t) {
    o(e, t, e === undefined || typeof e == "number", "Number");
  }
  t.plural = t.prototype.plural = function (e, t) {
    r(e, "value");
    u(e, "value");
    return this.pluralGenerator(t)(e);
  };
  t.pluralGenerator = t.prototype.pluralGenerator = function (e) {
    var t;
    var c;
    var _;
    var d;
    var m;
    var h;
    var p;
    l(e, "options");
    e = e || {};
    c = this.cldr;
    t = [e];
    h = e.type || "cardinal";
    p = e.type;
    o(p, "options.type", p === undefined || p === "cardinal" || p === "ordinal", "String \"cardinal\" or \"ordinal\"");
    s(c);
    _ = h === "ordinal";
    c.on("get", a);
    try {
      c.supplemental(["plurals-type-" + h, "{language}"]);
    } finally {
      c.off("get", a);
    }
    n.rules = {};
    n.rules[h] = c.supplemental("plurals-type-" + h);
    m = function (e) {
      return function pluralGenerator(t) {
        r(t, "value");
        u(t, "value");
        return e(t);
      };
    }(d = new n(c.attributes.language, {
      ordinals: _,
      cardinals: !_
    }));
    i(t, c, m, [d]);
    return m;
  };
  return t;
}) == "function" ? i.apply(exports, a) : i) !== undefined) {
  module.exports = s;
}