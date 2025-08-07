var i;
var a = this && this.__extends || (i = Object.setPrototypeOf || {
  __proto__: []
} instanceof Array && function (e, t) {
  e.__proto__ = t;
} || function (e, t) {
  for (var n in t) {
    if (t.hasOwnProperty(n)) {
      e[n] = t[n];
    }
  }
}, function (e, t) {
  function __() {
    this.constructor = e;
  }
  i(e, t);
  e.prototype = t === null ? Object.create(t) : (__.prototype = t.prototype, new __());
});
Object.defineProperty(exports, "__esModule", {
  value: true
});
var s = function (e) {
  function Signal() {
    var t = [];
    for (var n = 0; n < arguments.length; n++) {
      t[n] = arguments[n];
    }
    t = t.length == 1 && t[0] instanceof Array ? t[0] : t;
    return e.call(this, t) || this;
  }
  a(Signal, e);
  Signal.prototype.add = function (e) {
    return this.registerListener(e);
  };
  return Signal;
}(require("./151.js").OnceSignal);
exports.Signal = s;