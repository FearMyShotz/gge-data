Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CraftingEvent(t, i = -1, n = -1, o = false, a = false) {
    var s = this;
    CONSTRUCTOR_HACK;
    (s = e.call(this, t, o, a) || this).queueID = i;
    s.kingdomID = n;
    return s;
  }
  n.__extends(CraftingEvent, e);
  CraftingEvent.CRAFTING_QUEUE_UPDATED = "CRAFTING_QUEUE_UPDATED";
  CraftingEvent.BRIEFLY_DISABLE_CRAFT_BUTTON = "BRIEFLY_DISABLE_CRAFT_BUTTON";
  return CraftingEvent;
}(createjs.Event);
exports.CraftingEvent = o;