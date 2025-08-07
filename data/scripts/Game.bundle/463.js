Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function SettingsEvent(t, i = true, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(SettingsEvent, e);
  SettingsEvent.__initialize_static_members = function () {
    SettingsEvent.QUESTREMINDER_STATE_CHANGED = "questreminder_state_changed";
    SettingsEvent.WORLDMAPMOVEMNTS_VISIBILITY_CHANGED = "worldmapmovement_visibility changed";
    SettingsEvent.MINICHAT_VISIBILITY_CHANGED = "minichat_visibility_changed";
    SettingsEvent.SHOW_VIP_VISUALS_TO_OTHERS_CHANGED = "vip_visuals_changed";
  };
  SettingsEvent.EVENT_BOOKMARK_CHANGED = "event_bookmark_changed";
  return SettingsEvent;
}(createjs.Event);
exports.SettingsEvent = o;
o.__initialize_static_members();