Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function GachaEvent(t, i, n = null, o = false, a = false) {
    var s = this;
    CONSTRUCTOR_HACK;
    (s = e.call(this, t, o, a) || this).eventVO = i;
    s.params = n;
    return s;
  }
  n.__extends(GachaEvent, e);
  GachaEvent.SPIN = "GachaEventSpin";
  GachaEvent.SPIN_ANIMATION_COMPLETE = "GachaEventSpinAnimationComplete";
  GachaEvent.SHINE_ANIMATION_LOADED = "GachaEventShineAnimationLoaded";
  GachaEvent.UPDATED = "GachaEventUpdated";
  GachaEvent.LOCK_DIALOG = "LOCK_DIALOG";
  GachaEvent.UNLOCK_DIALOG = "UNLOCK_DIALOG";
  GachaEvent.MULTIPULL_CHANGED = "MULTIPULL_CHANGED";
  return GachaEvent;
}(createjs.Event);
exports.GachaEvent = o;