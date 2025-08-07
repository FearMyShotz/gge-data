import * as i from "./1.js";
export let TweenLite = i.default;
export let Ease = i.Ease;
export let Power0 = i.Power0;
export let Power1 = i.Power1;
export let Power2 = i.Power2;
export let Power3 = i.Power3;
export let Power4 = i.Power4;
export let Linear = i.Linear;
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
 **/
i._gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function () {
  function e(e) {
    var t;
    var n = [];
    var i = e.length;
    for (t = 0; t !== i; n.push(e[t++]));
    return n;
  }
  function t(e, t, n) {
    var i;
    var a;
    var s = e.cycle;
    for (i in s) {
      a = s[i];
      e[i] = typeof a == "function" ? a(n, t[n]) : a[n % a.length];
    }
    delete e.cycle;
  }
  function n(e, t, a) {
    i.default.call(this, e, t, a);
    this._cycle = 0;
    this._yoyo = this.vars.yoyo === true || !!this.vars.yoyoEase;
    this._repeat = this.vars.repeat || 0;
    this._repeatDelay = this.vars.repeatDelay || 0;
    if (this._repeat) {
      this._uncache(true);
    }
    this.render = n.prototype.render;
  }
  var a = i.default._internals;
  var s = a.isSelector;
  var r = a.isArray;
  var o = n.prototype = i.default.to({}, 0.1, {});
  var l = [];
  n.version = "2.0.2";
  o.constructor = n;
  o.kill()._gc = false;
  n.killTweensOf = n.killDelayedCallsTo = i.default.killTweensOf;
  n.getTweensOf = i.default.getTweensOf;
  n.lagSmoothing = i.default.lagSmoothing;
  n.ticker = i.default.ticker;
  n.render = i.default.render;
  o.invalidate = function () {
    this._yoyo = this.vars.yoyo === true || !!this.vars.yoyoEase;
    this._repeat = this.vars.repeat || 0;
    this._repeatDelay = this.vars.repeatDelay || 0;
    this._yoyoEase = null;
    this._uncache(true);
    return i.default.prototype.invalidate.call(this);
  };
  o.updateTo = function (e, t) {
    var n;
    var a = this.ratio;
    var s = this.vars.immediateRender || e.immediateRender;
    if (t && this._startTime < this._timeline._time) {
      this._startTime = this._timeline._time;
      this._uncache(false);
      if (this._gc) {
        this._enabled(true, false);
      } else {
        this._timeline.insert(this, this._startTime - this._delay);
      }
    }
    for (n in e) {
      this.vars[n] = e[n];
    }
    if (this._initted || s) {
      if (t) {
        this._initted = false;
        if (s) {
          this.render(0, true, true);
        }
      } else {
        if (this._gc) {
          this._enabled(true, false);
        }
        if (this._notifyPluginsOfEnabled && this._firstPT) {
          i.default._onPluginEvent("_onDisable", this);
        }
        if (this._time / this._duration > 0.998) {
          var r = this._totalTime;
          this.render(0, true, false);
          this._initted = false;
          this.render(r, true, false);
        } else {
          this._initted = false;
          this._init();
          if (this._time > 0 || s) {
            var o;
            var l = 1 / (1 - a);
            for (var u = this._firstPT; u;) {
              o = u.s + u.c;
              u.c *= l;
              u.s = o - u.c;
              u = u._next;
            }
          }
        }
      }
    }
    return this;
  };
  o.render = function (e, t, n) {
    if (!this._initted) {
      if (this._duration === 0 && this.vars.repeat) {
        this.invalidate();
      }
    }
    var s;
    var r;
    var o;
    var l;
    var u;
    var c;
    var _;
    var d;
    var m;
    var h = this._dirty ? this.totalDuration() : this._totalDuration;
    var p = this._time;
    var g = this._totalTime;
    var E = this._cycle;
    var C = this._duration;
    var f = this._rawPrevTime;
    if (e >= h - 1e-7 && e >= 0) {
      this._totalTime = h;
      this._cycle = this._repeat;
      if (this._yoyo && (this._cycle & 1) != 0) {
        this._time = 0;
        this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
      } else {
        this._time = C;
        this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
      }
      if (!this._reversed) {
        s = true;
        r = "onComplete";
        n = n || this._timeline.autoRemoveChildren;
      }
      if (C === 0 && (this._initted || !this.vars.lazy || n)) {
        if (this._startTime === this._timeline._duration) {
          e = 0;
        }
        if ((f < 0 || e <= 0 && e >= -1e-7 || f === 1e-10 && this.data !== "isPause") && f !== e) {
          n = true;
          if (f > 1e-10) {
            r = "onReverseComplete";
          }
        }
        this._rawPrevTime = d = !t || e || f === e ? e : 1e-10;
      }
    } else if (e < 1e-7) {
      this._totalTime = this._time = this._cycle = 0;
      this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
      if (g !== 0 || C === 0 && f > 0) {
        r = "onReverseComplete";
        s = this._reversed;
      }
      if (e < 0) {
        this._active = false;
        if (C === 0 && (this._initted || !this.vars.lazy || n)) {
          if (f >= 0) {
            n = true;
          }
          this._rawPrevTime = d = !t || e || f === e ? e : 1e-10;
        }
      }
      if (!this._initted) {
        n = true;
      }
    } else {
      this._totalTime = this._time = e;
      if (this._repeat !== 0) {
        l = C + this._repeatDelay;
        this._cycle = this._totalTime / l >> 0;
        if (this._cycle !== 0 && this._cycle === this._totalTime / l && g <= e) {
          this._cycle--;
        }
        this._time = this._totalTime - this._cycle * l;
        if (this._yoyo && (this._cycle & 1) != 0) {
          this._time = C - this._time;
          if (m = this._yoyoEase || this.vars.yoyoEase) {
            if (!this._yoyoEase) {
              if (m !== true || this._initted) {
                this._yoyoEase = m = m === true ? this._ease : m instanceof i.Ease ? m : i.Ease.map[m];
              } else {
                m = this.vars.ease;
                this._yoyoEase = m = m ? m instanceof i.Ease ? m : typeof m == "function" ? new i.Ease(m, this.vars.easeParams) : i.Ease.map[m] || i.default.defaultEase : i.default.defaultEase;
              }
            }
            this.ratio = m ? 1 - m.getRatio((C - this._time) / C) : 0;
          }
        }
        if (this._time > C) {
          this._time = C;
        } else if (this._time < 0) {
          this._time = 0;
        }
      }
      if (this._easeType && !m) {
        u = this._time / C;
        c = this._easeType;
        _ = this._easePower;
        if (c === 1 || c === 3 && u >= 0.5) {
          u = 1 - u;
        }
        if (c === 3) {
          u *= 2;
        }
        if (_ === 1) {
          u *= u;
        } else if (_ === 2) {
          u *= u * u;
        } else if (_ === 3) {
          u *= u * u * u;
        } else if (_ === 4) {
          u *= u * u * u * u;
        }
        if (c === 1) {
          this.ratio = 1 - u;
        } else if (c === 2) {
          this.ratio = u;
        } else if (this._time / C < 0.5) {
          this.ratio = u / 2;
        } else {
          this.ratio = 1 - u / 2;
        }
      } else if (!m) {
        this.ratio = this._ease.getRatio(this._time / C);
      }
    }
    if (p !== this._time || n || E !== this._cycle) {
      if (!this._initted) {
        this._init();
        if (!this._initted || this._gc) {
          return;
        }
        if (!n && this._firstPT && (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration)) {
          this._time = p;
          this._totalTime = g;
          this._rawPrevTime = f;
          this._cycle = E;
          a.lazyTweens.push(this);
          this._lazy = [e, t];
          return;
        }
        if (!this._time || s || m) {
          if (s && this._ease._calcEnd && !m) {
            this.ratio = this._ease.getRatio(this._time === 0 ? 0 : 1);
          }
        } else {
          this.ratio = this._ease.getRatio(this._time / C);
        }
      }
      if (this._lazy !== false) {
        this._lazy = false;
      }
      if (!this._active) {
        if (!this._paused && this._time !== p && e >= 0) {
          this._active = true;
        }
      }
      if (g === 0) {
        if (this._initted === 2 && e > 0) {
          this._init();
        }
        if (this._startAt) {
          if (e >= 0) {
            this._startAt.render(e, true, n);
          } else {
            r ||= "_dummyGS";
          }
        }
        if (this.vars.onStart) {
          if ((this._totalTime !== 0 || C === 0) && !t) {
            this._callback("onStart");
          }
        }
      }
      o = this._firstPT;
      while (o) {
        if (o.f) {
          o.t[o.p](o.c * this.ratio + o.s);
        } else {
          o.t[o.p] = o.c * this.ratio + o.s;
        }
        o = o._next;
      }
      if (this._onUpdate) {
        if (e < 0 && this._startAt && this._startTime) {
          this._startAt.render(e, true, n);
        }
        if (!t) {
          if (this._totalTime !== g || r) {
            this._callback("onUpdate");
          }
        }
      }
      if (this._cycle !== E) {
        if (!t && !this._gc) {
          if (this.vars.onRepeat) {
            this._callback("onRepeat");
          }
        }
      }
      if (r) {
        if (!this._gc || !!n) {
          if (e < 0 && this._startAt && !this._onUpdate && this._startTime) {
            this._startAt.render(e, true, n);
          }
          if (s) {
            if (this._timeline.autoRemoveChildren) {
              this._enabled(false, false);
            }
            this._active = false;
          }
          if (!t && this.vars[r]) {
            this._callback(r);
          }
          if (C === 0 && this._rawPrevTime === 1e-10 && d !== 1e-10) {
            this._rawPrevTime = 0;
          }
        }
      }
    } else if (g !== this._totalTime && this._onUpdate) {
      if (!t) {
        this._callback("onUpdate");
      }
    }
  };
  n.to = function (e, t, i) {
    return new n(e, t, i);
  };
  n.from = function (e, t, i) {
    i.runBackwards = true;
    i.immediateRender = i.immediateRender != 0;
    return new n(e, t, i);
  };
  n.fromTo = function (e, t, i, a) {
    a.startAt = i;
    a.immediateRender = a.immediateRender != 0 && i.immediateRender != 0;
    return new n(e, t, a);
  };
  n.staggerTo = n.allTo = function (a, o, u, c, _, d, m) {
    c = c || 0;
    var h;
    var p;
    var g;
    var E;
    var C = 0;
    var f = [];
    function T() {
      if (u.onComplete) {
        u.onComplete.apply(u.onCompleteScope || this, arguments);
      }
      _.apply(m || u.callbackScope || this, d || l);
    }
    var S = u.cycle;
    var y = u.startAt && u.startAt.cycle;
    if (!r(a)) {
      if (typeof a == "string") {
        a = i.default.selector(a) || a;
      }
      if (s(a)) {
        a = e(a);
      }
    }
    a = a || [];
    if (c < 0) {
      (a = e(a)).reverse();
      c *= -1;
    }
    h = a.length - 1;
    g = 0;
    for (; g <= h; g++) {
      p = {};
      for (E in u) {
        p[E] = u[E];
      }
      if (S) {
        t(p, a, g);
        if (p.duration != null) {
          o = p.duration;
          delete p.duration;
        }
      }
      if (y) {
        y = p.startAt = {};
        for (E in u.startAt) {
          y[E] = u.startAt[E];
        }
        t(p.startAt, a, g);
      }
      p.delay = C + (p.delay || 0);
      if (g === h && _) {
        p.onComplete = T;
      }
      f[g] = new n(a[g], o, p);
      C += c;
    }
    return f;
  };
  n.staggerFrom = n.allFrom = function (e, t, i, a, s, r, o) {
    i.runBackwards = true;
    i.immediateRender = i.immediateRender != 0;
    return n.staggerTo(e, t, i, a, s, r, o);
  };
  n.staggerFromTo = n.allFromTo = function (e, t, i, a, s, r, o, l) {
    a.startAt = i;
    a.immediateRender = a.immediateRender != 0 && i.immediateRender != 0;
    return n.staggerTo(e, t, a, s, r, o, l);
  };
  n.delayedCall = function (e, t, i, a, s) {
    return new n(t, 0, {
      delay: e,
      onComplete: t,
      onCompleteParams: i,
      callbackScope: a,
      onReverseComplete: t,
      onReverseCompleteParams: i,
      immediateRender: false,
      useFrames: s,
      overwrite: 0
    });
  };
  n.set = function (e, t) {
    return new n(e, 0, t);
  };
  n.isTweening = function (e) {
    return i.default.getTweensOf(e, true).length > 0;
  };
  function u(e, t) {
    var n = [];
    for (var a = 0, s = e._first; s;) {
      if (s instanceof i.default) {
        n[a++] = s;
      } else {
        if (t) {
          n[a++] = s;
        }
        a = (n = n.concat(u(s, t))).length;
      }
      s = s._next;
    }
    return n;
  }
  var c = n.getAllTweens = function (e) {
    return u(i.Animation._rootTimeline, e).concat(u(i.Animation._rootFramesTimeline, e));
  };
  n.killAll = function (e, t, n, a) {
    if (t == null) {
      t = true;
    }
    if (n == null) {
      n = true;
    }
    var s;
    var r;
    var o;
    var l = c(a != 0);
    var u = l.length;
    var _ = t && n && a;
    for (o = 0; o < u; o++) {
      r = l[o];
      if (_ || r instanceof i.SimpleTimeline || (s = r.target === r.vars.onComplete) && n || t && !s) {
        if (e) {
          r.totalTime(r._reversed ? 0 : r.totalDuration());
        } else {
          r._enabled(false, false);
        }
      }
    }
  };
  n.killChildTweensOf = function (t, o) {
    if (t != null) {
      var l;
      var u;
      var c;
      var _;
      var d;
      var m = a.tweenLookup;
      if (typeof t == "string") {
        t = i.default.selector(t) || t;
      }
      if (s(t)) {
        t = e(t);
      }
      if (r(t)) {
        for (_ = t.length; --_ > -1;) {
          n.killChildTweensOf(t[_], o);
        }
      } else {
        l = [];
        for (c in m) {
          for (u = m[c].target.parentNode; u;) {
            if (u === t) {
              l = l.concat(m[c].tweens);
            }
            u = u.parentNode;
          }
        }
        d = l.length;
        _ = 0;
        for (; _ < d; _++) {
          if (o) {
            l[_].totalTime(l[_].totalDuration());
          }
          l[_]._enabled(false, false);
        }
      }
    }
  };
  function _(e, t, n, a) {
    t = t !== false;
    n = n !== false;
    var s;
    var r;
    var o = c(a = a !== false);
    var l = t && n && a;
    for (var u = o.length; --u > -1;) {
      r = o[u];
      if (l || r instanceof i.SimpleTimeline || (s = r.target === r.vars.onComplete) && n || t && !s) {
        r.paused(e);
      }
    }
  }
  n.pauseAll = function (e, t, n) {
    _(true, e, t, n);
  };
  n.resumeAll = function (e, t, n) {
    _(false, e, t, n);
  };
  n.globalTimeScale = function (e) {
    var t = i.Animation._rootTimeline;
    var n = i.default.ticker.time;
    if (arguments.length) {
      e = e || 1e-10;
      t._startTime = n - (n - t._startTime) * t._timeScale / e;
      t = i.Animation._rootFramesTimeline;
      n = i.default.ticker.frame;
      t._startTime = n - (n - t._startTime) * t._timeScale / e;
      t._timeScale = i.Animation._rootTimeline._timeScale = e;
      return e;
    } else {
      return t._timeScale;
    }
  };
  o.progress = function (e, t) {
    if (arguments.length) {
      return this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) != 0 ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t);
    } else {
      return this._time / this.duration();
    }
  };
  o.totalProgress = function (e, t) {
    if (arguments.length) {
      return this.totalTime(this.totalDuration() * e, t);
    } else {
      return this._totalTime / this.totalDuration();
    }
  };
  o.time = function (e, t) {
    if (arguments.length) {
      if (this._dirty) {
        this.totalDuration();
      }
      if (e > this._duration) {
        e = this._duration;
      }
      if (this._yoyo && (this._cycle & 1) != 0) {
        e = this._duration - e + this._cycle * (this._duration + this._repeatDelay);
      } else if (this._repeat !== 0) {
        e += this._cycle * (this._duration + this._repeatDelay);
      }
      return this.totalTime(e, t);
    } else {
      return this._time;
    }
  };
  o.duration = function (e) {
    if (arguments.length) {
      return i.Animation.prototype.duration.call(this, e);
    } else {
      return this._duration;
    }
  };
  o.totalDuration = function (e) {
    if (arguments.length) {
      if (this._repeat === -1) {
        return this;
      } else {
        return this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1));
      }
    } else {
      if (this._dirty) {
        this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat;
        this._dirty = false;
      }
      return this._totalDuration;
    }
  };
  o.repeat = function (e) {
    if (arguments.length) {
      this._repeat = e;
      return this._uncache(true);
    } else {
      return this._repeat;
    }
  };
  o.repeatDelay = function (e) {
    if (arguments.length) {
      this._repeatDelay = e;
      return this._uncache(true);
    } else {
      return this._repeatDelay;
    }
  };
  o.yoyo = function (e) {
    if (arguments.length) {
      this._yoyo = e;
      return this;
    } else {
      return this._yoyo;
    }
  };
  return n;
}, true);
export var TweenMax = i.globals.TweenMax;
export var TweenMaxBase = TweenMax;