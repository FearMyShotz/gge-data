var n = require("./1289.js");
function CancelToken(e) {
  if (typeof e != "function") {
    throw new TypeError("executor must be a function.");
  }
  var t;
  this.promise = new Promise(function promiseExecutor(e) {
    t = e;
  });
  var i = this;
  e(function cancel(e) {
    if (!i.reason) {
      i.reason = new n(e);
      t(i.reason);
    }
  });
}
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
CancelToken.source = function source() {
  var e;
  return {
    token: new CancelToken(function executor(t) {
      e = t;
    }),
    cancel: e
  };
};
module.exports = CancelToken;