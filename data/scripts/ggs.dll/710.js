Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./116.js");
var a = function () {
  function MonoSignal() {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    this.valueClasses = e.length == 1 && e[0] instanceof Array ? e[0] : e;
  }
  Object.defineProperty(MonoSignal.prototype, "valueClasses", {
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
  Object.defineProperty(MonoSignal.prototype, "numListeners", {
    get: function () {
      if (this.slot) {
        return 1;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  MonoSignal.prototype.add = function (e) {
    return this.registerListener(e);
  };
  MonoSignal.prototype.addOnce = function (e) {
    return this.registerListener(e, true);
  };
  MonoSignal.prototype.remove = function (e) {
    if (this.slot && this.slot.listener == e) {
      var t = this.slot;
      this.slot = null;
      return t;
    }
    return null;
  };
  MonoSignal.prototype.removeAll = function () {
    if (this.slot) {
      this.slot.remove();
    }
  };
  MonoSignal.prototype.dispatch = function () {
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
    if (this.slot) {
      this.slot.execute(e);
    }
  };
  MonoSignal.prototype.registerListener = function (e, t = false) {
    if (this.slot) {
      throw new Error("You cannot add or addOnce with a listener already added, remove the current listener first.");
    }
    return this.slot = new i.Slot(e, this, t);
  };
  return MonoSignal;
}();
exports.MonoSignal = a;