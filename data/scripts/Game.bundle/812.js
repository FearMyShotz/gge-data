Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleLootBoxDataEvent(t, i = true, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleLootBoxDataEvent, e);
  CastleLootBoxDataEvent.__initialize_static_members = function () {
    CastleLootBoxDataEvent.INVENTORY_UPDATED = "INVENTORY_UPDATED";
  };
  return CastleLootBoxDataEvent;
}(createjs.Event);
exports.CastleLootBoxDataEvent = o;
o.__initialize_static_members();