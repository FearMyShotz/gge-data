Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleTimerEvent(t, i, n = true, o = false) {
    var a = this;
    a.nowValue = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).nowValue = i;
    return a;
  }
  n.__extends(CastleTimerEvent, e);
  CastleTimerEvent.prototype.clone = function () {
    var t = e.prototype.clone.call(this);
    t.nowValue = this.nowValue;
    return t;
  };
  CastleTimerEvent.__initialize_static_members = function () {
    CastleTimerEvent.TIMER_INTERVAL_SECOND = "TIMER_INTERVAL_SECOND";
  };
  return CastleTimerEvent;
}(createjs.Event);
exports.CastleTimerEvent = o;
o.__initialize_static_members();