Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./32.js");
var s = createjs.MouseEvent;
var r = function (e) {
  function MouseOutSignal() {
    var t = e.call(this) || this;
    t.mappedEventType = s.MOUSE_OUT;
    return t;
  }
  i.__extends(MouseOutSignal, e);
  MouseOutSignal.prototype.dispatchTyped = function (t) {
    e.prototype.dispatch.call(this, t);
  };
  return MouseOutSignal;
}(a.GGSTextFieldSignal);
exports.MouseOutSignal = r;