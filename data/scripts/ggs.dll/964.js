Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function DynamicTimer(t, n = 0) {
    return e.call(this, t, n) || this;
  }
  i.__extends(DynamicTimer, e);
  return DynamicTimer;
}(require("./3.js").Timer);
exports.DynamicTimer = a;