var n = require("./257.js");
module.exports = function normalizeHeaderName(e, t) {
  n.forEach(e, function processHeader(i, n) {
    if (n !== t && n.toUpperCase() === t.toUpperCase()) {
      e[t] = i;
      delete e[n];
    }
  });
};