Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleLayoutManagerEvent(t, i = null, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).params = i;
    return a;
  }
  n.__extends(CastleLayoutManagerEvent, e);
  CastleLayoutManagerEvent.__initialize_static_members = function () {
    CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE = "changelayoutstate";
    CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE_FINISHED = "changelayoutstatefinished";
    CastleLayoutManagerEvent.CHANGE_DISPLAYSTATE = "change_displaystate";
    CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE_TIME_TRACKING = "changelayoutstatetimetracking";
    CastleLayoutManagerEvent.SHOW_DIALOG = "show_dialog";
    CastleLayoutManagerEvent.ON_RESIZE = "on_resize";
    CastleLayoutManagerEvent.HIDE_DIALOG = "on_hide";
    CastleLayoutManagerEvent.SHOW_EXTERNAL_DIALOG = "show_external_dialog";
    CastleLayoutManagerEvent.HIDE_EXTERNAL_DIALOG = "hide_external_dialog";
    CastleLayoutManagerEvent.SHOW_SUBLAYER_PANEL = "show_sublayer_panel";
    CastleLayoutManagerEvent.HIDE_SUBLAYER_PANEL = "hide_sublayer_panel";
    CastleLayoutManagerEvent.RING_MENU_SHOWN = "ring_menu_shown";
    CastleLayoutManagerEvent.LOCK_CAMERA = "lock_camera";
    CastleLayoutManagerEvent.SCREEN_CHANGED = "screen_changed";
  };
  return CastleLayoutManagerEvent;
}(createjs.Event);
exports.CastleLayoutManagerEvent = o;
o.__initialize_static_members();