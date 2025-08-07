function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
function isFunction(e) {
  return typeof e == "function";
}
function isObject(e) {
  return typeof e == "object" && e !== null;
}
function isUndefined(e) {
  return e === undefined;
}
module.exports = EventEmitter;
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;
EventEmitter.defaultMaxListeners = 10;
EventEmitter.prototype.setMaxListeners = function (e) {
  if (!function isNumber(e) {
    return typeof e == "number";
  }(e) || e < 0 || isNaN(e)) {
    throw TypeError("n must be a positive number");
  }
  this._maxListeners = e;
  return this;
};
EventEmitter.prototype.emit = function (e) {
  var t;
  var n;
  var i;
  var a;
  var s;
  var r;
  this._events ||= {};
  if (e === "error" && (!this._events.error || isObject(this._events.error) && !this._events.error.length)) {
    if ((t = arguments[1]) instanceof Error) {
      throw t;
    }
    var o = new Error("Uncaught, unspecified \"error\" event. (" + t + ")");
    o.context = t;
    throw o;
  }
  if (isUndefined(n = this._events[e])) {
    return false;
  }
  if (isFunction(n)) {
    switch (arguments.length) {
      case 1:
        n.call(this);
        break;
      case 2:
        n.call(this, arguments[1]);
        break;
      case 3:
        n.call(this, arguments[1], arguments[2]);
        break;
      default:
        a = Array.prototype.slice.call(arguments, 1);
        n.apply(this, a);
    }
  } else if (isObject(n)) {
    a = Array.prototype.slice.call(arguments, 1);
    i = (r = n.slice()).length;
    s = 0;
    for (; s < i; s++) {
      r[s].apply(this, a);
    }
  }
  return true;
};
EventEmitter.prototype.addListener = function (e, t) {
  var n;
  if (!isFunction(t)) {
    throw TypeError("listener must be a function");
  }
  this._events ||= {};
  if (this._events.newListener) {
    this.emit("newListener", e, isFunction(t.listener) ? t.listener : t);
  }
  if (this._events[e]) {
    if (isObject(this._events[e])) {
      this._events[e].push(t);
    } else {
      this._events[e] = [this._events[e], t];
    }
  } else {
    this._events[e] = t;
  }
  if (isObject(this._events[e]) && !this._events[e].warned && (n = isUndefined(this._maxListeners) ? EventEmitter.defaultMaxListeners : this._maxListeners) && n > 0 && this._events[e].length > n) {
    this._events[e].warned = true;
    console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length);
    if (typeof console.trace == "function") {
      console.trace();
    }
  }
  return this;
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.once = function (e, t) {
  if (!isFunction(t)) {
    throw TypeError("listener must be a function");
  }
  var n = false;
  function g() {
    this.removeListener(e, g);
    if (!n) {
      n = true;
      t.apply(this, arguments);
    }
  }
  g.listener = t;
  this.on(e, g);
  return this;
};
EventEmitter.prototype.removeListener = function (e, t) {
  var n;
  var i;
  var a;
  var s;
  if (!isFunction(t)) {
    throw TypeError("listener must be a function");
  }
  if (!this._events || !this._events[e]) {
    return this;
  }
  a = (n = this._events[e]).length;
  i = -1;
  if (n === t || isFunction(n.listener) && n.listener === t) {
    delete this._events[e];
    if (this._events.removeListener) {
      this.emit("removeListener", e, t);
    }
  } else if (isObject(n)) {
    for (s = a; s-- > 0;) {
      if (n[s] === t || n[s].listener && n[s].listener === t) {
        i = s;
        break;
      }
    }
    if (i < 0) {
      return this;
    }
    if (n.length === 1) {
      n.length = 0;
      delete this._events[e];
    } else {
      n.splice(i, 1);
    }
    if (this._events.removeListener) {
      this.emit("removeListener", e, t);
    }
  }
  return this;
};
EventEmitter.prototype.removeAllListeners = function (e) {
  var t;
  var n;
  if (!this._events) {
    return this;
  }
  if (!this._events.removeListener) {
    if (arguments.length === 0) {
      this._events = {};
    } else if (this._events[e]) {
      delete this._events[e];
    }
    return this;
  }
  if (arguments.length === 0) {
    for (t in this._events) {
      if (t !== "removeListener") {
        this.removeAllListeners(t);
      }
    }
    this.removeAllListeners("removeListener");
    this._events = {};
    return this;
  }
  if (isFunction(n = this._events[e])) {
    this.removeListener(e, n);
  } else if (n) {
    while (n.length) {
      this.removeListener(e, n[n.length - 1]);
    }
  }
  delete this._events[e];
  return this;
};
EventEmitter.prototype.listeners = function (e) {
  if (this._events && this._events[e]) {
    if (isFunction(this._events[e])) {
      return [this._events[e]];
    } else {
      return this._events[e].slice();
    }
  } else {
    return [];
  }
};
EventEmitter.prototype.listenerCount = function (e) {
  if (this._events) {
    var t = this._events[e];
    if (isFunction(t)) {
      return 1;
    }
    if (t) {
      return t.length;
    }
  }
  return 0;
};
EventEmitter.listenerCount = function (e, t) {
  return e.listenerCount(t);
};