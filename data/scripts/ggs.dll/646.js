Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./19.js");
var a = require("./262.js");
exports.Dictionary = function Dictionary(e, t = "string") {
  return i.create(function (n) {
    a.Record({}).check(n);
    if (typeof n != "object") {
      throw i.validationError("Expected an object but was " + typeof n);
    }
    if (Object.getPrototypeOf(n) !== Object.prototype) {
      if (!Array.isArray(n)) {
        throw i.validationError("Expected simple object but was complex");
      }
      if (t === "string") {
        throw i.validationError("Expected dictionary but was array");
      }
    }
    for (var s in n) {
      if (t === "number" && isNaN(+s)) {
        throw i.validationError("Expected dictionary key to be a number but was string");
      }
      e.check(n[s]);
    }
    return n;
  }, {
    tag: "dictionary",
    key: t,
    value: e
  });
};