Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleAdvancedTroopSelectionEvent(t, i, n = true, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, i, n, o) || this).scrollItem = t;
    return a;
  }
  n.__extends(CastleAdvancedTroopSelectionEvent, e);
  CastleAdvancedTroopSelectionEvent.__initialize_static_members = function () {
    CastleAdvancedTroopSelectionEvent.UNIT_SELECTION_CHANGED = "unit_selection_changed";
  };
  return CastleAdvancedTroopSelectionEvent;
}(createjs.Event);
exports.CastleAdvancedTroopSelectionEvent = o;
o.__initialize_static_members();