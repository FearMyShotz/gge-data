Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./19.js");
exports.Boolean = i.create(function (e) {
  if (typeof e != "boolean") {
    throw i.validationError("Expected boolean but was " + typeof e);
  }
  return e;
}, {
  tag: "boolean"
});