Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./19.js");
exports.Contract = function Contract() {
  var e = [];
  for (var t = 0; t < arguments.length; t++) {
    e[t] = arguments[t];
  }
  var n = e.length - 1;
  var a = e.slice(0, n);
  var s = e[n];
  return {
    enforce: function (e) {
      return function () {
        var t = [];
        for (var n = 0; n < arguments.length; n++) {
          t[n] = arguments[n];
        }
        if (t.length < a.length) {
          throw i.validationError("Expected " + a.length + " arguments but only received " + t.length);
        }
        for (var r = 0; r < a.length; r++) {
          a[r].check(t[r]);
        }
        return s.check(e.apply(undefined, t));
      };
    }
  };
};