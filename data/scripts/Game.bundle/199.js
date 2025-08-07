Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleDialogEvent(t, i = null, n = false, o = false) {
    var a = this;
    a.params = null;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).params = i;
    return a;
  }
  n.__extends(CastleDialogEvent, e);
  CastleDialogEvent.__initialize_static_members = function () {
    CastleDialogEvent.CHANGE_LAYOUTSTATE = "changelayoutstate";
    CastleDialogEvent.MOUSE_ON_DIALOG = "mouseondialog";
    CastleDialogEvent.CHANGE_WORLD = "changeworld";
    CastleDialogEvent.CLOSE_QUESTINFO = "close_questinfo";
    CastleDialogEvent.FIGHT_SCREEN_SHOP_FILLED = "fightScreenShopFilled";
    CastleDialogEvent.DEFENCE_SCREEN_ITEMS_UPDATED = "defenceScreenItemsUpdated";
    CastleDialogEvent.TAX_ITEMS_FILLED = "taxItemsFilled";
    CastleDialogEvent.DEFENCE_SCREEN_TOOLS_PLACED = "defenceScreenToolsPlaced";
  };
  CastleDialogEvent.DEFENCE_SCREEN_OPEN_GENERALS = "DEFENCE_SCREEN_OPEN_GENERALS";
  CastleDialogEvent.DEFENCE_SCREEN_CLOSE_GENERALS = "DEFENCE_SCREEN_CLOSE_GENERALS";
  CastleDialogEvent.DEFENCE_SCREEN_OPEN_GENERALS_SELECTION = "DEFENCE_SCREEN_OPEN_GENERALS_SELECTION";
  CastleDialogEvent.DEFENCE_SCREEN_CLOSE_GENERALS_SELECTION = "DEFENCE_SCREEN_CLOSE_GENERALS_SELECTION";
  CastleDialogEvent.ATTACK_SCREEN_OPEN_PLAYER_INFO = "ATTACK_SCREEN_OPEN_PLAYER_INFO";
  CastleDialogEvent.ATTACK_SCREEN_CLOSE_PLAYER_INFO = "ATTACK_SCREEN_CLOSE_PLAYER_INFO";
  CastleDialogEvent.ATTACK_SCREEN_OPEN_GENERALS_SELECTION = "ATTACK_SCREEN_OPEN_GENERALS_SELECTION";
  CastleDialogEvent.ATTACK_SCREEN_CLOSE_GENERALS_SELECTION = "ATTACK_SCREEN_CLOSE_GENERALS_SELECTION";
  CastleDialogEvent.ATTACK_SCREEN_LORD_SELECTED = "ATTACK_SCREEN_LORD_SELECTED";
  return CastleDialogEvent;
}(createjs.Event);
exports.CastleDialogEvent = o;
o.__initialize_static_members();