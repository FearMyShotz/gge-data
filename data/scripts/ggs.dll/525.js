Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./214.js");
exports.castAs = function castAs(e, t) {
  if (i.instanceOf(e, t)) {
    return e;
  } else {
    return null;
  }
};