Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function ArraySignal() {
    return e.call(this, Array) || this;
  }
  i.__extends(ArraySignal, e);
  ArraySignal.prototype.signal = function (t) {
    e.prototype.dispatch.call(this, t);
  };
  return ArraySignal;
}(require("./51.js").GoodgameSignal);
exports.ArraySignal = a;