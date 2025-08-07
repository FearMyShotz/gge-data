Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./2.js").getLogger("decorators");
exports.commentedOut = function commentedOut(e = "", t = "") {
  return function (n, i, s) {
    s.value = function () {
      return a.warn(i + " was commented out. " + function addIssue(e = "") {
        if (e !== "") {
          return " IssueID: " + e + " ";
        } else {
          return "";
        }
      }(e) + function addMessage(e = "") {
        if (e !== "") {
          return " message: " + e + " ";
        } else {
          return "";
        }
      }(t));
    };
    return s;
  };
};
exports.replacedWith = function replacedWith(e) {
  return function (t, n, i) {
    i.value = e;
    return i;
  };
};
exports.exportToWindow = function exportToWindow(e = "global", t) {
  return function (t) {
    var n = function (n) {
      function ExportToWindowDebuggerClass() {
        var i = [];
        for (var a = 0; a < arguments.length; a++) {
          i[a] = arguments[a];
        }
        var s = n.apply(this, i) || this;
        var r = window[e] = window[e] || new Map();
        s._exportedClassName = s.constructor.name === "ExportToWindowDebuggerClass" ? t.name : s.constructor.name;
        r.set(s._exportedClassName, s);
        return s;
      }
      i.__extends(ExportToWindowDebuggerClass, n);
      return ExportToWindowDebuggerClass;
    }(t);
    n.prototype = t.prototype;
    return n;
  };
};