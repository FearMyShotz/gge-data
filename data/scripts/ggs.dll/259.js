Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./19.js");
function Literal(e) {
  return i.create(function (t) {
    if (t !== e) {
      throw i.validationError("Expected literal '" + e + "' but was '" + t + "'");
    }
    return t;
  }, {
    tag: "literal",
    value: e
  });
}
exports.Literal = Literal;
exports.Undefined = Literal(undefined);
exports.Null = Literal(null);