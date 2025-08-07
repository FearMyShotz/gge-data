Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleSlotVOEvent(t, i = true, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleSlotVOEvent, e);
  CastleSlotVOEvent.__initialize_static_members = function () {
    CastleSlotVOEvent.SLOT_UPDATE = "slotUpdate";
  };
  return CastleSlotVOEvent;
}(createjs.Event);
exports.CastleSlotVOEvent = o;
o.__initialize_static_members();