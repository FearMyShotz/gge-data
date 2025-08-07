var n = require("./2259.js");
var o = require("./2260.js");
module.exports = function buildFullPath(e, t) {
  if (e && !n(t)) {
    return o(e, t);
  } else {
    return t;
  }
};