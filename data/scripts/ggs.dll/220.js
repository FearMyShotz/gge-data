Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = require("./221.js");
var s = i.getLogger("getDefinitionByName");
function getDefinitionByName(e) {
  var t = window.cachedModlues[e];
  if (t !== undefined) {
    return t;
  }
  var n = getDefinitionByNameFromLibrary(e);
  if (n !== undefined) {
    return n;
  }
  s.warn("The definition \"" + e + "\" could not be found");
}
exports.getDefinitionByName = getDefinitionByName;
window.getDefinitionByName = getDefinitionByName;
var r = /_walkmap/i;
function o(e) {
  var t = window.Library;
  if (t !== undefined) {
    for (var n in t) {
      if (t.hasOwnProperty(n)) {
        var i = t[n];
        if (e in i) {
          return i[e];
        }
      }
    }
  }
  if (!r.test(e)) {
    s.error("The definition \"" + e + "\" could not be found in Assets Library");
  }
}
var l = a(o);
function getDefinitionByNameFromLibrary(e) {
  var t = l(e);
  if (!t) {
    if (t = o(e)) {
      l.cache.set(e, t);
    }
  }
  return t;
}
exports.getDefinitionByNameFromLibrary = getDefinitionByNameFromLibrary;
exports.cacheModules = function cacheModules(e) {
  function isValidModuleName(e) {
    if (/^\d+$/.test(e)) {
      return false;
    }
    var t = e.charAt(0);
    return (t !== t.toLowerCase() || t === t.toUpperCase()) && t !== "_";
  }
  var t = window;
  var i = t.cachedModlues;
  if (e.precachingDone === undefined) {
    e.precachingDone = true;
    if (!i) {
      t.cachedModlues = {};
      i = t.cachedModlues;
    }
    var a = {};
    var r = e.c;
    for (var o in r) {
      var l = r[o];
      var u = undefined;
      if (l && (u = l.exports)) {
        for (var c in u) {
          if (c === "a") {
            var _;
            if (typeof (_ = u[c]) != "function") {
              continue;
            }
            var d = _.name;
            if (i.hasOwnProperty(d)) {
              if (!a.hasOwnProperty(d)) {
                a[d] = 0;
              }
              a[d]++;
            }
            i[d] = _;
          } else {
            if (!isValidModuleName(c) || typeof u[c] != "function") {
              continue;
            }
            if (i.hasOwnProperty(c)) {
              if (!a.hasOwnProperty(c)) {
                a[c] = 0;
              }
              a[c]++;
            }
            i[c] = u[c];
          }
        }
      }
    }
    s.debug("Cached " + Object.keys(i).length + " modules. Found " + Object.keys(a).length + " duplicates:");
    s.debug(a);
    createjs.precacheModules(require);
  }
  return i;
};