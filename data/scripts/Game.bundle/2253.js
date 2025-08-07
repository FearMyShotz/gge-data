var n = require("./257.js");
module.exports = function transformData(e, t, i) {
  n.forEach(i, function transform(i) {
    e = i(e, t);
  });
  return e;
};