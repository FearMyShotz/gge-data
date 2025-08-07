Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./19.js");
var a = require("./258.js");
var s = require("./261.js");
exports.Tuple = function Tuple() {
  var e = [];
  for (var t = 0; t < arguments.length; t++) {
    e[t] = arguments[t];
  }
  return i.create(function (t) {
    var n = s.Array(a.Always).check(t);
    if (n.length < e.length) {
      throw i.validationError("Expected array of " + e.length + " but was " + n.length);
    }
    for (var r = 0; r < e.length; r++) {
      e[r].check(n[r]);
    }
    return t;
  }, {
    tag: "tuple",
    components: e
  });
};