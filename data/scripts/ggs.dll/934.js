Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function BooleanSignal() {
    return e.call(this) || this;
  }
  i.__extends(BooleanSignal, e);
  BooleanSignal.prototype.signal = function (t) {
    e.prototype.dispatch.call(this, t);
  };
  return BooleanSignal;
}(require("./51.js").GoodgameSignal);
exports.BooleanSignal = a;