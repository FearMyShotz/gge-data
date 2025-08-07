Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./19.js");
exports.Union = function Union() {
  var e = [];
  for (var t = 0; t < arguments.length; t++) {
    e[t] = arguments[t];
  }
  return i.create(function (t) {
    for (var n = 0, i = e; n < i.length; n++) {
      if ((0, i[n].guard)(t)) {
        return t;
      }
    }
    throw new Error("No alternatives were matched");
  }, {
    tag: "union",
    alternatives: e
  });
};