Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleKingdomEvent(t, i = null, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).params = i;
    return a;
  }
  n.__extends(CastleKingdomEvent, e);
  CastleKingdomEvent.__initialize_static_members = function () {
    CastleKingdomEvent.KINGDOMDATA_ARRIVED = "KINGDOMDATA_ARRIVED";
    CastleKingdomEvent.KINGDOM_VILLAGELIST_ARRIVED = "KINGDOM_VILLAGELIST_ARRIVED";
    CastleKingdomEvent.KINGDOM_MONUMENTS_RESET = "KINGDOM_MONUMENTS_RESET";
    CastleKingdomEvent.KINGDOM_SWITCHED = "KINGDOM_SWITCHED";
  };
  return CastleKingdomEvent;
}(createjs.Event);
exports.CastleKingdomEvent = o;
o.__initialize_static_members();