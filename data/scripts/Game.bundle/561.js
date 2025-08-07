Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleLogDataEvent(t, i = null, n = true, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).logVO = i;
    return a;
  }
  n.__extends(CastleLogDataEvent, e);
  CastleLogDataEvent.__initialize_static_members = function () {
    CastleLogDataEvent.NEW_LOG = "newlog";
    CastleLogDataEvent.NEW_LOG_ANIMATION = "newloganimation";
    CastleLogDataEvent.NEW_DETAILED_LOG = "newdetailedlog";
    CastleLogDataEvent.NEW_FULL_LOG = "newfulllog";
    CastleLogDataEvent.LOG_DOES_NOT_EXISTS = "logdoesnotexists";
  };
  return CastleLogDataEvent;
}(createjs.Event);
exports.CastleLogDataEvent = o;
o.__initialize_static_members();