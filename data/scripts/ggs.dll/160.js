Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function IdleScreenEvent(t, n = false, i = false) {
    return e.call(this, t, n, i) || this;
  }
  i.__extends(IdleScreenEvent, e);
  IdleScreenEvent.SHOW = "showIdleScreen";
  IdleScreenEvent.HIDE = "hideIdleScreen";
  return IdleScreenEvent;
}(createjs.Event);
exports.IdleScreenEvent = a;