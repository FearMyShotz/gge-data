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
var s = require("./271.js");
var r = require("./116.js");
var o = function (e) {
  function PrioritySignal() {
    var t = [];
    for (var n = 0; n < arguments.length; n++) {
      t[n] = arguments[n];
    }
    t = t.length == 1 && t[0] instanceof Array ? t[0] : t;
    return e.call(this, t) || this;
  }
  a(PrioritySignal, e);
  PrioritySignal.prototype.addWithPriority = function (e, t = 0) {
    return this.registerListenerWithPriority(e, false, t);
  };
  PrioritySignal.prototype.addOnceWithPriority = function (e, t = 0) {
    return this.registerListenerWithPriority(e, true, t);
  };
  PrioritySignal.prototype.registerListener = function (e, t = false) {
    return this.registerListenerWithPriority(e, t);
  };
  PrioritySignal.prototype.registerListenerWithPriority = function (e, t = false, n = 0) {
    if (this.registrationPossible(e, t)) {
      var i = new r.Slot(e, this, t, n);
      this.slots = this.slots.insertWithPriority(i);
      return i;
    }
    return this.slots.find(e);
  };
  return PrioritySignal;
}(s.Signal);
exports.PrioritySignal = o;