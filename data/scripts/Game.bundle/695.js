Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function GFXEvent(t, i = true, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(GFXEvent, e);
  GFXEvent.__initialize_static_members = function () {
    GFXEvent.ANIMATION_STATE_CHANGED = "inventorychanged";
    GFXEvent.ALERT_FRAME_VISIBILITY_CHANGED = "alert_frame_visibility_changed";
  };
  return GFXEvent;
}(createjs.Event);
exports.GFXEvent = o;
o.__initialize_static_members();