Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = require("./16.js");
i.getLogger(a.CREATEJS_UTILITIES_LOGGER);
exports.getSize = function getSize(e) {
  switch (typeof e) {
    case "boolean":
      return 4;
    case "number":
      return 8;
    case "string":
      return e.length * 2;
    case "object":
      return Object.keys(e).reduce(function (t, n) {
        return t + getSize(n) + getSize(e[n]);
      }, 0);
    default:
      return 0;
  }
};