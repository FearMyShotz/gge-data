module.exports = Service;
var i = require("./53.js");
function Service(e, t, n) {
  if (typeof e != "function") {
    throw TypeError("rpcImpl must be a function");
  }
  i.EventEmitter.call(this);
  this.rpcImpl = e;
  this.requestDelimited = Boolean(t);
  this.responseDelimited = Boolean(n);
}
(Service.prototype = Object.create(i.EventEmitter.prototype)).constructor = Service;
Service.prototype.rpcCall = function rpcCall(e, t, n, a, s) {
  if (!a) {
    throw TypeError("request must be specified");
  }
  var r = this;
  if (!s) {
    return i.asPromise(rpcCall, r, e, t, n, a);
  }
  if (r.rpcImpl) {
    try {
      return r.rpcImpl(e, t[r.requestDelimited ? "encodeDelimited" : "encode"](a).finish(), function rpcCallback(t, i) {
        if (t) {
          r.emit("error", t, e);
          return s(t);
        }
        if (i !== null) {
          if (!(i instanceof n)) {
            try {
              i = n[r.responseDelimited ? "decodeDelimited" : "decode"](i);
            } catch (t) {
              r.emit("error", t, e);
              return s(t);
            }
          }
          r.emit("data", i, e);
          return s(null, i);
        }
        r.end(true);
      });
    } catch (t) {
      r.emit("error", t, e);
      setTimeout(function () {
        s(t);
      }, 0);
      return;
    }
  } else {
    setTimeout(function () {
      s(Error("already ended"));
    }, 0);
  }
};
Service.prototype.end = function end(e) {
  if (this.rpcImpl) {
    if (!e) {
      this.rpcImpl(null, null, null);
    }
    this.rpcImpl = null;
    this.emit("end").off();
  }
  return this;
};