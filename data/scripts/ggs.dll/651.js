Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./19.js");
var a = require("./260.js");
exports.Constraint = function Constraint(e, t, n) {
  return i.create(function (n) {
    var s = e.check(n);
    var r = t(s);
    if (a.String.guard(r)) {
      throw i.validationError(r);
    }
    if (!r) {
      throw i.validationError("Failed constraint check");
    }
    return s;
  }, {
    tag: "constraint",
    underlying: e,
    args: n,
    constraint: t
  });
};