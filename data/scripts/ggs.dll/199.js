Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function ObjectSignal() {
    return e.call(this) || this;
  }
  i.__extends(ObjectSignal, e);
  ObjectSignal.prototype.signal = function (t) {
    e.prototype.dispatch.call(this, t);
  };
  return ObjectSignal;
}(require("./51.js").GoodgameSignal);
exports.ObjectSignal = a;