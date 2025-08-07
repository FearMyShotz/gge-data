Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleAdvancedTroopSelectionInfiniteEvent(t, i, n = true, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, i, n, o) || this).scrollItem = t;
    return a;
  }
  n.__extends(CastleAdvancedTroopSelectionInfiniteEvent, e);
  CastleAdvancedTroopSelectionInfiniteEvent.__initialize_static_members = function () {
    CastleAdvancedTroopSelectionInfiniteEvent.UNIT_SELECTION_CHANGED = "unit_selection_changed";
  };
  return CastleAdvancedTroopSelectionInfiniteEvent;
}(createjs.Event);
exports.CastleAdvancedTroopSelectionInfiniteEvent = o;
o.__initialize_static_members();