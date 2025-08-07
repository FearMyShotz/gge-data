var i;
var a;
var s;
/*!
 * Globalize v1.7.0 2021-08-02T11:53Z Released under the MIT license
 * http://git.io/TrdQbw
 */
a = [require("./42.js"), require("./57.js"), require("./66.js"), require("./99.js")];
if ((s = typeof (i = function (e, t) {
  var n = t._createError;
  var i = t._partsJoin;
  var a = t._partsPush;
  var s = t._regexpEscape;
  var r = t._runtimeBind;
  var o = t._stringPad;
  var l = t._validateCldr;
  var u = t._validateDefaultLocale;
  var c = t._validateParameterPresence;
  var _ = t._validateParameterRange;
  var d = t._validateParameterType;
  var m = t._validateParameterTypePlainObject;
  function h(e) {
    return n("E_UNSUPPORTED", "Unsupported {feature}.", {
      feature: e
    });
  }
  function p(e, t) {
    d(e, t, e === undefined || typeof e == "number", "Number");
  }
  function g(e, t) {
    d(e, t, e === undefined || typeof e == "string", "a string");
  }
  function E(e) {
    var t = e.attributes["u-nu"];
    if (t) {
      if (t === "traditio") {
        t = "traditional";
      }
      if (["native", "traditional", "finance"].indexOf(t) !== -1) {
        return e.main(["numbers/otherNumberingSystems", t]);
      } else {
        return t;
      }
    } else {
      return e.main("numbers/defaultNumberingSystem");
    }
  }
  function C(e) {
    var t;
    var n = E(e);
    if (n !== "latn") {
      if ((t = e.supplemental(["numberingSystems", n]))._type !== "numeric") {
        throw h("`" + t._type + "` numbering system");
      }
      return t._digits;
    }
  }
  var f = /^(('([^']|'')*'|[^*#@0,.E])*)(\*.)?((([#,]*[0,]*0+)(\.0*[0-9]*#*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
  function T(e) {
    var t;
    var n;
    var i;
    var a;
    var s;
    var r;
    var o;
    var l;
    var u;
    var c;
    var _;
    var d;
    var m;
    var p;
    var g;
    var E;
    var C;
    var T;
    if (!(e = e.match(f))) {
      throw new Error("Invalid pattern: " + e);
    }
    d = e[1];
    _ = e[4];
    a = e[5];
    C = e[9];
    g = e[10];
    T = e[11];
    if (C) {
      C.replace(/(@+)(#*)/, function (e, t, n) {
        c = t.length;
        o = c + n.length;
      });
    } else {
      i = e[8];
      s = e[7];
      if (i) {
        i.replace(/[0-9]+/, function (e) {
          l = e;
        });
        if (l) {
          p = +("0." + l);
          l = l.length;
        } else {
          l = 0;
        }
        r = i.length - 1;
      } else {
        l = 0;
        r = 0;
      }
      s.replace(/0+$/, function (e) {
        u = e.length;
      });
    }
    if (g) {
      throw h({
        feature: "scientific notation (not implemented)"
      });
    }
    if (_) {
      throw h({
        feature: "padding (not implemented)"
      });
    }
    if ((t = a.lastIndexOf(",")) !== -1) {
      n = a.split(".")[0];
      m = n.length - t - 1;
      if ((n = a.lastIndexOf(",", t - 1)) !== -1) {
        E = t - 1 - n;
      }
    }
    return [d, _, u, l, r, c, o, p, m, E, T];
  }
  function S(e, t) {
    return t.main(["numbers/symbols-numberSystem-" + E(t), e]);
  }
  var y = {
    ".": "decimal",
    ",": "group",
    "%": "percentSign",
    "+": "plusSign",
    "-": "minusSign",
    E: "exponential",
    "‰": "perMille"
  };
  function I(e) {
    if (isNaN(e)) {
      return NaN;
    } else {
      return Math[e < 0 ? "ceil" : "floor"](e);
    }
  }
  function v(e, t, n) {
    var i;
    var a;
    var s;
    var r;
    var o;
    var l;
    var u;
    var c;
    function getOptions(e, t) {
      if (e in n) {
        u[t] = n[e];
      }
    }
    n = n || {};
    e = e.split(";");
    o = e[0];
    i = e[1] || "-" + o;
    s = T(i);
    a = s[0];
    r = s[10];
    c = (c = (c = n.round) || "round") === "truncate" ? I : Math[c];
    (l = function (e, t) {
      var n;
      var i;
      e = +e;
      if (isNaN(e)) {
        return NaN;
      }
      if (typeof t == "object" && t.exponent) {
        i = 1;
        if ((n = +t.exponent) == 0) {
          return c(e);
        }
        if (typeof n != "number" || n % 1 != 0) {
          return NaN;
        }
      } else {
        if ((i = +t || 1) === 1) {
          return c(e);
        }
        if (isNaN(i)) {
          return NaN;
        }
        n = +(i = i.toExponential().split("e"))[1];
        i = +i[0];
      }
      (e = e.toString().split("e"))[0] = +e[0] / i;
      e[1] = e[1] ? +e[1] - n : -n;
      (e = (e = c(+(e[0] + "e" + e[1]))).toString().split("e"))[0] = +e[0] * i;
      e[1] = e[1] ? +e[1] + n : n;
      return +(e[0] + "e" + e[1]);
    }).generatorString = function () {
      return "numberRound(" + (n.round ? "\"" + n.round + "\"" : "") + ")";
    };
    u = T(o).concat([o, a + o + r, a, r, l, S("infinity", t), S("nan", t), function (e) {
      var t;
      var n = {};
      for (t in y) {
        n[t] = S(y[t], e);
      }
      return n;
    }(t), C(t)]);
    if (n.compact) {
      u[2] = 1;
      u[3] = 0;
      u[4] = 0;
      u[5] = u[6] = undefined;
      u[20] = function (e, t) {
        var n = 0;
        var i = t.main(["numbers/decimalFormats-numberSystem-" + E(t), e, "decimalFormat"]);
        (i = Object.keys(i).reduce(function (e, t) {
          var a = t.split("0").length - 1;
          var s = t.split("-")[2];
          e[a] = e[a] || {};
          e[a][s] = i[t];
          n = Math.max(a, n);
          return e;
        }, {})).maxExponent = n;
        return i;
      }(n.compact, t);
    }
    getOptions("minimumIntegerDigits", 2);
    getOptions("minimumFractionDigits", 3);
    getOptions("maximumFractionDigits", 4);
    getOptions("minimumSignificantDigits", 5);
    getOptions("maximumSignificantDigits", 6);
    if (n.useGrouping === false) {
      u[8] = null;
    }
    if ("minimumFractionDigits" in n && !("maximumFractionDigits" in n)) {
      u[4] = Math.max(u[3], u[4]);
    } else if (!("minimumFractionDigits" in n) && "maximumFractionDigits" in n) {
      u[3] = Math.min(u[3], u[4]);
    }
    return u;
  }
  var A = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g;
  var O = /[\x2D\u058A\u05BE\u1400\u1806\u2010-\u2015\u2E17\u2E1A\u2E3A\u2E3B\u2E40\u301C\u3030\u30A0\uFE31\uFE32\uFE58\uFE63\uFF0D\u2212]|\uD803\uDEAD/g;
  var L = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g;
  function D(e) {
    return e.replace(A, "").replace(O, "-").replace(L, " ");
  }
  function b(e, t) {
    return Object.keys(e).map(function (n) {
      return t([n, e[n]]);
    }).reduce(function (e, t) {
      e[t[0]] = t[1];
      return e;
    }, {});
  }
  function N(e) {
    if (e[0] + e[e.length - 1] !== "''") {
      return e;
    } else if (e === "''") {
      return "'";
    } else {
      return e.replace(/''/g, "'").slice(1, -1);
    }
  }
  function R(e, t) {
    if (e !== "decimal" && e !== "percent") {
      throw new Error("Invalid style");
    }
    return t.main(["numbers", e + "Formats-numberSystem-" + E(t), "standard"]);
  }
  var P = /^([^0]*)(0+)([^0]*)$/;
  function B(e, t, n) {
    var i;
    if (e === 0) {
      return e;
    } else {
      i = Math.ceil(Math.log(Math.abs(e)) / Math.log(10));
      return n(e, {
        exponent: i -= t
      });
    }
  }
  t.numberFormatter = t.prototype.numberFormatter = function (e) {
    var t;
    var n;
    var a;
    m(e, "options");
    t = [e = e || {}];
    a = function (e) {
      return function numberFormatter(t) {
        return i(e(t));
      };
    }(n = this.numberToPartsFormatter(e));
    r(t, this.cldr, a, [n]);
    return a;
  };
  t.numberToPartsFormatter = t.prototype.numberToPartsFormatter = function (e) {
    var t;
    var n;
    var i;
    var s;
    var d;
    var g;
    m(e, "options");
    e = e || {};
    n = this.cldr;
    t = [e];
    u(n);
    n.on("get", l);
    try {
      s = e.raw ? e.raw : R(e.style || "decimal", n);
      i = [d = v(s, n, e)];
    } finally {
      n.off("get", l);
    }
    (function validateDigits(e) {
      var t = e[2];
      var n = e[3];
      var i = e[4];
      var a = e[5];
      var s = e[6];
      if (isNaN(a * s)) {
        if (!isNaN(a) || !isNaN(s)) {
          throw new Error("Neither or both the minimum and maximum significant digits must be present");
        }
        _(t, "minimumIntegerDigits", 1, 21);
        _(n, "minimumFractionDigits", 0, 20);
        _(i, "maximumFractionDigits", n, 20);
      } else {
        _(a, "minimumSignificantDigits", 1, 21);
        _(s, "maximumSignificantDigits", a, 21);
      }
    })(d);
    if (e.compact) {
      i.push(this.pluralGenerator());
    }
    g = function (e, t) {
      return function numberToPartsFormatter(n) {
        c(n, "value");
        p(n, "value");
        return function (e, t, n) {
          var i;
          var s;
          var r;
          var l;
          var u;
          var c;
          var _;
          var d;
          var m;
          var p;
          var g;
          var E;
          var C;
          var f;
          var T;
          var S;
          var I;
          var v;
          var A;
          var O;
          var L;
          var D;
          var b;
          var R;
          var M;
          _ = t[2];
          c = t[3];
          l = t[4];
          d = t[5];
          u = t[6];
          T = t[7];
          E = t[8];
          S = t[9];
          f = t[15];
          r = t[16];
          m = t[17];
          A = t[18];
          p = t[19];
          s = t[20];
          if (isNaN(e)) {
            return [{
              type: "nan",
              value: m
            }];
          } else {
            if (e < 0) {
              C = t[12];
              g = t[13];
              v = t[14];
            } else {
              C = t[11];
              g = t[0];
              v = t[10];
            }
            g = (I = function (e) {
              var t = "integer";
              var n = [];
              e.replace(/('([^']|'')+'|'')|./g, function (e, i) {
                if (i) {
                  a(n, "literal", N(i));
                } else if (e !== "¤") {
                  (e = (e = e.replace(/[.,\-+E%\u2030]/, function (e) {
                    if (e === ".") {
                      t = "fraction";
                    }
                    a(n, y[e], A[e]);
                    return "";
                  })).replace(/[0-9]/, function (e) {
                    if (p) {
                      e = p[+e];
                    }
                    a(n, t, e);
                    return "";
                  })).replace(/./, function (e) {
                    a(n, "literal", e);
                  });
                } else {
                  a(n, "currency", e);
                }
              });
              return n;
            })(g);
            v = I(v);
            if (isFinite(e)) {
              if (C.indexOf("%") !== -1) {
                e *= 100;
              } else if (C.indexOf("‰") !== -1) {
                e *= 1000;
              }
              if (s) {
                R = Math.abs(Math.floor(e)).toString().length - 1;
                if ((R = Math.min(R, s.maxExponent)) >= 3) {
                  O = s[R] && s[R].other;
                }
                if (O === "0") {
                  O = null;
                } else if (O) {
                  L = O.split("0").length - 1;
                  b = R - (L - 1);
                  e /= Math.pow(10, b);
                }
              }
              e = isNaN(d * u) ? function (e, t, n, i, a, s) {
                e = i ? a(e, s || {
                  exponent: -i
                }) : a(e);
                e = String(e);
                if (i && /e-/.test(e)) {
                  e = (+e).toFixed(i).replace(/0+$/, "").replace(/\.$/, "");
                }
                if (n) {
                  (e = e.split("."))[1] = o(e[1] || "", n, true);
                  e = e.join(".");
                }
                if (t) {
                  (e = e.split("."))[0] = o(e[0], t);
                  e = e.join(".");
                }
                return e;
              }(e, _, c, l, f, T) : function (e, t, n, i) {
                var a;
                var s;
                if (t > n) {
                  n = t;
                }
                a = B(e, t, i);
                s = B(e, n, i);
                e = (+(e = +a == +s ? a : s)).toString(10);
                if (/e/.test(e)) {
                  throw h({
                    feature: "integers out of (1e21, 1e-7)"
                  });
                }
                if (t - e.replace(/^0+|\./g, "").length > 0) {
                  (e = e.split("."))[1] = o(e[1] || "", t - e[0].replace(/^0+/, "").length, true);
                  e = e.join(".");
                }
                return e;
              }(e, d, u, f);
              if (s && O) {
                M = n ? n(+e) : "other";
                O = s[R][M] || O;
                D = O.match(P);
                i = function (e) {
                  var t = [];
                  e.replace(/(\s+)|([^\s0]+)/g, function (e, n, i) {
                    if (n) {
                      a(t, "literal", n);
                    } else if (i) {
                      a(t, "compact", i);
                    }
                  });
                  return t;
                };
                g = g.concat(i(D[1]));
                v = i(D[3]).concat(v);
              }
              e = e.replace(/^-/, "");
              if (E) {
                e = function (e, t, n) {
                  var i;
                  var a = t;
                  var s = "";
                  var r = !!n;
                  e = String(e).split(".");
                  i = e[0].length;
                  while (i > a) {
                    s = e[0].slice(i - a, i) + (s.length ? "," : "") + s;
                    i -= a;
                    if (r) {
                      a = n;
                      r = false;
                    }
                  }
                  e[0] = e[0].slice(0, i) + (s.length ? "," : "") + s;
                  return e.join(".");
                }(e, E, S);
              }
              return g.concat(I(e), v);
            } else {
              return g.concat({
                type: "infinity",
                value: r
              }, v);
            }
          }
        }(n, e, t);
      };
    }.apply(null, i);
    r(t, n, g, i);
    return g;
  };
  t.numberParser = t.prototype.numberParser = function (e) {
    var t;
    var n;
    var i;
    var a;
    m(e, "options");
    e = e || {};
    n = this.cldr;
    t = [e];
    u(n);
    if (e.compact) {
      throw h({
        feature: "compact number parsing (not implemented)"
      });
    }
    n.on("get", l);
    i = function (e, t, n) {
      var i;
      var a;
      var r;
      var o;
      var l;
      var u;
      var c;
      var _;
      var d;
      var m;
      var h;
      var p;
      var g;
      var E;
      var C;
      var f;
      var T;
      var I;
      var A;
      var O;
      var L = v(e, t, n);
      f = D(L[0]);
      _ = L[4];
      m = L[5];
      d = L[6];
      T = L[8];
      I = L[9];
      A = D(L[10]);
      p = D(L[13]);
      g = D(L[14]);
      l = D(L[16]);
      h = D(L[17]);
      O = b(L[18], function (e) {
        return [e[0], D(e[1])];
      });
      E = L[19];
      c = b(function (e) {
        var t;
        var n = {};
        for (t in y) {
          n[S(y[t], e)] = t;
        }
        return n;
      }(t), function (e) {
        return [D(e[0]), e[1]];
      });
      r = E ? "[" + E + "]" : "\\d";
      o = s(O[","]);
      a = s(O["."]);
      if (E) {
        u = E.split("").reduce(function (e, t, n) {
          e[t] = String(n);
          return e;
        }, {});
      }
      i = [f, A, p, g].map(function (e) {
        return e.replace(/('([^']|'')+'|'')|./g, function (e, t) {
          if (t) {
            return N(t);
          } else {
            return e = e.replace(/[\-+E%\u2030]/, function (e) {
              return O[e];
            });
          }
        });
      });
      f = i[0];
      A = i[1];
      p = i[2];
      g = i[3];
      C = r + "+";
      if (T) {
        C = "(" + (i = I ? r + "{1," + I + "}((" + o + r + "{" + I + "})*(" + o + r + "{" + T + "}))" : r + "{1," + T + "}(" + o + r + "{" + T + "})+") + "|" + C + ")";
      }
      if (!isNaN(m * d) || !!_) {
        C = "(" + (C = C + "(" + (i = a + r + "+") + "|" + a + ")?|(" + C + ")?" + i) + ")";
      }
      return [c, u, {
        infinity: new RegExp("^" + s(l)),
        nan: new RegExp("^" + s(h)),
        negativePrefix: new RegExp("^" + s(p)),
        negativeSuffix: new RegExp("^" + s(g)),
        number: new RegExp("^" + C),
        prefix: new RegExp("^" + s(f)),
        suffix: new RegExp("^" + s(A))
      }];
    }(e.raw ? e.raw : R(e.style || "decimal", n), n, e);
    n.off("get", l);
    a = function (e) {
      return function numberParser(t) {
        c(t, "value");
        g(t, "value");
        return function (e, t) {
          var n;
          var i;
          var a;
          var s;
          var r;
          var o;
          var l;
          var u;
          var c;
          n = [["nan"], ["prefix", "infinity", "suffix"], ["prefix", "number", "suffix"], ["negativePrefix", "infinity", "negativeSuffix"], ["negativePrefix", "number", "negativeSuffix"]];
          a = t[0];
          i = t[1] || {};
          c = t[2];
          if (!function tokenizeNParse(e, t) {
            return t.some(function (t) {
              var n = e;
              return t.every(function (e) {
                return n.match(c[e]) !== null && (n = n.replace(c[e], function parse(e) {
                  return function (t) {
                    t = t.split("").map(function (e) {
                      return a[e] || i[e] || e;
                    }).join("");
                    switch (e) {
                      case "infinity":
                        r = Infinity;
                        break;
                      case "nan":
                        r = NaN;
                        break;
                      case "number":
                        t = t.replace(/,/g, "");
                        r = +t;
                        break;
                      case "prefix":
                      case "negativePrefix":
                        o = t;
                        break;
                      case "suffix":
                        u = t;
                        break;
                      case "negativeSuffix":
                        u = t;
                        s = true;
                        break;
                      default:
                        throw new Error("Internal error");
                    }
                    return "";
                  };
                }(e)), true);
              }) && !n.length;
            });
          }(e = D(e), n) || isNaN(r)) {
            return NaN;
          } else {
            if ((l = "" + o + u).indexOf("%") !== -1) {
              r /= 100;
            } else if (l.indexOf("‰") !== -1) {
              r /= 1000;
            }
            if (s) {
              r *= -1;
            }
            return r;
          }
        }(t, e);
      };
    }(i);
    r(t, n, a, [i]);
    return a;
  };
  t.formatNumber = t.prototype.formatNumber = function (e, t) {
    c(e, "value");
    p(e, "value");
    return this.numberFormatter(t)(e);
  };
  t.formatNumberToParts = t.prototype.formatNumberToParts = function (e, t) {
    c(e, "value");
    p(e, "value");
    return this.numberToPartsFormatter(t)(e);
  };
  t.parseNumber = t.prototype.parseNumber = function (e, t) {
    c(e, "value");
    g(e, "value");
    return this.numberParser(t)(e);
  };
  t._createErrorUnsupportedFeature = h;
  t._numberNumberingSystem = E;
  t._numberNumberingSystemDigitsMap = C;
  t._numberPattern = R;
  t._numberSymbol = S;
  t._looseMatching = D;
  t._removeLiteralQuotes = N;
  t._stringPad = o;
  t._validateParameterTypeNumber = p;
  t._validateParameterTypeString = g;
  return t;
}) == "function" ? i.apply(exports, a) : i) !== undefined) {
  module.exports = s;
}