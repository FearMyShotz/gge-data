Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./32.js");
var s = createjs.MouseEvent;
var r = function (e) {
  function ScrollSignal() {
    var t = e.call(this) || this;
    t.mappedEventType = s.MOUSE_WHEEL;
    return t;
  }
  i.__extends(ScrollSignal, e);
  ScrollSignal.prototype.dispatchTyped = function (t) {
    e.prototype.dispatch.call(this, t);
  };
  return ScrollSignal;
}(a.GGSTextFieldSignal);
exports.ScrollSignal = r;