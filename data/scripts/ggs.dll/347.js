Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./32.js");
var s = require("./3.js");
var r = function (e) {
  function KeyDownSignal() {
    var t = e.call(this) || this;
    t.mappedEventType = s.KeyboardEvent.KEY_DOWN;
    return t;
  }
  i.__extends(KeyDownSignal, e);
  KeyDownSignal.prototype.dispatchTyped = function (t) {
    e.prototype.dispatch.call(this, t);
  };
  return KeyDownSignal;
}(a.GGSTextFieldSignal);
exports.KeyDownSignal = r;