Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./19.js");
exports.String = i.create(function (e) {
  if (typeof e != "string") {
    throw i.validationError("Expected string but was " + typeof e);
  }
  return e;
}, {
  tag: "string"
});