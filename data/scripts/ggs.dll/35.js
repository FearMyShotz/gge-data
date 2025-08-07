Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
exports.warn = function warn() {
  var e;
  var t = [];
  for (var n = 0; n < arguments.length; n++) {
    t[n] = arguments[n];
  }
  var a = t[0];
  var s = t.slice(1);
  (e = i.getLogger("DEPRECATED")).warn.apply(e, [a].concat(s));
};