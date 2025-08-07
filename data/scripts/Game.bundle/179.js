Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function GeneralsEvent(t, i = null, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).params = i;
    return a;
  }
  n.__extends(GeneralsEvent, e);
  GeneralsEvent.GENERALS_UPDATED = "GENERALS_UPDATED";
  GeneralsEvent.GENERALS_HUB_UPDATED = "GENERALS_HUB_UPDATED";
  GeneralsEvent.GENERALS_HUB_REWARDS = "GENERALS_HUB_REWARDS";
  GeneralsEvent.GENERAL_UNLOCKED = "GENERAL_UNLOCKED";
  GeneralsEvent.GENERAL_STAR_UP = "GENERAL_STAR_UP";
  return GeneralsEvent;
}(createjs.Event);
exports.GeneralsEvent = o;