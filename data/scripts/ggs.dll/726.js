var i;
var a = require("./75.js").codes;
var s = a.ERR_MISSING_ARGS;
var r = a.ERR_STREAM_DESTROYED;
function noop(e) {
  if (e) {
    throw e;
  }
}
function call(e) {
  e();
}
function pipe(e, t) {
  return e.pipe(t);
}
module.exports = function pipeline() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
    t[a] = arguments[a];
  }
  var o;
  var l = function popCallback(e) {
    if (e.length) {
      if (typeof e[e.length - 1] != "function") {
        return noop;
      } else {
        return e.pop();
      }
    } else {
      return noop;
    }
  }(t);
  if (Array.isArray(t[0])) {
    t = t[0];
  }
  if (t.length < 2) {
    throw new s("streams");
  }
  var u = t.map(function (e, a) {
    var s = a < t.length - 1;
    return function destroyer(e, t, a, s) {
      s = function once(e) {
        var t = false;
        return function () {
          if (!t) {
            t = true;
            e.apply(undefined, arguments);
          }
        };
      }(s);
      var o = false;
      e.on("close", function () {
        o = true;
      });
      if (i === undefined) {
        i = require("./152.js");
      }
      i(e, {
        readable: t,
        writable: a
      }, function (e) {
        if (e) {
          return s(e);
        }
        o = true;
        s();
      });
      var l = false;
      return function (t) {
        if (!o && !l) {
          l = true;
          if (function isRequest(e) {
            return e.setHeader && typeof e.abort == "function";
          }(e)) {
            return e.abort();
          } else if (typeof e.destroy == "function") {
            return e.destroy();
          } else {
            s(t || new r("pipe"));
            return;
          }
        }
      };
    }(e, s, a > 0, function (e) {
      o ||= e;
      if (e) {
        u.forEach(call);
      }
      if (!s) {
        u.forEach(call);
        l(o);
      }
    });
  });
  return t.reduce(pipe);
};