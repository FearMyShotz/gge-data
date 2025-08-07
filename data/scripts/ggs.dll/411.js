Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function IntSignal() {
    return e.call(this, Number) || this;
  }
  i.__extends(IntSignal, e);
  IntSignal.prototype.signal = function (t) {
    e.prototype.dispatch.call(this, t);
  };
  return IntSignal;
}(require("./51.js").GoodgameSignal);
exports.IntSignal = a;