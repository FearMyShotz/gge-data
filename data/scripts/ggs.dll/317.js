(function (e) {
  var t = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&apos;": "'",
    "&quot;": "\""
  };
  var n = "@";
  var i = "#";
  function removeSpaces(e) {
    return e && e.replace(/^\s+|\s+$/g, "");
  }
  function unescapeXML(e) {
    return e.replace(/(&(?:lt|gt|amp|apos|quot|#(?:\d{1,6}|x[0-9a-fA-F]{1,5}));)/g, function (e) {
      if (e[1] === "#") {
        var n = e[2] === "x" ? parseInt(e.substr(3), 16) : parseInt(e.substr(2), 10);
        if (n > -1) {
          return String.fromCharCode(n);
        }
      }
      return t[e] || e;
    });
  }
  function addObject(e, t, n) {
    if (n !== undefined) {
      var i = e[t];
      if (i instanceof Array) {
        i.push(n);
      } else {
        e[t] = t in e ? [i, n] : n;
      }
    }
  }
  e.fromXML = function _fromXML(e, t) {
    return function toObject(e, t) {
      if (typeof e == "string") {
        return e;
      }
      var a = e.r;
      if (a) {
        return a;
      }
      var s = function parseAttribute(e, t) {
        if (!e.t) {
          return;
        }
        var i;
        var a;
        var s = e.t.split(/([^\s='"]+(?:\s*=\s*(?:'[\S\s]*?'|"[\S\s]*?"|[^\s'"]*))?)/);
        for (var r = s.length, o = 0; o < r; o++) {
          var l = removeSpaces(s[o]);
          if (l) {
            i ||= {};
            var u = l.indexOf("=");
            if (u < 0) {
              l = n + l;
              a = null;
            } else {
              a = l.substr(u + 1).replace(/^\s+/, "");
              l = n + l.substr(0, u).replace(/\s+$/, "");
              var c = a[0];
              var _ = a[a.length - 1];
              if (c === _ && (c === "'" || c === "\"")) {
                a = a.substr(1, a.length - 2);
              }
              a = unescapeXML(a);
            }
            if (t) {
              a = t(l, a);
            }
            addObject(i, l, a);
          }
        }
        return i;
      }(e, t);
      var r;
      var o = e.f;
      var l = o.length;
      if (s || l > 1) {
        r = s || {};
        o.forEach(function (e) {
          if (typeof e == "string") {
            addObject(r, i, e);
          } else {
            addObject(r, e.n, toObject(e, t));
          }
        });
      } else if (l) {
        var u = o[0];
        r = toObject(u, t);
        if (u.n) {
          var c = {
            [u.n]: r
          };
          r = c;
        }
      } else {
        r = e.c ? null : "";
      }
      if (t) {
        r = t(e.n || "", r);
      }
      return r;
    }(function parseXML(e) {
      var t = String.prototype.split.call(e, /<([^!<>?](?:'[\S\s]*?'|"[\S\s]*?"|[^'"<>])*|!(?:--[\S\s]*?--|\[[^\[\]'"<>]+\[[\S\s]*?]]|DOCTYPE[^\[<>]*?\[[\S\s]*?]|(?:ENTITY[^"<>]*?"[\S\s]*?")?[\S\s]*?)|\?[\S\s]*?\?)>/);
      for (var n = t.length, i = {
          f: []
        }, a = i, s = [], r = 0; r < n;) {
        var o = t[r++];
        if (o) {
          appendText(o);
        }
        var l = t[r++];
        if (l) {
          parseNode(l);
        }
      }
      return i;
      function parseNode(e) {
        var t = e.length;
        var n = e[0];
        if (n === "/") {
          var i = e.replace(/^\/|[\s\/].*$/g, "").toLowerCase();
          while (s.length) {
            var r = a.n && a.n.toLowerCase();
            a = s.pop();
            if (r === i) {
              break;
            }
          }
        } else if (n === "?") {
          appendChild({
            n: "?",
            r: e.substr(1, t - 2)
          });
        } else if (n === "!") {
          if (e.substr(1, 7) === "[CDATA[" && e.substr(-2) === "]]") {
            appendText(e.substr(8, t - 10));
          } else {
            appendChild({
              n: "!",
              r: e.substr(1)
            });
          }
        } else {
          var o = function openTag(e) {
            var t = {
              f: []
            };
            var n = (e = e.replace(/\s*\/?$/, "")).search(/[\s='"\/]/);
            if (n < 0) {
              t.n = e;
            } else {
              t.n = e.substr(0, n);
              t.t = e.substr(n);
            }
            return t;
          }(e);
          appendChild(o);
          if (e[t - 1] === "/") {
            o.c = 1;
          } else {
            s.push(a);
            a = o;
          }
        }
      }
      function appendChild(e) {
        a.f.push(e);
      }
      function appendText(e) {
        if (e = removeSpaces(e)) {
          appendChild(unescapeXML(e));
        }
      }
    }(e), t);
  };
})(typeof exports == "object" && exports || {});