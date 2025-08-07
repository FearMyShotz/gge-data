var i = require("./75.js").codes.ERR_STREAM_PREMATURE_CLOSE;
function noop() {}
module.exports = function eos(e, t, n) {
  if (typeof t == "function") {
    return eos(e, null, t);
  }
  t ||= {};
  n = function once(e) {
    var t = false;
    return function () {
      if (!t) {
        t = true;
        for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) {
          i[a] = arguments[a];
        }
        e.apply(this, i);
      }
    };
  }(n || noop);
  var a = t.readable || t.readable !== false && e.readable;
  var s = t.writable || t.writable !== false && e.writable;
  var r = function onlegacyfinish() {
    if (!e.writable) {
      l();
    }
  };
  var o = e._writableState && e._writableState.finished;
  var l = function onfinish() {
    s = false;
    o = true;
    if (!a) {
      n.call(e);
    }
  };
  var u = e._readableState && e._readableState.endEmitted;
  var c = function onend() {
    a = false;
    u = true;
    if (!s) {
      n.call(e);
    }
  };
  var _ = function onerror(t) {
    n.call(e, t);
  };
  var d = function onclose() {
    var t;
    if (a && !u) {
      if (!e._readableState || !e._readableState.ended) {
        t = new i();
      }
      return n.call(e, t);
    } else if (s && !o) {
      if (!e._writableState || !e._writableState.ended) {
        t = new i();
      }
      return n.call(e, t);
    } else {
      return undefined;
    }
  };
  var m = function onrequest() {
    e.req.on("finish", l);
  };
  if (function isRequest(e) {
    return e.setHeader && typeof e.abort == "function";
  }(e)) {
    e.on("complete", l);
    e.on("abort", d);
    if (e.req) {
      m();
    } else {
      e.on("request", m);
    }
  } else if (s && !e._writableState) {
    e.on("end", r);
    e.on("close", r);
  }
  e.on("end", c);
  e.on("finish", l);
  if (t.error !== false) {
    e.on("error", _);
  }
  e.on("close", d);
  return function () {
    e.removeListener("complete", l);
    e.removeListener("abort", d);
    e.removeListener("request", m);
    if (e.req) {
      e.req.removeListener("finish", l);
    }
    e.removeListener("end", r);
    e.removeListener("close", r);
    e.removeListener("finish", l);
    e.removeListener("end", c);
    e.removeListener("error", _);
    e.removeListener("close", d);
  };
};