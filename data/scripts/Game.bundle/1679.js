Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleAchievementDataEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleAchievementDataEvent, e);
  CastleAchievementDataEvent.__initialize_static_members = function () {
    CastleAchievementDataEvent.ACHIEVEMENT_REFRESHED = "achievement_refreshed";
  };
  return CastleAchievementDataEvent;
}(createjs.Event);
exports.CastleAchievementDataEvent = o;
o.__initialize_static_members();