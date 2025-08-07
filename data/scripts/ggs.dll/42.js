var i;
var a;
/*!
 * CLDR JavaScript Library v0.5.4 2020-10-22T15:56Z MIT license © Rafael Xavier
 * http://git.io/h4lmVg
 */
if ((a = typeof (i = function () {
  var e;
  var t = Array.isArray || function (e) {
    return Object.prototype.toString.call(e) === "[object Array]";
  };
  function n(e, n) {
    if (t(e)) {
      e = e.join("/");
    }
    if (typeof e != "string") {
      throw new Error("invalid path \"" + e + "\"");
    }
    return (e = (e = e.replace(/^\//, "").replace(/^cldr\//, "")).replace(/{[a-zA-Z]+}/g, function (e) {
      e = e.replace(/^{([^}]*)}$/, "$1");
      return n[e];
    })).split("/");
  }
  function i(e, t) {
    var n;
    var i;
    if (e.some) {
      return e.some(t);
    }
    n = 0;
    i = e.length;
    for (; n < i; n++) {
      if (t(e[n], n, e)) {
        return true;
      }
    }
    return false;
  }
  function a(e, t, n, a) {
    var s;
    var r = n[0];
    var o = n[1];
    var l = e.localeSep;
    var u = n[2];
    var c = n.slice(3, 4);
    a = a || {};
    if (r !== "und" && o !== "Zzzz" && u !== "ZZ") {
      return [r, o, u].concat(c);
    } else if (t.get("supplemental/likelySubtags") !== undefined) {
      if (i([[r, o, u], [r, u], [r, o], [r], ["und", o]], function (e) {
        return s = !/\b(Zzzz|ZZ)\b/.test(e.join(l)) && t.get(["supplemental/likelySubtags", e.join(l)]);
      })) {
        s = s.split(l);
        return [r !== "und" ? r : s[0], o !== "Zzzz" ? o : s[1], u !== "ZZ" ? u : s[2]].concat(c);
      } else if (a.force) {
        return t.get("supplemental/likelySubtags/und").split(l);
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }
  function s(e, t, n) {
    var s;
    var r = n[0];
    var o = n[1];
    var l = n[2];
    var u = n[3];
    if (i([[[r, "Zzzz", "ZZ"], [r]], [[r, "Zzzz", l], [r, l]], [[r, o, "ZZ"], [r, o]]], function (i) {
      var r = a(e, t, i[0]);
      s = i[1];
      return r && r[0] === n[0] && r[1] === n[1] && r[2] === n[2];
    })) {
      if (u) {
        s.push(u);
      }
      return s;
    } else {
      return n;
    }
  }
  function r(e) {
    var t;
    var n;
    var i = [];
    e = e.replace(/_/, "-");
    if ((t = e.split("-u-"))[1]) {
      t[1] = t[1].split("-t-");
      e = t[0] + (t[1][1] ? "-t-" + t[1][1] : "");
      i[4] = t[1][0];
    }
    n = e.split("-t-")[0];
    if ((t = n.match(/^(([a-z]{2,3})(-([A-Z][a-z]{3}))?(-([A-Z]{2}|[0-9]{3}))?)((-([a-zA-Z0-9]{5,8}|[0-9][a-zA-Z0-9]{3}))*)$|^(root)$/)) === null) {
      return ["und", "Zzzz", "ZZ"];
    } else {
      i[0] = t[10] || t[2] || "und";
      i[1] = t[4] || "Zzzz";
      i[2] = t[6] || "ZZ";
      if (t[7] && t[7].length) {
        i[3] = t[7].slice(1);
      }
      return i;
    }
  }
  function o(e, t) {
    var n;
    var i;
    if (e.forEach) {
      return e.forEach(t);
    }
    n = 0;
    i = e.length;
    for (; n < i; n++) {
      t(e[n], n, e);
    }
  }
  function l(e, t) {
    var n;
    var i;
    i = e + (t && JSON ? ": " + JSON.stringify(t) : "");
    (n = new Error(i)).code = e;
    o(function (e) {
      var t;
      var n = [];
      if (Object.keys) {
        return Object.keys(e);
      }
      for (t in e) {
        n.push(t);
      }
      return n;
    }(t), function (e) {
      n[e] = t[e];
    });
    return n;
  }
  function u(e, t, n) {
    if (!t) {
      throw l(e, n);
    }
  }
  function c(e, t) {
    u("E_MISSING_PARAMETER", e !== undefined, {
      name: t
    });
  }
  function _(e, t, n, i) {
    u("E_INVALID_PAR_TYPE", n, {
      expected: i,
      name: t,
      value: e
    });
  }
  function d(e, n) {
    _(e, n, typeof e == "string" || t(e), "String or Array");
  }
  function m(e, t) {
    var n;
    _(e, t, e === undefined || (n = e) !== null && "" + n == "[object Object]", "Plain Object");
  }
  function h(e, t) {
    var n;
    var i = e;
    var a = t.length;
    for (n = 0; n < a - 1; n++) {
      if (!(i = i[t[n]])) {
        return;
      }
    }
    return i[t[n]];
  }
  function p(e, t) {
    var n;
    var i = e._availableBundleMapQueue;
    var a = h(t, ["main"]);
    if (a) {
      for (n in a) {
        if (a.hasOwnProperty(n) && n !== "root" && i.indexOf(n) === -1) {
          i.push(n);
        }
      }
    }
  }
  function g(e) {
    if (t(e)) {
      return e;
    } else {
      return [e];
    }
  }
  var E = e = function () {
    var n = {};
    var i = [].slice.call(arguments, 0);
    o(i, function (i) {
      var a;
      for (a in i) {
        if (a in n && typeof n[a] == "object" && !t(n[a])) {
          n[a] = e(n[a], i[a]);
        } else {
          n[a] = i[a];
        }
      }
    });
    return n;
  };
  function C(e, t, n) {
    var i;
    var a;
    var s;
    c(n[0], "json");
    i = 0;
    for (; i < n.length; i++) {
      s = g(n[i]);
      a = 0;
      for (; a < s.length; a++) {
        m(s[a], "json");
        t = E(t, s[a]);
        p(e, s[a]);
      }
    }
    return t;
  }
  function f(e, t, i) {
    var a = n(t, i);
    return h(e._resolved, a);
  }
  function T(e) {
    this.init(e);
  }
  T._alwaysArray = g;
  T._coreLoad = C;
  T._createError = l;
  T._itemGetResolved = f;
  T._jsonMerge = E;
  T._pathNormalize = n;
  T._resourceGet = h;
  T._validatePresence = c;
  T._validateType = _;
  T._validateTypePath = d;
  T._validateTypePlainObject = m;
  T._availableBundleMap = {};
  T._availableBundleMapQueue = [];
  T._resolved = {};
  T.localeSep = "-";
  T.load = function () {
    T._resolved = C(T, T._resolved, arguments);
  };
  T.prototype.init = function (e) {
    var t;
    var n;
    var i;
    var l;
    var u;
    var d;
    var m;
    var h;
    var p;
    var g;
    var E = T.localeSep;
    var C = "";
    c(e, "locale");
    _(g = e, "locale", typeof g == "string", "a string");
    if ((d = r(e)).length === 5) {
      C = E + "u" + E + (h = d.pop());
      if (!d[3]) {
        d.pop();
      }
    }
    p = d[3];
    n = (i = a(T, this, d, {
      force: true
    }) || d)[0];
    u = i[1];
    m = i[2];
    l = s(T, this, i).join(E);
    this.attributes = t = {
      bundle: function (e, t, n) {
        var i = e._availableBundleMap;
        var l = e._availableBundleMapQueue;
        if (l.length) {
          o(l, function (n, o) {
            var u;
            var c;
            var _;
            var d;
            d = r(n);
            if ((c = a(e, t, d)) === undefined) {
              l.splice(o, 1);
              throw new Error("Could not find likelySubtags for " + n);
            }
            _ = (_ = s(e, t, c)).join(e.localeSep);
            if (!(u = i[_]) || !(u.length < n.length)) {
              i[_] = n;
            }
          });
          e._availableBundleMapQueue = [];
        }
        return i[n] || null;
      }(T, this, l),
      minLanguageId: l + C,
      maxLanguageId: i.join(E) + C,
      language: n,
      script: u,
      territory: m,
      region: m,
      variant: p
    };
    if (h) {
      ("-" + h).replace(/-[a-z]{3,8}|(-[a-z]{2})-([a-z]{3,8})/g, function (e, n, i) {
        if (n) {
          t["u" + n] = i;
        } else {
          t["u" + e] = true;
        }
      });
    }
    this.locale = e;
  };
  T.prototype.get = function (e) {
    c(e, "path");
    d(e, "path");
    return f(T, e, this.attributes);
  };
  T.prototype.main = function (e) {
    c(e, "path");
    d(e, "path");
    u("E_MISSING_BUNDLE", this.attributes.bundle !== null, {
      locale: this.locale
    });
    e = g(e);
    return this.get(["main/{bundle}"].concat(e));
  };
  return T;
}) == "function" ? i.call(exports, require, exports, module) : i) !== undefined) {
  module.exports = a;
}