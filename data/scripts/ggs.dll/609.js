var t = require("./24.js");
var n = Infinity;
var i = "[object Symbol]";
var a = /\s+$/;
var s = "[\\ud800-\\udfff]";
var r = "[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]";
var o = "\\ud83c[\\udffb-\\udfff]";
var l = "[^\\ud800-\\udfff]";
var u = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var c = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var _ = "(?:" + r + "|" + o + ")?";
var d = "[\\ufe0e\\ufe0f]?" + _ + ("(?:\\u200d(?:" + [l, u, c].join("|") + ")[\\ufe0e\\ufe0f]?" + _ + ")*");
var m = "(?:" + [l + r + "?", r, u, c, s].join("|") + ")";
var h = RegExp(o + "(?=" + o + ")|" + m + d, "g");
var p = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]");
var g = typeof t == "object" && t && t.Object === Object && t;
var E = typeof self == "object" && self && self.Object === Object && self;
var C = g || E || Function("return this")();
function baseIndexOf(e, t, n) {
  if (t != t) {
    return function baseFindIndex(e, t, n, i) {
      for (var a = e.length, s = n + (i ? 1 : -1); i ? s-- : ++s < a;) {
        if (t(e[s], s, e)) {
          return s;
        }
      }
      return -1;
    }(e, baseIsNaN, n);
  }
  for (var i = n - 1, a = e.length; ++i < a;) {
    if (e[i] === t) {
      return i;
    }
  }
  return -1;
}
function baseIsNaN(e) {
  return e != e;
}
function stringToArray(e) {
  if (function hasUnicode(e) {
    return p.test(e);
  }(e)) {
    return function unicodeToArray(e) {
      return e.match(h) || [];
    }(e);
  } else {
    return function asciiToArray(e) {
      return e.split("");
    }(e);
  }
}
var f = Object.prototype.toString;
var T = C.Symbol;
var S = T ? T.prototype : undefined;
var y = S ? S.toString : undefined;
function baseToString(e) {
  if (typeof e == "string") {
    return e;
  }
  if (function isSymbol(e) {
    return typeof e == "symbol" || function isObjectLike(e) {
      return !!e && typeof e == "object";
    }(e) && f.call(e) == i;
  }(e)) {
    if (y) {
      return y.call(e);
    } else {
      return "";
    }
  }
  var t = e + "";
  if (t == "0" && 1 / e == -n) {
    return "-0";
  } else {
    return t;
  }
}
function castSlice(e, t, n) {
  var i = e.length;
  n = n === undefined ? i : n;
  if (!t && n >= i) {
    return e;
  } else {
    return function baseSlice(e, t, n) {
      var i = -1;
      var a = e.length;
      if (t < 0) {
        t = -t > a ? 0 : a + t;
      }
      if ((n = n > a ? a : n) < 0) {
        n += a;
      }
      a = t > n ? 0 : n - t >>> 0;
      t >>>= 0;
      var s = Array(a);
      while (++i < a) {
        s[i] = e[i + t];
      }
      return s;
    }(e, t, n);
  }
}
module.exports = function trimEnd(e, t, n) {
  if ((e = function toString(e) {
    if (e == null) {
      return "";
    } else {
      return baseToString(e);
    }
  }(e)) && (n || t === undefined)) {
    return e.replace(a, "");
  }
  if (!e || !(t = baseToString(t))) {
    return e;
  }
  var i = stringToArray(e);
  return castSlice(i, 0, function charsEndIndex(e, t) {
    for (var n = e.length; n-- && baseIndexOf(t, e[n], 0) > -1;);
    return n;
  }(i, stringToArray(t)) + 1).join("");
};