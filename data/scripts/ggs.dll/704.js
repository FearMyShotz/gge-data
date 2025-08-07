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
  function DeluxeSignal(t = null) {
    var n = [];
    for (var i = 1; i < arguments.length; i++) {
      n[i - 1] = arguments[i];
    }
    var a = this;
    n = n.length == 1 && n[0] instanceof Array ? n[0] : n;
    (a = e.call(this, n) || this)._target = t;
    return a;
  }
  a(DeluxeSignal, e);
  Object.defineProperty(DeluxeSignal.prototype, "target", {
    get: function () {
      return this._target;
    },
    set: function (e) {
      if (e != this._target) {
        this.removeAll();
        this._target = e;
      }
    },
    enumerable: true,
    configurable: true
  });
  DeluxeSignal.prototype.dispatch = function () {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    var n = this._valueClasses.length;
    var i = e.length;
    if (i < n) {
      throw new Error("Incorrect number of arguments. Expected at least " + n + " but received " + i + ".");
    }
    for (var a = 0; a < n; a++) {
      if (e[a] !== null && e[a].constructor !== this._valueClasses[a]) {
        throw new Error("Value object <" + e[a] + "> is not an instance of <" + this._valueClasses[a] + ">.");
      }
    }
    var s = e[0];
    if (s) {
      if (s.target) {
        s = s.clone();
        e[0] = s;
      }
      s.target = this.target;
      s.currentTarget = this.target;
      s.signal = this;
    }
    for (var r = this.slots; r.nonEmpty;) {
      r.head.execute(e);
      r = r.tail;
    }
    if (s && s.bubbles) {
      for (var o = this.target; o && o.hasOwnProperty("parent") && (o = o.parent) && (o.onEventBubbled === undefined || (s.currentTarget = o, !o.onEventBubbled(s))););
    }
  };
  return DeluxeSignal;
}(require("./270.js").PrioritySignal);
exports.DeluxeSignal = s;