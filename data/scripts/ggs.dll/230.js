Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./28.js");
var a = function (e) {
  function KeyboardEvent(t, n = true, i = false, a = 0, s = "") {
    var r = e.call(this, t, n, i) || this;
    r.charCode = 0;
    r.altKey = false;
    r.ctrlKey = false;
    r.shiftKey = false;
    r.keyCode = s;
    r.charCode = a;
    r.key = s;
    r.code = s;
    return r;
  }
  i.__extends(KeyboardEvent, e);
  KeyboardEvent.prototype.clone = function () {
    return Object.assign(new KeyboardEvent(this.type, this.bubbles, this.cancelable), this);
  };
  KeyboardEvent.KEY_UP = "keyUp";
  KeyboardEvent.KEY_DOWN = "keyDown";
  return KeyboardEvent;
}(createjs.Event);
exports.KeyboardEvent = a;