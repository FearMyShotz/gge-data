var t = require("./24.js");
var n = 9007199254740991;
var i = "[object Arguments]";
var a = "[object Function]";
var s = "[object GeneratorFunction]";
var r = typeof t == "object" && t && t.Object === Object && t;
var o = typeof self == "object" && self && self.Object === Object && self;
var l = r || o || Function("return this")();
function arrayPush(e, t) {
  for (var n = -1, i = t.length, a = e.length; ++n < i;) {
    e[a + n] = t[n];
  }
  return e;
}
var u = Object.prototype;
var c = u.hasOwnProperty;
var _ = u.toString;
var d = l.Symbol;
var m = u.propertyIsEnumerable;
var h = d ? d.isConcatSpreadable : undefined;
function isFlattenable(e) {
  return p(e) || function isArguments(e) {
    return function isArrayLikeObject(e) {
      return function isObjectLike(e) {
        return !!e && typeof e == "object";
      }(e) && function isArrayLike(e) {
        return e != null && function isLength(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= n;
        }(e.length) && !function isFunction(e) {
          var t = function isObject(e) {
            var t = typeof e;
            return !!e && (t == "object" || t == "function");
          }(e) ? _.call(e) : "";
          return t == a || t == s;
        }(e);
      }(e);
    }(e) && c.call(e, "callee") && (!m.call(e, "callee") || _.call(e) == i);
  }(e) || !!h && !!e && !!e[h];
}
var p = Array.isArray;
module.exports = function flatten(e) {
  if (e && e.length) {
    return function baseFlatten(e, t, n, i, a) {
      var s = -1;
      var r = e.length;
      n ||= isFlattenable;
      a ||= [];
      while (++s < r) {
        var o = e[s];
        if (t > 0 && n(o)) {
          if (t > 1) {
            baseFlatten(o, t - 1, n, i, a);
          } else {
            arrayPush(a, o);
          }
        } else if (!i) {
          a[a.length] = o;
        }
      }
      return a;
    }(e, 1);
  } else {
    return [];
  }
};