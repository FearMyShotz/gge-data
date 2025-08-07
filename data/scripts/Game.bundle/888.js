Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function UnitInventoryEvent(t, i = null, n = false, o = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, n, o) || this;
  }
  n.__extends(UnitInventoryEvent, e);
  UnitInventoryEvent.__initialize_static_members = function () {
    UnitInventoryEvent.UPDATED = "updated";
  };
  return UnitInventoryEvent;
}(createjs.Event);
exports.UnitInventoryEvent = o;
o.__initialize_static_members();