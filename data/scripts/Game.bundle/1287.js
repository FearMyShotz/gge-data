var n = require("./2257.js");
module.exports = function createError(e, t, i, o, a) {
  var s = new Error(e);
  return n(s, t, i, o, a);
};