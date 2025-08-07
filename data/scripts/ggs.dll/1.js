var e = require("./990.js")(module);
import * as i from "./24.js";
/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
export var _gsScope = typeof window != "undefined" ? window : e !== undefined && e.exports && i !== undefined ? i : {};
export var TweenLite = function (e, t) {
  var n = {};
  var i = e.document;
  var a = e.GreenSockGlobals = e.GreenSockGlobals || e;
  if (a.TweenLite) {
    return a.TweenLite;
  }
  var s;
  var r;
  var o;
  var l;
  var u;
  var c;
  var _;
  function d(e) {
    var t;
    var n = e.split(".");
    var i = a;
    for (t = 0; t < n.length; t++) {
      i[n[t]] = i = i[n[t]] || {};
    }
    return i;
  }
  var m = d("com.greensock");
  function h(e) {
    var t;
    var n = [];
    var i = e.length;
    for (t = 0; t !== i; n.push(e[t++]));
    return n;
  }
  function p() {}
  c = Object.prototype.toString;
  _ = c.call([]);
  function g(e) {
    return e != null && (e instanceof Array || typeof e == "object" && !!e.push && c.call(e) === _);
  }
  var E = {};
  function C(e, t, i, s) {
    this.sc = E[e] ? E[e].sc : [];
    E[e] = this;
    this.gsClass = null;
    this.func = i;
    var r = [];
    this.check = function (o) {
      var l;
      var u;
      var c;
      var _;
      for (var m = t.length, h = m; --m > -1;) {
        if ((l = E[t[m]] || new C(t[m], [])).gsClass) {
          r[m] = l.gsClass;
          h--;
        } else if (o) {
          l.sc.push(this);
        }
      }
      if (h === 0 && i) {
        c = (u = ("com.greensock." + e).split(".")).pop();
        _ = d(u.join("."))[c] = this.gsClass = i.apply(i, r);
        if (s) {
          a[c] = n[c] = _;
        }
        m = 0;
        for (; m < this.sc.length; m++) {
          this.sc[m].check();
        }
      }
    };
    this.check(true);
  }
  var f = e._gsDefine = function (e, t, n, i) {
    return new C(e, t, n, i);
  };
  var T = m._class = function (e, t, n) {
    t = t || function () {};
    f(e, [], function () {
      return t;
    }, n);
    return t;
  };
  f.globals = a;
  var S = [0, 0, 1, 1];
  var y = T("easing.Ease", function (e, t, n, i) {
    this._func = e;
    this._type = n || 0;
    this._power = i || 0;
    this._params = t ? S.concat(t) : S;
  }, true);
  var I = y.map = {};
  var v = y.register = function (e, t, n, i) {
    var a;
    var s;
    var r;
    var o;
    var l = t.split(",");
    for (var u = l.length, c = (n || "easeIn,easeOut,easeInOut").split(","); --u > -1;) {
      s = l[u];
      a = i ? T("easing." + s, null, true) : m.easing[s] || {};
      r = c.length;
      while (--r > -1) {
        o = c[r];
        I[s + "." + o] = I[o + s] = a[o] = e.getRatio ? e : e[o] || new e();
      }
    }
  };
  (o = y.prototype)._calcEnd = false;
  o.getRatio = function (e) {
    if (this._func) {
      this._params[0] = e;
      return this._func.apply(null, this._params);
    }
    var t = this._type;
    var n = this._power;
    var i = t === 1 ? 1 - e : t === 2 ? e : e < 0.5 ? e * 2 : (1 - e) * 2;
    if (n === 1) {
      i *= i;
    } else if (n === 2) {
      i *= i * i;
    } else if (n === 3) {
      i *= i * i * i;
    } else if (n === 4) {
      i *= i * i * i * i;
    }
    if (t === 1) {
      return 1 - i;
    } else if (t === 2) {
      return i;
    } else if (e < 0.5) {
      return i / 2;
    } else {
      return 1 - i / 2;
    }
  };
  r = (s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
  while (--r > -1) {
    o = s[r] + ",Power" + r;
    v(new y(null, null, 1, r), o, "easeOut", true);
    v(new y(null, null, 2, r), o, "easeIn" + (r === 0 ? ",easeNone" : ""));
    v(new y(null, null, 3, r), o, "easeInOut");
  }
  I.linear = m.easing.Linear.easeIn;
  I.swing = m.easing.Quad.easeInOut;
  var A = T("events.EventDispatcher", function (e) {
    this._listeners = {};
    this._eventTarget = e || this;
  });
  (o = A.prototype).addEventListener = function (e, t, n, i, a) {
    a = a || 0;
    var s;
    var r;
    var o = this._listeners[e];
    var c = 0;
    if (this === l && !u) {
      l.wake();
    }
    if (o == null) {
      this._listeners[e] = o = [];
    }
    r = o.length;
    while (--r > -1) {
      if ((s = o[r]).c === t && s.s === n) {
        o.splice(r, 1);
      } else if (c === 0 && s.pr < a) {
        c = r + 1;
      }
    }
    o.splice(c, 0, {
      c: t,
      s: n,
      up: i,
      pr: a
    });
  };
  o.removeEventListener = function (e, t) {
    var n;
    var i = this._listeners[e];
    if (i) {
      for (n = i.length; --n > -1;) {
        if (i[n].c === t) {
          i.splice(n, 1);
          return;
        }
      }
    }
  };
  o.dispatchEvent = function (e) {
    var t;
    var n;
    var i;
    var a = this._listeners[e];
    if (a) {
      if ((t = a.length) > 1) {
        a = a.slice(0);
      }
      n = this._eventTarget;
      while (--t > -1) {
        if (i = a[t]) {
          if (i.up) {
            i.c.call(i.s || n, {
              type: e,
              target: n
            });
          } else {
            i.c.call(i.s || n);
          }
        }
      }
    }
  };
  var O = e.requestAnimationFrame;
  var L = e.cancelAnimationFrame;
  var D = Date.now || function () {
    return new Date().getTime();
  };
  var b = D();
  for (r = (s = ["ms", "moz", "webkit", "o"]).length; --r > -1 && !O;) {
    O = e[s[r] + "RequestAnimationFrame"];
    L = e[s[r] + "CancelAnimationFrame"] || e[s[r] + "CancelRequestAnimationFrame"];
  }
  T("Ticker", function (e, t) {
    var n;
    var a;
    var s;
    var r;
    var o;
    var c = this;
    var _ = D();
    var d = t !== false && !!O && "auto";
    var m = 500;
    var h = 33;
    function g(e) {
      var t;
      var i;
      var l = D() - b;
      if (l > m) {
        _ += l - h;
      }
      b += l;
      c.time = (b - _) / 1000;
      t = c.time - o;
      if (!n || t > 0 || e === true) {
        c.frame++;
        o += t + (t >= r ? 0.004 : r - t);
        i = true;
      }
      if (e !== true) {
        s = a(g);
      }
      if (i) {
        c.dispatchEvent("tick");
      }
    }
    A.call(c);
    c.time = c.frame = 0;
    c.tick = function () {
      g(true);
    };
    c.lagSmoothing = function (e, t) {
      if (!arguments.length) {
        return m < 10000000000;
      }
      m = e || 10000000000;
      h = Math.min(t, m, 0);
    };
    c.sleep = function () {
      if (s != null) {
        if (d && L) {
          L(s);
        } else {
          clearTimeout(s);
        }
        a = p;
        s = null;
        if (c === l) {
          u = false;
        }
      }
    };
    c.wake = function (e) {
      if (s !== null) {
        c.sleep();
      } else if (e) {
        _ += -b + (b = D());
      } else if (c.frame > 10) {
        b = D() - m + 5;
      }
      a = n === 0 ? p : d && O ? O : function (e) {
        return setTimeout(e, (o - c.time) * 1000 + 1 | 0);
      };
      if (c === l) {
        u = true;
      }
      g(2);
    };
    c.fps = function (e) {
      if (!arguments.length) {
        return n;
      }
      r = 1 / ((n = e) || 60);
      o = this.time + r;
      c.wake();
    };
    c.useRAF = function (e) {
      if (!arguments.length) {
        return d;
      }
      c.sleep();
      d = e;
      c.fps(n);
    };
    c.fps(e);
    setTimeout(function () {
      if (d === "auto" && c.frame < 5 && (i || {}).visibilityState !== "hidden") {
        c.useRAF(false);
      }
    }, 1500);
  });
  (o = m.Ticker.prototype = new m.events.EventDispatcher()).constructor = m.Ticker;
  var N = T("core.Animation", function (e, t) {
    this.vars = t = t || {};
    this._duration = this._totalDuration = e || 0;
    this._delay = Number(t.delay) || 0;
    this._timeScale = 1;
    this._active = t.immediateRender === true;
    this.data = t.data;
    this._reversed = t.reversed === true;
    if (Z) {
      if (!u) {
        l.wake();
      }
      var n = this.vars.useFrames ? z : Z;
      n.add(this, n._time);
      if (this.vars.paused) {
        this.paused(true);
      }
    }
  });
  l = N.ticker = new m.Ticker();
  (o = N.prototype)._dirty = o._gc = o._initted = o._paused = false;
  o._totalTime = o._time = 0;
  o._rawPrevTime = -1;
  o._next = o._last = o._onUpdate = o._timeline = o.timeline = null;
  o._paused = false;
  function R() {
    if (u && D() - b > 2000 && ((i || {}).visibilityState !== "hidden" || !l.lagSmoothing())) {
      l.wake();
    }
    var e = setTimeout(R, 2000);
    if (e.unref) {
      e.unref();
    }
  }
  R();
  o.play = function (e, t) {
    if (e != null) {
      this.seek(e, t);
    }
    return this.reversed(false).paused(false);
  };
  o.pause = function (e, t) {
    if (e != null) {
      this.seek(e, t);
    }
    return this.paused(true);
  };
  o.resume = function (e, t) {
    if (e != null) {
      this.seek(e, t);
    }
    return this.paused(false);
  };
  o.seek = function (e, t) {
    return this.totalTime(Number(e), t !== false);
  };
  o.restart = function (e, t) {
    return this.reversed(false).paused(false).totalTime(e ? -this._delay : 0, t !== false, true);
  };
  o.reverse = function (e, t) {
    if (e != null) {
      this.seek(e || this.totalDuration(), t);
    }
    return this.reversed(true).paused(false);
  };
  o.render = function (e, t, n) {};
  o.invalidate = function () {
    this._time = this._totalTime = 0;
    this._initted = this._gc = false;
    this._rawPrevTime = -1;
    if (!!this._gc || !this.timeline) {
      this._enabled(true);
    }
    return this;
  };
  o.isActive = function () {
    var e;
    var t = this._timeline;
    var n = this._startTime;
    return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime(true)) >= n && e < n + this.totalDuration() / this._timeScale - 1e-7;
  };
  o._enabled = function (e, t) {
    if (!u) {
      l.wake();
    }
    this._gc = !e;
    this._active = this.isActive();
    if (t !== true) {
      if (e && !this.timeline) {
        this._timeline.add(this, this._startTime - this._delay);
      } else if (!e && this.timeline) {
        this._timeline._remove(this, true);
      }
    }
    return false;
  };
  o._kill = function (e, t) {
    return this._enabled(false, false);
  };
  o.kill = function (e, t) {
    this._kill(e, t);
    return this;
  };
  o._uncache = function (e) {
    for (var t = e ? this : this.timeline; t;) {
      t._dirty = true;
      t = t.timeline;
    }
    return this;
  };
  o._swapSelfInParams = function (e) {
    for (var t = e.length, n = e.concat(); --t > -1;) {
      if (e[t] === "{self}") {
        n[t] = this;
      }
    }
    return n;
  };
  o._callback = function (e) {
    var t = this.vars;
    var n = t[e];
    var i = t[e + "Params"];
    var a = t[e + "Scope"] || t.callbackScope || this;
    switch (i ? i.length : 0) {
      case 0:
        n.call(a);
        break;
      case 1:
        n.call(a, i[0]);
        break;
      case 2:
        n.call(a, i[0], i[1]);
        break;
      default:
        n.apply(a, i);
    }
  };
  o.eventCallback = function (e, t, n, i) {
    if ((e || "").substr(0, 2) === "on") {
      var a = this.vars;
      if (arguments.length === 1) {
        return a[e];
      }
      if (t == null) {
        delete a[e];
      } else {
        a[e] = t;
        a[e + "Params"] = g(n) && n.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(n) : n;
        a[e + "Scope"] = i;
      }
      if (e === "onUpdate") {
        this._onUpdate = t;
      }
    }
    return this;
  };
  o.delay = function (e) {
    if (arguments.length) {
      if (this._timeline.smoothChildTiming) {
        this.startTime(this._startTime + e - this._delay);
      }
      this._delay = e;
      return this;
    } else {
      return this._delay;
    }
  };
  o.duration = function (e) {
    if (arguments.length) {
      this._duration = this._totalDuration = e;
      this._uncache(true);
      if (this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && e !== 0) {
        this.totalTime(this._totalTime * (e / this._duration), true);
      }
      return this;
    } else {
      this._dirty = false;
      return this._duration;
    }
  };
  o.totalDuration = function (e) {
    this._dirty = false;
    if (arguments.length) {
      return this.duration(e);
    } else {
      return this._totalDuration;
    }
  };
  o.time = function (e, t) {
    if (arguments.length) {
      if (this._dirty) {
        this.totalDuration();
      }
      return this.totalTime(e > this._duration ? this._duration : e, t);
    } else {
      return this._time;
    }
  };
  o.totalTime = function (e, t, n) {
    if (!u) {
      l.wake();
    }
    if (!arguments.length) {
      return this._totalTime;
    }
    if (this._timeline) {
      if (e < 0 && !n) {
        e += this.totalDuration();
      }
      if (this._timeline.smoothChildTiming) {
        if (this._dirty) {
          this.totalDuration();
        }
        var i = this._totalDuration;
        var a = this._timeline;
        if (e > i && !n) {
          e = i;
        }
        this._startTime = (this._paused ? this._pauseTime : a._time) - (this._reversed ? i - e : e) / this._timeScale;
        if (!a._dirty) {
          this._uncache(false);
        }
        if (a._timeline) {
          while (a._timeline) {
            if (a._timeline._time !== (a._startTime + a._totalTime) / a._timeScale) {
              a.totalTime(a._totalTime, true);
            }
            a = a._timeline;
          }
        }
      }
      if (this._gc) {
        this._enabled(true, false);
      }
      if (this._totalTime !== e || this._duration === 0) {
        if (F.length) {
          Q();
        }
        this.render(e, t, false);
        if (F.length) {
          Q();
        }
      }
    }
    return this;
  };
  o.progress = o.totalProgress = function (e, t) {
    var n = this.duration();
    if (arguments.length) {
      return this.totalTime(n * e, t);
    } else if (n) {
      return this._time / n;
    } else {
      return this.ratio;
    }
  };
  o.startTime = function (e) {
    if (arguments.length) {
      if (e !== this._startTime) {
        this._startTime = e;
        if (this.timeline && this.timeline._sortChildren) {
          this.timeline.add(this, e - this._delay);
        }
      }
      return this;
    } else {
      return this._startTime;
    }
  };
  o.endTime = function (e) {
    return this._startTime + (e != 0 ? this.totalDuration() : this.duration()) / this._timeScale;
  };
  o.timeScale = function (e) {
    if (!arguments.length) {
      return this._timeScale;
    }
    var t;
    var n;
    e = e || 1e-10;
    if (this._timeline && this._timeline.smoothChildTiming) {
      n = (t = this._pauseTime) || t === 0 ? t : this._timeline.totalTime();
      this._startTime = n - (n - this._startTime) * this._timeScale / e;
    }
    this._timeScale = e;
    n = this.timeline;
    while (n && n.timeline) {
      n._dirty = true;
      n.totalDuration();
      n = n.timeline;
    }
    return this;
  };
  o.reversed = function (e) {
    if (arguments.length) {
      if (e != this._reversed) {
        this._reversed = e;
        this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, true);
      }
      return this;
    } else {
      return this._reversed;
    }
  };
  o.paused = function (e) {
    if (!arguments.length) {
      return this._paused;
    }
    var t;
    var n;
    var i = this._timeline;
    if (e != this._paused && i) {
      if (!u && !e) {
        l.wake();
      }
      n = (t = i.rawTime()) - this._pauseTime;
      if (!e && i.smoothChildTiming) {
        this._startTime += n;
        this._uncache(false);
      }
      this._pauseTime = e ? t : null;
      this._paused = e;
      this._active = this.isActive();
      if (!e && n !== 0 && this._initted && this.duration()) {
        t = i.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale;
        this.render(t, t === this._totalTime, true);
      }
    }
    if (this._gc && !e) {
      this._enabled(true, false);
    }
    return this;
  };
  var P = T("core.SimpleTimeline", function (e) {
    N.call(this, 0, e);
    this.autoRemoveChildren = this.smoothChildTiming = true;
  });
  (o = P.prototype = new N()).constructor = P;
  o.kill()._gc = false;
  o._first = o._last = o._recent = null;
  o._sortChildren = false;
  o.add = o.insert = function (e, t, n, i) {
    var a;
    var s;
    e._startTime = Number(t || 0) + e._delay;
    if (e._paused && this !== e._timeline) {
      e._pauseTime = this.rawTime() - (e._timeline.rawTime() - e._pauseTime);
    }
    if (e.timeline) {
      e.timeline._remove(e, true);
    }
    e.timeline = e._timeline = this;
    if (e._gc) {
      e._enabled(true, true);
    }
    a = this._last;
    if (this._sortChildren) {
      for (s = e._startTime; a && a._startTime > s;) {
        a = a._prev;
      }
    }
    if (a) {
      e._next = a._next;
      a._next = e;
    } else {
      e._next = this._first;
      this._first = e;
    }
    if (e._next) {
      e._next._prev = e;
    } else {
      this._last = e;
    }
    e._prev = a;
    this._recent = e;
    if (this._timeline) {
      this._uncache(true);
    }
    return this;
  };
  o._remove = function (e, t) {
    if (e.timeline === this) {
      if (!t) {
        e._enabled(false, true);
      }
      if (e._prev) {
        e._prev._next = e._next;
      } else if (this._first === e) {
        this._first = e._next;
      }
      if (e._next) {
        e._next._prev = e._prev;
      } else if (this._last === e) {
        this._last = e._prev;
      }
      e._next = e._prev = e.timeline = null;
      if (e === this._recent) {
        this._recent = this._last;
      }
      if (this._timeline) {
        this._uncache(true);
      }
    }
    return this;
  };
  o.render = function (e, t, n) {
    var i;
    var a = this._first;
    for (this._totalTime = this._time = this._rawPrevTime = e; a;) {
      i = a._next;
      if (a._active || e >= a._startTime && !a._paused && !a._gc) {
        if (a._reversed) {
          a.render((a._dirty ? a.totalDuration() : a._totalDuration) - (e - a._startTime) * a._timeScale, t, n);
        } else {
          a.render((e - a._startTime) * a._timeScale, t, n);
        }
      }
      a = i;
    }
  };
  o.rawTime = function () {
    if (!u) {
      l.wake();
    }
    return this._totalTime;
  };
  var B = T("TweenLite", function (t, n, i) {
    N.call(this, n, i);
    this.render = B.prototype.render;
    if (t == null) {
      throw "Cannot tween a null target.";
    }
    this.target = t = typeof t != "string" ? t : B.selector(t) || t;
    var a;
    var s;
    var r;
    var o = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType);
    var l = this.vars.overwrite;
    this._overwrite = l = l == null ? Y[B.defaultOverwrite] : typeof l == "number" ? l >> 0 : Y[l];
    if ((o || t instanceof Array || t.push && g(t)) && typeof t[0] != "number") {
      this._targets = r = h(t);
      this._propLookup = [];
      this._siblings = [];
      a = 0;
      for (; a < r.length; a++) {
        if (s = r[a]) {
          if (typeof s != "string") {
            if (s.length && s !== e && s[0] && (s[0] === e || s[0].nodeType && s[0].style && !s.nodeType)) {
              r.splice(a--, 1);
              this._targets = r = r.concat(h(s));
            } else {
              this._siblings[a] = $(s, this, false);
              if (l === 1 && this._siblings[a].length > 1) {
                ee(s, this, null, 1, this._siblings[a]);
              }
            }
          } else if (typeof (s = r[a--] = B.selector(s)) == "string") {
            r.splice(a + 1, 1);
          }
        } else {
          r.splice(a--, 1);
        }
      }
    } else {
      this._propLookup = {};
      this._siblings = $(t, this, false);
      if (l === 1 && this._siblings.length > 1) {
        ee(t, this, null, 1, this._siblings);
      }
    }
    if (this.vars.immediateRender || n === 0 && this._delay === 0 && this.vars.immediateRender !== false) {
      this._time = -1e-10;
      this.render(Math.min(0, -this._delay));
    }
  }, true);
  function M(t) {
    return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType);
  }
  (o = B.prototype = new N()).constructor = B;
  o.kill()._gc = false;
  o.ratio = 0;
  o._firstPT = o._targets = o._overwrittenProps = o._startAt = null;
  o._notifyPluginsOfEnabled = o._lazy = false;
  B.version = "2.0.2";
  B.defaultEase = o._ease = new y(null, null, 1, 1);
  B.defaultOverwrite = "auto";
  B.ticker = l;
  B.autoSleep = 120;
  B.lagSmoothing = function (e, t) {
    l.lagSmoothing(e, t);
  };
  B.selector = e.$ || e.jQuery || function (t) {
    var n = e.$ || e.jQuery;
    if (n) {
      B.selector = n;
      return n(t);
    } else {
      i ||= e.document;
      if (i) {
        if (i.querySelectorAll) {
          return i.querySelectorAll(t);
        } else {
          return i.getElementById(t.charAt(0) === "#" ? t.substr(1) : t);
        }
      } else {
        return t;
      }
    }
  };
  var F = [];
  var U = {};
  var G = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi;
  var w = /[\+-]=-?[\.\d]/;
  function k(e) {
    var t;
    for (var n = this._firstPT; n;) {
      t = n.blob ? e === 1 && this.end != null ? this.end : e ? this.join("") : this.start : n.c * e + n.s;
      if (n.m) {
        t = n.m.call(this._tween, t, this._target || n.t, this._tween);
      } else if (t < 0.000001 && t > -0.000001 && !n.blob) {
        t = 0;
      }
      if (n.f) {
        if (n.fp) {
          n.t[n.p](n.fp, t);
        } else {
          n.t[n.p](t);
        }
      } else {
        n.t[n.p] = t;
      }
      n = n._next;
    }
  }
  function x(e, t, n, i) {
    var a;
    var s;
    var r;
    var o;
    var l;
    var u;
    var c;
    var _ = [];
    var d = 0;
    var m = "";
    var h = 0;
    _.start = e;
    _.end = t;
    e = _[0] = e + "";
    t = _[1] = t + "";
    if (n) {
      n(_);
      e = _[0];
      t = _[1];
    }
    _.length = 0;
    a = e.match(G) || [];
    s = t.match(G) || [];
    if (i) {
      i._next = null;
      i.blob = 1;
      _._firstPT = _._applyPT = i;
    }
    l = s.length;
    o = 0;
    for (; o < l; o++) {
      c = s[o];
      m += (u = t.substr(d, t.indexOf(c, d) - d)) || !o ? u : ",";
      d += u.length;
      if (h) {
        h = (h + 1) % 5;
      } else if (u.substr(-5) === "rgba(") {
        h = 1;
      }
      if (c === a[o] || a.length <= o) {
        m += c;
      } else {
        if (m) {
          _.push(m);
          m = "";
        }
        r = parseFloat(a[o]);
        _.push(r);
        _._firstPT = {
          _next: _._firstPT,
          t: _,
          p: _.length - 1,
          s: r,
          c: (c.charAt(1) === "=" ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - r) || 0,
          f: 0,
          m: h && h < 4 ? Math.round : 0
        };
      }
      d += c.length;
    }
    if (m += t.substr(d)) {
      _.push(m);
    }
    _.setRatio = k;
    if (w.test(t)) {
      _.end = null;
    }
    return _;
  }
  function W(e, t, n, i, a, s, r, o, l) {
    if (typeof i == "function") {
      i = i(l || 0, e);
    }
    var u = typeof e[t];
    var c = u !== "function" ? "" : t.indexOf("set") || typeof e["get" + t.substr(3)] != "function" ? t : "get" + t.substr(3);
    var _ = n !== "get" ? n : c ? r ? e[c](r) : e[c]() : e[t];
    var d = typeof i == "string" && i.charAt(1) === "=";
    var m = {
      t: e,
      p: t,
      s: _,
      f: u === "function",
      pg: 0,
      n: a || t,
      m: s ? typeof s == "function" ? s : Math.round : 0,
      pr: 0,
      c: d ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2)) : parseFloat(i) - _ || 0
    };
    if (typeof _ != "number" || typeof i != "number" && !d) {
      if (r || isNaN(_) || !d && isNaN(i) || typeof _ == "boolean" || typeof i == "boolean") {
        m.fp = r;
        m = {
          t: x(_, d ? parseFloat(m.s) + m.c + (m.s + "").replace(/[0-9\-\.]/g, "") : i, o || B.defaultStringFilter, m),
          p: "setRatio",
          s: 0,
          c: 1,
          f: 2,
          pg: 0,
          n: a || t,
          pr: 0,
          m: 0
        };
      } else {
        m.s = parseFloat(_);
        if (!d) {
          m.c = parseFloat(i) - m.s || 0;
        }
      }
    }
    if (m.c) {
      if (m._next = this._firstPT) {
        m._next._prev = m;
      }
      this._firstPT = m;
      return m;
    }
  }
  var V = B._internals = {
    isArray: g,
    isSelector: M,
    lazyTweens: F,
    blobDif: x
  };
  var H = B._plugins = {};
  var j = V.tweenLookup = {};
  var q = 0;
  var K = V.reservedProps = {
    ease: 1,
    delay: 1,
    overwrite: 1,
    onComplete: 1,
    onCompleteParams: 1,
    onCompleteScope: 1,
    useFrames: 1,
    runBackwards: 1,
    startAt: 1,
    onUpdate: 1,
    onUpdateParams: 1,
    onUpdateScope: 1,
    onStart: 1,
    onStartParams: 1,
    onStartScope: 1,
    onReverseComplete: 1,
    onReverseCompleteParams: 1,
    onReverseCompleteScope: 1,
    onRepeat: 1,
    onRepeatParams: 1,
    onRepeatScope: 1,
    easeParams: 1,
    yoyo: 1,
    immediateRender: 1,
    repeat: 1,
    repeatDelay: 1,
    data: 1,
    paused: 1,
    reversed: 1,
    autoCSS: 1,
    lazy: 1,
    onOverwrite: 1,
    callbackScope: 1,
    stringFilter: 1,
    id: 1,
    yoyoEase: 1
  };
  var Y = {
    none: 0,
    all: 1,
    auto: 2,
    concurrent: 3,
    allOnStart: 4,
    preexisting: 5,
    true: 1,
    false: 0
  };
  var z = N._rootFramesTimeline = new P();
  var Z = N._rootTimeline = new P();
  var X = 30;
  var Q = V.lazyRender = function () {
    var e;
    var t = F.length;
    for (U = {}; --t > -1;) {
      if ((e = F[t]) && e._lazy !== false) {
        e.render(e._lazy[0], e._lazy[1], true);
        e._lazy = false;
      }
    }
    F.length = 0;
  };
  Z._startTime = l.time;
  z._startTime = l.frame;
  Z._active = z._active = true;
  setTimeout(Q, 1);
  N._updateRoot = B.render = function () {
    var e;
    var t;
    var n;
    if (F.length) {
      Q();
    }
    Z.render((l.time - Z._startTime) * Z._timeScale, false, false);
    z.render((l.frame - z._startTime) * z._timeScale, false, false);
    if (F.length) {
      Q();
    }
    if (l.frame >= X) {
      X = l.frame + (parseInt(B.autoSleep, 10) || 120);
      for (n in j) {
        for (e = (t = j[n].tweens).length; --e > -1;) {
          if (t[e]._gc) {
            t.splice(e, 1);
          }
        }
        if (t.length === 0) {
          delete j[n];
        }
      }
      if ((!(n = Z._first) || n._paused) && B.autoSleep && !z._first && l._listeners.tick.length === 1) {
        while (n && n._paused) {
          n = n._next;
        }
        if (!n) {
          l.sleep();
        }
      }
    }
  };
  l.addEventListener("tick", N._updateRoot);
  function $(e, t, n) {
    var i;
    var a;
    var s = e._gsTweenID;
    if (!j[s || (e._gsTweenID = s = "t" + q++)]) {
      j[s] = {
        target: e,
        tweens: []
      };
    }
    if (t && ((i = j[s].tweens)[a = i.length] = t, n)) {
      while (--a > -1) {
        if (i[a] === t) {
          i.splice(a, 1);
        }
      }
    }
    return j[s].tweens;
  }
  function J(e, t, n, i) {
    var a;
    var s;
    var r = e.vars.onOverwrite;
    if (r) {
      a = r(e, t, n, i);
    }
    if (r = B.onOverwrite) {
      s = r(e, t, n, i);
    }
    return a !== false && s !== false;
  }
  function ee(e, t, n, i, a) {
    var s;
    var r;
    var o;
    var l;
    if (i === 1 || i >= 4) {
      l = a.length;
      s = 0;
      for (; s < l; s++) {
        if ((o = a[s]) !== t) {
          if (!o._gc) {
            if (o._kill(null, e, t)) {
              r = true;
            }
          }
        } else if (i === 5) {
          break;
        }
      }
      return r;
    }
    var u;
    var c = t._startTime + 1e-10;
    var _ = [];
    var d = 0;
    var m = t._duration === 0;
    for (s = a.length; --s > -1;) {
      if ((o = a[s]) !== t && !o._gc && !o._paused) {
        if (o._timeline !== t._timeline) {
          u = u || te(t, 0, m);
          if (te(o, u, m) === 0) {
            _[d++] = o;
          }
        } else if (o._startTime <= c && o._startTime + o.totalDuration() / o._timeScale > c) {
          if (!m && !!o._initted || !(c - o._startTime <= 2e-10)) {
            _[d++] = o;
          }
        }
      }
    }
    for (s = d; --s > -1;) {
      l = (o = _[s])._firstPT;
      if (i === 2 && o._kill(n, e, t)) {
        r = true;
      }
      if (i !== 2 || !o._firstPT && o._initted && l) {
        if (i !== 2 && !J(o, t)) {
          continue;
        }
        if (o._enabled(false, false)) {
          r = true;
        }
      }
    }
    return r;
  }
  function te(e, t, n) {
    for (var i = e._timeline, a = i._timeScale, s = e._startTime; i._timeline;) {
      s += i._startTime;
      a *= i._timeScale;
      if (i._paused) {
        return -100;
      }
      i = i._timeline;
    }
    if ((s /= a) > t) {
      return s - t;
    } else if (n && s === t || !e._initted && s - t < 2e-10) {
      return 1e-10;
    } else if ((s += e.totalDuration() / e._timeScale / a) > t + 1e-10) {
      return 0;
    } else {
      return s - t - 1e-10;
    }
  }
  o._init = function () {
    var e;
    var t;
    var n;
    var i;
    var a;
    var s;
    var r = this.vars;
    var o = this._overwrittenProps;
    var l = this._duration;
    var u = !!r.immediateRender;
    var c = r.ease;
    if (r.startAt) {
      if (this._startAt) {
        this._startAt.render(-1, true);
        this._startAt.kill();
      }
      a = {};
      for (i in r.startAt) {
        a[i] = r.startAt[i];
      }
      a.data = "isStart";
      a.overwrite = false;
      a.immediateRender = true;
      a.lazy = u && r.lazy !== false;
      a.startAt = a.delay = null;
      a.onUpdate = r.onUpdate;
      a.onUpdateParams = r.onUpdateParams;
      a.onUpdateScope = r.onUpdateScope || r.callbackScope || this;
      this._startAt = B.to(this.target || {}, 0, a);
      if (u) {
        if (this._time > 0) {
          this._startAt = null;
        } else if (l !== 0) {
          return;
        }
      }
    } else if (r.runBackwards && l !== 0) {
      if (this._startAt) {
        this._startAt.render(-1, true);
        this._startAt.kill();
        this._startAt = null;
      } else {
        if (this._time !== 0) {
          u = false;
        }
        n = {};
        for (i in r) {
          if (!K[i] || i === "autoCSS") {
            n[i] = r[i];
          }
        }
        n.overwrite = 0;
        n.data = "isFromStart";
        n.lazy = u && r.lazy !== false;
        n.immediateRender = u;
        this._startAt = B.to(this.target, 0, n);
        if (u) {
          if (this._time === 0) {
            return;
          }
        } else {
          this._startAt._init();
          this._startAt._enabled(false);
          if (this.vars.immediateRender) {
            this._startAt = null;
          }
        }
      }
    }
    this._ease = c = c ? c instanceof y ? c : typeof c == "function" ? new y(c, r.easeParams) : I[c] || B.defaultEase : B.defaultEase;
    if (r.easeParams instanceof Array && c.config) {
      this._ease = c.config.apply(c, r.easeParams);
    }
    this._easeType = this._ease._type;
    this._easePower = this._ease._power;
    this._firstPT = null;
    if (this._targets) {
      s = this._targets.length;
      e = 0;
      for (; e < s; e++) {
        if (this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], o ? o[e] : null, e)) {
          t = true;
        }
      }
    } else {
      t = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
    }
    if (t) {
      B._onPluginEvent("_onInitAllProps", this);
    }
    if (o) {
      if (!this._firstPT) {
        if (typeof this.target != "function") {
          this._enabled(false, false);
        }
      }
    }
    if (r.runBackwards) {
      for (n = this._firstPT; n;) {
        n.s += n.c;
        n.c = -n.c;
        n = n._next;
      }
    }
    this._onUpdate = r.onUpdate;
    this._initted = true;
  };
  o._initProps = function (t, n, i, a, s) {
    var r;
    var o;
    var l;
    var u;
    var c;
    var _;
    if (t == null) {
      return false;
    }
    if (U[t._gsTweenID]) {
      Q();
    }
    if (!this.vars.css) {
      if (t.style && t !== e && t.nodeType && H.css && this.vars.autoCSS !== false) {
        (function (e, t) {
          var n;
          var i = {};
          for (n in e) {
            if (!K[n] && (!(n in t) || n === "transform" || n === "x" || n === "y" || n === "width" || n === "height" || n === "className" || n === "border") && (!H[n] || !!H[n] && !!H[n]._autoCSS)) {
              i[n] = e[n];
              delete e[n];
            }
          }
          e.css = i;
        })(this.vars, t);
      }
    }
    for (r in this.vars) {
      _ = this.vars[r];
      if (K[r]) {
        if (_ && (_ instanceof Array || _.push && g(_)) && _.join("").indexOf("{self}") !== -1) {
          this.vars[r] = _ = this._swapSelfInParams(_, this);
        }
      } else if (H[r] && (u = new H[r]())._onInitTween(t, this.vars[r], this, s)) {
        this._firstPT = c = {
          _next: this._firstPT,
          t: u,
          p: "setRatio",
          s: 0,
          c: 1,
          f: 1,
          n: r,
          pg: 1,
          pr: u._priority,
          m: 0
        };
        o = u._overwriteProps.length;
        while (--o > -1) {
          n[u._overwriteProps[o]] = this._firstPT;
        }
        if (u._priority || u._onInitAllProps) {
          l = true;
        }
        if (u._onDisable || u._onEnable) {
          this._notifyPluginsOfEnabled = true;
        }
        if (c._next) {
          c._next._prev = c;
        }
      } else {
        n[r] = W.call(this, t, r, "get", _, r, 0, null, this.vars.stringFilter, s);
      }
    }
    if (a && this._kill(a, t)) {
      return this._initProps(t, n, i, a, s);
    } else if (this._overwrite > 1 && this._firstPT && i.length > 1 && ee(t, this, n, this._overwrite, i)) {
      this._kill(n, t);
      return this._initProps(t, n, i, a, s);
    } else {
      if (this._firstPT && (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration)) {
        U[t._gsTweenID] = true;
      }
      return l;
    }
  };
  o.render = function (e, t, n) {
    var i;
    var a;
    var s;
    var r;
    var o = this._time;
    var l = this._duration;
    var u = this._rawPrevTime;
    if (e >= l - 1e-7 && e >= 0) {
      this._totalTime = this._time = l;
      this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
      if (!this._reversed) {
        i = true;
        a = "onComplete";
        n = n || this._timeline.autoRemoveChildren;
      }
      if (l === 0 && (this._initted || !this.vars.lazy || n)) {
        if (this._startTime === this._timeline._duration) {
          e = 0;
        }
        if ((u < 0 || e <= 0 && e >= -1e-7 || u === 1e-10 && this.data !== "isPause") && u !== e) {
          n = true;
          if (u > 1e-10) {
            a = "onReverseComplete";
          }
        }
        this._rawPrevTime = r = !t || e || u === e ? e : 1e-10;
      }
    } else if (e < 1e-7) {
      this._totalTime = this._time = 0;
      this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
      if (o !== 0 || l === 0 && u > 0) {
        a = "onReverseComplete";
        i = this._reversed;
      }
      if (e < 0) {
        this._active = false;
        if (l === 0 && (this._initted || !this.vars.lazy || n)) {
          if (u >= 0 && (u !== 1e-10 || this.data !== "isPause")) {
            n = true;
          }
          this._rawPrevTime = r = !t || e || u === e ? e : 1e-10;
        }
      }
      if (!this._initted || this._startAt && this._startAt.progress()) {
        n = true;
      }
    } else {
      this._totalTime = this._time = e;
      if (this._easeType) {
        var c = e / l;
        var _ = this._easeType;
        var d = this._easePower;
        if (_ === 1 || _ === 3 && c >= 0.5) {
          c = 1 - c;
        }
        if (_ === 3) {
          c *= 2;
        }
        if (d === 1) {
          c *= c;
        } else if (d === 2) {
          c *= c * c;
        } else if (d === 3) {
          c *= c * c * c;
        } else if (d === 4) {
          c *= c * c * c * c;
        }
        this.ratio = _ === 1 ? 1 - c : _ === 2 ? c : e / l < 0.5 ? c / 2 : 1 - c / 2;
      } else {
        this.ratio = this._ease.getRatio(e / l);
      }
    }
    if (this._time !== o || n) {
      if (!this._initted) {
        this._init();
        if (!this._initted || this._gc) {
          return;
        }
        if (!n && this._firstPT && (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration)) {
          this._time = this._totalTime = o;
          this._rawPrevTime = u;
          F.push(this);
          this._lazy = [e, t];
          return;
        }
        if (this._time && !i) {
          this.ratio = this._ease.getRatio(this._time / l);
        } else if (i && this._ease._calcEnd) {
          this.ratio = this._ease.getRatio(this._time === 0 ? 0 : 1);
        }
      }
      if (this._lazy !== false) {
        this._lazy = false;
      }
      if (!this._active) {
        if (!this._paused && this._time !== o && e >= 0) {
          this._active = true;
        }
      }
      if (o === 0) {
        if (this._startAt) {
          if (e >= 0) {
            this._startAt.render(e, true, n);
          } else {
            a ||= "_dummyGS";
          }
        }
        if (this.vars.onStart) {
          if ((this._time !== 0 || l === 0) && !t) {
            this._callback("onStart");
          }
        }
      }
      s = this._firstPT;
      while (s) {
        if (s.f) {
          s.t[s.p](s.c * this.ratio + s.s);
        } else {
          s.t[s.p] = s.c * this.ratio + s.s;
        }
        s = s._next;
      }
      if (this._onUpdate) {
        if (e < 0 && this._startAt && e !== -0.0001) {
          this._startAt.render(e, true, n);
        }
        if (!t) {
          if (this._time !== o || i || n) {
            this._callback("onUpdate");
          }
        }
      }
      if (a) {
        if (!this._gc || !!n) {
          if (e < 0 && this._startAt && !this._onUpdate && e !== -0.0001) {
            this._startAt.render(e, true, n);
          }
          if (i) {
            if (this._timeline.autoRemoveChildren) {
              this._enabled(false, false);
            }
            this._active = false;
          }
          if (!t && this.vars[a]) {
            this._callback(a);
          }
          if (l === 0 && this._rawPrevTime === 1e-10 && r !== 1e-10) {
            this._rawPrevTime = 0;
          }
        }
      }
    }
  };
  o._kill = function (e, t, n) {
    if (e === "all") {
      e = null;
    }
    if (e == null && (t == null || t === this.target)) {
      this._lazy = false;
      return this._enabled(false, false);
    }
    t = typeof t != "string" ? t || this._targets || this.target : B.selector(t) || t;
    var i;
    var a;
    var s;
    var r;
    var o;
    var l;
    var u;
    var c;
    var _;
    var d = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline;
    var m = this._firstPT;
    if ((g(t) || M(t)) && typeof t[0] != "number") {
      for (i = t.length; --i > -1;) {
        if (this._kill(e, t[i], n)) {
          l = true;
        }
      }
    } else {
      if (this._targets) {
        for (i = this._targets.length; --i > -1;) {
          if (t === this._targets[i]) {
            o = this._propLookup[i] || {};
            this._overwrittenProps = this._overwrittenProps || [];
            a = this._overwrittenProps[i] = e ? this._overwrittenProps[i] || {} : "all";
            break;
          }
        }
      } else {
        if (t !== this.target) {
          return false;
        }
        o = this._propLookup;
        a = this._overwrittenProps = e ? this._overwrittenProps || {} : "all";
      }
      if (o) {
        u = e || o;
        c = e !== a && a !== "all" && e !== o && (typeof e != "object" || !e._tempKill);
        if (n && (B.onOverwrite || this.vars.onOverwrite)) {
          for (s in u) {
            if (o[s]) {
              _ ||= [];
              _.push(s);
            }
          }
          if ((_ || !e) && !J(this, n, t, _)) {
            return false;
          }
        }
        for (s in u) {
          if (r = o[s]) {
            if (d) {
              if (r.f) {
                r.t[r.p](r.s);
              } else {
                r.t[r.p] = r.s;
              }
              l = true;
            }
            if (r.pg && r.t._kill(u)) {
              l = true;
            }
            if (!r.pg || r.t._overwriteProps.length === 0) {
              if (r._prev) {
                r._prev._next = r._next;
              } else if (r === this._firstPT) {
                this._firstPT = r._next;
              }
              if (r._next) {
                r._next._prev = r._prev;
              }
              r._next = r._prev = null;
            }
            delete o[s];
          }
          if (c) {
            a[s] = 1;
          }
        }
        if (!this._firstPT && this._initted && m) {
          this._enabled(false, false);
        }
      }
    }
    return l;
  };
  o.invalidate = function () {
    if (this._notifyPluginsOfEnabled) {
      B._onPluginEvent("_onDisable", this);
    }
    this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
    this._notifyPluginsOfEnabled = this._active = this._lazy = false;
    this._propLookup = this._targets ? {} : [];
    N.prototype.invalidate.call(this);
    if (this.vars.immediateRender) {
      this._time = -1e-10;
      this.render(Math.min(0, -this._delay));
    }
    return this;
  };
  o._enabled = function (e, t) {
    if (!u) {
      l.wake();
    }
    if (e && this._gc) {
      var n;
      var i = this._targets;
      if (i) {
        for (n = i.length; --n > -1;) {
          this._siblings[n] = $(i[n], this, true);
        }
      } else {
        this._siblings = $(this.target, this, true);
      }
    }
    N.prototype._enabled.call(this, e, t);
    return !!this._notifyPluginsOfEnabled && !!this._firstPT && B._onPluginEvent(e ? "_onEnable" : "_onDisable", this);
  };
  B.to = function (e, t, n) {
    return new B(e, t, n);
  };
  B.from = function (e, t, n) {
    n.runBackwards = true;
    n.immediateRender = n.immediateRender != 0;
    return new B(e, t, n);
  };
  B.fromTo = function (e, t, n, i) {
    i.startAt = n;
    i.immediateRender = i.immediateRender != 0 && n.immediateRender != 0;
    return new B(e, t, i);
  };
  B.delayedCall = function (e, t, n, i, a) {
    return new B(t, 0, {
      delay: e,
      onComplete: t,
      onCompleteParams: n,
      callbackScope: i,
      onReverseComplete: t,
      onReverseCompleteParams: n,
      immediateRender: false,
      lazy: false,
      useFrames: a,
      overwrite: 0
    });
  };
  B.set = function (e, t) {
    return new B(e, 0, t);
  };
  B.getTweensOf = function (e, t) {
    if (e == null) {
      return [];
    }
    var n;
    var i;
    var a;
    var s;
    e = typeof e != "string" ? e : B.selector(e) || e;
    if ((g(e) || M(e)) && typeof e[0] != "number") {
      n = e.length;
      i = [];
      while (--n > -1) {
        i = i.concat(B.getTweensOf(e[n], t));
      }
      for (n = i.length; --n > -1;) {
        s = i[n];
        a = n;
        while (--a > -1) {
          if (s === i[a]) {
            i.splice(n, 1);
          }
        }
      }
    } else if (e._gsTweenID) {
      for (n = (i = $(e).concat()).length; --n > -1;) {
        if (i[n]._gc || t && !i[n].isActive()) {
          i.splice(n, 1);
        }
      }
    }
    return i || [];
  };
  B.killTweensOf = B.killDelayedCallsTo = function (e, t, n) {
    if (typeof t == "object") {
      n = t;
      t = false;
    }
    var i = B.getTweensOf(e, t);
    for (var a = i.length; --a > -1;) {
      i[a]._kill(n, e);
    }
  };
  var ne = T("plugins.TweenPlugin", function (e, t) {
    this._overwriteProps = (e || "").split(",");
    this._propName = this._overwriteProps[0];
    this._priority = t || 0;
    this._super = ne.prototype;
  }, true);
  o = ne.prototype;
  ne.version = "1.19.0";
  ne.API = 2;
  o._firstPT = null;
  o._addTween = W;
  o.setRatio = k;
  o._kill = function (e) {
    var t;
    var n = this._overwriteProps;
    var i = this._firstPT;
    if (e[this._propName] != null) {
      this._overwriteProps = [];
    } else {
      for (t = n.length; --t > -1;) {
        if (e[n[t]] != null) {
          n.splice(t, 1);
        }
      }
    }
    while (i) {
      if (e[i.n] != null) {
        if (i._next) {
          i._next._prev = i._prev;
        }
        if (i._prev) {
          i._prev._next = i._next;
          i._prev = null;
        } else if (this._firstPT === i) {
          this._firstPT = i._next;
        }
      }
      i = i._next;
    }
    return false;
  };
  o._mod = o._roundProps = function (e) {
    var t;
    for (var n = this._firstPT; n;) {
      if ((t = e[this._propName] || n.n != null && e[n.n.split(this._propName + "_").join("")]) && typeof t == "function") {
        if (n.f === 2) {
          n.t._applyPT.m = t;
        } else {
          n.m = t;
        }
      }
      n = n._next;
    }
  };
  B._onPluginEvent = function (e, t) {
    var n;
    var i;
    var a;
    var s;
    var r;
    var o = t._firstPT;
    if (e === "_onInitAllProps") {
      while (o) {
        r = o._next;
        i = a;
        while (i && i.pr > o.pr) {
          i = i._next;
        }
        if (o._prev = i ? i._prev : s) {
          o._prev._next = o;
        } else {
          a = o;
        }
        if (o._next = i) {
          i._prev = o;
        } else {
          s = o;
        }
        o = r;
      }
      o = t._firstPT = a;
    }
    while (o) {
      if (o.pg && typeof o.t[e] == "function" && o.t[e]()) {
        n = true;
      }
      o = o._next;
    }
    return n;
  };
  ne.activate = function (e) {
    for (var t = e.length; --t > -1;) {
      if (e[t].API === ne.API) {
        H[new e[t]()._propName] = e[t];
      }
    }
    return true;
  };
  f.plugin = function (e) {
    if (!e || !e.propName || !e.init || !e.API) {
      throw "illegal plugin definition.";
    }
    var t;
    var n = e.propName;
    var i = e.priority || 0;
    var a = e.overwriteProps;
    var s = {
      init: "_onInitTween",
      set: "setRatio",
      kill: "_kill",
      round: "_mod",
      mod: "_mod",
      initAll: "_onInitAllProps"
    };
    var r = T("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function () {
      ne.call(this, n, i);
      this._overwriteProps = a || [];
    }, e.global === true);
    var o = r.prototype = new ne(n);
    o.constructor = r;
    r.API = e.API;
    for (t in s) {
      if (typeof e[t] == "function") {
        o[s[t]] = e[t];
      }
    }
    r.version = e.version;
    ne.activate([r]);
    return r;
  };
  if (s = e._gsQueue) {
    for (r = 0; r < s.length; r++) {
      s[r]();
    }
    for (o in E) {
      if (!E[o].func) {
        e.console.log("GSAP encountered missing dependency: " + o);
      }
    }
  }
  u = false;
  return B;
}(_gsScope);
export var globals = _gsScope.GreenSockGlobals;
var o = globals.com.greensock;
export var SimpleTimeline = o.core.SimpleTimeline;
export var Animation = o.core.Animation;
export var Ease = globals.Ease;
export var Linear = globals.Linear;
export var Power0 = Linear;
export var Power1 = globals.Power1;
export var Power2 = globals.Power2;
export var Power3 = globals.Power3;
export var Power4 = globals.Power4;
export var TweenPlugin = globals.TweenPlugin;
export var EventDispatcher = o.events.EventDispatcher;