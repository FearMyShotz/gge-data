var e = require("./24.js");
(function (e) {
  'use strict';

  var t = e.URLSearchParams ? e.URLSearchParams : null;
  var n = t && new t({
    a: 1
  }).toString() === "a=1";
  var i = t && new t("s=%2B").get("s") === "+";
  var a = "__URLSearchParams__";
  var s = URLSearchParamsPolyfill.prototype;
  var r = !!e.Symbol && !!e.Symbol.iterator;
  if (!t || !n || !i) {
    s.append = function (e, t) {
      appendTo(this[a], e, t);
    };
    s.delete = function (e) {
      delete this[a][e];
    };
    s.get = function (e) {
      var t = this[a];
      if (e in t) {
        return t[e][0];
      } else {
        return null;
      }
    };
    s.getAll = function (e) {
      var t = this[a];
      if (e in t) {
        return t[e].slice(0);
      } else {
        return [];
      }
    };
    s.has = function (e) {
      return e in this[a];
    };
    s.set = function set(e, t) {
      this[a][e] = ["" + t];
    };
    s.toString = function () {
      var e;
      var t;
      var n;
      var i;
      var s = this[a];
      var r = [];
      for (t in s) {
        n = encode(t);
        e = 0;
        i = s[t];
        for (; e < i.length; e++) {
          r.push(n + "=" + encode(i[e]));
        }
      }
      return r.join("&");
    };
    var o = !!i && t && !n && e.Proxy;
    e.URLSearchParams = o ? new Proxy(t, {
      construct: function (e, t) {
        return new e(new URLSearchParamsPolyfill(t[0]).toString());
      }
    }) : URLSearchParamsPolyfill;
    var l = e.URLSearchParams.prototype;
    l.polyfill = true;
    l.forEach = l.forEach || function (e, t) {
      var n = parseToDict(this.toString());
      Object.getOwnPropertyNames(n).forEach(function (i) {
        n[i].forEach(function (n) {
          e.call(t, n, i, this);
        }, this);
      }, this);
    };
    l.sort = l.sort || function () {
      var e;
      var t;
      var n;
      var i = parseToDict(this.toString());
      var a = [];
      for (e in i) {
        a.push(e);
      }
      a.sort();
      t = 0;
      for (; t < a.length; t++) {
        this.delete(a[t]);
      }
      for (t = 0; t < a.length; t++) {
        var s = a[t];
        var r = i[s];
        for (n = 0; n < r.length; n++) {
          this.append(s, r[n]);
        }
      }
    };
    l.keys = l.keys || function () {
      var e = [];
      this.forEach(function (t, n) {
        e.push(n);
      });
      return makeIterator(e);
    };
    l.values = l.values || function () {
      var e = [];
      this.forEach(function (t) {
        e.push(t);
      });
      return makeIterator(e);
    };
    l.entries = l.entries || function () {
      var e = [];
      this.forEach(function (t, n) {
        e.push([n, t]);
      });
      return makeIterator(e);
    };
    if (r) {
      l[e.Symbol.iterator] = l[e.Symbol.iterator] || l.entries;
    }
  }
  function URLSearchParamsPolyfill(e) {
    if ((e = e || "") instanceof URLSearchParams || e instanceof URLSearchParamsPolyfill) {
      e = e.toString();
    }
    this[a] = parseToDict(e);
  }
  function encode(e) {
    var t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'\(\)~]|%20|%00/g, function (e) {
      return t[e];
    });
  }
  function decode(e) {
    return decodeURIComponent(e.replace(/\+/g, " "));
  }
  function makeIterator(t) {
    var n = {
      next: function () {
        var e = t.shift();
        return {
          done: e === undefined,
          value: e
        };
      }
    };
    if (r) {
      n[e.Symbol.iterator] = function () {
        return n;
      };
    }
    return n;
  }
  function parseToDict(e) {
    var t = {};
    if (typeof e == "object") {
      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          appendTo(t, n, e[n]);
        }
      }
    } else {
      if (e.indexOf("?") === 0) {
        e = e.slice(1);
      }
      for (var i = e.split("&"), a = 0; a < i.length; a++) {
        var s = i[a];
        var r = s.indexOf("=");
        if (r > -1) {
          appendTo(t, decode(s.slice(0, r)), decode(s.slice(r + 1)));
        } else if (s) {
          appendTo(t, decode(s), "");
        }
      }
    }
    return t;
  }
  function appendTo(e, t, n) {
    var i = typeof n == "string" ? n : n !== null && n !== undefined && typeof n.toString == "function" ? n.toString() : JSON.stringify(n);
    if (t in e) {
      e[t].push(i);
    } else {
      e[t] = [i];
    }
  }
})(e !== undefined ? e : typeof window != "undefined" ? window : this);