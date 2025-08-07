var i;
var a;
var s;
/*!
 * CLDR JavaScript Library v0.5.4 2020-10-22T15:56Z MIT license © Rafael Xavier
 * http://git.io/h4lmVg
 */
a = [require("./42.js")];
if ((s = typeof (i = function (e) {
  var t;
  var n;
  var i;
  var a = e._pathNormalize;
  var s = e._validatePresence;
  var r = e._validateType;
  function o(e, t) {
    r(e, t, e === undefined || typeof e == "function", "Function");
  }
  var l = new (t = function () {
    function EventEmitter() {}
    var e = EventEmitter.prototype;
    var t = {};
    function indexOfListener(e, t) {
      for (var n = e.length; n--;) {
        if (e[n].listener === t) {
          return n;
        }
      }
      return -1;
    }
    function alias(e) {
      return function aliasClosure() {
        return this[e].apply(this, arguments);
      };
    }
    e.getListeners = function getListeners(e) {
      var t;
      var n;
      var i = this._getEvents();
      if (e instanceof RegExp) {
        t = {};
        for (n in i) {
          if (i.hasOwnProperty(n) && e.test(n)) {
            t[n] = i[n];
          }
        }
      } else {
        t = i[e] ||= [];
      }
      return t;
    };
    e.flattenListeners = function flattenListeners(e) {
      var t;
      var n = [];
      for (t = 0; t < e.length; t += 1) {
        n.push(e[t].listener);
      }
      return n;
    };
    e.getListenersAsObject = function getListenersAsObject(e) {
      var t;
      var n = this.getListeners(e);
      if (n instanceof Array) {
        (t = {})[e] = n;
      }
      return t || n;
    };
    e.addListener = function addListener(e, t) {
      var n;
      var i = this.getListenersAsObject(e);
      var a = typeof t == "object";
      for (n in i) {
        if (i.hasOwnProperty(n) && indexOfListener(i[n], t) === -1) {
          i[n].push(a ? t : {
            listener: t,
            once: false
          });
        }
      }
      return this;
    };
    e.on = alias("addListener");
    e.addOnceListener = function addOnceListener(e, t) {
      return this.addListener(e, {
        listener: t,
        once: true
      });
    };
    e.once = alias("addOnceListener");
    e.defineEvent = function defineEvent(e) {
      this.getListeners(e);
      return this;
    };
    e.defineEvents = function defineEvents(e) {
      for (var t = 0; t < e.length; t += 1) {
        this.defineEvent(e[t]);
      }
      return this;
    };
    e.removeListener = function removeListener(e, t) {
      var n;
      var i;
      var a = this.getListenersAsObject(e);
      for (i in a) {
        if (a.hasOwnProperty(i) && (n = indexOfListener(a[i], t)) !== -1) {
          a[i].splice(n, 1);
        }
      }
      return this;
    };
    e.off = alias("removeListener");
    e.addListeners = function addListeners(e, t) {
      return this.manipulateListeners(false, e, t);
    };
    e.removeListeners = function removeListeners(e, t) {
      return this.manipulateListeners(true, e, t);
    };
    e.manipulateListeners = function manipulateListeners(e, t, n) {
      var i;
      var a;
      var s = e ? this.removeListener : this.addListener;
      var r = e ? this.removeListeners : this.addListeners;
      if (typeof t != "object" || t instanceof RegExp) {
        for (i = n.length; i--;) {
          s.call(this, t, n[i]);
        }
      } else {
        for (i in t) {
          if (t.hasOwnProperty(i) && (a = t[i])) {
            if (typeof a == "function") {
              s.call(this, i, a);
            } else {
              r.call(this, i, a);
            }
          }
        }
      }
      return this;
    };
    e.removeEvent = function removeEvent(e) {
      var t;
      var n = typeof e;
      var i = this._getEvents();
      if (n === "string") {
        delete i[e];
      } else if (e instanceof RegExp) {
        for (t in i) {
          if (i.hasOwnProperty(t) && e.test(t)) {
            delete i[t];
          }
        }
      } else {
        delete this._events;
      }
      return this;
    };
    e.removeAllListeners = alias("removeEvent");
    e.emitEvent = function emitEvent(e, t) {
      var n;
      var i;
      var a;
      var s = this.getListenersAsObject(e);
      for (a in s) {
        if (s.hasOwnProperty(a)) {
          for (i = s[a].length; i--;) {
            if ((n = s[a][i]).once === true) {
              this.removeListener(e, n.listener);
            }
            if (n.listener.apply(this, t || []) === this._getOnceReturnValue()) {
              this.removeListener(e, n.listener);
            }
          }
        }
      }
      return this;
    };
    e.trigger = alias("emitEvent");
    e.emit = function emit(e) {
      var t = Array.prototype.slice.call(arguments, 1);
      return this.emitEvent(e, t);
    };
    e.setOnceReturnValue = function setOnceReturnValue(e) {
      this._onceReturnValue = e;
      return this;
    };
    e._getOnceReturnValue = function _getOnceReturnValue() {
      return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
    };
    e._getEvents = function _getEvents() {
      return this._events ||= {};
    };
    EventEmitter.noConflict = function noConflict() {
      t.EventEmitter = originalGlobalValue;
      return EventEmitter;
    };
    return EventEmitter;
  }())();
  /*!
   * EventEmitter v4.2.7 - git.io/ee
   * Oliver Caldwell
   * MIT license
   * @preserve
   */
  function validateThenCall(e, t) {
    return function (n, i) {
      s(n, "event");
      (function validateTypeEvent(e, t) {
        r(e, t, typeof e == "string" || e instanceof RegExp, "String or RegExp");
      })(n, "event");
      s(i, "listener");
      o(i, "listener");
      return t[e].apply(t, arguments);
    };
  }
  function off(e) {
    return validateThenCall("off", e);
  }
  function on(e) {
    return validateThenCall("on", e);
  }
  function once(e) {
    return validateThenCall("once", e);
  }
  function getOverload() {
    n = e.prototype.get;
    e.prototype.get = function (e) {
      var t = n.apply(this, arguments);
      e = a(e, this.attributes).join("/");
      l.trigger("get", [e, t]);
      this.ee.trigger("get", [e, t]);
      return t;
    };
  }
  e.off = off(l);
  e.on = on(l);
  e.once = once(l);
  i = e.prototype.init;
  e.prototype.init = function () {
    var e;
    this.ee = e = new t();
    this.off = off(e);
    this.on = on(e);
    this.once = once(e);
    i.apply(this, arguments);
  };
  e._eventInit = getOverload;
  getOverload();
  return e;
}) == "function" ? i.apply(exports, a) : i) !== undefined) {
  module.exports = s;
}