Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./215.js");
var a = require("./216.js");
exports.instanceOf = function instanceOf(e, t) {
  return a.instanceOfInterface(e, t) || i.instanceOfClass(e, t);
};