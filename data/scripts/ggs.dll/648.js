Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./19.js");
exports.Intersect = function Intersect() {
  var e = [];
  for (var t = 0; t < arguments.length; t++) {
    e[t] = arguments[t];
  }
  return i.create(function (t) {
    for (var n = 0, i = e; n < i.length; n++) {
      (0, i[n].check)(t);
    }
    return t;
  }, {
    tag: "intersect",
    intersectees: e
  });
};