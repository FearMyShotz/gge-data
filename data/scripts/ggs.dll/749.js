Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RIGHT_TO_LEFT_MARK = "‏";
exports.SPACE_CHAR = String.fromCharCode(32);
exports.NOBREAK_SPACE_CHAR = String.fromCharCode(160);
var i = new RegExp("(" + exports.SPACE_CHAR + "|" + exports.NOBREAK_SPACE_CHAR + ")\\{0}$");
exports.reverseSinglePlaceholder = function (e) {
  var t = function (e) {
    var t = e.match(i);
    if (t) {
      return t.index;
    } else {
      return -1;
    }
  }(e);
  if (t != -1) {
    var n = e.slice(0, t);
    var a = e.slice(t).split("");
    a.push(a.shift());
    return a.join("") + n;
  }
  return e;
};
exports.reversePunctuation = function (e) {
  var n;
  n = exports.RIGHT_TO_LEFT_MARK + "$1" + exports.RIGHT_TO_LEFT_MARK;
  e = e.replace(/([\!\.\+\-\•])/g, n);
  (function () {
    var n = "$1" + exports.RIGHT_TO_LEFT_MARK + ")" + exports.RIGHT_TO_LEFT_MARK;
    e = e.replace(/([^0-9a-zA-Z])\)/g, n);
  })();
  (function () {
    var n = exports.RIGHT_TO_LEFT_MARK + "(" + exports.RIGHT_TO_LEFT_MARK;
    e = e.replace(/\((?![0-9a-zA-Z])/g, n);
  })();
  (function () {
    var n = "$1" + exports.RIGHT_TO_LEFT_MARK + ":" + exports.RIGHT_TO_LEFT_MARK;
    e = e.replace(/([^"]):(?![{}])/g, n);
  })();
  (function () {
    var n = "\"" + exports.RIGHT_TO_LEFT_MARK + "$1" + exports.RIGHT_TO_LEFT_MARK;
    e = e.replace(/"([0-9])(?![0-9a-zA-Z])/g, n);
  })();
  return e;
};