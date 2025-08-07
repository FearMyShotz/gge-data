Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./32.js");
var s = createjs.TextEvent;
var r = function (e) {
  function TextInputSignal() {
    var t = e.call(this) || this;
    t.mappedEventType = s.TEXT_INPUT;
    return t;
  }
  i.__extends(TextInputSignal, e);
  TextInputSignal.prototype.dispatchTyped = function (t) {
    e.prototype.dispatch.call(this, t);
  };
  return TextInputSignal;
}(a.GGSTextFieldSignal);
exports.TextInputSignal = r;