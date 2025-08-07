Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./19.js");
exports.Never = i.create(function () {
  throw i.validationError("Expected nothing but got something");
}, {
  tag: "never"
});