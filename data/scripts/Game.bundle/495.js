Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleConstructionItemsEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleConstructionItemsEvent, e);
  CastleConstructionItemsEvent.INVENTORY_UPDATED = "inventoryUpdated";
  CastleConstructionItemsEvent.INVENTORY_SPACE_UPDATED = "inventorySpaceUpdated";
  CastleConstructionItemsEvent.NEC_RECEIVED = "nec_received";
  CastleConstructionItemsEvent.AEC_RECEIVED = "aec_received";
  CastleConstructionItemsEvent.LAST_EXPIRATION_TIME_SAVED = "last_expiration_saved";
  return CastleConstructionItemsEvent;
}(createjs.Event);
exports.CastleConstructionItemsEvent = o;