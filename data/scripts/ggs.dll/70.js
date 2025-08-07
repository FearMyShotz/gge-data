Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./62.js");
var a = function (e) {
  function WorldAssignmentError(t, n) {
    var i = e.call(this, n) || this;
    i.id = t;
    return i;
  }
  i.__extends(WorldAssignmentError, e);
  return WorldAssignmentError;
}(Error);
exports.WorldAssignmentError = a;