Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./19.js");
exports.Void = i.create(function (e) {
  if (e !== undefined && e !== null) {
    throw i.validationError("Expected null but was " + typeof e);
  }
  return e;
}, {
  tag: "void"
});