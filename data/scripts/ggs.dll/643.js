Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./19.js");
exports.Number = i.create(function (e) {
  if (typeof e != "number") {
    throw i.validationError("Expected number but was " + typeof e);
  }
  return e;
}, {
  tag: "number"
});