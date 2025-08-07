Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function GlobalEffectEvent(t, i = false, n = false) {
    return e.call(this, t, i, n) || this;
  }
  n.__extends(GlobalEffectEvent, e);
  GlobalEffectEvent.SEEN_EFFECTS_UPDATED = "SEEN_EFFECTS_UPDATED";
  return GlobalEffectEvent;
}(require("./366.js").CastleEvent);
exports.GlobalEffectEvent = o;