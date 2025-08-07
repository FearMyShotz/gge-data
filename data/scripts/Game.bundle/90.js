Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleWorldmapEvent(t, i = null, n = true, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).params = i;
    return a;
  }
  n.__extends(CastleWorldmapEvent, e);
  CastleWorldmapEvent.__initialize_static_members = function () {
    CastleWorldmapEvent.WORLDMAP_CLICK = "worldmapclick";
    CastleWorldmapEvent.WORLDMAP_MOUSEUP = "worldmap_mouseup";
    CastleWorldmapEvent.WORLDMAP_MOUSEDOWN = "worldmap_mousedown";
    CastleWorldmapEvent.UPDATE_AREA_INFO = "updateareainfo";
    CastleWorldmapEvent.INFOTOOLTIP = "showinfotooltip";
    CastleWorldmapEvent.SHOW_MENU = "showmenu";
    CastleWorldmapEvent.RINGMENU_CASTLEINFO = 0;
    CastleWorldmapEvent.RINGMENU_OUTPOSTINFO = 1;
    CastleWorldmapEvent.RINGMENU_ARMYATTACK = 2;
    CastleWorldmapEvent.RINGMENU_DUNGEONINFO = 3;
    CastleWorldmapEvent.SHOW_PLAYER_INFO = "showplayerinfo";
    CastleWorldmapEvent.CLICK_RUIN = "clickruin";
    CastleWorldmapEvent.CLICK_RELOCATE_POSITION = "clickrelocateposition";
    CastleWorldmapEvent.RUIN_INFO = "clickruin";
    CastleWorldmapEvent.WORLDMAPDATA_REMOVE_MOVEMENT = "worldmapdata_remove_movement";
    CastleWorldmapEvent.NEW_CAMERA_POSITION = "new_camera_position";
    CastleWorldmapEvent.DOUBLE_CLICK_CASTLE = "doubleClickCastle";
    CastleWorldmapEvent.SELECTED_CASTLELIST_ITEM_CHANGED = "selected_castlelist_item_changed";
    CastleWorldmapEvent.REMOVED_RESOURCE_ISLE_FROM_MAP = "removedResourceIsleFromMap";
    CastleWorldmapEvent.REMOVED_ALIEN_CASTLE_FROM_MAP = "removedAlienCastleFromMap";
  };
  return CastleWorldmapEvent;
}(createjs.Event);
exports.CastleWorldmapEvent = o;
o.__initialize_static_members();