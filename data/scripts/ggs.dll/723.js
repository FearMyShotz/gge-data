var t = require("./47.js");
var i;
function _defineProperty(e, t, n) {
  if (t in e) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    e[t] = n;
  }
  return e;
}
var a = require("./152.js");
var s = Symbol("lastResolve");
var r = Symbol("lastReject");
var o = Symbol("error");
var l = Symbol("ended");
var u = Symbol("lastPromise");
var c = Symbol("handlePromise");
var _ = Symbol("stream");
function createIterResult(e, t) {
  return {
    value: e,
    done: t
  };
}
function readAndResolve(e) {
  var t = e[s];
  if (t !== null) {
    var n = e[_].read();
    if (n !== null) {
      e[u] = null;
      e[s] = null;
      e[r] = null;
      t(createIterResult(n, false));
    }
  }
}
var d = Object.getPrototypeOf(function () {});
var m = Object.setPrototypeOf((_defineProperty(i = {
  get stream() {
    return this[_];
  },
  next: function next() {
    var e = this;
    var n = this[o];
    if (n !== null) {
      return Promise.reject(n);
    }
    if (this[l]) {
      return Promise.resolve(createIterResult(undefined, true));
    }
    if (this[_].destroyed) {
      return new Promise(function (n, i) {
        t.nextTick(function () {
          if (e[o]) {
            i(e[o]);
          } else {
            n(createIterResult(undefined, true));
          }
        });
      });
    }
    var i;
    var a = this[u];
    if (a) {
      i = new Promise(function wrapForNext(e, t) {
        return function (n, i) {
          e.then(function () {
            if (t[l]) {
              n(createIterResult(undefined, true));
            } else {
              t[c](n, i);
            }
          }, i);
        };
      }(a, this));
    } else {
      var s = this[_].read();
      if (s !== null) {
        return Promise.resolve(createIterResult(s, false));
      }
      i = new Promise(this[c]);
    }
    this[u] = i;
    return i;
  }
}, Symbol.asyncIterator, function () {
  return this;
}), _defineProperty(i, "return", function _return() {
  var e = this;
  return new Promise(function (t, n) {
    e[_].destroy(null, function (e) {
      if (e) {
        n(e);
      } else {
        t(createIterResult(undefined, true));
      }
    });
  });
}), i), d);
module.exports = function createReadableStreamAsyncIterator(e) {
  var n;
  var i = Object.create(m, (_defineProperty(n = {}, _, {
    value: e,
    writable: true
  }), _defineProperty(n, s, {
    value: null,
    writable: true
  }), _defineProperty(n, r, {
    value: null,
    writable: true
  }), _defineProperty(n, o, {
    value: null,
    writable: true
  }), _defineProperty(n, l, {
    value: e._readableState.endEmitted,
    writable: true
  }), _defineProperty(n, c, {
    value: function value(e, t) {
      var n = i[_].read();
      if (n) {
        i[u] = null;
        i[s] = null;
        i[r] = null;
        e(createIterResult(n, false));
      } else {
        i[s] = e;
        i[r] = t;
      }
    },
    writable: true
  }), n));
  i[u] = null;
  a(e, function (e) {
    if (e && e.code !== "ERR_STREAM_PREMATURE_CLOSE") {
      var t = i[r];
      if (t !== null) {
        i[u] = null;
        i[s] = null;
        i[r] = null;
        t(e);
      }
      i[o] = e;
      return;
    }
    var n = i[s];
    if (n !== null) {
      i[u] = null;
      i[s] = null;
      i[r] = null;
      n(createIterResult(undefined, true));
    }
    i[l] = true;
  });
  e.on("readable", function onReadable(e) {
    t.nextTick(readAndResolve, e);
  }.bind(null, i));
  return i;
};