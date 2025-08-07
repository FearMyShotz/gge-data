Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function BoosterDataEvent(t, i = true, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(BoosterDataEvent, e);
  BoosterDataEvent.__initialize_static_members = function () {
    BoosterDataEvent.BOOSTER_REMOVED = "BOOSTER_REMOVED";
  };
  return BoosterDataEvent;
}(createjs.Event);
exports.BoosterDataEvent = o;
o.__initialize_static_members();