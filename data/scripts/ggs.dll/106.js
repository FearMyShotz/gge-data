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
i._gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function () {
  var e;
  var t;
  var n;
  var a;
  function s() {
    i.TweenPlugin.call(this, "css");
    this._overwriteProps.length = 0;
    this.setRatio = s.prototype.setRatio;
  }
  var r = i._gsScope._gsDefine.globals;
  var o = {};
  var l = s.prototype = new i.TweenPlugin("css");
  l.constructor = s;
  s.version = "2.0.2";
  s.API = 2;
  s.defaultTransformPerspective = 0;
  s.defaultSkewType = "compensated";
  s.defaultSmoothOrigin = true;
  l = "px";
  s.suffixMap = {
    top: l,
    right: l,
    bottom: l,
    left: l,
    width: l,
    height: l,
    fontSize: l,
    padding: l,
    margin: l,
    perspective: l,
    lineHeight: ""
  };
  var u;
  var c;
  var _;
  var d;
  var m;
  var h;
  var p;
  var g;
  var E = /(?:\-|\.|\b)(\d|\.|e\-)+/g;
  var C = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g;
  var f = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi;
  var T = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g;
  var S = /(?:\d|\-|\+|=|#|\.)*/g;
  var y = /opacity *= *([^)]*)/i;
  var I = /opacity:([^;]*)/i;
  var v = /alpha\(opacity *=.+?\)/i;
  var A = /^(rgb|hsl)/;
  var O = /([A-Z])/g;
  var L = /-([a-z])/gi;
  var D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi;
  function b(e, t) {
    return t.toUpperCase();
  }
  var N = /(?:Left|Right|Width)/i;
  var R = /(M11|M12|M21|M22)=[\d\-\.e]+/gi;
  var P = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i;
  var B = /,(?=[^\)]*(?:\(|$))/gi;
  var M = /[\s,\(]/i;
  var F = Math.PI / 180;
  var U = 180 / Math.PI;
  var G = {};
  var k = {
    style: {}
  };
  var w = i._gsScope.document || {
    createElement: function () {
      return k;
    }
  };
  function x(e, t) {
    if (w.createElementNS) {
      return w.createElementNS(t || "http://www.w3.org/1999/xhtml", e);
    } else {
      return w.createElement(e);
    }
  }
  var W = x("div");
  var H = x("img");
  var V = s._internals = {
    _specialProps: o
  };
  var j = (i._gsScope.navigator || {}).userAgent || "";
  var q = function () {
    var e = j.indexOf("Android");
    var t = x("a");
    _ = j.indexOf("Safari") !== -1 && j.indexOf("Chrome") === -1 && (e === -1 || parseFloat(j.substr(e + 8, 2)) > 3);
    m = _ && parseFloat(j.substr(j.indexOf("Version/") + 8, 2)) < 6;
    d = j.indexOf("Firefox") !== -1;
    if (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(j) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(j)) {
      h = parseFloat(RegExp.$1);
    }
    return !!t && (t.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(t.style.opacity));
  }();
  function K(e) {
    if (y.test(typeof e == "string" ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "")) {
      return parseFloat(RegExp.$1) / 100;
    } else {
      return 1;
    }
  }
  function Y(e) {
    if (i._gsScope.console) {
      console.log(e);
    }
  }
  var z = "";
  var Z = "";
  function X(e, t) {
    var n;
    var i;
    var a = (t = t || W).style;
    if (a[e] !== undefined) {
      return e;
    }
    e = e.charAt(0).toUpperCase() + e.substr(1);
    n = ["O", "Moz", "ms", "Ms", "Webkit"];
    i = 5;
    while (--i > -1 && a[n[i] + e] === undefined);
    if (i >= 0) {
      z = "-" + (Z = i === 3 ? "ms" : n[i]).toLowerCase() + "-";
      return Z + e;
    } else {
      return null;
    }
  }
  var Q = (typeof window != "undefined" ? window : w.defaultView || {
    getComputedStyle: function () {}
  }).getComputedStyle;
  var $ = s.getStyle = function (e, t, n, i, a) {
    var s;
    if (q || t !== "opacity") {
      if (!i && e.style[t]) {
        s = e.style[t];
      } else if (n = n || Q(e)) {
        s = n[t] || n.getPropertyValue(t) || n.getPropertyValue(t.replace(O, "-$1").toLowerCase());
      } else if (e.currentStyle) {
        s = e.currentStyle[t];
      }
      if (a == null || s && s !== "none" && s !== "auto" && s !== "auto auto") {
        return s;
      } else {
        return a;
      }
    } else {
      return K(e);
    }
  };
  var J = V.convertToPixels = function (e, t, n, a, r) {
    if (a === "px" || !a && t !== "lineHeight") {
      return n;
    }
    if (a === "auto" || !n) {
      return 0;
    }
    var o;
    var l;
    var u;
    var c = N.test(t);
    var _ = e;
    var d = W.style;
    var m = n < 0;
    var h = n === 1;
    if (m) {
      n = -n;
    }
    if (h) {
      n *= 100;
    }
    if (t !== "lineHeight" || a) {
      if (a === "%" && t.indexOf("border") !== -1) {
        o = n / 100 * (c ? e.clientWidth : e.clientHeight);
      } else {
        d.cssText = "border:0 solid red;position:" + $(e, "position") + ";line-height:0;";
        if (a !== "%" && _.appendChild && a.charAt(0) !== "v" && a !== "rem") {
          d[c ? "borderLeftWidth" : "borderTopWidth"] = n + a;
        } else {
          _ = e.parentNode || w.body;
          if ($(_, "display").indexOf("flex") !== -1) {
            d.position = "absolute";
          }
          l = _._gsCache;
          u = i.default.ticker.frame;
          if (l && c && l.time === u) {
            return l.width * n / 100;
          }
          d[c ? "width" : "height"] = n + a;
        }
        _.appendChild(W);
        o = parseFloat(W[c ? "offsetWidth" : "offsetHeight"]);
        _.removeChild(W);
        if (c && a === "%" && s.cacheWidths !== false) {
          (l = _._gsCache = _._gsCache || {}).time = u;
          l.width = o / n * 100;
        }
        if (o === 0 && !r) {
          o = J(e, t, n, a, true);
        }
      }
    } else {
      l = Q(e).lineHeight;
      e.style.lineHeight = n;
      o = parseFloat(Q(e).lineHeight);
      e.style.lineHeight = l;
    }
    if (h) {
      o /= 100;
    }
    if (m) {
      return -o;
    } else {
      return o;
    }
  };
  var ee = V.calculateOffset = function (e, t, n) {
    if ($(e, "position", n) !== "absolute") {
      return 0;
    }
    var i = t === "left" ? "Left" : "Top";
    var a = $(e, "margin" + i, n);
    return e["offset" + i] - (J(e, t, parseFloat(a), a.replace(S, "")) || 0);
  };
  function te(e, t) {
    var n;
    var i;
    var a;
    var s = {};
    if (t = t || Q(e, null)) {
      if (n = t.length) {
        while (--n > -1) {
          if ((a = t[n]).indexOf("-transform") === -1 || Pe === a) {
            s[a.replace(L, b)] = t.getPropertyValue(a);
          }
        }
      } else {
        for (n in t) {
          if (n.indexOf("Transform") === -1 || Re === n) {
            s[n] = t[n];
          }
        }
      }
    } else if (t = e.currentStyle || e.style) {
      for (n in t) {
        if (typeof n == "string" && s[n] === undefined) {
          s[n.replace(L, b)] = t[n];
        }
      }
    }
    if (!q) {
      s.opacity = K(e);
    }
    i = qe(e, t, false);
    s.rotation = i.rotation;
    s.skewX = i.skewX;
    s.scaleX = i.scaleX;
    s.scaleY = i.scaleY;
    s.x = i.x;
    s.y = i.y;
    if (Me) {
      s.z = i.z;
      s.rotationX = i.rotationX;
      s.rotationY = i.rotationY;
      s.scaleZ = i.scaleZ;
    }
    if (s.filters) {
      delete s.filters;
    }
    return s;
  }
  function ne(e, t, n, i, a) {
    var s;
    var r;
    var o;
    var l = {};
    var u = e.style;
    for (r in n) {
      if (r !== "cssText" && r !== "length" && isNaN(r) && (t[r] !== (s = n[r]) || a && a[r]) && r.indexOf("Origin") === -1) {
        if (typeof s == "number" || typeof s == "string") {
          l[r] = s !== "auto" || r !== "left" && r !== "top" ? s !== "" && s !== "auto" && s !== "none" || typeof t[r] != "string" || t[r].replace(T, "") === "" ? s : 0 : ee(e, r);
          if (u[r] !== undefined) {
            o = new Ee(u, r, u[r], o);
          }
        }
      }
    }
    if (i) {
      for (r in i) {
        if (r !== "className") {
          l[r] = i[r];
        }
      }
    }
    return {
      difs: l,
      firstMPT: o
    };
  }
  var ie = {
    width: ["Left", "Right"],
    height: ["Top", "Bottom"]
  };
  var ae = ["marginLeft", "marginRight", "marginTop", "marginBottom"];
  function se(e, t, n) {
    if ((e.nodeName + "").toLowerCase() === "svg") {
      return (n || Q(e))[t] || 0;
    }
    if (e.getCTM && He(e)) {
      return e.getBBox()[t] || 0;
    }
    var i = parseFloat(t === "width" ? e.offsetWidth : e.offsetHeight);
    var a = ie[t];
    var s = a.length;
    for (n = n || Q(e, null); --s > -1;) {
      i -= parseFloat($(e, "padding" + a[s], n, true)) || 0;
      i -= parseFloat($(e, "border" + a[s] + "Width", n, true)) || 0;
    }
    return i;
  }
  function re(e, t) {
    if (e === "contain" || e === "auto" || e === "auto auto") {
      return e + " ";
    }
    if (e == null || e === "") {
      e = "0 0";
    }
    var n;
    var i = e.split(" ");
    var a = e.indexOf("left") !== -1 ? "0%" : e.indexOf("right") !== -1 ? "100%" : i[0];
    var s = e.indexOf("top") !== -1 ? "0%" : e.indexOf("bottom") !== -1 ? "100%" : i[1];
    if (i.length > 3 && !t) {
      i = e.split(", ").join(",").split(",");
      e = [];
      n = 0;
      for (; n < i.length; n++) {
        e.push(re(i[n]));
      }
      return e.join(",");
    }
    if (s == null) {
      s = a === "center" ? "50%" : "0";
    } else if (s === "center") {
      s = "50%";
    }
    if (a === "center" || isNaN(parseFloat(a)) && (a + "").indexOf("=") === -1) {
      a = "50%";
    }
    e = a + " " + s + (i.length > 2 ? " " + i[2] : "");
    if (t) {
      t.oxp = a.indexOf("%") !== -1;
      t.oyp = s.indexOf("%") !== -1;
      t.oxr = a.charAt(1) === "=";
      t.oyr = s.charAt(1) === "=";
      t.ox = parseFloat(a.replace(T, ""));
      t.oy = parseFloat(s.replace(T, ""));
      t.v = e;
    }
    return t || e;
  }
  function oe(e, t) {
    if (typeof e == "function") {
      e = e(g, p);
    }
    if (typeof e == "string" && e.charAt(1) === "=") {
      return parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2));
    } else {
      return parseFloat(e) - parseFloat(t) || 0;
    }
  }
  function le(e, t) {
    if (typeof e == "function") {
      e = e(g, p);
    }
    var n = typeof e == "string" && e.charAt(1) === "=";
    if (typeof e == "string" && e.charAt(e.length - 2) === "v") {
      e = (n ? e.substr(0, 2) : 0) + window["inner" + (e.substr(-2) === "vh" ? "Height" : "Width")] * (parseFloat(n ? e.substr(2) : e) / 100);
    }
    if (e == null) {
      return t;
    } else if (n) {
      return parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t;
    } else {
      return parseFloat(e) || 0;
    }
  }
  function ue(e, t, n, i) {
    var a;
    var s;
    var r;
    var o;
    var l;
    if (typeof e == "function") {
      e = e(g, p);
    }
    if (e == null) {
      o = t;
    } else if (typeof e == "number") {
      o = e;
    } else {
      a = 360;
      s = e.split("_");
      r = ((l = e.charAt(1) === "=") ? parseInt(e.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (e.indexOf("rad") === -1 ? 1 : U) - (l ? 0 : t);
      if (s.length) {
        if (i) {
          i[n] = t + r;
        }
        if (e.indexOf("short") !== -1 && (r %= a) !== r % (a / 2)) {
          r = r < 0 ? r + a : r - a;
        }
        if (e.indexOf("_cw") !== -1 && r < 0) {
          r = (r + a * 9999999999) % a - (r / a | 0) * a;
        } else if (e.indexOf("ccw") !== -1 && r > 0) {
          r = (r - a * 9999999999) % a - (r / a | 0) * a;
        }
      }
      o = t + r;
    }
    if (o < 0.000001 && o > -0.000001) {
      o = 0;
    }
    return o;
  }
  var ce = {
    aqua: [0, 255, 255],
    lime: [0, 255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, 255],
    navy: [0, 0, 128],
    white: [255, 255, 255],
    fuchsia: [255, 0, 255],
    olive: [128, 128, 0],
    yellow: [255, 255, 0],
    orange: [255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [255, 0, 0],
    pink: [255, 192, 203],
    cyan: [0, 255, 255],
    transparent: [255, 255, 255, 0]
  };
  function _e(e, t, n) {
    return ((e = e < 0 ? e + 1 : e > 1 ? e - 1 : e) * 6 < 1 ? t + (n - t) * e * 6 : e < 0.5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * 255 + 0.5 | 0;
  }
  var de = s.parseColor = function (e, t) {
    var n;
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
    if (e) {
      if (typeof e == "number") {
        n = [e >> 16, e >> 8 & 255, e & 255];
      } else {
        if (e.charAt(e.length - 1) === ",") {
          e = e.substr(0, e.length - 1);
        }
        if (ce[e]) {
          n = ce[e];
        } else if (e.charAt(0) === "#") {
          if (e.length === 4) {
            e = "#" + (i = e.charAt(1)) + i + (a = e.charAt(2)) + a + (s = e.charAt(3)) + s;
          }
          n = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, e & 255];
        } else if (e.substr(0, 3) === "hsl") {
          n = d = e.match(E);
          if (t) {
            if (e.indexOf("=") !== -1) {
              return e.match(C);
            }
          } else {
            r = Number(n[0]) % 360 / 360;
            o = Number(n[1]) / 100;
            i = (l = Number(n[2]) / 100) * 2 - (a = l <= 0.5 ? l * (o + 1) : l + o - l * o);
            if (n.length > 3) {
              n[3] = Number(n[3]);
            }
            n[0] = _e(r + 1 / 3, i, a);
            n[1] = _e(r, i, a);
            n[2] = _e(r - 1 / 3, i, a);
          }
        } else {
          n = e.match(E) || ce.transparent;
        }
        n[0] = Number(n[0]);
        n[1] = Number(n[1]);
        n[2] = Number(n[2]);
        if (n.length > 3) {
          n[3] = Number(n[3]);
        }
      }
    } else {
      n = ce.black;
    }
    if (t && !d) {
      i = n[0] / 255;
      a = n[1] / 255;
      s = n[2] / 255;
      l = ((u = Math.max(i, a, s)) + (c = Math.min(i, a, s))) / 2;
      if (u === c) {
        r = o = 0;
      } else {
        _ = u - c;
        o = l > 0.5 ? _ / (2 - u - c) : _ / (u + c);
        r = u === i ? (a - s) / _ + (a < s ? 6 : 0) : u === a ? (s - i) / _ + 2 : (i - a) / _ + 4;
        r *= 60;
      }
      n[0] = r + 0.5 | 0;
      n[1] = o * 100 + 0.5 | 0;
      n[2] = l * 100 + 0.5 | 0;
    }
    return n;
  };
  function me(e, t) {
    var n;
    var i;
    var a;
    var s = e.match(he) || [];
    var r = 0;
    var o = "";
    if (!s.length) {
      return e;
    }
    for (n = 0; n < s.length; n++) {
      i = s[n];
      r += (a = e.substr(r, e.indexOf(i, r) - r)).length + i.length;
      if ((i = de(i, t)).length === 3) {
        i.push(1);
      }
      o += a + (t ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")";
    }
    return o + e.substr(r);
  }
  var he = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
  for (l in ce) {
    he += "|" + l + "\\b";
  }
  he = new RegExp(he + ")", "gi");
  s.colorStringFilter = function (e) {
    var t;
    var n = e[0] + " " + e[1];
    if (he.test(n)) {
      t = n.indexOf("hsl(") !== -1 || n.indexOf("hsla(") !== -1;
      e[0] = me(e[0], t);
      e[1] = me(e[1], t);
    }
    he.lastIndex = 0;
  };
  i.default.defaultStringFilter ||= s.colorStringFilter;
  function pe(e, t, n, i) {
    if (e == null) {
      return function (e) {
        return e;
      };
    }
    var a;
    var s = t ? (e.match(he) || [""])[0] : "";
    var r = e.split(s).join("").match(f) || [];
    var o = e.substr(0, e.indexOf(r[0]));
    var l = e.charAt(e.length - 1) === ")" ? ")" : "";
    var u = e.indexOf(" ") !== -1 ? " " : ",";
    var c = r.length;
    var _ = c > 0 ? r[0].replace(E, "") : "";
    if (c) {
      return a = t ? function (e) {
        var t;
        var d;
        var m;
        var h;
        if (typeof e == "number") {
          e += _;
        } else if (i && B.test(e)) {
          h = e.replace(B, "|").split("|");
          m = 0;
          for (; m < h.length; m++) {
            h[m] = a(h[m]);
          }
          return h.join(",");
        }
        t = (e.match(he) || [s])[0];
        m = (d = e.split(t).join("").match(f) || []).length;
        if (c > m--) {
          while (++m < c) {
            d[m] = n ? d[(m - 1) / 2 | 0] : r[m];
          }
        }
        return o + d.join(u) + u + t + l + (e.indexOf("inset") !== -1 ? " inset" : "");
      } : function (e) {
        var t;
        var s;
        var d;
        if (typeof e == "number") {
          e += _;
        } else if (i && B.test(e)) {
          s = e.replace(B, "|").split("|");
          d = 0;
          for (; d < s.length; d++) {
            s[d] = a(s[d]);
          }
          return s.join(",");
        }
        d = (t = e.match(f) || []).length;
        if (c > d--) {
          while (++d < c) {
            t[d] = n ? t[(d - 1) / 2 | 0] : r[d];
          }
        }
        return o + t.join(u) + l;
      };
    } else {
      return function (e) {
        return e;
      };
    }
  }
  function ge(e) {
    e = e.split(",");
    return function (t, n, i, a, s, r, o) {
      var l;
      var u = (n + "").split(" ");
      o = {};
      l = 0;
      for (; l < 4; l++) {
        o[e[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
      }
      return a.parse(t, o, s, r);
    };
  }
  V._setPluginRatio = function (e) {
    this.plugin.setRatio(e);
    var t;
    var n;
    var i;
    var a;
    var s;
    var r = this.data;
    var o = r.proxy;
    for (var l = r.firstMPT; l;) {
      t = o[l.v];
      if (l.r) {
        t = l.r(t);
      } else if (t < 0.000001 && t > -0.000001) {
        t = 0;
      }
      l.t[l.p] = t;
      l = l._next;
    }
    if (r.autoRotate) {
      r.autoRotate.rotation = r.mod ? r.mod.call(this._tween, o.rotation, this.t, this._tween) : o.rotation;
    }
    if (e === 1 || e === 0) {
      l = r.firstMPT;
      s = e === 1 ? "e" : "b";
      while (l) {
        if ((n = l.t).type) {
          if (n.type === 1) {
            a = n.xs0 + n.s + n.xs1;
            i = 1;
            for (; i < n.l; i++) {
              a += n["xn" + i] + n["xs" + (i + 1)];
            }
            n[s] = a;
          }
        } else {
          n[s] = n.s + n.xs0;
        }
        l = l._next;
      }
    }
  };
  function Ee(e, t, n, i, a) {
    this.t = e;
    this.p = t;
    this.v = n;
    this.r = a;
    if (i) {
      i._prev = this;
      this._next = i;
    }
  }
  V._parseToProxy = function (e, t, n, i, a, s) {
    var r;
    var o;
    var l;
    var u;
    var c;
    var _ = i;
    var d = {};
    var m = {};
    var h = n._transform;
    var p = G;
    n._transform = null;
    G = t;
    i = c = n.parse(e, t, i, a);
    G = p;
    if (s) {
      n._transform = h;
      if (_) {
        _._prev = null;
        if (_._prev) {
          _._prev._next = null;
        }
      }
    }
    while (i && i !== _) {
      if (i.type <= 1 && (m[o = i.p] = i.s + i.c, d[o] = i.s, s || (u = new Ee(i, "s", o, u, i.r), i.c = 0), i.type === 1)) {
        for (r = i.l; --r > 0;) {
          l = "xn" + r;
          m[o = i.p + "_" + l] = i.data[l];
          d[o] = i[l];
          if (!s) {
            u = new Ee(i, l, o, u, i.rxp[l]);
          }
        }
      }
      i = i._next;
    }
    return {
      proxy: d,
      end: m,
      firstMPT: u,
      pt: c
    };
  };
  var Ce = V.CSSPropTween = function (t, n, i, s, r, o, l, u, c, _, d) {
    this.t = t;
    this.p = n;
    this.s = i;
    this.c = s;
    this.n = l || n;
    if (!(t instanceof Ce)) {
      a.push(this.n);
    }
    this.r = u ? typeof u == "function" ? u : Math.round : u;
    this.type = o || 0;
    if (c) {
      this.pr = c;
      e = true;
    }
    this.b = _ === undefined ? i : _;
    this.e = d === undefined ? i + s : d;
    if (r) {
      this._next = r;
      r._prev = this;
    }
  };
  function fe(e, t, n, i, a, s) {
    var r = new Ce(e, t, n, i - n, a, -1, s);
    r.b = n;
    r.e = r.xs0 = i;
    return r;
  }
  var Te = s.parseComplex = function (e, t, n, i, a, r, o, l, c, _) {
    n = n || r || "";
    if (typeof i == "function") {
      i = i(g, p);
    }
    o = new Ce(e, t, 0, 0, o, _ ? 2 : 1, null, false, l, n, i);
    i += "";
    if (a && he.test(i + n)) {
      i = [n, i];
      s.colorStringFilter(i);
      n = i[0];
      i = i[1];
    }
    var d;
    var m;
    var h;
    var f;
    var T;
    var S;
    var y;
    var I;
    var v;
    var A;
    var O;
    var L;
    var D;
    var b = n.split(", ").join(",").split(" ");
    var N = i.split(", ").join(",").split(" ");
    var R = b.length;
    var P = u !== false;
    if (i.indexOf(",") !== -1 || n.indexOf(",") !== -1) {
      if ((i + n).indexOf("rgb") !== -1 || (i + n).indexOf("hsl") !== -1) {
        b = b.join(" ").replace(B, ", ").split(" ");
        N = N.join(" ").replace(B, ", ").split(" ");
      } else {
        b = b.join(" ").split(",").join(", ").split(" ");
        N = N.join(" ").split(",").join(", ").split(" ");
      }
      R = b.length;
    }
    if (R !== N.length) {
      R = (b = (r || "").split(" ")).length;
    }
    o.plugin = c;
    o.setRatio = _;
    he.lastIndex = 0;
    d = 0;
    for (; d < R; d++) {
      f = b[d];
      T = N[d] + "";
      if ((I = parseFloat(f)) || I === 0) {
        o.appendXtra("", I, oe(T, I), T.replace(C, ""), !!P && T.indexOf("px") !== -1 && Math.round, true);
      } else if (a && he.test(f)) {
        L = ")" + ((L = T.indexOf(")") + 1) ? T.substr(L) : "");
        D = T.indexOf("hsl") !== -1 && q;
        A = T;
        f = de(f, D);
        T = de(T, D);
        if ((v = f.length + T.length > 6) && !q && T[3] === 0) {
          o["xs" + o.l] += o.l ? " transparent" : "transparent";
          o.e = o.e.split(N[d]).join("transparent");
        } else {
          if (!q) {
            v = false;
          }
          if (D) {
            o.appendXtra(A.substr(0, A.indexOf("hsl")) + (v ? "hsla(" : "hsl("), f[0], oe(T[0], f[0]), ",", false, true).appendXtra("", f[1], oe(T[1], f[1]), "%,", false).appendXtra("", f[2], oe(T[2], f[2]), v ? "%," : "%" + L, false);
          } else {
            o.appendXtra(A.substr(0, A.indexOf("rgb")) + (v ? "rgba(" : "rgb("), f[0], T[0] - f[0], ",", Math.round, true).appendXtra("", f[1], T[1] - f[1], ",", Math.round).appendXtra("", f[2], T[2] - f[2], v ? "," : L, Math.round);
          }
          if (v) {
            f = f.length < 4 ? 1 : f[3];
            o.appendXtra("", f, (T.length < 4 ? 1 : T[3]) - f, L, false);
          }
        }
        he.lastIndex = 0;
      } else if (S = f.match(E)) {
        if (!(y = T.match(C)) || y.length !== S.length) {
          return o;
        }
        h = 0;
        m = 0;
        for (; m < S.length; m++) {
          O = S[m];
          A = f.indexOf(O, h);
          o.appendXtra(f.substr(h, A - h), Number(O), oe(y[m], O), "", !!P && f.substr(A + O.length, 2) === "px" && Math.round, m === 0);
          h = A + O.length;
        }
        o["xs" + o.l] += f.substr(h);
      } else {
        o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + T : T;
      }
    }
    if (i.indexOf("=") !== -1 && o.data) {
      L = o.xs0 + o.data.s;
      d = 1;
      for (; d < o.l; d++) {
        L += o["xs" + d] + o.data["xn" + d];
      }
      o.e = L + o["xs" + d];
    }
    if (!o.l) {
      o.type = -1;
      o.xs0 = o.e;
    }
    return o.xfirst || o;
  };
  var Se = 9;
  for ((l = Ce.prototype).l = l.pr = 0; --Se > 0;) {
    l["xn" + Se] = 0;
    l["xs" + Se] = "";
  }
  l.xs0 = "";
  l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null;
  l.appendXtra = function (e, t, n, i, a, s) {
    var r = this;
    var o = r.l;
    r["xs" + o] += s && (o || r["xs" + o]) ? " " + e : e || "";
    if (n || o === 0 || r.plugin) {
      r.l++;
      r.type = r.setRatio ? 2 : 1;
      r["xs" + r.l] = i || "";
      if (o > 0) {
        r.data["xn" + o] = t + n;
        r.rxp["xn" + o] = a;
        r["xn" + o] = t;
        if (!r.plugin) {
          r.xfirst = new Ce(r, "xn" + o, t, n, r.xfirst || r, 0, r.n, a, r.pr);
          r.xfirst.xs0 = 0;
        }
        return r;
      } else {
        r.data = {
          s: t + n
        };
        r.rxp = {};
        r.s = t;
        r.c = n;
        r.r = a;
        return r;
      }
    } else {
      r["xs" + o] += t + (i || "");
      return r;
    }
  };
  function ye(e, t) {
    t = t || {};
    this.p = t.prefix && X(e) || e;
    o[e] = o[this.p] = this;
    this.format = t.formatter || pe(t.defaultValue, t.color, t.collapsible, t.multi);
    if (t.parser) {
      this.parse = t.parser;
    }
    this.clrs = t.color;
    this.multi = t.multi;
    this.keyword = t.keyword;
    this.dflt = t.defaultValue;
    this.pr = t.priority || 0;
  }
  var Ie = V._registerComplexSpecialProp = function (e, t, n) {
    if (typeof t != "object") {
      t = {
        parser: n
      };
    }
    var i;
    var a = e.split(",");
    var s = t.defaultValue;
    n = n || [s];
    i = 0;
    for (; i < a.length; i++) {
      t.prefix = i === 0 && t.prefix;
      t.defaultValue = n[i] || s;
      new ye(a[i], t);
    }
  };
  var ve = V._registerPluginProp = function (e) {
    if (!o[e]) {
      var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
      Ie(e, {
        parser: function (e, n, i, a, s, l, u) {
          var c = r.com.greensock.plugins[t];
          if (c) {
            c._cssRegister();
            return o[i].parse(e, n, i, a, s, l, u);
          } else {
            Y("Error: " + t + " js file not loaded.");
            return s;
          }
        }
      });
    }
  };
  (l = ye.prototype).parseComplex = function (e, t, n, i, a, s) {
    var r;
    var o;
    var l;
    var u;
    var c;
    var _;
    var d = this.keyword;
    if (this.multi) {
      if (B.test(n) || B.test(t)) {
        o = t.replace(B, "|").split("|");
        l = n.replace(B, "|").split("|");
      } else if (d) {
        o = [t];
        l = [n];
      }
    }
    if (l) {
      u = l.length > o.length ? l.length : o.length;
      r = 0;
      for (; r < u; r++) {
        t = o[r] = o[r] || this.dflt;
        n = l[r] = l[r] || this.dflt;
        if (d && (c = t.indexOf(d)) !== (_ = n.indexOf(d))) {
          if (_ === -1) {
            o[r] = o[r].split(d).join("");
          } else if (c === -1) {
            o[r] += " " + d;
          }
        }
      }
      t = o.join(", ");
      n = l.join(", ");
    }
    return Te(e, this.p, t, n, this.clrs, this.dflt, i, this.pr, a, s);
  };
  l.parse = function (e, t, i, a, s, r, o) {
    return this.parseComplex(e.style, this.format($(e, this.p, n, false, this.dflt)), this.format(t), s, r);
  };
  s.registerSpecialProp = function (e, t, n) {
    Ie(e, {
      parser: function (e, i, a, s, r, o, l) {
        var u = new Ce(e, a, 0, 0, r, 2, a, false, n);
        u.plugin = o;
        u.setRatio = t(e, i, s._tween, a);
        return u;
      },
      priority: n
    });
  };
  s.useSVGTransformAttr = true;
  var Ae;
  var Oe;
  var Le;
  var De;
  var be;
  var Ne = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(",");
  var Re = X("transform");
  var Pe = z + "transform";
  var Be = X("transformOrigin");
  var Me = X("perspective") !== null;
  var Fe = V.Transform = function () {
    this.perspective = parseFloat(s.defaultTransformPerspective) || 0;
    this.force3D = s.defaultForce3D !== false && !!Me && (s.defaultForce3D || "auto");
  };
  var Ue = i._gsScope.SVGElement;
  function Ge(e, t, n) {
    var i;
    var a = w.createElementNS("http://www.w3.org/2000/svg", e);
    var s = /([a-z])([A-Z])/g;
    for (i in n) {
      a.setAttributeNS(null, i.replace(s, "$1-$2").toLowerCase(), n[i]);
    }
    t.appendChild(a);
    return a;
  }
  var ke = w.documentElement || {};
  be = h || /Android/i.test(j) && !i._gsScope.chrome;
  if (w.createElementNS && !be) {
    Oe = Ge("svg", ke);
    De = (Le = Ge("rect", Oe, {
      width: 100,
      height: 50,
      x: 100
    })).getBoundingClientRect().width;
    Le.style[Be] = "50% 50%";
    Le.style[Re] = "scaleX(0.5)";
    be = De === Le.getBoundingClientRect().width && (!d || !Me);
    ke.removeChild(Oe);
  }
  var we = be;
  function xe(e, t, n, i, a, r) {
    var o;
    var l;
    var u;
    var c;
    var _;
    var d;
    var m;
    var h;
    var p;
    var g;
    var E;
    var C;
    var f;
    var T;
    var S = e._gsTransform;
    var y = je(e, true);
    if (S) {
      f = S.xOrigin;
      T = S.yOrigin;
    }
    if (!i || (o = i.split(" ")).length < 2) {
      if ((m = e.getBBox()).x === 0 && m.y === 0 && m.width + m.height === 0) {
        m = {
          x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0,
          y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0,
          width: 0,
          height: 0
        };
      }
      o = [((t = re(t).split(" "))[0].indexOf("%") !== -1 ? parseFloat(t[0]) / 100 * m.width : parseFloat(t[0])) + m.x, (t[1].indexOf("%") !== -1 ? parseFloat(t[1]) / 100 * m.height : parseFloat(t[1])) + m.y];
    }
    n.xOrigin = c = parseFloat(o[0]);
    n.yOrigin = _ = parseFloat(o[1]);
    if (i && y !== Ve) {
      d = y[0];
      m = y[1];
      h = y[2];
      p = y[3];
      g = y[4];
      E = y[5];
      if (C = d * p - m * h) {
        l = c * (p / C) + _ * (-h / C) + (h * E - p * g) / C;
        u = c * (-m / C) + _ * (d / C) - (d * E - m * g) / C;
        c = n.xOrigin = o[0] = l;
        _ = n.yOrigin = o[1] = u;
      }
    }
    if (S) {
      if (r) {
        n.xOffset = S.xOffset;
        n.yOffset = S.yOffset;
        S = n;
      }
      if (a || a !== false && s.defaultSmoothOrigin !== false) {
        l = c - f;
        u = _ - T;
        S.xOffset += l * y[0] + u * y[2] - l;
        S.yOffset += l * y[1] + u * y[3] - u;
      } else {
        S.xOffset = S.yOffset = 0;
      }
    }
    if (!r) {
      e.setAttribute("data-svg-origin", o.join(" "));
    }
  }
  function We(e) {
    var t;
    var n = x("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg");
    var i = this.parentNode;
    var a = this.nextSibling;
    var s = this.style.cssText;
    ke.appendChild(n);
    n.appendChild(this);
    this.style.display = "block";
    if (e) {
      try {
        t = this.getBBox();
        this._originalGetBBox = this.getBBox;
        this.getBBox = We;
      } catch (e) {}
    } else if (this._originalGetBBox) {
      t = this._originalGetBBox();
    }
    if (a) {
      i.insertBefore(this, a);
    } else {
      i.appendChild(this);
    }
    ke.removeChild(n);
    this.style.cssText = s;
    return t;
  }
  function He(e) {
    return !!Ue && !!e.getCTM && (!e.parentNode || !!e.ownerSVGElement) && !!function (e) {
      try {
        return e.getBBox();
      } catch (t) {
        return We.call(e, true);
      }
    }(e);
  }
  var Ve = [1, 0, 0, 1, 0, 0];
  function je(e, t) {
    var n;
    var i;
    var a;
    var s;
    var r;
    var o;
    var l = e._gsTransform || new Fe();
    var u = e.style;
    if (Re) {
      i = $(e, Pe, null, true);
    } else if (e.currentStyle) {
      i = (i = e.currentStyle.filter.match(R)) && i.length === 4 ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), l.x || 0, l.y || 0].join(",") : "";
    }
    n = !i || i === "none" || i === "matrix(1, 0, 0, 1, 0, 0)";
    if (!!Re && (!!(o = !Q(e) || Q(e).display === "none") || !e.parentNode)) {
      if (o) {
        s = u.display;
        u.display = "block";
      }
      if (!e.parentNode) {
        r = 1;
        ke.appendChild(e);
      }
      n = !(i = $(e, Pe, null, true)) || i === "none" || i === "matrix(1, 0, 0, 1, 0, 0)";
      if (s) {
        u.display = s;
      } else if (o) {
        Ze(u, "display");
      }
      if (r) {
        ke.removeChild(e);
      }
    }
    if (l.svg || e.getCTM && He(e)) {
      if (n && (u[Re] + "").indexOf("matrix") !== -1) {
        i = u[Re];
        n = 0;
      }
      a = e.getAttribute("transform");
      if (n && a) {
        i = "matrix(" + (a = e.transform.baseVal.consolidate().matrix).a + "," + a.b + "," + a.c + "," + a.d + "," + a.e + "," + a.f + ")";
        n = 0;
      }
    }
    if (n) {
      return Ve;
    }
    a = (i || "").match(E) || [];
    Se = a.length;
    while (--Se > -1) {
      s = Number(a[Se]);
      a[Se] = (r = s - (s |= 0)) ? (r * 100000 + (r < 0 ? -0.5 : 0.5) | 0) / 100000 + s : s;
    }
    if (t && a.length > 6) {
      return [a[0], a[1], a[4], a[5], a[12], a[13]];
    } else {
      return a;
    }
  }
  var qe = V.getTransform = function (e, t, n, a) {
    if (e._gsTransform && n && !a) {
      return e._gsTransform;
    }
    var r;
    var o;
    var l;
    var u;
    var c;
    var _;
    var d = n && e._gsTransform || new Fe();
    var m = d.scaleX < 0;
    var h = Me && (parseFloat($(e, Be, t, false, "0 0 0").split(" ")[2]) || d.zOrigin) || 0;
    var p = parseFloat(s.defaultTransformPerspective) || 0;
    d.svg = !!e.getCTM && !!He(e);
    if (d.svg) {
      xe(e, $(e, Be, t, false, "50% 50%") + "", d, e.getAttribute("data-svg-origin"));
      Ae = s.useSVGTransformAttr || we;
    }
    if ((r = je(e)) !== Ve) {
      if (r.length === 16) {
        var g;
        var E;
        var C;
        var f;
        var T;
        var S = r[0];
        var y = r[1];
        var I = r[2];
        var v = r[3];
        var A = r[4];
        var O = r[5];
        var L = r[6];
        var D = r[7];
        var b = r[8];
        var N = r[9];
        var R = r[10];
        var P = r[12];
        var B = r[13];
        var M = r[14];
        var F = r[11];
        var G = Math.atan2(L, R);
        if (d.zOrigin) {
          P = b * (M = -d.zOrigin) - r[12];
          B = N * M - r[13];
          M = R * M + d.zOrigin - r[14];
        }
        d.rotationX = G * U;
        if (G) {
          g = A * (f = Math.cos(-G)) + b * (T = Math.sin(-G));
          E = O * f + N * T;
          C = L * f + R * T;
          b = A * -T + b * f;
          N = O * -T + N * f;
          R = L * -T + R * f;
          F = D * -T + F * f;
          A = g;
          O = E;
          L = C;
        }
        G = Math.atan2(-I, R);
        d.rotationY = G * U;
        if (G) {
          E = y * (f = Math.cos(-G)) - N * (T = Math.sin(-G));
          C = I * f - R * T;
          N = y * T + N * f;
          R = I * T + R * f;
          F = v * T + F * f;
          S = g = S * f - b * T;
          y = E;
          I = C;
        }
        G = Math.atan2(y, S);
        d.rotation = G * U;
        if (G) {
          g = S * (f = Math.cos(G)) + y * (T = Math.sin(G));
          E = A * f + O * T;
          C = b * f + N * T;
          y = y * f - S * T;
          O = O * f - A * T;
          N = N * f - b * T;
          S = g;
          A = E;
          b = C;
        }
        if (d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9) {
          d.rotationX = d.rotation = 0;
          d.rotationY = 180 - d.rotationY;
        }
        G = Math.atan2(A, O);
        d.scaleX = (Math.sqrt(S * S + y * y + I * I) * 100000 + 0.5 | 0) / 100000;
        d.scaleY = (Math.sqrt(O * O + L * L) * 100000 + 0.5 | 0) / 100000;
        d.scaleZ = (Math.sqrt(b * b + N * N + R * R) * 100000 + 0.5 | 0) / 100000;
        S /= d.scaleX;
        A /= d.scaleY;
        y /= d.scaleX;
        O /= d.scaleY;
        if (Math.abs(G) > 0.00002) {
          d.skewX = G * U;
          A = 0;
          if (d.skewType !== "simple") {
            d.scaleY *= 1 / Math.cos(G);
          }
        } else {
          d.skewX = 0;
        }
        d.perspective = F ? 1 / (F < 0 ? -F : F) : 0;
        d.x = P;
        d.y = B;
        d.z = M;
        if (d.svg) {
          d.x -= d.xOrigin - (d.xOrigin * S - d.yOrigin * A);
          d.y -= d.yOrigin - (d.yOrigin * y - d.xOrigin * O);
        }
      } else if (!Me || a || !r.length || d.x !== r[4] || d.y !== r[5] || !d.rotationX && !d.rotationY) {
        var k = r.length >= 6;
        var w = k ? r[0] : 1;
        var x = r[1] || 0;
        var W = r[2] || 0;
        var H = k ? r[3] : 1;
        d.x = r[4] || 0;
        d.y = r[5] || 0;
        l = Math.sqrt(w * w + x * x);
        u = Math.sqrt(H * H + W * W);
        c = w || x ? Math.atan2(x, w) * U : d.rotation || 0;
        _ = W || H ? Math.atan2(W, H) * U + c : d.skewX || 0;
        d.scaleX = l;
        d.scaleY = u;
        d.rotation = c;
        d.skewX = _;
        if (Me) {
          d.rotationX = d.rotationY = d.z = 0;
          d.perspective = p;
          d.scaleZ = 1;
        }
        if (d.svg) {
          d.x -= d.xOrigin - (d.xOrigin * w + d.yOrigin * W);
          d.y -= d.yOrigin - (d.xOrigin * x + d.yOrigin * H);
        }
      }
      if (Math.abs(d.skewX) > 90 && Math.abs(d.skewX) < 270) {
        if (m) {
          d.scaleX *= -1;
          d.skewX += d.rotation <= 0 ? 180 : -180;
          d.rotation += d.rotation <= 0 ? 180 : -180;
        } else {
          d.scaleY *= -1;
          d.skewX += d.skewX <= 0 ? 180 : -180;
        }
      }
      d.zOrigin = h;
      for (o in d) {
        if (d[o] < 0.00002 && d[o] > -0.00002) {
          d[o] = 0;
        }
      }
    }
    if (n) {
      e._gsTransform = d;
      if (d.svg) {
        if (Ae && e.style[Re]) {
          i.default.delayedCall(0.001, function () {
            Ze(e.style, Re);
          });
        } else if (!Ae && e.getAttribute("transform")) {
          i.default.delayedCall(0.001, function () {
            e.removeAttribute("transform");
          });
        }
      }
    }
    return d;
  };
  function Ke(e) {
    var t;
    var n;
    var i = this.data;
    var a = -i.rotation * F;
    var s = a + i.skewX * F;
    var r = (Math.cos(a) * i.scaleX * 100000 | 0) / 100000;
    var o = (Math.sin(a) * i.scaleX * 100000 | 0) / 100000;
    var l = (Math.sin(s) * -i.scaleY * 100000 | 0) / 100000;
    var u = (Math.cos(s) * i.scaleY * 100000 | 0) / 100000;
    var c = this.t.style;
    var _ = this.t.currentStyle;
    if (_) {
      n = o;
      o = -l;
      l = -n;
      t = _.filter;
      c.filter = "";
      var d;
      var m;
      var p = this.t.offsetWidth;
      var g = this.t.offsetHeight;
      var E = _.position !== "absolute";
      var C = "progid:DXImageTransform.Microsoft.Matrix(M11=" + r + ", M12=" + o + ", M21=" + l + ", M22=" + u;
      var f = i.x + p * i.xPercent / 100;
      var T = i.y + g * i.yPercent / 100;
      if (i.ox != null) {
        f += (d = (i.oxp ? p * i.ox * 0.01 : i.ox) - p / 2) - (d * r + (m = (i.oyp ? g * i.oy * 0.01 : i.oy) - g / 2) * o);
        T += m - (d * l + m * u);
      }
      C += E ? ", Dx=" + ((d = p / 2) - (d * r + (m = g / 2) * o) + f) + ", Dy=" + (m - (d * l + m * u) + T) + ")" : ", sizingMethod='auto expand')";
      if (t.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
        c.filter = t.replace(P, C);
      } else {
        c.filter = C + " " + t;
      }
      if (e === 0 || e === 1) {
        if (r === 1 && o === 0 && l === 0 && u === 1) {
          if ((!E || C.indexOf("Dx=0, Dy=0") !== -1) && (!y.test(t) || parseFloat(RegExp.$1) === 100)) {
            if (t.indexOf(t.indexOf("Alpha")) === -1) {
              c.removeAttribute("filter");
            }
          }
        }
      }
      if (!E) {
        var I;
        var v;
        var A;
        var O = h < 8 ? 1 : -1;
        d = i.ieOffsetX || 0;
        m = i.ieOffsetY || 0;
        i.ieOffsetX = Math.round((p - ((r < 0 ? -r : r) * p + (o < 0 ? -o : o) * g)) / 2 + f);
        i.ieOffsetY = Math.round((g - ((u < 0 ? -u : u) * g + (l < 0 ? -l : l) * p)) / 2 + T);
        Se = 0;
        for (; Se < 4; Se++) {
          A = (n = (I = _[v = ae[Se]]).indexOf("px") !== -1 ? parseFloat(I) : J(this.t, v, parseFloat(I), I.replace(S, "")) || 0) !== i[v] ? Se < 2 ? -i.ieOffsetX : -i.ieOffsetY : Se < 2 ? d - i.ieOffsetX : m - i.ieOffsetY;
          c[v] = (i[v] = Math.round(n - A * (Se === 0 || Se === 2 ? 1 : O))) + "px";
        }
      }
    }
  }
  var Ye = V.set3DTransformRatio = V.setTransformRatio = function (e) {
    var t;
    var n;
    var i;
    var a;
    var s;
    var r;
    var o;
    var l;
    var u;
    var c;
    var _;
    var m;
    var h;
    var p;
    var g;
    var E;
    var C;
    var f;
    var T;
    var S;
    var y;
    var I = this.data;
    var v = this.t.style;
    var A = I.rotation;
    var O = I.rotationX;
    var L = I.rotationY;
    var D = I.scaleX;
    var b = I.scaleY;
    var N = I.scaleZ;
    var R = I.x;
    var P = I.y;
    var B = I.z;
    var M = I.svg;
    var U = I.perspective;
    var G = I.force3D;
    var k = I.skewY;
    var w = I.skewX;
    if (k) {
      w += k;
      A += k;
    }
    if (((e === 1 || e === 0) && G === "auto" && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !G) && !B && !U && !L && !O && N === 1 || Ae && M || !Me) {
      if (A || w || M) {
        A *= F;
        S = w * F;
        y = 100000;
        n = Math.cos(A) * D;
        s = Math.sin(A) * D;
        i = Math.sin(A - S) * -b;
        r = Math.cos(A - S) * b;
        if (S && I.skewType === "simple") {
          t = Math.tan(S - k * F);
          i *= t = Math.sqrt(1 + t * t);
          r *= t;
          if (k) {
            t = Math.tan(k * F);
            n *= t = Math.sqrt(1 + t * t);
            s *= t;
          }
        }
        if (M) {
          R += I.xOrigin - (I.xOrigin * n + I.yOrigin * i) + I.xOffset;
          P += I.yOrigin - (I.xOrigin * s + I.yOrigin * r) + I.yOffset;
          if (Ae && (I.xPercent || I.yPercent)) {
            g = this.t.getBBox();
            R += I.xPercent * 0.01 * g.width;
            P += I.yPercent * 0.01 * g.height;
          }
          if (R < (g = 0.000001) && R > -g) {
            R = 0;
          }
          if (P < g && P > -g) {
            P = 0;
          }
        }
        T = (n * y | 0) / y + "," + (s * y | 0) / y + "," + (i * y | 0) / y + "," + (r * y | 0) / y + "," + R + "," + P + ")";
        if (M && Ae) {
          this.t.setAttribute("transform", "matrix(" + T);
        } else {
          v[Re] = (I.xPercent || I.yPercent ? "translate(" + I.xPercent + "%," + I.yPercent + "%) matrix(" : "matrix(") + T;
        }
      } else {
        v[Re] = (I.xPercent || I.yPercent ? "translate(" + I.xPercent + "%," + I.yPercent + "%) matrix(" : "matrix(") + D + ",0,0," + b + "," + R + "," + P + ")";
      }
    } else {
      if (d) {
        if (D < (g = 0.0001) && D > -g) {
          D = N = 0.00002;
        }
        if (b < g && b > -g) {
          b = N = 0.00002;
        }
        if (!!U && !I.z && !I.rotationX && !I.rotationY) {
          U = 0;
        }
      }
      if (A || w) {
        A *= F;
        E = n = Math.cos(A);
        C = s = Math.sin(A);
        if (w) {
          A -= w * F;
          E = Math.cos(A);
          C = Math.sin(A);
          if (I.skewType === "simple") {
            t = Math.tan((w - k) * F);
            E *= t = Math.sqrt(1 + t * t);
            C *= t;
            if (I.skewY) {
              t = Math.tan(k * F);
              n *= t = Math.sqrt(1 + t * t);
              s *= t;
            }
          }
        }
        i = -C;
        r = E;
      } else {
        if (!L && !O && N === 1 && !U && !M) {
          v[Re] = (I.xPercent || I.yPercent ? "translate(" + I.xPercent + "%," + I.yPercent + "%) translate3d(" : "translate3d(") + R + "px," + P + "px," + B + "px)" + (D !== 1 || b !== 1 ? " scale(" + D + "," + b + ")" : "");
          return;
        }
        n = r = 1;
        i = s = 0;
      }
      c = 1;
      a = o = l = u = _ = m = 0;
      h = U ? -1 / U : 0;
      p = I.zOrigin;
      g = 0.000001;
      ",";
      "0";
      if (A = L * F) {
        E = Math.cos(A);
        l = -(C = Math.sin(A));
        _ = h * -C;
        a = n * C;
        o = s * C;
        c = E;
        h *= E;
        n *= E;
        s *= E;
      }
      if (A = O * F) {
        t = i * (E = Math.cos(A)) + a * (C = Math.sin(A));
        f = r * E + o * C;
        u = c * C;
        m = h * C;
        a = i * -C + a * E;
        o = r * -C + o * E;
        c *= E;
        h *= E;
        i = t;
        r = f;
      }
      if (N !== 1) {
        a *= N;
        o *= N;
        c *= N;
        h *= N;
      }
      if (b !== 1) {
        i *= b;
        r *= b;
        u *= b;
        m *= b;
      }
      if (D !== 1) {
        n *= D;
        s *= D;
        l *= D;
        _ *= D;
      }
      if (p || M) {
        if (p) {
          R += a * -p;
          P += o * -p;
          B += c * -p + p;
        }
        if (M) {
          R += I.xOrigin - (I.xOrigin * n + I.yOrigin * i) + I.xOffset;
          P += I.yOrigin - (I.xOrigin * s + I.yOrigin * r) + I.yOffset;
        }
        if (R < g && R > -g) {
          R = "0";
        }
        if (P < g && P > -g) {
          P = "0";
        }
        if (B < g && B > -g) {
          B = 0;
        }
      }
      T = I.xPercent || I.yPercent ? "translate(" + I.xPercent + "%," + I.yPercent + "%) matrix3d(" : "matrix3d(";
      T += (n < g && n > -g ? "0" : n) + "," + (s < g && s > -g ? "0" : s) + "," + (l < g && l > -g ? "0" : l);
      T += "," + (_ < g && _ > -g ? "0" : _) + "," + (i < g && i > -g ? "0" : i) + "," + (r < g && r > -g ? "0" : r);
      if (O || L || N !== 1) {
        T += "," + (u < g && u > -g ? "0" : u) + "," + (m < g && m > -g ? "0" : m) + "," + (a < g && a > -g ? "0" : a);
        T += "," + (o < g && o > -g ? "0" : o) + "," + (c < g && c > -g ? "0" : c) + "," + (h < g && h > -g ? "0" : h) + ",";
      } else {
        T += ",0,0,0,0,1,0,";
      }
      T += R + "," + P + "," + B + "," + (U ? 1 + -B / U : 1) + ")";
      v[Re] = T;
    }
  };
  (l = Fe.prototype).x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = l.xOffset = l.yOffset = 0;
  l.scaleX = l.scaleY = l.scaleZ = 1;
  Ie("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
    parser: function (e, t, i, a, r, o, l) {
      if (a._lastParsedTransform === l) {
        return r;
      }
      a._lastParsedTransform = l;
      var u;
      var c = l.scale && typeof l.scale == "function" ? l.scale : 0;
      if (typeof l[i] == "function") {
        u = l[i];
        l[i] = t;
      }
      if (c) {
        l.scale = c(g, e);
      }
      var _;
      var d;
      var m;
      var h;
      var E;
      var C;
      var f;
      var T;
      var S;
      var y = e._gsTransform;
      var I = e.style;
      var v = Ne.length;
      var A = l;
      var O = {};
      var L = qe(e, n, true, A.parseTransform);
      var D = A.transform && (typeof A.transform == "function" ? A.transform(g, p) : A.transform);
      L.skewType = A.skewType || L.skewType || s.defaultSkewType;
      a._transform = L;
      if ("rotationZ" in A) {
        A.rotation = A.rotationZ;
      }
      if (D && typeof D == "string" && Re) {
        (d = W.style)[Re] = D;
        d.display = "block";
        d.position = "absolute";
        if (D.indexOf("%") !== -1) {
          d.width = $(e, "width");
          d.height = $(e, "height");
        }
        w.body.appendChild(W);
        _ = qe(W, null, false);
        if (L.skewType === "simple") {
          _.scaleY *= Math.cos(_.skewX * F);
        }
        if (L.svg) {
          C = L.xOrigin;
          f = L.yOrigin;
          _.x -= L.xOffset;
          _.y -= L.yOffset;
          if (A.transformOrigin || A.svgOrigin) {
            D = {};
            xe(e, re(A.transformOrigin), D, A.svgOrigin, A.smoothOrigin, true);
            C = D.xOrigin;
            f = D.yOrigin;
            _.x -= D.xOffset - L.xOffset;
            _.y -= D.yOffset - L.yOffset;
          }
          if (C || f) {
            T = je(W, true);
            _.x -= C - (C * T[0] + f * T[2]);
            _.y -= f - (C * T[1] + f * T[3]);
          }
        }
        w.body.removeChild(W);
        _.perspective ||= L.perspective;
        if (A.xPercent != null) {
          _.xPercent = le(A.xPercent, L.xPercent);
        }
        if (A.yPercent != null) {
          _.yPercent = le(A.yPercent, L.yPercent);
        }
      } else if (typeof A == "object") {
        _ = {
          scaleX: le(A.scaleX ?? A.scale, L.scaleX),
          scaleY: le(A.scaleY ?? A.scale, L.scaleY),
          scaleZ: le(A.scaleZ, L.scaleZ),
          x: le(A.x, L.x),
          y: le(A.y, L.y),
          z: le(A.z, L.z),
          xPercent: le(A.xPercent, L.xPercent),
          yPercent: le(A.yPercent, L.yPercent),
          perspective: le(A.transformPerspective, L.perspective)
        };
        if ((E = A.directionalRotation) != null) {
          if (typeof E == "object") {
            for (d in E) {
              A[d] = E[d];
            }
          } else {
            A.rotation = E;
          }
        }
        if (typeof A.x == "string" && A.x.indexOf("%") !== -1) {
          _.x = 0;
          _.xPercent = le(A.x, L.xPercent);
        }
        if (typeof A.y == "string" && A.y.indexOf("%") !== -1) {
          _.y = 0;
          _.yPercent = le(A.y, L.yPercent);
        }
        _.rotation = ue("rotation" in A ? A.rotation : "shortRotation" in A ? A.shortRotation + "_short" : L.rotation, L.rotation, "rotation", O);
        if (Me) {
          _.rotationX = ue("rotationX" in A ? A.rotationX : "shortRotationX" in A ? A.shortRotationX + "_short" : L.rotationX || 0, L.rotationX, "rotationX", O);
          _.rotationY = ue("rotationY" in A ? A.rotationY : "shortRotationY" in A ? A.shortRotationY + "_short" : L.rotationY || 0, L.rotationY, "rotationY", O);
        }
        _.skewX = ue(A.skewX, L.skewX);
        _.skewY = ue(A.skewY, L.skewY);
      }
      if (Me && A.force3D != null) {
        L.force3D = A.force3D;
        h = true;
      }
      if (!(m = L.force3D || L.z || L.rotationX || L.rotationY || _.z || _.rotationX || _.rotationY || _.perspective) && A.scale != null) {
        _.scaleZ = 1;
      }
      while (--v > -1) {
        if ((D = _[S = Ne[v]] - L[S]) > 0.000001 || D < -0.000001 || A[S] != null || G[S] != null) {
          h = true;
          r = new Ce(L, S, L[S], D, r);
          if (S in O) {
            r.e = O[S];
          }
          r.xs0 = 0;
          r.plugin = o;
          a._overwriteProps.push(r.n);
        }
      }
      D = A.transformOrigin;
      if (L.svg && (D || A.svgOrigin)) {
        C = L.xOffset;
        f = L.yOffset;
        xe(e, re(D), _, A.svgOrigin, A.smoothOrigin);
        r = fe(L, "xOrigin", (y ? L : _).xOrigin, _.xOrigin, r, "transformOrigin");
        r = fe(L, "yOrigin", (y ? L : _).yOrigin, _.yOrigin, r, "transformOrigin");
        if (C !== L.xOffset || f !== L.yOffset) {
          r = fe(L, "xOffset", y ? C : L.xOffset, L.xOffset, r, "transformOrigin");
          r = fe(L, "yOffset", y ? f : L.yOffset, L.yOffset, r, "transformOrigin");
        }
        D = "0px 0px";
      }
      if (D || Me && m && L.zOrigin) {
        if (Re) {
          h = true;
          S = Be;
          D = (D || $(e, S, n, false, "50% 50%")) + "";
          (r = new Ce(I, S, 0, 0, r, -1, "transformOrigin")).b = I[S];
          r.plugin = o;
          if (Me) {
            d = L.zOrigin;
            D = D.split(" ");
            L.zOrigin = (D.length > 2 && (d === 0 || D[2] !== "0px") ? parseFloat(D[2]) : d) || 0;
            r.xs0 = r.e = D[0] + " " + (D[1] || "50%") + " 0px";
            (r = new Ce(L, "zOrigin", 0, 0, r, -1, r.n)).b = d;
            r.xs0 = r.e = L.zOrigin;
          } else {
            r.xs0 = r.e = D;
          }
        } else {
          re(D + "", L);
        }
      }
      if (h) {
        a._transformType = L.svg && Ae || !m && this._transformType !== 3 ? 2 : 3;
      }
      if (u) {
        l[i] = u;
      }
      if (c) {
        l.scale = c;
      }
      return r;
    },
    prefix: true
  });
  Ie("boxShadow", {
    defaultValue: "0px 0px 0px 0px #999",
    prefix: true,
    color: true,
    multi: true,
    keyword: "inset"
  });
  Ie("borderRadius", {
    defaultValue: "0px",
    parser: function (e, i, a, s, r, o) {
      i = this.format(i);
      var l;
      var u;
      var c;
      var _;
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
      var y;
      var I;
      var v = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"];
      var A = e.style;
      g = parseFloat(e.offsetWidth);
      E = parseFloat(e.offsetHeight);
      l = i.split(" ");
      u = 0;
      for (; u < v.length; u++) {
        if (this.p.indexOf("border")) {
          v[u] = X(v[u]);
        }
        if ((d = _ = $(e, v[u], n, false, "0px")).indexOf(" ") !== -1) {
          d = (_ = d.split(" "))[0];
          _ = _[1];
        }
        m = c = l[u];
        h = parseFloat(d);
        f = d.substr((h + "").length);
        if (T = m.charAt(1) === "=") {
          p = parseInt(m.charAt(0) + "1", 10);
          m = m.substr(2);
          p *= parseFloat(m);
          C = m.substr((p + "").length - (p < 0 ? 1 : 0)) || "";
        } else {
          p = parseFloat(m);
          C = m.substr((p + "").length);
        }
        if (C === "") {
          C = t[a] || f;
        }
        if (C !== f) {
          S = J(e, "borderLeft", h, f);
          y = J(e, "borderTop", h, f);
          if (C === "%") {
            d = S / g * 100 + "%";
            _ = y / E * 100 + "%";
          } else if (C === "em") {
            d = S / (I = J(e, "borderLeft", 1, "em")) + "em";
            _ = y / I + "em";
          } else {
            d = S + "px";
            _ = y + "px";
          }
          if (T) {
            m = parseFloat(d) + p + C;
            c = parseFloat(_) + p + C;
          }
        }
        r = Te(A, v[u], d + " " + _, m + " " + c, false, "0px", r);
      }
      return r;
    },
    prefix: true,
    formatter: pe("0px 0px 0px 0px", false, true)
  });
  Ie("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
    defaultValue: "0px",
    parser: function (e, t, i, a, s, r) {
      return Te(e.style, i, this.format($(e, i, n, false, "0px 0px")), this.format(t), false, "0px", s);
    },
    prefix: true,
    formatter: pe("0px 0px", false, true)
  });
  Ie("backgroundPosition", {
    defaultValue: "0 0",
    parser: function (e, t, i, a, s, r) {
      var o;
      var l;
      var u;
      var c;
      var _;
      var d;
      var m = "background-position";
      var p = n || Q(e, null);
      var g = this.format((p ? h ? p.getPropertyValue(m + "-x") + " " + p.getPropertyValue(m + "-y") : p.getPropertyValue(m) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0");
      var E = this.format(t);
      if (g.indexOf("%") !== -1 != (E.indexOf("%") !== -1) && E.split(",").length < 2 && (d = $(e, "backgroundImage").replace(D, "")) && d !== "none") {
        o = g.split(" ");
        l = E.split(" ");
        H.setAttribute("src", d);
        u = 2;
        while (--u > -1) {
          if ((c = (g = o[u]).indexOf("%") !== -1) !== (l[u].indexOf("%") !== -1)) {
            _ = u === 0 ? e.offsetWidth - H.width : e.offsetHeight - H.height;
            o[u] = c ? parseFloat(g) / 100 * _ + "px" : parseFloat(g) / _ * 100 + "%";
          }
        }
        g = o.join(" ");
      }
      return this.parseComplex(e.style, g, E, s, r);
    },
    formatter: re
  });
  Ie("backgroundSize", {
    defaultValue: "0 0",
    formatter: function (e) {
      if ((e += "").substr(0, 2) === "co") {
        return e;
      } else {
        return re(e.indexOf(" ") === -1 ? e + " " + e : e);
      }
    }
  });
  Ie("perspective", {
    defaultValue: "0px",
    prefix: true
  });
  Ie("perspectiveOrigin", {
    defaultValue: "50% 50%",
    prefix: true
  });
  Ie("transformStyle", {
    prefix: true
  });
  Ie("backfaceVisibility", {
    prefix: true
  });
  Ie("userSelect", {
    prefix: true
  });
  Ie("margin", {
    parser: ge("marginTop,marginRight,marginBottom,marginLeft")
  });
  Ie("padding", {
    parser: ge("paddingTop,paddingRight,paddingBottom,paddingLeft")
  });
  Ie("clip", {
    defaultValue: "rect(0px,0px,0px,0px)",
    parser: function (e, t, i, a, s, r) {
      var o;
      var l;
      var u;
      if (h < 9) {
        l = e.currentStyle;
        u = h < 8 ? " " : ",";
        o = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")";
        t = this.format(t).split(",").join(u);
      } else {
        o = this.format($(e, this.p, n, false, this.dflt));
        t = this.format(t);
      }
      return this.parseComplex(e.style, o, t, s, r);
    }
  });
  Ie("textShadow", {
    defaultValue: "0px 0px 0px #999",
    color: true,
    multi: true
  });
  Ie("autoRound,strictUnits", {
    parser: function (e, t, n, i, a) {
      return a;
    }
  });
  Ie("border", {
    defaultValue: "0px solid #000",
    parser: function (e, t, i, a, s, r) {
      var o = $(e, "borderTopWidth", n, false, "0px");
      var l = this.format(t).split(" ");
      var u = l[0].replace(S, "");
      if (u !== "px") {
        o = parseFloat(o) / J(e, "borderTopWidth", 1, u) + u;
      }
      return this.parseComplex(e.style, this.format(o + " " + $(e, "borderTopStyle", n, false, "solid") + " " + $(e, "borderTopColor", n, false, "#000")), l.join(" "), s, r);
    },
    color: true,
    formatter: function (e) {
      var t = e.split(" ");
      return t[0] + " " + (t[1] || "solid") + " " + (e.match(he) || ["#000"])[0];
    }
  });
  Ie("borderWidth", {
    parser: ge("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
  });
  Ie("float,cssFloat,styleFloat", {
    parser: function (e, t, n, i, a, s) {
      var r = e.style;
      var o = "cssFloat" in r ? "cssFloat" : "styleFloat";
      return new Ce(r, o, 0, 0, a, -1, n, false, 0, r[o], t);
    }
  });
  function ze(e) {
    var t;
    var n = this.t;
    var i = n.filter || $(this.data, "filter") || "";
    var a = this.s + this.c * e | 0;
    if (a === 100) {
      if (i.indexOf("atrix(") === -1 && i.indexOf("radient(") === -1 && i.indexOf("oader(") === -1) {
        n.removeAttribute("filter");
        t = !$(this.data, "filter");
      } else {
        n.filter = i.replace(v, "");
        t = true;
      }
    }
    if (!t) {
      if (this.xn1) {
        n.filter = i = i || "alpha(opacity=" + a + ")";
      }
      if (i.indexOf("pacity") === -1) {
        if (a !== 0 || !this.xn1) {
          n.filter = i + " alpha(opacity=" + a + ")";
        }
      } else {
        n.filter = i.replace(y, "opacity=" + a);
      }
    }
  }
  Ie("opacity,alpha,autoAlpha", {
    defaultValue: "1",
    parser: function (e, t, i, a, s, r) {
      var o = parseFloat($(e, "opacity", n, false, "1"));
      var l = e.style;
      var u = i === "autoAlpha";
      if (typeof t == "string" && t.charAt(1) === "=") {
        t = (t.charAt(0) === "-" ? -1 : 1) * parseFloat(t.substr(2)) + o;
      }
      if (u && o === 1 && $(e, "visibility", n) === "hidden" && t !== 0) {
        o = 0;
      }
      if (q) {
        s = new Ce(l, "opacity", o, t - o, s);
      } else {
        (s = new Ce(l, "opacity", o * 100, (t - o) * 100, s)).xn1 = u ? 1 : 0;
        l.zoom = 1;
        s.type = 2;
        s.b = "alpha(opacity=" + s.s + ")";
        s.e = "alpha(opacity=" + (s.s + s.c) + ")";
        s.data = e;
        s.plugin = r;
        s.setRatio = ze;
      }
      if (u) {
        (s = new Ce(l, "visibility", 0, 0, s, -1, null, false, 0, o !== 0 ? "inherit" : "hidden", t === 0 ? "hidden" : "inherit")).xs0 = "inherit";
        a._overwriteProps.push(s.n);
        a._overwriteProps.push(i);
      }
      return s;
    }
  });
  function Ze(e, t) {
    if (t) {
      if (e.removeProperty) {
        if (t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") {
          t = "-" + t;
        }
        e.removeProperty(t.replace(O, "-$1").toLowerCase());
      } else {
        e.removeAttribute(t);
      }
    }
  }
  function Xe(e) {
    this.t._gsClassPT = this;
    if (e === 1 || e === 0) {
      this.t.setAttribute("class", e === 0 ? this.b : this.e);
      for (var t = this.data, n = this.t.style; t;) {
        if (t.v) {
          n[t.p] = t.v;
        } else {
          Ze(n, t.p);
        }
        t = t._next;
      }
      if (e === 1 && this.t._gsClassPT === this) {
        this.t._gsClassPT = null;
      }
    } else if (this.t.getAttribute("class") !== this.e) {
      this.t.setAttribute("class", this.e);
    }
  }
  Ie("className", {
    parser: function (t, i, a, s, r, o, l) {
      var u;
      var c;
      var _;
      var d;
      var m;
      var h = t.getAttribute("class") || "";
      var p = t.style.cssText;
      (r = s._classNamePT = new Ce(t, a, 0, 0, r, 2)).setRatio = Xe;
      r.pr = -11;
      e = true;
      r.b = h;
      c = te(t, n);
      if (_ = t._gsClassPT) {
        d = {};
        m = _.data;
        while (m) {
          d[m.p] = 1;
          m = m._next;
        }
        _.setRatio(1);
      }
      t._gsClassPT = r;
      r.e = i.charAt(1) !== "=" ? i : h.replace(new RegExp("(?:\\s|^)" + i.substr(2) + "(?![\\w-])"), "") + (i.charAt(0) === "+" ? " " + i.substr(2) : "");
      t.setAttribute("class", r.e);
      u = ne(t, c, te(t), l, d);
      t.setAttribute("class", h);
      r.data = u.firstMPT;
      t.style.cssText = p;
      return r = r.xfirst = s.parse(t, u.difs, r, o);
    }
  });
  function Qe(e) {
    if ((e === 1 || e === 0) && this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") {
      var t;
      var n;
      var i;
      var a;
      var s;
      var r = this.t.style;
      var l = o.transform.parse;
      if (this.e === "all") {
        r.cssText = "";
        a = true;
      } else {
        for (i = (t = this.e.split(" ").join("").split(",")).length; --i > -1;) {
          n = t[i];
          if (o[n]) {
            if (o[n].parse === l) {
              a = true;
            } else {
              n = n === "transformOrigin" ? Be : o[n].p;
            }
          }
          Ze(r, n);
        }
      }
      if (a) {
        Ze(r, Re);
        if (s = this.t._gsTransform) {
          if (s.svg) {
            this.t.removeAttribute("data-svg-origin");
            this.t.removeAttribute("transform");
          }
          delete this.t._gsTransform;
        }
      }
    }
  }
  Ie("clearProps", {
    parser: function (t, n, i, a, s) {
      (s = new Ce(t, i, 0, 0, s, 2)).setRatio = Qe;
      s.e = n;
      s.pr = -10;
      s.data = a._tween;
      e = true;
      return s;
    }
  });
  l = "bezier,throwProps,physicsProps,physics2D".split(",");
  Se = l.length;
  while (Se--) {
    ve(l[Se]);
  }
  (l = s.prototype)._firstPT = l._lastParsedTransform = l._transform = null;
  l._onInitTween = function (i, r, l, d) {
    if (!i.nodeType) {
      return false;
    }
    this._target = p = i;
    this._tween = l;
    this._vars = r;
    g = d;
    u = r.autoRound;
    e = false;
    t = r.suffixMap || s.suffixMap;
    n = Q(i, "");
    a = this._overwriteProps;
    var h;
    var E;
    var C;
    var f;
    var T;
    var S;
    var y;
    var v;
    var A;
    var O = i.style;
    if (c && O.zIndex === "") {
      if ((h = $(i, "zIndex", n)) === "auto" || h === "") {
        this._addLazySet(O, "zIndex", 0);
      }
    }
    if (typeof r == "string") {
      f = O.cssText;
      h = te(i, n);
      O.cssText = f + ";" + r;
      h = ne(i, h, te(i)).difs;
      if (!q && I.test(r)) {
        h.opacity = parseFloat(RegExp.$1);
      }
      r = h;
      O.cssText = f;
    }
    if (r.className) {
      this._firstPT = E = o.className.parse(i, r.className, "className", this, null, null, r);
    } else {
      this._firstPT = E = this.parse(i, r, null);
    }
    if (this._transformType) {
      A = this._transformType === 3;
      if (Re) {
        if (_) {
          c = true;
          if (O.zIndex === "") {
            if ((y = $(i, "zIndex", n)) === "auto" || y === "") {
              this._addLazySet(O, "zIndex", 0);
            }
          }
          if (m) {
            this._addLazySet(O, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (A ? "visible" : "hidden"));
          }
        }
      } else {
        O.zoom = 1;
      }
      C = E;
      while (C && C._next) {
        C = C._next;
      }
      v = new Ce(i, "transform", 0, 0, null, 2);
      this._linkCSSP(v, null, C);
      v.setRatio = Re ? Ye : Ke;
      v.data = this._transform || qe(i, n, true);
      v.tween = l;
      v.pr = -1;
      a.pop();
    }
    if (e) {
      while (E) {
        S = E._next;
        C = f;
        while (C && C.pr > E.pr) {
          C = C._next;
        }
        if (E._prev = C ? C._prev : T) {
          E._prev._next = E;
        } else {
          f = E;
        }
        if (E._next = C) {
          C._prev = E;
        } else {
          T = E;
        }
        E = S;
      }
      this._firstPT = f;
    }
    return true;
  };
  l.parse = function (e, i, a, s) {
    var r;
    var l;
    var c;
    var _;
    var d;
    var m;
    var h;
    var E;
    var C;
    var f;
    var T = e.style;
    for (r in i) {
      if (typeof (m = i[r]) == "function") {
        m = m(g, p);
      }
      if (l = o[r]) {
        a = l.parse(e, m, r, this, a, s, i);
      } else {
        if (r.substr(0, 2) === "--") {
          this._tween._propLookup[r] = this._addTween.call(this._tween, e.style, "setProperty", Q(e).getPropertyValue(r) + "", m + "", r, false, r);
          continue;
        }
        d = $(e, r, n) + "";
        C = typeof m == "string";
        if (r === "color" || r === "fill" || r === "stroke" || r.indexOf("Color") !== -1 || C && A.test(m)) {
          if (!C) {
            m = ((m = de(m)).length > 3 ? "rgba(" : "rgb(") + m.join(",") + ")";
          }
          a = Te(T, r, d, m, true, "transparent", a, 0, s);
        } else if (C && M.test(m)) {
          a = Te(T, r, d, m, true, null, a, 0, s);
        } else {
          h = (c = parseFloat(d)) || c === 0 ? d.substr((c + "").length) : "";
          if (d === "" || d === "auto") {
            if (r === "width" || r === "height") {
              c = se(e, r, n);
              h = "px";
            } else if (r === "left" || r === "top") {
              c = ee(e, r, n);
              h = "px";
            } else {
              c = r !== "opacity" ? 0 : 1;
              h = "";
            }
          }
          if (f = C && m.charAt(1) === "=") {
            _ = parseInt(m.charAt(0) + "1", 10);
            m = m.substr(2);
            _ *= parseFloat(m);
            E = m.replace(S, "");
          } else {
            _ = parseFloat(m);
            E = C ? m.replace(S, "") : "";
          }
          if (E === "") {
            E = r in t ? t[r] : h;
          }
          m = _ || _ === 0 ? (f ? _ + c : _) + E : i[r];
          if (h !== E) {
            if (E !== "" || r === "lineHeight") {
              if ((_ || _ === 0) && c) {
                c = J(e, r, c, h);
                if (E === "%") {
                  c /= J(e, r, 100, "%") / 100;
                  if (i.strictUnits !== true) {
                    d = c + "%";
                  }
                } else if (E === "em" || E === "rem" || E === "vw" || E === "vh") {
                  c /= J(e, r, 1, E);
                } else if (E !== "px") {
                  _ = J(e, r, _, E);
                  E = "px";
                }
                if (f && (_ || _ === 0)) {
                  m = _ + c + E;
                }
              }
            }
          }
          if (f) {
            _ += c;
          }
          if (!c && c !== 0 || !_ && _ !== 0) {
            if (T[r] !== undefined && (m || m + "" != "NaN" && m != null)) {
              (a = new Ce(T, r, _ || c || 0, 0, a, -1, r, false, 0, d, m)).xs0 = m !== "none" || r !== "display" && r.indexOf("Style") === -1 ? m : d;
            } else {
              Y("invalid " + r + " tween value: " + i[r]);
            }
          } else {
            (a = new Ce(T, r, c, _ - c, a, 0, r, u !== false && (E === "px" || r === "zIndex"), 0, d, m)).xs0 = E;
          }
        }
      }
      if (s && a && !a.plugin) {
        a.plugin = s;
      }
    }
    return a;
  };
  l.setRatio = function (e) {
    var t;
    var n;
    var i;
    var a = this._firstPT;
    if (e !== 1 || this._tween._time !== this._tween._duration && this._tween._time !== 0) {
      if (e || this._tween._time !== this._tween._duration && this._tween._time !== 0 || this._tween._rawPrevTime === -0.000001) {
        while (a) {
          t = a.c * e + a.s;
          if (a.r) {
            t = a.r(t);
          } else if (t < 0.000001 && t > -0.000001) {
            t = 0;
          }
          if (a.type) {
            if (a.type === 1) {
              if ((i = a.l) === 2) {
                a.t[a.p] = a.xs0 + t + a.xs1 + a.xn1 + a.xs2;
              } else if (i === 3) {
                a.t[a.p] = a.xs0 + t + a.xs1 + a.xn1 + a.xs2 + a.xn2 + a.xs3;
              } else if (i === 4) {
                a.t[a.p] = a.xs0 + t + a.xs1 + a.xn1 + a.xs2 + a.xn2 + a.xs3 + a.xn3 + a.xs4;
              } else if (i === 5) {
                a.t[a.p] = a.xs0 + t + a.xs1 + a.xn1 + a.xs2 + a.xn2 + a.xs3 + a.xn3 + a.xs4 + a.xn4 + a.xs5;
              } else {
                n = a.xs0 + t + a.xs1;
                i = 1;
                for (; i < a.l; i++) {
                  n += a["xn" + i] + a["xs" + (i + 1)];
                }
                a.t[a.p] = n;
              }
            } else if (a.type === -1) {
              a.t[a.p] = a.xs0;
            } else if (a.setRatio) {
              a.setRatio(e);
            }
          } else {
            a.t[a.p] = t + a.xs0;
          }
          a = a._next;
        }
      } else {
        while (a) {
          if (a.type !== 2) {
            a.t[a.p] = a.b;
          } else {
            a.setRatio(e);
          }
          a = a._next;
        }
      }
    } else {
      while (a) {
        if (a.type !== 2) {
          if (a.r && a.type !== -1) {
            t = a.r(a.s + a.c);
            if (a.type) {
              if (a.type === 1) {
                i = a.l;
                n = a.xs0 + t + a.xs1;
                i = 1;
                for (; i < a.l; i++) {
                  n += a["xn" + i] + a["xs" + (i + 1)];
                }
                a.t[a.p] = n;
              }
            } else {
              a.t[a.p] = t + a.xs0;
            }
          } else {
            a.t[a.p] = a.e;
          }
        } else {
          a.setRatio(e);
        }
        a = a._next;
      }
    }
  };
  l._enableTransforms = function (e) {
    this._transform = this._transform || qe(this._target, n, true);
    this._transformType = this._transform.svg && Ae || !e && this._transformType !== 3 ? 2 : 3;
  };
  function $e(e) {
    this.t[this.p] = this.e;
    this.data._linkCSSP(this, this._next, null, true);
  }
  l._addLazySet = function (e, t, n) {
    var i = this._firstPT = new Ce(e, t, 0, 0, this._firstPT, 2);
    i.e = n;
    i.setRatio = $e;
    i.data = this;
  };
  l._linkCSSP = function (e, t, n, i) {
    if (e) {
      if (t) {
        t._prev = e;
      }
      if (e._next) {
        e._next._prev = e._prev;
      }
      if (e._prev) {
        e._prev._next = e._next;
      } else if (this._firstPT === e) {
        this._firstPT = e._next;
        i = true;
      }
      if (n) {
        n._next = e;
      } else if (!i && this._firstPT === null) {
        this._firstPT = e;
      }
      e._next = t;
      e._prev = n;
    }
    return e;
  };
  l._mod = function (e) {
    for (var t = this._firstPT; t;) {
      if (typeof e[t.p] == "function") {
        t.r = e[t.p];
      }
      t = t._next;
    }
  };
  l._kill = function (e) {
    var t;
    var n;
    var a;
    var s = e;
    if (e.autoAlpha || e.alpha) {
      s = {};
      for (n in e) {
        s[n] = e[n];
      }
      s.opacity = 1;
      if (s.autoAlpha) {
        s.visibility = 1;
      }
    }
    if (e.className && (t = this._classNamePT)) {
      if ((a = t.xfirst) && a._prev) {
        this._linkCSSP(a._prev, t._next, a._prev._prev);
      } else if (a === this._firstPT) {
        this._firstPT = t._next;
      }
      if (t._next) {
        this._linkCSSP(t._next, t._next._next, a._prev);
      }
      this._classNamePT = null;
    }
    t = this._firstPT;
    while (t) {
      if (t.plugin && t.plugin !== n && t.plugin._kill) {
        t.plugin._kill(e);
        n = t.plugin;
      }
      t = t._next;
    }
    return i.TweenPlugin.prototype._kill.call(this, s);
  };
  function Je(e, t, n) {
    var i;
    var a;
    var s;
    var r;
    if (e.slice) {
      for (a = e.length; --a > -1;) {
        Je(e[a], t, n);
      }
    } else {
      for (a = (i = e.childNodes).length; --a > -1;) {
        r = (s = i[a]).type;
        if (s.style) {
          t.push(te(s));
          if (n) {
            n.push(s);
          }
        }
        if ((r === 1 || r === 9 || r === 11) && !!s.childNodes.length) {
          Je(s, t, n);
        }
      }
    }
  }
  s.cascadeTo = function (e, t, n) {
    var a;
    var s;
    var r;
    var o;
    var l = i.default.to(e, t, n);
    var u = [l];
    var c = [];
    var _ = [];
    var d = [];
    var m = i.default._internals.reservedProps;
    e = l._targets || l.target;
    Je(e, c, d);
    l.render(t, true, true);
    Je(e, _);
    l.render(0, true, true);
    l._enabled(true);
    a = d.length;
    while (--a > -1) {
      if ((s = ne(d[a], c[a], _[a])).firstMPT) {
        s = s.difs;
        for (r in n) {
          if (m[r]) {
            s[r] = n[r];
          }
        }
        o = {};
        for (r in s) {
          o[r] = c[a][r];
        }
        u.push(i.default.fromTo(d[a], t, o, s));
      }
    }
    return u;
  };
  i.TweenPlugin.activate([s]);
  return s;
}, true);
export var CSSPlugin = i.globals.CSSPlugin;