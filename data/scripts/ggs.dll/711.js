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
  function Promise() {
    return e !== null && e.apply(this, arguments) || this;
  }
  a(Promise, e);
  Promise.prototype.addOnce = function (t) {
    var n = e.prototype.addOnce.call(this, t);
    if (this.isDispatched) {
      n.execute(this.valueObjects);
      n.remove();
    }
    return n;
  };
  Promise.prototype.dispatch = function () {
    var t = [];
    for (var n = 0; n < arguments.length; n++) {
      t[n] = arguments[n];
    }
    if (this.isDispatched) {
      throw new Error("You cannot dispatch() a Promise more than once");
    }
    this.isDispatched = true;
    this.valueObjects = t;
    e.prototype.dispatch.apply(this, t);
  };
  return Promise;
}(require("./151.js").OnceSignal);
exports.Promise = s;