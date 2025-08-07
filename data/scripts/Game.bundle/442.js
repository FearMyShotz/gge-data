Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleTimerComponentEvent(t, i = "", n = true, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this)._timerComponentID = i;
    return a;
  }
  n.__extends(CastleTimerComponentEvent, e);
  CastleTimerComponentEvent.__initialize_static_members = function () {
    CastleTimerComponentEvent.TIMER_EXPIRED = "timerExpired";
  };
  return CastleTimerComponentEvent;
}(createjs.Event);
exports.CastleTimerComponentEvent = o;
o.__initialize_static_members();