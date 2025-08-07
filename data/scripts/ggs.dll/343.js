Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./32.js");
var s = createjs.Event;
var r = function (e) {
  function ChangeSignal() {
    var t = e.call(this) || this;
    t.mappedEventType = s.CHANGE;
    return t;
  }
  i.__extends(ChangeSignal, e);
  ChangeSignal.prototype.dispatchTyped = function (t) {
    e.prototype.dispatch.call(this, t);
  };
  return ChangeSignal;
}(a.GGSTextFieldSignal);
exports.ChangeSignal = r;