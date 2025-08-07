Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleCraftingMaterialEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleCraftingMaterialEvent, e);
  CastleCraftingMaterialEvent.__initialize_static_members = function () {
    CastleCraftingMaterialEvent.MATERIAL_INVENTORY_UPDATED = "materialInventoryUpdated";
  };
  return CastleCraftingMaterialEvent;
}(createjs.Event);
exports.CastleCraftingMaterialEvent = o;
o.__initialize_static_members();