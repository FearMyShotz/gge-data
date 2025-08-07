Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleWorldmapScreenEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleWorldmapScreenEvent, e);
  CastleWorldmapScreenEvent.__initialize_static_members = function () {
    CastleWorldmapScreenEvent.WORLDMAP_LOADED = "worldMapLoaded";
  };
  return CastleWorldmapScreenEvent;
}(createjs.Event);
exports.CastleWorldmapScreenEvent = o;
o.__initialize_static_members();