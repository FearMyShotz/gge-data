Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleTreasureHuntEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleTreasureHuntEvent, e);
  CastleTreasureHuntEvent.__initialize_static_members = function () {
    CastleTreasureHuntEvent.TREASURE_HUNT_INFO_UPDATED = "treasurehunt_data_updated";
  };
  return CastleTreasureHuntEvent;
}(createjs.Event);
exports.CastleTreasureHuntEvent = o;
o.__initialize_static_members();