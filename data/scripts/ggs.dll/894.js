var i = require("./895.js");
function a(e) {
  return function () {
    var t;
    var n;
    var a = 48;
    var s = 1;
    var r = a;
    var o = new Array(a);
    var l = 0;
    var u = new function () {
      var e = 4022871197;
      return function (t) {
        if (t) {
          t = t.toString();
          for (var n = 0; n < t.length; n++) {
            var i = (e += t.charCodeAt(n)) * 0.02519603282416938;
            i -= e = i >>> 0;
            e = (i *= e) >>> 0;
            e += (i -= e) * 4294967296;
          }
          return (e >>> 0) * 2.3283064365386963e-10;
        }
        e = 4022871197;
      };
    }();
    for (t = 0; t < a; t++) {
      o[t] = u(Math.random());
    }
    function c() {
      if (++r >= a) {
        r = 0;
      }
      var e = o[r] * 1768863 + s * 2.3283064365386963e-10;
      return o[r] = e - (s = e | 0);
    }
    function _(e) {
      return Math.floor(e * (c() + (c() * 2097152 | 0) * 1.1102230246251565e-16));
    }
    _.string = function (e) {
      var t;
      var n = "";
      for (t = 0; t < e; t++) {
        n += String.fromCharCode(33 + _(94));
      }
      return n;
    };
    _.cleanString = function (e) {
      return e = (e = (e = e.replace(/(^\s*)|(\s*$)/gi, "")).replace(/[\x00-\x1F]/gi, "")).replace(/\n /, "\n");
    };
    _.hashString = function (e) {
      e = _.cleanString(e);
      u(e);
      t = 0;
      for (; t < e.length; t++) {
        l = e.charCodeAt(t);
        n = 0;
        for (; n < a; n++) {
          o[n] -= u(l);
          if (o[n] < 0) {
            o[n] += 1;
          }
        }
      }
    };
    _.seed = function (e) {
      if (e === undefined || e === null) {
        e = Math.random();
      }
      if (typeof e != "string") {
        e = i(e, function (e, t) {
          if (typeof t == "function") {
            return t.toString();
          } else {
            return t;
          }
        });
      }
      _.initState();
      _.hashString(e);
    };
    _.addEntropy = function () {
      var e = [];
      for (t = 0; t < arguments.length; t++) {
        e.push(arguments[t]);
      }
      (function () {
        var e = Array.prototype.slice.call(arguments);
        for (t = 0; t < e.length; t++) {
          for (n = 0; n < a; n++) {
            o[n] -= u(e[t]);
            if (o[n] < 0) {
              o[n] += 1;
            }
          }
        }
      })(l++ + new Date().getTime() + e.join("") + Math.random());
    };
    _.initState = function () {
      u();
      t = 0;
      for (; t < a; t++) {
        o[t] = u(" ");
      }
      s = 1;
      r = a;
    };
    _.done = function () {
      u = null;
    };
    if (e !== undefined) {
      _.seed(e);
    }
    _.range = function (e) {
      return _(e);
    };
    _.random = function () {
      return _(Number.MAX_VALUE - 1) / Number.MAX_VALUE;
    };
    _.floatBetween = function (e, t) {
      return _.random() * (t - e) + e;
    };
    _.intBetween = function (e, t) {
      return Math.floor(_.random() * (t - e + 1)) + e;
    };
    return _;
  }();
}
a.create = function (e) {
  return new a(e);
};
module.exports = a;