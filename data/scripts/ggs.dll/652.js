Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./19.js");
exports.InstanceOf = function InstanceOf(e) {
  return i.create(function (t) {
    if (!(t instanceof e)) {
      throw i.validationError("Expected a " + e.name + " but was " + typeof t);
    }
    return t;
  }, {
    tag: "instanceof",
    ctor: e
  });
};