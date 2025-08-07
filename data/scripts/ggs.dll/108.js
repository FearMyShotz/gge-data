import * as i from "./1.js";
var a = 180 / Math.PI;
var s = [];
var r = [];
var o = [];
var l = {};
var u = i._gsScope._gsDefine.globals;
function c(e, t, n, i) {
  if (n === i) {
    n = i - (i - t) / 1000000;
  }
  if (e === t) {
    t = e + (n - e) / 1000000;
  }
  this.a = e;
  this.b = t;
  this.c = n;
  this.d = i;
  this.da = i - e;
  this.ca = n - e;
  this.ba = t - e;
}
function _(e, t, n, i) {
  var a = {
    a: e
  };
  var s = {};
  var r = {};
  var o = {
    c: i
  };
  var l = (e + t) / 2;
  var u = (t + n) / 2;
  var c = (n + i) / 2;
  var _ = (l + u) / 2;
  var d = (u + c) / 2;
  var m = (d - _) / 8;
  a.b = l + (e - l) / 4;
  s.b = _ + m;
  a.c = s.a = (a.b + s.b) / 2;
  s.c = r.a = (_ + d) / 2;
  r.b = d - m;
  o.b = c + (i - c) / 4;
  r.c = o.a = (r.b + o.b) / 2;
  return [a, s, r, o];
}
function d(e, t, n, i, a) {
  var l;
  var u;
  var c;
  var d;
  var m;
  var h;
  var p;
  var g;
  var E;
  var C;
  var f;
  var T;
  var S;
  var y = e.length - 1;
  var I = 0;
  var v = e[0].a;
  for (l = 0; l < y; l++) {
    u = (m = e[I]).a;
    c = m.d;
    d = e[I + 1].d;
    if (a) {
      f = s[l];
      S = ((T = r[l]) + f) * t * 0.25 / (i ? 0.5 : o[l] || 0.5);
      g = c - ((h = c - (c - u) * (i ? t * 0.5 : f !== 0 ? S / f : 0)) + (((p = c + (d - c) * (i ? t * 0.5 : T !== 0 ? S / T : 0)) - h) * (f * 3 / (f + T) + 0.5) / 4 || 0));
    } else {
      g = c - ((h = c - (c - u) * t * 0.5) + (p = c + (d - c) * t * 0.5)) / 2;
    }
    h += g;
    p += g;
    m.c = E = h;
    m.b = l !== 0 ? v : v = m.a + (m.c - m.a) * 0.6;
    m.da = c - u;
    m.ca = E - u;
    m.ba = v - u;
    if (n) {
      C = _(u, v, E, c);
      e.splice(I, 1, C[0], C[1], C[2], C[3]);
      I += 4;
    } else {
      I++;
    }
    v = p;
  }
  (m = e[I]).b = v;
  m.c = v + (m.d - v) * 0.4;
  m.da = m.d - m.a;
  m.ca = m.c - m.a;
  m.ba = v - m.a;
  if (n) {
    C = _(m.a, v, m.c, m.d);
    e.splice(I, 1, C[0], C[1], C[2], C[3]);
  }
}
function m(e, t, n, i) {
  var a;
  var o;
  var l;
  var u;
  var _;
  var d;
  var m = [];
  if (i) {
    for (o = (e = [i].concat(e)).length; --o > -1;) {
      if (typeof (d = e[o][t]) == "string" && d.charAt(1) === "=") {
        e[o][t] = i[t] + Number(d.charAt(0) + d.substr(2));
      }
    }
  }
  if ((a = e.length - 2) < 0) {
    m[0] = new c(e[0][t], 0, 0, e[0][t]);
    return m;
  }
  for (o = 0; o < a; o++) {
    l = e[o][t];
    u = e[o + 1][t];
    m[o] = new c(l, 0, 0, u);
    if (n) {
      _ = e[o + 2][t];
      s[o] = (s[o] || 0) + (u - l) * (u - l);
      r[o] = (r[o] || 0) + (_ - u) * (_ - u);
    }
  }
  m[o] = new c(e[o][t], 0, 0, e[o + 1][t]);
  return m;
}
function h(e, t, n, i, a, u) {
  var c;
  var _;
  var h;
  var p;
  var g;
  var E;
  var C;
  var f;
  var T = {};
  var S = [];
  var y = u || e[0];
  a = typeof a == "string" ? "," + a + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,";
  if (t == null) {
    t = 1;
  }
  for (_ in e[0]) {
    S.push(_);
  }
  if (e.length > 1) {
    f = e[e.length - 1];
    C = true;
    c = S.length;
    while (--c > -1) {
      _ = S[c];
      if (Math.abs(y[_] - f[_]) > 0.05) {
        C = false;
        break;
      }
    }
    if (C) {
      e = e.concat();
      if (u) {
        e.unshift(u);
      }
      e.push(e[1]);
      u = e[e.length - 3];
    }
  }
  s.length = r.length = o.length = 0;
  c = S.length;
  while (--c > -1) {
    _ = S[c];
    l[_] = a.indexOf("," + _ + ",") !== -1;
    T[_] = m(e, _, l[_], u);
  }
  for (c = s.length; --c > -1;) {
    s[c] = Math.sqrt(s[c]);
    r[c] = Math.sqrt(r[c]);
  }
  if (!i) {
    for (c = S.length; --c > -1;) {
      if (l[_]) {
        E = (h = T[S[c]]).length - 1;
        p = 0;
        for (; p < E; p++) {
          g = h[p + 1].da / r[p] + h[p].da / s[p] || 0;
          o[p] = (o[p] || 0) + g * g;
        }
      }
    }
    for (c = o.length; --c > -1;) {
      o[c] = Math.sqrt(o[c]);
    }
  }
  c = S.length;
  p = n ? 4 : 1;
  while (--c > -1) {
    h = T[_ = S[c]];
    d(h, t, n, i, l[_]);
    if (C) {
      h.splice(0, p);
      h.splice(h.length - p, p);
    }
  }
  return T;
}
function p(e, t, n) {
  var i;
  var a;
  var s;
  var r;
  var o;
  var l;
  var u;
  var c;
  var _;
  var d;
  var m;
  var h = 1 / n;
  for (var p = e.length; --p > -1;) {
    s = (d = e[p]).a;
    r = d.d - s;
    o = d.c - s;
    l = d.b - s;
    i = a = 0;
    c = 1;
    for (; c <= n; c++) {
      i = a - (a = ((u = h * c) * u * r + (_ = 1 - u) * 3 * (u * o + _ * l)) * u);
      t[m = p * n + c - 1] = (t[m] || 0) + i * i;
    }
  }
}
export var BezierPlugin = i._gsScope._gsDefine.plugin({
  propName: "bezier",
  priority: -1,
  version: "1.3.8",
  API: 2,
  global: true,
  init: function (e, t, n) {
    this._target = e;
    if (t instanceof Array) {
      t = {
        values: t
      };
    }
    this._func = {};
    this._mod = {};
    this._props = [];
    this._timeRes = t.timeResolution == null ? 6 : parseInt(t.timeResolution, 10);
    var i;
    var a;
    var s;
    var r;
    var o;
    var l = t.values || [];
    var u = {};
    var _ = l[0];
    var d = t.autoRotate || n.vars.orientToBezier;
    this._autoRotate = d ? d instanceof Array ? d : [["x", "y", "rotation", d === true ? 0 : Number(d) || 0]] : null;
    for (i in _) {
      this._props.push(i);
    }
    for (s = this._props.length; --s > -1;) {
      i = this._props[s];
      this._overwriteProps.push(i);
      a = this._func[i] = typeof e[i] == "function";
      u[i] = a ? e[i.indexOf("set") || typeof e["get" + i.substr(3)] != "function" ? i : "get" + i.substr(3)]() : parseFloat(e[i]);
      if (!o) {
        if (u[i] !== l[0][i]) {
          o = u;
        }
      }
    }
    this._beziers = t.type !== "cubic" && t.type !== "quadratic" && t.type !== "soft" ? h(l, isNaN(t.curviness) ? 1 : t.curviness, false, t.type === "thruBasic", t.correlate, o) : function (e, t, n) {
      var i;
      var a;
      var s;
      var r;
      var o;
      var l;
      var u;
      var _;
      var d;
      var m;
      var h;
      var p = {};
      var g = (t = t || "soft") === "cubic" ? 3 : 2;
      var E = t === "soft";
      var C = [];
      if (E && n) {
        e = [n].concat(e);
      }
      if (e == null || e.length < g + 1) {
        throw "invalid Bezier data";
      }
      for (d in e[0]) {
        C.push(d);
      }
      for (l = C.length; --l > -1;) {
        p[d = C[l]] = o = [];
        m = 0;
        _ = e.length;
        u = 0;
        for (; u < _; u++) {
          i = n == null ? e[u][d] : typeof (h = e[u][d]) == "string" && h.charAt(1) === "=" ? n[d] + Number(h.charAt(0) + h.substr(2)) : Number(h);
          if (E && u > 1 && u < _ - 1) {
            o[m++] = (i + o[m - 2]) / 2;
          }
          o[m++] = i;
        }
        _ = m - g + 1;
        m = 0;
        u = 0;
        for (; u < _; u += g) {
          i = o[u];
          a = o[u + 1];
          s = o[u + 2];
          r = g === 2 ? 0 : o[u + 3];
          o[m++] = h = g === 3 ? new c(i, a, s, r) : new c(i, (a * 2 + i) / 3, (a * 2 + s) / 3, s);
        }
        o.length = m;
      }
      return p;
    }(l, t.type, u);
    this._segCount = this._beziers[i].length;
    if (this._timeRes) {
      var m = function (e, t) {
        var n;
        var i;
        var a;
        var s;
        var r = [];
        var o = [];
        var l = 0;
        var u = 0;
        var c = (t = t >> 0 || 6) - 1;
        var _ = [];
        var d = [];
        for (n in e) {
          p(e[n], r, t);
        }
        a = r.length;
        i = 0;
        for (; i < a; i++) {
          l += Math.sqrt(r[i]);
          d[s = i % t] = l;
          if (s === c) {
            u += l;
            _[s = i / t >> 0] = d;
            o[s] = u;
            l = 0;
            d = [];
          }
        }
        return {
          length: u,
          lengths: o,
          segments: _
        };
      }(this._beziers, this._timeRes);
      this._length = m.length;
      this._lengths = m.lengths;
      this._segments = m.segments;
      this._l1 = this._li = this._s1 = this._si = 0;
      this._l2 = this._lengths[0];
      this._curSeg = this._segments[0];
      this._s2 = this._curSeg[0];
      this._prec = 1 / this._curSeg.length;
    }
    if (d = this._autoRotate) {
      this._initialRotations = [];
      if (!(d[0] instanceof Array)) {
        this._autoRotate = d = [d];
      }
      s = d.length;
      while (--s > -1) {
        for (r = 0; r < 3; r++) {
          i = d[s][r];
          this._func[i] = typeof e[i] == "function" && e[i.indexOf("set") || typeof e["get" + i.substr(3)] != "function" ? i : "get" + i.substr(3)];
        }
        i = d[s][2];
        this._initialRotations[s] = (this._func[i] ? this._func[i].call(this._target) : this._target[i]) || 0;
        this._overwriteProps.push(i);
      }
    }
    this._startRatio = n.vars.runBackwards ? 1 : 0;
    return true;
  },
  set: function (e) {
    var t;
    var n;
    var i;
    var s;
    var r;
    var o;
    var l;
    var u;
    var c;
    var _;
    var d = this._segCount;
    var m = this._func;
    var h = this._target;
    var p = e !== this._startRatio;
    if (this._timeRes) {
      c = this._lengths;
      _ = this._curSeg;
      e *= this._length;
      i = this._li;
      if (e > this._l2 && i < d - 1) {
        for (u = d - 1; i < u && (this._l2 = c[++i]) <= e;);
        this._l1 = c[i - 1];
        this._li = i;
        this._curSeg = _ = this._segments[i];
        this._s2 = _[this._s1 = this._si = 0];
      } else if (e < this._l1 && i > 0) {
        while (i > 0 && (this._l1 = c[--i]) >= e);
        if (i === 0 && e < this._l1) {
          this._l1 = 0;
        } else {
          i++;
        }
        this._l2 = c[i];
        this._li = i;
        this._curSeg = _ = this._segments[i];
        this._s1 = _[(this._si = _.length - 1) - 1] || 0;
        this._s2 = _[this._si];
      }
      t = i;
      e -= this._l1;
      i = this._si;
      if (e > this._s2 && i < _.length - 1) {
        for (u = _.length - 1; i < u && (this._s2 = _[++i]) <= e;);
        this._s1 = _[i - 1];
        this._si = i;
      } else if (e < this._s1 && i > 0) {
        while (i > 0 && (this._s1 = _[--i]) >= e);
        if (i === 0 && e < this._s1) {
          this._s1 = 0;
        } else {
          i++;
        }
        this._s2 = _[i];
        this._si = i;
      }
      o = (i + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
    } else {
      o = (e - (t = e < 0 ? 0 : e >= 1 ? d - 1 : d * e >> 0) * (1 / d)) * d;
    }
    n = 1 - o;
    i = this._props.length;
    while (--i > -1) {
      s = this._props[i];
      l = (o * o * (r = this._beziers[s][t]).da + n * 3 * (o * r.ca + n * r.ba)) * o + r.a;
      if (this._mod[s]) {
        l = this._mod[s](l, h);
      }
      if (m[s]) {
        h[s](l);
      } else {
        h[s] = l;
      }
    }
    if (this._autoRotate) {
      var g;
      var E;
      var C;
      var f;
      var T;
      var S;
      var y;
      var I = this._autoRotate;
      for (i = I.length; --i > -1;) {
        s = I[i][2];
        S = I[i][3] || 0;
        y = I[i][4] === true ? 1 : a;
        r = this._beziers[I[i][0]];
        g = this._beziers[I[i][1]];
        if (r && g) {
          r = r[t];
          g = g[t];
          E = r.a + (r.b - r.a) * o;
          E += ((f = r.b + (r.c - r.b) * o) - E) * o;
          f += (r.c + (r.d - r.c) * o - f) * o;
          C = g.a + (g.b - g.a) * o;
          C += ((T = g.b + (g.c - g.b) * o) - C) * o;
          T += (g.c + (g.d - g.c) * o - T) * o;
          l = p ? Math.atan2(T - C, f - E) * y + S : this._initialRotations[i];
          if (this._mod[s]) {
            l = this._mod[s](l, h);
          }
          if (m[s]) {
            h[s](l);
          } else {
            h[s] = l;
          }
        }
      }
    }
  }
});
var E = BezierPlugin.prototype;
/*!
 * VERSION: 1.3.8
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
BezierPlugin.bezierThrough = h;
BezierPlugin.cubicToQuadratic = _;
BezierPlugin._autoCSS = true;
BezierPlugin.quadraticToCubic = function (e, t, n) {
  return new c(e, (t * 2 + e) / 3, (t * 2 + n) / 3, n);
};
BezierPlugin._cssRegister = function () {
  var e = u.CSSPlugin;
  if (e) {
    var t = e._internals;
    var n = t._parseToProxy;
    var i = t._setPluginRatio;
    var a = t.CSSPropTween;
    t._registerComplexSpecialProp("bezier", {
      parser: function (e, t, s, r, o, l) {
        if (t instanceof Array) {
          t = {
            values: t
          };
        }
        l = new BezierPlugin();
        var u;
        var c;
        var _;
        var d = t.values;
        var m = d.length - 1;
        var h = [];
        var p = {};
        if (m < 0) {
          return o;
        }
        for (u = 0; u <= m; u++) {
          _ = n(e, d[u], r, o, l, m !== u);
          h[u] = _.end;
        }
        for (c in t) {
          p[c] = t[c];
        }
        p.values = h;
        (o = new a(e, "bezier", 0, 0, _.pt, 2)).data = _;
        o.plugin = l;
        o.setRatio = i;
        if (p.autoRotate === 0) {
          p.autoRotate = true;
        }
        if (!!p.autoRotate && !(p.autoRotate instanceof Array)) {
          u = p.autoRotate === true ? 0 : Number(p.autoRotate);
          p.autoRotate = _.end.left != null ? [["left", "top", "rotation", u, false]] : _.end.x != null && [["x", "y", "rotation", u, false]];
        }
        if (p.autoRotate) {
          if (!r._transform) {
            r._enableTransforms(false);
          }
          _.autoRotate = r._target._gsTransform;
          _.proxy.rotation = _.autoRotate.rotation || 0;
          r._overwriteProps.push("rotation");
        }
        l._onInitTween(_.proxy, p, r._tween);
        return o;
      }
    });
  }
};
E._mod = function (e) {
  var t;
  var n = this._overwriteProps;
  for (var i = n.length; --i > -1;) {
    if ((t = e[n[i]]) && typeof t == "function") {
      this._mod[n[i]] = t;
    }
  }
};
E._kill = function (e) {
  var t;
  var n;
  var i = this._props;
  for (t in this._beziers) {
    if (t in e) {
      delete this._beziers[t];
      delete this._func[t];
      n = i.length;
      while (--n > -1) {
        if (i[n] === t) {
          i.splice(n, 1);
        }
      }
    }
  }
  if (i = this._autoRotate) {
    for (n = i.length; --n > -1;) {
      if (e[i[n][2]]) {
        i.splice(n, 1);
      }
    }
  }
  return this._super._kill.call(this, e);
};