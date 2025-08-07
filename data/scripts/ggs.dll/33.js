import * as i from "./1.js";
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
i._gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function () {
  function e(e) {
    i.SimpleTimeline.call(this, e);
    this._labels = {};
    this.autoRemoveChildren = this.vars.autoRemoveChildren === true;
    this.smoothChildTiming = this.vars.smoothChildTiming === true;
    this._sortChildren = true;
    this._onUpdate = this.vars.onUpdate;
    var t;
    var n;
    var a = this.vars;
    for (n in a) {
      t = a[n];
      if (s(t) && t.join("").indexOf("{self}") !== -1) {
        a[n] = this._swapSelfInParams(t);
      }
    }
    if (s(a.tweens)) {
      this.add(a.tweens, 0, a.align, a.stagger);
    }
  }
  var t = i.default._internals;
  var n = e._internals = {};
  var a = t.isSelector;
  var s = t.isArray;
  var r = t.lazyTweens;
  var o = t.lazyRender;
  var l = i._gsScope._gsDefine.globals;
  function u(e) {
    var t;
    var n = {};
    for (t in e) {
      n[t] = e[t];
    }
    return n;
  }
  function c(e, t, n) {
    var i;
    var a;
    var s = e.cycle;
    for (i in s) {
      a = s[i];
      e[i] = typeof a == "function" ? a(n, t[n]) : a[n % a.length];
    }
    delete e.cycle;
  }
  var _ = n.pauseCallback = function () {};
  function d(e) {
    var t;
    var n = [];
    var i = e.length;
    for (t = 0; t !== i; n.push(e[t++]));
    return n;
  }
  var m = e.prototype = new i.SimpleTimeline();
  e.version = "2.0.2";
  m.constructor = e;
  m.kill()._gc = m._forcingPlayhead = m._hasPause = false;
  m.to = function (e, t, n, a) {
    var s = n.repeat && l.TweenMax || i.default;
    if (t) {
      return this.add(new s(e, t, n), a);
    } else {
      return this.set(e, n, a);
    }
  };
  m.from = function (e, t, n, a) {
    return this.add((n.repeat && l.TweenMax || i.default).from(e, t, n), a);
  };
  m.fromTo = function (e, t, n, a, s) {
    var r = a.repeat && l.TweenMax || i.default;
    if (t) {
      return this.add(r.fromTo(e, t, n, a), s);
    } else {
      return this.set(e, a, s);
    }
  };
  m.staggerTo = function (t, n, s, r, o, l, _, m) {
    var h;
    var p;
    var g = new e({
      onComplete: l,
      onCompleteParams: _,
      callbackScope: m,
      smoothChildTiming: this.smoothChildTiming
    });
    var E = s.cycle;
    if (typeof t == "string") {
      t = i.default.selector(t) || t;
    }
    if (a(t = t || [])) {
      t = d(t);
    }
    if ((r = r || 0) < 0) {
      (t = d(t)).reverse();
      r *= -1;
    }
    p = 0;
    for (; p < t.length; p++) {
      if ((h = u(s)).startAt) {
        h.startAt = u(h.startAt);
        if (h.startAt.cycle) {
          c(h.startAt, t, p);
        }
      }
      if (E) {
        c(h, t, p);
        if (h.duration != null) {
          n = h.duration;
          delete h.duration;
        }
      }
      g.to(t[p], n, h, p * r);
    }
    return this.add(g, o);
  };
  m.staggerFrom = function (e, t, n, i, a, s, r, o) {
    n.immediateRender = n.immediateRender != 0;
    n.runBackwards = true;
    return this.staggerTo(e, t, n, i, a, s, r, o);
  };
  m.staggerFromTo = function (e, t, n, i, a, s, r, o, l) {
    i.startAt = n;
    i.immediateRender = i.immediateRender != 0 && n.immediateRender != 0;
    return this.staggerTo(e, t, i, a, s, r, o, l);
  };
  m.call = function (e, t, n, a) {
    return this.add(i.default.delayedCall(0, e, t, n), a);
  };
  m.set = function (e, t, n) {
    n = this._parseTimeOrLabel(n, 0, true);
    if (t.immediateRender == null) {
      t.immediateRender = n === this._time && !this._paused;
    }
    return this.add(new i.default(e, 0, t), n);
  };
  e.exportRoot = function (t, n) {
    if ((t = t || {}).smoothChildTiming == null) {
      t.smoothChildTiming = true;
    }
    var a;
    var s;
    var r;
    var o;
    var l = new e(t);
    var u = l._timeline;
    if (n == null) {
      n = true;
    }
    u._remove(l, true);
    l._startTime = 0;
    l._rawPrevTime = l._time = l._totalTime = u._time;
    r = u._first;
    while (r) {
      o = r._next;
      if (!n || !(r instanceof i.default) || r.target !== r.vars.onComplete) {
        if ((s = r._startTime - r._delay) < 0) {
          a = 1;
        }
        l.add(r, s);
      }
      r = o;
    }
    u.add(l, 0);
    if (a) {
      l.totalDuration();
    }
    return l;
  };
  m.add = function (t, n, a, r) {
    var o;
    var l;
    var u;
    var c;
    var _;
    var d;
    if (typeof n != "number") {
      n = this._parseTimeOrLabel(n, 0, true, t);
    }
    if (!(t instanceof i.Animation)) {
      if (t instanceof Array || t && t.push && s(t)) {
        a = a || "normal";
        r = r || 0;
        o = n;
        l = t.length;
        u = 0;
        for (; u < l; u++) {
          if (s(c = t[u])) {
            c = new e({
              tweens: c
            });
          }
          this.add(c, o);
          if (typeof c != "string" && typeof c != "function") {
            if (a === "sequence") {
              o = c._startTime + c.totalDuration() / c._timeScale;
            } else if (a === "start") {
              c._startTime -= c.delay();
            }
          }
          o += r;
        }
        return this._uncache(true);
      }
      if (typeof t == "string") {
        return this.addLabel(t, n);
      }
      if (typeof t != "function") {
        throw "Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string.";
      }
      t = i.default.delayedCall(0, t);
    }
    i.SimpleTimeline.prototype.add.call(this, t, n);
    if (t._time) {
      o = Math.max(0, Math.min(t.totalDuration(), (this.rawTime() - t._startTime) * t._timeScale));
      if (Math.abs(o - t._totalTime) > 0.00001) {
        t.render(o, false, false);
      }
    }
    if ((this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) {
      for (d = (_ = this).rawTime() > t._startTime; _._timeline;) {
        if (d && _._timeline.smoothChildTiming) {
          _.totalTime(_._totalTime, true);
        } else if (_._gc) {
          _._enabled(true, false);
        }
        _ = _._timeline;
      }
    }
    return this;
  };
  m.remove = function (e) {
    if (e instanceof i.Animation) {
      this._remove(e, false);
      var t = e._timeline = e.vars.useFrames ? i.Animation._rootFramesTimeline : i.Animation._rootTimeline;
      e._startTime = (e._paused ? e._pauseTime : t._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale;
      return this;
    }
    if (e instanceof Array || e && e.push && s(e)) {
      for (var n = e.length; --n > -1;) {
        this.remove(e[n]);
      }
      return this;
    }
    if (typeof e == "string") {
      return this.removeLabel(e);
    } else {
      return this.kill(null, e);
    }
  };
  m._remove = function (e, t) {
    i.SimpleTimeline.prototype._remove.call(this, e, t);
    if (this._last) {
      if (this._time > this.duration()) {
        this._time = this._duration;
        this._totalTime = this._totalDuration;
      }
    } else {
      this._time = this._totalTime = this._duration = this._totalDuration = 0;
    }
    return this;
  };
  m.append = function (e, t) {
    return this.add(e, this._parseTimeOrLabel(null, t, true, e));
  };
  m.insert = m.insertMultiple = function (e, t, n, i) {
    return this.add(e, t || 0, n, i);
  };
  m.appendMultiple = function (e, t, n, i) {
    return this.add(e, this._parseTimeOrLabel(null, t, true, e), n, i);
  };
  m.addLabel = function (e, t) {
    this._labels[e] = this._parseTimeOrLabel(t);
    return this;
  };
  m.addPause = function (e, t, n, a) {
    var s = i.default.delayedCall(0, _, n, a || this);
    s.vars.onComplete = s.vars.onReverseComplete = t;
    s.data = "isPause";
    this._hasPause = true;
    return this.add(s, e);
  };
  m.removeLabel = function (e) {
    delete this._labels[e];
    return this;
  };
  m.getLabelTime = function (e) {
    return this._labels[e] ?? -1;
  };
  m._parseTimeOrLabel = function (e, t, n, a) {
    var r;
    var o;
    if (a instanceof i.Animation && a.timeline === this) {
      this.remove(a);
    } else if (a && (a instanceof Array || a.push && s(a))) {
      for (o = a.length; --o > -1;) {
        if (a[o] instanceof i.Animation && a[o].timeline === this) {
          this.remove(a[o]);
        }
      }
    }
    r = typeof e != "number" || t ? this.duration() > 99999999999 ? this.recent().endTime(false) : this._duration : 0;
    if (typeof t == "string") {
      return this._parseTimeOrLabel(t, n && typeof e == "number" && this._labels[t] == null ? e - r : 0, n);
    }
    t = t || 0;
    if (typeof e != "string" || !isNaN(e) && this._labels[e] == null) {
      if (e == null) {
        e = r;
      }
    } else {
      if ((o = e.indexOf("=")) === -1) {
        if (this._labels[e] == null) {
          if (n) {
            return this._labels[e] = r + t;
          } else {
            return t;
          }
        } else {
          return this._labels[e] + t;
        }
      }
      t = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1));
      e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : r;
    }
    return Number(e) + t;
  };
  m.seek = function (e, t) {
    return this.totalTime(typeof e == "number" ? e : this._parseTimeOrLabel(e), t !== false);
  };
  m.stop = function () {
    return this.paused(true);
  };
  m.gotoAndPlay = function (e, t) {
    return this.play(e, t);
  };
  m.gotoAndStop = function (e, t) {
    return this.pause(e, t);
  };
  m.render = function (e, t, n) {
    if (this._gc) {
      this._enabled(true, false);
    }
    var i;
    var a;
    var s;
    var l;
    var u;
    var c;
    var _;
    var d = this._time;
    var m = this._dirty ? this.totalDuration() : this._totalDuration;
    var h = this._startTime;
    var p = this._timeScale;
    var g = this._paused;
    if (d !== this._time) {
      e += this._time - d;
    }
    if (e >= m - 1e-7 && e >= 0) {
      this._totalTime = this._time = m;
      if (!this._reversed && !this._hasPausedChild()) {
        a = true;
        l = "onComplete";
        u = !!this._timeline.autoRemoveChildren;
        if (this._duration === 0 && (e <= 0 && e >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === 1e-10) && this._rawPrevTime !== e && this._first) {
          u = true;
          if (this._rawPrevTime > 1e-10) {
            l = "onReverseComplete";
          }
        }
      }
      this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : 1e-10;
      e = m + 0.0001;
    } else if (e < 1e-7) {
      this._totalTime = this._time = 0;
      if (d !== 0 || this._duration === 0 && this._rawPrevTime !== 1e-10 && (this._rawPrevTime > 0 || e < 0 && this._rawPrevTime >= 0)) {
        l = "onReverseComplete";
        a = this._reversed;
      }
      if (e < 0) {
        this._active = false;
        if (this._timeline.autoRemoveChildren && this._reversed) {
          u = a = true;
          l = "onReverseComplete";
        } else if (this._rawPrevTime >= 0 && this._first) {
          u = true;
        }
        this._rawPrevTime = e;
      } else {
        this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : 1e-10;
        if (e === 0 && a) {
          for (i = this._first; i && i._startTime === 0;) {
            if (!i._duration) {
              a = false;
            }
            i = i._next;
          }
        }
        e = 0;
        if (!this._initted) {
          u = true;
        }
      }
    } else {
      if (this._hasPause && !this._forcingPlayhead && !t) {
        if (e >= d) {
          for (i = this._first; i && i._startTime <= e && !c;) {
            if (!i._duration && i.data === "isPause" && !i.ratio && (i._startTime !== 0 || this._rawPrevTime !== 0)) {
              c = i;
            }
            i = i._next;
          }
        } else {
          for (i = this._last; i && i._startTime >= e && !c;) {
            if (!i._duration) {
              if (i.data === "isPause" && i._rawPrevTime > 0) {
                c = i;
              }
            }
            i = i._prev;
          }
        }
        if (c) {
          this._time = e = c._startTime;
          this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay);
        }
      }
      this._totalTime = this._time = this._rawPrevTime = e;
    }
    if (this._time !== d && this._first || n || u || c) {
      this._initted ||= true;
      if (!this._active) {
        if (!this._paused && this._time !== d && e > 0) {
          this._active = true;
        }
      }
      if (d === 0 && this.vars.onStart) {
        if ((this._time !== 0 || !this._duration) && !t) {
          this._callback("onStart");
        }
      }
      if ((_ = this._time) >= d) {
        for (i = this._first; i && (s = i._next, _ === this._time && (!this._paused || g));) {
          if (i._active || i._startTime <= _ && !i._paused && !i._gc) {
            if (c === i) {
              this.pause();
            }
            if (i._reversed) {
              i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n);
            } else {
              i.render((e - i._startTime) * i._timeScale, t, n);
            }
          }
          i = s;
        }
      } else {
        for (i = this._last; i && (s = i._prev, _ === this._time && (!this._paused || g));) {
          if (i._active || i._startTime <= d && !i._paused && !i._gc) {
            if (c === i) {
              for (c = i._prev; c && c.endTime() > this._time;) {
                c.render(c._reversed ? c.totalDuration() - (e - c._startTime) * c._timeScale : (e - c._startTime) * c._timeScale, t, n);
                c = c._prev;
              }
              c = null;
              this.pause();
            }
            if (i._reversed) {
              i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n);
            } else {
              i.render((e - i._startTime) * i._timeScale, t, n);
            }
          }
          i = s;
        }
      }
      if (this._onUpdate) {
        if (!t) {
          if (r.length) {
            o();
          }
          this._callback("onUpdate");
        }
      }
      if (l) {
        if (!this._gc && (h === this._startTime || p !== this._timeScale)) {
          if (this._time === 0 || m >= this.totalDuration()) {
            if (a) {
              if (r.length) {
                o();
              }
              if (this._timeline.autoRemoveChildren) {
                this._enabled(false, false);
              }
              this._active = false;
            }
            if (!t && this.vars[l]) {
              this._callback(l);
            }
          }
        }
      }
    }
  };
  m._hasPausedChild = function () {
    for (var t = this._first; t;) {
      if (t._paused || t instanceof e && t._hasPausedChild()) {
        return true;
      }
      t = t._next;
    }
    return false;
  };
  m.getChildren = function (e, t, n, a) {
    a = a || -9999999999;
    var s = [];
    for (var r = this._first, o = 0; r;) {
      if (!(r._startTime < a)) {
        if (r instanceof i.default) {
          if (t !== false) {
            s[o++] = r;
          }
        } else {
          if (n !== false) {
            s[o++] = r;
          }
          if (e !== false) {
            o = (s = s.concat(r.getChildren(true, t, n))).length;
          }
        }
      }
      r = r._next;
    }
    return s;
  };
  m.getTweensOf = function (e, t) {
    var n;
    var a;
    var s = this._gc;
    var r = [];
    var o = 0;
    if (s) {
      this._enabled(true, true);
    }
    a = (n = i.default.getTweensOf(e)).length;
    while (--a > -1) {
      if (n[a].timeline === this || t && this._contains(n[a])) {
        r[o++] = n[a];
      }
    }
    if (s) {
      this._enabled(false, true);
    }
    return r;
  };
  m.recent = function () {
    return this._recent;
  };
  m._contains = function (e) {
    for (var t = e.timeline; t;) {
      if (t === this) {
        return true;
      }
      t = t.timeline;
    }
    return false;
  };
  m.shiftChildren = function (e, t, n) {
    n = n || 0;
    var i;
    for (var a = this._first, s = this._labels; a;) {
      if (a._startTime >= n) {
        a._startTime += e;
      }
      a = a._next;
    }
    if (t) {
      for (i in s) {
        if (s[i] >= n) {
          s[i] += e;
        }
      }
    }
    return this._uncache(true);
  };
  m._kill = function (e, t) {
    if (!e && !t) {
      return this._enabled(false, false);
    }
    var n = t ? this.getTweensOf(t) : this.getChildren(true, true, false);
    for (var i = n.length, a = false; --i > -1;) {
      if (n[i]._kill(e, t)) {
        a = true;
      }
    }
    return a;
  };
  m.clear = function (e) {
    var t = this.getChildren(false, true, true);
    var n = t.length;
    for (this._time = this._totalTime = 0; --n > -1;) {
      t[n]._enabled(false, false);
    }
    if (e !== false) {
      this._labels = {};
    }
    return this._uncache(true);
  };
  m.invalidate = function () {
    for (var e = this._first; e;) {
      e.invalidate();
      e = e._next;
    }
    return i.Animation.prototype.invalidate.call(this);
  };
  m._enabled = function (e, t) {
    if (e === this._gc) {
      for (var n = this._first; n;) {
        n._enabled(e, true);
        n = n._next;
      }
    }
    return i.SimpleTimeline.prototype._enabled.call(this, e, t);
  };
  m.totalTime = function (e, t, n) {
    this._forcingPlayhead = true;
    var a = i.Animation.prototype.totalTime.apply(this, arguments);
    this._forcingPlayhead = false;
    return a;
  };
  m.duration = function (e) {
    if (arguments.length) {
      if (this.duration() !== 0 && e !== 0) {
        this.timeScale(this._duration / e);
      }
      return this;
    } else {
      if (this._dirty) {
        this.totalDuration();
      }
      return this._duration;
    }
  };
  m.totalDuration = function (e) {
    if (!arguments.length) {
      if (this._dirty) {
        var t;
        var n;
        for (var i = 0, a = this._last, s = 999999999999; a;) {
          t = a._prev;
          if (a._dirty) {
            a.totalDuration();
          }
          if (a._startTime > s && this._sortChildren && !a._paused && !this._calculatingDuration) {
            this._calculatingDuration = 1;
            this.add(a, a._startTime - a._delay);
            this._calculatingDuration = 0;
          } else {
            s = a._startTime;
          }
          if (a._startTime < 0 && !a._paused) {
            i -= a._startTime;
            if (this._timeline.smoothChildTiming) {
              this._startTime += a._startTime / this._timeScale;
              this._time -= a._startTime;
              this._totalTime -= a._startTime;
              this._rawPrevTime -= a._startTime;
            }
            this.shiftChildren(-a._startTime, false, -9999999999);
            s = 0;
          }
          if ((n = a._startTime + a._totalDuration / a._timeScale) > i) {
            i = n;
          }
          a = t;
        }
        this._duration = this._totalDuration = i;
        this._dirty = false;
      }
      return this._totalDuration;
    }
    if (e && this.totalDuration()) {
      return this.timeScale(this._totalDuration / e);
    } else {
      return this;
    }
  };
  m.paused = function (e) {
    if (!e) {
      for (var t = this._first, n = this._time; t;) {
        if (t._startTime === n && t.data === "isPause") {
          t._rawPrevTime = 0;
        }
        t = t._next;
      }
    }
    return i.Animation.prototype.paused.apply(this, arguments);
  };
  m.usesFrames = function () {
    for (var e = this._timeline; e._timeline;) {
      e = e._timeline;
    }
    return e === i.Animation._rootFramesTimeline;
  };
  m.rawTime = function (e) {
    if (e && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1)) {
      return this._totalTime % (this._duration + this._repeatDelay);
    } else if (this._paused) {
      return this._totalTime;
    } else {
      return (this._timeline.rawTime(e) - this._startTime) * this._timeScale;
    }
  };
  return e;
}, true);
export var TimelineLite = i.globals.TimelineLite;