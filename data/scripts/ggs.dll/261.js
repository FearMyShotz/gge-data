Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./19.js");
exports.Array = function Arr(e) {
  return i.create(function (t) {
    if (!Array.isArray(t)) {
      throw i.validationError("Expected array but was " + typeof t);
    }
    for (var n = 0, a = t; n < a.length; n++) {
      var s = a[n];
      e.check(s);
    }
    return t;
  }, {
    tag: "array",
    element: e
  });
};