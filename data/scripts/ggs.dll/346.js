Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./32.js");
var s = createjs.FocusEvent;
var r = function (e) {
  function FocusOutSignal() {
    var t = e.call(this) || this;
    t.mappedEventType = s.FOCUS_OUT;
    return t;
  }
  i.__extends(FocusOutSignal, e);
  FocusOutSignal.prototype.dispatchTyped = function (t) {
    e.prototype.dispatch.call(this, t);
  };
  return FocusOutSignal;
}(a.GGSTextFieldSignal);
exports.FocusOutSignal = r;