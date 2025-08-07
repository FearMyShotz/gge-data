Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function PopoverEvent(t, i = null, n = true, o = false) {
    var a = e.call(this, t, n, o) || this;
    a.params = i;
    return a;
  }
  n.__extends(PopoverEvent, e);
  PopoverEvent.ON_NEW_POPOVER_ARRIVED = "onNewPopoverArrived";
  return PopoverEvent;
}(createjs.Event);
exports.PopoverEvent = o;