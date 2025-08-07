Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleResourceBoosterEvent(t, i, n = true, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).boosterVO = i;
    return a;
  }
  n.__extends(CastleResourceBoosterEvent, e);
  CastleResourceBoosterEvent.__initialize_static_members = function () {
    CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED = "boosterdatarefrehsed";
    CastleResourceBoosterEvent.FESTIVAL_UPDATED = "FESTIVAL_UPDATED";
  };
  return CastleResourceBoosterEvent;
}(createjs.Event);
exports.CastleResourceBoosterEvent = o;
o.__initialize_static_members();