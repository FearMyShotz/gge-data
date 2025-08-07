Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleMilitaryDataEvent(t, i = null, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).params = i;
    return a;
  }
  n.__extends(CastleMilitaryDataEvent, e);
  CastleMilitaryDataEvent.__initialize_static_members = function () {
    CastleMilitaryDataEvent.PACKAGELIST_UPDATED = "packageListUpdated";
    CastleMilitaryDataEvent.INVENTORY_UPDATED = "inventoryUpdated";
    CastleMilitaryDataEvent.ALL_INVENTORIES_UPDATED = "allInventoriesUpdated";
    CastleMilitaryDataEvent.HOSPITALINVENTORY_UPDATED = "hospitalInventoryUpdated";
    CastleMilitaryDataEvent.UNIT_UPDATED = "UNIT_UPDATED";
  };
  return CastleMilitaryDataEvent;
}(createjs.Event);
exports.CastleMilitaryDataEvent = o;
o.__initialize_static_members();