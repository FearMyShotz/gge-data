Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./19.js");
var a = require("./263.js");
exports.Record = function Record(e) {
  return i.create(function (t) {
    if (t === null || t === undefined) {
      throw i.validationError("Expected a defined non-null value but was " + typeof t);
    }
    for (var n in e) {
      if (!a.hasKey(n, t)) {
        throw i.validationError("Missing property " + n);
      }
      try {
        e[n].check(t[n]);
      } catch (e) {
        var s = e.message;
        throw i.validationError("In key " + n + ": " + s);
      }
    }
    return t;
  }, {
    tag: "record",
    fields: e
  });
};