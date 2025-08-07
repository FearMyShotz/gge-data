Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function ScrollItemEvent(t, n, i, a = null, s = false, r = false) {
    var o = e.call(this, t, s, r) || this;
    o.originEvent = a;
    o.scrollItem = n;
    o.originTarget = i;
    return o;
  }
  i.__extends(ScrollItemEvent, e);
  ScrollItemEvent.prototype.clone = function () {
    return new ScrollItemEvent(this.type, this.scrollItem, this.originTarget, this.originEvent, this.bubbles, this.cancelable);
  };
  ScrollItemEvent.CLICK = "click";
  ScrollItemEvent.ROLL_OVER = "roll_over";
  ScrollItemEvent.ROLL_OUT = "roll_out";
  ScrollItemEvent.ON_SCROLL = "on_scroll";
  ScrollItemEvent.TOUCH_DOWN = "touch_down";
  ScrollItemEvent.TOUCH_UP = "touch_up";
  ScrollItemEvent.TOUCH_DRAG_START = "touch_drag_start";
  ScrollItemEvent.TOUCH_DRAG_END = "touch_drag_end";
  return ScrollItemEvent;
}(createjs.Event);
exports.ScrollItemEvent = a;