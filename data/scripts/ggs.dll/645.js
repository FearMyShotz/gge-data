Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./19.js");
var a = require("./7.js");
var s = require("./259.js");
var r = require("./263.js");
function Part(e) {
  return i.create(function (t) {
    if (t === null || t === undefined) {
      throw i.validationError("Expected a defined non-null value but was " + typeof t);
    }
    for (var n in e) {
      if (r.hasKey(n, t)) {
        try {
          a.Union(e[n], s.Undefined).check(t[n]);
        } catch (e) {
          var o = e.message;
          throw i.validationError("In key " + n + ": " + o);
        }
      }
    }
    return t;
  }, {
    tag: "partial",
    fields: e
  });
}
exports.Part = Part;
exports.Partial = Part;