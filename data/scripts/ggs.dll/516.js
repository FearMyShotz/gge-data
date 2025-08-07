module.exports = tokenize;
var i = /[\s{}=;:[\],'"()<>]/g;
var a = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
var s = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
var r = /^ *[*/]+ */;
var o = /^\s*\*?\/*/;
var l = /\n/g;
var u = /\s/;
var c = /\\(.?)/g;
var _ = {
  0: "\0",
  r: "\r",
  n: "\n",
  t: "\t"
};
function unescape(e) {
  return e.replace(c, function (e, t) {
    switch (t) {
      case "\\":
      case "":
        return t;
      default:
        return _[t] || "";
    }
  });
}
function tokenize(e, t) {
  var n = 0;
  var c = (e = e.toString()).length;
  var _ = 1;
  var d = null;
  var m = null;
  var h = 0;
  var p = false;
  var g = [];
  var E = null;
  function illegal(e) {
    return Error("illegal " + e + " (line " + _ + ")");
  }
  function charAt(t) {
    return e.charAt(t);
  }
  function setComment(n, i) {
    d = e.charAt(n++);
    h = _;
    p = false;
    var a;
    var s = n - (t ? 2 : 3);
    do {
      if (--s < 0 || (a = e.charAt(s)) === "\n") {
        p = true;
        break;
      }
    } while (a === " " || a === "\t");
    for (var u = e.substring(n, i).split(l), c = 0; c < u.length; ++c) {
      u[c] = u[c].replace(t ? o : r, "").trim();
    }
    m = u.join("\n").trim();
  }
  function isDoubleSlashCommentLine(t) {
    var n = findEndOfLine(t);
    var i = e.substring(t, n);
    return /^\s*\/{1,2}/.test(i);
  }
  function findEndOfLine(e) {
    for (var t = e; t < c && charAt(t) !== "\n";) {
      t++;
    }
    return t;
  }
  function next() {
    if (g.length > 0) {
      return g.shift();
    }
    if (E) {
      return function readString() {
        var t = E === "'" ? s : a;
        t.lastIndex = n - 1;
        var i = t.exec(e);
        if (!i) {
          throw illegal("string");
        }
        n = t.lastIndex;
        push(E);
        E = null;
        return unescape(i[1]);
      }();
    }
    var r;
    var o;
    var l;
    var d;
    var m;
    do {
      if (n === c) {
        return null;
      }
      for (r = false; u.test(l = charAt(n));) {
        if (l === "\n") {
          ++_;
        }
        if (++n === c) {
          return null;
        }
      }
      if (charAt(n) === "/") {
        if (++n === c) {
          throw illegal("comment");
        }
        if (charAt(n) === "/") {
          if (t) {
            d = n;
            m = false;
            if (isDoubleSlashCommentLine(n)) {
              m = true;
              do {
                if ((n = findEndOfLine(n)) === c) {
                  break;
                }
                n++;
              } while (isDoubleSlashCommentLine(n));
            } else {
              n = Math.min(c, findEndOfLine(n) + 1);
            }
            if (m) {
              setComment(d, n);
            }
            _++;
            r = true;
          } else {
            for (m = charAt(d = n + 1) === "/"; charAt(++n) !== "\n";) {
              if (n === c) {
                return null;
              }
            }
            ++n;
            if (m) {
              setComment(d, n - 1);
            }
            ++_;
            r = true;
          }
        } else {
          if ((l = charAt(n)) !== "*") {
            return "/";
          }
          d = n + 1;
          m = t || charAt(d) === "*";
          do {
            if (l === "\n") {
              ++_;
            }
            if (++n === c) {
              throw illegal("comment");
            }
            o = l;
            l = charAt(n);
          } while (o !== "*" || l !== "/");
          ++n;
          if (m) {
            setComment(d, n - 2);
          }
          r = true;
        }
      }
    } while (r);
    var h = n;
    i.lastIndex = 0;
    if (!i.test(charAt(h++))) {
      while (h < c && !i.test(charAt(h))) {
        ++h;
      }
    }
    var p = e.substring(n, n = h);
    if (p === "\"" || p === "'") {
      E = p;
    }
    return p;
  }
  function push(e) {
    g.push(e);
  }
  function peek() {
    if (!g.length) {
      var e = next();
      if (e === null) {
        return null;
      }
      push(e);
    }
    return g[0];
  }
  return Object.defineProperty({
    next: next,
    peek: peek,
    push: push,
    skip: function skip(e, t) {
      var n = peek();
      if (n === e) {
        next();
        return true;
      }
      if (!t) {
        throw illegal("token '" + n + "', '" + e + "' expected");
      }
      return false;
    },
    cmnt: function cmnt(e) {
      var n = null;
      if (e === undefined) {
        if (h === _ - 1 && (t || d === "*" || p)) {
          n = m;
        }
      } else {
        if (h < e) {
          peek();
        }
        if (h === e && !p && (!!t || d === "/")) {
          n = m;
        }
      }
      return n;
    }
  }, "line", {
    get: function () {
      return _;
    }
  });
}
tokenize.unescape = unescape;