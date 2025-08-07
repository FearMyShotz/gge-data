var i;
var a;
var s;
/*!
 * Globalize v1.7.0 2021-08-02T11:53Z Released under the MIT license
 * http://git.io/TrdQbw
 */
a = [require("./42.js"), require("./66.js")];
if ((s = typeof (i = function (e) {
  function t(e, t) {
    return e = e.replace(/{[0-9a-zA-Z-_. ]+}/g, function (e) {
      e = e.replace(/^{([^}]*)}$/, "$1");
      if (typeof (n = t[e]) == "string") {
        return n;
      } else if (typeof n == "number") {
        return "" + n;
      } else {
        return JSON.stringify(n);
      }
      var n;
    });
  }
  function n() {
    var e = arguments[0];
    var t = [].slice.call(arguments, 1);
    t.forEach(function (t) {
      var n;
      for (n in t) {
        e[n] = t[n];
      }
    });
    return e;
  }
  function i(e, i, a) {
    var s;
    i = e + (i ? ": " + t(i, a) : "");
    (s = new Error(i)).code = e;
    n(s, a);
    return s;
  }
  function a(e, t, n) {
    if (e.length && e[e.length - 1].type === t) {
      e[e.length - 1].value += n;
    } else {
      e.push({
        type: t,
        value: n
      });
    }
  }
  function s(e) {
    return JSON.stringify(e, function (e, t) {
      if (t && t.runtimeKey) {
        return t.runtimeKey;
      } else {
        return t;
      }
    });
  }
  function r(e, t, n, a) {
    if (!n) {
      throw i(e, t, a);
    }
  }
  function o(e) {
    if (Array.isArray(e)) {
      return e;
    } else if (e) {
      return [e];
    } else {
      return [];
    }
  }
  function l(e, t, n) {
    var i;
    i = o((n = n || {}).skip).some(function (t) {
      return t.test(e);
    });
    r("E_MISSING_CLDR", "Missing required CLDR content `{path}`.", t || i, {
      path: e
    });
  }
  function u(e, t) {
    r("E_MISSING_PARAMETER", "Missing required parameter `{name}`.", e !== undefined, {
      name: t
    });
  }
  function c(e, t, n, i) {
    r("E_INVALID_PAR_TYPE", "Invalid `{name}` parameter ({value}). {expected} expected.", n, {
      expected: i,
      name: t,
      value: e
    });
  }
  function _(t, n) {
    c(t, n, t === undefined || typeof t == "string" || t instanceof e, "String or Cldr instance");
  }
  function d(e) {
    return e !== null && "" + e == "[object Object]";
  }
  function m(t) {
    if (t instanceof e) {
      return t;
    } else {
      return new e(t);
    }
  }
  function validateLikelySubtags(e) {
    e.once("get", l);
    e.get("supplemental/likelySubtags");
  }
  function Globalize(e) {
    if (!(this instanceof Globalize)) {
      return new Globalize(e);
    }
    u(e, "locale");
    _(e, "locale");
    this.cldr = m(e);
    validateLikelySubtags(this.cldr);
  }
  Globalize.load = function () {
    e.load.apply(e, arguments);
  };
  Globalize.locale = function (e) {
    _(e, "locale");
    if (arguments.length) {
      this.cldr = m(e);
      validateLikelySubtags(this.cldr);
    }
    return this.cldr;
  };
  Globalize._alwaysArray = o;
  Globalize._createError = i;
  Globalize._formatMessage = t;
  Globalize._formatMessageToParts = function (e, t) {
    var n = 0;
    var i = [];
    e.replace(/{[0-9a-zA-Z-_. ]+}/g, function (s, r) {
      var o = s.slice(1, -1);
      a(i, "literal", e.slice(n, r));
      a(i, "variable", t[o]);
      i[i.length - 1].name = o;
      n += r + s.length;
    });
    return i.filter(function (e) {
      return e.value !== "";
    });
  };
  Globalize._isPlainObject = d;
  Globalize._objectExtend = n;
  Globalize._partsJoin = function (e) {
    return e.map(function (e) {
      return e.value;
    }).join("");
  };
  Globalize._partsPush = a;
  Globalize._regexpEscape = function (e) {
    return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  };
  Globalize._runtimeBind = function (e, t, n, i) {
    var a = s(e);
    var r = function (e) {
      if (e.name !== undefined) {
        return e.name;
      }
      var t = /^function\s+([\w\$]+)\s*\(/.exec(e.toString());
      if (t && t.length > 0) {
        return t[1];
      } else {
        return undefined;
      }
    }(n);
    var o = t.locale;
    if (r) {
      n.runtimeKey = function (e, t, n, i) {
        var a;
        var r;
        i = i || s(n);
        r = e + t + i;
        if ((a = [].reduce.call(r, function (e, t) {
          var n = t.charCodeAt(0);
          return (e = (e << 5) - e + n) | 0;
        }, 0)) > 0) {
          return "a" + a;
        } else {
          return "b" + Math.abs(a);
        }
      }(r, o, null, a);
      n.generatorString = function () {
        return "Globalize(\"" + o + "\")." + r + "(" + a.slice(1, -1) + ")";
      };
      n.runtimeArgs = i;
      return n;
    } else {
      return n;
    }
  };
  Globalize._stringPad = function (e, t, n) {
    var i;
    if (typeof e != "string") {
      e = String(e);
    }
    i = e.length;
    for (; i < t; i += 1) {
      e = n ? e + "0" : "0" + e;
    }
    return e;
  };
  Globalize._validate = r;
  Globalize._validateCldr = l;
  Globalize._validateDefaultLocale = function (e) {
    r("E_DEFAULT_LOCALE_NOT_DEFINED", "Default locale has not been defined.", e !== undefined, {});
  };
  Globalize._validateParameterPresence = u;
  Globalize._validateParameterRange = function (e, t, n, i) {
    r("E_PAR_OUT_OF_RANGE", "Parameter `{name}` has value `{value}` out of range [{minimum}, {maximum}].", e === undefined || e >= n && e <= i, {
      maximum: i,
      minimum: n,
      name: t,
      value: e
    });
  };
  Globalize._validateParameterTypePlainObject = function (e, t) {
    c(e, t, e === undefined || d(e), "Plain Object");
  };
  Globalize._validateParameterType = c;
  return Globalize;
}) == "function" ? i.apply(exports, a) : i) !== undefined) {
  module.exports = s;
}