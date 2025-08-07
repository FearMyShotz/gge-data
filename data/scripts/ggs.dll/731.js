(function (e) {
  var t = {
    boolean: fromString,
    number: fromString,
    object: function fromObject(e, t, n) {
      var r = !!t;
      var o = n === null;
      if (o) {
        if (!r) {
          return;
        }
        n = {};
      }
      var l;
      var u = Object.keys(n);
      var c = u.length;
      var _ = u.filter(isAttribute);
      var d = _.length;
      var m = e.i;
      var h = e.l;
      var p = r && m;
      if (r) {
        if (m && e.r) {
          e.r += i + h;
        }
        e.r += "<" + t;
        _.forEach(function (t) {
          (function writeAttributes(e, t, n) {
            if (a(n)) {
              n.forEach(function (n) {
                writeAttributes(e, t, n);
              });
            } else if (t || typeof n != "object") {
              (function writeAttribute(e, t, n) {
                var i = e.f;
                if (i) {
                  n = i(t, n);
                }
                if (n === undefined) {
                  return;
                }
                if (!t) {
                  e.r += " " + n;
                  return;
                }
                e.r += " " + t;
                if (n === null) {
                  return;
                }
                e.r += "=\"" + function escapeAttribute(e) {
                  return s.call(e, /([&"])/g, escapeRef);
                }(n) + "\"";
              })(e, t, n);
            } else {
              Object.keys(n).forEach(function (t) {
                writeAttributes(e, t, n[t]);
              });
            }
          })(e, t.substr(1), n[t]);
        });
        var g = o || d && c === d;
        if (g) {
          var E = t[0];
          if (E !== "!" && E !== "?") {
            e.r += "/";
          }
        }
        e.r += ">";
        if (g) {
          return;
        }
      }
      u.forEach(function (t) {
        if (!isAttribute(t)) {
          if (p && (t && t !== "#" || a(n[t]))) {
            e.l += e.s;
            p = 0;
            l = 1;
          }
          fromAny(e, t, n[t]);
        }
      });
      if (l) {
        e.l = e.l.substr(e.i);
        e.r += i + e.l;
      }
      if (r) {
        e.r += "</" + t + ">";
      }
    },
    string: fromString
  };
  var n = {
    "\t": "&#x09;",
    "\n": "&#x0a;",
    "\r": "&#x0d;",
    " ": "&#x20;",
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;"
  };
  var i = "\n";
  var a = Array.isArray || _isArray;
  var s = String.prototype.replace;
  function fromAny(e, n, i) {
    if (n === "#") {
      n = "";
    }
    if (_isArray(i)) {
      return function fromArray(e, t, n) {
        Array.prototype.forEach.call(n, function (n) {
          fromAny(e, t, n);
        });
      }(e, n, i);
    }
    var a = e.f;
    if (a) {
      i = a(n, i);
    }
    var s = t[typeof i];
    if (s) {
      s(e, n, i);
    }
  }
  function fromString(e, t, n) {
    if (t === "?") {
      n = "<?" + n + "?>";
    } else if (t === "!") {
      n = "<!" + n + ">";
    } else {
      n = function escapeTextNode(e) {
        return s.call(e, /(^\s|[&<>]|\s$)/g, escapeRef);
      }(n);
      if (t) {
        n = "<" + t + ">" + n + "</" + t + ">";
      }
    }
    if (t && e.i && e.r) {
      e.r += i + e.l;
    }
    e.r += n;
  }
  function isAttribute(e) {
    return e && e[0] === "@";
  }
  function escapeRef(e) {
    return n[e] || e;
  }
  function _isArray(e) {
    return e instanceof Array;
  }
  e.toXML = function _toXML(e, t, n) {
    var i = function createJob(e, t) {
      var n = {
        f: e,
        l: "",
        r: ""
      };
      if (t) {
        var i = "";
        if (t > 0) {
          for (var a = t; a; a--) {
            i += " ";
          }
        } else {
          i += t;
        }
        n.s = i;
        n.i = i.length;
      }
      return n;
    }(t, n);
    fromAny(i, "", e);
    return i.r;
  };
})(typeof exports == "object" && exports || {});