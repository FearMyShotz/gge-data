Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function NoneValueSignal() {
    return e.call(this) || this;
  }
  i.__extends(NoneValueSignal, e);
  NoneValueSignal.prototype.signal = function () {
    e.prototype.dispatch.call(this);
  };
  return NoneValueSignal;
}(require("./51.js").GoodgameSignal);
exports.NoneValueSignal = a;