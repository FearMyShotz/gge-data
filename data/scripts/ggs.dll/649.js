Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./19.js");
exports.Function = i.create(function (e) {
  if (typeof e != "function") {
    throw i.validationError("Expected a function but was " + typeof e);
  }
  return e;
}, {
  tag: "function"
});