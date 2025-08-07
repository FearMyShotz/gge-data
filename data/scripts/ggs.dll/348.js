Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./32.js");
var s = require("./3.js");
var r = function (e) {
  function KeyUpSignal() {
    var t = e.call(this) || this;
    t.mappedEventType = s.KeyboardEvent.KEY_UP;
    return t;
  }
  i.__extends(KeyUpSignal, e);
  KeyUpSignal.prototype.dispatchTyped = function (t) {
    e.prototype.dispatch.call(this, t);
  };
  return KeyUpSignal;
}(a.GGSTextFieldSignal);
exports.KeyUpSignal = r;