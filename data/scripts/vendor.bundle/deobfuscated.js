function EventHandler() {
  return {
    addEventListener: function addEventListener(t, e, i) {
      if (t.addEventListener) {
        t.addEventListener(e, i);
      } else {
        if (/domcontentloaded/i.test(e)) {
          e = "load";
        }
        t.attachEvent("on" + e, i);
      }
    }
  };
}
function MessageHandler(t, e, i) {
  var s = 0;
  var r = {};
  return {
    register: function register() {
      console.log("MessageHandler::register");
      t.addEventListener(window, "message", function (t) {
        if (t.data.type != "webpackOk" && t.data.type != "webpackInvalid" && t.data.name !== undefined) {
          try {
            var e = function getDataFrom(t) {
              var e = t.data;
              if (e.constructor === "test".constructor) {
                try {
                  e = JSON.parse(e);
                } catch (t) {}
              }
              return e;
            }(t);
            if (e.constructor !== {}.constructor) {
              return;
            }
            var i = function execute(t) {
              var e = window[t.name] || r[t.name];
              if (e) {
                if (t.arguments || t.arguments === false) {
                  if (Array.isArray(t.arguments) && e.length === t.arguments.length) {
                    return e.apply(null, t.arguments);
                  } else {
                    return e(t.arguments);
                  }
                } else {
                  return e();
                }
              }
              console.error("PageIntegration method not found: " + t.name);
            }(e);
            if (!e.callback) {
              return;
            }
            Promise.resolve(i).then(function (i) {
              var s = {
                name: e.callback,
                type: "gameClient",
                arguments: i
              };
              t.source.postMessage(s, t.origin);
            }).catch(function (t) {
              console.error("something went wrong while sending back the callback", t);
            });
          } catch (t) {
            console.warn("MessageHandler:: on message caught error: ", t);
          }
        }
      });
    },
    addEvent: function addEvent(t, e) {
      r[t] = e;
    },
    sendMessage: function sendMessage(t) {
      var e = Array.prototype.slice.call(arguments, sendMessage.length);
      const r = e[e.length - 1] instanceof Function ? e.pop() : null;
      var n = {
        name: t,
        type: "gameClient",
        arguments: e
      };
      if (r) {
        var a = "callbackOf_" + t + "_" + ++s;
        n.callback = a;
        (function registerCallback(t, e) {
          window[e] = function (i) {
            console.log("executing callback " + e + " with response " + i);
            t(i);
            try {
              delete window[e];
            } catch (t) {}
            window[e] = null;
          };
        })(r, a);
      }
      i.postMessage(n, "*");
    }
  };
}
/*!
 * CreateJS
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 * Copyright (c) 2010 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
this.createjs = this.createjs || {};
createjs.extend = function (t, e) {
  'use strict';

  function o() {
    this.constructor = t;
  }
  o.prototype = e.prototype;
  return t.prototype = new o();
};
createjs.promote = function (t, e) {
  'use strict';

  var i = t.prototype;
  var s = Object.getPrototypeOf && Object.getPrototypeOf(i) || i.__proto__;
  if (s) {
    i[(e += "_") + "constructor"] = s.constructor;
    for (var r in s) {
      if (i.hasOwnProperty(r) && typeof s[r] == "function") {
        i[e + r] = s[r];
      }
    }
  }
  return t;
};
createjs.indexOf = function (t, e) {
  'use strict';

  for (var i = 0, s = t.length; i < s; i++) {
    if (e === t[i]) {
      return i;
    }
  }
  return -1;
};
(function () {
  'use strict';

  function Event(t, e, i) {
    this.type = t;
    this.target = null;
    this.currentTarget = null;
    this.eventPhase = 0;
    this.bubbles = !!e;
    this.cancelable = !!i;
    this.timeStamp = new Date().getTime();
    this.defaultPrevented = false;
    this.propagationStopped = false;
    this.immediatePropagationStopped = false;
    this.removed = false;
  }
  var t = Event.prototype;
  t.preventDefault = function () {
    this.defaultPrevented = this.cancelable && true;
  };
  t.stopPropagation = function () {
    this.propagationStopped = true;
  };
  t.stopImmediatePropagation = function () {
    this.immediatePropagationStopped = this.propagationStopped = true;
  };
  t.remove = function () {
    this.removed = true;
  };
  t.clone = function () {
    return new Event(this.type, this.bubbles, this.cancelable);
  };
  t.set = function (t) {
    for (var e in t) {
      this[e] = t[e];
    }
    return this;
  };
  t.toString = function () {
    return "[Event (type=" + this.type + ")]";
  };
  createjs.Event = Event;
})();
(function () {
  'use strict';

  function EventDispatcher() {
    this._listeners = null;
    this._captureListeners = null;
  }
  var t = EventDispatcher.prototype;
  EventDispatcher.initialize = function (e) {
    e.addEventListener = t.addEventListener;
    e.on = t.on;
    e.removeEventListener = e.off = t.removeEventListener;
    e.removeAllEventListeners = t.removeAllEventListeners;
    e.hasEventListener = t.hasEventListener;
    e.dispatchEvent = t.dispatchEvent;
    e._dispatchEvent = t._dispatchEvent;
    e.willTrigger = t.willTrigger;
  };
  t.addEventListener = function (t, e, i) {
    var s;
    var r = (s = i ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {})[t];
    if (r) {
      this.removeEventListener(t, e, i);
    }
    if (r = s[t]) {
      r.push(e);
    } else {
      s[t] = [e];
    }
    return e;
  };
  t.on = function (t, e, i, s, r, n) {
    if (e.handleEvent) {
      i = i || e;
      e = e.handleEvent;
    }
    i = i || this;
    return this.addEventListener(t, function (t) {
      e.call(i, t, r);
      if (s) {
        t.remove();
      }
    }, n);
  };
  t.removeEventListener = function (t, e, i) {
    var s = i ? this._captureListeners : this._listeners;
    if (s) {
      var r = s[t];
      if (r) {
        for (var n = 0, a = r.length; n < a; n++) {
          if (r[n] == e) {
            if (a == 1) {
              delete s[t];
            } else {
              r.splice(n, 1);
            }
            break;
          }
        }
      }
    }
  };
  t.off = t.removeEventListener;
  t.removeAllEventListeners = function (t) {
    if (t) {
      if (this._listeners) {
        delete this._listeners[t];
      }
      if (this._captureListeners) {
        delete this._captureListeners[t];
      }
    } else {
      this._listeners = this._captureListeners = null;
    }
  };
  t.dispatchEvent = function (t, e, i) {
    if (typeof t == "string") {
      var s = this._listeners;
      if (!e && (!s || !s[t])) {
        return true;
      }
      t = new createjs.Event(t, e, i);
    } else if (t.target && t.clone) {
      t = t.clone();
    }
    try {
      t.target = this;
    } catch (t) {}
    if (t.bubbles && this.parent) {
      for (var r = this, n = [r]; r.parent;) {
        n.push(r = r.parent);
      }
      var a;
      var o = n.length;
      for (a = o - 1; a >= 0 && !t.propagationStopped; a--) {
        n[a]._dispatchEvent(t, 1 + (a == 0));
      }
      for (a = 1; a < o && !t.propagationStopped; a++) {
        n[a]._dispatchEvent(t, 3);
      }
    } else {
      this._dispatchEvent(t, 2);
    }
    return !t.defaultPrevented;
  };
  t.hasEventListener = function (t) {
    var e = this._listeners;
    var i = this._captureListeners;
    return !!e && !!e[t] || !!i && !!i[t];
  };
  t.willTrigger = function (t) {
    for (var e = this; e;) {
      if (e.hasEventListener(t)) {
        return true;
      }
      e = e.parent;
    }
    return false;
  };
  t.toString = function () {
    return "[EventDispatcher]";
  };
  t._dispatchEvent = function (t, e) {
    var i;
    var s = e == 1 ? this._captureListeners : this._listeners;
    if (t && s) {
      var r = s[t.type];
      if (!r || !(i = r.length)) {
        return;
      }
      try {
        t.currentTarget = this;
      } catch (t) {}
      try {
        t.eventPhase = e;
      } catch (t) {}
      t.removed = false;
      r = r.slice();
      for (var n = 0; n < i && !t.immediatePropagationStopped; n++) {
        var a = r[n];
        if (a.handleEvent) {
          a.handleEvent(t);
        } else {
          a(t);
        }
        if (t.removed) {
          this.off(t.type, a, e == 1);
          t.removed = false;
        }
      }
    }
  };
  createjs.EventDispatcher = EventDispatcher;
})();
(function () {
  'use strict';

  function Ticker() {
    throw "Ticker cannot be instantiated.";
  }
  Ticker.RAF_SYNCHED = "synched";
  Ticker.RAF = "raf";
  Ticker.TIMEOUT = "timeout";
  Ticker.useRAF = false;
  Ticker.timingMode = null;
  Ticker.maxDelta = 0;
  Ticker.paused = false;
  Ticker.removeEventListener = null;
  Ticker.removeAllEventListeners = null;
  Ticker.dispatchEvent = null;
  Ticker.hasEventListener = null;
  Ticker._listeners = null;
  createjs.EventDispatcher.initialize(Ticker);
  Ticker._addEventListener = Ticker.addEventListener;
  Ticker.addEventListener = function () {
    if (!Ticker._inited) {
      Ticker.init();
    }
    return Ticker._addEventListener.apply(Ticker, arguments);
  };
  Ticker._inited = false;
  Ticker._startTime = 0;
  Ticker._pausedTime = 0;
  Ticker._ticks = 0;
  Ticker._pausedTicks = 0;
  Ticker._interval = 50;
  Ticker._lastTime = 0;
  Ticker._times = null;
  Ticker._tickTimes = null;
  Ticker._timerId = null;
  Ticker._raf = true;
  Ticker.setInterval = function (t) {
    Ticker._interval = t;
    if (Ticker._inited) {
      Ticker._setupTick();
    }
  };
  Ticker.getInterval = function () {
    return Ticker._interval;
  };
  Ticker.setFPS = function (t) {
    Ticker.setInterval(1000 / t);
  };
  Ticker.getFPS = function () {
    return 1000 / Ticker._interval;
  };
  try {
    Object.defineProperties(Ticker, {
      interval: {
        get: Ticker.getInterval,
        set: Ticker.setInterval
      },
      framerate: {
        get: Ticker.getFPS,
        set: Ticker.setFPS
      }
    });
  } catch (t) {
    console.log(t);
  }
  Ticker.init = function () {
    if (!Ticker._inited) {
      Ticker._inited = true;
      Ticker._times = [];
      Ticker._tickTimes = [];
      Ticker._startTime = Ticker._getTime();
      Ticker._times.push(Ticker._lastTime = 0);
      Ticker.interval = Ticker._interval;
    }
  };
  Ticker.reset = function () {
    if (Ticker._raf) {
      var t = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
      if (t) {
        t(Ticker._timerId);
      }
    } else {
      clearTimeout(Ticker._timerId);
    }
    Ticker.removeAllEventListeners("tick");
    Ticker._timerId = Ticker._times = Ticker._tickTimes = null;
    Ticker._startTime = Ticker._lastTime = Ticker._ticks = 0;
    Ticker._inited = false;
  };
  Ticker.getMeasuredTickTime = function (t) {
    var e = 0;
    var i = Ticker._tickTimes;
    if (!i || i.length < 1) {
      return -1;
    }
    t = Math.min(i.length, t || Ticker.getFPS() | 0);
    for (var s = 0; s < t; s++) {
      e += i[s];
    }
    return e / t;
  };
  Ticker.getMeasuredFPS = function (t) {
    var e = Ticker._times;
    if (!e || e.length < 2) {
      return -1;
    } else {
      t = Math.min(e.length - 1, t || Ticker.getFPS() | 0);
      return 1000 / ((e[0] - e[t]) / t);
    }
  };
  Ticker.setPaused = function (t) {
    Ticker.paused = t;
  };
  Ticker.getPaused = function () {
    return Ticker.paused;
  };
  Ticker.getTime = function (t) {
    if (Ticker._startTime) {
      return Ticker._getTime() - (t ? Ticker._pausedTime : 0);
    } else {
      return -1;
    }
  };
  Ticker.getEventTime = function (t) {
    if (Ticker._startTime) {
      return (Ticker._lastTime || Ticker._startTime) - (t ? Ticker._pausedTime : 0);
    } else {
      return -1;
    }
  };
  Ticker.getTicks = function (t) {
    return Ticker._ticks - (t ? Ticker._pausedTicks : 0);
  };
  Ticker._handleSynch = function () {
    Ticker._timerId = null;
    Ticker._setupTick();
    if (Ticker._getTime() - Ticker._lastTime >= (Ticker._interval - 1) * 0.97) {
      Ticker._tick();
    }
  };
  Ticker._handleRAF = function () {
    Ticker._timerId = null;
    Ticker._setupTick();
    Ticker._tick();
  };
  Ticker._handleTimeout = function () {
    Ticker._timerId = null;
    Ticker._setupTick();
    Ticker._tick();
  };
  Ticker._setupTick = function () {
    if (Ticker._timerId == null) {
      var t = Ticker.timingMode || Ticker.useRAF && Ticker.RAF_SYNCHED;
      if (t == Ticker.RAF_SYNCHED || t == Ticker.RAF) {
        var e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
        if (e) {
          Ticker._timerId = e(t == Ticker.RAF ? Ticker._handleRAF : Ticker._handleSynch);
          Ticker._raf = true;
          return;
        }
      }
      Ticker._raf = false;
      Ticker._timerId = setTimeout(Ticker._handleTimeout, Ticker._interval);
    }
  };
  Ticker._tick = function () {
    var t = Ticker.paused;
    var e = Ticker._getTime();
    var i = e - Ticker._lastTime;
    Ticker._lastTime = e;
    Ticker._ticks++;
    if (t) {
      Ticker._pausedTicks++;
      Ticker._pausedTime += i;
    }
    if (Ticker.hasEventListener("tick")) {
      var s = new createjs.Event("tick");
      var r = Ticker.maxDelta;
      s.delta = r && i > r ? r : i;
      s.paused = t;
      s.time = e;
      s.runTime = e - Ticker._pausedTime;
      Ticker.dispatchEvent(s);
    }
    for (Ticker._tickTimes.unshift(Ticker._getTime() - e); Ticker._tickTimes.length > 100;) {
      Ticker._tickTimes.pop();
    }
    for (Ticker._times.unshift(e); Ticker._times.length > 100;) {
      Ticker._times.pop();
    }
  };
  var t = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
  Ticker._getTime = function () {
    return (t && t.call(performance) || new Date().getTime()) - Ticker._startTime;
  };
  createjs.Ticker = Ticker;
})();
(function () {
  'use strict';

  function UID() {
    throw "UID cannot be instantiated";
  }
  UID._nextID = 0;
  UID.get = function () {
    return UID._nextID++;
  };
  createjs.UID = UID;
})();
(function () {
  'use strict';

  function MouseEvent(t, e, i, s, r, n, a, o, h, c, u) {
    this.Event_constructor(t, e, i);
    this.stageX = s;
    this.stageY = r;
    this.rawX = h == null ? s : h;
    this.rawY = c == null ? r : c;
    this.nativeEvent = n;
    this.pointerID = a;
    this.primary = !!o;
    this.relatedTarget = u;
  }
  var t = createjs.extend(MouseEvent, createjs.Event);
  t._get_localX = function () {
    return this.currentTarget.globalToLocal(this.rawX, this.rawY).x;
  };
  t._get_localY = function () {
    return this.currentTarget.globalToLocal(this.rawX, this.rawY).y;
  };
  t._get_isTouch = function () {
    return this.pointerID !== -1;
  };
  try {
    Object.defineProperties(t, {
      localX: {
        get: t._get_localX
      },
      localY: {
        get: t._get_localY
      },
      isTouch: {
        get: t._get_isTouch
      }
    });
  } catch (t) {}
  t.clone = function () {
    return new MouseEvent(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY);
  };
  t.toString = function () {
    return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]";
  };
  createjs.MouseEvent = createjs.promote(MouseEvent, "Event");
})();
(function () {
  'use strict';

  function Matrix2D(t, e, i, s, r, n) {
    this.setValues(t, e, i, s, r, n);
  }
  var t = Matrix2D.prototype;
  Matrix2D.DEG_TO_RAD = Math.PI / 180;
  Matrix2D.identity = null;
  t.setValues = function (t, e, i, s, r, n) {
    this.a = t == null ? 1 : t;
    this.b = e || 0;
    this.c = i || 0;
    this.d = s == null ? 1 : s;
    this.tx = r || 0;
    this.ty = n || 0;
    return this;
  };
  t.append = function (t, e, i, s, r, n) {
    var a = this.a;
    var o = this.b;
    var h = this.c;
    var c = this.d;
    if (t != 1 || e != 0 || i != 0 || s != 1) {
      this.a = a * t + h * e;
      this.b = o * t + c * e;
      this.c = a * i + h * s;
      this.d = o * i + c * s;
    }
    this.tx = a * r + h * n + this.tx;
    this.ty = o * r + c * n + this.ty;
    return this;
  };
  t.prepend = function (t, e, i, s, r, n) {
    var a = this.a;
    var o = this.c;
    var h = this.tx;
    this.a = t * a + i * this.b;
    this.b = e * a + s * this.b;
    this.c = t * o + i * this.d;
    this.d = e * o + s * this.d;
    this.tx = t * h + i * this.ty + r;
    this.ty = e * h + s * this.ty + n;
    return this;
  };
  t.appendMatrix = function (t) {
    return this.append(t.a, t.b, t.c, t.d, t.tx, t.ty);
  };
  t.prependMatrix = function (t) {
    return this.prepend(t.a, t.b, t.c, t.d, t.tx, t.ty);
  };
  t.appendTransform = function (t, e, i, s, r, n, a, o, h) {
    if (r % 360) {
      var c = r * Matrix2D.DEG_TO_RAD;
      var u = Math.cos(c);
      var l = Math.sin(c);
    } else {
      u = 1;
      l = 0;
    }
    if (n || a) {
      n *= Matrix2D.DEG_TO_RAD;
      a *= Matrix2D.DEG_TO_RAD;
      this.append(Math.cos(a), Math.sin(a), -Math.sin(n), Math.cos(n), t, e);
      this.append(u * i, l * i, -l * s, u * s, 0, 0);
    } else {
      this.append(u * i, l * i, -l * s, u * s, t, e);
    }
    if (o || h) {
      this.tx -= o * this.a + h * this.c;
      this.ty -= o * this.b + h * this.d;
    }
    return this;
  };
  t.prependTransform = function (t, e, i, s, r, n, a, o, h) {
    if (r % 360) {
      var c = r * Matrix2D.DEG_TO_RAD;
      var u = Math.cos(c);
      var l = Math.sin(c);
    } else {
      u = 1;
      l = 0;
    }
    if (o || h) {
      this.tx -= o;
      this.ty -= h;
    }
    if (n || a) {
      n *= Matrix2D.DEG_TO_RAD;
      a *= Matrix2D.DEG_TO_RAD;
      this.prepend(u * i, l * i, -l * s, u * s, 0, 0);
      this.prepend(Math.cos(a), Math.sin(a), -Math.sin(n), Math.cos(n), t, e);
    } else {
      this.prepend(u * i, l * i, -l * s, u * s, t, e);
    }
    return this;
  };
  t.rotate = function (t) {
    t *= Matrix2D.DEG_TO_RAD;
    var e = Math.cos(t);
    var i = Math.sin(t);
    var s = this.a;
    var r = this.b;
    this.a = s * e + this.c * i;
    this.b = r * e + this.d * i;
    this.c = -s * i + this.c * e;
    this.d = -r * i + this.d * e;
    return this;
  };
  t.skew = function (t, e) {
    t *= Matrix2D.DEG_TO_RAD;
    e *= Matrix2D.DEG_TO_RAD;
    this.append(Math.cos(e), Math.sin(e), -Math.sin(t), Math.cos(t), 0, 0);
    return this;
  };
  t.scale = function (t, e) {
    this.a *= t;
    this.b *= t;
    this.c *= e;
    this.d *= e;
    return this;
  };
  t.translate = function (t, e) {
    this.tx += this.a * t + this.c * e;
    this.ty += this.b * t + this.d * e;
    return this;
  };
  t.identity = function () {
    this.a = this.d = 1;
    this.b = this.c = this.tx = this.ty = 0;
    return this;
  };
  t.invert = function () {
    var t = this.a;
    var e = this.b;
    var i = this.c;
    var s = this.d;
    var r = this.tx;
    var n = t * s - e * i;
    this.a = s / n;
    this.b = -e / n;
    this.c = -i / n;
    this.d = t / n;
    this.tx = (i * this.ty - s * r) / n;
    this.ty = -(t * this.ty - e * r) / n;
    return this;
  };
  t.isIdentity = function () {
    return this.tx === 0 && this.ty === 0 && this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1;
  };
  t.equals = function (t) {
    return this.tx === t.tx && this.ty === t.ty && this.a === t.a && this.b === t.b && this.c === t.c && this.d === t.d;
  };
  t.transformPoint = function (t, e, i) {
    (i = i || {}).x = t * this.a + e * this.c + this.tx;
    i.y = t * this.b + e * this.d + this.ty;
    return i;
  };
  t.decompose = function (t) {
    if (t == null) {
      t = {};
    }
    t.x = this.tx;
    t.y = this.ty;
    t.scaleX = Math.sqrt(this.a * this.a + this.b * this.b);
    t.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
    var e = Math.atan2(-this.c, this.d);
    var i = Math.atan2(this.b, this.a);
    if (Math.abs(1 - e / i) < 0.00001) {
      t.rotation = i / Matrix2D.DEG_TO_RAD;
      if (this.a < 0 && this.d >= 0) {
        t.rotation += t.rotation <= 0 ? 180 : -180;
      }
      t.skewX = t.skewY = 0;
    } else {
      t.skewX = e / Matrix2D.DEG_TO_RAD;
      t.skewY = i / Matrix2D.DEG_TO_RAD;
    }
    return t;
  };
  t.copy = function (t) {
    return this.setValues(t.a, t.b, t.c, t.d, t.tx, t.ty);
  };
  t.clone = function () {
    return new Matrix2D(this.a, this.b, this.c, this.d, this.tx, this.ty);
  };
  t.toString = function () {
    return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]";
  };
  Matrix2D.identity = new Matrix2D();
  createjs.Matrix2D = Matrix2D;
})();
(function () {
  'use strict';

  function DisplayProps(t, e, i, s, r) {
    this.setValues(t, e, i, s, r);
  }
  var t = DisplayProps.prototype;
  t.setValues = function (t, e, i, s, r) {
    this.visible = t == null || !!t;
    this.alpha = e == null ? 1 : e;
    this.shadow = i;
    this.compositeOperation = s;
    this.matrix = r || this.matrix && this.matrix.identity() || new createjs.Matrix2D();
    return this;
  };
  t.append = function (t, e, i, s, r) {
    this.alpha *= e;
    this.shadow = i || this.shadow;
    this.compositeOperation = s || this.compositeOperation;
    this.visible = this.visible && t;
    if (r) {
      this.matrix.appendMatrix(r);
    }
    return this;
  };
  t.prepend = function (t, e, i, s, r) {
    this.alpha *= e;
    this.shadow = this.shadow || i;
    this.compositeOperation = this.compositeOperation || s;
    this.visible = this.visible && t;
    if (r) {
      this.matrix.prependMatrix(r);
    }
    return this;
  };
  t.identity = function () {
    this.visible = true;
    this.alpha = 1;
    this.shadow = this.compositeOperation = null;
    this.matrix.identity();
    return this;
  };
  t.clone = function () {
    return new DisplayProps(this.alpha, this.shadow, this.compositeOperation, this.visible, this.matrix.clone());
  };
  createjs.DisplayProps = DisplayProps;
})();
(function () {
  'use strict';

  function Point(t, e) {
    this.setValues(t, e);
  }
  var t = Point.prototype;
  t.setValues = function (t, e) {
    this.x = t || 0;
    this.y = e || 0;
    return this;
  };
  t.copy = function (t) {
    this.x = t.x;
    this.y = t.y;
    return this;
  };
  t.clone = function () {
    return new Point(this.x, this.y);
  };
  t.toString = function () {
    return "[Point (x=" + this.x + " y=" + this.y + ")]";
  };
  createjs.Point = Point;
})();
(function () {
  'use strict';

  function Rectangle(t, e, i, s) {
    this.setValues(t, e, i, s);
  }
  var t = Rectangle.prototype;
  t.setValues = function (t, e, i, s) {
    this.x = t || 0;
    this.y = e || 0;
    this.width = i || 0;
    this.height = s || 0;
    return this;
  };
  t.extend = function (t, e, i, s) {
    i = i || 0;
    s = s || 0;
    if (t + i > this.x + this.width) {
      this.width = t + i - this.x;
    }
    if (e + s > this.y + this.height) {
      this.height = e + s - this.y;
    }
    if (t < this.x) {
      this.width += this.x - t;
      this.x = t;
    }
    if (e < this.y) {
      this.height += this.y - e;
      this.y = e;
    }
    return this;
  };
  t.pad = function (t, e, i, s) {
    this.x -= e;
    this.y -= t;
    this.width += e + s;
    this.height += t + i;
    return this;
  };
  t.copy = function (t) {
    return this.setValues(t.x, t.y, t.width, t.height);
  };
  t.contains = function (t, e, i, s) {
    i = i || 0;
    s = s || 0;
    return t >= this.x && t + i <= this.x + this.width && e >= this.y && e + s <= this.y + this.height;
  };
  t.union = function (t) {
    return this.clone().extend(t.x, t.y, t.width, t.height);
  };
  t.intersection = function (t) {
    var e = t.x;
    var i = t.y;
    var s = e + t.width;
    var r = i + t.height;
    if (this.x > e) {
      e = this.x;
    }
    if (this.y > i) {
      i = this.y;
    }
    if (this.x + this.width < s) {
      s = this.x + this.width;
    }
    if (this.y + this.height < r) {
      r = this.y + this.height;
    }
    if (s <= e || r <= i) {
      return null;
    } else {
      return new Rectangle(e, i, s - e, r - i);
    }
  };
  t.intersects = function (t) {
    return t.x <= this.x + this.width && this.x <= t.x + t.width && t.y <= this.y + this.height && this.y <= t.y + t.height;
  };
  t.isEmpty = function () {
    return this.width <= 0 || this.height <= 0;
  };
  t.clone = function () {
    return new Rectangle(this.x, this.y, this.width, this.height);
  };
  t.toString = function () {
    return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]";
  };
  createjs.Rectangle = Rectangle;
})();
(function () {
  'use strict';

  function ButtonHelper(t, e, i, s, r, n, a) {
    if (t.addEventListener) {
      this.target = t;
      this.overLabel = i == null ? "over" : i;
      this.outLabel = e == null ? "out" : e;
      this.downLabel = s == null ? "down" : s;
      this.play = r;
      this._isPressed = false;
      this._isOver = false;
      this._enabled = false;
      t.mouseChildren = false;
      this.enabled = true;
      this.handleEvent({});
      if (n) {
        if (a) {
          n.actionsEnabled = false;
          if (n.gotoAndStop) {
            n.gotoAndStop(a);
          }
        }
        t.hitArea = n;
      }
    }
  }
  var t = ButtonHelper.prototype;
  t.setEnabled = function (t) {
    if (t != this._enabled) {
      var e = this.target;
      this._enabled = t;
      if (t) {
        e.cursor = "pointer";
        e.addEventListener("rollover", this);
        e.addEventListener("rollout", this);
        e.addEventListener("mousedown", this);
        e.addEventListener("pressup", this);
        if (e._reset) {
          e.__reset = e._reset;
          e._reset = this._reset;
        }
      } else {
        e.cursor = null;
        e.removeEventListener("rollover", this);
        e.removeEventListener("rollout", this);
        e.removeEventListener("mousedown", this);
        e.removeEventListener("pressup", this);
        if (e.__reset) {
          e._reset = e.__reset;
          delete e.__reset;
        }
      }
    }
  };
  t.getEnabled = function () {
    return this._enabled;
  };
  try {
    Object.defineProperties(t, {
      enabled: {
        get: t.getEnabled,
        set: t.setEnabled
      }
    });
  } catch (t) {}
  t.toString = function () {
    return "[ButtonHelper]";
  };
  t.handleEvent = function (t) {
    var e;
    var i = this.target;
    var s = t.type;
    if (s == "mousedown") {
      this._isPressed = true;
      e = this.downLabel;
    } else if (s == "pressup") {
      this._isPressed = false;
      e = this._isOver ? this.overLabel : this.outLabel;
    } else if (s == "rollover") {
      this._isOver = true;
      e = this._isPressed ? this.downLabel : this.overLabel;
    } else {
      this._isOver = false;
      e = this._isPressed ? this.overLabel : this.outLabel;
    }
    if (this.play) {
      if (i.gotoAndPlay) {
        i.gotoAndPlay(e);
      }
    } else if (i.gotoAndStop) {
      i.gotoAndStop(e);
    }
  };
  t._reset = function () {
    var t = this.paused;
    this.__reset();
    this.paused = t;
  };
  createjs.ButtonHelper = ButtonHelper;
})();
(function () {
  'use strict';

  function Shadow(t, e, i, s) {
    this.color = t || "black";
    this.offsetX = e || 0;
    this.offsetY = i || 0;
    this.blur = s || 0;
  }
  var t = Shadow.prototype;
  Shadow.identity = new Shadow("transparent", 0, 0, 0);
  t.toString = function () {
    return "[Shadow]";
  };
  t.clone = function () {
    return new Shadow(this.color, this.offsetX, this.offsetY, this.blur);
  };
  createjs.Shadow = Shadow;
})();
(function () {
  'use strict';

  function SpriteSheet(t) {
    this.EventDispatcher_constructor();
    this.complete = true;
    this.framerate = 0;
    this._animations = null;
    this._frames = null;
    this._images = null;
    this._data = null;
    this._loadCount = 0;
    this._frameHeight = 0;
    this._frameWidth = 0;
    this._numFrames = 0;
    this._regX = 0;
    this._regY = 0;
    this._spacing = 0;
    this._margin = 0;
    this._parseData(t);
  }
  var t = createjs.extend(SpriteSheet, createjs.EventDispatcher);
  t.getAnimations = function () {
    return this._animations.slice();
  };
  try {
    Object.defineProperties(t, {
      animations: {
        get: t.getAnimations
      }
    });
  } catch (t) {}
  t.getNumFrames = function (t) {
    if (t == null) {
      if (this._frames) {
        return this._frames.length;
      } else {
        return this._numFrames || 0;
      }
    }
    var e = this._data[t];
    if (e == null) {
      return 0;
    } else {
      return e.frames.length;
    }
  };
  t.getAnimation = function (t) {
    return this._data[t];
  };
  t.getFrame = function (t) {
    var e;
    if (this._frames && (e = this._frames[t])) {
      return e;
    } else {
      return null;
    }
  };
  t.getFrameBounds = function (t, e) {
    var i = this.getFrame(t);
    if (i) {
      return (e || new createjs.Rectangle()).setValues(-i.regX, -i.regY, i.rect.width, i.rect.height);
    } else {
      return null;
    }
  };
  t.toString = function () {
    return "[SpriteSheet]";
  };
  t.clone = function () {
    throw "SpriteSheet cannot be cloned.";
  };
  t._parseData = function (t) {
    var e;
    var i;
    var s;
    var r;
    if (t != null) {
      this.framerate = t.framerate || 0;
      if (t.images && (i = t.images.length) > 0) {
        r = this._images = [];
        e = 0;
        for (; e < i; e++) {
          var n = t.images[e];
          if (typeof n == "string") {
            var a = n;
            (n = document.createElement("img")).src = a;
          }
          r.push(n);
          if (!n.getContext && !n.naturalWidth) {
            this._loadCount++;
            this.complete = false;
            (function (t, e) {
              n.onload = function () {
                t._handleImageLoad(e);
              };
            })(this, a);
            (function (t, e) {
              n.onerror = function () {
                t._handleImageError(e);
              };
            })(this, a);
          }
        }
      }
      if (t.frames == null) ;else if (Array.isArray(t.frames)) {
        this._frames = [];
        e = 0;
        i = (r = t.frames).length;
        for (; e < i; e++) {
          var o = r[e];
          this._frames.push({
            image: this._images[o[4] ? o[4] : 0],
            rect: new createjs.Rectangle(o[0], o[1], o[2], o[3]),
            regX: o[5] || 0,
            regY: o[6] || 0
          });
        }
      } else {
        s = t.frames;
        this._frameWidth = s.width;
        this._frameHeight = s.height;
        this._regX = s.regX || 0;
        this._regY = s.regY || 0;
        this._spacing = s.spacing || 0;
        this._margin = s.margin || 0;
        this._numFrames = s.count;
        if (this._loadCount == 0) {
          this._calculateFrames();
        }
      }
      var h;
      this._animations = [];
      if ((s = t.animations) != null) {
        this._data = {};
        for (h in s) {
          var c = {
            name: h
          };
          var u = s[h];
          if (typeof u == "number") {
            r = c.frames = [u];
          } else if (Array.isArray(u)) {
            if (u.length == 1) {
              c.frames = [u[0]];
            } else {
              c.speed = u[3];
              c.next = u[2];
              r = c.frames = [];
              e = u[0];
              for (; e <= u[1]; e++) {
                r.push(e);
              }
            }
          } else {
            c.speed = u.speed;
            c.next = u.next;
            var l = u.frames;
            r = c.frames = typeof l == "number" ? [l] : l.slice(0);
          }
          if (c.next === true || c.next === undefined) {
            c.next = h;
          }
          if (c.next === false || r.length < 2 && c.next == h) {
            c.next = null;
          }
          c.speed ||= 1;
          this._animations.push(h);
          this._data[h] = c;
        }
      }
    }
  };
  t._handleImageLoad = function (t) {
    if (--this._loadCount == 0) {
      this._calculateFrames();
      this.complete = true;
      this.dispatchEvent("complete");
    }
  };
  t._handleImageError = function (t) {
    var e = new createjs.Event("error");
    e.src = t;
    this.dispatchEvent(e);
    if (--this._loadCount == 0) {
      this.dispatchEvent("complete");
    }
  };
  t._calculateFrames = function () {
    if (!this._frames && this._frameWidth != 0) {
      this._frames = [];
      var t = this._numFrames || 100000;
      var e = 0;
      var i = this._frameWidth;
      var s = this._frameHeight;
      var r = this._spacing;
      var n = this._margin;
      t: for (var a = 0, o = this._images; a < o.length; a++) {
        var h = o[a];
        var c = h.width;
        for (var u = h.height, l = n; l <= u - n - s;) {
          for (var d = n; d <= c - n - i;) {
            if (e >= t) {
              break t;
            }
            e++;
            this._frames.push({
              image: h,
              rect: new createjs.Rectangle(d, l, i, s),
              regX: this._regX,
              regY: this._regY
            });
            d += i + r;
          }
          l += s + r;
        }
      }
      this._numFrames = e;
    }
  };
  createjs.SpriteSheet = createjs.promote(SpriteSheet, "EventDispatcher");
})();
(function () {
  'use strict';

  function Graphics() {
    this.command = null;
    this._stroke = null;
    this._strokeStyle = null;
    this._oldStrokeStyle = null;
    this._strokeDash = null;
    this._oldStrokeDash = null;
    this._strokeIgnoreScale = false;
    this._fill = null;
    this._instructions = [];
    this._commitIndex = 0;
    this._activeInstructions = [];
    this._dirty = false;
    this._storeIndex = 0;
    this.clear();
  }
  var t = Graphics.prototype;
  var e = Graphics;
  Graphics.getRGB = function (t, e, i, s) {
    if (t != null && i == null) {
      s = e;
      i = t & 255;
      e = t >> 8 & 255;
      t = t >> 16 & 255;
    }
    if (s == null) {
      return "rgb(" + t + "," + e + "," + i + ")";
    } else {
      return "rgba(" + t + "," + e + "," + i + "," + s + ")";
    }
  };
  Graphics.getHSL = function (t, e, i, s) {
    if (s == null) {
      return "hsl(" + t % 360 + "," + e + "%," + i + "%)";
    } else {
      return "hsla(" + t % 360 + "," + e + "%," + i + "%," + s + ")";
    }
  };
  Graphics.BASE_64 = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 14,
    P: 15,
    Q: 16,
    R: 17,
    S: 18,
    T: 19,
    U: 20,
    V: 21,
    W: 22,
    X: 23,
    Y: 24,
    Z: 25,
    a: 26,
    b: 27,
    c: 28,
    d: 29,
    e: 30,
    f: 31,
    g: 32,
    h: 33,
    i: 34,
    j: 35,
    k: 36,
    l: 37,
    m: 38,
    n: 39,
    o: 40,
    p: 41,
    q: 42,
    r: 43,
    s: 44,
    t: 45,
    u: 46,
    v: 47,
    w: 48,
    x: 49,
    y: 50,
    z: 51,
    0: 52,
    1: 53,
    2: 54,
    3: 55,
    4: 56,
    5: 57,
    6: 58,
    7: 59,
    8: 60,
    9: 61,
    "+": 62,
    "/": 63
  };
  Graphics.STROKE_CAPS_MAP = ["butt", "round", "square"];
  Graphics.STROKE_JOINTS_MAP = ["miter", "round", "bevel"];
  var i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
  if (i.getContext) {
    Graphics._ctx = i.getContext("2d");
    i.width = i.height = 1;
  }
  t.getInstructions = function () {
    this._updateInstructions();
    return this._instructions;
  };
  try {
    Object.defineProperties(t, {
      instructions: {
        get: t.getInstructions
      }
    });
  } catch (t) {}
  t.isEmpty = function () {
    return !this._instructions.length && !this._activeInstructions.length;
  };
  t.draw = function (t, e) {
    this._updateInstructions();
    var i = this._instructions;
    for (var s = this._storeIndex, r = i.length; s < r; s++) {
      i[s].exec(t, e);
    }
  };
  t.drawAsPath = function (t) {
    this._updateInstructions();
    var e;
    var i = this._instructions;
    for (var s = this._storeIndex, r = i.length; s < r; s++) {
      if ((e = i[s]).path !== false) {
        e.exec(t);
      }
    }
  };
  t.moveTo = function (t, i) {
    return this.append(new e.MoveTo(t, i), true);
  };
  t.lineTo = function (t, i) {
    return this.append(new e.LineTo(t, i));
  };
  t.arcTo = function (t, i, s, r, n) {
    return this.append(new e.ArcTo(t, i, s, r, n));
  };
  t.arc = function (t, i, s, r, n, a) {
    return this.append(new e.Arc(t, i, s, r, n, a));
  };
  t.quadraticCurveTo = function (t, i, s, r) {
    return this.append(new e.QuadraticCurveTo(t, i, s, r));
  };
  t.bezierCurveTo = function (t, i, s, r, n, a) {
    return this.append(new e.BezierCurveTo(t, i, s, r, n, a));
  };
  t.rect = function (t, i, s, r) {
    return this.append(new e.Rect(t, i, s, r));
  };
  t.closePath = function () {
    if (this._activeInstructions.length) {
      return this.append(new e.ClosePath());
    } else {
      return this;
    }
  };
  t.clear = function () {
    this._instructions.length = this._activeInstructions.length = this._commitIndex = 0;
    this._strokeStyle = this._oldStrokeStyle = this._stroke = this._fill = this._strokeDash = this._oldStrokeDash = null;
    this._dirty = this._strokeIgnoreScale = false;
    return this;
  };
  t.beginFill = function (t) {
    return this._setFill(t ? new e.Fill(t) : null);
  };
  t.beginLinearGradientFill = function (t, i, s, r, n, a) {
    return this._setFill(new e.Fill().linearGradient(t, i, s, r, n, a));
  };
  t.beginRadialGradientFill = function (t, i, s, r, n, a, o, h) {
    return this._setFill(new e.Fill().radialGradient(t, i, s, r, n, a, o, h));
  };
  t.beginBitmapFill = function (t, i, s) {
    return this._setFill(new e.Fill(null, s).bitmap(t, i));
  };
  t.endFill = function () {
    return this.beginFill();
  };
  t.setStrokeStyle = function (t, i, s, r, n) {
    this._updateInstructions(true);
    this._strokeStyle = this.command = new e.StrokeStyle(t, i, s, r, n);
    if (this._stroke) {
      this._stroke.ignoreScale = n;
    }
    this._strokeIgnoreScale = n;
    return this;
  };
  t.setStrokeDash = function (t, i) {
    this._updateInstructions(true);
    this._strokeDash = this.command = new e.StrokeDash(t, i);
    return this;
  };
  t.beginStroke = function (t) {
    return this._setStroke(t ? new e.Stroke(t) : null);
  };
  t.beginLinearGradientStroke = function (t, i, s, r, n, a) {
    return this._setStroke(new e.Stroke().linearGradient(t, i, s, r, n, a));
  };
  t.beginRadialGradientStroke = function (t, i, s, r, n, a, o, h) {
    return this._setStroke(new e.Stroke().radialGradient(t, i, s, r, n, a, o, h));
  };
  t.beginBitmapStroke = function (t, i) {
    return this._setStroke(new e.Stroke().bitmap(t, i));
  };
  t.endStroke = function () {
    return this.beginStroke();
  };
  t.curveTo = t.quadraticCurveTo;
  t.drawRect = t.rect;
  t.drawRoundRect = function (t, e, i, s, r) {
    return this.drawRoundRectComplex(t, e, i, s, r, r, r, r);
  };
  t.drawRoundRectComplex = function (t, i, s, r, n, a, o, h) {
    return this.append(new e.RoundRect(t, i, s, r, n, a, o, h));
  };
  t.drawCircle = function (t, i, s) {
    return this.append(new e.Circle(t, i, s));
  };
  t.drawEllipse = function (t, i, s, r) {
    return this.append(new e.Ellipse(t, i, s, r));
  };
  t.drawPolyStar = function (t, i, s, r, n, a) {
    return this.append(new e.PolyStar(t, i, s, r, n, a));
  };
  t.append = function (t, e) {
    this._activeInstructions.push(t);
    this.command = t;
    if (!e) {
      this._dirty = true;
    }
    return this;
  };
  t.decodePath = function (t) {
    var e = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath];
    var i = [2, 2, 4, 6, 0];
    for (var s = 0, r = t.length, n = [], a = 0, o = 0, h = Graphics.BASE_64; s < r;) {
      var c = t.charAt(s);
      var u = h[c];
      var l = u >> 3;
      var d = e[l];
      if (!d || u & 3) {
        throw "bad path data (@" + s + "): " + c;
      }
      var p = i[l];
      if (!l) {
        a = o = 0;
      }
      n.length = 0;
      s++;
      var _ = 2 + (u >> 2 & 1);
      for (var f = 0; f < p; f++) {
        var g = h[t.charAt(s)];
        var m = g >> 5 ? -1 : 1;
        g = (g & 31) << 6 | h[t.charAt(s + 1)];
        if (_ == 3) {
          g = g << 6 | h[t.charAt(s + 2)];
        }
        g = m * g / 10;
        if (f % 2) {
          a = g += a;
        } else {
          o = g += o;
        }
        n[f] = g;
        s += _;
      }
      d.apply(this, n);
    }
    return this;
  };
  t.store = function () {
    this._updateInstructions(true);
    this._storeIndex = this._instructions.length;
    return this;
  };
  t.unstore = function () {
    this._storeIndex = 0;
    return this;
  };
  t.clone = function () {
    var t = new Graphics();
    t.command = this.command;
    t._stroke = this._stroke;
    t._strokeStyle = this._strokeStyle;
    t._strokeDash = this._strokeDash;
    t._strokeIgnoreScale = this._strokeIgnoreScale;
    t._fill = this._fill;
    t._instructions = this._instructions.slice();
    t._commitIndex = this._commitIndex;
    t._activeInstructions = this._activeInstructions.slice();
    t._dirty = this._dirty;
    t._storeIndex = this._storeIndex;
    return t;
  };
  t.toString = function () {
    return "[Graphics]";
  };
  t.mt = t.moveTo;
  t.lt = t.lineTo;
  t.at = t.arcTo;
  t.bt = t.bezierCurveTo;
  t.qt = t.quadraticCurveTo;
  t.a = t.arc;
  t.r = t.rect;
  t.cp = t.closePath;
  t.c = t.clear;
  t.f = t.beginFill;
  t.lf = t.beginLinearGradientFill;
  t.rf = t.beginRadialGradientFill;
  t.bf = t.beginBitmapFill;
  t.ef = t.endFill;
  t.ss = t.setStrokeStyle;
  t.sd = t.setStrokeDash;
  t.s = t.beginStroke;
  t.ls = t.beginLinearGradientStroke;
  t.rs = t.beginRadialGradientStroke;
  t.bs = t.beginBitmapStroke;
  t.es = t.endStroke;
  t.dr = t.drawRect;
  t.rr = t.drawRoundRect;
  t.rc = t.drawRoundRectComplex;
  t.dc = t.drawCircle;
  t.de = t.drawEllipse;
  t.dp = t.drawPolyStar;
  t.p = t.decodePath;
  t._updateInstructions = function (t) {
    var e = this._instructions;
    var i = this._activeInstructions;
    var s = this._commitIndex;
    if (this._dirty && i.length) {
      e.length = s;
      e.push(Graphics.beginCmd);
      var r = i.length;
      var n = e.length;
      e.length = n + r;
      for (var a = 0; a < r; a++) {
        e[a + n] = i[a];
      }
      if (this._fill) {
        e.push(this._fill);
      }
      if (this._stroke) {
        if (this._strokeDash !== this._oldStrokeDash) {
          this._oldStrokeDash = this._strokeDash;
          e.push(this._strokeDash);
        }
        if (this._strokeStyle !== this._oldStrokeStyle) {
          this._oldStrokeStyle = this._strokeStyle;
          e.push(this._strokeStyle);
        }
        e.push(this._stroke);
      }
      this._dirty = false;
    }
    if (t) {
      i.length = 0;
      this._commitIndex = e.length;
    }
  };
  t._setFill = function (t) {
    this._updateInstructions(true);
    this.command = this._fill = t;
    return this;
  };
  t._setStroke = function (t) {
    this._updateInstructions(true);
    if (this.command = this._stroke = t) {
      t.ignoreScale = this._strokeIgnoreScale;
    }
    return this;
  };
  (e.LineTo = function (t, e) {
    this.x = t;
    this.y = e;
  }).prototype.exec = function (t) {
    t.lineTo(this.x, this.y);
  };
  (e.MoveTo = function (t, e) {
    this.x = t;
    this.y = e;
  }).prototype.exec = function (t) {
    t.moveTo(this.x, this.y);
  };
  (e.ArcTo = function (t, e, i, s, r) {
    this.x1 = t;
    this.y1 = e;
    this.x2 = i;
    this.y2 = s;
    this.radius = r;
  }).prototype.exec = function (t) {
    t.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius);
  };
  (e.Arc = function (t, e, i, s, r, n) {
    this.x = t;
    this.y = e;
    this.radius = i;
    this.startAngle = s;
    this.endAngle = r;
    this.anticlockwise = !!n;
  }).prototype.exec = function (t) {
    t.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
  };
  (e.QuadraticCurveTo = function (t, e, i, s) {
    this.cpx = t;
    this.cpy = e;
    this.x = i;
    this.y = s;
  }).prototype.exec = function (t) {
    t.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y);
  };
  (e.BezierCurveTo = function (t, e, i, s, r, n) {
    this.cp1x = t;
    this.cp1y = e;
    this.cp2x = i;
    this.cp2y = s;
    this.x = r;
    this.y = n;
  }).prototype.exec = function (t) {
    t.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y);
  };
  (e.Rect = function (t, e, i, s) {
    this.x = t;
    this.y = e;
    this.w = i;
    this.h = s;
  }).prototype.exec = function (t) {
    t.rect(this.x, this.y, this.w, this.h);
  };
  (e.ClosePath = function () {}).prototype.exec = function (t) {
    t.closePath();
  };
  (e.BeginPath = function () {}).prototype.exec = function (t) {
    t.beginPath();
  };
  (t = (e.Fill = function (t, e) {
    this.style = t;
    this.matrix = e;
  }).prototype).exec = function (t) {
    if (this.style) {
      t.fillStyle = this.style;
      var e = this.matrix;
      if (e) {
        t.save();
        t.transform(e.a, e.b, e.c, e.d, e.tx, e.ty);
      }
      t.fill();
      if (e) {
        t.restore();
      }
    }
  };
  t.linearGradient = function (t, e, i, s, r, n) {
    var a = this.style = Graphics._ctx.createLinearGradient(i, s, r, n);
    for (var o = 0, h = t.length; o < h; o++) {
      a.addColorStop(e[o], t[o]);
    }
    a.props = {
      colors: t,
      ratios: e,
      x0: i,
      y0: s,
      x1: r,
      y1: n,
      type: "linear"
    };
    return this;
  };
  t.radialGradient = function (t, e, i, s, r, n, a, o) {
    var h = this.style = Graphics._ctx.createRadialGradient(i, s, r, n, a, o);
    for (var c = 0, u = t.length; c < u; c++) {
      h.addColorStop(e[c], t[c]);
    }
    h.props = {
      colors: t,
      ratios: e,
      x0: i,
      y0: s,
      r0: r,
      x1: n,
      y1: a,
      r1: o,
      type: "radial"
    };
    return this;
  };
  t.bitmap = function (t, e) {
    if (t.naturalWidth || t.getContext || t.readyState >= 2) {
      (this.style = Graphics._ctx.createPattern(t, e || "")).props = {
        image: t,
        repetition: e,
        type: "bitmap"
      };
    }
    return this;
  };
  t.path = false;
  (t = (e.Stroke = function (t, e) {
    this.style = t;
    this.ignoreScale = e;
  }).prototype).exec = function (t) {
    if (this.style) {
      t.strokeStyle = this.style;
      if (this.ignoreScale) {
        t.save();
        t.setTransform(1, 0, 0, 1, 0, 0);
      }
      t.stroke();
      if (this.ignoreScale) {
        t.restore();
      }
    }
  };
  t.linearGradient = e.Fill.prototype.linearGradient;
  t.radialGradient = e.Fill.prototype.radialGradient;
  t.bitmap = e.Fill.prototype.bitmap;
  t.path = false;
  (t = (e.StrokeStyle = function (t, e, i, s, r) {
    this.width = t;
    this.caps = e;
    this.joints = i;
    this.miterLimit = s;
    this.ignoreScale = r;
  }).prototype).exec = function (t) {
    t.lineWidth = this.width == null ? "1" : this.width;
    t.lineCap = this.caps == null ? "butt" : isNaN(this.caps) ? this.caps : Graphics.STROKE_CAPS_MAP[this.caps];
    t.lineJoin = this.joints == null ? "miter" : isNaN(this.joints) ? this.joints : Graphics.STROKE_JOINTS_MAP[this.joints];
    t.miterLimit = this.miterLimit == null ? "10" : this.miterLimit;
    t.ignoreScale = this.ignoreScale != null && this.ignoreScale;
  };
  t.path = false;
  (e.StrokeDash = function (t, e) {
    this.segments = t;
    this.offset = e || 0;
  }).prototype.exec = function (t) {
    if (t.setLineDash) {
      t.setLineDash(this.segments || e.StrokeDash.EMPTY_SEGMENTS);
      t.lineDashOffset = this.offset || 0;
    }
  };
  e.StrokeDash.EMPTY_SEGMENTS = [];
  (e.RoundRect = function (t, e, i, s, r, n, a, o) {
    this.x = t;
    this.y = e;
    this.w = i;
    this.h = s;
    this.radiusTL = r;
    this.radiusTR = n;
    this.radiusBR = a;
    this.radiusBL = o;
  }).prototype.exec = function (t) {
    var e = (h < c ? h : c) / 2;
    var i = 0;
    var s = 0;
    var r = 0;
    var n = 0;
    var a = this.x;
    var o = this.y;
    var h = this.w;
    var c = this.h;
    var u = this.radiusTL;
    var l = this.radiusTR;
    var d = this.radiusBR;
    var p = this.radiusBL;
    if (u < 0) {
      u *= i = -1;
    }
    if (u > e) {
      u = e;
    }
    if (l < 0) {
      l *= s = -1;
    }
    if (l > e) {
      l = e;
    }
    if (d < 0) {
      d *= r = -1;
    }
    if (d > e) {
      d = e;
    }
    if (p < 0) {
      p *= n = -1;
    }
    if (p > e) {
      p = e;
    }
    t.moveTo(a + h - l, o);
    t.arcTo(a + h + l * s, o - l * s, a + h, o + l, l);
    t.lineTo(a + h, o + c - d);
    t.arcTo(a + h + d * r, o + c + d * r, a + h - d, o + c, d);
    t.lineTo(a + p, o + c);
    t.arcTo(a - p * n, o + c + p * n, a, o + c - p, p);
    t.lineTo(a, o + u);
    t.arcTo(a - u * i, o - u * i, a + u, o, u);
    t.closePath();
  };
  (e.Circle = function (t, e, i) {
    this.x = t;
    this.y = e;
    this.radius = i;
  }).prototype.exec = function (t) {
    t.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  };
  (e.Ellipse = function (t, e, i, s) {
    this.x = t;
    this.y = e;
    this.w = i;
    this.h = s;
  }).prototype.exec = function (t) {
    var e = this.x;
    var i = this.y;
    var s = this.w;
    var r = this.h;
    var n = 0.5522848;
    var a = s / 2 * n;
    var o = r / 2 * n;
    var h = e + s;
    var c = i + r;
    var u = e + s / 2;
    var l = i + r / 2;
    t.moveTo(e, l);
    t.bezierCurveTo(e, l - o, u - a, i, u, i);
    t.bezierCurveTo(u + a, i, h, l - o, h, l);
    t.bezierCurveTo(h, l + o, u + a, c, u, c);
    t.bezierCurveTo(u - a, c, e, l + o, e, l);
  };
  (e.PolyStar = function (t, e, i, s, r, n) {
    this.x = t;
    this.y = e;
    this.radius = i;
    this.sides = s;
    this.pointSize = r;
    this.angle = n;
  }).prototype.exec = function (t) {
    var e = this.x;
    var i = this.y;
    var s = this.radius;
    var r = (this.angle || 0) / 180 * Math.PI;
    var n = this.sides;
    var a = 1 - (this.pointSize || 0);
    var o = Math.PI / n;
    t.moveTo(e + Math.cos(r) * s, i + Math.sin(r) * s);
    for (var h = 0; h < n; h++) {
      r += o;
      if (a != 1) {
        t.lineTo(e + Math.cos(r) * s * a, i + Math.sin(r) * s * a);
      }
      r += o;
      t.lineTo(e + Math.cos(r) * s, i + Math.sin(r) * s);
    }
    t.closePath();
  };
  Graphics.beginCmd = new e.BeginPath();
  createjs.Graphics = Graphics;
})();
(function () {
  'use strict';

  function DisplayObject() {
    this.EventDispatcher_constructor();
    this.alpha = 1;
    this.cacheCanvas = null;
    this.cacheID = 0;
    this.willReadFrequently = undefined;
    this.id = createjs.UID.get();
    this.mouseEnabled = true;
    this.tickEnabled = true;
    this.name = null;
    this.parent = null;
    this.regX = 0;
    this.regY = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.skewX = 0;
    this.skewY = 0;
    this.shadow = null;
    this.visible = true;
    this.x = 0;
    this.y = 0;
    this.transformMatrix = null;
    this.compositeOperation = null;
    this.snapToPixel = true;
    this.filters = null;
    this.mask = null;
    this.hitArea = null;
    this.cursor = null;
    this._cacheOffsetX = 0;
    this._cacheOffsetY = 0;
    this._filterOffsetX = 0;
    this._filterOffsetY = 0;
    this._cacheScale = 1;
    this._cacheDataURLID = 0;
    this._cacheDataURL = null;
    this._props = new createjs.DisplayProps();
    this._rectangle = new createjs.Rectangle();
    this._bounds = null;
  }
  var t = createjs.extend(DisplayObject, createjs.EventDispatcher);
  DisplayObject._MOUSE_EVENTS = ["click", "dblclick", "mousedown", "mouseout", "mouseover", "pressmove", "pressup", "rollout", "rollover"];
  DisplayObject.suppressCrossDomainErrors = false;
  DisplayObject._snapToPixelEnabled = false;
  var e = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
  if (e.getContext) {
    DisplayObject._hitTestCanvas = e;
    DisplayObject._hitTestContext = e.getContext("2d");
    e.width = e.height = 1;
  }
  DisplayObject._nextCacheID = 1;
  t.getCanvasContext = function (e) {
    return e.getContext("2d", t.willReadFrequently !== undefined ? {
      willReadFrequently: t.willReadFrequently
    } : null);
  };
  t.getStage = function () {
    for (var t = this, e = createjs.Stage; t.parent;) {
      t = t.parent;
    }
    if (t instanceof e) {
      return t;
    } else {
      return null;
    }
  };
  try {
    Object.defineProperties(t, {
      stage: {
        get: t.getStage
      }
    });
  } catch (t) {}
  t.isVisible = function () {
    return !!this.visible && !!(this.alpha > 0) && this.scaleX != 0 && this.scaleY != 0;
  };
  t.draw = function (t, e) {
    var i = this.cacheCanvas;
    if (e || !i || !i.width || !i.height) {
      return false;
    }
    var s = this._cacheScale;
    t.drawImage(i, this._cacheOffsetX + this._filterOffsetX, this._cacheOffsetY + this._filterOffsetY, i.width / s, i.height / s);
    return true;
  };
  t.updateContext = function (t) {
    var e = this;
    var i = e.mask;
    var s = e._props.matrix;
    if (i && i.graphics && !i.graphics.isEmpty()) {
      i.getMatrix(s);
      t.transform(s.a, s.b, s.c, s.d, s.tx, s.ty);
      i.graphics.drawAsPath(t);
      t.clip();
      s.invert();
      t.transform(s.a, s.b, s.c, s.d, s.tx, s.ty);
    }
    this.getMatrix(s);
    var r = s.tx;
    var n = s.ty;
    if (DisplayObject._snapToPixelEnabled && e.snapToPixel) {
      r = r + (r < 0 ? -0.5 : 0.5) | 0;
      n = n + (n < 0 ? -0.5 : 0.5) | 0;
    }
    t.transform(s.a, s.b, s.c, s.d, r, n);
    t.globalAlpha *= e.alpha;
    if (e.compositeOperation) {
      t.globalCompositeOperation = e.compositeOperation;
    }
    if (e.shadow) {
      this._applyShadow(t, e.shadow);
    }
  };
  t.cache = function (t, e, i, s, r) {
    r = r || 1;
    this.cacheCanvas ||= createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
    this._cacheWidth = i;
    this._cacheHeight = s;
    this._cacheOffsetX = t;
    this._cacheOffsetY = e;
    this._cacheScale = r;
    this.updateCache();
  };
  t.updateCache = function (t) {
    var e = this.cacheCanvas;
    if (!e) {
      throw "cache() must be called before updateCache()";
    }
    var i = this._cacheScale;
    var s = this._cacheOffsetX * i;
    var r = this._cacheOffsetY * i;
    var n = this._cacheWidth;
    var a = this._cacheHeight;
    var o = this.getCanvasContext(e);
    var h = this._getFilterBounds();
    s += (this._filterOffsetX = h.x) * Math.max(1, i);
    r += (this._filterOffsetY = h.y) * Math.max(1, i);
    n = Math.ceil(n * i) + h.width * Math.max(1, i);
    a = Math.ceil(a * i) + h.height * Math.max(1, i);
    if (n != e.width || a != e.height) {
      e.width = n;
      e.height = a;
    } else if (!t) {
      o.clearRect(0, 0, n + 1, a + 1);
    }
    o.save();
    o.globalCompositeOperation = t;
    if (i !== 1 || s !== 0 || r !== 0) {
      o.setTransform(i, 0, 0, i, -s, -r);
    }
    this.draw(o, true);
    this._applyFilters();
    o.restore();
    this.cacheID = DisplayObject._nextCacheID++;
  };
  t.uncache = function () {
    this._cacheDataURL = this.cacheCanvas = null;
    this.cacheID = this._cacheOffsetX = this._cacheOffsetY = this._filterOffsetX = this._filterOffsetY = 0;
    this._cacheScale = 1;
  };
  t.getCacheDataURL = function () {
    if (this.cacheCanvas) {
      if (this.cacheID != this._cacheDataURLID) {
        this._cacheDataURL = this.cacheCanvas.toDataURL();
      }
      return this._cacheDataURL;
    } else {
      return null;
    }
  };
  t.localToGlobal = function (t, e, i) {
    return this.getConcatenatedMatrix(this._props.matrix).transformPoint(t, e, i || new createjs.Point());
  };
  t.globalToLocal = function (t, e, i) {
    return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(t, e, i || new createjs.Point());
  };
  t.localToLocal = function (t, e, i, s) {
    s = this.localToGlobal(t, e, s);
    return i.globalToLocal(s.x, s.y, s);
  };
  t.setTransform = function (t, e, i, s, r, n, a, o, h) {
    this.x = t || 0;
    this.y = e || 0;
    this.scaleX = i == null ? 1 : i;
    this.scaleY = s == null ? 1 : s;
    this.rotation = r || 0;
    this.skewX = n || 0;
    this.skewY = a || 0;
    this.regX = o || 0;
    this.regY = h || 0;
    return this;
  };
  t.getMatrix = function (t) {
    var e = this;
    var i = t && t.identity() || new createjs.Matrix2D();
    if (e.transformMatrix) {
      return i.copy(e.transformMatrix);
    } else {
      return i.appendTransform(e.x, e.y, e.scaleX, e.scaleY, e.rotation, e.skewX, e.skewY, e.regX, e.regY);
    }
  };
  t.getConcatenatedMatrix = function (t) {
    for (var e = this, i = this.getMatrix(t); e = e.parent;) {
      i.prependMatrix(e.getMatrix(e._props.matrix));
    }
    return i;
  };
  t.getConcatenatedDisplayProps = function (t) {
    t = t ? t.identity() : new createjs.DisplayProps();
    var e = this;
    var i = e.getMatrix(t.matrix);
    do {
      t.prepend(e.visible, e.alpha, e.shadow, e.compositeOperation);
      if (e != this) {
        i.prependMatrix(e.getMatrix(e._props.matrix));
      }
    } while (e = e.parent);
    return t;
  };
  t.hitTest = function (t, e) {
    var i = DisplayObject._hitTestContext;
    i.setTransform(1, 0, 0, 1, -t, -e);
    this.draw(i);
    var s = this._testHit(i);
    i.setTransform(1, 0, 0, 1, 0, 0);
    i.clearRect(0, 0, 2, 2);
    return s;
  };
  t.set = function (t) {
    for (var e in t) {
      this[e] = t[e];
    }
    return this;
  };
  t.getBounds = function () {
    if (this._bounds) {
      return this._rectangle.copy(this._bounds);
    }
    var t = this.cacheCanvas;
    if (t) {
      var e = this._cacheScale;
      return this._rectangle.setValues(this._cacheOffsetX, this._cacheOffsetY, t.width / e, t.height / e);
    }
    return null;
  };
  t.getTransformedBounds = function () {
    return this._getBounds();
  };
  t.setBounds = function (t, e, i, s) {
    if (t == null) {
      this._bounds = t;
    }
    this._bounds = (this._bounds || new createjs.Rectangle()).setValues(t, e, i, s);
  };
  t.clone = function () {
    return this._cloneProps(new DisplayObject());
  };
  t.toString = function () {
    return "[DisplayObject (name=" + this.name + ")]";
  };
  t._cloneProps = function (t) {
    t.alpha = this.alpha;
    t.mouseEnabled = this.mouseEnabled;
    t.tickEnabled = this.tickEnabled;
    t.name = this.name;
    t.regX = this.regX;
    t.regY = this.regY;
    t.rotation = this.rotation;
    t.scaleX = this.scaleX;
    t.scaleY = this.scaleY;
    t.shadow = this.shadow;
    t.skewX = this.skewX;
    t.skewY = this.skewY;
    t.visible = this.visible;
    t.x = this.x;
    t.y = this.y;
    t.compositeOperation = this.compositeOperation;
    t.snapToPixel = this.snapToPixel;
    t.filters = this.filters == null ? null : this.filters.slice(0);
    t.mask = this.mask;
    t.hitArea = this.hitArea;
    t.cursor = this.cursor;
    t._bounds = this._bounds;
    return t;
  };
  t._applyShadow = function (t, e) {
    e = e || Shadow.identity;
    t.shadowColor = e.color;
    t.shadowOffsetX = e.offsetX;
    t.shadowOffsetY = e.offsetY;
    t.shadowBlur = e.blur;
  };
  t._tick = function (t) {
    var e = this._listeners;
    if (e && e.tick) {
      t.target = null;
      t.propagationStopped = t.immediatePropagationStopped = false;
      this.dispatchEvent(t);
    }
  };
  t._testHit = function (t) {
    try {
      var e = t.getImageData(0, 0, 1, 1).data[3] > 1;
    } catch (t) {
      if (!DisplayObject.suppressCrossDomainErrors) {
        throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images.";
      }
    }
    return e;
  };
  t._applyFilters = function () {
    if (this.filters && this.filters.length != 0 && this.cacheCanvas && !(this instanceof createjs.TextField)) {
      for (var t = this.filters.length, e = this.getCanvasContext(this.cacheCanvas), i = this.cacheCanvas.width, s = this.cacheCanvas.height, r = 0; r < t; r++) {
        this.filters[r].applyFilter(e, 0, 0, i, s);
      }
    }
  };
  t._getFilterBounds = function (t) {
    var e;
    var i = this.filters;
    var s = this._rectangle.setValues(0, 0, 0, 0);
    if (!i || !(e = i.length)) {
      return s;
    }
    for (var r = 0; r < e; r++) {
      var n = this.filters[r];
      if (n.getBounds) {
        n.getBounds(s);
      }
    }
    return s;
  };
  t._getBounds = function (t, e) {
    return this._transformBounds(this.getBounds(), t, e);
  };
  t._transformBounds = function (t, e, i) {
    if (!t) {
      return t;
    }
    var s = t.x;
    var r = t.y;
    var n = t.width;
    var a = t.height;
    var o = this._props.matrix;
    o = i ? o.identity() : this.getMatrix(o);
    if (s || r) {
      o.appendTransform(0, 0, 1, 1, 0, 0, 0, -s, -r);
    }
    if (e) {
      o.prependMatrix(e);
    }
    var h = n * o.a;
    var c = n * o.b;
    var u = a * o.c;
    var l = a * o.d;
    var d = o.tx;
    var p = o.ty;
    var _ = d;
    var f = d;
    var g = p;
    var m = p;
    if ((s = h + d) < _) {
      _ = s;
    } else if (s > f) {
      f = s;
    }
    if ((s = h + u + d) < _) {
      _ = s;
    } else if (s > f) {
      f = s;
    }
    if ((s = u + d) < _) {
      _ = s;
    } else if (s > f) {
      f = s;
    }
    if ((r = c + p) < g) {
      g = r;
    } else if (r > m) {
      m = r;
    }
    if ((r = c + l + p) < g) {
      g = r;
    } else if (r > m) {
      m = r;
    }
    if ((r = l + p) < g) {
      g = r;
    } else if (r > m) {
      m = r;
    }
    return t.setValues(_, g, f - _, m - g);
  };
  t._hasMouseEventListener = function () {
    var t = DisplayObject._MOUSE_EVENTS;
    for (var e = 0, i = t.length; e < i; e++) {
      if (this.hasEventListener(t[e])) {
        return true;
      }
    }
    return !!this.cursor;
  };
  createjs.DisplayObject = createjs.promote(DisplayObject, "EventDispatcher");
})();
(function () {
  'use strict';

  function Container() {
    this.DisplayObject_constructor();
    this.children = [];
    this.mouseChildren = true;
    this.tickChildren = true;
  }
  var t = createjs.extend(Container, createjs.DisplayObject);
  t.getNumChildren = function () {
    return this.children.length;
  };
  try {
    Object.defineProperties(t, {
      numChildren: {
        get: t.getNumChildren
      }
    });
  } catch (t) {}
  t.initialize = Container;
  t.isVisible = function () {
    var t = this.cacheCanvas || this.children.length;
    return !!this.visible && !!(this.alpha > 0) && this.scaleX != 0 && this.scaleY != 0 && !!t;
  };
  t.draw = function (t, e) {
    if (this.DisplayObject_draw(t, e)) {
      return true;
    }
    var i = this.children.slice();
    for (var s = 0, r = i.length; s < r; s++) {
      var n = i[s];
      if (n.isVisible()) {
        t.save();
        n.updateContext(t);
        n.draw(t);
        t.restore();
      }
    }
    return true;
  };
  t.addChild = function (t) {
    if (t == null) {
      return t;
    }
    var e = arguments.length;
    if (e > 1) {
      for (var i = 0; i < e; i++) {
        this.addChild(arguments[i]);
      }
      return arguments[e - 1];
    }
    if (t.parent) {
      t.parent.removeChild(t);
    }
    t.parent = this;
    this.children.push(t);
    t.dispatchEvent("added");
    return t;
  };
  t.addChildAt = function (t, e) {
    var i = arguments.length;
    var s = arguments[i - 1];
    if (s < 0 || s > this.children.length) {
      return arguments[i - 2];
    }
    if (i > 2) {
      for (var r = 0; r < i - 1; r++) {
        this.addChildAt(arguments[r], s + r);
      }
      return arguments[i - 2];
    }
    if (t.parent) {
      t.parent.removeChild(t);
    }
    t.parent = this;
    this.children.splice(e, 0, t);
    t.dispatchEvent("added");
    return t;
  };
  t.removeChild = function (t) {
    var e = arguments.length;
    if (e > 1) {
      var i = true;
      for (var s = 0; s < e; s++) {
        i = i && this.removeChild(arguments[s]);
      }
      return i;
    }
    return this.removeChildAt(createjs.indexOf(this.children, t));
  };
  t.removeChildAt = function (t) {
    var e = arguments.length;
    if (e > 1) {
      var i = [];
      for (var s = 0; s < e; s++) {
        i[s] = arguments[s];
      }
      i.sort(function (t, e) {
        return e - t;
      });
      var r = true;
      for (s = 0; s < e; s++) {
        r = r && this.removeChildAt(i[s]);
      }
      return r;
    }
    if (t < 0 || t > this.children.length - 1) {
      return false;
    }
    var n = this.children[t];
    if (n) {
      n.parent = null;
    }
    this.children.splice(t, 1);
    n.dispatchEvent("removed");
    return true;
  };
  t.removeAllChildren = function () {
    for (var t = this.children; t.length;) {
      this.removeChildAt(0);
    }
  };
  t.getChildAt = function (t) {
    return this.children[t];
  };
  t.getChildByName = function (t) {
    var e = this.children;
    for (var i = 0, s = e.length; i < s; i++) {
      if (e[i].name == t) {
        return e[i];
      }
    }
    return null;
  };
  t.sortChildren = function (t) {
    this.children.sort(t);
  };
  t.getChildIndex = function (t) {
    return createjs.indexOf(this.children, t);
  };
  t.swapChildrenAt = function (t, e) {
    var i = this.children;
    var s = i[t];
    var r = i[e];
    if (s && r) {
      i[t] = r;
      i[e] = s;
    }
  };
  t.swapChildren = function (t, e) {
    for (var i, s, r = this.children, n = 0, a = r.length; n < a && (r[n] == t && (i = n), r[n] == e && (s = n), i == null || s == null); n++);
    if (n != a) {
      r[i] = e;
      r[s] = t;
    }
  };
  t.setChildIndex = function (t, e) {
    var i = this.children;
    var s = i.length;
    if (t.parent == this && !(e < 0) && !(e >= s)) {
      for (var r = 0; r < s && i[r] != t; r++);
      if (r != s && r != e) {
        i.splice(r, 1);
        i.splice(e, 0, t);
      }
    }
  };
  t.contains = function (t) {
    while (t) {
      if (t == this) {
        return true;
      }
      t = t.parent;
    }
    return false;
  };
  t.hitTest = function (t, e) {
    return this.getObjectUnderPoint(t, e) != null;
  };
  t.getObjectsUnderPoint = function (t, e, i) {
    var s = [];
    var r = this.localToGlobal(t, e);
    this._getObjectsUnderPoint(r.x, r.y, s, i > 0, i == 1);
    return s;
  };
  t.getObjectUnderPoint = function (t, e, i) {
    var s = this.localToGlobal(t, e);
    return this._getObjectsUnderPoint(s.x, s.y, null, i > 0, i == 1);
  };
  t.getBounds = function () {
    return this._getBounds(null, true);
  };
  t.getTransformedBounds = function () {
    return this._getBounds();
  };
  t.clone = function (t) {
    var e = this._cloneProps(new Container());
    if (t) {
      this._cloneChildren(e);
    }
    return e;
  };
  t.toString = function () {
    return "[Container (name=" + this.name + ")]";
  };
  t._tick = function (t) {
    if (this.tickChildren) {
      for (var e = this.children.length - 1; e >= 0; e--) {
        var i = this.children[e];
        if (i.tickEnabled && i._tick) {
          i._tick(t);
        }
      }
    }
    this.DisplayObject__tick(t);
  };
  t._cloneChildren = function (t) {
    if (t.children.length) {
      t.removeAllChildren();
    }
    var e = t.children;
    for (var i = 0, s = this.children.length; i < s; i++) {
      var r = this.children[i].clone(true);
      r.parent = t;
      e.push(r);
    }
  };
  t._getObjectsUnderPoint = function (t, e, i, s, r, n) {
    if (!(n = n || 0) && !this._testMask(this, t, e)) {
      return null;
    }
    var a;
    var o = createjs.DisplayObject._hitTestContext;
    r = r || s && this._hasMouseEventListener();
    var h = this.children;
    for (var c = h.length - 1; c >= 0; c--) {
      var u = h[c];
      var l = u.hitArea;
      if (u.visible && (l || u.isVisible()) && (!s || u.mouseEnabled) && (l || this._testMask(u, t, e))) {
        if (!l && u instanceof Container) {
          var d = u._getObjectsUnderPoint(t, e, i, s, r, n + 1);
          if (!i && d) {
            if (s && !this.mouseChildren) {
              return this;
            } else {
              return d;
            }
          }
        } else {
          if (s && !r && !u._hasMouseEventListener()) {
            continue;
          }
          var p = u.getConcatenatedDisplayProps(u._props);
          a = p.matrix;
          if (l) {
            a.appendMatrix(l.getMatrix(l._props.matrix));
            p.alpha = l.alpha;
          }
          o.globalAlpha = p.alpha;
          o.setTransform(a.a, a.b, a.c, a.d, a.tx - t, a.ty - e);
          (l || u).draw(o);
          if (!this._testHit(o)) {
            continue;
          }
          o.setTransform(1, 0, 0, 1, 0, 0);
          o.clearRect(0, 0, 2, 2);
          if (!i) {
            if (s && !this.mouseChildren) {
              return this;
            } else {
              return u;
            }
          }
          i.push(u);
        }
      }
    }
    return null;
  };
  t._testMask = function (t, e, i) {
    var s = t.mask;
    if (!s || !s.graphics || s.graphics.isEmpty()) {
      return true;
    }
    var r = this._props.matrix;
    var n = t.parent;
    r = n ? n.getConcatenatedMatrix(r) : r.identity();
    r = s.getMatrix(s._props.matrix).prependMatrix(r);
    var a = createjs.DisplayObject._hitTestContext;
    a.setTransform(r.a, r.b, r.c, r.d, r.tx - e, r.ty - i);
    s.graphics.drawAsPath(a);
    a.fillStyle = "#000";
    a.fill();
    return !!this._testHit(a) && (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, 2, 2), true);
  };
  t._getBounds = function (t, e) {
    var i = this.DisplayObject_getBounds();
    if (i) {
      return this._transformBounds(i, t, e);
    }
    var s = this._props.matrix;
    s = e ? s.identity() : this.getMatrix(s);
    if (t) {
      s.prependMatrix(t);
    }
    for (var r = this.children.length, n = null, a = 0; a < r; a++) {
      var o = this.children[a];
      if (o.visible && (i = o._getBounds(s))) {
        if (n) {
          n.extend(i.x, i.y, i.width, i.height);
        } else {
          n = i.clone();
        }
      }
    }
    return n;
  };
  createjs.Container = createjs.promote(Container, "DisplayObject");
})();
(function () {
  'use strict';

  function Stage(t) {
    this.Container_constructor();
    this.autoClear = true;
    this.canvas = typeof t == "string" ? document.getElementById(t) : t;
    this.mouseX = 0;
    this.mouseY = 0;
    this.drawRect = null;
    this.snapToPixelEnabled = false;
    this.mouseInBounds = false;
    this.tickOnUpdate = true;
    this.mouseMoveOutside = false;
    this.preventSelection = true;
    this._pointerData = {};
    this._pointerCount = 0;
    this._primaryPointerID = null;
    this._mouseOverIntervalID = null;
    this._nextStage = null;
    this._prevStage = null;
    this.enableDOMEvents(true);
  }
  var t = createjs.extend(Stage, createjs.Container);
  t._get_nextStage = function () {
    return this._nextStage;
  };
  t._set_nextStage = function (t) {
    if (this._nextStage) {
      this._nextStage._prevStage = null;
    }
    if (t) {
      t._prevStage = this;
    }
    this._nextStage = t;
  };
  try {
    Object.defineProperties(t, {
      nextStage: {
        get: t._get_nextStage,
        set: t._set_nextStage
      }
    });
  } catch (t) {}
  t.update = function (t) {
    if (this.canvas && (this.tickOnUpdate && this.tick(t), this.dispatchEvent("drawstart", false, true) !== false)) {
      createjs.DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled;
      var e = this.drawRect;
      var i = this.canvas.getContext("2d");
      i.setTransform(1, 0, 0, 1, 0, 0);
      if (this.autoClear) {
        if (e) {
          i.clearRect(e.x, e.y, e.width, e.height);
        } else {
          i.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1);
        }
      }
      i.save();
      if (this.drawRect) {
        i.beginPath();
        i.rect(e.x, e.y, e.width, e.height);
        i.clip();
      }
      this.updateContext(i);
      this.draw(i, false);
      i.restore();
      this.dispatchEvent("drawend");
    }
  };
  t.tick = function (t) {
    if (this.tickEnabled && this.dispatchEvent("tickstart", false, true) !== false) {
      var e = new createjs.Event("tick");
      if (t) {
        for (var i in t) {
          if (t.hasOwnProperty(i)) {
            e[i] = t[i];
          }
        }
      }
      this._tick(e);
      this.dispatchEvent("tickend");
    }
  };
  t.handleEvent = function (t) {
    if (t.type == "tick") {
      this.update(t);
    }
  };
  t.clear = function () {
    if (this.canvas) {
      var t = this.canvas.getContext("2d");
      t.setTransform(1, 0, 0, 1, 0, 0);
      t.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1);
    }
  };
  t.toDataURL = function (t, e) {
    var i;
    var s = this.canvas.getContext("2d");
    var r = this.canvas.width;
    var n = this.canvas.height;
    if (t) {
      i = s.getImageData(0, 0, r, n);
      var a = s.globalCompositeOperation;
      s.globalCompositeOperation = "destination-over";
      s.fillStyle = t;
      s.fillRect(0, 0, r, n);
    }
    var o = this.canvas.toDataURL(e || "image/png");
    if (t) {
      s.putImageData(i, 0, 0);
      s.globalCompositeOperation = a;
    }
    return o;
  };
  t.enableMouseOver = function (t) {
    if (this._mouseOverIntervalID) {
      clearInterval(this._mouseOverIntervalID);
      this._mouseOverIntervalID = null;
      if (t == 0) {
        this._testMouseOver(true);
      }
    }
    if (t == null) {
      t = 20;
    } else if (t <= 0) {
      return;
    }
    var e = this;
    this._mouseOverIntervalID = setInterval(function () {
      e._testMouseOver();
    }, 1000 / Math.min(50, t));
  };
  t.enableDOMEvents = function (t) {
    if (t == null) {
      t = true;
    }
    var e;
    var i;
    var s = this._eventListeners;
    if (!t && s) {
      for (e in s) {
        (i = s[e]).t.removeEventListener(e, i.f, false);
      }
      this._eventListeners = null;
    } else if (t && !s && this.canvas) {
      var r = window.addEventListener ? window : document;
      var n = this;
      (s = this._eventListeners = {}).mouseup = {
        t: r,
        f: function (t) {
          n._handleMouseUp(t);
        }
      };
      s.mousemove = {
        t: r,
        f: function (t) {
          n._handleMouseMove(t);
        }
      };
      s.dblclick = {
        t: this.canvas,
        f: function (t) {
          n._handleDoubleClick(t);
        }
      };
      s.mousedown = {
        t: this.canvas,
        f: function (t) {
          n._handleMouseDown(t);
        }
      };
      for (e in s) {
        (i = s[e]).t.addEventListener(e, i.f, false);
      }
    }
  };
  t.clone = function () {
    throw "Stage cannot be cloned.";
  };
  t.toString = function () {
    return "[Stage (name=" + this.name + ")]";
  };
  t._getElementRect = function (t) {
    var e;
    try {
      e = t.getBoundingClientRect();
    } catch (i) {
      e = {
        top: t.offsetTop,
        left: t.offsetLeft,
        width: t.offsetWidth,
        height: t.offsetHeight
      };
    }
    var i = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0);
    var s = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0);
    var r = window.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle;
    var n = parseInt(r.paddingLeft) + parseInt(r.borderLeftWidth);
    var a = parseInt(r.paddingTop) + parseInt(r.borderTopWidth);
    var o = parseInt(r.paddingRight) + parseInt(r.borderRightWidth);
    var h = parseInt(r.paddingBottom) + parseInt(r.borderBottomWidth);
    return {
      left: e.left + i + n,
      right: e.right + i - o,
      top: e.top + s + a,
      bottom: e.bottom + s - h
    };
  };
  t._getPointerData = function (t) {
    var e = this._pointerData[t];
    e ||= this._pointerData[t] = {
      x: 0,
      y: 0
    };
    return e;
  };
  t._handleMouseMove = function (t) {
    t ||= window.event;
    this._handlePointerMove(-1, t, t.pageX, t.pageY);
  };
  t._handlePointerMove = function (t, e, i, s, r) {
    if ((!this._prevStage || r !== undefined) && this.canvas) {
      var n = this._nextStage;
      var a = this._getPointerData(t);
      var o = a.inBounds;
      this._updatePointerPosition(t, e, i, s);
      if (o || a.inBounds || this.mouseMoveOutside) {
        if (t === -1 && a.inBounds == !o) {
          this._dispatchMouseEvent(this, o ? "mouseleave" : "mouseenter", false, t, a, e);
        }
        this._dispatchMouseEvent(this, "stagemousemove", false, t, a, e);
        this._dispatchMouseEvent(a.target, "pressmove", true, t, a, e);
      }
      if (n) {
        n._handlePointerMove(t, e, i, s, null);
      }
    }
  };
  t._updatePointerPosition = function (t, e, i, s) {
    var r = this._getElementRect(this.canvas);
    i -= r.left;
    s -= r.top;
    var n = this.canvas.width;
    var a = this.canvas.height;
    i /= (r.right - r.left) / n;
    s /= (r.bottom - r.top) / a;
    var o = this._getPointerData(t);
    if (o.inBounds = i >= 0 && s >= 0 && i <= n - 1 && s <= a - 1) {
      o.x = i;
      o.y = s;
    } else if (this.mouseMoveOutside) {
      o.x = i < 0 ? 0 : i > n - 1 ? n - 1 : i;
      o.y = s < 0 ? 0 : s > a - 1 ? a - 1 : s;
    }
    o.posEvtObj = e;
    o.rawX = i;
    o.rawY = s;
    if (t === this._primaryPointerID || t === -1) {
      this.mouseX = o.x;
      this.mouseY = o.y;
      this.mouseInBounds = o.inBounds;
    }
  };
  t._handleMouseUp = function (t) {
    this._handlePointerUp(-1, t, false);
  };
  t._handlePointerUp = function (t, e, i, s) {
    var r = this._nextStage;
    var n = this._getPointerData(t);
    if (!this._prevStage || s !== undefined) {
      var a = null;
      var o = n.target;
      if (!s && (!!o || !!r)) {
        a = this._getObjectsUnderPoint(n.x, n.y, null, true);
      }
      if (n.down) {
        this._dispatchMouseEvent(this, "stagemouseup", false, t, n, e, a);
        n.down = false;
      }
      if (a == o) {
        this._dispatchMouseEvent(o, "click", true, t, n, e);
      }
      this._dispatchMouseEvent(o, "pressup", true, t, n, e);
      if (i) {
        if (t == this._primaryPointerID) {
          this._primaryPointerID = null;
        }
        delete this._pointerData[t];
      } else {
        n.target = null;
      }
      if (r) {
        r._handlePointerUp(t, e, i, s || a && this);
      }
    }
  };
  t._handleMouseDown = function (t) {
    this._handlePointerDown(-1, t, t.pageX, t.pageY);
  };
  t._handlePointerDown = function (t, e, i, s, r) {
    if (this.preventSelection) {
      e.preventDefault();
    }
    if (this._primaryPointerID == null || t === -1) {
      this._primaryPointerID = t;
    }
    if (s != null) {
      this._updatePointerPosition(t, e, i, s);
    }
    var n = null;
    var a = this._nextStage;
    var o = this._getPointerData(t);
    if (!r) {
      n = o.target = this._getObjectsUnderPoint(o.x, o.y, null, true);
    }
    if (o.inBounds) {
      this._dispatchMouseEvent(this, "stagemousedown", false, t, o, e, n);
      o.down = true;
    }
    this._dispatchMouseEvent(n, "mousedown", true, t, o, e);
    if (a) {
      a._handlePointerDown(t, e, i, s, r || n && this);
    }
  };
  t._testMouseOver = function (t, e, i) {
    if (!this._prevStage || e !== undefined) {
      var s = this._nextStage;
      if (this._mouseOverIntervalID) {
        var r = this._getPointerData(-1);
        if (r && (t || this.mouseX != this._mouseOverX || this.mouseY != this._mouseOverY || !this.mouseInBounds)) {
          var n;
          var a;
          var o;
          var h = r.posEvtObj;
          var c = i || h && h.target == this.canvas;
          var u = null;
          var l = -1;
          var d = "";
          if (!e && (t || this.mouseInBounds && c)) {
            u = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, true);
            this._mouseOverX = this.mouseX;
            this._mouseOverY = this.mouseY;
          }
          var p = this._mouseOverTarget || [];
          var _ = p[p.length - 1];
          var f = this._mouseOverTarget = [];
          for (n = u; n;) {
            f.unshift(n);
            d ||= n.cursor;
            n = n.parent;
          }
          this.canvas.style.cursor = d;
          if (!e && i) {
            i.canvas.style.cursor = d;
          }
          a = 0;
          o = f.length;
          for (; a < o && f[a] == p[a]; a++) {
            l = a;
          }
          if (_ != u) {
            this._dispatchMouseEvent(_, "mouseout", true, -1, r, h, u);
          }
          a = p.length - 1;
          for (; a > l; a--) {
            this._dispatchMouseEvent(p[a], "rollout", false, -1, r, h, u);
          }
          for (a = f.length - 1; a > l; a--) {
            this._dispatchMouseEvent(f[a], "rollover", false, -1, r, h, _);
          }
          if (_ != u) {
            this._dispatchMouseEvent(u, "mouseover", true, -1, r, h, _);
          }
          if (s) {
            s._testMouseOver(t, e || u && this, i || c && this);
          }
        }
      } else if (s) {
        s._testMouseOver(t, e, i);
      }
    }
  };
  t._handleDoubleClick = function (t, e) {
    var i = null;
    var s = this._nextStage;
    var r = this._getPointerData(-1);
    if (!e) {
      i = this._getObjectsUnderPoint(r.x, r.y, null, true);
      this._dispatchMouseEvent(i, "dblclick", true, -1, r, t);
    }
    if (s) {
      s._handleDoubleClick(t, e || i && this);
    }
  };
  t._dispatchMouseEvent = function (t, e, i, s, r, n, a) {
    if (t && (i || t.hasEventListener(e))) {
      var o = new createjs.MouseEvent(e, i, false, r.x, r.y, n, s, s === this._primaryPointerID || s === -1, r.rawX, r.rawY, a);
      t.dispatchEvent(o);
    }
  };
  createjs.Stage = createjs.promote(Stage, "Container");
})();
(function () {
  function Bitmap(t) {
    this.DisplayObject_constructor();
    if (typeof t == "string") {
      this.image = document.createElement("img");
      this.image.src = t;
    } else {
      this.image = t;
    }
    this.sourceRect = null;
  }
  var t = createjs.extend(Bitmap, createjs.DisplayObject);
  t.initialize = Bitmap;
  t.isVisible = function () {
    var t = this.image;
    var e = this.cacheCanvas || t && (t.naturalWidth || t.getContext || t.readyState >= 2);
    return !!this.visible && !!(this.alpha > 0) && this.scaleX != 0 && this.scaleY != 0 && !!e;
  };
  t.draw = function (t, e) {
    if (this.DisplayObject_draw(t, e) || !this.image) {
      return true;
    }
    var i = this.image;
    var s = this.sourceRect;
    if (s) {
      var r = s.x;
      var n = s.y;
      var a = r + s.width;
      var o = n + s.height;
      var h = 0;
      var c = 0;
      var u = i.width;
      var l = i.height;
      if (r < 0) {
        h -= r;
        r = 0;
      }
      if (a > u) {
        a = u;
      }
      if (n < 0) {
        c -= n;
        n = 0;
      }
      if (o > l) {
        o = l;
      }
      t.drawImage(i, r, n, a - r, o - n, h, c, a - r, o - n);
    } else {
      t.drawImage(i, 0, 0);
    }
    return true;
  };
  t.getBounds = function () {
    var t = this.DisplayObject_getBounds();
    if (t) {
      return t;
    }
    var e = this.image;
    var i = this.sourceRect || e;
    if (e && (e.naturalWidth || e.getContext || e.readyState >= 2)) {
      return this._rectangle.setValues(0, 0, i.width, i.height);
    } else {
      return null;
    }
  };
  t.clone = function () {
    var t = new Bitmap(this.image);
    if (this.sourceRect) {
      t.sourceRect = this.sourceRect.clone();
    }
    this._cloneProps(t);
    return t;
  };
  t.toString = function () {
    return "[Bitmap (name=" + this.name + ")]";
  };
  createjs.Bitmap = createjs.promote(Bitmap, "DisplayObject");
})();
(function () {
  'use strict';

  function Sprite(t, e) {
    this.DisplayObject_constructor();
    this.currentFrame = 0;
    this.currentAnimation = null;
    this.paused = true;
    this.spriteSheet = t;
    this.currentAnimationFrame = 0;
    this.framerate = 0;
    this._animation = null;
    this._currentFrame = null;
    this._skipAdvance = false;
    if (e != null) {
      this.gotoAndPlay(e);
    }
  }
  var t = createjs.extend(Sprite, createjs.DisplayObject);
  t.initialize = Sprite;
  t.isVisible = function () {
    var t = this.cacheCanvas || this.spriteSheet.complete;
    return !!this.visible && !!(this.alpha > 0) && this.scaleX != 0 && this.scaleY != 0 && !!t;
  };
  t.draw = function (t, e) {
    if (this.DisplayObject_draw(t, e)) {
      return true;
    }
    this._normalizeFrame();
    var i = this.spriteSheet.getFrame(this._currentFrame | 0);
    if (!i) {
      return false;
    }
    var s = i.rect;
    if (s.width && s.height) {
      t.drawImage(i.image, s.x, s.y, s.width, s.height, -i.regX, -i.regY, s.width, s.height);
    }
    return true;
  };
  t.play = function () {
    this.paused = false;
  };
  t.stop = function () {
    this.paused = true;
  };
  t.gotoAndPlay = function (t) {
    this.paused = false;
    this._skipAdvance = true;
    this._goto(t);
  };
  t.gotoAndStop = function (t) {
    this.paused = true;
    this._goto(t);
  };
  t.advance = function (t) {
    var e = this.framerate || this.spriteSheet.framerate;
    var i = e && t != null ? t / (1000 / e) : 1;
    this._normalizeFrame(i);
  };
  t.getBounds = function () {
    return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle);
  };
  t.clone = function () {
    return this._cloneProps(new Sprite(this.spriteSheet));
  };
  t.toString = function () {
    return "[Sprite (name=" + this.name + ")]";
  };
  t._cloneProps = function (t) {
    this.DisplayObject__cloneProps(t);
    t.currentFrame = this.currentFrame;
    t.currentAnimation = this.currentAnimation;
    t.paused = this.paused;
    t.currentAnimationFrame = this.currentAnimationFrame;
    t.framerate = this.framerate;
    t._animation = this._animation;
    t._currentFrame = this._currentFrame;
    t._skipAdvance = this._skipAdvance;
    return t;
  };
  t._tick = function (t) {
    if (!this.paused) {
      if (!this._skipAdvance) {
        this.advance(t && t.delta);
      }
      this._skipAdvance = false;
    }
    this.DisplayObject__tick(t);
  };
  t._normalizeFrame = function (t) {
    t = t || 0;
    var e;
    var i = this._animation;
    var s = this.paused;
    var r = this._currentFrame;
    if (i) {
      var n = i.speed || 1;
      var a = this.currentAnimationFrame;
      if (a + t * n >= (e = i.frames.length)) {
        var o = i.next;
        if (this._dispatchAnimationEnd(i, r, s, o, e - 1)) {
          return;
        }
        if (o) {
          return this._goto(o, t - (e - a) / n);
        }
        this.paused = true;
        a = i.frames.length - 1;
      } else {
        a += t * n;
      }
      this.currentAnimationFrame = a;
      this._currentFrame = i.frames[a | 0];
    } else if ((r = this._currentFrame += t) >= (e = this.spriteSheet.getNumFrames()) && e > 0 && !this._dispatchAnimationEnd(i, r, s, e - 1) && (this._currentFrame -= e) >= e) {
      return this._normalizeFrame();
    }
    r = this._currentFrame | 0;
    if (this.currentFrame != r) {
      this.currentFrame = r;
      this.dispatchEvent("change");
    }
  };
  t._dispatchAnimationEnd = function (t, e, i, s, r) {
    var n = t ? t.name : null;
    if (this.hasEventListener("animationend")) {
      var a = new createjs.Event("animationend");
      a.name = n;
      a.next = s;
      this.dispatchEvent(a);
    }
    var o = this._animation != t || this._currentFrame != e;
    if (!o && !i && !!this.paused) {
      this.currentAnimationFrame = r;
      o = true;
    }
    return o;
  };
  t._goto = function (t, e) {
    this.currentAnimationFrame = 0;
    if (isNaN(t)) {
      var i = this.spriteSheet.getAnimation(t);
      if (i) {
        this._animation = i;
        this.currentAnimation = t;
        this._normalizeFrame(e);
      }
    } else {
      this.currentAnimation = this._animation = null;
      this._currentFrame = t;
      this._normalizeFrame();
    }
  };
  createjs.Sprite = createjs.promote(Sprite, "DisplayObject");
})();
(function () {
  'use strict';

  function Shape(t) {
    this.DisplayObject_constructor();
    this.graphics = t || new createjs.Graphics();
  }
  var t = createjs.extend(Shape, createjs.DisplayObject);
  t.isVisible = function () {
    var t = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
    return !!this.visible && !!(this.alpha > 0) && this.scaleX != 0 && this.scaleY != 0 && !!t;
  };
  t.draw = function (t, e) {
    return !!this.DisplayObject_draw(t, e) || (this.graphics.draw(t, this), true);
  };
  t.clone = function (t) {
    var e = t && this.graphics ? this.graphics.clone() : this.graphics;
    return this._cloneProps(new Shape(e));
  };
  t.toString = function () {
    return "[Shape (name=" + this.name + ")]";
  };
  createjs.Shape = createjs.promote(Shape, "DisplayObject");
})();
(function () {
  'use strict';

  function Text(t, e, i) {
    this.DisplayObject_constructor();
    this.text = t;
    this.font = e;
    this.color = i;
    this.textAlign = "left";
    this.textBaseline = "top";
    this.maxWidth = null;
    this.outline = 0;
    this.lineHeight = 0;
    this.lineWidth = null;
  }
  var t = createjs.extend(Text, createjs.DisplayObject);
  var e = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
  if (e.getContext) {
    Text._workingContext = e.getContext("2d", {
      willReadFrequently: true
    });
    e.width = e.height = 1;
  }
  Text.H_OFFSETS = {
    start: 0,
    left: 0,
    center: -0.5,
    end: -1,
    right: -1
  };
  Text.V_OFFSETS = {
    top: 0,
    hanging: -0.01,
    middle: -0.4,
    alphabetic: -0.8,
    ideographic: -0.85,
    bottom: -1
  };
  t.isVisible = function () {
    var t = this.cacheCanvas || this.text != null && this.text !== "";
    return !!this.visible && !!(this.alpha > 0) && this.scaleX != 0 && this.scaleY != 0 && !!t;
  };
  t.draw = function (t, e) {
    if (this.DisplayObject_draw(t, e)) {
      return true;
    }
    var i = this.color || "#000";
    if (this.outline) {
      t.strokeStyle = i;
      t.lineWidth = this.outline * 1;
    } else {
      t.fillStyle = i;
    }
    this._drawText(this._prepContext(t));
    return true;
  };
  t.getMeasuredWidth = function () {
    return this._getMeasuredWidth(this.text);
  };
  t.getMeasuredLineHeight = function () {
    return this._getMeasuredWidth("M") * 1.2;
  };
  t.getMeasuredHeight = function () {
    return this._drawText(null, {}).height;
  };
  t.getBounds = function () {
    var t = this.DisplayObject_getBounds();
    if (t) {
      return t;
    }
    if (this.text == null || this.text === "") {
      return null;
    }
    var e = this._drawText(null, {});
    var i = this.maxWidth && this.maxWidth < e.width ? this.maxWidth : e.width;
    var s = i * Text.H_OFFSETS[this.textAlign || "left"];
    var r = (this.lineHeight || this.getMeasuredLineHeight()) * Text.V_OFFSETS[this.textBaseline || "top"];
    return this._rectangle.setValues(s, r, i, e.height);
  };
  t.getMetrics = function () {
    var t = {
      lines: []
    };
    t.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
    t.vOffset = t.lineHeight * Text.V_OFFSETS[this.textBaseline || "top"];
    return this._drawText(null, t, t.lines);
  };
  t.clone = function () {
    return this._cloneProps(new Text(this.text, this.font, this.color));
  };
  t.toString = function () {
    return "[Text (text=" + (this.text.length > 20 ? this.text.substr(0, 17) + "..." : this.text) + ")]";
  };
  t._cloneProps = function (t) {
    this.DisplayObject__cloneProps(t);
    t.textAlign = this.textAlign;
    t.textBaseline = this.textBaseline;
    t.maxWidth = this.maxWidth;
    t.outline = this.outline;
    t.lineHeight = this.lineHeight;
    t.lineWidth = this.lineWidth;
    return t;
  };
  t._prepContext = function (t) {
    t.font = this.font || "10px sans-serif";
    t.textAlign = this.textAlign || "left";
    t.textBaseline = this.textBaseline || "top";
    return t;
  };
  t._drawText = function (t, e, i) {
    var s = !!t;
    if (!s) {
      (t = Text._workingContext).save();
      this._prepContext(t);
    }
    var r = this.lineHeight || this.getMeasuredLineHeight();
    var n = 0;
    var a = 0;
    var o = String(this.text).split(/(?:\r\n|\r|\n)/);
    for (var h = 0, c = o.length; h < c; h++) {
      var u = o[h];
      var l = null;
      if (this.lineWidth != null && (l = t.measureText(u).width) > this.lineWidth) {
        var d = u.split(/(\s)/);
        u = d[0];
        l = t.measureText(u).width;
        for (var p = 1, _ = d.length; p < _; p += 2) {
          var f = t.measureText(d[p] + d[p + 1]).width;
          if (l + f > this.lineWidth) {
            if (s) {
              this._drawTextLine(t, u, a * r);
            }
            if (i) {
              i.push(u);
            }
            if (l > n) {
              n = l;
            }
            u = d[p + 1];
            l = t.measureText(u).width;
            a++;
          } else {
            u += d[p] + d[p + 1];
            l += f;
          }
        }
      }
      if (s) {
        this._drawTextLine(t, u, a * r);
      }
      if (i) {
        i.push(u);
      }
      if (e && l == null) {
        l = t.measureText(u).width;
      }
      if (l > n) {
        n = l;
      }
      a++;
    }
    if (e) {
      e.width = n;
      e.height = a * r;
    }
    if (!s) {
      t.restore();
    }
    return e;
  };
  t._drawTextLine = function (t, e, i) {
    if (this.outline) {
      t.strokeText(e, 0, i, this.maxWidth || 65535);
    } else {
      t.fillText(e, 0, i, this.maxWidth || 65535);
    }
  };
  t._getMeasuredWidth = function (t) {
    var e = Text._workingContext;
    e.save();
    var i = this._prepContext(e).measureText(t).width;
    e.restore();
    return i;
  };
  createjs.Text = createjs.promote(Text, "DisplayObject");
})();
(function () {
  'use strict';

  function BitmapText(t, e) {
    this.Container_constructor();
    this.text = t || "";
    this.spriteSheet = e;
    this.lineHeight = 0;
    this.letterSpacing = 0;
    this.spaceWidth = 0;
    this._oldProps = {
      text: 0,
      spriteSheet: 0,
      lineHeight: 0,
      letterSpacing: 0,
      spaceWidth: 0
    };
  }
  var t = createjs.extend(BitmapText, createjs.Container);
  BitmapText.maxPoolSize = 100;
  BitmapText._spritePool = [];
  t.draw = function (t, e) {
    if (!this.DisplayObject_draw(t, e)) {
      this._updateText();
      this.Container_draw(t, e);
    }
  };
  t.getBounds = function () {
    this._updateText();
    return this.Container_getBounds();
  };
  t.isVisible = function () {
    var t = this.cacheCanvas || this.spriteSheet && this.spriteSheet.complete && this.text;
    return !!this.visible && !!(this.alpha > 0) && this.scaleX !== 0 && this.scaleY !== 0 && !!t;
  };
  t.clone = function () {
    return this._cloneProps(new BitmapText(this.text, this.spriteSheet));
  };
  t.addChild = t.addChildAt = t.removeChild = t.removeChildAt = t.removeAllChildren = function () {};
  t._cloneProps = function (t) {
    this.Container__cloneProps(t);
    t.lineHeight = this.lineHeight;
    t.letterSpacing = this.letterSpacing;
    t.spaceWidth = this.spaceWidth;
    return t;
  };
  t._getFrameIndex = function (t, e) {
    var i;
    var s = e.getAnimation(t);
    if (!s) {
      if (t == (i = t.toUpperCase()) && t == (i = t.toLowerCase())) {
        i = null;
      }
      if (i) {
        s = e.getAnimation(i);
      }
    }
    return s && s.frames[0];
  };
  t._getFrame = function (t, e) {
    var i = this._getFrameIndex(t, e);
    if (i == null) {
      return i;
    } else {
      return e.getFrame(i);
    }
  };
  t._getLineHeight = function (t) {
    var e = this._getFrame("1", t) || this._getFrame("T", t) || this._getFrame("L", t) || t.getFrame(0);
    if (e) {
      return e.rect.height;
    } else {
      return 1;
    }
  };
  t._getSpaceWidth = function (t) {
    var e = this._getFrame("1", t) || this._getFrame("l", t) || this._getFrame("e", t) || this._getFrame("a", t) || t.getFrame(0);
    if (e) {
      return e.rect.width;
    } else {
      return 1;
    }
  };
  t._updateText = function () {
    var t;
    var e = 0;
    var i = 0;
    var s = this._oldProps;
    var r = false;
    var n = this.spaceWidth;
    var a = this.lineHeight;
    var o = this.spriteSheet;
    var h = BitmapText._spritePool;
    var c = this.children;
    var u = 0;
    var l = c.length;
    for (var d in s) {
      if (s[d] != this[d]) {
        s[d] = this[d];
        r = true;
      }
    }
    if (r) {
      var p = !!this._getFrame(" ", o);
      if (!p && !n) {
        n = this._getSpaceWidth(o);
      }
      a ||= this._getLineHeight(o);
      for (var _ = 0, f = this.text.length; _ < f; _++) {
        var g = this.text.charAt(_);
        if (g != " " || p) {
          if (g != "\n" && g != "\r") {
            var m = this._getFrameIndex(g, o);
            if (m != null) {
              if (u < l) {
                t = c[u];
              } else {
                c.push(t = h.length ? h.pop() : new createjs.Sprite());
                t.parent = this;
                l++;
              }
              t.spriteSheet = o;
              t.gotoAndStop(m);
              t.x = e;
              t.y = i;
              u++;
              e += t.getBounds().width + this.letterSpacing;
            }
          } else {
            if (g == "\r" && this.text.charAt(_ + 1) == "\n") {
              _++;
            }
            e = 0;
            i += a;
          }
        } else {
          e += n;
        }
      }
      while (l > u) {
        h.push(t = c.pop());
        t.parent = null;
        l--;
      }
      if (h.length > BitmapText.maxPoolSize) {
        h.length = BitmapText.maxPoolSize;
      }
    }
  };
  createjs.BitmapText = createjs.promote(BitmapText, "Container");
})();
(function () {
  'use strict';

  function MovieClip(t, e, i, s) {
    this.Container_constructor();
    if (!MovieClip.inited) {
      MovieClip.init();
    }
    this.mode = t || MovieClip.INDEPENDENT;
    this.startPosition = e || 0;
    this.loop = i;
    this.currentFrame = 0;
    this.timeline = new createjs.Timeline(null, s, {
      paused: true,
      position: e,
      useTicks: true
    });
    this.paused = false;
    this.actionsEnabled = true;
    this.autoReset = true;
    this.frameBounds = this.frameBounds || null;
    this.framerate = null;
    this._synchOffset = 0;
    this._prevPos = -1;
    this._prevPosition = 0;
    this._t = 0;
    this._managed = {};
  }
  var t = createjs.extend(MovieClip, createjs.Container);
  MovieClip.INDEPENDENT = "independent";
  MovieClip.SINGLE_FRAME = "single";
  MovieClip.SYNCHED = "synched";
  MovieClip.inited = false;
  MovieClip.init = function () {
    if (!MovieClip.inited) {
      MovieClipPlugin.install();
      MovieClip.inited = true;
    }
  };
  t.getLabels = function () {
    return this.timeline.getLabels();
  };
  t.getCurrentLabel = function () {
    this._updateTimeline();
    return this.timeline.getCurrentLabel();
  };
  t.getDuration = function () {
    return this.timeline.duration;
  };
  try {
    Object.defineProperties(t, {
      labels: {
        get: t.getLabels
      },
      currentLabel: {
        get: t.getCurrentLabel
      },
      totalFrames: {
        get: function () {
          return this.timeline.duration || (this.children.length ? 1 : 0);
        }
      },
      duration: {
        get: t.getDuration
      }
    });
  } catch (t) {}
  function MovieClipPlugin() {
    throw "MovieClipPlugin cannot be instantiated.";
  }
  t.initialize = MovieClip;
  t.isVisible = function () {
    return !!this.visible && !!(this.alpha > 0) && this.scaleX != 0 && this.scaleY != 0;
  };
  t.draw = function (t, e) {
    return !!this.DisplayObject_draw(t, e) || (this._updateTimeline(), this.Container_draw(t, e), true);
  };
  t.play = function () {
    this.paused = false;
  };
  t.stop = function () {
    this.paused = true;
  };
  t.gotoAndPlay = function (t) {
    this.paused = false;
    this._goto(t);
  };
  t.gotoAndStop = function (t) {
    this.paused = true;
    this._goto(t);
  };
  t.advance = function (t) {
    var e = MovieClip.INDEPENDENT;
    if (this.mode == e) {
      for (var i = this, s = i.framerate; (i = i.parent) && s == null;) {
        if (i.mode == e) {
          s = i._framerate;
        }
      }
      this._framerate = s;
      var r = s != null && s != -1 && t != null ? t / (1000 / s) + this._t : 1;
      var n = r | 0;
      for (this._t = r - n; !this.paused && n--;) {
        this._prevPosition = this._prevPos < 0 ? 0 : this._prevPosition + 1;
        this._updateTimeline();
      }
    }
  };
  t.clone = function () {
    throw "MovieClip cannot be cloned.";
  };
  t.toString = function () {
    return "[MovieClip (name=" + this.name + ")]";
  };
  t._tick = function (t) {
    this.advance(t && t.delta);
    this.Container__tick(t);
  };
  t._goto = function (t) {
    var e = this.timeline.resolve(t);
    if (e != null) {
      if (this._prevPos == -1) {
        this._prevPos = NaN;
      }
      this._prevPosition = e;
      this._t = 0;
      this._updateTimeline();
    }
  };
  t._reset = function () {
    this._prevPos = -1;
    this._t = this.currentFrame = 0;
    this.paused = false;
  };
  t._updateTimeline = function () {
    var t = this.timeline;
    var e = this.mode != MovieClip.INDEPENDENT;
    t.loop = this.loop == null || this.loop;
    var i = e ? this.startPosition + (this.mode == MovieClip.SINGLE_FRAME ? 0 : this._synchOffset) : this._prevPos < 0 ? 0 : this._prevPosition;
    var s = e || !this.actionsEnabled ? createjs.Tween.NONE : null;
    this.currentFrame = t._calcPosition(i);
    t.setPosition(i, s);
    this._prevPosition = t._prevPosition;
    if (this._prevPos != t._prevPos) {
      this.currentFrame = this._prevPos = t._prevPos;
      for (var r in this._managed) {
        this._managed[r] = 1;
      }
      var n = t._tweens;
      for (var a = 0, o = n.length; a < o; a++) {
        var h = n[a];
        var c = h._target;
        if (c != this && !h.passive) {
          var u = h._stepPosition;
          if (c instanceof createjs.DisplayObject) {
            this._addManagedChild(c, u);
          } else {
            this._setState(c.state, u);
          }
        }
      }
      var l = this.children;
      for (a = l.length - 1; a >= 0; a--) {
        var d = l[a].id;
        if (this._managed[d] == 1) {
          this.removeChildAt(a);
          delete this._managed[d];
        }
      }
    }
  };
  t._setState = function (t, e) {
    if (t) {
      for (var i = t.length - 1; i >= 0; i--) {
        var s = t[i];
        var r = s.t;
        var n = s.p;
        for (var a in n) {
          r[a] = n[a];
        }
        this._addManagedChild(r, e);
      }
    }
  };
  t._addManagedChild = function (t, e) {
    if (!t._off) {
      this.addChildAt(t, 0);
      if (t instanceof MovieClip) {
        t._synchOffset = e;
        if (t.mode == MovieClip.INDEPENDENT && t.autoReset && !this._managed[t.id]) {
          t._reset();
        }
      }
      this._managed[t.id] = 2;
    }
  };
  t._getBounds = function (t, e) {
    var i = this.DisplayObject_getBounds();
    if (!i) {
      this._updateTimeline();
      if (this.frameBounds) {
        i = this._rectangle.copy(this.frameBounds[this.currentFrame]);
      }
    }
    if (i) {
      return this._transformBounds(i, t, e);
    } else {
      return this.Container__getBounds(t, e);
    }
  };
  createjs.MovieClip = createjs.promote(MovieClip, "Container");
  MovieClipPlugin.priority = 100;
  MovieClipPlugin.install = function () {
    createjs.Tween.installPlugin(MovieClipPlugin, ["startPosition"]);
  };
  MovieClipPlugin.init = function (t, e, i) {
    return i;
  };
  MovieClipPlugin.step = function () {};
  MovieClipPlugin.tween = function (t, e, i, s, r, n, a, o) {
    if (t.target instanceof MovieClip) {
      if (n == 1) {
        return r[e];
      } else {
        return s[e];
      }
    } else {
      return i;
    }
  };
})();
(function () {
  'use strict';

  function SpriteSheetUtils() {
    throw "SpriteSheetUtils cannot be instantiated";
  }
  var t = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
  if (t.getContext) {
    SpriteSheetUtils._workingCanvas = t;
    SpriteSheetUtils._workingContext = t.getContext("2d");
    t.width = t.height = 1;
  }
  SpriteSheetUtils.addFlippedFrames = function (t, e, i, s) {
    if (e || i || s) {
      var r = 0;
      if (e) {
        SpriteSheetUtils._flip(t, ++r, true, false);
      }
      if (i) {
        SpriteSheetUtils._flip(t, ++r, false, true);
      }
      if (s) {
        SpriteSheetUtils._flip(t, ++r, true, true);
      }
    }
  };
  SpriteSheetUtils.extractFrame = function (t, e) {
    if (isNaN(e)) {
      e = t.getAnimation(e).frames[0];
    }
    var i = t.getFrame(e);
    if (!i) {
      return null;
    }
    var s = i.rect;
    var r = SpriteSheetUtils._workingCanvas;
    r.width = s.width;
    r.height = s.height;
    SpriteSheetUtils._workingContext.drawImage(i.image, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height);
    var n = document.createElement("img");
    n.src = r.toDataURL("image/png");
    return n;
  };
  SpriteSheetUtils.mergeAlpha = function (t, e, i) {
    i ||= createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
    i.width = Math.max(e.width, t.width);
    i.height = Math.max(e.height, t.height);
    var s = i.getContext("2d");
    s.save();
    s.drawImage(t, 0, 0);
    s.globalCompositeOperation = "destination-in";
    s.drawImage(e, 0, 0);
    s.restore();
    return i;
  };
  SpriteSheetUtils._flip = function (t, e, i, s) {
    var r = t._images;
    var n = SpriteSheetUtils._workingCanvas;
    var a = SpriteSheetUtils._workingContext;
    for (var o = r.length / e, h = 0; h < o; h++) {
      var c = r[h];
      c.__tmp = h;
      a.setTransform(1, 0, 0, 1, 0, 0);
      a.clearRect(0, 0, n.width + 1, n.height + 1);
      n.width = c.width;
      n.height = c.height;
      a.setTransform(i ? -1 : 1, 0, 0, s ? -1 : 1, i ? c.width : 0, s ? c.height : 0);
      a.drawImage(c, 0, 0);
      var u = document.createElement("img");
      u.src = n.toDataURL("image/png");
      u.width = c.width;
      u.height = c.height;
      r.push(u);
    }
    var l = t._frames;
    var d = l.length / e;
    for (h = 0; h < d; h++) {
      var p = (c = l[h]).rect.clone();
      var _ = {
        image: u = r[c.image.__tmp + o * e],
        rect: p,
        regX: c.regX,
        regY: c.regY
      };
      if (i) {
        p.x = u.width - p.x - p.width;
        _.regX = p.width - c.regX;
      }
      if (s) {
        p.y = u.height - p.y - p.height;
        _.regY = p.height - c.regY;
      }
      l.push(_);
    }
    var f = "_" + (i ? "h" : "") + (s ? "v" : "");
    var g = t._animations;
    var m = t._data;
    var v = g.length / e;
    for (h = 0; h < v; h++) {
      var y = g[h];
      var T = {
        name: y + f,
        speed: (c = m[y]).speed,
        next: c.next,
        frames: []
      };
      if (c.next) {
        T.next += f;
      }
      for (var b = 0, S = (l = c.frames).length; b < S; b++) {
        T.frames.push(l[b] + d * e);
      }
      m[T.name] = T;
      g.push(T.name);
    }
  };
  createjs.SpriteSheetUtils = SpriteSheetUtils;
})();
(function () {
  'use strict';

  function SpriteSheetBuilder(t) {
    this.EventDispatcher_constructor();
    this.maxWidth = 2048;
    this.maxHeight = 2048;
    this.spriteSheet = null;
    this.scale = 1;
    this.padding = 1;
    this.timeSlice = 0.3;
    this.progress = -1;
    this.framerate = t || 0;
    this._frames = [];
    this._animations = {};
    this._data = null;
    this._nextFrameIndex = 0;
    this._index = 0;
    this._timerID = null;
    this._scale = 1;
  }
  var t = createjs.extend(SpriteSheetBuilder, createjs.EventDispatcher);
  SpriteSheetBuilder.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions";
  SpriteSheetBuilder.ERR_RUNNING = "a build is already running";
  t.addFrame = function (t, e, i, s, r) {
    if (this._data) {
      throw SpriteSheetBuilder.ERR_RUNNING;
    }
    var n = e || t.bounds || t.nominalBounds;
    if (!n && t.getBounds) {
      n = t.getBounds();
    }
    if (n) {
      i = i || 1;
      return this._frames.push({
        source: t,
        sourceRect: n,
        scale: i,
        funct: s,
        data: r,
        index: this._frames.length,
        height: n.height * i
      }) - 1;
    } else {
      return null;
    }
  };
  t.addAnimation = function (t, e, i, s) {
    if (this._data) {
      throw SpriteSheetBuilder.ERR_RUNNING;
    }
    this._animations[t] = {
      frames: e,
      next: i,
      speed: s
    };
  };
  t.addMovieClip = function (t, e, i, s, r, n) {
    if (this._data) {
      throw SpriteSheetBuilder.ERR_RUNNING;
    }
    var a = t.frameBounds;
    var o = e || t.bounds || t.nominalBounds;
    if (!o && t.getBounds) {
      o = t.getBounds();
    }
    if (o || a) {
      var h;
      var c;
      var u = this._frames.length;
      var l = t.timeline.duration;
      for (h = 0; h < l; h++) {
        var d = a && a[h] ? a[h] : o;
        this.addFrame(t, d, i, this._setupMovieClipFrame, {
          i: h,
          f: s,
          d: r
        });
      }
      var p = t.timeline._labels;
      var _ = [];
      for (var f in p) {
        _.push({
          index: p[f],
          label: f
        });
      }
      if (_.length) {
        _.sort(function (t, e) {
          return t.index - e.index;
        });
        h = 0;
        c = _.length;
        for (; h < c; h++) {
          var g = _[h].label;
          var m = u + _[h].index;
          for (var v = u + (h == c - 1 ? l : _[h + 1].index), y = [], T = m; T < v; T++) {
            y.push(T);
          }
          if (!n || !!(g = n(g, t, m, v))) {
            this.addAnimation(g, y, true);
          }
        }
      }
    }
  };
  t.build = function () {
    if (this._data) {
      throw SpriteSheetBuilder.ERR_RUNNING;
    }
    for (this._startBuild(); this._drawNext(););
    this._endBuild();
    return this.spriteSheet;
  };
  t.buildAsync = function (t) {
    if (this._data) {
      throw SpriteSheetBuilder.ERR_RUNNING;
    }
    this.timeSlice = t;
    this._startBuild();
    var e = this;
    this._timerID = setTimeout(function () {
      e._run();
    }, 50 - Math.max(0.01, Math.min(0.99, this.timeSlice || 0.3)) * 50);
  };
  t.stopAsync = function () {
    clearTimeout(this._timerID);
    this._data = null;
  };
  t.clone = function () {
    throw "SpriteSheetBuilder cannot be cloned.";
  };
  t.toString = function () {
    return "[SpriteSheetBuilder]";
  };
  t._startBuild = function () {
    var t = this.padding || 0;
    this.progress = 0;
    this.spriteSheet = null;
    this._index = 0;
    this._scale = this.scale;
    var e = [];
    this._data = {
      images: [],
      frames: e,
      framerate: this.framerate,
      animations: this._animations
    };
    var i = this._frames.slice();
    i.sort(function (t, e) {
      if (t.height <= e.height) {
        return -1;
      } else {
        return 1;
      }
    });
    if (i[i.length - 1].height + t * 2 > this.maxHeight) {
      throw SpriteSheetBuilder.ERR_DIMENSIONS;
    }
    var s = 0;
    for (var r = 0, n = 0; i.length;) {
      var a = this._fillRow(i, s, n, e, t);
      if (a.w > r) {
        r = a.w;
      }
      s += a.h;
      if (!a.h || !i.length) {
        var o = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        o.width = this._getSize(r, this.maxWidth);
        o.height = this._getSize(s, this.maxHeight);
        this._data.images[n] = o;
        if (!a.h) {
          r = s = 0;
          n++;
        }
      }
    }
  };
  t._setupMovieClipFrame = function (t, e) {
    var i = t.actionsEnabled;
    t.actionsEnabled = false;
    t.gotoAndStop(e.i);
    t.actionsEnabled = i;
    if (e.f) {
      e.f(t, e.d, e.i);
    }
  };
  t._getSize = function (t, e) {
    for (var i = 4; Math.pow(2, ++i) < t;);
    return Math.min(e, Math.pow(2, i));
  };
  t._fillRow = function (t, e, i, s, r) {
    var n = this.maxWidth;
    var a = this.maxHeight - (e += r);
    var o = r;
    var h = 0;
    for (var c = t.length - 1; c >= 0; c--) {
      var u = t[c];
      var l = this._scale * u.scale;
      var d = u.sourceRect;
      var p = u.source;
      var _ = Math.floor(l * d.x - r);
      var f = Math.floor(l * d.y - r);
      var g = Math.ceil(l * d.height + r * 2);
      var m = Math.ceil(l * d.width + r * 2);
      if (m > n) {
        throw SpriteSheetBuilder.ERR_DIMENSIONS;
      }
      if (!(g > a) && !(o + m > n)) {
        u.img = i;
        u.rect = new createjs.Rectangle(o, e, m, g);
        h = h || g;
        t.splice(c, 1);
        s[u.index] = [o, e, m, g, i, Math.round(-_ + l * p.regX - r), Math.round(-f + l * p.regY - r)];
        o += m;
      }
    }
    return {
      w: o,
      h: h
    };
  };
  t._endBuild = function () {
    this.spriteSheet = new createjs.SpriteSheet(this._data);
    this._data = null;
    this.progress = 1;
    this.dispatchEvent("complete");
  };
  t._run = function () {
    var t = Math.max(0.01, Math.min(0.99, this.timeSlice || 0.3)) * 50;
    for (var e = new Date().getTime() + t, i = false; e > new Date().getTime();) {
      if (!this._drawNext()) {
        i = true;
        break;
      }
    }
    if (i) {
      this._endBuild();
    } else {
      var s = this;
      this._timerID = setTimeout(function () {
        s._run();
      }, 50 - t);
    }
    var r = this.progress = this._index / this._frames.length;
    if (this.hasEventListener("progress")) {
      var n = new createjs.Event("progress");
      n.progress = r;
      this.dispatchEvent(n);
    }
  };
  t._drawNext = function () {
    var t = this._frames[this._index];
    var e = t.scale * this._scale;
    var i = t.rect;
    var s = t.sourceRect;
    var r = this._data.images[t.img].getContext("2d");
    if (t.funct) {
      t.funct(t.source, t.data);
    }
    r.save();
    r.beginPath();
    r.rect(i.x, i.y, i.width, i.height);
    r.clip();
    r.translate(Math.ceil(i.x - s.x * e), Math.ceil(i.y - s.y * e));
    r.scale(e, e);
    t.source.draw(r);
    r.restore();
    return ++this._index < this._frames.length;
  };
  createjs.SpriteSheetBuilder = createjs.promote(SpriteSheetBuilder, "EventDispatcher");
})();
(function () {
  'use strict';

  function DOMElement(t) {
    this.DisplayObject_constructor();
    if (typeof t == "string") {
      t = document.getElementById(t);
    }
    this.mouseEnabled = false;
    var e = t.style;
    e.position = "absolute";
    e.transformOrigin = e.WebkitTransformOrigin = e.msTransformOrigin = e.MozTransformOrigin = e.OTransformOrigin = "0% 0%";
    this.htmlElement = t;
    this._oldProps = null;
  }
  var t = createjs.extend(DOMElement, createjs.DisplayObject);
  t.isVisible = function () {
    return this.htmlElement != null;
  };
  t.draw = function (t, e) {
    return true;
  };
  t.cache = function () {};
  t.uncache = function () {};
  t.updateCache = function () {};
  t.hitTest = function () {};
  t.localToGlobal = function () {};
  t.globalToLocal = function () {};
  t.localToLocal = function () {};
  t.clone = function () {
    throw "DOMElement cannot be cloned.";
  };
  t.toString = function () {
    return "[DOMElement (name=" + this.name + ")]";
  };
  t._tick = function (t) {
    var e = this.getStage();
    if (e) {
      e.on("drawend", this._handleDrawEnd, this, true);
    }
    this.DisplayObject__tick(t);
  };
  t._handleDrawEnd = function (t) {
    var e = this.htmlElement;
    if (e) {
      var i = e.style;
      var s = this.getConcatenatedDisplayProps(this._props);
      var r = s.matrix;
      var n = s.visible ? "visible" : "hidden";
      if (n != i.visibility) {
        i.visibility = n;
      }
      if (s.visible) {
        var a = this._oldProps;
        var o = a && a.matrix;
        var h = 10000;
        if (!o || !o.equals(r)) {
          var c = "matrix(" + (r.a * h | 0) / h + "," + (r.b * h | 0) / h + "," + (r.c * h | 0) / h + "," + (r.d * h | 0) / h + "," + (r.tx + 0.5 | 0);
          i.transform = i.WebkitTransform = i.OTransform = i.msTransform = c + "," + (r.ty + 0.5 | 0) + ")";
          i.MozTransform = c + "px," + (r.ty + 0.5 | 0) + "px)";
          a ||= this._oldProps = new createjs.DisplayProps(true, NaN);
          a.matrix.copy(r);
        }
        if (a.alpha != s.alpha) {
          i.opacity = "" + (s.alpha * h | 0) / h;
          a.alpha = s.alpha;
        }
      }
    }
  };
  createjs.DOMElement = createjs.promote(DOMElement, "DisplayObject");
})();
(function () {
  'use strict';

  function Filter() {}
  var t = Filter.prototype;
  t.getBounds = function (t) {
    return t;
  };
  t.applyFilter = function (t, e, i, s, r, n, a, o) {
    n = n || t;
    if (a == null) {
      a = e;
    }
    if (o == null) {
      o = i;
    }
    try {
      var h = t.getImageData(e, i, s, r);
    } catch (t) {
      return false;
    }
    return !!this._applyFilter(h) && (n.putImageData(h, a, o), true);
  };
  t.toString = function () {
    return "[Filter]";
  };
  t.clone = function () {
    return new Filter();
  };
  t._applyFilter = function (t) {
    return true;
  };
  createjs.Filter = Filter;
})();
(function () {
  'use strict';

  function BlurFilter(t, e, i) {
    if (isNaN(t) || t < 0) {
      t = 0;
    }
    if (isNaN(e) || e < 0) {
      e = 0;
    }
    if (isNaN(i) || i < 1) {
      i = 1;
    }
    this.blurX = t | 0;
    this.blurY = e | 0;
    this.quality = i | 0;
  }
  var t = createjs.extend(BlurFilter, createjs.Filter);
  BlurFilter.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1];
  BlurFilter.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9];
  t.getBounds = function (t) {
    var e = this.blurX | 0;
    var i = this.blurY | 0;
    if (e <= 0 && i <= 0) {
      return t;
    }
    var s = Math.pow(this.quality, 0.2);
    return (t || new createjs.Rectangle()).pad(e * s + 1, i * s + 1, e * s + 1, i * s + 1);
  };
  t.clone = function () {
    return new BlurFilter(this.blurX, this.blurY, this.quality);
  };
  t.toString = function () {
    return "[BlurFilter]";
  };
  t._applyFilter = function (t) {
    var e = this.blurX >> 1;
    if (isNaN(e) || e < 0) {
      return false;
    }
    var i = this.blurY >> 1;
    if (isNaN(i) || i < 0) {
      return false;
    }
    if (e == 0 && i == 0) {
      return false;
    }
    var s = this.quality;
    if (isNaN(s) || s < 1) {
      s = 1;
    }
    if ((s |= 0) > 3) {
      s = 3;
    }
    if (s < 1) {
      s = 1;
    }
    var r = t.data;
    var n = 0;
    var a = 0;
    var o = 0;
    var h = 0;
    var c = 0;
    var u = 0;
    var l = 0;
    var d = 0;
    var p = 0;
    var _ = 0;
    var f = 0;
    var g = 0;
    var m = 0;
    var v = 0;
    var y = 0;
    var T = e + e + 1 | 0;
    var b = i + i + 1 | 0;
    var S = t.width | 0;
    var E = t.height | 0;
    var w = S - 1 | 0;
    var x = E - 1 | 0;
    var P = e + 1 | 0;
    var j = i + 1 | 0;
    var L = {
      r: 0,
      b: 0,
      g: 0,
      a: 0
    };
    var M = L;
    for (o = 1; o < T; o++) {
      M = M.n = {
        r: 0,
        b: 0,
        g: 0,
        a: 0
      };
    }
    M.n = L;
    var C = {
      r: 0,
      b: 0,
      g: 0,
      a: 0
    };
    var A = C;
    for (o = 1; o < b; o++) {
      A = A.n = {
        r: 0,
        b: 0,
        g: 0,
        a: 0
      };
    }
    A.n = C;
    var I = null;
    var D = BlurFilter.MUL_TABLE[e] | 0;
    var O = BlurFilter.SHG_TABLE[e] | 0;
    var R = BlurFilter.MUL_TABLE[i] | 0;
    var k = BlurFilter.SHG_TABLE[i] | 0;
    for (; s-- > 0;) {
      l = u = 0;
      var N = D;
      var F = O;
      for (a = E; --a > -1;) {
        d = P * (g = r[u | 0]);
        p = P * (m = r[u + 1 | 0]);
        _ = P * (v = r[u + 2 | 0]);
        f = P * (y = r[u + 3 | 0]);
        M = L;
        o = P;
        while (--o > -1) {
          M.r = g;
          M.g = m;
          M.b = v;
          M.a = y;
          M = M.n;
        }
        for (o = 1; o < P; o++) {
          h = u + ((w < o ? w : o) << 2) | 0;
          d += M.r = r[h];
          p += M.g = r[h + 1];
          _ += M.b = r[h + 2];
          f += M.a = r[h + 3];
          M = M.n;
        }
        I = L;
        n = 0;
        for (; n < S; n++) {
          r[u++] = d * N >>> F;
          r[u++] = p * N >>> F;
          r[u++] = _ * N >>> F;
          r[u++] = f * N >>> F;
          h = l + ((h = n + e + 1) < w ? h : w) << 2;
          d -= I.r - (I.r = r[h]);
          p -= I.g - (I.g = r[h + 1]);
          _ -= I.b - (I.b = r[h + 2]);
          f -= I.a - (I.a = r[h + 3]);
          I = I.n;
        }
        l += S;
      }
      N = R;
      F = k;
      n = 0;
      for (; n < S; n++) {
        d = j * (g = r[u = n << 2 | 0]) | 0;
        p = j * (m = r[u + 1 | 0]) | 0;
        _ = j * (v = r[u + 2 | 0]) | 0;
        f = j * (y = r[u + 3 | 0]) | 0;
        A = C;
        o = 0;
        for (; o < j; o++) {
          A.r = g;
          A.g = m;
          A.b = v;
          A.a = y;
          A = A.n;
        }
        c = S;
        o = 1;
        for (; o <= i; o++) {
          u = c + n << 2;
          d += A.r = r[u];
          p += A.g = r[u + 1];
          _ += A.b = r[u + 2];
          f += A.a = r[u + 3];
          A = A.n;
          if (o < x) {
            c += S;
          }
        }
        u = n;
        I = C;
        if (s > 0) {
          for (a = 0; a < E; a++) {
            r[(h = u << 2) + 3] = y = f * N >>> F;
            if (y > 0) {
              r[h] = d * N >>> F;
              r[h + 1] = p * N >>> F;
              r[h + 2] = _ * N >>> F;
            } else {
              r[h] = r[h + 1] = r[h + 2] = 0;
            }
            h = n + ((h = a + j) < x ? h : x) * S << 2;
            d -= I.r - (I.r = r[h]);
            p -= I.g - (I.g = r[h + 1]);
            _ -= I.b - (I.b = r[h + 2]);
            f -= I.a - (I.a = r[h + 3]);
            I = I.n;
            u += S;
          }
        } else {
          for (a = 0; a < E; a++) {
            r[(h = u << 2) + 3] = y = f * N >>> F;
            if (y > 0) {
              y = 255 / y;
              r[h] = (d * N >>> F) * y;
              r[h + 1] = (p * N >>> F) * y;
              r[h + 2] = (_ * N >>> F) * y;
            } else {
              r[h] = r[h + 1] = r[h + 2] = 0;
            }
            h = n + ((h = a + j) < x ? h : x) * S << 2;
            d -= I.r - (I.r = r[h]);
            p -= I.g - (I.g = r[h + 1]);
            _ -= I.b - (I.b = r[h + 2]);
            f -= I.a - (I.a = r[h + 3]);
            I = I.n;
            u += S;
          }
        }
      }
    }
    return true;
  };
  createjs.BlurFilter = createjs.promote(BlurFilter, "Filter");
})();
(function () {
  'use strict';

  function AlphaMapFilter(t) {
    this.alphaMap = t;
    this._alphaMap = null;
    this._mapData = null;
  }
  var t = createjs.extend(AlphaMapFilter, createjs.Filter);
  t.clone = function () {
    var t = new AlphaMapFilter(this.alphaMap);
    t._alphaMap = this._alphaMap;
    t._mapData = this._mapData;
    return t;
  };
  t.toString = function () {
    return "[AlphaMapFilter]";
  };
  t._applyFilter = function (t) {
    if (!this.alphaMap) {
      return true;
    }
    if (!this._prepAlphaMap()) {
      return false;
    }
    var e = t.data;
    var i = this._mapData;
    for (var s = 0, r = e.length; s < r; s += 4) {
      e[s + 3] = i[s] || 0;
    }
    return true;
  };
  t._prepAlphaMap = function () {
    if (!this.alphaMap) {
      return false;
    }
    if (this.alphaMap == this._alphaMap && this._mapData) {
      return true;
    }
    this._mapData = null;
    var t;
    var e = this._alphaMap = this.alphaMap;
    var i = e;
    if (e instanceof HTMLCanvasElement) {
      t = i.getContext("2d");
    } else {
      (i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")).width = e.width;
      i.height = e.height;
      (t = i.getContext("2d")).drawImage(e, 0, 0);
    }
    try {
      var s = t.getImageData(0, 0, e.width, e.height);
    } catch (t) {
      return false;
    }
    this._mapData = s.data;
    return true;
  };
  createjs.AlphaMapFilter = createjs.promote(AlphaMapFilter, "Filter");
})();
(function () {
  'use strict';

  function AlphaMaskFilter(t) {
    this.mask = t;
  }
  var t = createjs.extend(AlphaMaskFilter, createjs.Filter);
  t.applyFilter = function (t, e, i, s, r, n, a, o) {
    return !this.mask || (n = n || t, a == null && (a = e), o == null && (o = i), n.save(), t == n && (n.globalCompositeOperation = "destination-in", n.drawImage(this.mask, a, o), n.restore(), true));
  };
  t.clone = function () {
    return new AlphaMaskFilter(this.mask);
  };
  t.toString = function () {
    return "[AlphaMaskFilter]";
  };
  createjs.AlphaMaskFilter = createjs.promote(AlphaMaskFilter, "Filter");
})();
(function () {
  'use strict';

  function ColorFilter(t, e, i, s, r, n, a, o) {
    this.redMultiplier = t ?? 1;
    this.greenMultiplier = e ?? 1;
    this.blueMultiplier = i ?? 1;
    this.alphaMultiplier = s ?? 1;
    this.redOffset = r || 0;
    this.greenOffset = n || 0;
    this.blueOffset = a || 0;
    this.alphaOffset = o || 0;
  }
  var t = createjs.extend(ColorFilter, createjs.Filter);
  t.toString = function () {
    return "[ColorFilter]";
  };
  t.clone = function () {
    return new ColorFilter(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset);
  };
  t._applyFilter = function (t) {
    var e = t.data;
    for (var i = e.length, s = 0; s < i; s += 4) {
      e[s] = e[s] * this.redMultiplier + this.redOffset;
      e[s + 1] = e[s + 1] * this.greenMultiplier + this.greenOffset;
      e[s + 2] = e[s + 2] * this.blueMultiplier + this.blueOffset;
      e[s + 3] = e[s + 3] * this.alphaMultiplier + this.alphaOffset;
    }
    return true;
  };
  createjs.ColorFilter = createjs.promote(ColorFilter, "Filter");
})();
(function () {
  'use strict';

  function ColorMatrix(t, e, i, s) {
    this.setColor(t, e, i, s);
  }
  var t = ColorMatrix.prototype;
  ColorMatrix.DELTA_INDEX = [0, 0.01, 0.02, 0.04, 0.05, 0.06, 0.07, 0.08, 0.1, 0.11, 0.12, 0.14, 0.15, 0.16, 0.17, 0.18, 0.2, 0.21, 0.22, 0.24, 0.25, 0.27, 0.28, 0.3, 0.32, 0.34, 0.36, 0.38, 0.4, 0.42, 0.44, 0.46, 0.48, 0.5, 0.53, 0.56, 0.59, 0.62, 0.65, 0.68, 0.71, 0.74, 0.77, 0.8, 0.83, 0.86, 0.89, 0.92, 0.95, 0.98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10];
  ColorMatrix.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
  ColorMatrix.LENGTH = ColorMatrix.IDENTITY_MATRIX.length;
  t.setColor = function (t, e, i, s) {
    return this.reset().adjustColor(t, e, i, s);
  };
  t.reset = function () {
    return this.copy(ColorMatrix.IDENTITY_MATRIX);
  };
  t.adjustColor = function (t, e, i, s) {
    this.adjustHue(s);
    this.adjustContrast(e);
    this.adjustBrightness(t);
    return this.adjustSaturation(i);
  };
  t.adjustBrightness = function (t) {
    if (t == 0 || isNaN(t)) {
      return this;
    } else {
      t = this._cleanValue(t, 255);
      this._multiplyMatrix([1, 0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
      return this;
    }
  };
  t.adjustContrast = function (t) {
    if (t == 0 || isNaN(t)) {
      return this;
    } else {
      e = (t = this._cleanValue(t, 100)) < 0 ? 127 + t / 100 * 127 : (e = (e = t % 1) == 0 ? ColorMatrix.DELTA_INDEX[t] : ColorMatrix.DELTA_INDEX[t << 0] * (1 - e) + ColorMatrix.DELTA_INDEX[1 + (t << 0)] * e) * 127 + 127;
      this._multiplyMatrix([e / 127, 0, 0, 0, (127 - e) * 0.5, 0, e / 127, 0, 0, (127 - e) * 0.5, 0, 0, e / 127, 0, (127 - e) * 0.5, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
      return this;
    }
    var e;
  };
  t.adjustSaturation = function (t) {
    if (t == 0 || isNaN(t)) {
      return this;
    }
    var e = 1 + ((t = this._cleanValue(t, 100)) > 0 ? t * 3 / 100 : t / 100);
    this._multiplyMatrix([(1 - e) * 0.3086 + e, (1 - e) * 0.6094, (1 - e) * 0.082, 0, 0, (1 - e) * 0.3086, (1 - e) * 0.6094 + e, (1 - e) * 0.082, 0, 0, (1 - e) * 0.3086, (1 - e) * 0.6094, (1 - e) * 0.082 + e, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
    return this;
  };
  t.adjustHue = function (t) {
    if (t == 0 || isNaN(t)) {
      return this;
    }
    t = this._cleanValue(t, 180) / 180 * Math.PI;
    var e = Math.cos(t);
    var i = Math.sin(t);
    this._multiplyMatrix([0.213 + e * 0.787 + i * -0.213, 0.715 + e * -0.715 + i * -0.715, 0.072 + e * -0.072 + i * 0.928, 0, 0, 0.213 + e * -0.213 + i * 0.143, 0.715 + e * 0.28500000000000003 + i * 0.14, 0.072 + e * -0.072 + i * -0.283, 0, 0, 0.213 + e * -0.213 + i * -0.787, 0.715 + e * -0.715 + i * 0.715, 0.072 + e * 0.928 + i * 0.072, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
    return this;
  };
  t.concat = function (t) {
    if ((t = this._fixMatrix(t)).length != ColorMatrix.LENGTH) {
      return this;
    } else {
      this._multiplyMatrix(t);
      return this;
    }
  };
  t.clone = function () {
    return new ColorMatrix().copy(this);
  };
  t.toArray = function () {
    var t = [];
    for (var e = 0, i = ColorMatrix.LENGTH; e < i; e++) {
      t[e] = this[e];
    }
    return t;
  };
  t.copy = function (t) {
    for (var e = ColorMatrix.LENGTH, i = 0; i < e; i++) {
      this[i] = t[i];
    }
    return this;
  };
  t.toString = function () {
    return "[ColorMatrix]";
  };
  t._multiplyMatrix = function (t) {
    var e;
    var i;
    var s;
    var r = [];
    for (e = 0; e < 5; e++) {
      for (i = 0; i < 5; i++) {
        r[i] = this[i + e * 5];
      }
      for (i = 0; i < 5; i++) {
        var n = 0;
        for (s = 0; s < 5; s++) {
          n += t[i + s * 5] * r[s];
        }
        this[i + e * 5] = n;
      }
    }
  };
  t._cleanValue = function (t, e) {
    return Math.min(e, Math.max(-e, t));
  };
  t._fixMatrix = function (t) {
    if (t instanceof ColorMatrix) {
      t = t.toArray();
    }
    if (t.length < ColorMatrix.LENGTH) {
      t = t.slice(0, t.length).concat(ColorMatrix.IDENTITY_MATRIX.slice(t.length, ColorMatrix.LENGTH));
    } else if (t.length > ColorMatrix.LENGTH) {
      t = t.slice(0, ColorMatrix.LENGTH);
    }
    return t;
  };
  createjs.ColorMatrix = ColorMatrix;
})();
(function () {
  'use strict';

  function ColorMatrixFilter(t) {
    this.matrix = t;
  }
  var t = createjs.extend(ColorMatrixFilter, createjs.Filter);
  t.toString = function () {
    return "[ColorMatrixFilter]";
  };
  t.clone = function () {
    return new ColorMatrixFilter(this.matrix);
  };
  t._applyFilter = function (t) {
    var e;
    var i;
    var s;
    var r;
    var n = t.data;
    for (var a = n.length, o = this.matrix, h = o[0], c = o[1], u = o[2], l = o[3], d = o[4], p = o[5], _ = o[6], f = o[7], g = o[8], m = o[9], v = o[10], y = o[11], T = o[12], b = o[13], S = o[14], E = o[15], w = o[16], x = o[17], P = o[18], j = o[19], L = 0; L < a; L += 4) {
      e = n[L];
      i = n[L + 1];
      s = n[L + 2];
      r = n[L + 3];
      n[L] = e * h + i * c + s * u + r * l + d;
      n[L + 1] = e * p + i * _ + s * f + r * g + m;
      n[L + 2] = e * v + i * y + s * T + r * b + S;
      n[L + 3] = e * E + i * w + s * x + r * P + j;
    }
    return true;
  };
  createjs.ColorMatrixFilter = createjs.promote(ColorMatrixFilter, "Filter");
})();
(function () {
  'use strict';

  function Touch() {
    throw "Touch cannot be instantiated";
  }
  Touch.isSupported = function () {
    return !!("ontouchstart" in window) || !!window.navigator.msPointerEnabled && !!(window.navigator.msMaxTouchPoints > 0) || !!window.navigator.pointerEnabled && !!(window.navigator.maxTouchPoints > 0);
  };
  Touch.enable = function (t, e, i) {
    return !!t && !!t.canvas && !!Touch.isSupported() && (!!t.__touch || (t.__touch = {
      pointers: {},
      multitouch: !e,
      preventDefault: !i,
      count: 0
    }, "ontouchstart" in window ? Touch._IOS_enable(t) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && Touch._IE_enable(t), true));
  };
  Touch.disable = function (t) {
    if (t) {
      if ("ontouchstart" in window) {
        Touch._IOS_disable(t);
      } else if (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) {
        Touch._IE_disable(t);
      }
      delete t.__touch;
    }
  };
  Touch._IOS_enable = function (t) {
    var e = t.canvas;
    var i = t.__touch.f = function (e) {
      Touch._IOS_handleEvent(t, e);
    };
    e.addEventListener("touchstart", i, false);
    e.addEventListener("touchmove", i, false);
    e.addEventListener("touchend", i, false);
    e.addEventListener("touchcancel", i, false);
  };
  Touch._IOS_disable = function (t) {
    var e = t.canvas;
    if (e) {
      var i = t.__touch.f;
      e.removeEventListener("touchstart", i, false);
      e.removeEventListener("touchmove", i, false);
      e.removeEventListener("touchend", i, false);
      e.removeEventListener("touchcancel", i, false);
    }
  };
  Touch._IOS_handleEvent = function (t, e) {
    if (t) {
      if (t.__touch.preventDefault && e.preventDefault) {
        e.preventDefault();
      }
      var i = e.changedTouches;
      var s = e.type;
      for (var r = 0, n = i.length; r < n; r++) {
        var a = i[r];
        var o = a.identifier;
        if (a.target == t.canvas) {
          if (s == "touchstart") {
            this._handleStart(t, o, e, a.pageX, a.pageY);
          } else if (s == "touchmove") {
            this._handleMove(t, o, e, a.pageX, a.pageY);
          } else if (s == "touchend" || s == "touchcancel") {
            this._handleEnd(t, o, e);
          }
        }
      }
    }
  };
  Touch._IE_enable = function (t) {
    var e = t.canvas;
    var i = t.__touch.f = function (e) {
      Touch._IE_handleEvent(t, e);
    };
    if (window.navigator.pointerEnabled === undefined) {
      e.addEventListener("MSPointerDown", i, false);
      window.addEventListener("MSPointerMove", i, false);
      window.addEventListener("MSPointerUp", i, false);
      window.addEventListener("MSPointerCancel", i, false);
      if (t.__touch.preventDefault) {
        e.style.msTouchAction = "none";
      }
    } else {
      e.addEventListener("pointerdown", i, false);
      window.addEventListener("pointermove", i, false);
      window.addEventListener("pointerup", i, false);
      window.addEventListener("pointercancel", i, false);
      if (t.__touch.preventDefault) {
        e.style.touchAction = "none";
      }
    }
    t.__touch.activeIDs = {};
  };
  Touch._IE_disable = function (t) {
    var e = t.__touch.f;
    if (window.navigator.pointerEnabled === undefined) {
      window.removeEventListener("MSPointerMove", e, false);
      window.removeEventListener("MSPointerUp", e, false);
      window.removeEventListener("MSPointerCancel", e, false);
      if (t.canvas) {
        t.canvas.removeEventListener("MSPointerDown", e, false);
      }
    } else {
      window.removeEventListener("pointermove", e, false);
      window.removeEventListener("pointerup", e, false);
      window.removeEventListener("pointercancel", e, false);
      if (t.canvas) {
        t.canvas.removeEventListener("pointerdown", e, false);
      }
    }
  };
  Touch._IE_handleEvent = function (t, e) {
    if (t) {
      if (t.__touch.preventDefault && e.preventDefault) {
        e.preventDefault();
      }
      var i = e.type;
      var s = e.pointerId;
      var r = t.__touch.activeIDs;
      if (i == "MSPointerDown" || i == "pointerdown") {
        if (e.srcElement != t.canvas) {
          return;
        }
        r[s] = true;
        this._handleStart(t, s, e, e.pageX, e.pageY);
      } else if (r[s]) {
        if (i == "MSPointerMove" || i == "pointermove") {
          this._handleMove(t, s, e, e.pageX, e.pageY);
        } else if (i == "MSPointerUp" || i == "MSPointerCancel" || i == "pointerup" || i == "pointercancel") {
          delete r[s];
          this._handleEnd(t, s, e);
        }
      }
    }
  };
  Touch._handleStart = function (t, e, i, s, r) {
    var n = t.__touch;
    if (n.multitouch || !n.count) {
      var a = n.pointers;
      if (!a[e]) {
        a[e] = true;
        n.count++;
        t._handlePointerDown(e, i, s, r);
      }
    }
  };
  Touch._handleMove = function (t, e, i, s, r) {
    if (t.__touch.pointers[e]) {
      t._handlePointerMove(e, i, s, r);
    }
  };
  Touch._handleEnd = function (t, e, i) {
    var s = t.__touch;
    var r = s.pointers;
    if (r[e]) {
      s.count--;
      t._handlePointerUp(e, i, true);
      delete r[e];
    }
  };
  createjs.Touch = Touch;
})();
(function () {
  'use strict';

  var t = createjs.EaselJS = createjs.EaselJS || {};
  t.version = "0.8.2";
  t.buildDate = "Thu, 26 Nov 2015 20:44:34 GMT";
})();
(function () {
  'use strict';

  var t = createjs.PreloadJS = createjs.PreloadJS || {};
  t.version = "0.6.2";
  t.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT";
})();
(function () {
  'use strict';

  createjs.proxy = function (t, e) {
    var i = Array.prototype.slice.call(arguments, 2);
    return function () {
      return t.apply(e, Array.prototype.slice.call(arguments, 0).concat(i));
    };
  };
})();
(function () {
  'use strict';

  function ErrorEvent(t, e, i) {
    this.Event_constructor("error");
    this.title = t;
    this.message = e;
    this.data = i;
  }
  createjs.extend(ErrorEvent, createjs.Event).clone = function () {
    return new createjs.ErrorEvent(this.title, this.message, this.data);
  };
  createjs.ErrorEvent = createjs.promote(ErrorEvent, "Event");
})();
(function (t) {
  'use strict';

  function ProgressEvent(t, e) {
    this.Event_constructor("progress");
    this.loaded = t;
    this.total = e == null ? 1 : e;
    this.progress = e == 0 ? 0 : this.loaded / this.total;
  }
  createjs.extend(ProgressEvent, createjs.Event).clone = function () {
    return new createjs.ProgressEvent(this.loaded, this.total);
  };
  createjs.ProgressEvent = createjs.promote(ProgressEvent, "Event");
})(window);
(function () {
  var t = typeof define == "function" && define.amd;
  var e = {
    function: true,
    object: true
  };
  var i = e[typeof exports] && exports && !exports.nodeType && exports;
  var s = e[typeof window] && window || this;
  var r = i && e[typeof module] && module && !module.nodeType && typeof global == "object" && global;
  function runInContext(t, i) {
    t ||= s.Object();
    i ||= s.Object();
    var r = t.Number || s.Number;
    var n = t.String || s.String;
    var a = t.Object || s.Object;
    var o = t.Date || s.Date;
    var h = t.SyntaxError || s.SyntaxError;
    var c = t.TypeError || s.TypeError;
    var u = t.Math || s.Math;
    var l = t.JSON || s.JSON;
    if (typeof l == "object" && l) {
      i.stringify = l.stringify;
      i.parse = l.parse;
    }
    var d;
    var p;
    var _;
    var f = a.prototype;
    var g = f.toString;
    var m = new o(-3509827334573292);
    try {
      m = m.getUTCFullYear() == -109252 && m.getUTCMonth() === 0 && m.getUTCDate() === 1 && m.getUTCHours() == 10 && m.getUTCMinutes() == 37 && m.getUTCSeconds() == 6 && m.getUTCMilliseconds() == 708;
    } catch (t) {}
    function has(t) {
      if (has[t] !== _) {
        return has[t];
      }
      var e;
      if (t == "bug-string-char-index") {
        e = "a"[0] != "a";
      } else if (t == "json") {
        e = has("json-stringify") && has("json-parse");
      } else {
        var s;
        var a = "{\"a\":[1,true,false,null,\"\\u0000\\b\\n\\f\\r\\t\"]}";
        if (t == "json-stringify") {
          var h = i.stringify;
          var c = typeof h == "function" && m;
          if (c) {
            (s = function () {
              return 1;
            }).toJSON = s;
            try {
              c = h(0) === "0" && h(new r()) === "0" && h(new n()) == "\"\"" && h(g) === _ && h(_) === _ && h() === _ && h(s) === "1" && h([s]) == "[1]" && h([_]) == "[null]" && h(null) == "null" && h([_, g, null]) == "[null,null,null]" && h({
                a: [s, true, false, null, "\0\b\n\f\r\t"]
              }) == a && h(null, s) === "1" && h([1, 2], null, 1) == "[\n 1,\n 2\n]" && h(new o(-8640000000000000)) == "\"-271821-04-20T00:00:00.000Z\"" && h(new o(8640000000000000)) == "\"+275760-09-13T00:00:00.000Z\"" && h(new o(-62198755200000)) == "\"-000001-01-01T00:00:00.000Z\"" && h(new o(-1)) == "\"1969-12-31T23:59:59.999Z\"";
            } catch (t) {
              c = false;
            }
          }
          e = c;
        }
        if (t == "json-parse") {
          var u = i.parse;
          if (typeof u == "function") {
            try {
              if (u("0") === 0 && !u(false)) {
                var l = (s = u(a)).a.length == 5 && s.a[0] === 1;
                if (l) {
                  try {
                    l = !u("\"\t\"");
                  } catch (t) {}
                  if (l) {
                    try {
                      l = u("01") !== 1;
                    } catch (t) {}
                  }
                  if (l) {
                    try {
                      l = u("1.") !== 1;
                    } catch (t) {}
                  }
                }
              }
            } catch (t) {
              l = false;
            }
          }
          e = l;
        }
      }
      return has[t] = !!e;
    }
    if (!has("json")) {
      var v = has("bug-string-char-index");
      if (!m) {
        var y = u.floor;
        var T = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        function b(t, e) {
          return T[e] + (t - 1970) * 365 + y((t - 1969 + (e = +(e > 1))) / 4) - y((t - 1901 + e) / 100) + y((t - 1601 + e) / 400);
        }
      }
      if (!(d = f.hasOwnProperty)) {
        d = function (t) {
          var e;
          var i = {};
          if ((i.__proto__ = null, i.__proto__ = {
            toString: 1
          }, i).toString != g) {
            d = function (t) {
              var e = this.__proto__;
              var i = t in (this.__proto__ = null, this);
              this.__proto__ = e;
              return i;
            };
          } else {
            e = i.constructor;
            d = function (t) {
              var i = (this.constructor || e).prototype;
              return t in this && (!(t in i) || this[t] !== i[t]);
            };
          }
          i = null;
          return d.call(this, t);
        };
      }
      p = function (t, i) {
        var s;
        var r;
        var n;
        var a = 0;
        (s = function () {
          this.valueOf = 0;
        }).prototype.valueOf = 0;
        for (n in r = new s()) {
          if (d.call(r, n)) {
            a++;
          }
        }
        s = r = null;
        if (a) {
          p = a == 2 ? function (t, e) {
            var i;
            var s = {};
            var r = g.call(t) == "[object Function]";
            for (i in t) {
              if ((!r || i != "prototype") && !d.call(s, i) && !!(s[i] = 1) && !!d.call(t, i)) {
                e(i);
              }
            }
          } : function (t, e) {
            var i;
            var s;
            var r = g.call(t) == "[object Function]";
            for (i in t) {
              if ((!r || i != "prototype") && !!d.call(t, i) && !(s = i === "constructor")) {
                e(i);
              }
            }
            if (s || d.call(t, i = "constructor")) {
              e(i);
            }
          };
        } else {
          r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
          p = function (t, i) {
            var s;
            var n;
            var a = g.call(t) == "[object Function]";
            var o = !a && typeof t.constructor != "function" && e[typeof t.hasOwnProperty] && t.hasOwnProperty || d;
            for (s in t) {
              if ((!a || s != "prototype") && !!o.call(t, s)) {
                i(s);
              }
            }
            for (n = r.length; s = r[--n]; o.call(t, s) && i(s));
          };
        }
        return p(t, i);
      };
      if (!has("json-stringify")) {
        var S = {
          92: "\\\\",
          34: "\\\"",
          8: "\\b",
          12: "\\f",
          10: "\\n",
          13: "\\r",
          9: "\\t"
        };
        function E(t, e) {
          return ("000000" + (e || 0)).slice(-t);
        }
        function w(t) {
          var e = "\"";
          for (var i = 0, s = t.length, r = !v || s > 10, n = r && (v ? t.split("") : t); i < s; i++) {
            var a = t.charCodeAt(i);
            switch (a) {
              case 8:
              case 9:
              case 10:
              case 12:
              case 13:
              case 34:
              case 92:
                e += S[a];
                break;
              default:
                if (a < 32) {
                  e += "\\u00" + E(2, a.toString(16));
                  break;
                }
                e += r ? n[i] : t.charAt(i);
            }
          }
          return e + "\"";
        }
        function x(t, e, i, s, r, n, a) {
          var o;
          var h;
          var u;
          var l;
          var f;
          var m;
          var v;
          var T;
          var S;
          var P;
          var j;
          var L;
          var M;
          var C;
          var A;
          var I;
          try {
            o = e[t];
          } catch (t) {}
          if (typeof o == "object" && o) {
            if ((h = g.call(o)) != "[object Date]" || d.call(o, "toJSON")) {
              if (typeof o.toJSON == "function" && (h != "[object Number]" && h != "[object String]" && h != "[object Array]" || d.call(o, "toJSON"))) {
                o = o.toJSON(t);
              }
            } else if (o > -Infinity && o < Infinity) {
              if (b) {
                f = y(o / 86400000);
                u = y(f / 365.2425) + 1970 - 1;
                for (; b(u + 1, 0) <= f; u++);
                for (l = y((f - b(u, 0)) / 30.42); b(u, l + 1) <= f; l++);
                f = 1 + f - b(u, l);
                v = y((m = (o % 86400000 + 86400000) % 86400000) / 3600000) % 24;
                T = y(m / 60000) % 60;
                S = y(m / 1000) % 60;
                P = m % 1000;
              } else {
                u = o.getUTCFullYear();
                l = o.getUTCMonth();
                f = o.getUTCDate();
                v = o.getUTCHours();
                T = o.getUTCMinutes();
                S = o.getUTCSeconds();
                P = o.getUTCMilliseconds();
              }
              o = (u <= 0 || u >= 10000 ? (u < 0 ? "-" : "+") + E(6, u < 0 ? -u : u) : E(4, u)) + "-" + E(2, l + 1) + "-" + E(2, f) + "T" + E(2, v) + ":" + E(2, T) + ":" + E(2, S) + "." + E(3, P) + "Z";
            } else {
              o = null;
            }
          }
          if (i) {
            o = i.call(e, t, o);
          }
          if (o === null) {
            return "null";
          }
          if ((h = g.call(o)) == "[object Boolean]") {
            return "" + o;
          }
          if (h == "[object Number]") {
            if (o > -Infinity && o < Infinity) {
              return "" + o;
            } else {
              return "null";
            }
          }
          if (h == "[object String]") {
            return w("" + o);
          }
          if (typeof o == "object") {
            for (C = a.length; C--;) {
              if (a[C] === o) {
                throw c();
              }
            }
            a.push(o);
            j = [];
            A = n;
            n += r;
            if (h == "[object Array]") {
              M = 0;
              C = o.length;
              for (; M < C; M++) {
                L = x(M, o, i, s, r, n, a);
                j.push(L === _ ? "null" : L);
              }
              I = j.length ? r ? "[\n" + n + j.join(",\n" + n) + "\n" + A + "]" : "[" + j.join(",") + "]" : "[]";
            } else {
              p(s || o, function (t) {
                var e = x(t, o, i, s, r, n, a);
                if (e !== _) {
                  j.push(w(t) + ":" + (r ? " " : "") + e);
                }
              });
              I = j.length ? r ? "{\n" + n + j.join(",\n" + n) + "\n" + A + "}" : "{" + j.join(",") + "}" : "{}";
            }
            a.pop();
            return I;
          }
        }
        i.stringify = function (t, i, s) {
          var r;
          var n;
          var a;
          var o;
          if (e[typeof i] && i) {
            if ((o = g.call(i)) == "[object Function]") {
              n = i;
            } else if (o == "[object Array]") {
              a = {};
              for (var h, c = 0, u = i.length; c < u; ((o = g.call(h)) == "[object String]" || o == "[object Number]") && (a[h] = 1)) {
                h = i[c++];
              }
            }
          }
          if (s) {
            if ((o = g.call(s)) == "[object Number]") {
              if ((s -= s % 1) > 0) {
                r = "";
                if (s > 10) {
                  s = 10;
                }
                for (; r.length < s; r += " ");
              }
            } else if (o == "[object String]") {
              r = s.length <= 10 ? s : s.slice(0, 10);
            }
          }
          return x("", ((h = {})[""] = t, h), n, a, r, "", []);
        };
      }
      if (!has("json-parse")) {
        var P;
        var j;
        var L = n.fromCharCode;
        var M = {
          92: "\\",
          34: "\"",
          47: "/",
          98: "\b",
          116: "\t",
          110: "\n",
          102: "\f",
          114: "\r"
        };
        function C() {
          P = j = null;
          throw h();
        }
        function A() {
          var t;
          var e;
          var i;
          for (var s, r, n = j, a = n.length; P < a;) {
            switch (r = n.charCodeAt(P)) {
              case 9:
              case 10:
              case 13:
              case 32:
                P++;
                break;
              case 123:
              case 125:
              case 91:
              case 93:
              case 58:
              case 44:
                t = v ? n.charAt(P) : n[P];
                P++;
                return t;
              case 34:
                t = "@";
                P++;
                while (P < a) {
                  if ((r = n.charCodeAt(P)) < 32) {
                    C();
                  } else if (r == 92) {
                    switch (r = n.charCodeAt(++P)) {
                      case 92:
                      case 34:
                      case 47:
                      case 98:
                      case 116:
                      case 110:
                      case 102:
                      case 114:
                        t += M[r];
                        P++;
                        break;
                      case 117:
                        e = ++P;
                        i = P + 4;
                        for (; P < i; P++) {
                          if ((!((r = n.charCodeAt(P)) >= 48) || !(r <= 57)) && (!(r >= 97) || !(r <= 102)) && (!(r >= 65) || !(r <= 70))) {
                            C();
                          }
                        }
                        t += L("0x" + n.slice(e, P));
                        break;
                      default:
                        C();
                    }
                  } else {
                    if (r == 34) {
                      break;
                    }
                    r = n.charCodeAt(P);
                    e = P;
                    while (r >= 32 && r != 92 && r != 34) {
                      r = n.charCodeAt(++P);
                    }
                    t += n.slice(e, P);
                  }
                }
                if (n.charCodeAt(P) == 34) {
                  P++;
                  return t;
                }
                C();
              default:
                e = P;
                if (r == 45) {
                  s = true;
                  r = n.charCodeAt(++P);
                }
                if (r >= 48 && r <= 57) {
                  if (r == 48 && (r = n.charCodeAt(P + 1)) >= 48 && r <= 57) {
                    C();
                  }
                  s = false;
                  for (; P < a && (r = n.charCodeAt(P)) >= 48 && r <= 57; P++);
                  if (n.charCodeAt(P) == 46) {
                    for (i = ++P; i < a && (r = n.charCodeAt(i)) >= 48 && r <= 57; i++);
                    if (i == P) {
                      C();
                    }
                    P = i;
                  }
                  if ((r = n.charCodeAt(P)) == 101 || r == 69) {
                    if ((r = n.charCodeAt(++P)) == 43 || r == 45) {
                      P++;
                    }
                    i = P;
                    for (; i < a && (r = n.charCodeAt(i)) >= 48 && r <= 57; i++);
                    if (i == P) {
                      C();
                    }
                    P = i;
                  }
                  return +n.slice(e, P);
                }
                if (s) {
                  C();
                }
                if (n.slice(P, P + 4) == "true") {
                  P += 4;
                  return true;
                }
                if (n.slice(P, P + 5) == "false") {
                  P += 5;
                  return false;
                }
                if (n.slice(P, P + 4) == "null") {
                  P += 4;
                  return null;
                }
                C();
            }
          }
          return "$";
        }
        function I(t) {
          var e;
          var i;
          if (t == "$") {
            C();
          }
          if (typeof t == "string") {
            if ((v ? t.charAt(0) : t[0]) == "@") {
              return t.slice(1);
            }
            if (t == "[") {
              for (e = []; (t = A()) != "]"; i ||= true) {
                if (i) {
                  if (t == ",") {
                    if ((t = A()) == "]") {
                      C();
                    }
                  } else {
                    C();
                  }
                }
                if (t == ",") {
                  C();
                }
                e.push(I(t));
              }
              return e;
            }
            if (t == "{") {
              for (e = {}; (t = A()) != "}"; i ||= true) {
                if (i) {
                  if (t == ",") {
                    if ((t = A()) == "}") {
                      C();
                    }
                  } else {
                    C();
                  }
                }
                if (t == "," || typeof t != "string" || (v ? t.charAt(0) : t[0]) != "@" || A() != ":") {
                  C();
                }
                e[t.slice(1)] = I(A());
              }
              return e;
            }
            C();
          }
          return t;
        }
        function D(t, e, i) {
          var s = O(t, e, i);
          if (s === _) {
            delete t[e];
          } else {
            t[e] = s;
          }
        }
        function O(t, e, i) {
          var s;
          var r = t[e];
          if (typeof r == "object" && r) {
            if (g.call(r) == "[object Array]") {
              for (s = r.length; s--;) {
                D(r, s, i);
              }
            } else {
              p(r, function (t) {
                D(r, t, i);
              });
            }
          }
          return i.call(t, e, r);
        }
        i.parse = function (t, e) {
          var i;
          var s;
          P = 0;
          j = "" + t;
          i = I(A());
          if (A() != "$") {
            C();
          }
          P = j = null;
          if (e && g.call(e) == "[object Function]") {
            return O(((s = {})[""] = i, s), "", e);
          } else {
            return i;
          }
        };
      }
    }
    i.runInContext = runInContext;
    return i;
  }
  if (!!r && (r.global === r || r.window === r || r.self === r)) {
    s = r;
  }
  if (i && !t) {
    runInContext(s, i);
  } else {
    var n = s.JSON;
    var a = s.JSON3;
    var o = false;
    var h = runInContext(s, s.JSON3 = {
      noConflict: function () {
        if (!o) {
          o = true;
          s.JSON = n;
          s.JSON3 = a;
          n = a = null;
        }
        return h;
      }
    });
    s.JSON = {
      parse: h.parse,
      stringify: h.stringify
    };
  }
  if (t) {
    define(function () {
      return h;
    });
  }
}).call(this);
(function () {
  var t = {
    appendToHead: function (e) {
      t.getHead().appendChild(e);
    },
    getHead: function () {
      return document.head || document.getElementsByTagName("head")[0];
    },
    getBody: function () {
      return document.body || document.getElementsByTagName("body")[0];
    }
  };
  createjs.DomUtils = t;
})();
(function () {
  var t = {
    parseXML: function (t, e) {
      var i = null;
      try {
        if (window.DOMParser) {
          i = new DOMParser().parseFromString(t, e);
        }
      } catch (t) {}
      if (!i) {
        try {
          (i = new ActiveXObject("Microsoft.XMLDOM")).async = false;
          i.loadXML(t);
        } catch (t) {
          i = null;
        }
      }
      return i;
    },
    parseJSON: function (t) {
      if (t == null) {
        return null;
      }
      try {
        return JSON.parse(t);
      } catch (t) {
        throw t;
      }
    }
  };
  createjs.DataUtils = t;
})();
(function () {
  'use strict';

  function LoadItem() {
    this.src = null;
    this.type = null;
    this.id = null;
    this.maintainOrder = false;
    this.callback = null;
    this.data = null;
    this.method = createjs.LoadItem.GET;
    this.values = null;
    this.headers = null;
    this.withCredentials = false;
    this.mimeType = null;
    this.crossOrigin = null;
    this.loadTimeout = e.LOAD_TIMEOUT_DEFAULT;
  }
  var t = LoadItem.prototype = {};
  var e = LoadItem;
  e.LOAD_TIMEOUT_DEFAULT = 8000;
  e.create = function (t) {
    if (typeof t == "string") {
      var i = new LoadItem();
      i.src = t;
      return i;
    }
    if (t instanceof e) {
      return t;
    }
    if (t instanceof Object && t.src) {
      if (t.loadTimeout == null) {
        t.loadTimeout = e.LOAD_TIMEOUT_DEFAULT;
      }
      return t;
    }
    throw new Error("Type not recognized.");
  };
  t.set = function (t) {
    for (var e in t) {
      this[e] = t[e];
    }
    return this;
  };
  createjs.LoadItem = e;
})();
(function () {
  var t = {
    ABSOLUTE_PATT: /^(?:\w+:)?\/{2}/i,
    RELATIVE_PATT: /^[./]*?\//i,
    EXTENSION_PATT: /\/?[^/]+\.(\w{1,5})$/i,
    parseURI: function (e) {
      var i = {
        absolute: false,
        relative: false
      };
      if (e == null) {
        return i;
      }
      var s;
      var r = e.indexOf("?");
      if (r > -1) {
        e = e.substr(0, r);
      }
      if (t.ABSOLUTE_PATT.test(e)) {
        i.absolute = true;
      } else if (t.RELATIVE_PATT.test(e)) {
        i.relative = true;
      }
      if (s = e.match(t.EXTENSION_PATT)) {
        i.extension = s[1].toLowerCase();
      }
      return i;
    },
    formatQueryString: function (t, e) {
      if (t == null) {
        throw new Error("You must specify data.");
      }
      var i = [];
      for (var s in t) {
        i.push(s + "=" + escape(t[s]));
      }
      if (e) {
        i = i.concat(e);
      }
      return i.join("&");
    },
    buildPath: function (t, e) {
      if (e == null) {
        return t;
      }
      var i = [];
      var s = t.indexOf("?");
      if (s != -1) {
        var r = t.slice(s + 1);
        i = i.concat(r.split("&"));
      }
      if (s != -1) {
        return t.slice(0, s) + "?" + this.formatQueryString(e, i);
      } else {
        return t + "?" + this.formatQueryString(e, i);
      }
    },
    isCrossDomain: function (t) {
      var e = document.createElement("a");
      e.href = t.src;
      var i = document.createElement("a");
      i.href = location.href;
      return e.hostname != "" && (e.port != i.port || e.protocol != i.protocol || e.hostname != i.hostname);
    },
    isLocal: function (t) {
      var e = document.createElement("a");
      e.href = t.src;
      return e.hostname == "" && e.protocol == "file:";
    },
    isBinary: function (t) {
      switch (t) {
        case createjs.AbstractLoader.IMAGE:
        case createjs.AbstractLoader.BINARY:
          return true;
        default:
          return false;
      }
    },
    isImageTag: function (t) {
      return t instanceof HTMLImageElement;
    },
    isAudioTag: function (t) {
      return !!window.HTMLAudioElement && t instanceof HTMLAudioElement;
    },
    isVideoTag: function (t) {
      return !!window.HTMLVideoElement && t instanceof HTMLVideoElement;
    },
    isText: function (t) {
      switch (t) {
        case createjs.AbstractLoader.TEXT:
        case createjs.AbstractLoader.JSON:
        case createjs.AbstractLoader.MANIFEST:
        case createjs.AbstractLoader.XML:
        case createjs.AbstractLoader.CSS:
        case createjs.AbstractLoader.SVG:
        case createjs.AbstractLoader.JAVASCRIPT:
        case createjs.AbstractLoader.SPRITESHEET:
          return true;
        default:
          return false;
      }
    },
    getTypeByExtension: function (t) {
      if (t == null) {
        return createjs.AbstractLoader.TEXT;
      }
      switch (t.toLowerCase()) {
        case "jpeg":
        case "jpg":
        case "gif":
        case "png":
        case "webp":
        case "bmp":
          return createjs.AbstractLoader.IMAGE;
        case "ogg":
        case "mp3":
        case "webm":
          return createjs.AbstractLoader.SOUND;
        case "mp4":
        case "webm":
        case "ts":
          return createjs.AbstractLoader.VIDEO;
        case "json":
          return createjs.AbstractLoader.JSON;
        case "xml":
          return createjs.AbstractLoader.XML;
        case "css":
          return createjs.AbstractLoader.CSS;
        case "js":
          return createjs.AbstractLoader.JAVASCRIPT;
        case "svg":
          return createjs.AbstractLoader.SVG;
        default:
          return createjs.AbstractLoader.TEXT;
      }
    }
  };
  createjs.RequestUtils = t;
})();
(function () {
  'use strict';

  function AbstractLoader(t, e, i) {
    this.EventDispatcher_constructor();
    this.loaded = false;
    this.canceled = false;
    this.progress = 0;
    this.type = i;
    this.resultFormatter = null;
    this._item = t ? createjs.LoadItem.create(t) : null;
    this._preferXHR = e;
    this._result = null;
    this._rawResult = null;
    this._loadedItems = null;
    this._tagSrcAttribute = null;
    this._tag = null;
  }
  var t = createjs.extend(AbstractLoader, createjs.EventDispatcher);
  var e = AbstractLoader;
  e.POST = "POST";
  e.GET = "GET";
  e.BINARY = "binary";
  e.CSS = "css";
  e.IMAGE = "image";
  e.JAVASCRIPT = "javascript";
  e.JSON = "json";
  e.JSONP = "jsonp";
  e.MANIFEST = "manifest";
  e.SOUND = "sound";
  e.VIDEO = "video";
  e.SPRITESHEET = "spritesheet";
  e.SVG = "svg";
  e.TEXT = "text";
  e.XML = "xml";
  t.getItem = function () {
    return this._item;
  };
  t.getResult = function (t) {
    if (t) {
      return this._rawResult;
    } else {
      return this._result;
    }
  };
  t.getTag = function () {
    return this._tag;
  };
  t.setTag = function (t) {
    this._tag = t;
  };
  t.load = function () {
    this._createRequest();
    this._request.on("complete", this, this);
    this._request.on("progress", this, this);
    this._request.on("loadStart", this, this);
    this._request.on("abort", this, this);
    this._request.on("timeout", this, this);
    this._request.on("error", this, this);
    var t = new createjs.Event("initialize");
    t.loader = this._request;
    this.dispatchEvent(t);
    this._request.load();
  };
  t.cancel = function () {
    this.canceled = true;
    this.destroy();
  };
  t.destroy = function () {
    if (this._request) {
      this._request.removeAllEventListeners();
      this._request.destroy();
    }
    this._request = null;
    this._item = null;
    this._rawResult = null;
    this._result = null;
    this._loadItems = null;
    this.removeAllEventListeners();
  };
  t.getLoadedItems = function () {
    return this._loadedItems;
  };
  t._createRequest = function () {
    if (this._preferXHR) {
      this._request = new createjs.XHRRequest(this._item);
    } else {
      this._request = new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute);
    }
  };
  t._createTag = function (t) {
    return null;
  };
  t._sendLoadStart = function () {
    if (!this._isCanceled()) {
      this.dispatchEvent("loadstart");
    }
  };
  t._sendProgress = function (t) {
    if (!this._isCanceled()) {
      var e = null;
      if (typeof t == "number") {
        this.progress = t;
        e = new createjs.ProgressEvent(this.progress);
      } else {
        e = t;
        this.progress = t.loaded / t.total;
        e.progress = this.progress;
        if (isNaN(this.progress) || this.progress == Infinity) {
          this.progress = 0;
        }
      }
      if (this.hasEventListener("progress")) {
        this.dispatchEvent(e);
      }
    }
  };
  t._sendComplete = function () {
    if (!this._isCanceled()) {
      this.loaded = true;
      var t = new createjs.Event("complete");
      t.rawResult = this._rawResult;
      if (this._result != null) {
        t.result = this._result;
      }
      this.dispatchEvent(t);
    }
  };
  t._sendError = function (t) {
    if (!this._isCanceled() && this.hasEventListener("error")) {
      if (t == null) {
        t = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY");
      }
      this.dispatchEvent(t);
    }
  };
  t._isCanceled = function () {
    return window.createjs == null || !!this.canceled;
  };
  t.resultFormatter = null;
  t.handleEvent = function (t) {
    switch (t.type) {
      case "complete":
        this._rawResult = t.target._response;
        var e = this.resultFormatter && this.resultFormatter(this);
        if (e instanceof Function) {
          e.call(this, createjs.proxy(this._resultFormatSuccess, this), createjs.proxy(this._resultFormatFailed, this));
        } else {
          this._result = e || this._rawResult;
          this._sendComplete();
        }
        break;
      case "progress":
        this._sendProgress(t);
        break;
      case "error":
        this._sendError(t);
        break;
      case "loadstart":
        this._sendLoadStart();
        break;
      case "abort":
      case "timeout":
        if (!this._isCanceled()) {
          this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_" + t.type.toUpperCase() + "_ERROR"));
        }
    }
  };
  t._resultFormatSuccess = function (t) {
    this._result = t;
    this._sendComplete();
  };
  t._resultFormatFailed = function (t) {
    this._sendError(t);
  };
  t.buildPath = function (t, e) {
    return createjs.RequestUtils.buildPath(t, e);
  };
  t.toString = function () {
    return "[PreloadJS AbstractLoader]";
  };
  createjs.AbstractLoader = createjs.promote(AbstractLoader, "EventDispatcher");
})();
(function () {
  'use strict';

  function AbstractMediaLoader(t, e, i) {
    this.AbstractLoader_constructor(t, e, i);
    this.resultFormatter = this._formatResult;
    this._tagSrcAttribute = "src";
    this.on("initialize", this._updateXHR, this);
  }
  var t = createjs.extend(AbstractMediaLoader, createjs.AbstractLoader);
  t.load = function () {
    this._tag ||= this._createTag(this._item.src);
    this._tag.preload = "auto";
    this._tag.load();
    this.AbstractLoader_load();
  };
  t._createTag = function () {};
  t._createRequest = function () {
    if (this._preferXHR) {
      this._request = new createjs.XHRRequest(this._item);
    } else {
      this._request = new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute);
    }
  };
  t._updateXHR = function (t) {
    if (t.loader.setResponseType) {
      t.loader.setResponseType("blob");
    }
  };
  t._formatResult = function (t) {
    if (this._tag.removeEventListener) {
      this._tag.removeEventListener("canplaythrough", this._loadedHandler);
    }
    this._tag.onstalled = null;
    if (this._preferXHR) {
      var e = window.URL || window.webkitURL;
      var i = t.getResult(true);
      t.getTag().src = e.createObjectURL(i);
    }
    return t.getTag();
  };
  createjs.AbstractMediaLoader = createjs.promote(AbstractMediaLoader, "AbstractLoader");
})();
(function () {
  'use strict';

  function t(t) {
    this._item = t;
  }
  var e = createjs.extend(t, createjs.EventDispatcher);
  e.load = function () {};
  e.destroy = function () {};
  e.cancel = function () {};
  createjs.AbstractRequest = createjs.promote(t, "EventDispatcher");
})();
(function () {
  'use strict';

  function TagRequest(t, e, i) {
    this.AbstractRequest_constructor(t);
    this._tag = e;
    this._tagSrcAttribute = i;
    this._loadedHandler = createjs.proxy(this._handleTagComplete, this);
    this._addedToDOM = false;
    this._startTagVisibility = null;
  }
  var t = createjs.extend(TagRequest, createjs.AbstractRequest);
  t.load = function () {
    this._tag.onload = createjs.proxy(this._handleTagComplete, this);
    this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);
    this._tag.onerror = createjs.proxy(this._handleError, this);
    var t = new createjs.Event("initialize");
    t.loader = this._tag;
    this.dispatchEvent(t);
    this._hideTag();
    this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout);
    this._tag[this._tagSrcAttribute] = this._item.src;
    if (this._tag.parentNode == null) {
      window.document.body.appendChild(this._tag);
      this._addedToDOM = true;
    }
  };
  t.destroy = function () {
    this._clean();
    this._tag = null;
    this.AbstractRequest_destroy();
  };
  t._handleReadyStateChange = function () {
    clearTimeout(this._loadTimeout);
    var t = this._tag;
    if (t.readyState == "loaded" || t.readyState == "complete") {
      this._handleTagComplete();
    }
  };
  t._handleError = function () {
    this._clean();
    this.dispatchEvent("error");
  };
  t._handleTagComplete = function () {
    this._rawResult = this._tag;
    this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult;
    this._clean();
    this._showTag();
    this.dispatchEvent("complete");
  };
  t._handleTimeout = function () {
    this._clean();
    this.dispatchEvent(new createjs.Event("timeout"));
  };
  t._clean = function () {
    this._tag.onload = null;
    this._tag.onreadystatechange = null;
    this._tag.onerror = null;
    if (this._addedToDOM && this._tag.parentNode != null) {
      this._tag.parentNode.removeChild(this._tag);
    }
    clearTimeout(this._loadTimeout);
  };
  t._hideTag = function () {
    this._startTagVisibility = this._tag.style.visibility;
    this._tag.style.visibility = "hidden";
  };
  t._showTag = function () {
    this._tag.style.visibility = this._startTagVisibility;
  };
  t._handleStalled = function () {};
  createjs.TagRequest = createjs.promote(TagRequest, "AbstractRequest");
})();
(function () {
  'use strict';

  function MediaTagRequest(t, e, i) {
    this.AbstractRequest_constructor(t);
    this._tag = e;
    this._tagSrcAttribute = i;
    this._loadedHandler = createjs.proxy(this._handleTagComplete, this);
  }
  var t = createjs.extend(MediaTagRequest, createjs.TagRequest);
  t.load = function () {
    var t = createjs.proxy(this._handleStalled, this);
    this._stalledCallback = t;
    var e = createjs.proxy(this._handleProgress, this);
    this._handleProgress = e;
    this._tag.addEventListener("stalled", t);
    this._tag.addEventListener("progress", e);
    if (this._tag.addEventListener) {
      this._tag.addEventListener("canplaythrough", this._loadedHandler, false);
    }
    this.TagRequest_load();
  };
  t._handleReadyStateChange = function () {
    clearTimeout(this._loadTimeout);
    var t = this._tag;
    if (t.readyState == "loaded" || t.readyState == "complete") {
      this._handleTagComplete();
    }
  };
  t._handleStalled = function () {};
  t._handleProgress = function (t) {
    if (t && (!(t.loaded > 0) || t.total != 0)) {
      var e = new createjs.ProgressEvent(t.loaded, t.total);
      this.dispatchEvent(e);
    }
  };
  t._clean = function () {
    if (this._tag.removeEventListener) {
      this._tag.removeEventListener("canplaythrough", this._loadedHandler);
    }
    this._tag.removeEventListener("stalled", this._stalledCallback);
    this._tag.removeEventListener("progress", this._progressCallback);
    this.TagRequest__clean();
  };
  createjs.MediaTagRequest = createjs.promote(MediaTagRequest, "TagRequest");
})();
(function () {
  'use strict';

  function XHRRequest(t) {
    this.AbstractRequest_constructor(t);
    this._request = null;
    this._loadTimeout = null;
    this._xhrLevel = 1;
    this._response = null;
    this._rawResponse = null;
    this._canceled = false;
    this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this);
    this._handleProgressProxy = createjs.proxy(this._handleProgress, this);
    this._handleAbortProxy = createjs.proxy(this._handleAbort, this);
    this._handleErrorProxy = createjs.proxy(this._handleError, this);
    this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this);
    this._handleLoadProxy = createjs.proxy(this._handleLoad, this);
    this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this);
    this._createXHR(t);
  }
  var t = createjs.extend(XHRRequest, createjs.AbstractRequest);
  XHRRequest.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
  t.getResult = function (t) {
    if (t && this._rawResponse) {
      return this._rawResponse;
    } else {
      return this._response;
    }
  };
  t.cancel = function () {
    this.canceled = true;
    this._clean();
    this._request.abort();
  };
  t.load = function () {
    if (this._request != null) {
      if (this._request.addEventListener != null) {
        this._request.addEventListener("loadstart", this._handleLoadStartProxy, false);
        this._request.addEventListener("progress", this._handleProgressProxy, false);
        this._request.addEventListener("abort", this._handleAbortProxy, false);
        this._request.addEventListener("error", this._handleErrorProxy, false);
        this._request.addEventListener("timeout", this._handleTimeoutProxy, false);
        this._request.addEventListener("load", this._handleLoadProxy, false);
        this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, false);
      } else {
        this._request.onloadstart = this._handleLoadStartProxy;
        this._request.onprogress = this._handleProgressProxy;
        this._request.onabort = this._handleAbortProxy;
        this._request.onerror = this._handleErrorProxy;
        this._request.ontimeout = this._handleTimeoutProxy;
        this._request.onload = this._handleLoadProxy;
        this._request.onreadystatechange = this._handleReadyStateChangeProxy;
      }
      if (this._xhrLevel == 1) {
        this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout);
      }
      try {
        if (this._item.values && this._item.method != createjs.AbstractLoader.GET) {
          if (this._item.method == createjs.AbstractLoader.POST) {
            this._request.send(createjs.RequestUtils.formatQueryString(this._item.values));
          }
        } else {
          this._request.send();
        }
      } catch (t) {
        this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, t));
      }
    } else {
      this._handleError();
    }
  };
  t.setResponseType = function (t) {
    if (t === "blob") {
      t = window.URL ? "blob" : "arraybuffer";
      this._responseType = t;
    }
    this._request.responseType = t;
  };
  t.getAllResponseHeaders = function () {
    if (this._request.getAllResponseHeaders instanceof Function) {
      return this._request.getAllResponseHeaders();
    } else {
      return null;
    }
  };
  t.getResponseHeader = function (t) {
    if (this._request.getResponseHeader instanceof Function) {
      return this._request.getResponseHeader(t);
    } else {
      return null;
    }
  };
  t._handleProgress = function (t) {
    if (t && (!(t.loaded > 0) || t.total != 0)) {
      var e = new createjs.ProgressEvent(t.loaded, t.total);
      this.dispatchEvent(e);
    }
  };
  t._handleLoadStart = function (t) {
    clearTimeout(this._loadTimeout);
    this.dispatchEvent("loadstart");
  };
  t._handleAbort = function (t) {
    this._clean();
    this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, t));
  };
  t._handleError = function (t) {
    this._clean();
    this.dispatchEvent(new createjs.ErrorEvent(t.message));
  };
  t._handleReadyStateChange = function (t) {
    if (this._request.readyState == 4) {
      this._handleLoad();
    }
  };
  t._handleLoad = function (t) {
    if (!this.loaded) {
      this.loaded = true;
      var e = this._checkError();
      if (e) {
        this._handleError(e);
      } else {
        this._response = this._getResponse();
        if (this._responseType === "arraybuffer") {
          try {
            this._response = new Blob([this._response]);
          } catch (t) {
            window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
            if (t.name === "TypeError" && window.BlobBuilder) {
              var i = new BlobBuilder();
              i.append(this._response);
              this._response = i.getBlob();
            }
          }
        }
        this._clean();
        this.dispatchEvent(new createjs.Event("complete"));
      }
    }
  };
  t._handleTimeout = function (t) {
    this._clean();
    this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, t));
  };
  t._checkError = function () {
    var t = parseInt(this._request.status);
    switch (t) {
      case 404:
      case 0:
        return new Error(t);
    }
    return null;
  };
  t._getResponse = function () {
    if (this._response != null) {
      return this._response;
    }
    if (this._request.response != null) {
      return this._request.response;
    }
    try {
      if (this._request.responseText != null) {
        return this._request.responseText;
      }
    } catch (t) {}
    try {
      if (this._request.responseXML != null) {
        return this._request.responseXML;
      }
    } catch (t) {}
    return null;
  };
  t._createXHR = function (t) {
    var e = createjs.RequestUtils.isCrossDomain(t);
    var i = {};
    var r = null;
    if (window.XMLHttpRequest) {
      r = new XMLHttpRequest();
      if (e && r.withCredentials === undefined && window.XDomainRequest) {
        r = new XDomainRequest();
      }
    } else {
      for (var n = 0, a = s.ACTIVEX_VERSIONS.length; n < a; n++) {
        var o = s.ACTIVEX_VERSIONS[n];
        try {
          r = new ActiveXObject(o);
          break;
        } catch (t) {}
      }
      if (r == null) {
        return false;
      }
    }
    if (t.mimeType == null && createjs.RequestUtils.isText(t.type)) {
      t.mimeType = "text/plain; charset=utf-8";
    }
    if (t.mimeType && r.overrideMimeType) {
      r.overrideMimeType(t.mimeType);
    }
    this._xhrLevel = typeof r.responseType == "string" ? 2 : 1;
    var h = null;
    h = t.method == createjs.AbstractLoader.GET ? createjs.RequestUtils.buildPath(t.src, t.values) : t.src;
    r.open(t.method || createjs.AbstractLoader.GET, h, true);
    if (e && r instanceof XMLHttpRequest && this._xhrLevel == 1) {
      i.Origin = location.origin;
    }
    if (t.values && t.method == createjs.AbstractLoader.POST) {
      i["Content-Type"] = "application/x-www-form-urlencoded";
    }
    if (!e && !i["X-Requested-With"]) {
      i["X-Requested-With"] = "XMLHttpRequest";
    }
    if (t.headers) {
      for (var c in t.headers) {
        i[c] = t.headers[c];
      }
    }
    for (c in i) {
      r.setRequestHeader(c, i[c]);
    }
    if (r instanceof XMLHttpRequest && t.withCredentials !== undefined) {
      r.withCredentials = t.withCredentials;
    }
    this._request = r;
    return true;
  };
  t._clean = function () {
    clearTimeout(this._loadTimeout);
    if (this._request.removeEventListener != null) {
      this._request.removeEventListener("loadstart", this._handleLoadStartProxy);
      this._request.removeEventListener("progress", this._handleProgressProxy);
      this._request.removeEventListener("abort", this._handleAbortProxy);
      this._request.removeEventListener("error", this._handleErrorProxy);
      this._request.removeEventListener("timeout", this._handleTimeoutProxy);
      this._request.removeEventListener("load", this._handleLoadProxy);
      this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy);
    } else {
      this._request.onloadstart = null;
      this._request.onprogress = null;
      this._request.onabort = null;
      this._request.onerror = null;
      this._request.ontimeout = null;
      this._request.onload = null;
      this._request.onreadystatechange = null;
    }
  };
  t.toString = function () {
    return "[PreloadJS XHRRequest]";
  };
  createjs.XHRRequest = createjs.promote(XHRRequest, "AbstractRequest");
})();
(function () {
  'use strict';

  function LoadQueue(t, e, i) {
    this.AbstractLoader_constructor();
    this._plugins = [];
    this._typeCallbacks = {};
    this._extensionCallbacks = {};
    this.next = null;
    this.maintainScriptOrder = true;
    this.stopOnError = false;
    this._maxConnections = 1;
    this._availableLoaders = [createjs.ImageLoader, createjs.JavaScriptLoader, createjs.CSSLoader, createjs.JSONLoader, createjs.JSONPLoader, createjs.SoundLoader, createjs.ManifestLoader, createjs.SpriteSheetLoader, createjs.XMLLoader, createjs.SVGLoader, createjs.BinaryLoader, createjs.VideoLoader, createjs.TextLoader];
    this._defaultLoaderLength = this._availableLoaders.length;
    this.init(t, e, i);
  }
  var t = createjs.extend(LoadQueue, createjs.AbstractLoader);
  var e = LoadQueue;
  t.init = function (t, e, i) {
    this.useXHR = true;
    this.preferXHR = true;
    this._preferXHR = true;
    this.setPreferXHR(t);
    this._paused = false;
    this._basePath = e;
    this._crossOrigin = i;
    this._loadStartWasDispatched = false;
    this._currentlyLoadingScript = null;
    this._currentLoads = [];
    this._loadQueue = [];
    this._loadQueueBackup = [];
    this._loadItemsById = {};
    this._loadItemsBySrc = {};
    this._loadedResults = {};
    this._loadedRawResults = {};
    this._numItems = 0;
    this._numItemsLoaded = 0;
    this._scriptOrder = [];
    this._loadedScripts = [];
    this._lastProgress = NaN;
  };
  e.loadTimeout = 8000;
  e.LOAD_TIMEOUT = 0;
  e.BINARY = createjs.AbstractLoader.BINARY;
  e.CSS = createjs.AbstractLoader.CSS;
  e.IMAGE = createjs.AbstractLoader.IMAGE;
  e.JAVASCRIPT = createjs.AbstractLoader.JAVASCRIPT;
  e.JSON = createjs.AbstractLoader.JSON;
  e.JSONP = createjs.AbstractLoader.JSONP;
  e.MANIFEST = createjs.AbstractLoader.MANIFEST;
  e.SOUND = createjs.AbstractLoader.SOUND;
  e.VIDEO = createjs.AbstractLoader.VIDEO;
  e.SVG = createjs.AbstractLoader.SVG;
  e.TEXT = createjs.AbstractLoader.TEXT;
  e.XML = createjs.AbstractLoader.XML;
  e.POST = createjs.AbstractLoader.POST;
  e.GET = createjs.AbstractLoader.GET;
  t.registerLoader = function (t) {
    if (!t || !t.canLoadItem) {
      throw new Error("loader is of an incorrect type.");
    }
    if (this._availableLoaders.indexOf(t) != -1) {
      throw new Error("loader already exists.");
    }
    this._availableLoaders.unshift(t);
  };
  t.unregisterLoader = function (t) {
    var e = this._availableLoaders.indexOf(t);
    if (e != -1 && e < this._defaultLoaderLength - 1) {
      this._availableLoaders.splice(e, 1);
    }
  };
  t.setUseXHR = function (t) {
    return this.setPreferXHR(t);
  };
  t.setPreferXHR = function (t) {
    this.preferXHR = t != 0 && window.XMLHttpRequest != null;
    return this.preferXHR;
  };
  t.removeAll = function () {
    this.remove();
  };
  t.remove = function (t) {
    var e = null;
    if (t && !Array.isArray(t)) {
      e = [t];
    } else if (t) {
      e = t;
    } else if (arguments.length > 0) {
      return;
    }
    var i = false;
    if (e) {
      while (e.length) {
        var s = e.pop();
        var r = this.getResult(s);
        for (n = this._loadQueue.length - 1; n >= 0; n--) {
          if ((a = this._loadQueue[n].getItem()).id == s || a.src == s) {
            this._loadQueue.splice(n, 1)[0].cancel();
            break;
          }
        }
        for (n = this._loadQueueBackup.length - 1; n >= 0; n--) {
          if ((a = this._loadQueueBackup[n].getItem()).id == s || a.src == s) {
            this._loadQueueBackup.splice(n, 1)[0].cancel();
            break;
          }
        }
        if (r) {
          this._disposeItem(this.getItem(s));
        } else {
          for (var n = this._currentLoads.length - 1; n >= 0; n--) {
            var a = this._currentLoads[n].getItem();
            if (a.id == s || a.src == s) {
              this._currentLoads.splice(n, 1)[0].cancel();
              i = true;
              break;
            }
          }
        }
      }
      if (i) {
        this._loadNext();
      }
    } else {
      this.close();
      for (var o in this._loadItemsById) {
        this._disposeItem(this._loadItemsById[o]);
      }
      this.init(this.preferXHR, this._basePath);
    }
  };
  t.reset = function () {
    this.close();
    for (var t in this._loadItemsById) {
      this._disposeItem(this._loadItemsById[t]);
    }
    var e = [];
    for (var i = 0, s = this._loadQueueBackup.length; i < s; i++) {
      e.push(this._loadQueueBackup[i].getItem());
    }
    this.loadManifest(e, false);
  };
  t.installPlugin = function (t) {
    if (t != null && t.getPreloadHandlers != null) {
      this._plugins.push(t);
      var e = t.getPreloadHandlers();
      e.scope = t;
      if (e.types != null) {
        for (var i = 0, s = e.types.length; i < s; i++) {
          this._typeCallbacks[e.types[i]] = e;
        }
      }
      if (e.extensions != null) {
        i = 0;
        s = e.extensions.length;
        for (; i < s; i++) {
          this._extensionCallbacks[e.extensions[i]] = e;
        }
      }
    }
  };
  t.setMaxConnections = function (t) {
    this._maxConnections = t;
    if (!this._paused && this._loadQueue.length > 0) {
      this._loadNext();
    }
  };
  t.loadFile = function (t, e, i) {
    if (t != null) {
      this._addItem(t, null, i);
      if (e !== false) {
        this.setPaused(false);
      } else {
        this.setPaused(true);
      }
    } else {
      var s = new createjs.ErrorEvent("PRELOAD_NO_FILE");
      this._sendError(s);
    }
  };
  t.loadManifest = function (t, i, s) {
    var r = null;
    var n = null;
    if (Array.isArray(t)) {
      if (t.length == 0) {
        var a = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");
        this._sendError(a);
        return;
      }
      r = t;
    } else if (typeof t == "string") {
      r = [{
        src: t,
        type: e.MANIFEST
      }];
    } else {
      if (typeof t != "object") {
        a = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");
        this._sendError(a);
        return;
      }
      if (t.src !== undefined) {
        if (t.type == null) {
          t.type = e.MANIFEST;
        } else if (t.type != e.MANIFEST) {
          var a = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");
          this._sendError(a);
        }
        r = [t];
      } else if (t.manifest !== undefined) {
        r = t.manifest;
        n = t.path;
      }
    }
    for (var o = 0, h = r.length; o < h; o++) {
      this._addItem(r[o], n, s);
    }
    if (i !== false) {
      this.setPaused(false);
    } else {
      this.setPaused(true);
    }
  };
  t.load = function () {
    this.setPaused(false);
  };
  t.getItem = function (t) {
    return this._loadItemsById[t] || this._loadItemsBySrc[t];
  };
  t.getResult = function (t, e) {
    var i = this._loadItemsById[t] || this._loadItemsBySrc[t];
    if (i == null) {
      return null;
    }
    var s = i.id;
    if (e && this._loadedRawResults[s]) {
      return this._loadedRawResults[s];
    } else {
      return this._loadedResults[s];
    }
  };
  t.getItems = function (t) {
    var e = [];
    for (var i in this._loadItemsById) {
      var s = this._loadItemsById[i];
      var r = this.getResult(i);
      if (t !== true || r != null) {
        e.push({
          item: s,
          result: r,
          rawResult: this.getResult(i, true)
        });
      }
    }
    return e;
  };
  t.setPaused = function (t) {
    this._paused = t;
    if (!this._paused) {
      this._loadNext();
    }
  };
  t.close = function () {
    while (this._currentLoads.length) {
      this._currentLoads.pop().cancel();
    }
    this._scriptOrder.length = 0;
    this._loadedScripts.length = 0;
    this.loadStartWasDispatched = false;
    this._itemCount = 0;
    this._lastProgress = NaN;
  };
  t._addItem = function (t, e, i) {
    var s = this._createLoadItem(t, e, i);
    if (s != null) {
      var r = this._createLoader(s);
      if (r != null) {
        if ("plugins" in r) {
          r.plugins = this._plugins;
        }
        s._loader = r;
        this._loadQueue.push(r);
        this._loadQueueBackup.push(r);
        this._numItems++;
        this._updateProgress();
        if (this.maintainScriptOrder && s.type == createjs.LoadQueue.JAVASCRIPT || s.maintainOrder === true) {
          this._scriptOrder.push(s);
          this._loadedScripts.push(null);
        }
      }
    }
  };
  t._createLoadItem = function (t, e, i) {
    var s = createjs.LoadItem.create(t);
    if (s == null) {
      return null;
    }
    var r = "";
    var n = i || this._basePath;
    if (s.src instanceof Object) {
      if (!s.type) {
        return null;
      }
      if (e) {
        r = e;
        var a = createjs.RequestUtils.parseURI(e);
        if (n != null && !a.absolute && !a.relative) {
          r = n + r;
        }
      } else if (n != null) {
        r = n;
      }
    } else {
      var o = createjs.RequestUtils.parseURI(s.src);
      if (o.extension) {
        s.ext = o.extension;
      }
      if (s.type == null) {
        s.type = createjs.RequestUtils.getTypeByExtension(s.ext);
      }
      var h = s.src;
      if (!o.absolute && !o.relative) {
        if (e) {
          r = e;
          a = createjs.RequestUtils.parseURI(e);
          h = e + h;
          if (n != null && !a.absolute && !a.relative) {
            r = n + r;
          }
        } else if (n != null) {
          r = n;
        }
      }
      s.src = r + s.src;
    }
    s.path = r;
    if (s.id === undefined || s.id === null || s.id === "") {
      s.id = h;
    }
    var c = this._typeCallbacks[s.type] || this._extensionCallbacks[s.ext];
    if (c) {
      var u = c.callback.call(c.scope, s, this);
      if (u === false) {
        return null;
      }
      if (u !== true) {
        if (u != null) {
          s._loader = u;
        }
      }
      if ((o = createjs.RequestUtils.parseURI(s.src)).extension != null) {
        s.ext = o.extension;
      }
    }
    this._loadItemsById[s.id] = s;
    this._loadItemsBySrc[s.src] = s;
    if (s.crossOrigin == null) {
      s.crossOrigin = this._crossOrigin;
    }
    return s;
  };
  t._createLoader = function (t) {
    if (t._loader != null) {
      return t._loader;
    }
    var e = this.preferXHR;
    for (var i = 0; i < this._availableLoaders.length; i++) {
      var s = this._availableLoaders[i];
      if (s && s.canLoadItem(t)) {
        return new s(t, e);
      }
    }
    return null;
  };
  t._loadNext = function () {
    if (!this._paused) {
      if (!this._loadStartWasDispatched) {
        this._sendLoadStart();
        this._loadStartWasDispatched = true;
      }
      if (this._numItems == this._numItemsLoaded) {
        this.loaded = true;
        this._sendComplete();
        if (this.next && this.next.load) {
          this.next.load();
        }
      } else {
        this.loaded = false;
      }
      for (var t = 0; t < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); t++) {
        var e = this._loadQueue[t];
        if (this._canStartLoad(e)) {
          this._loadQueue.splice(t, 1);
          t--;
          this._loadItem(e);
        }
      }
    }
  };
  t._loadItem = function (t) {
    t.on("fileload", this._handleFileLoad, this);
    t.on("progress", this._handleProgress, this);
    t.on("complete", this._handleFileComplete, this);
    t.on("error", this._handleError, this);
    t.on("fileerror", this._handleFileError, this);
    this._currentLoads.push(t);
    this._sendFileStart(t.getItem());
    t.load();
  };
  t._handleFileLoad = function (t) {
    t.target = null;
    this.dispatchEvent(t);
  };
  t._handleFileError = function (t) {
    var e = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, t.item);
    this._sendError(e);
  };
  t._handleError = function (t) {
    var e = t.target;
    this._numItemsLoaded++;
    this._finishOrderedItem(e, true);
    this._updateProgress();
    var i = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, e.getItem());
    this._sendError(i);
    if (this.stopOnError) {
      this.setPaused(true);
    } else {
      this._removeLoadItem(e);
      this._cleanLoadItem(e);
      this._loadNext();
    }
  };
  t._handleFileComplete = function (t) {
    var e = t.target;
    var i = e.getItem();
    var s = e.getResult();
    this._loadedResults[i.id] = s;
    var r = e.getResult(true);
    if (r != null && r !== s) {
      this._loadedRawResults[i.id] = r;
    }
    this._saveLoadedItems(e);
    this._removeLoadItem(e);
    if (!this._finishOrderedItem(e)) {
      this._processFinishedLoad(i, e);
    }
    this._cleanLoadItem(e);
  };
  t._saveLoadedItems = function (t) {
    var e = t.getLoadedItems();
    if (e !== null) {
      for (var i = 0; i < e.length; i++) {
        var s = e[i].item;
        this._loadItemsBySrc[s.src] = s;
        this._loadItemsById[s.id] = s;
        this._loadedResults[s.id] = e[i].result;
        this._loadedRawResults[s.id] = e[i].rawResult;
      }
    }
  };
  t._finishOrderedItem = function (t, e) {
    var i = t.getItem();
    if (this.maintainScriptOrder && i.type == createjs.LoadQueue.JAVASCRIPT || i.maintainOrder) {
      if (t instanceof createjs.JavaScriptLoader) {
        this._currentlyLoadingScript = false;
      }
      var s = createjs.indexOf(this._scriptOrder, i);
      return s != -1 && (this._loadedScripts[s] = e === true || i, this._checkScriptLoadOrder(), true);
    }
    return false;
  };
  t._checkScriptLoadOrder = function () {
    for (var t = this._loadedScripts.length, e = 0; e < t; e++) {
      var i = this._loadedScripts[e];
      if (i === null) {
        break;
      }
      if (i !== true) {
        var s = this._loadedResults[i.id];
        if (i.type == createjs.LoadQueue.JAVASCRIPT) {
          createjs.DomUtils.appendToHead(s);
        }
        var r = i._loader;
        this._processFinishedLoad(i, r);
        this._loadedScripts[e] = true;
      }
    }
  };
  t._processFinishedLoad = function (t, e) {
    this._numItemsLoaded++;
    if (!this.maintainScriptOrder && t.type == createjs.LoadQueue.JAVASCRIPT) {
      var i = e.getTag();
      createjs.DomUtils.appendToHead(i);
    }
    this._updateProgress();
    this._sendFileComplete(t, e);
    this._loadNext();
  };
  t._canStartLoad = function (t) {
    if (!this.maintainScriptOrder || t.preferXHR) {
      return true;
    }
    var e = t.getItem();
    if (e.type != createjs.LoadQueue.JAVASCRIPT) {
      return true;
    }
    if (this._currentlyLoadingScript) {
      return false;
    }
    for (var i = this._scriptOrder.indexOf(e), s = 0; s < i;) {
      if (this._loadedScripts[s] == null) {
        return false;
      }
      s++;
    }
    this._currentlyLoadingScript = true;
    return true;
  };
  t._removeLoadItem = function (t) {
    for (var e = this._currentLoads.length, i = 0; i < e; i++) {
      if (this._currentLoads[i] == t) {
        this._currentLoads.splice(i, 1);
        break;
      }
    }
  };
  t._cleanLoadItem = function (t) {
    var e = t.getItem();
    if (e) {
      delete e._loader;
    }
  };
  t._handleProgress = function (t) {
    var e = t.target;
    this._sendFileProgress(e.getItem(), e.progress);
    this._updateProgress();
  };
  t._updateProgress = function () {
    var t = this._numItemsLoaded / this._numItems;
    var e = this._numItems - this._numItemsLoaded;
    if (e > 0) {
      var i = 0;
      for (var s = 0, r = this._currentLoads.length; s < r; s++) {
        i += this._currentLoads[s].progress;
      }
      t += i / e * (e / this._numItems);
    }
    if (this._lastProgress != t) {
      this._sendProgress(t);
      this._lastProgress = t;
    }
  };
  t._disposeItem = function (t) {
    delete this._loadedResults[t.id];
    delete this._loadedRawResults[t.id];
    delete this._loadItemsById[t.id];
    delete this._loadItemsBySrc[t.src];
  };
  t._sendFileProgress = function (t, e) {
    if (!this._isCanceled() && !this._paused && this.hasEventListener("fileprogress")) {
      var i = new createjs.Event("fileprogress");
      i.progress = e;
      i.loaded = e;
      i.total = 1;
      i.item = t;
      this.dispatchEvent(i);
    }
  };
  t._sendFileComplete = function (t, e) {
    if (!this._isCanceled() && !this._paused) {
      var i = new createjs.Event("fileload");
      i.loader = e;
      i.item = t;
      i.result = this._loadedResults[t.id];
      i.rawResult = this._loadedRawResults[t.id];
      if (t.completeHandler) {
        t.completeHandler(i);
      }
      if (this.hasEventListener("fileload")) {
        this.dispatchEvent(i);
      }
    }
  };
  t._sendFileStart = function (t) {
    var e = new createjs.Event("filestart");
    e.item = t;
    if (this.hasEventListener("filestart")) {
      this.dispatchEvent(e);
    }
  };
  t.toString = function () {
    return "[PreloadJS LoadQueue]";
  };
  createjs.LoadQueue = createjs.promote(LoadQueue, "AbstractLoader");
})();
(function () {
  'use strict';

  function TextLoader(t) {
    this.AbstractLoader_constructor(t, true, createjs.AbstractLoader.TEXT);
  }
  createjs.extend(TextLoader, createjs.AbstractLoader);
  TextLoader.canLoadItem = function (t) {
    return t.type == createjs.AbstractLoader.TEXT;
  };
  createjs.TextLoader = createjs.promote(TextLoader, "AbstractLoader");
})();
(function () {
  'use strict';

  function BinaryLoader(t) {
    this.AbstractLoader_constructor(t, true, createjs.AbstractLoader.BINARY);
    this.on("initialize", this._updateXHR, this);
  }
  var t = createjs.extend(BinaryLoader, createjs.AbstractLoader);
  BinaryLoader.canLoadItem = function (t) {
    return t.type == createjs.AbstractLoader.BINARY;
  };
  t._updateXHR = function (t) {
    t.loader.setResponseType("arraybuffer");
  };
  createjs.BinaryLoader = createjs.promote(BinaryLoader, "AbstractLoader");
})();
(function () {
  'use strict';

  function CSSLoader(t, e) {
    this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.CSS);
    this.resultFormatter = this._formatResult;
    this._tagSrcAttribute = "href";
    this._tag = e ? document.createElement("style") : document.createElement("link");
    this._tag.rel = "stylesheet";
    this._tag.type = "text/css";
  }
  var t = createjs.extend(CSSLoader, createjs.AbstractLoader);
  CSSLoader.canLoadItem = function (t) {
    return t.type == createjs.AbstractLoader.CSS;
  };
  t._formatResult = function (t) {
    if (this._preferXHR) {
      var e = t.getTag();
      if (e.styleSheet) {
        e.styleSheet.cssText = t.getResult(true);
      } else {
        var i = document.createTextNode(t.getResult(true));
        e.appendChild(i);
      }
    } else {
      e = this._tag;
    }
    createjs.DomUtils.appendToHead(e);
    return e;
  };
  createjs.CSSLoader = createjs.promote(CSSLoader, "AbstractLoader");
})();
(function () {
  'use strict';

  function ImageLoader(t, e) {
    this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.IMAGE);
    this.resultFormatter = this._formatResult;
    this._tagSrcAttribute = "src";
    if (createjs.RequestUtils.isImageTag(t)) {
      this._tag = t;
    } else if (createjs.RequestUtils.isImageTag(t.src)) {
      this._tag = t.src;
    } else if (createjs.RequestUtils.isImageTag(t.tag)) {
      this._tag = t.tag;
    }
    if (this._tag != null) {
      this._preferXHR = false;
    } else {
      this._tag = document.createElement("img");
    }
    this.on("initialize", this._updateXHR, this);
  }
  var t = createjs.extend(ImageLoader, createjs.AbstractLoader);
  ImageLoader.canLoadItem = function (t) {
    return t.type == createjs.AbstractLoader.IMAGE;
  };
  t.load = function () {
    if (this._tag.src != "" && this._tag.complete) {
      this._sendComplete();
    } else {
      var t = this._item.crossOrigin;
      if (t == 1) {
        t = "Anonymous";
      }
      if (t != null && !createjs.RequestUtils.isLocal(this._item.src)) {
        this._tag.crossOrigin = t;
      }
      this.AbstractLoader_load();
    }
  };
  t._updateXHR = function (t) {
    t.loader.mimeType = "text/plain; charset=x-user-defined-binary";
    if (t.loader.setResponseType) {
      t.loader.setResponseType("blob");
    }
  };
  t._formatResult = function (t) {
    return this._formatImage;
  };
  t._formatImage = function (t, e) {
    var i = this._tag;
    var s = window.URL || window.webkitURL;
    if (this._preferXHR) {
      if (s) {
        var r = s.createObjectURL(this.getResult(true));
        i.src = r;
        i.addEventListener("load", this._cleanUpURL, false);
        i.addEventListener("error", this._cleanUpURL, false);
      } else {
        i.src = this._item.src;
      }
    } else {
      ;
    }
    if (i.complete) {
      t(i);
    } else {
      i.onload = createjs.proxy(function () {
        t(this._tag);
      }, this);
      i.onerror = createjs.proxy(function () {
        e(this._tag);
      }, this);
    }
  };
  t._cleanUpURL = function (t) {
    (window.URL || window.webkitURL).revokeObjectURL(t.target.src);
  };
  createjs.ImageLoader = createjs.promote(ImageLoader, "AbstractLoader");
})();
(function () {
  'use strict';

  function JavaScriptLoader(t, e) {
    this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.JAVASCRIPT);
    this.resultFormatter = this._formatResult;
    this._tagSrcAttribute = "src";
    this.setTag(document.createElement("script"));
  }
  var t = createjs.extend(JavaScriptLoader, createjs.AbstractLoader);
  JavaScriptLoader.canLoadItem = function (t) {
    return t.type == createjs.AbstractLoader.JAVASCRIPT;
  };
  t._formatResult = function (t) {
    var e = t.getTag();
    if (this._preferXHR) {
      e.text = t.getResult(true);
    }
    return e;
  };
  createjs.JavaScriptLoader = createjs.promote(JavaScriptLoader, "AbstractLoader");
})();
(function () {
  'use strict';

  function JSONLoader(t) {
    this.AbstractLoader_constructor(t, true, createjs.AbstractLoader.JSON);
    this.resultFormatter = this._formatResult;
  }
  var t = createjs.extend(JSONLoader, createjs.AbstractLoader);
  JSONLoader.canLoadItem = function (t) {
    return t.type == createjs.AbstractLoader.JSON;
  };
  t._formatResult = function (t) {
    var e = null;
    try {
      e = createjs.DataUtils.parseJSON(t.getResult(true));
    } catch (t) {
      var i = new createjs.ErrorEvent("JSON_FORMAT", null, t);
      this._sendError(i);
      return t;
    }
    return e;
  };
  createjs.JSONLoader = createjs.promote(JSONLoader, "AbstractLoader");
})();
(function () {
  'use strict';

  function JSONPLoader(t) {
    this.AbstractLoader_constructor(t, false, createjs.AbstractLoader.JSONP);
    this.setTag(document.createElement("script"));
    this.getTag().type = "text/javascript";
  }
  var t = createjs.extend(JSONPLoader, createjs.AbstractLoader);
  JSONPLoader.canLoadItem = function (t) {
    return t.type == createjs.AbstractLoader.JSONP;
  };
  t.cancel = function () {
    this.AbstractLoader_cancel();
    this._dispose();
  };
  t.load = function () {
    if (this._item.callback == null) {
      throw new Error("callback is required for loading JSONP requests.");
    }
    if (window[this._item.callback] != null) {
      throw new Error("JSONP callback '" + this._item.callback + "' already exists on window. You need to specify a different callback or re-name the current one.");
    }
    window[this._item.callback] = createjs.proxy(this._handleLoad, this);
    window.document.body.appendChild(this._tag);
    this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout);
    this._tag.src = this._item.src;
  };
  t._handleLoad = function (t) {
    this._result = this._rawResult = t;
    this._sendComplete();
    this._dispose();
  };
  t._handleTimeout = function () {
    this._dispose();
    this.dispatchEvent(new createjs.ErrorEvent("timeout"));
  };
  t._dispose = function () {
    window.document.body.removeChild(this._tag);
    delete window[this._item.callback];
    clearTimeout(this._loadTimeout);
  };
  createjs.JSONPLoader = createjs.promote(JSONPLoader, "AbstractLoader");
})();
(function () {
  'use strict';

  function ManifestLoader(t) {
    this.AbstractLoader_constructor(t, null, createjs.AbstractLoader.MANIFEST);
    this.plugins = null;
    this._manifestQueue = null;
  }
  var t = createjs.extend(ManifestLoader, createjs.AbstractLoader);
  var e = ManifestLoader;
  e.MANIFEST_PROGRESS = 0.25;
  e.canLoadItem = function (t) {
    return t.type == createjs.AbstractLoader.MANIFEST;
  };
  t.load = function () {
    this.AbstractLoader_load();
  };
  t._createRequest = function () {
    var t = this._item.callback;
    this._request = t != null ? new createjs.JSONPLoader(this._item) : new createjs.JSONLoader(this._item);
  };
  t.handleEvent = function (t) {
    switch (t.type) {
      case "complete":
        this._rawResult = t.target.getResult(true);
        this._result = t.target.getResult();
        this._sendProgress(e.MANIFEST_PROGRESS);
        this._loadManifest(this._result);
        return;
      case "progress":
        t.loaded *= e.MANIFEST_PROGRESS;
        this.progress = t.loaded / t.total;
        if (isNaN(this.progress) || this.progress == Infinity) {
          this.progress = 0;
        }
        this._sendProgress(t);
        return;
    }
    this.AbstractLoader_handleEvent(t);
  };
  t.destroy = function () {
    this.AbstractLoader_destroy();
    this._manifestQueue.close();
  };
  t._loadManifest = function (t) {
    if (t && t.manifest) {
      var e = this._manifestQueue = new createjs.LoadQueue();
      e.on("fileload", this._handleManifestFileLoad, this);
      e.on("progress", this._handleManifestProgress, this);
      e.on("complete", this._handleManifestComplete, this, true);
      e.on("error", this._handleManifestError, this, true);
      for (var i = 0, s = this.plugins.length; i < s; i++) {
        e.installPlugin(this.plugins[i]);
      }
      e.loadManifest(t);
    } else {
      this._sendComplete();
    }
  };
  t._handleManifestFileLoad = function (t) {
    t.target = null;
    this.dispatchEvent(t);
  };
  t._handleManifestComplete = function (t) {
    this._loadedItems = this._manifestQueue.getItems(true);
    this._sendComplete();
  };
  t._handleManifestProgress = function (t) {
    this.progress = t.progress * (1 - e.MANIFEST_PROGRESS) + e.MANIFEST_PROGRESS;
    this._sendProgress(this.progress);
  };
  t._handleManifestError = function (t) {
    var e = new createjs.Event("fileerror");
    e.item = t.data;
    this.dispatchEvent(e);
  };
  createjs.ManifestLoader = createjs.promote(ManifestLoader, "AbstractLoader");
})();
(function () {
  'use strict';

  function SoundLoader(t, e) {
    this.AbstractMediaLoader_constructor(t, e, createjs.AbstractLoader.SOUND);
    if (createjs.RequestUtils.isAudioTag(t)) {
      this._tag = t;
    } else if (createjs.RequestUtils.isAudioTag(t.src)) {
      this._tag = t;
    } else if (createjs.RequestUtils.isAudioTag(t.tag)) {
      this._tag = createjs.RequestUtils.isAudioTag(t) ? t : t.src;
    }
    if (this._tag != null) {
      this._preferXHR = false;
    }
  }
  var t = createjs.extend(SoundLoader, createjs.AbstractMediaLoader);
  SoundLoader.canLoadItem = function (t) {
    return t.type == createjs.AbstractLoader.SOUND;
  };
  t._createTag = function (t) {
    var e = document.createElement("audio");
    e.autoplay = false;
    e.preload = "none";
    e.src = t;
    return e;
  };
  createjs.SoundLoader = createjs.promote(SoundLoader, "AbstractMediaLoader");
})();
(function () {
  'use strict';

  function VideoLoader(t, e) {
    this.AbstractMediaLoader_constructor(t, e, createjs.AbstractLoader.VIDEO);
    if (createjs.RequestUtils.isVideoTag(t) || createjs.RequestUtils.isVideoTag(t.src)) {
      this.setTag(createjs.RequestUtils.isVideoTag(t) ? t : t.src);
      this._preferXHR = false;
    } else {
      this.setTag(this._createTag());
    }
  }
  var t = VideoLoader;
  createjs.extend(VideoLoader, createjs.AbstractMediaLoader)._createTag = function () {
    return document.createElement("video");
  };
  t.canLoadItem = function (t) {
    return t.type == createjs.AbstractLoader.VIDEO;
  };
  createjs.VideoLoader = createjs.promote(VideoLoader, "AbstractMediaLoader");
})();
(function () {
  'use strict';

  function SpriteSheetLoader(t, e) {
    this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.SPRITESHEET);
    this._manifestQueue = null;
  }
  var t = createjs.extend(SpriteSheetLoader, createjs.AbstractLoader);
  var e = SpriteSheetLoader;
  e.SPRITESHEET_PROGRESS = 0.25;
  e.canLoadItem = function (t) {
    return t.type == createjs.AbstractLoader.SPRITESHEET;
  };
  t.destroy = function () {
    this.AbstractLoader_destroy;
    this._manifestQueue.close();
  };
  t._createRequest = function () {
    var t = this._item.callback;
    this._request = t != null ? new createjs.JSONPLoader(this._item) : new createjs.JSONLoader(this._item);
  };
  t.handleEvent = function (t) {
    switch (t.type) {
      case "complete":
        this._rawResult = t.target.getResult(true);
        this._result = t.target.getResult();
        this._sendProgress(e.SPRITESHEET_PROGRESS);
        this._loadManifest(this._result);
        return;
      case "progress":
        t.loaded *= e.SPRITESHEET_PROGRESS;
        this.progress = t.loaded / t.total;
        if (isNaN(this.progress) || this.progress == Infinity) {
          this.progress = 0;
        }
        this._sendProgress(t);
        return;
    }
    this.AbstractLoader_handleEvent(t);
  };
  t._loadManifest = function (t) {
    if (t && t.images) {
      var e = this._manifestQueue = new createjs.LoadQueue(this._preferXHR, this._item.path, this._item.crossOrigin);
      e.on("complete", this._handleManifestComplete, this, true);
      e.on("fileload", this._handleManifestFileLoad, this);
      e.on("progress", this._handleManifestProgress, this);
      e.on("error", this._handleManifestError, this, true);
      e.loadManifest(t.images);
    }
  };
  t._handleManifestFileLoad = function (t) {
    var e = t.result;
    if (e != null) {
      var i = this.getResult().images;
      i[i.indexOf(t.item.src)] = e;
    }
  };
  t._handleManifestComplete = function (t) {
    this._result = new createjs.SpriteSheet(this._result);
    this._loadedItems = this._manifestQueue.getItems(true);
    this._sendComplete();
  };
  t._handleManifestProgress = function (t) {
    this.progress = t.progress * (1 - e.SPRITESHEET_PROGRESS) + e.SPRITESHEET_PROGRESS;
    this._sendProgress(this.progress);
  };
  t._handleManifestError = function (t) {
    var e = new createjs.Event("fileerror");
    e.item = t.data;
    this.dispatchEvent(e);
  };
  createjs.SpriteSheetLoader = createjs.promote(SpriteSheetLoader, "AbstractLoader");
})();
(function () {
  'use strict';

  function SVGLoader(t, e) {
    this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.SVG);
    this.resultFormatter = this._formatResult;
    this._tagSrcAttribute = "data";
    if (e) {
      this.setTag(document.createElement("svg"));
    } else {
      this.setTag(document.createElement("object"));
      this.getTag().type = "image/svg+xml";
    }
  }
  var t = createjs.extend(SVGLoader, createjs.AbstractLoader);
  SVGLoader.canLoadItem = function (t) {
    return t.type == createjs.AbstractLoader.SVG;
  };
  t._formatResult = function (t) {
    var e = createjs.DataUtils.parseXML(t.getResult(true), "text/xml");
    var i = t.getTag();
    if (!this._preferXHR && document.body.contains(i)) {
      document.body.removeChild(i);
    }
    if (e.documentElement != null) {
      i.appendChild(e.documentElement);
      i.style.visibility = "visible";
      return i;
    } else {
      return e;
    }
  };
  createjs.SVGLoader = createjs.promote(SVGLoader, "AbstractLoader");
})();
(function () {
  'use strict';

  function XMLLoader(t) {
    this.AbstractLoader_constructor(t, true, createjs.AbstractLoader.XML);
    this.resultFormatter = this._formatResult;
  }
  var t = createjs.extend(XMLLoader, createjs.AbstractLoader);
  XMLLoader.canLoadItem = function (t) {
    return t.type == createjs.AbstractLoader.XML;
  };
  t._formatResult = function (t) {
    return createjs.DataUtils.parseXML(t.getResult(true), "text/xml");
  };
  createjs.XMLLoader = createjs.promote(XMLLoader, "AbstractLoader");
})();
(function () {
  var t = createjs.SoundJS = createjs.SoundJS || {};
  t.version = "0.6.2";
  t.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT";
})();
createjs.indexOf = function (t, e) {
  'use strict';

  for (var i = 0, s = t.length; i < s; i++) {
    if (e === t[i]) {
      return i;
    }
  }
  return -1;
};
(function () {
  'use strict';

  createjs.proxy = function (t, e) {
    var i = Array.prototype.slice.call(arguments, 2);
    return function () {
      return t.apply(e, Array.prototype.slice.call(arguments, 0).concat(i));
    };
  };
})();
(function () {
  'use strict';

  function BrowserDetect() {
    throw "BrowserDetect cannot be instantiated";
  }
  var t = BrowserDetect.agent = window.navigator.userAgent;
  BrowserDetect.isWindowPhone = t.indexOf("IEMobile") > -1 || t.indexOf("Windows Phone") > -1;
  BrowserDetect.isFirefox = t.indexOf("Firefox") > -1;
  BrowserDetect.isOpera = window.opera != null;
  BrowserDetect.isChrome = t.indexOf("Chrome") > -1;
  BrowserDetect.isIOS = (t.indexOf("iPod") > -1 || t.indexOf("iPhone") > -1 || t.indexOf("iPad") > -1) && !BrowserDetect.isWindowPhone;
  BrowserDetect.isAndroid = t.indexOf("Android") > -1 && !BrowserDetect.isWindowPhone;
  BrowserDetect.isBlackberry = t.indexOf("Blackberry") > -1;
  createjs.BrowserDetect = BrowserDetect;
})();
(function () {
  'use strict';

  function t() {
    this.interrupt = null;
    this.delay = null;
    this.offset = null;
    this.loop = null;
    this.volume = null;
    this.pan = null;
    this.startTime = null;
    this.duration = null;
  }
  var e = t.prototype = {};
  var i = t;
  i.create = function (t) {
    if (t instanceof i || t instanceof Object) {
      var e = new createjs.PlayPropsConfig();
      e.set(t);
      return e;
    }
    throw new Error("Type not recognized.");
  };
  e.set = function (t) {
    for (var e in t) {
      this[e] = t[e];
    }
    return this;
  };
  e.toString = function () {
    return "[PlayPropsConfig]";
  };
  createjs.PlayPropsConfig = i;
})();
(function () {
  'use strict';

  function Sound() {
    throw "Sound cannot be instantiated";
  }
  var t = Sound;
  function SoundChannel(t, e) {
    this.init(t, e);
  }
  t.INTERRUPT_ANY = "any";
  t.INTERRUPT_EARLY = "early";
  t.INTERRUPT_LATE = "late";
  t.INTERRUPT_NONE = "none";
  t.PLAY_INITED = "playInited";
  t.PLAY_SUCCEEDED = "playSucceeded";
  t.PLAY_INTERRUPTED = "playInterrupted";
  t.PLAY_FINISHED = "playFinished";
  t.PLAY_FAILED = "playFailed";
  t.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "opus", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"];
  t.EXTENSION_MAP = {
    m4a: "mp4"
  };
  t.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/;
  t.defaultInterruptBehavior = t.INTERRUPT_NONE;
  t.alternateExtensions = [];
  t.activePlugin = null;
  t._masterVolume = 1;
  Object.defineProperty(t, "volume", {
    get: function () {
      return this._masterVolume;
    },
    set: function (e) {
      if (Number(e) == null) {
        return false;
      }
      e = Math.max(0, Math.min(1, e));
      t._masterVolume = e;
      if (!this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(e)) {
        var i = this._instances;
        for (var s = 0, r = i.length; s < r; s++) {
          i[s].setMasterVolume(e);
        }
      }
    }
  });
  t._masterMute = false;
  Object.defineProperty(t, "muted", {
    get: function () {
      return this._masterMute;
    },
    set: function (t) {
      if (t == null) {
        return false;
      }
      this._masterMute = t;
      if (!this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(t)) {
        var e = this._instances;
        for (var i = 0, s = e.length; i < s; i++) {
          e[i].setMasterMute(t);
        }
      }
      return true;
    }
  });
  Object.defineProperty(t, "capabilities", {
    get: function () {
      if (t.activePlugin == null) {
        return null;
      } else {
        return t.activePlugin._capabilities;
      }
    },
    set: function (t) {
      return false;
    }
  });
  t._pluginsRegistered = false;
  t._lastID = 0;
  t._instances = [];
  t._idHash = {};
  t._preloadHash = {};
  t._defaultPlayPropsHash = {};
  t.addEventListener = null;
  t.removeEventListener = null;
  t.removeAllEventListeners = null;
  t.dispatchEvent = null;
  t.hasEventListener = null;
  t._listeners = null;
  createjs.EventDispatcher.initialize(t);
  t.getPreloadHandlers = function () {
    return {
      callback: createjs.proxy(t.initLoad, t),
      types: ["sound"],
      extensions: t.SUPPORTED_EXTENSIONS
    };
  };
  t._handleLoadComplete = function (e) {
    var i = e.target.getItem().src;
    if (t._preloadHash[i]) {
      for (var s = 0, r = t._preloadHash[i].length; s < r; s++) {
        var n = t._preloadHash[i][s];
        t._preloadHash[i][s] = true;
        if (t.hasEventListener("fileload")) {
          (e = new createjs.Event("fileload")).src = n.src;
          e.id = n.id;
          e.data = n.data;
          e.sprite = n.sprite;
          t.dispatchEvent(e);
        }
      }
    }
  };
  t._handleLoadError = function (e) {
    var i = e.target.getItem().src;
    if (t._preloadHash[i]) {
      for (var s = 0, r = t._preloadHash[i].length; s < r; s++) {
        var n = t._preloadHash[i][s];
        t._preloadHash[i][s] = false;
        if (t.hasEventListener("fileerror")) {
          (e = new createjs.Event("fileerror")).src = n.src;
          e.id = n.id;
          e.data = n.data;
          e.sprite = n.sprite;
          t.dispatchEvent(e);
        }
      }
    }
  };
  t._registerPlugin = function (e) {
    return !!e.isSupported() && (t.activePlugin = new e(), true);
  };
  t.registerPlugins = function (e) {
    t._pluginsRegistered = true;
    for (var i = 0, s = e.length; i < s; i++) {
      if (t._registerPlugin(e[i])) {
        return true;
      }
    }
    return false;
  };
  t.initializeDefaultPlugins = function () {
    return t.activePlugin != null || !t._pluginsRegistered && !!t.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]);
  };
  t.isReady = function () {
    return t.activePlugin != null;
  };
  t.getCapabilities = function () {
    if (t.activePlugin == null) {
      return null;
    } else {
      return t.activePlugin._capabilities;
    }
  };
  t.getCapability = function (e) {
    if (t.activePlugin == null) {
      return null;
    } else {
      return t.activePlugin._capabilities[e];
    }
  };
  t.initLoad = function (e) {
    return t._registerSound(e);
  };
  t._registerSound = function (e) {
    if (!t.initializeDefaultPlugins()) {
      return false;
    }
    var i;
    if (e.src instanceof Object) {
      (i = t._parseSrc(e.src)).src = e.path + i.src;
    } else {
      i = t._parsePath(e.src);
    }
    if (i == null) {
      return false;
    }
    e.src = i.src;
    e.type = "sound";
    var s = e.data;
    var r = null;
    if (s != null && (isNaN(s.channels) ? isNaN(s) || (r = parseInt(s)) : r = parseInt(s.channels), s.audioSprite)) {
      var n;
      for (var a = s.audioSprite.length; a--;) {
        n = s.audioSprite[a];
        t._idHash[n.id] = {
          src: e.src,
          startTime: parseInt(n.startTime),
          duration: parseInt(n.duration)
        };
        if (n.defaultPlayProps) {
          t._defaultPlayPropsHash[n.id] = createjs.PlayPropsConfig.create(n.defaultPlayProps);
        }
      }
    }
    if (e.id != null) {
      t._idHash[e.id] = {
        src: e.src
      };
    }
    var o = t.activePlugin.register(e);
    SoundChannel.create(e.src, r);
    if (s != null && isNaN(s)) {
      e.data.channels = r || SoundChannel.maxPerChannel();
    } else {
      e.data = r || SoundChannel.maxPerChannel();
    }
    if (o.type) {
      e.type = o.type;
    }
    if (e.defaultPlayProps) {
      t._defaultPlayPropsHash[e.src] = createjs.PlayPropsConfig.create(e.defaultPlayProps);
    }
    return o;
  };
  t.registerSound = function (e, i, s, r, n) {
    var a = {
      src: e,
      id: i,
      data: s,
      defaultPlayProps: n
    };
    if (e instanceof Object && e.src) {
      r = i;
      a = e;
    }
    (a = createjs.LoadItem.create(a)).path = r;
    if (r != null && !(a.src instanceof Object)) {
      a.src = r + e;
    }
    var o = t._registerSound(a);
    if (!o) {
      return false;
    }
    t._preloadHash[a.src] ||= [];
    t._preloadHash[a.src].push(a);
    if (t._preloadHash[a.src].length == 1) {
      o.on("complete", createjs.proxy(this._handleLoadComplete, this));
      o.on("error", createjs.proxy(this._handleLoadError, this));
      t.activePlugin.preload(o);
    } else if (t._preloadHash[a.src][0] == 1) {
      return true;
    }
    return a;
  };
  t.registerSounds = function (t, e) {
    var i = [];
    if (t.path) {
      if (e) {
        e += t.path;
      } else {
        e = t.path;
      }
      t = t.manifest;
    }
    for (var s = 0, r = t.length; s < r; s++) {
      i[s] = createjs.Sound.registerSound(t[s].src, t[s].id, t[s].data, e, t[s].defaultPlayProps);
    }
    return i;
  };
  t.removeSound = function (e, i) {
    if (t.activePlugin == null) {
      return false;
    }
    var s;
    if (e instanceof Object && e.src) {
      e = e.src;
    }
    if (e instanceof Object) {
      s = t._parseSrc(e);
    } else {
      e = t._getSrcById(e).src;
      s = t._parsePath(e);
    }
    if (s == null) {
      return false;
    }
    e = s.src;
    if (i != null) {
      e = i + e;
    }
    for (var r in t._idHash) {
      if (t._idHash[r].src == e) {
        delete t._idHash[r];
      }
    }
    SoundChannel.removeSrc(e);
    delete t._preloadHash[e];
    t.activePlugin.removeSound(e);
    return true;
  };
  t.removeSounds = function (t, e) {
    var i = [];
    if (t.path) {
      if (e) {
        e += t.path;
      } else {
        e = t.path;
      }
      t = t.manifest;
    }
    for (var s = 0, r = t.length; s < r; s++) {
      i[s] = createjs.Sound.removeSound(t[s].src, e);
    }
    return i;
  };
  t.removeAllSounds = function () {
    t._idHash = {};
    t._preloadHash = {};
    SoundChannel.removeAll();
    if (t.activePlugin) {
      t.activePlugin.removeAllSounds();
    }
  };
  t.loadComplete = function (e) {
    if (!t.isReady()) {
      return false;
    }
    var i = t._parsePath(e);
    e = i ? t._getSrcById(i.src).src : t._getSrcById(e).src;
    return t._preloadHash[e] != undefined && t._preloadHash[e][0] == 1;
  };
  t._parsePath = function (e) {
    if (typeof e != "string") {
      e = e.toString();
    }
    var i = e.match(t.FILE_PATTERN);
    if (i == null) {
      return false;
    }
    var s = i[4];
    for (var r = i[5], n = t.capabilities, a = 0; !n[r];) {
      r = t.alternateExtensions[a++];
      if (a > t.alternateExtensions.length) {
        return null;
      }
    }
    return {
      name: s,
      src: e = e.replace("." + i[5], "." + r),
      extension: r
    };
  };
  t._parseSrc = function (e) {
    var i = {
      name: undefined,
      src: undefined,
      extension: undefined
    };
    var s = t.capabilities;
    for (var r in e) {
      if (e.hasOwnProperty(r) && s[r]) {
        i.src = e[r];
        i.extension = r;
        break;
      }
    }
    if (!i.src) {
      return false;
    }
    var n = i.src.lastIndexOf("/");
    i.name = n != -1 ? i.src.slice(n + 1) : i.src;
    return i;
  };
  t.play = function (e, i, s, r, n, a, o, h, c) {
    var u;
    u = i instanceof Object || i instanceof createjs.PlayPropsConfig ? createjs.PlayPropsConfig.create(i) : createjs.PlayPropsConfig.create({
      interrupt: i,
      delay: s,
      offset: r,
      loop: n,
      volume: a,
      pan: o,
      startTime: h,
      duration: c
    });
    var l = t.createInstance(e, u.startTime, u.duration);
    if (!t._playInstance(l, u)) {
      l._playFailed();
    }
    return l;
  };
  t.createInstance = function (e, i, s) {
    if (!t.initializeDefaultPlugins()) {
      return new createjs.DefaultSoundInstance(e, i, s);
    }
    var r = t._defaultPlayPropsHash[e];
    e = t._getSrcById(e);
    var n = t._parsePath(e.src);
    var a = null;
    if (n != null && n.src != null) {
      SoundChannel.create(n.src);
      if (i == null) {
        i = e.startTime;
      }
      a = t.activePlugin.create(n.src, i, s || e.duration);
      if (r = r || t._defaultPlayPropsHash[n.src]) {
        a.applyPlayProps(r);
      }
    } else {
      a = new createjs.DefaultSoundInstance(e, i, s);
    }
    a.uniqueId = t._lastID++;
    return a;
  };
  t.stop = function () {
    var t = this._instances;
    for (var e = t.length; e--;) {
      t[e].stop();
    }
  };
  t.setVolume = function (e) {
    if (Number(e) == null) {
      return false;
    }
    e = Math.max(0, Math.min(1, e));
    t._masterVolume = e;
    if (!this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(e)) {
      var i = this._instances;
      for (var s = 0, r = i.length; s < r; s++) {
        i[s].setMasterVolume(e);
      }
    }
  };
  t.getVolume = function () {
    return this._masterVolume;
  };
  t.setMute = function (t) {
    if (t == null) {
      return false;
    }
    this._masterMute = t;
    if (!this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(t)) {
      var e = this._instances;
      for (var i = 0, s = e.length; i < s; i++) {
        e[i].setMasterMute(t);
      }
    }
    return true;
  };
  t.getMute = function () {
    return this._masterMute;
  };
  t.setDefaultPlayProps = function (e, i) {
    e = t._getSrcById(e);
    t._defaultPlayPropsHash[t._parsePath(e.src).src] = createjs.PlayPropsConfig.create(i);
  };
  t.getDefaultPlayProps = function (e) {
    e = t._getSrcById(e);
    return t._defaultPlayPropsHash[t._parsePath(e.src).src];
  };
  t._playInstance = function (e, i) {
    var s = t._defaultPlayPropsHash[e.src] || {};
    if (i.interrupt == null) {
      i.interrupt = s.interrupt || t.defaultInterruptBehavior;
    }
    if (i.delay == null) {
      i.delay = s.delay || 0;
    }
    if (i.offset == null) {
      i.offset = e.getPosition();
    }
    if (i.loop == null) {
      i.loop = e.loop;
    }
    if (i.volume == null) {
      i.volume = e.volume;
    }
    if (i.pan == null) {
      i.pan = e.pan;
    }
    if (i.delay == 0) {
      if (!t._beginPlaying(e, i)) {
        return false;
      }
    } else {
      var r = setTimeout(function () {
        t._beginPlaying(e, i);
      }, i.delay);
      e.delayTimeoutId = r;
    }
    this._instances.push(e);
    return true;
  };
  t._beginPlaying = function (t, e) {
    if (!SoundChannel.add(t, e.interrupt)) {
      return false;
    }
    if (!t._beginPlaying(e)) {
      var i = createjs.indexOf(this._instances, t);
      if (i > -1) {
        this._instances.splice(i, 1);
      }
      return false;
    }
    return true;
  };
  t._getSrcById = function (e) {
    return t._idHash[e] || {
      src: e
    };
  };
  t._playFinished = function (t) {
    SoundChannel.remove(t);
    var e = createjs.indexOf(this._instances, t);
    if (e > -1) {
      this._instances.splice(e, 1);
    }
  };
  createjs.Sound = Sound;
  SoundChannel.channels = {};
  SoundChannel.create = function (t, e) {
    return SoundChannel.get(t) == null && (SoundChannel.channels[t] = new SoundChannel(t, e), true);
  };
  SoundChannel.removeSrc = function (t) {
    var e = SoundChannel.get(t);
    return e != null && (e._removeAll(), delete SoundChannel.channels[t], true);
  };
  SoundChannel.removeAll = function () {
    for (var t in SoundChannel.channels) {
      SoundChannel.channels[t]._removeAll();
    }
    SoundChannel.channels = {};
  };
  SoundChannel.add = function (t, e) {
    var i = SoundChannel.get(t.src);
    return i != null && i._add(t, e);
  };
  SoundChannel.remove = function (t) {
    var e = SoundChannel.get(t.src);
    return e != null && (e._remove(t), true);
  };
  SoundChannel.maxPerChannel = function () {
    return e.maxDefault;
  };
  SoundChannel.get = function (t) {
    return SoundChannel.channels[t];
  };
  var e = SoundChannel.prototype;
  e.constructor = SoundChannel;
  e.src = null;
  e.max = null;
  e.maxDefault = 100;
  e.length = 0;
  e.init = function (t, e) {
    this.src = t;
    this.max = e || this.maxDefault;
    if (this.max == -1) {
      this.max = this.maxDefault;
    }
    this._instances = [];
  };
  e._get = function (t) {
    return this._instances[t];
  };
  e._add = function (t, e) {
    return !!this._getSlot(e, t) && (this._instances.push(t), this.length++, true);
  };
  e._remove = function (t) {
    var e = createjs.indexOf(this._instances, t);
    return e != -1 && (this._instances.splice(e, 1), this.length--, true);
  };
  e._removeAll = function () {
    for (var t = this.length - 1; t >= 0; t--) {
      this._instances[t].stop();
    }
  };
  e._getSlot = function (t, e) {
    var i;
    var s;
    if (t != Sound.INTERRUPT_NONE && (s = this._get(0)) == null) {
      return true;
    }
    for (var r = 0, n = this.max; r < n; r++) {
      if ((i = this._get(r)) == null) {
        return true;
      }
      if (i.playState == Sound.PLAY_FINISHED || i.playState == Sound.PLAY_INTERRUPTED || i.playState == Sound.PLAY_FAILED) {
        s = i;
        break;
      }
      if (t != Sound.INTERRUPT_NONE && (t == Sound.INTERRUPT_EARLY && i.getPosition() < s.getPosition() || t == Sound.INTERRUPT_LATE && i.getPosition() > s.getPosition())) {
        s = i;
      }
    }
    return s != null && (s._interrupt(), this._remove(s), true);
  };
  e.toString = function () {
    return "[Sound SoundChannel]";
  };
})();
(function () {
  'use strict';

  function t(t, e, i, s) {
    this.EventDispatcher_constructor();
    this.src = t;
    this.uniqueId = -1;
    this.playState = null;
    this.delayTimeoutId = null;
    this._volume = 1;
    Object.defineProperty(this, "volume", {
      get: this.getVolume,
      set: this.setVolume
    });
    this._pan = 0;
    Object.defineProperty(this, "pan", {
      get: this.getPan,
      set: this.setPan
    });
    this._startTime = Math.max(0, e || 0);
    Object.defineProperty(this, "startTime", {
      get: this.getStartTime,
      set: this.setStartTime
    });
    this._duration = Math.max(0, i || 0);
    Object.defineProperty(this, "duration", {
      get: this.getDuration,
      set: this.setDuration
    });
    this._playbackResource = null;
    Object.defineProperty(this, "playbackResource", {
      get: this.getPlaybackResource,
      set: this.setPlaybackResource
    });
    if (s !== false && s !== true) {
      this.setPlaybackResource(s);
    }
    this._position = 0;
    Object.defineProperty(this, "position", {
      get: this.getPosition,
      set: this.setPosition
    });
    this._loop = 0;
    Object.defineProperty(this, "loop", {
      get: this.getLoop,
      set: this.setLoop
    });
    this._muted = false;
    Object.defineProperty(this, "muted", {
      get: this.getMuted,
      set: this.setMuted
    });
    this._paused = false;
    Object.defineProperty(this, "paused", {
      get: this.getPaused,
      set: this.setPaused
    });
  }
  var e = createjs.extend(t, createjs.EventDispatcher);
  e.play = function (t, e, i, s, r, n) {
    var a;
    a = t instanceof Object || t instanceof createjs.PlayPropsConfig ? createjs.PlayPropsConfig.create(t) : createjs.PlayPropsConfig.create({
      interrupt: t,
      delay: e,
      offset: i,
      loop: s,
      volume: r,
      pan: n
    });
    if (this.playState == createjs.Sound.PLAY_SUCCEEDED) {
      this.applyPlayProps(a);
      if (this._paused) {
        this.setPaused(false);
      }
      return;
    } else {
      this._cleanUp();
      createjs.Sound._playInstance(this, a);
      return this;
    }
  };
  e.stop = function () {
    this._position = 0;
    this._paused = false;
    this._handleStop();
    this._cleanUp();
    this.playState = createjs.Sound.PLAY_FINISHED;
    return this;
  };
  e.destroy = function () {
    this._cleanUp();
    this.src = null;
    this.playbackResource = null;
    this.removeAllEventListeners();
  };
  e.applyPlayProps = function (t) {
    if (t.offset != null) {
      this.setPosition(t.offset);
    }
    if (t.loop != null) {
      this.setLoop(t.loop);
    }
    if (t.volume != null) {
      this.setVolume(t.volume);
    }
    if (t.pan != null) {
      this.setPan(t.pan);
    }
    if (t.startTime != null) {
      this.setStartTime(t.startTime);
      this.setDuration(t.duration);
    }
    return this;
  };
  e.toString = function () {
    return "[AbstractSoundInstance]";
  };
  e.getPaused = function () {
    return this._paused;
  };
  e.setPaused = function (t) {
    if ((t === true || t === false) && this._paused != t && (t != 1 || this.playState == createjs.Sound.PLAY_SUCCEEDED)) {
      this._paused = t;
      if (t) {
        this._pause();
      } else {
        this._resume();
      }
      clearTimeout(this.delayTimeoutId);
      return this;
    }
  };
  e.setVolume = function (t) {
    if (t == this._volume) {
      return this;
    } else {
      this._volume = Math.max(0, Math.min(1, t));
      if (!this._muted) {
        this._updateVolume();
      }
      return this;
    }
  };
  e.getVolume = function () {
    return this._volume;
  };
  e.setMuted = function (t) {
    if (t === true || t === false) {
      this._muted = t;
      this._updateVolume();
      return this;
    }
  };
  e.getMuted = function () {
    return this._muted;
  };
  e.setPan = function (t) {
    if (t == this._pan) {
      return this;
    } else {
      this._pan = Math.max(-1, Math.min(1, t));
      this._updatePan();
      return this;
    }
  };
  e.getPan = function () {
    return this._pan;
  };
  e.getPosition = function () {
    if (!this._paused && this.playState == createjs.Sound.PLAY_SUCCEEDED) {
      this._position = this._calculateCurrentPosition();
    }
    return this._position;
  };
  e.setPosition = function (t) {
    this._position = Math.max(0, t);
    if (this.playState == createjs.Sound.PLAY_SUCCEEDED) {
      this._updatePosition();
    }
    return this;
  };
  e.getStartTime = function () {
    return this._startTime;
  };
  e.setStartTime = function (t) {
    if (t == this._startTime) {
      return this;
    } else {
      this._startTime = Math.max(0, t || 0);
      this._updateStartTime();
      return this;
    }
  };
  e.getDuration = function () {
    return this._duration;
  };
  e.setDuration = function (t) {
    if (t == this._duration) {
      return this;
    } else {
      this._duration = Math.max(0, t || 0);
      this._updateDuration();
      return this;
    }
  };
  e.setPlaybackResource = function (t) {
    this._playbackResource = t;
    if (this._duration == 0) {
      this._setDurationFromSource();
    }
    return this;
  };
  e.getPlaybackResource = function () {
    return this._playbackResource;
  };
  e.getLoop = function () {
    return this._loop;
  };
  e.setLoop = function (t) {
    if (this._playbackResource != null) {
      if (this._loop != 0 && t == 0) {
        this._removeLooping(t);
      } else if (this._loop == 0 && t != 0) {
        this._addLooping(t);
      }
    }
    this._loop = t;
  };
  e._sendEvent = function (t) {
    var e = new createjs.Event(t);
    this.dispatchEvent(e);
  };
  e._cleanUp = function () {
    clearTimeout(this.delayTimeoutId);
    this._handleCleanUp();
    this._paused = false;
    createjs.Sound._playFinished(this);
  };
  e._interrupt = function () {
    this._cleanUp();
    this.playState = createjs.Sound.PLAY_INTERRUPTED;
    this._sendEvent("interrupted");
  };
  e._beginPlaying = function (t) {
    this.setPosition(t.offset);
    this.setLoop(t.loop);
    this.setVolume(t.volume);
    this.setPan(t.pan);
    if (t.startTime != null) {
      this.setStartTime(t.startTime);
      this.setDuration(t.duration);
    }
    if (this._playbackResource != null && this._position < this._duration) {
      this._paused = false;
      this._handleSoundReady();
      this.playState = createjs.Sound.PLAY_SUCCEEDED;
      this._sendEvent("succeeded");
      return true;
    } else {
      this._playFailed();
      return false;
    }
  };
  e._playFailed = function () {
    this._cleanUp();
    this.playState = createjs.Sound.PLAY_FAILED;
    this._sendEvent("failed");
  };
  e._handleSoundComplete = function (t) {
    this._position = 0;
    if (this._loop != 0) {
      this._loop--;
      this._handleLoop();
      this._sendEvent("loop");
      return;
    }
    this._cleanUp();
    this.playState = createjs.Sound.PLAY_FINISHED;
    this._sendEvent("complete");
  };
  e._handleSoundReady = function () {};
  e._updateVolume = function () {};
  e._updatePan = function () {};
  e._updateStartTime = function () {};
  e._updateDuration = function () {};
  e._setDurationFromSource = function () {};
  e._calculateCurrentPosition = function () {};
  e._updatePosition = function () {};
  e._removeLooping = function (t) {};
  e._addLooping = function (t) {};
  e._pause = function () {};
  e._resume = function () {};
  e._handleStop = function () {};
  e._handleCleanUp = function () {};
  e._handleLoop = function () {};
  createjs.AbstractSoundInstance = createjs.promote(t, "EventDispatcher");
  createjs.DefaultSoundInstance = createjs.AbstractSoundInstance;
})();
(function () {
  'use strict';

  function t() {
    this._capabilities = null;
    this._loaders = {};
    this._audioSources = {};
    this._soundInstances = {};
    this._volume = 1;
    this._loaderClass;
    this._soundInstanceClass;
  }
  var e = t.prototype;
  t._capabilities = null;
  t.isSupported = function () {
    return true;
  };
  e.register = function (t) {
    var e = this._loaders[t.src];
    if (e && !e.canceled) {
      return this._loaders[t.src];
    } else {
      this._audioSources[t.src] = true;
      this._soundInstances[t.src] = [];
      (e = new this._loaderClass(t)).on("complete", this._handlePreloadComplete, this);
      this._loaders[t.src] = e;
      return e;
    }
  };
  e.preload = function (t) {
    t.on("error", this._handlePreloadError, this);
    t.load();
  };
  e.isPreloadStarted = function (t) {
    return this._audioSources[t] != null;
  };
  e.isPreloadComplete = function (t) {
    return this._audioSources[t] != null && this._audioSources[t] != 1;
  };
  e.removeSound = function (t) {
    if (this._soundInstances[t]) {
      for (var e = this._soundInstances[t].length; e--;) {
        this._soundInstances[t][e].destroy();
      }
      delete this._soundInstances[t];
      delete this._audioSources[t];
      if (this._loaders[t]) {
        this._loaders[t].destroy();
      }
      delete this._loaders[t];
    }
  };
  e.removeAllSounds = function () {
    for (var t in this._audioSources) {
      this.removeSound(t);
    }
  };
  e.create = function (t, e, i) {
    if (!this.isPreloadStarted(t)) {
      this.preload(this.register(t));
    }
    var s = new this._soundInstanceClass(t, e, i, this._audioSources[t]);
    this._soundInstances[t].push(s);
    return s;
  };
  e.setVolume = function (t) {
    this._volume = t;
    this._updateVolume();
    return true;
  };
  e.getVolume = function () {
    return this._volume;
  };
  e.setMute = function (t) {
    this._updateVolume();
    return true;
  };
  e.toString = function () {
    return "[AbstractPlugin]";
  };
  e._handlePreloadComplete = function (t) {
    var e = t.target.getItem().src;
    this._audioSources[e] = t.result;
    for (var i = 0, s = this._soundInstances[e].length; i < s; i++) {
      this._soundInstances[e][i].setPlaybackResource(this._audioSources[e]);
    }
  };
  e._handlePreloadError = function (t) {};
  e._updateVolume = function () {};
  createjs.AbstractPlugin = t;
})();
(function () {
  'use strict';

  function Loader(t) {
    this.AbstractLoader_constructor(t, true, createjs.AbstractLoader.SOUND);
  }
  var t = createjs.extend(Loader, createjs.AbstractLoader);
  Loader.context = null;
  t.toString = function () {
    return "[WebAudioLoader]";
  };
  t._createRequest = function () {
    this._request = new createjs.XHRRequest(this._item, false);
    this._request.setResponseType("arraybuffer");
  };
  t._sendComplete = function (t) {
    Loader.context.decodeAudioData(this._rawResult, createjs.proxy(this._handleAudioDecoded, this), createjs.proxy(this._sendError, this));
  };
  t._handleAudioDecoded = function (t) {
    this._result = t;
    this.AbstractLoader__sendComplete();
  };
  createjs.WebAudioLoader = createjs.promote(Loader, "AbstractLoader");
})();
(function () {
  'use strict';

  function WebAudioSoundInstance(t, i, s, r) {
    this.AbstractSoundInstance_constructor(t, i, s, r);
    this.gainNode = e.context.createGain();
    this.panNode = e.context.createPanner();
    this.panNode.panningModel = e._panningModel;
    this.panNode.connect(this.gainNode);
    this._updatePan();
    this.sourceNode = null;
    this._soundCompleteTimeout = null;
    this._sourceNodeNext = null;
    this._playbackStartTime = 0;
    this._endedHandler = createjs.proxy(this._handleSoundComplete, this);
  }
  var t = createjs.extend(WebAudioSoundInstance, createjs.AbstractSoundInstance);
  var e = WebAudioSoundInstance;
  e.context = null;
  e._scratchBuffer = null;
  e.destinationNode = null;
  e._panningModel = "equalpower";
  t.destroy = function () {
    this.AbstractSoundInstance_destroy();
    this.panNode.disconnect(0);
    this.panNode = null;
    this.gainNode.disconnect(0);
    this.gainNode = null;
  };
  t.toString = function () {
    return "[WebAudioSoundInstance]";
  };
  t._updatePan = function () {
    this.panNode.setPosition(this._pan, 0, -0.5);
  };
  t._removeLooping = function (t) {
    this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext);
  };
  t._addLooping = function (t) {
    if (this.playState == createjs.Sound.PLAY_SUCCEEDED) {
      this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0);
    }
  };
  t._setDurationFromSource = function () {
    this._duration = this.playbackResource.duration * 1000;
  };
  t._handleCleanUp = function () {
    if (this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED) {
      this.sourceNode = this._cleanUpAudioNode(this.sourceNode);
      this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext);
    }
    if (this.gainNode.numberOfOutputs != 0) {
      this.gainNode.disconnect(0);
    }
    clearTimeout(this._soundCompleteTimeout);
    this._playbackStartTime = 0;
  };
  t._cleanUpAudioNode = function (t) {
    if (t) {
      t.stop(0);
      t.disconnect(0);
      try {
        t.buffer = e._scratchBuffer;
      } catch (t) {}
      t = null;
    }
    return t;
  };
  t._handleSoundReady = function (t) {
    this.gainNode.connect(e.destinationNode);
    var i = this._duration * 0.001;
    var s = this._position * 0.001;
    if (s > i) {
      s = i;
    }
    this.sourceNode = this._createAndPlayAudioNode(e.context.currentTime - i, s);
    this._playbackStartTime = this.sourceNode.startTime - s;
    this._soundCompleteTimeout = setTimeout(this._endedHandler, (i - s) * 1000);
    if (this._loop != 0) {
      this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0);
    }
  };
  t._createAndPlayAudioNode = function (t, i) {
    var s = e.context.createBufferSource();
    s.buffer = this.playbackResource;
    s.connect(this.panNode);
    var r = this._duration * 0.001;
    s.startTime = t + r;
    s.start(s.startTime, i + this._startTime * 0.001, r - i);
    return s;
  };
  t._pause = function () {
    this._position = (e.context.currentTime - this._playbackStartTime) * 1000;
    this.sourceNode = this._cleanUpAudioNode(this.sourceNode);
    this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext);
    if (this.gainNode.numberOfOutputs != 0) {
      this.gainNode.disconnect(0);
    }
    clearTimeout(this._soundCompleteTimeout);
  };
  t._resume = function () {
    this._handleSoundReady();
  };
  t._updateVolume = function () {
    var t = this._muted ? 0 : this._volume;
    if (t != this.gainNode.gain.value) {
      this.gainNode.gain.value = t;
    }
  };
  t._calculateCurrentPosition = function () {
    return (e.context.currentTime - this._playbackStartTime) * 1000;
  };
  t._updatePosition = function () {
    this.sourceNode = this._cleanUpAudioNode(this.sourceNode);
    this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext);
    clearTimeout(this._soundCompleteTimeout);
    if (!this._paused) {
      this._handleSoundReady();
    }
  };
  t._handleLoop = function () {
    this._cleanUpAudioNode(this.sourceNode);
    this.sourceNode = this._sourceNodeNext;
    this._playbackStartTime = this.sourceNode.startTime;
    this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0);
    this._soundCompleteTimeout = setTimeout(this._endedHandler, this._duration);
  };
  t._updateDuration = function () {
    if (this.playState == createjs.Sound.PLAY_SUCCEEDED) {
      this._pause();
      this._resume();
    }
  };
  createjs.WebAudioSoundInstance = createjs.promote(WebAudioSoundInstance, "AbstractSoundInstance");
})();
(function () {
  'use strict';

  function WebAudioPlugin() {
    this.AbstractPlugin_constructor();
    this._panningModel = e._panningModel;
    this.context = e.context;
    this.dynamicsCompressorNode = this.context.createDynamicsCompressor();
    this.dynamicsCompressorNode.connect(this.context.destination);
    this.gainNode = this.context.createGain();
    this.gainNode.connect(this.dynamicsCompressorNode);
    createjs.WebAudioSoundInstance.destinationNode = this.gainNode;
    this._capabilities = e._capabilities;
    this._loaderClass = createjs.WebAudioLoader;
    this._soundInstanceClass = createjs.WebAudioSoundInstance;
    this._addPropsToClasses();
  }
  var t = createjs.extend(WebAudioPlugin, createjs.AbstractPlugin);
  var e = WebAudioPlugin;
  e._capabilities = null;
  e._panningModel = "equalpower";
  e.context = null;
  e._scratchBuffer = null;
  e._unlocked = false;
  e.isSupported = function () {
    var t = createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry;
    return (location.protocol != "file:" || !!t || !!this._isFileXHRSupported()) && (e._generateCapabilities(), e.context != null);
  };
  e.playEmptySound = function () {
    if (e.context != null) {
      var t = e.context.createBufferSource();
      t.buffer = e._scratchBuffer;
      t.connect(e.context.destination);
      t.start(0, 0, 0);
    }
  };
  e._isFileXHRSupported = function () {
    var t = true;
    var e = new XMLHttpRequest();
    try {
      e.open("GET", "WebAudioPluginTest.fail", false);
    } catch (e) {
      return t = false;
    }
    e.onerror = function () {
      t = false;
    };
    e.onload = function () {
      t = this.status == 404 || this.status == 200 || this.status == 0 && this.response != "";
    };
    try {
      e.send();
    } catch (e) {
      t = false;
    }
    return t;
  };
  e._generateCapabilities = function () {
    if (e._capabilities == null) {
      var t = document.createElement("audio");
      if (t.canPlayType == null) {
        return null;
      }
      if (e.context == null) {
        if (window.AudioContext) {
          e.context = new AudioContext();
        } else {
          if (!window.webkitAudioContext) {
            return null;
          }
          e.context = new webkitAudioContext();
        }
      }
      if (e._scratchBuffer == null) {
        e._scratchBuffer = e.context.createBuffer(1, 1, 22050);
      }
      e._compatibilitySetUp();
      if ("ontouchstart" in window && e.context.state != "running") {
        e._unlock();
        document.addEventListener("mousedown", e._unlock, true);
        document.addEventListener("touchend", e._unlock, true);
      }
      e._capabilities = {
        panning: true,
        volume: true,
        tracks: -1
      };
      var i = createjs.Sound.SUPPORTED_EXTENSIONS;
      var s = createjs.Sound.EXTENSION_MAP;
      for (var r = 0, n = i.length; r < n; r++) {
        var a = i[r];
        var o = s[a] || a;
        e._capabilities[a] = t.canPlayType("audio/" + a) != "no" && t.canPlayType("audio/" + a) != "" || t.canPlayType("audio/" + o) != "no" && t.canPlayType("audio/" + o) != "";
      }
      if (e.context.destination.numberOfChannels < 2) {
        e._capabilities.panning = false;
      }
    }
  };
  e._compatibilitySetUp = function () {
    e._panningModel = "equalpower";
    if (!e.context.createGain) {
      e.context.createGain = e.context.createGainNode;
      var t = e.context.createBufferSource();
      t.__proto__.start = t.__proto__.noteGrainOn;
      t.__proto__.stop = t.__proto__.noteOff;
      e._panningModel = 0;
    }
  };
  e._unlock = function () {
    if (!e._unlocked) {
      e.playEmptySound();
      if (e.context.state == "running") {
        document.removeEventListener("mousedown", e._unlock, true);
        document.removeEventListener("touchend", e._unlock, true);
        e._unlocked = true;
      }
    }
  };
  t.toString = function () {
    return "[WebAudioPlugin]";
  };
  t._addPropsToClasses = function () {
    var t = this._soundInstanceClass;
    t.context = this.context;
    t._scratchBuffer = e._scratchBuffer;
    t.destinationNode = this.gainNode;
    t._panningModel = this._panningModel;
    this._loaderClass.context = this.context;
  };
  t._updateVolume = function () {
    var t = createjs.Sound._masterMute ? 0 : this._volume;
    if (t != this.gainNode.gain.value) {
      this.gainNode.gain.value = t;
    }
  };
  createjs.WebAudioPlugin = createjs.promote(WebAudioPlugin, "AbstractPlugin");
})();
(function () {
  'use strict';

  function HTMLAudioTagPool() {
    throw "HTMLAudioTagPool cannot be instantiated";
  }
  var t = HTMLAudioTagPool;
  function TagPool(t) {
    this._tags = [];
  }
  t._tags = {};
  t._tagPool = new TagPool();
  t._tagUsed = {};
  t.get = function (e) {
    var i = t._tags[e];
    if (i == null) {
      (i = t._tags[e] = t._tagPool.get()).src = e;
    } else if (t._tagUsed[e]) {
      (i = t._tagPool.get()).src = e;
    } else {
      t._tagUsed[e] = true;
    }
    return i;
  };
  t.set = function (e, i) {
    if (i == t._tags[e]) {
      t._tagUsed[e] = false;
    } else {
      t._tagPool.set(i);
    }
  };
  t.remove = function (e) {
    var i = t._tags[e];
    return i != null && (t._tagPool.set(i), delete t._tags[e], delete t._tagUsed[e], true);
  };
  t.getDuration = function (e) {
    var i = t._tags[e];
    if (i != null && i.duration) {
      return i.duration * 1000;
    } else {
      return 0;
    }
  };
  createjs.HTMLAudioTagPool = HTMLAudioTagPool;
  var e = TagPool.prototype;
  e.constructor = TagPool;
  e.get = function () {
    var t;
    if ((t = this._tags.length == 0 ? this._createTag() : this._tags.pop()).parentNode == null) {
      document.body.appendChild(t);
    }
    return t;
  };
  e.set = function (t) {
    if (createjs.indexOf(this._tags, t) == -1) {
      this._tags.src = null;
      this._tags.push(t);
    }
  };
  e.toString = function () {
    return "[TagPool]";
  };
  e._createTag = function () {
    var t = document.createElement("audio");
    t.autoplay = false;
    t.preload = "none";
    return t;
  };
})();
(function () {
  'use strict';

  function HTMLAudioSoundInstance(t, e, i, s) {
    this.AbstractSoundInstance_constructor(t, e, i, s);
    this._audioSpriteStopTime = null;
    this._delayTimeoutId = null;
    this._endedHandler = createjs.proxy(this._handleSoundComplete, this);
    this._readyHandler = createjs.proxy(this._handleTagReady, this);
    this._stalledHandler = createjs.proxy(this._playFailed, this);
    this._audioSpriteEndHandler = createjs.proxy(this._handleAudioSpriteLoop, this);
    this._loopHandler = createjs.proxy(this._handleSoundComplete, this);
    if (i) {
      this._audioSpriteStopTime = (e + i) * 0.001;
    } else {
      this._duration = createjs.HTMLAudioTagPool.getDuration(this.src);
    }
  }
  var t = createjs.extend(HTMLAudioSoundInstance, createjs.AbstractSoundInstance);
  t.setMasterVolume = function (t) {
    this._updateVolume();
  };
  t.setMasterMute = function (t) {
    this._updateVolume();
  };
  t.toString = function () {
    return "[HTMLAudioSoundInstance]";
  };
  t._removeLooping = function () {
    if (this._playbackResource != null) {
      this._playbackResource.loop = false;
      this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
    }
  };
  t._addLooping = function () {
    if (this._playbackResource != null && !this._audioSpriteStopTime) {
      this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
      this._playbackResource.loop = true;
    }
  };
  t._handleCleanUp = function () {
    var t = this._playbackResource;
    if (t != null) {
      t.pause();
      t.loop = false;
      t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, false);
      t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, false);
      t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, false);
      t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
      t.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, false);
      try {
        t.currentTime = this._startTime;
      } catch (t) {}
      createjs.HTMLAudioTagPool.set(this.src, t);
      this._playbackResource = null;
    }
  };
  t._beginPlaying = function (t) {
    this._playbackResource = createjs.HTMLAudioTagPool.get(this.src);
    return this.AbstractSoundInstance__beginPlaying(t);
  };
  t._handleSoundReady = function (t) {
    if (this._playbackResource.readyState !== 4) {
      var e = this._playbackResource;
      e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, false);
      e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, false);
      e.preload = "auto";
      e.load();
      return;
    }
    this._updateVolume();
    this._playbackResource.currentTime = (this._startTime + this._position) * 0.001;
    if (this._audioSpriteStopTime) {
      this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, false);
    } else {
      this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, false);
      if (this._loop != 0) {
        this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
        this._playbackResource.loop = true;
      }
    }
    this._playbackResource.play();
  };
  t._handleTagReady = function (t) {
    this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, false);
    this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, false);
    this._handleSoundReady();
  };
  t._pause = function () {
    this._playbackResource.pause();
  };
  t._resume = function () {
    this._playbackResource.play();
  };
  t._updateVolume = function () {
    if (this._playbackResource != null) {
      var t = this._muted || createjs.Sound._masterMute ? 0 : this._volume * createjs.Sound._masterVolume;
      if (t != this._playbackResource.volume) {
        this._playbackResource.volume = t;
      }
    }
  };
  t._calculateCurrentPosition = function () {
    return this._playbackResource.currentTime * 1000 - this._startTime;
  };
  t._updatePosition = function () {
    this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
    this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, false);
    try {
      this._playbackResource.currentTime = (this._position + this._startTime) * 0.001;
    } catch (t) {
      this._handleSetPositionSeek(null);
    }
  };
  t._handleSetPositionSeek = function (t) {
    if (this._playbackResource != null) {
      this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, false);
      this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
    }
  };
  t._handleAudioSpriteLoop = function (t) {
    if (!(this._playbackResource.currentTime <= this._audioSpriteStopTime)) {
      this._playbackResource.pause();
      if (this._loop == 0) {
        this._handleSoundComplete(null);
      } else {
        this._position = 0;
        this._loop--;
        this._playbackResource.currentTime = this._startTime * 0.001;
        if (!this._paused) {
          this._playbackResource.play();
        }
        this._sendEvent("loop");
      }
    }
  };
  t._handleLoop = function (t) {
    if (this._loop == 0) {
      this._playbackResource.loop = false;
      this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
    }
  };
  t._updateStartTime = function () {
    this._audioSpriteStopTime = (this._startTime + this._duration) * 0.001;
    if (this.playState == createjs.Sound.PLAY_SUCCEEDED) {
      this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, false);
      this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, false);
    }
  };
  t._updateDuration = function () {
    this._audioSpriteStopTime = (this._startTime + this._duration) * 0.001;
    if (this.playState == createjs.Sound.PLAY_SUCCEEDED) {
      this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, false);
      this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, false);
    }
  };
  t._setDurationFromSource = function () {
    this._duration = createjs.HTMLAudioTagPool.getDuration(this.src);
    this._playbackResource = null;
  };
  createjs.HTMLAudioSoundInstance = createjs.promote(HTMLAudioSoundInstance, "AbstractSoundInstance");
})();
(function () {
  'use strict';

  function HTMLAudioPlugin() {
    this.AbstractPlugin_constructor();
    this.defaultNumChannels = 2;
    this._capabilities = e._capabilities;
    this._loaderClass = createjs.SoundLoader;
    this._soundInstanceClass = createjs.HTMLAudioSoundInstance;
  }
  var t = createjs.extend(HTMLAudioPlugin, createjs.AbstractPlugin);
  var e = HTMLAudioPlugin;
  e.MAX_INSTANCES = 30;
  e._AUDIO_READY = "canplaythrough";
  e._AUDIO_ENDED = "ended";
  e._AUDIO_SEEKED = "seeked";
  e._AUDIO_STALLED = "stalled";
  e._TIME_UPDATE = "timeupdate";
  e._capabilities = null;
  e.isSupported = function () {
    e._generateCapabilities();
    return e._capabilities != null;
  };
  e._generateCapabilities = function () {
    if (e._capabilities == null) {
      var t = document.createElement("audio");
      if (t.canPlayType == null) {
        return null;
      }
      e._capabilities = {
        panning: false,
        volume: true,
        tracks: -1
      };
      var i = createjs.Sound.SUPPORTED_EXTENSIONS;
      var s = createjs.Sound.EXTENSION_MAP;
      for (var r = 0, n = i.length; r < n; r++) {
        var a = i[r];
        var o = s[a] || a;
        e._capabilities[a] = t.canPlayType("audio/" + a) != "no" && t.canPlayType("audio/" + a) != "" || t.canPlayType("audio/" + o) != "no" && t.canPlayType("audio/" + o) != "";
      }
    }
  };
  t.register = function (t) {
    var e = createjs.HTMLAudioTagPool.get(t.src);
    var i = this.AbstractPlugin_register(t);
    i.setTag(e);
    return i;
  };
  t.removeSound = function (t) {
    this.AbstractPlugin_removeSound(t);
    createjs.HTMLAudioTagPool.remove(t);
  };
  t.create = function (t, e, i) {
    var s = this.AbstractPlugin_create(t, e, i);
    s.setPlaybackResource(null);
    return s;
  };
  t.toString = function () {
    return "[HTMLAudioPlugin]";
  };
  t.setVolume = t.getVolume = t.setMute = null;
  createjs.HTMLAudioPlugin = createjs.promote(HTMLAudioPlugin, "AbstractPlugin");
})();
(function () {
  'use strict';

  function Tween(t, e, i) {
    this.ignoreGlobalPause = false;
    this.loop = false;
    this.duration = 0;
    this.pluginData = i || {};
    this.target = t;
    this.position = null;
    this.passive = false;
    this._paused = false;
    this._curQueueProps = {};
    this._initQueueProps = {};
    this._steps = [];
    this._actions = [];
    this._prevPosition = 0;
    this._stepPosition = 0;
    this._prevPos = -1;
    this._target = t;
    this._useTicks = false;
    this._inited = false;
    this._registered = false;
    if (e) {
      this._useTicks = e.useTicks;
      this.ignoreGlobalPause = e.ignoreGlobalPause;
      this.loop = e.loop;
      if (e.onChange) {
        this.addEventListener("change", e.onChange);
      }
      if (e.override) {
        Tween.removeTweens(t);
      }
    }
    if (e && e.paused) {
      this._paused = true;
    } else {
      createjs.Tween._register(this, true);
    }
    if (e && e.position != null) {
      this.setPosition(e.position, Tween.NONE);
    }
  }
  var t = createjs.extend(Tween, createjs.EventDispatcher);
  Tween.NONE = 0;
  Tween.LOOP = 1;
  Tween.REVERSE = 2;
  Tween.IGNORE = {};
  Tween._tweens = [];
  Tween._plugins = {};
  Tween.get = function (t, e, i, s) {
    if (s) {
      Tween.removeTweens(t);
    }
    return new Tween(t, e, i);
  };
  Tween.tick = function (t, e) {
    var i = Tween._tweens.slice();
    for (var s = i.length - 1; s >= 0; s--) {
      var r = i[s];
      if ((!e || !!r.ignoreGlobalPause) && !r._paused) {
        r.tick(r._useTicks ? 1 : t);
      }
    }
  };
  Tween.handleEvent = function (t) {
    if (t.type == "tick") {
      this.tick(t.delta, t.paused);
    }
  };
  Tween.removeTweens = function (t) {
    if (t.tweenjs_count) {
      var e = Tween._tweens;
      for (var i = e.length - 1; i >= 0; i--) {
        var s = e[i];
        if (s._target == t) {
          s._paused = true;
          e.splice(i, 1);
        }
      }
      t.tweenjs_count = 0;
    }
  };
  Tween.removeAllTweens = function () {
    var t = Tween._tweens;
    for (var e = 0, i = t.length; e < i; e++) {
      var s = t[e];
      s._paused = true;
      if (s.target) {
        s.target.tweenjs_count = 0;
      }
    }
    t.length = 0;
  };
  Tween.hasActiveTweens = function (t) {
    if (t) {
      return t.tweenjs_count != null && !!t.tweenjs_count;
    } else {
      return Tween._tweens && !!Tween._tweens.length;
    }
  };
  Tween.installPlugin = function (t, e) {
    var i = t.priority;
    if (i == null) {
      t.priority = i = 0;
    }
    for (var s = 0, r = e.length, n = Tween._plugins; s < r; s++) {
      var a = e[s];
      if (n[a]) {
        for (var o = n[a], h = 0, c = o.length; h < c && !(i < o[h].priority); h++);
        n[a].splice(h, 0, t);
      } else {
        n[a] = [t];
      }
    }
  };
  Tween._register = function (t, e) {
    var i = t._target;
    var s = Tween._tweens;
    if (e && !t._registered) {
      if (i) {
        i.tweenjs_count = i.tweenjs_count ? i.tweenjs_count + 1 : 1;
      }
      s.push(t);
      if (!Tween._inited && createjs.Ticker) {
        createjs.Ticker.addEventListener("tick", Tween);
        Tween._inited = true;
      }
    } else if (!e && t._registered) {
      if (i) {
        i.tweenjs_count--;
      }
      for (var r = s.length; r--;) {
        if (s[r] == t) {
          s.splice(r, 1);
          break;
        }
      }
    }
    t._registered = e;
  };
  t.wait = function (t, e) {
    if (t == null || t <= 0) {
      return this;
    }
    var i = this._cloneProps(this._curQueueProps);
    return this._addStep({
      d: t,
      p0: i,
      e: this._linearEase,
      p1: i,
      v: e
    });
  };
  t.to = function (t, e, i) {
    if (isNaN(e) || e < 0) {
      e = 0;
    }
    return this._addStep({
      d: e || 0,
      p0: this._cloneProps(this._curQueueProps),
      e: i,
      p1: this._cloneProps(this._appendQueueProps(t))
    });
  };
  t.call = function (t, e, i) {
    return this._addAction({
      f: t,
      p: e || [this],
      o: i || this._target
    });
  };
  t.set = function (t, e) {
    return this._addAction({
      f: this._set,
      o: this,
      p: [t, e || this._target]
    });
  };
  t.play = function (t) {
    t ||= this;
    return this.call(t.setPaused, [false], t);
  };
  t.pause = function (t) {
    t ||= this;
    return this.call(t.setPaused, [true], t);
  };
  t.setPosition = function (t, e) {
    if (t < 0) {
      t = 0;
    }
    if (e == null) {
      e = 1;
    }
    var i = t;
    var s = false;
    if (i >= this.duration) {
      if (this.loop) {
        i %= this.duration;
      } else {
        i = this.duration;
        s = true;
      }
    }
    if (i == this._prevPos) {
      return s;
    }
    var r = this._prevPos;
    this.position = this._prevPos = i;
    this._prevPosition = t;
    if (this._target) {
      if (s) {
        this._updateTargetProps(null, 1);
      } else if (this._steps.length > 0) {
        for (var n = 0, a = this._steps.length; n < a && !(this._steps[n].t > i); n++);
        var o = this._steps[n - 1];
        this._updateTargetProps(o, (this._stepPosition = i - o.t) / o.d);
      }
    }
    if (e != 0 && this._actions.length > 0) {
      if (this._useTicks) {
        this._runActions(i, i);
      } else if (e == 1 && i < r) {
        if (r != this.duration) {
          this._runActions(r, this.duration);
        }
        this._runActions(0, i, true);
      } else {
        this._runActions(r, i);
      }
    }
    if (s) {
      this.setPaused(true);
    }
    this.dispatchEvent("change");
    return s;
  };
  t.tick = function (t) {
    if (!this._paused) {
      this.setPosition(this._prevPosition + t);
    }
  };
  t.setPaused = function (t) {
    if (this._paused === !!t) {
      return this;
    } else {
      this._paused = !!t;
      Tween._register(this, !t);
      return this;
    }
  };
  t.w = t.wait;
  t.t = t.to;
  t.c = t.call;
  t.s = t.set;
  t.toString = function () {
    return "[Tween]";
  };
  t.clone = function () {
    throw "Tween can not be cloned.";
  };
  t._updateTargetProps = function (t, e) {
    var i;
    var s;
    var r;
    var n;
    var a;
    var o;
    if (t || e != 1) {
      this.passive = !!t.v;
      if (this.passive) {
        return;
      }
      if (t.e) {
        e = t.e(e, 0, 1, 1);
      }
      i = t.p0;
      s = t.p1;
    } else {
      this.passive = false;
      i = s = this._curQueueProps;
    }
    for (var h in this._initQueueProps) {
      if ((n = i[h]) == null) {
        i[h] = n = this._initQueueProps[h];
      }
      if ((a = s[h]) == null) {
        s[h] = a = n;
      }
      r = n == a || e == 0 || e == 1 || typeof n != "number" ? e == 1 ? a : n : n + (a - n) * e;
      var c = false;
      if (o = Tween._plugins[h]) {
        for (var u = 0, l = o.length; u < l; u++) {
          var d = o[u].tween(this, h, r, i, s, e, !!t && i == s, !t);
          if (d == Tween.IGNORE) {
            c = true;
          } else {
            r = d;
          }
        }
      }
      if (!c) {
        this._target[h] = r;
      }
    }
  };
  t._runActions = function (t, e, i) {
    var s = t;
    var r = e;
    var n = -1;
    var a = this._actions.length;
    var o = 1;
    for (t > e && (s = e, r = t, n = a, a = o = -1); (n += o) != a;) {
      var h = this._actions[n];
      var c = h.t;
      if (c == r || c > s && c < r || i && c == t) {
        h.f.apply(h.o, h.p);
      }
    }
  };
  t._appendQueueProps = function (t) {
    var e;
    var i;
    var s;
    var r;
    var n;
    for (var a in t) {
      if (this._initQueueProps[a] === undefined) {
        i = this._target[a];
        if (e = Tween._plugins[a]) {
          s = 0;
          r = e.length;
          for (; s < r; s++) {
            i = e[s].init(this, a, i);
          }
        }
        this._initQueueProps[a] = this._curQueueProps[a] = i === undefined ? null : i;
      } else {
        i = this._curQueueProps[a];
      }
    }
    for (var a in t) {
      i = this._curQueueProps[a];
      if (e = Tween._plugins[a]) {
        n = n || {};
        s = 0;
        r = e.length;
        for (; s < r; s++) {
          if (e[s].step) {
            e[s].step(this, a, i, t[a], n);
          }
        }
      }
      this._curQueueProps[a] = t[a];
    }
    if (n) {
      this._appendQueueProps(n);
    }
    return this._curQueueProps;
  };
  t._cloneProps = function (t) {
    var e = {};
    for (var i in t) {
      e[i] = t[i];
    }
    return e;
  };
  t._addStep = function (t) {
    if (t.d > 0) {
      this._steps.push(t);
      t.t = this.duration;
      this.duration += t.d;
    }
    return this;
  };
  t._addAction = function (t) {
    t.t = this.duration;
    this._actions.push(t);
    return this;
  };
  t._set = function (t, e) {
    for (var i in t) {
      e[i] = t[i];
    }
  };
  createjs.Tween = createjs.promote(Tween, "EventDispatcher");
})();
(function () {
  'use strict';

  function Timeline(t, e, i) {
    this.EventDispatcher_constructor();
    this.ignoreGlobalPause = false;
    this.duration = 0;
    this.loop = false;
    this.position = null;
    this._paused = false;
    this._tweens = [];
    this._labels = null;
    this._labelList = null;
    this._prevPosition = 0;
    this._prevPos = -1;
    this._useTicks = false;
    this._registered = false;
    if (i) {
      this._useTicks = i.useTicks;
      this.loop = i.loop;
      this.ignoreGlobalPause = i.ignoreGlobalPause;
      if (i.onChange) {
        this.addEventListener("change", i.onChange);
      }
    }
    if (t) {
      this.addTween.apply(this, t);
    }
    this.setLabels(e);
    if (i && i.paused) {
      this._paused = true;
    } else {
      createjs.Tween._register(this, true);
    }
    if (i && i.position != null) {
      this.setPosition(i.position, createjs.Tween.NONE);
    }
  }
  var t = createjs.extend(Timeline, createjs.EventDispatcher);
  t.addTween = function (t) {
    var e = arguments.length;
    if (e > 1) {
      for (var i = 0; i < e; i++) {
        this.addTween(arguments[i]);
      }
      return arguments[0];
    }
    if (e == 0) {
      return null;
    } else {
      this.removeTween(t);
      this._tweens.push(t);
      t.setPaused(true);
      t._paused = false;
      t._useTicks = this._useTicks;
      if (t.duration > this.duration) {
        this.duration = t.duration;
      }
      if (this._prevPos >= 0) {
        t.setPosition(this._prevPos, createjs.Tween.NONE);
      }
      return t;
    }
  };
  t.removeTween = function (t) {
    var e = arguments.length;
    if (e > 1) {
      var i = true;
      for (var s = 0; s < e; s++) {
        i = i && this.removeTween(arguments[s]);
      }
      return i;
    }
    if (e == 0) {
      return false;
    }
    var r = this._tweens;
    for (s = r.length; s--;) {
      if (r[s] == t) {
        r.splice(s, 1);
        if (t.duration >= this.duration) {
          this.updateDuration();
        }
        return true;
      }
    }
    return false;
  };
  t.addLabel = function (t, e) {
    this._labels[t] = e;
    var i = this._labelList;
    if (i) {
      for (var s = 0, r = i.length; s < r && !(e < i[s].position); s++);
      i.splice(s, 0, {
        label: t,
        position: e
      });
    }
  };
  t.setLabels = function (t) {
    this._labels = t || {};
  };
  t.getLabels = function () {
    var t = this._labelList;
    if (!t) {
      t = this._labelList = [];
      var e = this._labels;
      for (var i in e) {
        t.push({
          label: i,
          position: e[i]
        });
      }
      t.sort(function (t, e) {
        return t.position - e.position;
      });
    }
    return t;
  };
  t.getCurrentLabel = function () {
    var t = this.getLabels();
    var e = this.position;
    var i = t.length;
    if (i) {
      for (var s = 0; s < i && !(e < t[s].position); s++);
      if (s == 0) {
        return null;
      } else {
        return t[s - 1].label;
      }
    }
    return null;
  };
  t.gotoAndPlay = function (t) {
    this.setPaused(false);
    this._goto(t);
  };
  t.gotoAndStop = function (t) {
    this.setPaused(true);
    this._goto(t);
  };
  t.setPosition = function (t, e) {
    var i = this._calcPosition(t);
    var s = !this.loop && t >= this.duration;
    if (i == this._prevPos) {
      return s;
    }
    this._prevPosition = t;
    this.position = this._prevPos = i;
    for (var r = 0, n = this._tweens.length; r < n; r++) {
      this._tweens[r].setPosition(i, e);
      if (i != this._prevPos) {
        return false;
      }
    }
    if (s) {
      this.setPaused(true);
    }
    this.dispatchEvent("change");
    return s;
  };
  t.setPaused = function (t) {
    this._paused = !!t;
    createjs.Tween._register(this, !t);
  };
  t.updateDuration = function () {
    this.duration = 0;
    for (var t = 0, e = this._tweens.length; t < e; t++) {
      var i = this._tweens[t];
      if (i.duration > this.duration) {
        this.duration = i.duration;
      }
    }
  };
  t.tick = function (t) {
    this.setPosition(this._prevPosition + t);
  };
  t.resolve = function (t) {
    var e = Number(t);
    if (isNaN(e)) {
      e = this._labels[t];
    }
    return e;
  };
  t.toString = function () {
    return "[Timeline]";
  };
  t.clone = function () {
    throw "Timeline can not be cloned.";
  };
  t._goto = function (t) {
    var e = this.resolve(t);
    if (e != null) {
      this.setPosition(e);
    }
  };
  t._calcPosition = function (t) {
    if (t < 0) {
      return 0;
    } else if (t < this.duration) {
      return t;
    } else if (this.loop) {
      return t % this.duration;
    } else {
      return this.duration;
    }
  };
  createjs.Timeline = createjs.promote(Timeline, "EventDispatcher");
})();
(function () {
  'use strict';

  function Ease() {
    throw "Ease cannot be instantiated.";
  }
  Ease.linear = function (t) {
    return t;
  };
  Ease.none = Ease.linear;
  Ease.get = function (t) {
    if (t < -1) {
      t = -1;
    }
    if (t > 1) {
      t = 1;
    }
    return function (e) {
      if (t == 0) {
        return e;
      } else if (t < 0) {
        return e * (e * -t + 1 + t);
      } else {
        return e * ((2 - e) * t + (1 - t));
      }
    };
  };
  Ease.getPowIn = function (t) {
    return function (e) {
      return Math.pow(e, t);
    };
  };
  Ease.getPowOut = function (t) {
    return function (e) {
      return 1 - Math.pow(1 - e, t);
    };
  };
  Ease.getPowInOut = function (t) {
    return function (e) {
      if ((e *= 2) < 1) {
        return Math.pow(e, t) * 0.5;
      } else {
        return 1 - Math.abs(Math.pow(2 - e, t)) * 0.5;
      }
    };
  };
  Ease.quadIn = Ease.getPowIn(2);
  Ease.quadOut = Ease.getPowOut(2);
  Ease.quadInOut = Ease.getPowInOut(2);
  Ease.cubicIn = Ease.getPowIn(3);
  Ease.cubicOut = Ease.getPowOut(3);
  Ease.cubicInOut = Ease.getPowInOut(3);
  Ease.quartIn = Ease.getPowIn(4);
  Ease.quartOut = Ease.getPowOut(4);
  Ease.quartInOut = Ease.getPowInOut(4);
  Ease.quintIn = Ease.getPowIn(5);
  Ease.quintOut = Ease.getPowOut(5);
  Ease.quintInOut = Ease.getPowInOut(5);
  Ease.sineIn = function (t) {
    return 1 - Math.cos(t * Math.PI / 2);
  };
  Ease.sineOut = function (t) {
    return Math.sin(t * Math.PI / 2);
  };
  Ease.sineInOut = function (t) {
    return (Math.cos(Math.PI * t) - 1) * -0.5;
  };
  Ease.getBackIn = function (t) {
    return function (e) {
      return e * e * ((t + 1) * e - t);
    };
  };
  Ease.backIn = Ease.getBackIn(1.7);
  Ease.getBackOut = function (t) {
    return function (e) {
      return --e * e * ((t + 1) * e + t) + 1;
    };
  };
  Ease.backOut = Ease.getBackOut(1.7);
  Ease.getBackInOut = function (t) {
    t *= 1.525;
    return function (e) {
      if ((e *= 2) < 1) {
        return e * e * ((t + 1) * e - t) * 0.5;
      } else {
        return ((e -= 2) * e * ((t + 1) * e + t) + 2) * 0.5;
      }
    };
  };
  Ease.backInOut = Ease.getBackInOut(1.7);
  Ease.circIn = function (t) {
    return -(Math.sqrt(1 - t * t) - 1);
  };
  Ease.circOut = function (t) {
    return Math.sqrt(1 - --t * t);
  };
  Ease.circInOut = function (t) {
    if ((t *= 2) < 1) {
      return (Math.sqrt(1 - t * t) - 1) * -0.5;
    } else {
      return (Math.sqrt(1 - (t -= 2) * t) + 1) * 0.5;
    }
  };
  Ease.bounceIn = function (t) {
    return 1 - Ease.bounceOut(1 - t);
  };
  Ease.bounceOut = function (t) {
    if (t < 1 / 2.75) {
      return t * 7.5625 * t;
    } else if (t < 2 / 2.75) {
      return (t -= 1.5 / 2.75) * 7.5625 * t + 0.75;
    } else if (t < 2.5 / 2.75) {
      return (t -= 2.25 / 2.75) * 7.5625 * t + 0.9375;
    } else {
      return (t -= 2.625 / 2.75) * 7.5625 * t + 0.984375;
    }
  };
  Ease.bounceInOut = function (t) {
    if (t < 0.5) {
      return Ease.bounceIn(t * 2) * 0.5;
    } else {
      return Ease.bounceOut(t * 2 - 1) * 0.5 + 0.5;
    }
  };
  Ease.getElasticIn = function (t, e) {
    var i = Math.PI * 2;
    return function (s) {
      if (s == 0 || s == 1) {
        return s;
      }
      var r = e / i * Math.asin(1 / t);
      return -t * Math.pow(2, (s -= 1) * 10) * Math.sin((s - r) * i / e);
    };
  };
  Ease.elasticIn = Ease.getElasticIn(1, 0.3);
  Ease.getElasticOut = function (t, e) {
    var i = Math.PI * 2;
    return function (s) {
      if (s == 0 || s == 1) {
        return s;
      }
      var r = e / i * Math.asin(1 / t);
      return t * Math.pow(2, s * -10) * Math.sin((s - r) * i / e) + 1;
    };
  };
  Ease.elasticOut = Ease.getElasticOut(1, 0.3);
  Ease.getElasticInOut = function (t, e) {
    var i = Math.PI * 2;
    return function (s) {
      var r = e / i * Math.asin(1 / t);
      if ((s *= 2) < 1) {
        return t * Math.pow(2, (s -= 1) * 10) * Math.sin((s - r) * i / e) * -0.5;
      } else {
        return t * Math.pow(2, (s -= 1) * -10) * Math.sin((s - r) * i / e) * 0.5 + 1;
      }
    };
  };
  Ease.elasticInOut = Ease.getElasticInOut(1, 0.44999999999999996);
  createjs.Ease = Ease;
})();
(function () {
  'use strict';

  function MotionGuidePlugin() {
    throw "MotionGuidePlugin cannot be instantiated.";
  }
  MotionGuidePlugin.priority = 0;
  MotionGuidePlugin._rotOffS;
  MotionGuidePlugin._rotOffE;
  MotionGuidePlugin._rotNormS;
  MotionGuidePlugin._rotNormE;
  MotionGuidePlugin.install = function () {
    createjs.Tween.installPlugin(MotionGuidePlugin, ["guide", "x", "y", "rotation"]);
    return createjs.Tween.IGNORE;
  };
  MotionGuidePlugin.init = function (t, e, i) {
    var s = t.target;
    if (!s.hasOwnProperty("x")) {
      s.x = 0;
    }
    if (!s.hasOwnProperty("y")) {
      s.y = 0;
    }
    if (!s.hasOwnProperty("rotation")) {
      s.rotation = 0;
    }
    if (e == "rotation") {
      t.__needsRot = true;
    }
    if (e == "guide") {
      return null;
    } else {
      return i;
    }
  };
  MotionGuidePlugin.step = function (t, e, i, s, r) {
    if (e == "rotation") {
      t.__rotGlobalS = i;
      t.__rotGlobalE = s;
      MotionGuidePlugin.testRotData(t, r);
    }
    if (e != "guide") {
      return s;
    }
    var n;
    var a = s;
    if (!a.hasOwnProperty("path")) {
      a.path = [];
    }
    var o = a.path;
    if (!a.hasOwnProperty("end")) {
      a.end = 1;
    }
    if (!a.hasOwnProperty("start")) {
      a.start = i && i.hasOwnProperty("end") && i.path === o ? i.end : 0;
    }
    if (a.hasOwnProperty("_segments") && a._length) {
      return s;
    }
    var h = o.length;
    if (!(h >= 6) || (h - 2) % 4 != 0) {
      throw "invalid 'path' data, please see documentation for valid paths";
    }
    a._segments = [];
    a._length = 0;
    for (var c = 2; c < h; c += 4) {
      var u;
      var l;
      var d = o[c - 2];
      var p = o[c - 1];
      var _ = o[c + 0];
      var f = o[c + 1];
      var g = o[c + 2];
      var m = o[c + 3];
      var v = d;
      var y = p;
      var T = 0;
      var b = [];
      for (var S = 1; S <= 10; S++) {
        var E = S / 10;
        var w = 1 - E;
        u = w * w * d + w * 2 * E * _ + E * E * g;
        l = w * w * p + w * 2 * E * f + E * E * m;
        T += b[b.push(Math.sqrt((n = u - v) * n + (n = l - y) * n)) - 1];
        v = u;
        y = l;
      }
      a._segments.push(T);
      a._segments.push(b);
      a._length += T;
    }
    n = a.orient;
    a.orient = true;
    var x = {};
    MotionGuidePlugin.calc(a, a.start, x);
    t.__rotPathS = Number(x.rotation.toFixed(5));
    MotionGuidePlugin.calc(a, a.end, x);
    t.__rotPathE = Number(x.rotation.toFixed(5));
    a.orient = false;
    MotionGuidePlugin.calc(a, a.end, r);
    a.orient = n;
    if (a.orient) {
      t.__guideData = a;
      MotionGuidePlugin.testRotData(t, r);
      return s;
    } else {
      return s;
    }
  };
  MotionGuidePlugin.testRotData = function (t, e) {
    if (t.__rotGlobalS === undefined || t.__rotGlobalE === undefined) {
      if (t.__needsRot) {
        return;
      }
      if (t._curQueueProps.rotation !== undefined) {
        t.__rotGlobalS = t.__rotGlobalE = t._curQueueProps.rotation;
      } else {
        t.__rotGlobalS = t.__rotGlobalE = e.rotation = t.target.rotation || 0;
      }
    }
    if (t.__guideData !== undefined) {
      var i = t.__guideData;
      var s = t.__rotGlobalE - t.__rotGlobalS;
      var r = t.__rotPathE - t.__rotPathS;
      var n = s - r;
      if (i.orient == "auto") {
        if (n > 180) {
          n -= 360;
        } else if (n < -180) {
          n += 360;
        }
      } else if (i.orient == "cw") {
        while (n < 0) {
          n += 360;
        }
        if (n == 0 && s > 0 && s != 180) {
          n += 360;
        }
      } else if (i.orient == "ccw") {
        for (n = s - (r > 180 ? 360 - r : r); n > 0;) {
          n -= 360;
        }
        if (n == 0 && s < 0 && s != -180) {
          n -= 360;
        }
      }
      i.rotDelta = n;
      i.rotOffS = t.__rotGlobalS - t.__rotPathS;
      t.__rotGlobalS = t.__rotGlobalE = t.__guideData = t.__needsRot = undefined;
    }
  };
  MotionGuidePlugin.tween = function (t, e, i, s, r, n, a, o) {
    var h = r.guide;
    if (h == undefined || h === s.guide) {
      return i;
    }
    if (h.lastRatio != n) {
      var c = (h.end - h.start) * (a ? h.end : n) + h.start;
      MotionGuidePlugin.calc(h, c, t.target);
      switch (h.orient) {
        case "cw":
        case "ccw":
        case "auto":
          t.target.rotation += h.rotOffS + h.rotDelta * n;
          break;
        case "fixed":
        default:
          t.target.rotation += h.rotOffS;
      }
      h.lastRatio = n;
    }
    if (e != "rotation" || h.orient && h.orient != "false") {
      return t.target[e];
    } else {
      return i;
    }
  };
  MotionGuidePlugin.calc = function (t, e, i) {
    if (t._segments == undefined) {
      throw "Missing critical pre-calculated information, please file a bug";
    }
    if (i == undefined) {
      i = {
        x: 0,
        y: 0,
        rotation: 0
      };
    }
    for (var s = t._segments, r = t.path, n = t._length * e, a = s.length - 2, o = 0; n > s[o] && o < a;) {
      n -= s[o];
      o += 2;
    }
    var h = s[o + 1];
    var c = 0;
    for (a = h.length - 1; n > h[c] && c < a;) {
      n -= h[c];
      c++;
    }
    var u = c / ++a + n / (a * h[c]);
    o = o * 2 + 2;
    var l = 1 - u;
    i.x = l * l * r[o - 2] + l * 2 * u * r[o + 0] + u * u * r[o + 2];
    i.y = l * l * r[o - 1] + l * 2 * u * r[o + 1] + u * u * r[o + 3];
    if (t.orient) {
      i.rotation = Math.atan2((r[o + 1] - r[o - 1]) * l + (r[o + 3] - r[o + 1]) * u, (r[o + 0] - r[o - 2]) * l + (r[o + 2] - r[o + 0]) * u) * 57.2957795;
    }
    return i;
  };
  createjs.MotionGuidePlugin = MotionGuidePlugin;
})();
(function () {
  'use strict';

  var t = createjs.TweenJS = createjs.TweenJS || {};
  t.version = "0.6.2";
  t.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT";
})();
/*
BitmapData for EaselJS
Version: 1.11
Author: kudox
http://kudox.jp/
http://twitter.com/u_kudox
Licensed under the MIT License
Copyright (c) 2013 kudox.jp
*/
this.createjs = this.createjs || {};
(function (t) {
  'use strict';

  function BitmapData(t, e, i, s) {
    t = t >> 0 || 300;
    e = e >> 0 || 150;
    this.transparent = !!i;
    var r = this.canvas = createCanvas(t, e);
    this.context = r.getContext("2d");
    this.name = null;
    if (s !== undefined) {
      this.fillRect(new createjs.Rectangle(0, 0, t, e), s);
    }
    this._contextChanged = false;
  }
  var e = BitmapData;
  e.VERSION = "1.1.1";
  e.getBitmapData = function (t) {
    var e;
    var i;
    if (t instanceof createjs.DisplayObject) {
      if (!t.cacheCanvas) {
        throw new Error("The object must be called DisplayObject.cache().");
      }
      i = (e = Object.create(BitmapData.prototype)).canvas = t.cacheCanvas;
      e.context = i.getContext("2d");
      e.name = null;
      e._contextChanged = false;
      return e;
    }
  };
  var i = BitmapData.prototype = {
    get width() {
      return this.canvas.width;
    },
    get height() {
      return this.canvas.height;
    },
    get rect() {
      return new createjs.Rectangle(0, 0, this.canvas.width, this.canvas.height);
    },
    get _imageData() {
      return this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    }
  };
  function scanLine(t, e, i, s, r) {
    while (t <= e) {
      while (t <= e && this.getPixel32(t, i) !== s) {
        t++;
      }
      if (e < t) {
        break;
      }
      for (t++; t <= e && this.getPixel32(t, i) === s;) {
        t++;
      }
      r.push(new createjs.Point(t - 1, i));
    }
  }
  function getIntersection(t, e) {
    var i = t.width;
    var s = t.height;
    var r = e.width;
    var n = e.height;
    if (i === 0 || s === 0 || r === 0 || n === 0) {
      return 0;
    }
    var a = t.x;
    var o = a + i;
    var h = t.y;
    var c = h + s;
    var u = e.x;
    var l = u + r;
    var d = e.y;
    var p = d + n;
    if (a < l && h < p && u < o && d < c) {
      var _ = a < u ? u : a;
      var f = l < o ? l : o;
      var g = h < d ? d : h;
      var m = p < c ? p : c;
      return new createjs.Rectangle(_, g, f - _, m - g);
    }
    return 0;
  }
  i.constructor = BitmapData;
  i.applyFilter = function (t, e, i, s) {
    var r = e.x >> 0;
    var n = e.y >> 0;
    var a = e.width >> 0;
    var o = e.height >> 0;
    var h = i.x >> 0;
    var c = i.y >> 0;
    if (t instanceof BitmapData || t instanceof createjs.Stage) {
      t = t.canvas;
    } else if (t instanceof createjs.DisplayObject) {
      if (!t.cacheCanvas) {
        throw new Error("The source of BitmapData.applyFilter(), must be called DisplayObject.cache().");
      }
      t = t.cacheCanvas;
    }
    var u = createCanvas(a, o);
    var l = u.getContext("2d");
    l.drawImage(t, -r, -n);
    s.applyFilter(l, 0, 0, a, o);
    this.context.drawImage(u, h, c);
    this._contextChanged = true;
  };
  i.clearRect = function (t, e, i, s) {
    this.context.clearRect(t, e, i, s);
    this._contextChanged = true;
  };
  i.clone = function () {
    var t = Object.create(BitmapData.prototype);
    var e = this.canvas.width;
    var i = this.canvas.height;
    var s = t.canvas = createCanvas(e, i);
    var r = t.context = s.getContext("2d");
    if (this._contextChanged) {
      this.updateImageData();
    }
    var n = this._imageData;
    var a = r.createImageData(n.width, n.height);
    a.data.set(new Uint8ClampedArray(n.data));
    r.putImageData(a, 0, 0);
    t.name = this.name;
    t._contextChanged = false;
    return t;
  };
  i.colorTransform = function (t, e) {
    var i = t.x >> 0;
    var s = t.y >> 0;
    var r = t.width >> 0;
    var n = t.height >> 0;
    var a = this.context;
    var o = a.getImageData(i, s, r, n);
    var h = o.data;
    for (var c = 0, u = h.length; c < u; c += 4) {
      var l = c;
      var d = c + 1;
      var p = c + 2;
      var _ = c + 3;
      h[l] = h[l] * e.redMultiplier + e.redOffset;
      h[d] = h[d] * e.greenMultiplier + e.greenOffset;
      h[p] = h[p] * e.blueMultiplier + e.blueOffset;
      h[_] = h[_] * e.alphaMultiplier + e.alphaOffset;
    }
    a.putImageData(o, i, s);
    this._contextChanged = true;
  };
  i.compare = function (t) {
    var e = t.width;
    var i = t.height;
    if (this.canvas.width !== e) {
      return -3;
    }
    if (this.canvas.height !== i) {
      return -4;
    }
    var s = getSourceContext(t, e, i).getImageData(0, 0, e, i).data;
    if (this._contextChanged) {
      this.updateImageData();
    }
    var r = this._imageData.data;
    if (Array.prototype.slice.call(r).toString() === Array.prototype.slice.call(s).toString()) {
      return 0;
    }
    var n = Object.create(BitmapData.prototype);
    var a = n.canvas = createCanvas(e, i);
    var o = n.context = a.getContext("2d");
    var h = n._imageData = o.createImageData(e, i);
    var c = h.data;
    for (var u = 0, l = r.length; u < l; u += 4) {
      var d = u;
      var p = u + 1;
      var _ = u + 2;
      var f = u + 3;
      var g = r[d] === s[d] && r[p] === s[p] && r[_] === s[_];
      var m = r[f] === s[f];
      if (g) {
        if (!m) {
          c[d] = c[p] = c[_] = 255;
          c[f] = r[f] - s[f];
        }
      } else {
        c[d] = r[d] - s[d] & 255;
        c[p] = r[p] - s[p] & 255;
        c[_] = r[_] - s[_] & 255;
        c[f] = 255;
      }
    }
    o.putImageData(h, 0, 0);
    return n;
  };
  i.copyChannel = function (t, e, i, s, n) {
    var a = e.x >> 0;
    var o = e.y >> 0;
    var h = e.width >> 0;
    var c = e.height >> 0;
    var u = i.x >> 0;
    var l = i.y >> 0;
    var d = getSourceContext(t, a + h, o + c).getImageData(a, o, h, c).data;
    var p = r.getChannelIndex(s);
    var _ = this.context;
    var f = _.getImageData(u, l, h, c);
    var g = f.data;
    var m = r.getChannelIndex(n);
    for (var v = 0, y = g.length; v < y; v += 4) {
      g[v + m] = d[v + p];
    }
    _.putImageData(f, u, l);
    this._contextChanged = true;
  };
  i.copyPixels = function (t, e, i, s, r, n) {
    var a = e.x >> 0;
    var o = e.y >> 0;
    var h = e.width >> 0;
    var c = e.height >> 0;
    var u = i.x >> 0;
    var l = i.y >> 0;
    var d = getSourceContext(t, a + h, o + c);
    var p = d.getImageData(a, o, h, c);
    if (s) {
      var _;
      var f;
      if (r) {
        _ = r.x >> 0;
        f = r.y >> 0;
      } else {
        _ = 0;
        f = 0;
      }
      var g = getSourceContext(s, _ + h, f + c).getImageData(_, f, h, c);
      var m = p.data;
      var v = g.data;
      for (var y = 3, T = m.length; y < T; y += 4) {
        m[y] = v[y];
      }
      if (n) {
        d.putImageData(p, a, o);
        this.context.drawImage(d.canvas, a, o, h, c, u, l, h, c);
      } else {
        this.context.putImageData(p, u, l);
      }
    } else {
      this.context.putImageData(p, u, l);
    }
    this._contextChanged = true;
  };
  i.dispose = function () {
    if (this.canvas) {
      this.canvas.width = this.canvas.height = 0;
    }
    delete this.context;
    delete this.canvas;
  };
  i.draw = function (t, e, i, s, r, n) {
    if (t instanceof BitmapData || t instanceof createjs.Stage) {
      t = t.canvas;
    } else if (t instanceof createjs.DisplayObject) {
      if (t.cacheCanvas) {
        t = t.cacheCanvas;
      } else if (!(t instanceof createjs.Bitmap)) {
        throw new Error("The source of BitmapData.draw(), must be called DisplayObject.cache().");
      }
    } else if (t instanceof HTMLImageElement || t instanceof HTMLVideoElement) {
      var a = createCanvas(t.width, t.height);
      a.getContext("2d").drawImage(t, 0, 0);
      t = a;
    }
    var o;
    e = e || new createjs.Matrix2D();
    if (i) {
      var h = t.width;
      var c = t.height;
      (o = new BitmapData(h, c)).colorTransform(new createjs.Rectangle(0, 0, h, c), i);
      t = o.canvas;
    }
    n = !!n;
    var u = this.context;
    u.save();
    if (s) {
      u.globalCompositeOperation = s;
    }
    u.imageSmoothingEnabled = n;
    u.webkitImageSmoothingEnabled = n;
    u.mozImageSmoothingEnabled = n;
    if (r) {
      u.rect(r.x, r.y, r.width, r.height);
      u.clip();
    }
    u.setTransform(e.a, e.b, e.c, e.d, e.tx, e.ty);
    if (t.width && t.height) {
      if (t instanceof createjs.Bitmap) {
        t.draw(u);
      } else {
        u.drawImage(t, 0, 0);
      }
    }
    u.restore();
    if (o) {
      o.dispose();
    }
    this._contextChanged = true;
  };
  i.drawImage = function (t, e, i, s, r, n, a, o, h) {
    if (t instanceof BitmapData || t instanceof createjs.Stage) {
      t = t.canvas;
    } else if (t instanceof createjs.DisplayObject) {
      if (!t.cacheCanvas) {
        throw new Error("The source of BitmapData.drawImage(), must be called DisplayObject.cache().");
      }
      t = t.cacheCanvas;
    }
    if (n !== undefined) {
      this.context.drawImage(t, e, i, s, r, n, a, o, h);
    } else if (s !== undefined) {
      n = e;
      a = i;
      o = s;
      h = r;
      this.context.drawImage(t, n, a, o, h);
    } else {
      n = e || 0;
      a = i || 0;
      this.context.drawImage(t, n, a);
    }
    this._contextChanged = true;
  };
  i.expand = function (t) {
    var e = t.x;
    var i = t.y;
    var s = Math.ceil;
    var r = s(t.width);
    var n = s(t.height);
    var a = createCanvas(this.canvas.width + r, this.canvas.height + n);
    var o = a.getContext("2d");
    o.drawImage(this.canvas, -e, -i);
    this.canvas = a;
    this.context = o;
    this._contextChanged = true;
  };
  i.fillRect = function (t, e) {
    if (!isNaN(e)) {
      var i = e >> 16 & 255;
      var s = e >> 8 & 255;
      var r = e & 255;
      var n = (e >> 24 & 255) / 255;
      e = n === 0 ? "rgb(" + i + "," + s + "," + r + ")" : "rgba(" + i + "," + s + "," + r + "," + n + ")";
    }
    var a = this.context;
    a.save();
    a.fillStyle = e;
    a.fillRect(t.x, t.y, t.width, t.height);
    a.restore();
    this._contextChanged = true;
  };
  i.floodFill = function (t, e, i) {
    if (this._contextChanged) {
      this.updateImageData();
    }
    var s = this._imageData;
    var r = s.width;
    var n = s.height;
    e >>= 0;
    if (!((t >>= 0) < 0) && !(e < 0) && !(r <= t) && !(n <= e)) {
      var a = this.getPixel32(t, e);
      if (a !== i) {
        s.data;
        for (var o = [new createjs.Point(t, e)]; o.length;) {
          var h = o.shift();
          var c = h.x;
          var u = h.y;
          if (this.getPixel32(c, u) !== i) {
            for (var l = c; l > 0 && this.getPixel32(l - 1, u) === a; l--);
            for (var d = c; d < r - 1 && this.getPixel32(d + 1, u) === a; d++);
            for (var p = l; p <= d; p++) {
              this.setPixel32(p, u, i);
            }
            if (u + 1 < n) {
              scanLine.call(this, l, d, u + 1, a, o);
            }
            if (u - 1 >= 0) {
              scanLine.call(this, l, d, u - 1, a, o);
            }
          }
        }
        this.updateContext();
      }
    }
  };
  i.getColorBoundsRect = function (t, e, i = true) {
    if (this._contextChanged) {
      this.updateImageData();
    }
    var s = this._imageData;
    var r = s.width;
    var n = s.height;
    var a = s.data;
    var o = NaN;
    var h = NaN;
    var c = NaN;
    var u = NaN;
    for (var l = 0, d = a.length; l < d; l += 4) {
      var p = ((a[l + 3] << 24 | a[l] << 16 | a[l + 1] << 8 | a[l + 2]) & t) >>> 0;
      if (i && p === e || !i && p !== e) {
        var _ = l / 4;
        var f = _ % r;
        var g = _ / r >> 0;
        if (isNaN(o)) {
          o = h = f;
          c = u = g;
        } else {
          if (f < o) {
            o = f;
          }
          if (h < f) {
            h = f;
          }
          if (g < c) {
            c = g;
          }
          if (u < g) {
            u = g;
          }
        }
      }
      if (o === 0 && h === r - 1 && c === 0 && u === n - 1) {
        break;
      }
    }
    if (isNaN(o)) {
      return new createjs.Rectangle();
    } else {
      return new createjs.Rectangle(o, c, h - o + 1, u - c + 1);
    }
  };
  i.getPixel = function (t, e) {
    if (t < 0 || e < 0) {
      return 0;
    }
    t >>= 0;
    e >>= 0;
    if (this._contextChanged) {
      this.updateImageData();
    }
    var i = this._imageData;
    var s = i.width;
    var r = i.height;
    if (s <= t || r <= e) {
      return 0;
    }
    var n = i.data;
    var a = (s * e + t) * 4;
    return n[a] << 16 | n[++a] << 8 | n[++a];
  };
  i.getPixel32 = function (t, e) {
    if (t < 0 || e < 0) {
      return 0;
    }
    t >>= 0;
    e >>= 0;
    if (this._contextChanged) {
      this.updateImageData();
    }
    var i = this._imageData;
    var s = i.width;
    var r = i.height;
    if (s <= t || r <= e) {
      return 0;
    }
    var n = i.data;
    var a = (s * e + t) * 4;
    var o = n[a];
    var h = n[++a];
    var c = n[++a];
    return (n[++a] << 24 | o << 16 | h << 8 | c) >>> 0;
  };
  i.getPixels = function (t) {
    return this.context.getImageData(t.x >> 0, t.y >> 0, t.width >> 0, t.height >> 0).data;
  };
  i.histogram = function (t) {
    var e = [[], [], [], []];
    for (var i = 0, s = 256; i < s; i++) {
      e[0][i] = 0;
      e[1][i] = 0;
      e[2][i] = 0;
      e[3][i] = 0;
    }
    var r = this.context.getImageData(t.x >> 0, t.y >> 0, t.width >> 0, t.height >> 0).data;
    i = 0;
    s = r.length;
    for (; i < s; i += 4) {
      e[0][r[i]]++;
      e[1][r[i + 1]]++;
      e[2][r[i + 2]]++;
      e[3][r[i + 3]]++;
    }
    return e;
  };
  i.hitTest = function (t, e, i, s, r) {
    var n = t.x >> 0;
    var a = t.y >> 0;
    var o = this.canvas.width;
    var h = this.canvas.height;
    if (this._contextChanged) {
      this.updateImageData();
    }
    var c;
    var u;
    var l;
    var d;
    var p;
    var _;
    var f;
    var g = this._imageData.data;
    if (i instanceof createjs.Point) {
      c = (i.x >> 0) - n;
      u = (i.y >> 0) - a;
      return !(o <= c) && !(h <= u) && !(c < 0) && !(u < 0) && e <= g[(o * u + c) * 4 + 3];
    }
    if (i instanceof createjs.Rectangle) {
      i.x = (i.x >> 0) - n;
      i.y = (i.y >> 0) - a;
      if ((l = getIntersection(new createjs.Rectangle(0, 0, o, h), i)) === 0) {
        return false;
      }
      for (f = (p = l.y) + l.height; p < f; p++) {
        for (_ = (d = l.x) + l.width; d < _; d++) {
          if (e <= g[(o * p + d) * 4 + 3]) {
            return true;
          }
        }
      }
      return false;
    }
    var m = getSourceContext(i, i.width, i.height);
    if (!m) {
      throw new Error("The secondObject must be Point, Rectangle, BitmapData, cached DisplayObject.");
    }
    s = s || new createjs.Point();
    r = r || 1;
    c = (s.x >> 0) - n;
    u = (s.y >> 0) - a;
    var v = m.canvas;
    if ((l = getIntersection(new createjs.Rectangle(0, 0, o, h), new createjs.Rectangle(c, u, v.width, v.height))) === 0) {
      return false;
    }
    var y = l.x;
    var T = l.y;
    var b = l.width;
    var S = l.height;
    var E = m.getImageData(y - c, T - u, b, S).data;
    for (f = (p = T) + S; p < f; p++) {
      for (_ = (d = y) + b; d < _; d++) {
        if (r <= E[(b * (p - T) + (d - y)) * 4 + 3] && e <= g[(o * p + d) * 4 + 3]) {
          return true;
        }
      }
    }
    return false;
  };
  i.merge = function (t, e, i, s, r, n, a) {
    var o = e.x >> 0;
    var h = e.y >> 0;
    var c = e.width >> 0;
    var u = e.height >> 0;
    var l = i.x >> 0;
    var d = i.y >> 0;
    var p = getSourceContext(t, o + c, h + u).getImageData(o, h, c, u).data;
    var _ = this.context;
    var f = _.getImageData(l, d, c, u);
    var g = f.data;
    for (var m = 0, v = g.length; m < v; m += 4) {
      var y = m;
      var T = m + 1;
      var b = m + 2;
      var S = m + 3;
      g[y] = (p[y] * s + g[y] * (256 - s)) / 256;
      g[T] = (p[T] * r + g[T] * (256 - r)) / 256;
      g[b] = (p[b] * n + g[b] * (256 - n)) / 256;
      g[S] = (p[S] * a + g[S] * (256 - a)) / 256;
    }
    _.putImageData(f, l, d);
    this._contextChanged = true;
  };
  i.noise = function (t, e, i, s) {
    t = t || 0;
    var n = (e = e || 255) - t;
    i = i || 7;
    s = !!s;
    var a = Object.create(r);
    var o = (i & a.RED) === a.RED;
    var h = (i & a.GREEN) === a.GREEN;
    var c = (i & a.BLUE) === a.BLUE;
    var u = (i & a.ALPHA) === a.ALPHA;
    var l = this._imageData.data;
    for (var d = 0, p = l.length; d < p; d += 4) {
      var _ = d;
      var f = d + 1;
      var g = d + 2;
      var m = d + 3;
      if (s) {
        l[_] = l[f] = l[g] = (Math.random() * n >> 0) + t;
      } else {
        l[_] = o ? (Math.random() * n >> 0) + t : 0;
        l[f] = h ? (Math.random() * n >> 0) + t : 0;
        l[g] = c ? (Math.random() * n >> 0) + t : 0;
      }
      l[m] = u ? (Math.random() * n >> 0) + t : 255;
    }
    this.updateContext();
  };
  i.paletteMap = function (t, e, i, s, r, n, a) {
    var o = e.x >> 0;
    var h = e.y >> 0;
    var c = e.width >> 0;
    var u = e.height >> 0;
    var l = i.x >> 0;
    var d = i.y >> 0;
    var p = getSourceContext(t, o + c, h + u).getImageData(o, h, c, u).data;
    var _ = this.context;
    var f = _.getImageData(l, d, c, u);
    var g = f.data;
    for (var m = 0, v = g.length; m < v; m += 4) {
      var y = m;
      var T = m + 1;
      var b = m + 2;
      var S = m + 3;
      var E = s ? s[p[y]] : p[y] << 16;
      var w = r ? r[p[T]] : p[T] << 8;
      var x = n ? n[p[b]] : p[b];
      var P = a ? a[p[S]] : p[S] << 24 >>> 0;
      g[y] = ((E >> 16 & 255) + (w >> 16 & 255) + (x >> 16 & 255) + (P >> 16 & 255)) % 256;
      g[T] = ((E >> 8 & 255) + (w >> 8 & 255) + (x >> 8 & 255) + (P >> 8 & 255)) % 256;
      g[b] = ((E & 255) + (w & 255) + (x & 255) + (P & 255)) % 256;
      g[S] = ((E >> 24 & 255) + (w >> 24 & 255) + (x >> 24 & 255) + (P >> 24 & 255)) % 256;
    }
    _.putImageData(f, l, d);
    this._contextChanged = true;
  };
  i.perlinNoise = function (t, e, i, n, a, o, h, c, u, l) {
    if (i !== 0) {
      t = t || 1;
      e = e || 1;
      a = !!a;
      o = !!o;
      h = h || 7;
      c = !!c;
      u = u || [];
      l = l || "linear";
      s.setProperties(n, l);
      var d = [];
      var p = Object.create(r);
      if (!c) {
        var _ = d[0] = (h & p.RED) === p.RED;
        var f = d[1] = (h & p.GREEN) === p.GREEN;
        var g = d[2] = (h & p.BLUE) === p.BLUE;
      }
      var m = d[3] = (h & p.ALPHA) === p.ALPHA;
      var v = this._imageData.data;
      for (var y = 0, T = this.canvas.height; y < T; y++) {
        for (var b = 0, S = this.canvas.width; b < S; b++) {
          var E;
          E = a ? s.getStitchNoises(b, y, S, T, t, e, i, o, d, c, u) : s.getNoises(b, y, t, e, i, o, d, c, u);
          var w = (S * y + b) * 4;
          var x = w + 1;
          var P = w + 2;
          var j = w + 3;
          if (c) {
            v[w] = v[x] = v[P] = E[0] * 256;
          } else {
            v[w] = _ ? E[0] * 256 : 0;
            v[x] = f ? E[1] * 256 : 0;
            v[P] = g ? E[2] * 256 : 0;
          }
          v[j] = m ? E[3] * 256 : 255;
        }
      }
      this.updateContext();
    } else {
      this.fillRect(new createjs.Rectangle(0, 0, this.canvas.width, this.canvas.height), 0);
    }
  };
  var s = function () {
    var t;
    var e = 0.5;
    var i = 1103515245;
    var s = 12345;
    var r = 2147483647;
    var n = 1;
    function NoiseGenerator() {}
    function getNoises(t, i, s, r, n, a, o, h, c) {
      var u = o[0];
      var l = o[1];
      var d = o[2];
      var p = o[3];
      var _ = [0, 0, 0, 0];
      var f = [];
      for (var g = 0; g < n; g++) {
        var m;
        var v;
        var y = g + 1;
        var T = Math.pow(2, y);
        var b = Math.pow(e, y);
        if (c[g]) {
          m = c[g].x;
          v = c[g].y;
        } else {
          m = v = 0;
        }
        var S = (t + m) / s * T;
        var E = (i + v) / r * T;
        if (h) {
          f[0] = createNoise(S, E, 0);
        } else {
          if (u) {
            f[0] = createNoise(S, E, 0);
          }
          if (l) {
            f[1] = createNoise(S, E, 1);
          }
          if (d) {
            f[2] = createNoise(S, E, 2);
          }
        }
        if (p) {
          f[3] = createNoise(S, E, 3);
        }
        for (var w = 0; w < 4; w++) {
          var x = f[w];
          if (x !== undefined) {
            if (a) {
              x = x * 0.6 + 0.2;
            } else {
              x *= x;
            }
            _[w] += x * b;
          }
        }
      }
      return _;
    }
    function createNoise(e, i, s) {
      var r = e >> 0;
      var n = i >> 0;
      var a = e - r;
      var o = i - n;
      var h = r + 1;
      var c = n + 1;
      var u = noise(r, n, s);
      var l = noise(h, n, s);
      var d = noise(r, c, s);
      var p = noise(h, c, s);
      var _ = t(u, l, a);
      var f = t(d, p, a);
      return t(_, f, o);
    }
    function linearInterpolate(t, e, i) {
      return t * (1 - i) + e * i;
    }
    function cosineInterpolate(t, e, i) {
      var s = i * Math.PI;
      var r = (1 - Math.cos(s)) * 0.5;
      return t * (1 - r) + e * r;
    }
    function noise(t, e, a) {
      var o = (n + t) * (e + a ^ s);
      return (i * (o = (o << 13 ^ o) & 4294967295) + s & r) / (r + 1);
    }
    NoiseGenerator.setProperties = function (e, i) {
      if (e !== 0) {
        n = e % 16777215;
      }
      t = i === "cos" ? cosineInterpolate : linearInterpolate;
    };
    NoiseGenerator.getStitchNoises = function (t, e, i, s, r, n, a, o, h, c, u) {
      var l = t + i;
      var d = e + s;
      var p = getNoises(t, e, r, n, a, o, h, c, u);
      var _ = getNoises(l, e, r, n, a, o, h, c, u);
      var f = getNoises(t, d, r, n, a, o, h, c, u);
      var g = getNoises(l, d, r, n, a, o, h, c, u);
      var m = t / i;
      var v = e / s;
      var y = 1 - m;
      var T = 1 - v;
      var b = [0, 0, 0, 0];
      if (c || h[0]) {
        b[0] = p[0] * m * v + _[0] * y * v + f[0] * m * T + g[0] * y * T;
      }
      if (!c && h[1]) {
        b[1] = p[1] * m * v + _[1] * y * v + f[1] * m * T + g[1] * y * T;
      }
      if (!c && h[2]) {
        b[2] = p[2] * m * v + _[2] * y * v + f[2] * m * T + g[2] * y * T;
      }
      if (h[3]) {
        b[3] = p[3] * m * v + _[3] * y * v + f[3] * m * T + g[3] * y * T;
      }
      return b;
    };
    NoiseGenerator.getNoises = getNoises;
    return NoiseGenerator;
  }();
  function createCanvas(t, e) {
    var i = document.createElement("canvas");
    i.width = t;
    i.height = e;
    return i;
  }
  function getSourceContext(t, e, i) {
    var s;
    if (t instanceof BitmapData) {
      s = t.context;
    } else if (t instanceof HTMLCanvasElement) {
      s = t.getContext("2d");
    } else if (t instanceof createjs.Stage) {
      s = t.canvas.getContext("2d");
    } else if (t instanceof createjs.DisplayObject) {
      if (!t.cacheCanvas) {
        throw new Error("The source must be called DisplayObject.cache().");
      }
      s = t.cacheCanvas.getContext("2d");
    } else if (t instanceof HTMLImageElement || t instanceof HTMLVideoElement) {
      (s = createCanvas(e, i).getContext("2d")).drawImage(t, 0, 0);
    }
    return s;
  }
  i.pixelDissolve = function (t, e, i, s, r, n) {
    var a = this.canvas.width;
    var o = this.canvas.height;
    var h = e.x >> 0;
    var c = e.y >> 0;
    var u = e.width >> 0;
    var l = e.height >> 0;
    var d = i.x >> 0;
    var p = i.y >> 0;
    r = r || u * l / 30 >> 0;
    n = n || 0;
    var _;
    var f;
    var g;
    var m;
    var v = this === t;
    if (v) {
      _ = n >> 16 & 255;
      f = n >> 8 & 255;
      g = n & 255;
      m = n >> 24 & 255;
    }
    var y = getSourceContext(t, h + u, c + l).getImageData(h, c, u, l).data;
    if (this._contextChanged) {
      this.updateImageData();
    }
    var T = this._imageData.data;
    if (!s) {
      s = [];
      for (var b = 0, S = u * l; b < S; b++) {
        s[b] = b;
      }
    }
    while (r > 0) {
      var E = Math.random() * (s.length - 1) >> 0;
      var w = s.splice(E, 1)[0];
      var x = w % u + d;
      var P = (w / u >> 0) + p;
      if (!(x < 0) && !(P < 0) && !(a <= x) && !(o <= P)) {
        var j = (a * P + x) * 4;
        if (v) {
          T[j] = _;
          T[++j] = f;
          T[++j] = g;
          T[++j] = m;
        } else {
          var L = w * 4;
          T[j] = y[L];
          T[++j] = y[++L];
          T[++j] = y[++L];
          T[++j] = y[++L];
        }
        if (s.length === 0) {
          this.updateContext();
          return 0;
        }
        r--;
      }
    }
    this.updateContext();
    return s;
  };
  i.scroll = function (t, e) {
    var i = this.context;
    if (this._contextChanged) {
      this.updateImageData();
    }
    i.putImageData(this._imageData, t >> 0, e >> 0);
    this._contextChanged = true;
  };
  i.setPixel = function (t, e, i) {
    if (!(t < 0) && !(e < 0)) {
      t >>= 0;
      e >>= 0;
      if (this._contextChanged) {
        this.updateImageData();
      }
      var s = this._imageData;
      var r = s.width;
      var n = s.height;
      if (!(r <= t) && !(n <= e)) {
        var a = s.data;
        var o = (r * e + t) * 4;
        a[o] = i >> 16 & 255;
        a[++o] = i >> 8 & 255;
        a[++o] = i & 255;
        this.context.putImageData(s, t, e);
      }
    }
  };
  i.setPixel32 = function (t, e, i) {
    if (!(t < 0) && !(e < 0)) {
      t >>= 0;
      e >>= 0;
      if (this._contextChanged) {
        this.updateImageData();
      }
      var s = this._imageData;
      var r = s.width;
      var n = s.height;
      if (!(r <= t) && !(n <= e)) {
        var a = s.data;
        var o = (r * e + t) * 4;
        a[o] = i >> 16 & 255;
        a[++o] = i >> 8 & 255;
        a[++o] = i & 255;
        a[++o] = i >> 24 & 255;
        this.context.putImageData(s, t, e);
      }
    }
  };
  i.setPixels = function (t, e) {
    var i = this.context;
    var s = i.createImageData(t.width >> 0, t.height >> 0);
    var r = s.data;
    for (var n = 0, a = r.length; n < a; n++) {
      r[n] = e[n];
    }
    i.putImageData(s, t.x >> 0, t.y >> 0);
    this._contextChanged = true;
  };
  i.threshold = function (t, e, i, s, r, n, a, o) {
    var h = e.x >> 0;
    var c = e.y >> 0;
    var u = e.width >> 0;
    var l = e.height >> 0;
    var d = i.x >> 0;
    var p = i.y >> 0;
    var _ = function getThresholdMethod(t) {
      switch (t) {
        case "<":
          return function (t, e) {
            return t < e;
          };
        case "<=":
          return function (t, e) {
            return t <= e;
          };
        case ">":
          return function (t, e) {
            return t > e;
          };
        case ">=":
          return function (t, e) {
            return t >= e;
          };
        case "==":
          return function (t, e) {
            return t == e;
          };
        case "!=":
          return function (t, e) {
            return t != e;
          };
      }
    }(s);
    var f = (n = n || 0) >> 16 & 255;
    var g = n >> 8 & 255;
    var m = n & 255;
    var v = n >> 24 & 255;
    if (a === undefined) {
      a = 4294967295;
    }
    var y = getSourceContext(t, h + u, c + l).getImageData(h, c, u, l).data;
    var T = this.context;
    var b = T.getImageData(d, p, u, l);
    var S = b.data;
    for (var E = 0, w = S.length; E < w; E += 4) {
      var x = E;
      var P = E + 1;
      var j = E + 2;
      var L = E + 3;
      if (_((y[L] << 24 | y[x] << 16 | y[P] << 8 | y[j]) >>> 0 & a, r & a)) {
        S[x] = f;
        S[P] = g;
        S[j] = m;
        S[L] = v;
      } else if (o) {
        S[x] = y[x];
        S[P] = y[P];
        S[j] = y[j];
        S[L] = y[L];
      }
    }
    T.putImageData(b, d, p);
    this._contextChanged = true;
  };
  i.toString = function () {
    return "[BitmapData (name=" + this.name + ")]";
  };
  i.updateContext = function () {};
  i.updateImageData = function () {
    this._contextChanged = false;
  };
  var r = {
    ALPHA: 8,
    BLUE: 4,
    GREEN: 2,
    RED: 1,
    getChannelIndex: function (t) {
      switch (t) {
        case r.RED:
          return 0;
        case r.GREEN:
          return 1;
        case r.BLUE:
          return 2;
        case r.ALPHA:
          return 3;
      }
    }
  };
  var n = function () {
    function ColorTransform(t, e, i, s, r, n, a, o) {
      if (t !== undefined) {
        this.redMultiplier = t;
      }
      if (e !== undefined) {
        this.greenMultiplier = e;
      }
      if (i !== undefined) {
        this.blueMultiplier = i;
      }
      if (s !== undefined) {
        this.alphaMultiplier = s;
      }
      if (r !== undefined) {
        this.redOffset = r;
      }
      if (n !== undefined) {
        this.greenOffset = n;
      }
      if (a !== undefined) {
        this.blueOffset = a;
      }
      if (o !== undefined) {
        this.alphaOffset = o;
      }
    }
    var t = ColorTransform.prototype = {
      get color() {
        return (this.redOffset << 16 | this.greenOffset << 8 | this.blueOffset) >>> 0;
      },
      set color(t) {
        this.redMultiplier = this.greenMultiplier = this.blueMultiplier = 0;
        this.redOffset = t >> 16 & 255;
        this.greenOffset = t >> 8 & 255;
        this.blueOffset = t & 255;
      }
    };
    t.constructor = ColorTransform;
    t.redMultiplier = 1;
    t.greenMultiplier = 1;
    t.blueMultiplier = 1;
    t.alphaMultiplier = 1;
    t.redOffset = 0;
    t.greenOffset = 0;
    t.blueOffset = 0;
    t.alphaOffset = 0;
    t.clone = function () {
      var t = Object.create(ColorTransform.prototype);
      if (this.hasOwnProperty("redMultiplier")) {
        t.redMultiplier = this.redMultiplier;
      }
      if (this.hasOwnProperty("greenMultiplier")) {
        t.greenMultiplier = this.greenMultiplier;
      }
      if (this.hasOwnProperty("blueMultiplier")) {
        t.blueMultiplier = this.blueMultiplier;
      }
      if (this.hasOwnProperty("alphaMultiplier")) {
        t.alphaMultiplier = this.alphaMultiplier;
      }
      if (this.hasOwnProperty("redOffset")) {
        t.redOffset = this.redOffset;
      }
      if (this.hasOwnProperty("greenOffset")) {
        t.redOffset = this.redOffset;
      }
      if (this.hasOwnProperty("blueOffset")) {
        t.redOffset = this.redOffset;
      }
      if (this.hasOwnProperty("alphaOffset")) {
        t.redOffset = this.redOffset;
      }
      return t;
    };
    t.concat = function (t) {
      this.redOffset += this.redMultiplier * t.redOffset;
      this.greenOffset += this.greenMultiplier * t.greenOffset;
      this.blueOffset += this.blueMultiplier * t.blueOffset;
      this.alphaOffset += this.alphaMultiplier * t.alphaOffset;
      this.redMultiplier *= t.redMultiplier;
      this.greenMultiplier *= t.greenMultiplier;
      this.blueMultiplier *= t.blueMultiplier;
      this.alphaMultiplier *= t.alphaMultiplier;
    };
    t.toString = function () {
      return "[ColorTransform (redMultiplier=" + this.redMultiplier + ", greenMultiplier=" + this.greenMultiplier + ", blueMultiplier=" + this.blueMultiplier + ", alphaMultiplier=" + this.alphaMultiplier + ", redOffset=" + this.redOffset + ", greenOffset=" + this.greenOffset + ", blueOffset=" + this.blueOffset + ", alphaOffset=" + this.alphaOffset + ")]";
    };
    return ColorTransform;
  }();
  createjs.BitmapData = BitmapData;
  createjs.BitmapDataChannel = r;
  createjs.ColorTransform = n;
})(window);
/*
DropShadowFilter for EaselJS
GitHub : https://github.com/u-kudox/Filters_for_EaselJS
Contact and Bug reports : http://kudox.jp/contact or http://twitter.com/u_kudox
License : public domain
*/
this.createjs = this.createjs || {};
(function (t) {
  'use strict';

  function DropShadowFilter(t, e, i, s, r, n, a, o, h, c, u) {
    this._distance = t !== undefined ? t : 4;
    this._angle = e !== undefined ? (e % 360 + 360) % 360 : 45;
    this._setOffset(this._distance, this._angle);
    if (typeof i == "string") {
      i = parseInt(i.substr(1), 16);
    }
    if (isNaN(i)) {
      this._red = this._green = this._blue = 0;
    } else {
      this.color = i;
    }
    this._blurFilter = new createjs.BlurFilter(r, n, o);
    this.alpha = s !== undefined ? s : 1;
    this.strength = a !== undefined ? a <= 1 ? a : a >> 0 : 1;
    this.inner = !!h;
    this.knockout = !!c;
    this.hideObject = !!u;
  }
  var e = createjs.extend(DropShadowFilter, createjs.Filter);
  Object.defineProperties(e, {
    angle: {
      get: function () {
        return this._angle;
      },
      set: function (t) {
        this._angle = t = (t % 360 + 360) % 360;
        this._setOffset(this._distance, t);
        return t;
      },
      enumerable: true
    },
    distance: {
      get: function () {
        return this._distance;
      },
      set: function (t) {
        this._distance = t;
        this._setOffset(t, this._angle);
        return t;
      },
      enumerable: true
    },
    color: {
      get: function () {
        return this._red << 16 | this._green << 8 | this._blue;
      },
      set: function (t) {
        this._red = t >> 16 & 255;
        this._green = t >> 8 & 255;
        this._blue = t & 255;
        return this.color;
      },
      enumerable: true
    },
    blurX: {
      get: function () {
        return this._blurFilter.blurX;
      },
      set: function (t) {
        this._blurFilter.blurX = t;
        return t;
      },
      enumerable: true
    },
    blurY: {
      get: function () {
        return this._blurFilter.blurY;
      },
      set: function (t) {
        this._blurFilter.blurY = t;
        return t;
      },
      enumerable: true
    },
    quality: {
      get: function () {
        return this._blurFilter.quality;
      },
      set: function (t) {
        this._blurFilter.quality = t;
        return t;
      },
      enumerable: true
    }
  });
  e.getBounds = function (t) {
    if (this.inner) {
      return t;
    }
    var e = this._blurFilter.getBounds(t);
    var i = this._offsetX;
    var s = this._offsetY;
    if (i !== 0) {
      if (i < 0) {
        e.x += i;
        e.width += -i;
      } else {
        e.width += i;
      }
    }
    if (s !== 0) {
      if (s < 0) {
        e.y += s;
        e.height += -s;
      } else {
        e.height += s;
      }
    }
    return e;
  };
  e.applyFilter = function (e, i, s, r, n, a, o, h) {
    if ((this.alpha <= 0 || this.strength <= 0) && !this.knockout && !this.hideObject) {
      return true;
    }
    a = a || e;
    if (o === undefined) {
      o = i;
    }
    if (h === undefined) {
      h = s;
    }
    var c = a.getImageData(o, h, r, n).data;
    var u = t.__filterCanvas ||= document.createElement("canvas");
    u.width = r;
    u.height = n;
    var l = t.__filterContext ||= u.getContext("2d");
    var d = l.getImageData(0, 0, r, n);
    var p = d.data;
    var _ = this.inner;
    var f = this._red;
    var g = this._green;
    var m = this._blue;
    for (var v = 0, y = p.length; v < y; v += 4) {
      var T = v + 3;
      var b = c[T];
      if (_) {
        if (b !== 255) {
          p[v] = f;
          p[v + 1] = g;
          p[v + 2] = m;
          p[T] = 255 - b;
        }
      } else if (b !== 0) {
        p[v] = f;
        p[v + 1] = g;
        p[v + 2] = m;
        p[T] = b;
      }
    }
    l.putImageData(d, 0, 0);
    var S = this.strength;
    if (S > 0) {
      this._blurFilter.applyFilter(l, 0, 0, r, n);
      if (S > 5) {
        S = 5;
      }
      for (var E = 1; E < S >> 0; E++) {
        l.drawImage(u, 0, 0);
      }
    }
    var w;
    var x = this.alpha;
    if (x < 0) {
      x = 0;
    } else if (x > 1) {
      x = 1;
    }
    w = this.knockout ? _ ? "source-in" : "source-out" : this.hideObject ? _ ? "source-in" : "copy" : _ ? "source-atop" : "destination-over";
    a.save();
    a.setTransform(1, 0, 0, 1, 0, 0);
    a.globalAlpha = x;
    a.globalCompositeOperation = w;
    a.drawImage(u, o + this._offsetX, h + this._offsetY);
    a.restore();
    u.width = u.height = 0;
    return true;
  };
  e.clone = function () {
    var t = this._blurFilter;
    return new createjs.DropShadowFilter(this._distance, this._angle, this.color, this.alpha, t.blurX, t.blurY, this.strength, t.quality, this.inner, this.knockout, this.hideObject);
  };
  e.toString = function () {
    return "[DropShadowFilter]";
  };
  e._setOffset = function (t, e) {
    var i = e * createjs.Matrix2D.DEG_TO_RAD;
    this._offsetX = Math.cos(i) * t;
    this._offsetY = Math.sin(i) * t;
  };
  createjs.DropShadowFilter = createjs.promote(DropShadowFilter, "Filter");
})(window);
/*
GlowFilter for EaselJS
GitHub : https://github.com/u-kudox/Filters_for_EaselJS
Contact and Bug reports : http://kudox.jp/contact or http://twitter.com/u_kudox
License : public domain
*/
this.createjs = this.createjs || {};
(function (t) {
  'use strict';

  function GlowFilter(t, e, i, s, r, n, a, o) {
    if (typeof t == "string") {
      t = parseInt(t.substr(1), 16);
    }
    if (isNaN(t)) {
      this._red = 255;
      this._green = this._blue = 0;
    } else {
      this.color = t;
    }
    this._blurFilter = new createjs.BlurFilter(i, s, n);
    this.alpha = e !== undefined ? e : 1;
    this.strength = r !== undefined ? r : 1;
    this.inner = !!a;
    this.knockout = !!o;
  }
  var e = createjs.extend(GlowFilter, createjs.Filter);
  Object.defineProperties(e, {
    color: {
      get: function () {
        return this._red << 16 | this._green << 8 | this._blue;
      },
      set: function (t) {
        this._red = t >> 16 & 255;
        this._green = t >> 8 & 255;
        this._blue = t & 255;
        return this.color;
      },
      enumerable: true
    },
    blurX: {
      get: function () {
        return this._blurFilter.blurX;
      },
      set: function (t) {
        this._blurFilter.blurX = t;
        return t;
      },
      enumerable: true
    },
    blurY: {
      get: function () {
        return this._blurFilter.blurY;
      },
      set: function (t) {
        this._blurFilter.blurY = t;
        return t;
      },
      enumerable: true
    },
    quality: {
      get: function () {
        return this._blurFilter.quality;
      },
      set: function (t) {
        this._blurFilter.quality = t;
        return t;
      },
      enumerable: true
    }
  });
  e.getBounds = function (t) {
    if (this.inner) {
      return t;
    } else {
      return this._blurFilter.getBounds(t);
    }
  };
  e.applyFilter = function (e, i, s, r, n, a, o, h) {
    if ((this.alpha <= 0 || this.strength <= 0) && !this.knockout) {
      return true;
    }
    a = a || e;
    if (o === undefined) {
      o = i;
    }
    if (h === undefined) {
      h = s;
    }
    if (e._doFastGlow) {
      a.save();
      a.shadowBlur = 20;
      a.shadowColor = t.rgbToHex(this._red, this._green, this._blue, true);
      var c = e._filterOffsetX / Math.min(e._cacheScale, 1);
      var u = e._filterOffsetY / Math.min(e._cacheScale, 1);
      a.drawImage(e.canvas, i, s, r, n, o + e._cacheOffsetX + c, h + e._cacheOffsetY + u, r / e._cacheScale, n / e._cacheScale);
      a.restore();
      return true;
    }
    var l = a.getImageData(o, h, r, n).data;
    var d = t.__filterCanvas ||= document.createElement("canvas");
    d.width = r;
    d.height = n;
    var p = t.__filterContext ||= d.getContext("2d");
    var _ = p.getImageData(0, 0, r, n);
    var f = _.data;
    var g = this.inner;
    var m = this._red / 255;
    var v = this._green / 255;
    var y = this._blue / 255;
    for (var T = 0, b = f.length; T < b; T += 4) {
      var S = T + 3;
      var E = l[S];
      if (g) {
        if (E !== 255) {
          f[T] = m * E;
          f[T + 1] = v * E;
          f[T + 2] = y * E;
          f[S] = 255 - E;
        }
      } else if (E !== 0) {
        f[T] = m * E;
        f[T + 1] = v * E;
        f[T + 2] = y * E;
        f[S] = E;
      }
    }
    p.putImageData(_, 0, 0);
    var w = this.strength;
    if (w > 0) {
      this._blurFilter.applyFilter(p, 0, 0, r, n);
      if (w > 5) {
        w = 5;
      }
      for (var x = 1; x < w; x++) {
        p.drawImage(d, 0, 0);
      }
    }
    var P;
    var j = this.alpha;
    if (j < 0) {
      j = 0;
    } else if (j > 1) {
      j = 1;
    }
    P = this.knockout ? g ? "source-in" : "source-out" : g ? "source-atop" : "destination-over";
    a.save();
    a.setTransform(1, 0, 0, 1, 0, 0);
    a.globalAlpha = j;
    a.globalCompositeOperation = P;
    a.drawImage(d, o, h);
    a.restore();
    d.width = d.height = 0;
    return true;
  };
  e.clone = function () {
    var t = this._blurFilter;
    return new createjs.GlowFilter(this.color, this.alpha, t.blurX, t.blurY, this.strength, t.quality, this.inner, this.knockout);
  };
  e.toString = function () {
    return "[GlowFilter]";
  };
  createjs.GlowFilter = createjs.promote(GlowFilter, "Filter");
})(window);
/*
 * ScaleBitmap
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 * Copyright (c) 2010 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
this.createjs = this.createjs || {};
(function () {
  'use strict';

  function ScaleBitmap(t, e, i) {
    this.DisplayObject_constructor();
    if (typeof t == "string") {
      this.image = new Image();
      this.image.src = t;
    } else {
      this.image = t;
    }
    this.drawWidth = i ? i.width : this.image.width;
    this.drawHeight = i ? i.height : this.image.height;
    this.scale9Grid = e;
    this.snapToPixel = true;
    this.sourceRect = i;
  }
  var t = createjs.extend(ScaleBitmap, createjs.DisplayObject);
  ScaleBitmap.prototype.constructor = ScaleBitmap;
  ScaleBitmap._colorTestCanvas = document.createElement("canvas");
  ScaleBitmap._colorTestContext = ScaleBitmap._colorTestCanvas.getContext("2d");
  ScaleBitmap._colorTestCanvas.width = ScaleBitmap._colorTestCanvas.height = 1;
  t.setDrawSize = function (t, e) {
    this.drawWidth = t;
    this.drawHeight = e;
  };
  t.isVisible = function () {
    var t = this.cacheCanvas || this.image && (this.image.complete || this.image.getContext || this.image.readyState >= 2);
    return !!this.visible && !!(this.alpha > 0) && this.scaleX != 0 && this.scaleY != 0 && !!t;
  };
  t.draw = function (t, e) {
    if (this.DisplayObject_draw(t, e)) {
      return true;
    }
    var i;
    var s;
    var r;
    if (this.parent && this.parent.scale9Grid) {
      (i = this.parent.scale9Grid.clone()).offset(-this.x, -this.y);
      s = this.scaleX * this.parent.scaleX;
      r = this.scaleY * this.parent.scaleY;
    } else {
      i = this.scale9Grid;
      s = this.scaleX;
      r = this.scaleY;
    }
    if (i.width <= 0 || i.height <= 0) {
      return true;
    }
    var n = this.sourceRect ? this.sourceRect.width : this.image.width;
    var a = this.sourceRect ? this.sourceRect.height : this.image.height;
    var o = this.sourceRect ? this.sourceRect.x : 0;
    var h = this.sourceRect ? this.sourceRect.y : 0;
    var c = i.x;
    var u = c / s;
    var l = c;
    var d = u;
    var p = i.width;
    if (p + l > n) {
      p = n - p;
    }
    var _ = l + p;
    var f = this.drawWidth - _;
    var g = f / s;
    var m = this.drawWidth - u - g;
    var v = d + m;
    var y = i.y;
    var T = y / r;
    var b = y;
    var S = T;
    var E = i.height;
    if (E + b > a) {
      E = a - b;
    }
    var w = b + E;
    var x = this.drawHeight - w;
    var P = x / r;
    var j = this.drawHeight - T - P;
    var L = S + j;
    var M = this._sliceCompensate;
    if (isNaN(M)) {
      t.imageSmoothingEnabled = false;
      M = 1;
      var C;
      var A = this.getCustomSliceCompensation();
      if (A !== undefined) {
        M = A;
      }
      if (this.image.getContext) {
        C = this.image.getContext("2d").getImageData(Math.ceil(l + o + p / 2 >> 0), Math.ceil(b + h + E / 2 >> 0), 1, 1).data;
      } else {
        ScaleBitmap._colorTestContext.drawImage(this.image, Math.ceil(l + o + p / 2 >> 0), Math.ceil(b + h + E / 2 >> 0), 1, 1, 0, 0, 1, 1);
        C = ScaleBitmap._colorTestContext.getImageData(0, 0, 1, 1).data;
        ScaleBitmap._colorTestContext.clearRect(0, 0, 1, 1);
      }
      if (C && C[3] < 255) {
        M = currentBrowserInfo.isChrome ? 0 : 0.12;
      }
      this._sliceCompensate = M;
    }
    try {
      if (c && y) {
        t.drawImage(this.image, 0 + o, 0 + h, c, y, 0, 0, u + M / s, T + M / r);
      }
      if (p && y) {
        t.drawImage(this.image, l + o, 0 + h, p, y, d, 0, m + (M > g ? 0.1 : M), T + M / r);
      }
      if (f && y) {
        t.drawImage(this.image, _ + o, 0 + h, f, y, v, 0, g, T + M / r);
      }
      if (c && E) {
        t.drawImage(this.image, 0 + o, b + h, c, E, 0, S, u + M / s, j + (M > P ? 0.1 : M / r));
      }
      if (p && E) {
        t.drawImage(this.image, l + o, b + h, p, E, d, S, m + (M > g ? 0.1 : M), j + (M > P ? 0.1 : M / r));
      }
      if (f && E) {
        t.drawImage(this.image, _ + o, b + h, f, E, v, S, g, j + (M > P ? 0.1 : M / r));
      }
      if (c && x) {
        t.drawImage(this.image, 0 + o, w + h, c, x, 0, L, u + M / s, P);
      }
      if (p && x) {
        t.drawImage(this.image, l + o, w + h, p, x, d, L, m + (M > g ? 0.1 : M), P);
      }
      if (f && x) {
        t.drawImage(this.image, _ + o, w + h, f, x, v, L, g, P);
      }
    } catch (t) {}
    return true;
  };
  t.getCustomSliceCompensation = function () {
    if (this.sliceCompensation !== undefined) {
      return this.sliceCompensation;
    }
    var t = this.parent;
    for (var e = 0; e < 3; e++) {
      if (t && t.sliceCompensation !== undefined) {
        return t.sliceCompensation;
      }
      if (t.parent) {
        t = t.parent;
      } else {
        e = 3;
      }
    }
  };
  t.setBounds = function (t, e, i, s) {
    this.DisplayObject_setBounds(t, e, i, s);
    this.drawWidth = i;
    this.drawHeight = s;
  };
  t.setScale9Grid = function (t) {
    this.scale9Grid = t;
  };
  t.clone = function () {
    var t = new ScaleBitmap(this.image, this.scale9Grid.clone());
    if (this.sourceRect) {
      t.sourceRect = this.sourceRect.clone();
    }
    this.cloneProps(t);
    return t;
  };
  t.toString = function () {
    return "[ScaleBitmap (name=" + this.name + ")]";
  };
  createjs.ScaleBitmap = createjs.promote(ScaleBitmap, "DisplayObject");
})(); //# sourceMappingURL=https://s3-eu-west-1.amazonaws.com/com.ggs-unicorns.sourcemaps/vendor.bundle.f8b9303b.js.map