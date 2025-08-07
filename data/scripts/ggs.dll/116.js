Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function Slot(e, t, n = false, i = 0) {
    this._enabled = true;
    this._once = false;
    this._priority = 0;
    this._listener = e;
    this._once = n;
    this._signal = t;
    this._priority = i;
    this.verifyListener(e);
  }
  Slot.prototype.execute0 = function () {
    if (this._enabled) {
      if (this._once) {
        this.remove();
      }
      if (this._params && this._params.length) {
        this._listener.apply(null, this._params);
      } else {
        this._listener();
      }
    }
  };
  Slot.prototype.execute1 = function (e) {
    if (this._enabled) {
      if (this._once) {
        this.remove();
      }
      if (this._params && this._params.length) {
        this._listener.apply(null, [e].concat(this._params));
      } else {
        this._listener(e);
      }
    }
  };
  Slot.prototype.execute = function (e) {
    if (this._enabled) {
      if (this._once) {
        this.remove();
      }
      if (this._params && this._params.length) {
        e = e.concat(this._params);
      }
      var t = e.length;
      if (t == 0) {
        this._listener();
      } else if (t == 1) {
        this._listener(e[0]);
      } else if (t == 2) {
        this._listener(e[0], e[1]);
      } else if (t == 3) {
        this._listener(e[0], e[1], e[2]);
      } else {
        this._listener.apply(null, e);
      }
    }
  };
  Object.defineProperty(Slot.prototype, "listener", {
    get: function () {
      return this._listener;
    },
    set: function (e) {
      if (e == null) {
        throw new Error("Given listener is null.\nDid you want to set enabled to false instead?");
      }
      this.verifyListener(e);
      this._listener = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Slot.prototype, "once", {
    get: function () {
      return this._once;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Slot.prototype, "priority", {
    get: function () {
      return this._priority;
    },
    enumerable: true,
    configurable: true
  });
  Slot.prototype.toString = function () {
    return "[Slot listener: " + this._listener + ", once: " + this._once + ", priority: " + this._priority + ", enabled: " + this._enabled + "]";
  };
  Object.defineProperty(Slot.prototype, "enabled", {
    get: function () {
      return this._enabled;
    },
    set: function (e) {
      this._enabled = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Slot.prototype, "params", {
    get: function () {
      return this._params;
    },
    set: function (e) {
      this._params = e;
    },
    enumerable: true,
    configurable: true
  });
  Slot.prototype.remove = function () {
    this._signal.remove(this._listener);
  };
  Slot.prototype.verifyListener = function (e) {
    if (e == null) {
      throw new Error("Given listener is null.");
    }
    if (this._signal == null) {
      throw new Error("Internal signal reference has not been set yet.");
    }
  };
  return Slot;
}();
exports.Slot = i;