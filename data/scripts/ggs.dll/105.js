import * as i from "./1.js";
import * as a from "./33.js";
export let TimelineLite = a.default;
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
i._gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function () {
  function e(e) {
    a.default.call(this, e);
    this._repeat = this.vars.repeat || 0;
    this._repeatDelay = this.vars.repeatDelay || 0;
    this._cycle = 0;
    this._yoyo = this.vars.yoyo === true;
    this._dirty = true;
  }
  var t = i.default._internals;
  var n = t.lazyTweens;
  var s = t.lazyRender;
  var r = i._gsScope._gsDefine.globals;
  var o = new i.Ease(null, null, 1, 0);
  var l = e.prototype = new a.default();
  l.constructor = e;
  l.kill()._gc = false;
  e.version = "2.0.2";
  l.invalidate = function () {
    this._yoyo = this.vars.yoyo === true;
    this._repeat = this.vars.repeat || 0;
    this._repeatDelay = this.vars.repeatDelay || 0;
    this._uncache(true);
    return a.default.prototype.invalidate.call(this);
  };
  l.addCallback = function (e, t, n, a) {
    return this.add(i.default.delayedCall(0, e, n, a), t);
  };
  l.removeCallback = function (e, t) {
    if (e) {
      if (t == null) {
        this._kill(null, e);
      } else {
        var n = this.getTweensOf(e, false);
        for (var i = n.length, a = this._parseTimeOrLabel(t); --i > -1;) {
          if (n[i]._startTime === a) {
            n[i]._enabled(false, false);
          }
        }
      }
    }
    return this;
  };
  l.removePause = function (e) {
    return this.removeCallback(a.default._internals.pauseCallback, e);
  };
  l.tweenTo = function (e, t) {
    t = t || {};
    var n;
    var a;
    var s;
    var l = {
      ease: o,
      useFrames: this.usesFrames(),
      immediateRender: false,
      lazy: false
    };
    var u = t.repeat && r.TweenMax || i.default;
    for (a in t) {
      l[a] = t[a];
    }
    l.time = this._parseTimeOrLabel(e);
    n = Math.abs(Number(l.time) - this._time) / this._timeScale || 0.001;
    s = new u(this, n, l);
    l.onStart = function () {
      s.target.paused(true);
      if (s.vars.time !== s.target.time() && n === s.duration() && !s.isFromTo) {
        s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale).render(s.time(), true, true);
      }
      if (t.onStart) {
        t.onStart.apply(t.onStartScope || t.callbackScope || s, t.onStartParams || []);
      }
    };
    return s;
  };
  l.tweenFromTo = function (e, t, n) {
    n = n || {};
    e = this._parseTimeOrLabel(e);
    n.startAt = {
      onComplete: this.seek,
      onCompleteParams: [e],
      callbackScope: this
    };
    n.immediateRender = n.immediateRender !== false;
    var i = this.tweenTo(t, n);
    i.isFromTo = 1;
    return i.duration(Math.abs(i.vars.time - e) / this._timeScale || 0.001);
  };
  l.render = function (e, t, i) {
    if (this._gc) {
      this._enabled(true, false);
    }
    var a;
    var r;
    var o;
    var l;
    var u;
    var c;
    var _;
    var d;
    var m = this._time;
    var h = this._dirty ? this.totalDuration() : this._totalDuration;
    var p = this._duration;
    var g = this._totalTime;
    var E = this._startTime;
    var C = this._timeScale;
    var f = this._rawPrevTime;
    var T = this._paused;
    var S = this._cycle;
    if (m !== this._time) {
      e += this._time - m;
    }
    if (e >= h - 1e-7 && e >= 0) {
      if (!this._locked) {
        this._totalTime = h;
        this._cycle = this._repeat;
      }
      if (!this._reversed && !this._hasPausedChild()) {
        r = true;
        l = "onComplete";
        u = !!this._timeline.autoRemoveChildren;
        if (this._duration === 0 && (e <= 0 && e >= -1e-7 || f < 0 || f === 1e-10) && f !== e && this._first) {
          u = true;
          if (f > 1e-10) {
            l = "onReverseComplete";
          }
        }
      }
      this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : 1e-10;
      if (this._yoyo && (this._cycle & 1) != 0) {
        this._time = e = 0;
      } else {
        this._time = p;
        e = p + 0.0001;
      }
    } else if (e < 1e-7) {
      if (!this._locked) {
        this._totalTime = this._cycle = 0;
      }
      this._time = 0;
      if (m !== 0 || p === 0 && f !== 1e-10 && (f > 0 || e < 0 && f >= 0) && !this._locked) {
        l = "onReverseComplete";
        r = this._reversed;
      }
      if (e < 0) {
        this._active = false;
        if (this._timeline.autoRemoveChildren && this._reversed) {
          u = r = true;
          l = "onReverseComplete";
        } else if (f >= 0 && this._first) {
          u = true;
        }
        this._rawPrevTime = e;
      } else {
        this._rawPrevTime = p || !t || e || this._rawPrevTime === e ? e : 1e-10;
        if (e === 0 && r) {
          for (a = this._first; a && a._startTime === 0;) {
            if (!a._duration) {
              r = false;
            }
            a = a._next;
          }
        }
        e = 0;
        if (!this._initted) {
          u = true;
        }
      }
    } else {
      if (p === 0 && f < 0) {
        u = true;
      }
      this._time = this._rawPrevTime = e;
      if (!this._locked) {
        this._totalTime = e;
        if (this._repeat !== 0) {
          c = p + this._repeatDelay;
          this._cycle = this._totalTime / c >> 0;
          if (this._cycle !== 0 && this._cycle === this._totalTime / c && g <= e) {
            this._cycle--;
          }
          this._time = this._totalTime - this._cycle * c;
          if (this._yoyo && (this._cycle & 1) != 0) {
            this._time = p - this._time;
          }
          if (this._time > p) {
            this._time = p;
            e = p + 0.0001;
          } else if (this._time < 0) {
            this._time = e = 0;
          } else {
            e = this._time;
          }
        }
      }
      if (this._hasPause && !this._forcingPlayhead && !t) {
        if ((e = this._time) >= m || this._repeat && S !== this._cycle) {
          for (a = this._first; a && a._startTime <= e && !_;) {
            if (!a._duration && a.data === "isPause" && !a.ratio && (a._startTime !== 0 || this._rawPrevTime !== 0)) {
              _ = a;
            }
            a = a._next;
          }
        } else {
          for (a = this._last; a && a._startTime >= e && !_;) {
            if (!a._duration) {
              if (a.data === "isPause" && a._rawPrevTime > 0) {
                _ = a;
              }
            }
            a = a._prev;
          }
        }
        if (_ && _._startTime < p) {
          this._time = e = _._startTime;
          this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay);
        }
      }
    }
    if (this._cycle !== S && !this._locked) {
      var y = this._yoyo && (S & 1) != 0;
      var I = y === (this._yoyo && (this._cycle & 1) != 0);
      var v = this._totalTime;
      var A = this._cycle;
      var O = this._rawPrevTime;
      var L = this._time;
      this._totalTime = S * p;
      if (this._cycle < S) {
        y = !y;
      } else {
        this._totalTime += p;
      }
      this._time = m;
      this._rawPrevTime = p === 0 ? f - 0.0001 : f;
      this._cycle = S;
      this._locked = true;
      m = y ? 0 : p;
      this.render(m, t, p === 0);
      if (!t && !this._gc) {
        if (this.vars.onRepeat) {
          this._cycle = A;
          this._locked = false;
          this._callback("onRepeat");
        }
      }
      if (m !== this._time) {
        return;
      }
      if (I) {
        this._cycle = S;
        this._locked = true;
        m = y ? p + 0.0001 : -0.0001;
        this.render(m, true, false);
      }
      this._locked = false;
      if (this._paused && !T) {
        return;
      }
      this._time = L;
      this._totalTime = v;
      this._cycle = A;
      this._rawPrevTime = O;
    }
    if (this._time !== m && this._first || i || u || _) {
      this._initted ||= true;
      if (!this._active) {
        if (!this._paused && this._totalTime !== g && e > 0) {
          this._active = true;
        }
      }
      if (g === 0 && this.vars.onStart) {
        if ((this._totalTime !== 0 || !this._totalDuration) && !t) {
          this._callback("onStart");
        }
      }
      if ((d = this._time) >= m) {
        for (a = this._first; a && (o = a._next, d === this._time && (!this._paused || T));) {
          if (a._active || a._startTime <= this._time && !a._paused && !a._gc) {
            if (_ === a) {
              this.pause();
            }
            if (a._reversed) {
              a.render((a._dirty ? a.totalDuration() : a._totalDuration) - (e - a._startTime) * a._timeScale, t, i);
            } else {
              a.render((e - a._startTime) * a._timeScale, t, i);
            }
          }
          a = o;
        }
      } else {
        for (a = this._last; a && (o = a._prev, d === this._time && (!this._paused || T));) {
          if (a._active || a._startTime <= m && !a._paused && !a._gc) {
            if (_ === a) {
              for (_ = a._prev; _ && _.endTime() > this._time;) {
                _.render(_._reversed ? _.totalDuration() - (e - _._startTime) * _._timeScale : (e - _._startTime) * _._timeScale, t, i);
                _ = _._prev;
              }
              _ = null;
              this.pause();
            }
            if (a._reversed) {
              a.render((a._dirty ? a.totalDuration() : a._totalDuration) - (e - a._startTime) * a._timeScale, t, i);
            } else {
              a.render((e - a._startTime) * a._timeScale, t, i);
            }
          }
          a = o;
        }
      }
      if (this._onUpdate) {
        if (!t) {
          if (n.length) {
            s();
          }
          this._callback("onUpdate");
        }
      }
      if (l) {
        if (!this._locked && !this._gc && (E === this._startTime || C !== this._timeScale)) {
          if (this._time === 0 || h >= this.totalDuration()) {
            if (r) {
              if (n.length) {
                s();
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
    } else if (g !== this._totalTime && this._onUpdate) {
      if (!t) {
        this._callback("onUpdate");
      }
    }
  };
  l.getActive = function (e, t, n) {
    if (e == null) {
      e = true;
    }
    if (t == null) {
      t = true;
    }
    if (n == null) {
      n = false;
    }
    var i;
    var a;
    var s = [];
    var r = this.getChildren(e, t, n);
    var o = 0;
    var l = r.length;
    for (i = 0; i < l; i++) {
      if ((a = r[i]).isActive()) {
        s[o++] = a;
      }
    }
    return s;
  };
  l.getLabelAfter = function (e) {
    if (!e) {
      if (e !== 0) {
        e = this._time;
      }
    }
    var t;
    var n = this.getLabelsArray();
    var i = n.length;
    for (t = 0; t < i; t++) {
      if (n[t].time > e) {
        return n[t].name;
      }
    }
    return null;
  };
  l.getLabelBefore = function (e) {
    if (e == null) {
      e = this._time;
    }
    var t = this.getLabelsArray();
    for (var n = t.length; --n > -1;) {
      if (t[n].time < e) {
        return t[n].name;
      }
    }
    return null;
  };
  l.getLabelsArray = function () {
    var e;
    var t = [];
    var n = 0;
    for (e in this._labels) {
      t[n++] = {
        time: this._labels[e],
        name: e
      };
    }
    t.sort(function (e, t) {
      return e.time - t.time;
    });
    return t;
  };
  l.invalidate = function () {
    this._locked = false;
    return a.default.prototype.invalidate.call(this);
  };
  l.progress = function (e, t) {
    if (arguments.length) {
      return this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) != 0 ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t);
    } else {
      return this._time / this.duration() || 0;
    }
  };
  l.totalProgress = function (e, t) {
    if (arguments.length) {
      return this.totalTime(this.totalDuration() * e, t);
    } else {
      return this._totalTime / this.totalDuration() || 0;
    }
  };
  l.totalDuration = function (e) {
    if (arguments.length) {
      if (this._repeat !== -1 && e) {
        return this.timeScale(this.totalDuration() / e);
      } else {
        return this;
      }
    } else {
      if (this._dirty) {
        a.default.prototype.totalDuration.call(this);
        this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat;
      }
      return this._totalDuration;
    }
  };
  l.time = function (e, t) {
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
  l.repeat = function (e) {
    if (arguments.length) {
      this._repeat = e;
      return this._uncache(true);
    } else {
      return this._repeat;
    }
  };
  l.repeatDelay = function (e) {
    if (arguments.length) {
      this._repeatDelay = e;
      return this._uncache(true);
    } else {
      return this._repeatDelay;
    }
  };
  l.yoyo = function (e) {
    if (arguments.length) {
      this._yoyo = e;
      return this;
    } else {
      return this._yoyo;
    }
  };
  l.currentLabel = function (e) {
    if (arguments.length) {
      return this.seek(e, true);
    } else {
      return this.getLabelBefore(this._time + 1e-8);
    }
  };
  return e;
}, true);
export var TimelineMax = i.globals.TimelineMax;