Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./32.js");
var s = createjs.FocusEvent;
var r = function (e) {
  function FocusInSignal() {
    var t = e.call(this) || this;
    t.mappedEventType = s.FOCUS_IN;
    return t;
  }
  i.__extends(FocusInSignal, e);
  FocusInSignal.prototype.dispatchTyped = function (t) {
    e.prototype.dispatch.call(this, t);
  };
  return FocusInSignal;
}(a.GGSTextFieldSignal);
exports.FocusInSignal = r;