var a;
(function () {
  function aa(e, t, n) {
    return e.call.apply(e.bind, arguments);
  }
  function ba(e, t, n) {
    if (!e) {
      throw Error();
    }
    if (arguments.length > 2) {
      var i = Array.prototype.slice.call(arguments, 2);
      return function () {
        var n = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(n, i);
        return e.apply(t, n);
      };
    }
    return function () {
      return e.apply(t, arguments);
    };
  }
  function p(e, t, n) {
    return (p = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? aa : ba).apply(null, arguments);
  }
  var s = Date.now || function () {
    return +new Date();
  };
  var r = !!window.FontFace;
  function t(e, t, n, i) {
    t = e.c.createElement(t);
    if (n) {
      for (var a in n) {
        if (n.hasOwnProperty(a)) {
          if (a == "style") {
            t.style.cssText = n[a];
          } else {
            t.setAttribute(a, n[a]);
          }
        }
      }
    }
    if (i) {
      t.appendChild(e.c.createTextNode(i));
    }
    return t;
  }
  function u(e, t, n) {
    if (!(e = e.c.getElementsByTagName(t)[0])) {
      e = document.documentElement;
    }
    e.insertBefore(n, e.lastChild);
  }
  function v(e) {
    if (e.parentNode) {
      e.parentNode.removeChild(e);
    }
  }
  function w(e, t, n) {
    t = t || [];
    n = n || [];
    var i = e.className.split(/\s+/);
    for (var a = 0; a < t.length; a += 1) {
      var s = false;
      for (var r = 0; r < i.length; r += 1) {
        if (t[a] === i[r]) {
          s = true;
          break;
        }
      }
      if (!s) {
        i.push(t[a]);
      }
    }
    t = [];
    a = 0;
    for (; a < i.length; a += 1) {
      s = false;
      r = 0;
      for (; r < n.length; r += 1) {
        if (i[a] === n[r]) {
          s = true;
          break;
        }
      }
      if (!s) {
        t.push(i[a]);
      }
    }
    e.className = t.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
  }
  function y(e, t) {
    var n = e.className.split(/\s+/);
    for (var i = 0, a = n.length; i < a; i++) {
      if (n[i] == t) {
        return true;
      }
    }
    return false;
  }
  function z(e, n, i) {
    function d() {
      if (l && a && s) {
        l(o);
        l = null;
      }
    }
    n = t(e, "link", {
      rel: "stylesheet",
      href: n,
      media: "all"
    });
    var a = false;
    var s = true;
    var o = null;
    var l = i || null;
    if (r) {
      n.onload = function () {
        a = true;
        d();
      };
      n.onerror = function () {
        a = true;
        o = Error("Stylesheet failed to load");
        d();
      };
    } else {
      setTimeout(function () {
        a = true;
        d();
      }, 0);
    }
    u(e, "head", n);
  }
  function A(e, n, i, a) {
    var s = e.c.getElementsByTagName("head")[0];
    if (s) {
      var r = t(e, "script", {
        src: n
      });
      var o = false;
      r.onload = r.onreadystatechange = function () {
        if (!o && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
          o = true;
          if (i) {
            i(null);
          }
          r.onload = r.onreadystatechange = null;
          if (r.parentNode.tagName == "HEAD") {
            s.removeChild(r);
          }
        }
      };
      s.appendChild(r);
      setTimeout(function () {
        if (!o) {
          o = true;
          if (i) {
            i(Error("Script load timeout"));
          }
        }
      }, a || 5000);
      return r;
    }
    return null;
  }
  function B() {
    this.a = 0;
    this.c = null;
  }
  function C(e) {
    e.a++;
    return function () {
      e.a--;
      D(e);
    };
  }
  function E(e, t) {
    e.c = t;
    D(e);
  }
  function D(e) {
    if (e.a == 0 && e.c) {
      e.c();
      e.c = null;
    }
  }
  function F(e) {
    this.a = e || "-";
  }
  function G(e, t) {
    this.c = e;
    this.f = 4;
    this.a = "n";
    var n = (t || "n4").match(/^([nio])([1-9])$/i);
    if (n) {
      this.a = n[1];
      this.f = parseInt(n[2], 10);
    }
  }
  function I(e) {
    var t = [];
    e = e.split(/,\s*/);
    for (var n = 0; n < e.length; n++) {
      var i = e[n].replace(/['"]/g, "");
      if (i.indexOf(" ") != -1 || /^\d/.test(i)) {
        t.push("'" + i + "'");
      } else {
        t.push(i);
      }
    }
    return t.join(",");
  }
  function J(e) {
    return e.a + e.f;
  }
  function H(e) {
    var t = "normal";
    if (e.a === "o") {
      t = "oblique";
    } else if (e.a === "i") {
      t = "italic";
    }
    return t;
  }
  function ga(e) {
    var t = 4;
    var n = "n";
    var i = null;
    if (e) {
      if ((i = e.match(/(normal|oblique|italic)/i)) && i[1]) {
        n = i[1].substr(0, 1).toLowerCase();
      }
      if ((i = e.match(/([1-9]00|normal|bold)/i)) && i[1]) {
        if (/bold/i.test(i[1])) {
          t = 7;
        } else if (/[1-9]00/.test(i[1])) {
          t = parseInt(i[1].substr(0, 1), 10);
        }
      }
    }
    return n + t;
  }
  function L(e) {
    if (e.g) {
      var t = y(e.f, e.a.c("wf", "active"));
      var n = [];
      var i = [e.a.c("wf", "loading")];
      if (!t) {
        n.push(e.a.c("wf", "inactive"));
      }
      w(e.f, n, i);
    }
    K(e, "inactive");
  }
  function K(e, t, n) {
    if (e.j && e.h[t]) {
      if (n) {
        e.h[t](n.c, J(n));
      } else {
        e.h[t]();
      }
    }
  }
  function M(e, n) {
    this.c = e;
    this.f = n;
    this.a = t(this.c, "span", {
      "aria-hidden": "true"
    }, this.f);
  }
  function N(e) {
    u(e.c, "body", e.a);
  }
  function O(e) {
    return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + I(e.c) + ";font-style:" + H(e) + ";font-weight:" + e.f + "00;";
  }
  function P(e, t, n, i, a, s) {
    this.g = e;
    this.j = t;
    this.a = i;
    this.c = n;
    this.f = a || 3000;
    this.h = s || undefined;
  }
  function Q(e, t, n, i, a, s, r) {
    this.v = e;
    this.B = t;
    this.c = n;
    this.a = i;
    this.s = r || "BESbswy";
    this.f = {};
    this.w = a || 3000;
    this.u = s || null;
    this.m = this.j = this.h = this.g = null;
    this.g = new M(this.c, this.s);
    this.h = new M(this.c, this.s);
    this.j = new M(this.c, this.s);
    this.m = new M(this.c, this.s);
    e = O(e = new G(this.a.c + ",serif", J(this.a)));
    this.g.a.style.cssText = e;
    e = O(e = new G(this.a.c + ",sans-serif", J(this.a)));
    this.h.a.style.cssText = e;
    e = O(e = new G("serif", J(this.a)));
    this.j.a.style.cssText = e;
    e = O(e = new G("sans-serif", J(this.a)));
    this.m.a.style.cssText = e;
    N(this.g);
    N(this.h);
    N(this.j);
    N(this.m);
  }
  F.prototype.c = function (e) {
    var t = [];
    for (var n = 0; n < arguments.length; n++) {
      t.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
    }
    return t.join(this.a);
  };
  P.prototype.start = function () {
    var e = this.c.o.document;
    var t = this;
    var n = s();
    var i = new Promise(function (i, a) {
      (function f() {
        if (s() - n >= t.f) {
          a();
        } else {
          e.fonts.load(function fa(e) {
            return H(e) + " " + e.f + "00 300px " + I(e.c);
          }(t.a), t.h).then(function (e) {
            if (e.length >= 1) {
              i();
            } else {
              setTimeout(f, 25);
            }
          }, function () {
            a();
          });
        }
      })();
    });
    var a = null;
    var r = new Promise(function (e, n) {
      a = setTimeout(n, t.f);
    });
    Promise.race([r, i]).then(function () {
      if (a) {
        clearTimeout(a);
        a = null;
      }
      t.g(t.a);
    }, function () {
      t.j(t.a);
    });
  };
  var o = {
    D: "serif",
    C: "sans-serif"
  };
  var l = null;
  function T() {
    if (l === null) {
      var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
      l = !!e && (parseInt(e[1], 10) < 536 || parseInt(e[1], 10) === 536 && parseInt(e[2], 10) <= 11);
    }
    return l;
  }
  function la(e, t, n) {
    for (var i in o) {
      if (o.hasOwnProperty(i) && t === e.f[o[i]] && n === e.f[o[i]]) {
        return true;
      }
    }
    return false;
  }
  function U(e) {
    var t;
    var n = e.g.a.offsetWidth;
    var i = e.h.a.offsetWidth;
    if (!(t = n === e.f.serif && i === e.f["sans-serif"])) {
      t = T() && la(e, n, i);
    }
    if (t) {
      if (s() - e.A >= e.w) {
        if (T() && la(e, n, i) && (e.u === null || e.u.hasOwnProperty(e.a.c))) {
          V(e, e.v);
        } else {
          V(e, e.B);
        }
      } else {
        (function ma(e) {
          setTimeout(p(function () {
            U(this);
          }, e), 50);
        })(e);
      }
    } else {
      V(e, e.v);
    }
  }
  function V(e, t) {
    setTimeout(p(function () {
      v(this.g.a);
      v(this.h.a);
      v(this.j.a);
      v(this.m.a);
      t(this.a);
    }, e), 0);
  }
  function W(e, t, n) {
    this.c = e;
    this.a = t;
    this.f = 0;
    this.m = this.j = false;
    this.s = n;
  }
  Q.prototype.start = function () {
    this.f.serif = this.j.a.offsetWidth;
    this.f["sans-serif"] = this.m.a.offsetWidth;
    this.A = s();
    U(this);
  };
  var c = null;
  function na(e) {
    if (--e.f == 0 && e.j) {
      if (e.m) {
        if ((e = e.a).g) {
          w(e.f, [e.a.c("wf", "active")], [e.a.c("wf", "loading"), e.a.c("wf", "inactive")]);
        }
        K(e, "active");
      } else {
        L(e.a);
      }
    }
  }
  function oa(e) {
    this.j = e;
    this.a = new function ja() {
      this.c = {};
    }();
    this.h = 0;
    this.f = this.g = true;
  }
  function qa(e, t, n, i, a) {
    var s = --e.h == 0;
    if (e.f || e.g) {
      setTimeout(function () {
        var e = a || null;
        var r = i || {};
        if (n.length === 0 && s) {
          L(t.a);
        } else {
          t.f += n.length;
          if (s) {
            t.j = s;
          }
          var o;
          var l = [];
          for (o = 0; o < n.length; o++) {
            var u = n[o];
            var _ = r[u.c];
            var d = t.a;
            var m = u;
            if (d.g) {
              w(d.f, [d.a.c("wf", m.c, J(m).toString(), "loading")]);
            }
            K(d, "fontloading", m);
            d = null;
            if (c === null) {
              if (window.FontFace) {
                m = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);
                var h = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                c = m ? parseInt(m[1], 10) > 42 : !h;
              } else {
                c = false;
              }
            }
            d = c ? new P(p(t.g, t), p(t.h, t), t.c, u, t.s, _) : new Q(p(t.g, t), p(t.h, t), t.c, u, t.s, e, _);
            l.push(d);
          }
          for (o = 0; o < l.length; o++) {
            l[o].start();
          }
        }
      }, 0);
    }
  }
  function ra(e, t) {
    this.c = e;
    this.a = t;
  }
  function sa(e, t) {
    this.c = e;
    this.a = t;
  }
  W.prototype.g = function (e) {
    var t = this.a;
    if (t.g) {
      w(t.f, [t.a.c("wf", e.c, J(e).toString(), "active")], [t.a.c("wf", e.c, J(e).toString(), "loading"), t.a.c("wf", e.c, J(e).toString(), "inactive")]);
    }
    K(t, "fontactive", e);
    this.m = true;
    na(this);
  };
  W.prototype.h = function (e) {
    var t = this.a;
    if (t.g) {
      var n = y(t.f, t.a.c("wf", e.c, J(e).toString(), "active"));
      var i = [];
      var a = [t.a.c("wf", e.c, J(e).toString(), "loading")];
      if (!n) {
        i.push(t.a.c("wf", e.c, J(e).toString(), "inactive"));
      }
      w(t.f, i, a);
    }
    K(t, "fontinactive", e);
    na(this);
  };
  oa.prototype.load = function (e) {
    this.c = new function ca(e, t) {
      this.a = e;
      this.o = t || e;
      this.c = this.o.document;
    }(this.j, e.context || this.j);
    this.g = e.events !== false;
    this.f = e.classes !== false;
    (function pa(e, t, n) {
      var i = [];
      var a = n.timeout;
      (function ia(e) {
        if (e.g) {
          w(e.f, [e.a.c("wf", "loading")]);
        }
        K(e, "loading");
      })(t);
      var i = function ka(e, t, n) {
        var i;
        var a = [];
        for (i in t) {
          if (t.hasOwnProperty(i)) {
            var s = e.c[i];
            if (s) {
              a.push(s(t[i], n));
            }
          }
        }
        return a;
      }(e.a, n, e.c);
      var s = new W(e.c, t, a);
      e.h = i.length;
      t = 0;
      n = i.length;
      for (; t < n; t++) {
        i[t].load(function (t, n, i) {
          qa(e, s, t, n, i);
        });
      }
    })(this, new function ha(e, t) {
      this.c = e;
      this.f = e.o.document.documentElement;
      this.h = t;
      this.a = new F("-");
      this.j = t.events !== false;
      this.g = t.classes !== false;
    }(this.c, e), e);
  };
  ra.prototype.load = function (e) {
    var t = this;
    var n = t.a.projectId;
    var i = t.a.version;
    if (n) {
      var a = t.c.o;
      A(this.c, (t.a.api || "https://fast.fonts.net/jsapi") + "/" + n + ".js" + (i ? "?v=" + i : ""), function (i) {
        if (i) {
          e([]);
        } else {
          a["__MonotypeConfiguration__" + n] = function () {
            return t.a;
          };
          (function b() {
            if (a["__mti_fntLst" + n]) {
              var t;
              var i = a["__mti_fntLst" + n]();
              var s = [];
              if (i) {
                for (var r = 0; r < i.length; r++) {
                  var o = i[r].fontfamily;
                  if (i[r].fontStyle != undefined && i[r].fontWeight != undefined) {
                    t = i[r].fontStyle + i[r].fontWeight;
                    s.push(new G(o, t));
                  } else {
                    s.push(new G(o));
                  }
                }
              }
              e(s);
            } else {
              setTimeout(function () {
                b();
              }, 50);
            }
          })();
        }
      }).id = "__MonotypeAPIScript__" + n;
    } else {
      e([]);
    }
  };
  sa.prototype.load = function (e) {
    var t;
    var n;
    var i = this.a.urls || [];
    var a = this.a.families || [];
    var s = this.a.testStrings || {};
    var r = new B();
    t = 0;
    n = i.length;
    for (; t < n; t++) {
      z(this.c, i[t], C(r));
    }
    var o = [];
    t = 0;
    n = a.length;
    for (; t < n; t++) {
      if ((i = a[t].split(":"))[1]) {
        for (var l = i[1].split(","), u = 0; u < l.length; u += 1) {
          o.push(new G(i[0], l[u]));
        }
      } else {
        o.push(new G(i[0]));
      }
    }
    E(r, function () {
      e(o, s);
    });
  };
  var _ = "https://fonts.googleapis.com/css";
  var m = {
    latin: "BESbswy",
    "latin-ext": "çöüğş",
    cyrillic: "йяЖ",
    greek: "αβΣ",
    khmer: "កខគ",
    Hanuman: "កខគ"
  };
  var h = {
    thin: "1",
    extralight: "2",
    "extra-light": "2",
    ultralight: "2",
    "ultra-light": "2",
    light: "3",
    regular: "4",
    book: "4",
    medium: "5",
    "semi-bold": "6",
    semibold: "6",
    "demi-bold": "6",
    demibold: "6",
    bold: "7",
    "extra-bold": "8",
    extrabold: "8",
    "ultra-bold": "8",
    ultrabold: "8",
    black: "9",
    heavy: "9",
    l: "3",
    r: "4",
    b: "7"
  };
  var g = {
    i: "i",
    italic: "i",
    n: "n",
    normal: "n"
  };
  var S = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
  function Ea(e, t) {
    this.c = e;
    this.a = t;
  }
  var R = {
    Arimo: true,
    Cousine: true,
    Tinos: true
  };
  function Ga(e, t) {
    this.c = e;
    this.a = t;
  }
  function Ha(e, t) {
    this.c = e;
    this.f = t;
    this.a = [];
  }
  Ea.prototype.load = function (e) {
    var t = new B();
    var n = this.c;
    var i = new function ta(e, t) {
      this.c = e || _;
      this.a = [];
      this.f = [];
      this.g = t || "";
    }(this.a.api, this.a.text);
    var a = this.a.families;
    (function va(e, t) {
      for (var n = t.length, i = 0; i < n; i++) {
        var a = t[i].split(":");
        if (a.length == 3) {
          e.f.push(a.pop());
        }
        var s = "";
        if (a.length == 2 && a[1] != "") {
          s = ":";
        }
        e.a.push(a.join(s));
      }
    })(i, a);
    var s = new function ya(e) {
      this.f = e;
      this.a = [];
      this.c = {};
    }(a);
    (function Da(e) {
      for (var t = e.f.length, n = 0; n < t; n++) {
        var i = e.f[n].split(":");
        var a = i[0].replace(/\+/g, " ");
        var s = ["n4"];
        if (i.length >= 2) {
          var r;
          r = [];
          if (o = i[1]) {
            var o;
            for (var l = (o = o.split(",")).length, u = 0; u < l; u++) {
              var c;
              if ((c = o[u]).match(/^[\w-]+$/)) {
                if ((d = S.exec(c.toLowerCase())) == null) {
                  c = "";
                } else {
                  c = (c = d[2]) == null || c == "" ? "n" : g[c];
                  if ((d = d[1]) == null || d == "") {
                    d = "4";
                  } else {
                    var _ = h[d];
                    var d = _ || (isNaN(d) ? "4" : d.substr(0, 1));
                  }
                  c = [c, d].join("");
                }
              } else {
                c = "";
              }
              if (c) {
                r.push(c);
              }
            }
          }
          if (r.length > 0) {
            s = r;
          }
          if (i.length == 3) {
            r = [];
            if ((i = (i = i[2]) ? i.split(",") : r).length > 0 && (i = m[i[0]])) {
              e.c[a] = i;
            }
          }
        }
        if (!e.c[a]) {
          if (i = m[a]) {
            e.c[a] = i;
          }
        }
        i = 0;
        for (; i < s.length; i += 1) {
          e.a.push(new G(a, s[i]));
        }
      }
    })(s);
    z(n, function wa(e) {
      if (e.a.length == 0) {
        throw Error("No fonts to load!");
      }
      if (e.c.indexOf("kit=") != -1) {
        return e.c;
      }
      for (var t = e.a.length, n = [], i = 0; i < t; i++) {
        n.push(e.a[i].replace(/ /g, "+"));
      }
      t = e.c + "?family=" + n.join("%7C");
      if (e.f.length > 0) {
        t += "&subset=" + e.f.join(",");
      }
      if (e.g.length > 0) {
        t += "&text=" + encodeURIComponent(e.g);
      }
      return t;
    }(i), C(t));
    E(t, function () {
      e(s.a, s.c, R);
    });
  };
  Ga.prototype.load = function (e) {
    var t = this.a.id;
    var n = this.c.o;
    if (t) {
      A(this.c, (this.a.api || "https://use.typekit.net") + "/" + t + ".js", function (t) {
        if (t) {
          e([]);
        } else if (n.Typekit && n.Typekit.config && n.Typekit.config.fn) {
          t = n.Typekit.config.fn;
          var i = [];
          for (var a = 0; a < t.length; a += 2) {
            var s = t[a];
            for (var r = t[a + 1], o = 0; o < r.length; o++) {
              i.push(new G(s, r[o]));
            }
          }
          try {
            n.Typekit.load({
              events: false,
              classes: false,
              async: true
            });
          } catch (e) {}
          e(i);
        }
      }, 2000);
    } else {
      e([]);
    }
  };
  Ha.prototype.load = function (e) {
    var t = this.f.id;
    var n = this.c.o;
    var i = this;
    if (t) {
      n.__webfontfontdeckmodule__ ||= {};
      n.__webfontfontdeckmodule__[t] = function (t, n) {
        for (var a = 0, s = n.fonts.length; a < s; ++a) {
          var r = n.fonts[a];
          i.a.push(new G(r.name, ga("font-weight:" + r.weight + ";font-style:" + r.style)));
        }
        e(i.a);
      };
      A(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + function ea(e) {
        return e.o.location.hostname || e.a.location.hostname;
      }(this.c) + "/" + t + ".js", function (t) {
        if (t) {
          e([]);
        }
      });
    } else {
      e([]);
    }
  };
  var k = new oa(window);
  k.a.c.custom = function (e, t) {
    return new sa(t, e);
  };
  k.a.c.fontdeck = function (e, t) {
    return new Ha(t, e);
  };
  k.a.c.monotype = function (e, t) {
    return new ra(t, e);
  };
  k.a.c.typekit = function (e, t) {
    return new Ga(t, e);
  };
  k.a.c.google = function (e, t) {
    return new Ea(t, e);
  };
  var x = {
    load: p(k.load, k)
  };
  if ((a = function () {
    return x;
  }.call(exports, require, exports, module)) !== undefined) {
    module.exports = a;
  }
})();