Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleScoreEventEvent(t, i = true, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleScoreEventEvent, e);
  CastleScoreEventEvent.__initialize_static_members = function () {
    CastleScoreEventEvent.UPDATE_POINTS = "UPDATE_POINTS";
  };
  return CastleScoreEventEvent;
}(createjs.Event);
exports.CastleScoreEventEvent = o;
o.__initialize_static_members();