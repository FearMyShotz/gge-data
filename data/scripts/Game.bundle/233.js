Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleGemEvent(t, i = null, n = false, o = false) {
    var a = e.call(this, t, n, o) || this;
    a.gemInventory = i;
    return a;
  }
  n.__extends(CastleGemEvent, e);
  CastleGemEvent.GEM_INVENTORY_UPDATE = "GEM_INVENTORY_UPDATE";
  CastleGemEvent.ALLIANCE_FORGE_GEMCRAFT_EXECUTED = "FORGE_GEMCRAFT_EXECUTED";
  CastleGemEvent.GEM_BOUND_TO_EQUIP = "GEM_BOUND_TO_EQUIP";
  CastleGemEvent.GEM_CRAFTING_SUCCESS = "gemcraftedsuccess";
  CastleGemEvent.GEM_CRAFTING_FAILURE = "gemcraftedfailed";
  CastleGemEvent.GEM_CRAFTING_SERVER_ERROR = "gemcraftservererror";
  CastleGemEvent.GEM_SOLD = "gemsold";
  CastleGemEvent.INVENTORY_SPACE_LEFT = "geminventoryspaceleft";
  return CastleGemEvent;
}(createjs.Event);
exports.CastleGemEvent = o;