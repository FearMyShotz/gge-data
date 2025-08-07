Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function StringSignal() {
    return e.call(this, String) || this;
  }
  i.__extends(StringSignal, e);
  StringSignal.prototype.signal = function (t) {
    e.prototype.dispatch.call(this, t);
  };
  return StringSignal;
}(require("./51.js").GoodgameSignal);
exports.StringSignal = a;