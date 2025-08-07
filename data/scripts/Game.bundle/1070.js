Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleUnitCapacityEvent(t, i, n = true, o = false) {
    var a = this;
    a.capacity = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).capacity = i;
    return a;
  }
  n.__extends(CastleUnitCapacityEvent, e);
  CastleUnitCapacityEvent.__initialize_static_members = function () {
    CastleUnitCapacityEvent.UNIT_CAPACITY_CHANGED = "UNIT_CAPACITY_CHANGED";
  };
  return CastleUnitCapacityEvent;
}(createjs.Event);
exports.CastleUnitCapacityEvent = o;
o.__initialize_static_members();