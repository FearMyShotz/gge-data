var e = require("./24.js");
var i = require("./47.js");
var a = /%[sdj%]/g;
exports.format = function (e) {
  if (!isString(e)) {
    var t = [];
    for (var n = 0; n < arguments.length; n++) {
      t.push(inspect(arguments[n]));
    }
    return t.join(" ");
  }
  n = 1;
  for (var i = arguments, s = i.length, r = String(e).replace(a, function (e) {
      if (e === "%%") {
        return "%";
      }
      if (n >= s) {
        return e;
      }
      switch (e) {
        case "%s":
          return String(i[n++]);
        case "%d":
          return Number(i[n++]);
        case "%j":
          try {
            return JSON.stringify(i[n++]);
          } catch (e) {
            return "[Circular]";
          }
        default:
          return e;
      }
    }), o = i[n]; n < s; o = i[++n]) {
    if (isNull(o) || !isObject(o)) {
      r += " " + o;
    } else {
      r += " " + inspect(o);
    }
  }
  return r;
};
exports.deprecate = function (n, a) {
  if (isUndefined(e.process)) {
    return function () {
      return exports.deprecate(n, a).apply(this, arguments);
    };
  }
  if (i.noDeprecation === true) {
    return n;
  }
  var s = false;
  return function deprecated() {
    if (!s) {
      if (i.throwDeprecation) {
        throw new Error(a);
      }
      if (i.traceDeprecation) {
        console.trace(a);
      } else {
        console.error(a);
      }
      s = true;
    }
    return n.apply(this, arguments);
  };
};
var s;
var r = {};
function inspect(e, n) {
  var i = {
    seen: [],
    stylize: stylizeNoColor
  };
  if (arguments.length >= 3) {
    i.depth = arguments[2];
  }
  if (arguments.length >= 4) {
    i.colors = arguments[3];
  }
  if (isBoolean(n)) {
    i.showHidden = n;
  } else if (n) {
    exports._extend(i, n);
  }
  if (isUndefined(i.showHidden)) {
    i.showHidden = false;
  }
  if (isUndefined(i.depth)) {
    i.depth = 2;
  }
  if (isUndefined(i.colors)) {
    i.colors = false;
  }
  if (isUndefined(i.customInspect)) {
    i.customInspect = true;
  }
  if (i.colors) {
    i.stylize = stylizeWithColor;
  }
  return formatValue(i, e, i.depth);
}
function stylizeWithColor(e, t) {
  var n = inspect.styles[t];
  if (n) {
    return "[" + inspect.colors[n][0] + "m" + e + "[" + inspect.colors[n][1] + "m";
  } else {
    return e;
  }
}
function stylizeNoColor(e, t) {
  return e;
}
function formatValue(e, n, i) {
  if (e.customInspect && n && isFunction(n.inspect) && n.inspect !== exports.inspect && (!n.constructor || n.constructor.prototype !== n)) {
    var a = n.inspect(i, e);
    if (!isString(a)) {
      a = formatValue(e, a, i);
    }
    return a;
  }
  var s = function formatPrimitive(e, t) {
    if (isUndefined(t)) {
      return e.stylize("undefined", "undefined");
    }
    if (isString(t)) {
      var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\"") + "'";
      return e.stylize(n, "string");
    }
    if (isNumber(t)) {
      return e.stylize("" + t, "number");
    }
    if (isBoolean(t)) {
      return e.stylize("" + t, "boolean");
    }
    if (isNull(t)) {
      return e.stylize("null", "null");
    }
  }(e, n);
  if (s) {
    return s;
  }
  var r = Object.keys(n);
  var o = function arrayToHash(e) {
    var t = {};
    e.forEach(function (e, n) {
      t[e] = true;
    });
    return t;
  }(r);
  if (e.showHidden) {
    r = Object.getOwnPropertyNames(n);
  }
  if (isError(n) && (r.indexOf("message") >= 0 || r.indexOf("description") >= 0)) {
    return formatError(n);
  }
  if (r.length === 0) {
    if (isFunction(n)) {
      var l = n.name ? ": " + n.name : "";
      return e.stylize("[Function" + l + "]", "special");
    }
    if (isRegExp(n)) {
      return e.stylize(RegExp.prototype.toString.call(n), "regexp");
    }
    if (isDate(n)) {
      return e.stylize(Date.prototype.toString.call(n), "date");
    }
    if (isError(n)) {
      return formatError(n);
    }
  }
  var u;
  var c = "";
  var _ = false;
  var d = ["{", "}"];
  if (isArray(n)) {
    _ = true;
    d = ["[", "]"];
  }
  if (isFunction(n)) {
    c = " [Function" + (n.name ? ": " + n.name : "") + "]";
  }
  if (isRegExp(n)) {
    c = " " + RegExp.prototype.toString.call(n);
  }
  if (isDate(n)) {
    c = " " + Date.prototype.toUTCString.call(n);
  }
  if (isError(n)) {
    c = " " + formatError(n);
  }
  if (r.length !== 0 || _ && n.length != 0) {
    if (i < 0) {
      if (isRegExp(n)) {
        return e.stylize(RegExp.prototype.toString.call(n), "regexp");
      } else {
        return e.stylize("[Object]", "special");
      }
    } else {
      e.seen.push(n);
      u = _ ? function formatArray(e, t, n, i, a) {
        var s = [];
        for (var r = 0, o = t.length; r < o; ++r) {
          if (hasOwnProperty(t, String(r))) {
            s.push(formatProperty(e, t, n, i, String(r), true));
          } else {
            s.push("");
          }
        }
        a.forEach(function (a) {
          if (!a.match(/^\d+$/)) {
            s.push(formatProperty(e, t, n, i, a, true));
          }
        });
        return s;
      }(e, n, i, o, r) : r.map(function (t) {
        return formatProperty(e, n, i, o, t, _);
      });
      e.seen.pop();
      return function reduceToSingleString(e, t, n) {
        if (e.reduce(function (e, t) {
          0;
          if (t.indexOf("\n") >= 0) {
            0;
          }
          return e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0) > 60) {
          return n[0] + (t === "" ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1];
        }
        return n[0] + t + " " + e.join(", ") + " " + n[1];
      }(u, c, d);
    }
  } else {
    return d[0] + c + d[1];
  }
}
function formatError(e) {
  return "[" + Error.prototype.toString.call(e) + "]";
}
function formatProperty(e, t, n, i, a, s) {
  var r;
  var o;
  var l;
  if ((l = Object.getOwnPropertyDescriptor(t, a) || {
    value: t[a]
  }).get) {
    o = l.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special");
  } else if (l.set) {
    o = e.stylize("[Setter]", "special");
  }
  if (!hasOwnProperty(i, a)) {
    r = "[" + a + "]";
  }
  if (!o) {
    if (e.seen.indexOf(l.value) < 0) {
      if ((o = isNull(n) ? formatValue(e, l.value, null) : formatValue(e, l.value, n - 1)).indexOf("\n") > -1) {
        o = s ? o.split("\n").map(function (e) {
          return "  " + e;
        }).join("\n").substr(2) : "\n" + o.split("\n").map(function (e) {
          return "   " + e;
        }).join("\n");
      }
    } else {
      o = e.stylize("[Circular]", "special");
    }
  }
  if (isUndefined(r)) {
    if (s && a.match(/^\d+$/)) {
      return o;
    }
    if ((r = JSON.stringify("" + a)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      r = r.substr(1, r.length - 2);
      r = e.stylize(r, "name");
    } else {
      r = r.replace(/'/g, "\\'").replace(/\\"/g, "\"").replace(/(^"|"$)/g, "'");
      r = e.stylize(r, "string");
    }
  }
  return r + ": " + o;
}
function isArray(e) {
  return Array.isArray(e);
}
function isBoolean(e) {
  return typeof e == "boolean";
}
function isNull(e) {
  return e === null;
}
function isNumber(e) {
  return typeof e == "number";
}
function isString(e) {
  return typeof e == "string";
}
function isUndefined(e) {
  return e === undefined;
}
function isRegExp(e) {
  return isObject(e) && objectToString(e) === "[object RegExp]";
}
function isObject(e) {
  return typeof e == "object" && e !== null;
}
function isDate(e) {
  return isObject(e) && objectToString(e) === "[object Date]";
}
function isError(e) {
  return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
}
function isFunction(e) {
  return typeof e == "function";
}
function objectToString(e) {
  return Object.prototype.toString.call(e);
}
function pad(e) {
  if (e < 10) {
    return "0" + e.toString(10);
  } else {
    return e.toString(10);
  }
}
exports.debuglog = function (e) {
  if (isUndefined(s)) {
    s = i.env.NODE_DEBUG || "";
  }
  e = e.toUpperCase();
  if (!r[e]) {
    if (new RegExp("\\b" + e + "\\b", "i").test(s)) {
      var n = i.pid;
      r[e] = function () {
        var i = exports.format.apply(exports, arguments);
        console.error("%s %d: %s", e, n, i);
      };
    } else {
      r[e] = function () {};
    }
  }
  return r[e];
};
exports.inspect = inspect;
inspect.colors = {
  bold: [1, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  white: [37, 39],
  grey: [90, 39],
  black: [30, 39],
  blue: [34, 39],
  cyan: [36, 39],
  green: [32, 39],
  magenta: [35, 39],
  red: [31, 39],
  yellow: [33, 39]
};
inspect.styles = {
  special: "cyan",
  number: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  date: "magenta",
  regexp: "red"
};
exports.isArray = isArray;
exports.isBoolean = isBoolean;
exports.isNull = isNull;
exports.isNullOrUndefined = function isNullOrUndefined(e) {
  return e == null;
};
exports.isNumber = isNumber;
exports.isString = isString;
exports.isSymbol = function isSymbol(e) {
  return typeof e == "symbol";
};
exports.isUndefined = isUndefined;
exports.isRegExp = isRegExp;
exports.isObject = isObject;
exports.isDate = isDate;
exports.isError = isError;
exports.isFunction = isFunction;
exports.isPrimitive = function isPrimitive(e) {
  return e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string" || typeof e == "symbol" || e === undefined;
};
exports.isBuffer = require("./541.js");
var o = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function hasOwnProperty(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
exports.log = function () {
  console.log("%s - %s", function timestamp() {
    var e = new Date();
    var t = [pad(e.getHours()), pad(e.getMinutes()), pad(e.getSeconds())].join(":");
    return [e.getDate(), o[e.getMonth()], t].join(" ");
  }(), exports.format.apply(exports, arguments));
};
exports.inherits = require("./542.js");
exports._extend = function (e, t) {
  if (!t || !isObject(t)) {
    return e;
  }
  var n = Object.keys(t);
  for (var i = n.length; i--;) {
    e[n[i]] = t[n[i]];
  }
  return e;
};