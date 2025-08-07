Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./272.js");
var a = require("./116.js");
var s = function () {
  function OnceSignal() {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    this.slots = i.SlotList.NIL;
    this.valueClasses = e.length == 1 && e[0] instanceof Array ? e[0] : e;
  }
  Object.defineProperty(OnceSignal.prototype, "valueClasses", {
    get: function () {
      return this._valueClasses;
    },
    set: function (e) {
      this._valueClasses = e ? e.slice() : [];
      for (var t = this._valueClasses.length; t--;) {
        if (!(this._valueClasses[t] instanceof Object)) {
          throw new Error("Invalid valueClasses argument: item at index " + t + " should be a Class but was:<" + this._valueClasses[t] + ">." + this._valueClasses[t]);
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OnceSignal.prototype, "numListeners", {
    get: function () {
      return this.slots.length;
    },
    enumerable: true,
    configurable: true
  });
  OnceSignal.prototype.addOnce = function (e) {
    return this.registerListener(e, true);
  };
  OnceSignal.prototype.remove = function (e) {
    var t = this.slots.find(e);
    if (t) {
      this.slots = this.slots.filterNot(e);
      return t;
    } else {
      return null;
    }
  };
  OnceSignal.prototype.removeAll = function () {
    this.slots = i.SlotList.NIL;
  };
  OnceSignal.prototype.dispatch = function () {
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
      if (e[a] !== null && !(e[a] instanceof this._valueClasses[a]) && e[a].constructor !== this._valueClasses[a]) {
        throw new Error("Value object <" + e[a] + "> is not an instance of <" + this._valueClasses[a] + ">.");
      }
    }
    var s = this.slots;
    if (s.nonEmpty) {
      while (s.nonEmpty) {
        s.head.execute(e);
        s = s.tail;
      }
    }
  };
  OnceSignal.prototype.registerListener = function (e, t = false) {
    if (this.registrationPossible(e, t)) {
      var n = new a.Slot(e, this, t);
      this.slots = this.slots.prepend(n);
      return n;
    }
    return this.slots.find(e);
  };
  OnceSignal.prototype.registrationPossible = function (e, t) {
    if (!this.slots.nonEmpty) {
      return true;
    }
    var n = this.slots.find(e);
    if (!n) {
      return true;
    }
    if (n.once != t) {
      throw new Error("You cannot addOnce() then add() the same listener without removing the relationship first.");
    }
    return false;
  };
  return OnceSignal;
}();
exports.OnceSignal = s;