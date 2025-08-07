var t = require("./24.js");
var n = Infinity;
var i = "[object Symbol]";
var a = /&(?:amp|lt|gt|quot|#39|#96);/g;
var s = RegExp(a.source);
var r = typeof t == "object" && t && t.Object === Object && t;
var o = typeof self == "object" && self && self.Object === Object && self;
var l = r || o || Function("return this")();
var u = function basePropertyOf(e) {
  return function (t) {
    if (e == null) {
      return undefined;
    } else {
      return e[t];
    }
  };
}({
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": "\"",
  "&#39;": "'",
  "&#96;": "`"
});
var c = Object.prototype.toString;
var _ = l.Symbol;
var d = _ ? _.prototype : undefined;
var m = d ? d.toString : undefined;
function baseToString(e) {
  if (typeof e == "string") {
    return e;
  }
  if (function isSymbol(e) {
    return typeof e == "symbol" || function isObjectLike(e) {
      return !!e && typeof e == "object";
    }(e) && c.call(e) == i;
  }(e)) {
    if (m) {
      return m.call(e);
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
module.exports = function unescape(e) {
  if ((e = function toString(e) {
    if (e == null) {
      return "";
    } else {
      return baseToString(e);
    }
  }(e)) && s.test(e)) {
    return e.replace(a, u);
  } else {
    return e;
  }
};