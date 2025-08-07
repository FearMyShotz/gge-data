Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./32.js");
var s = createjs.MouseEvent;
var r = function (e) {
  function ClickSignal() {
    var t = e.call(this) || this;
    t.mappedEventType = s.CLICK;
    return t;
  }
  i.__extends(ClickSignal, e);
  ClickSignal.prototype.dispatchTyped = function (t) {
    e.prototype.dispatch.call(this, t);
  };
  return ClickSignal;
}(a.GGSTextFieldSignal);
exports.ClickSignal = r;