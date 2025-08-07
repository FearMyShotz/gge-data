Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function NumberSignal() {
    return e.call(this, Number) || this;
  }
  i.__extends(NumberSignal, e);
  NumberSignal.prototype.signal = function (t) {
    e.prototype.dispatch.call(this, t);
  };
  return NumberSignal;
}(require("./51.js").GoodgameSignal);
exports.NumberSignal = a;