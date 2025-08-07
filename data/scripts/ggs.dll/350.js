Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./32.js");
var s = createjs.MouseEvent;
var r = function (e) {
  function MouseOverSignal() {
    var t = e.call(this) || this;
    t.mappedEventType = s.MOUSE_OVER;
    return t;
  }
  i.__extends(MouseOverSignal, e);
  MouseOverSignal.prototype.dispatchTyped = function (t) {
    e.prototype.dispatch.call(this, t);
  };
  return MouseOverSignal;
}(a.GGSTextFieldSignal);
exports.MouseOverSignal = r;