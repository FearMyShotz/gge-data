Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleLogoutEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleLogoutEvent, e);
  CastleLogoutEvent.__initialize_static_members = function () {
    CastleLogoutEvent.LOGOUT_TRIGGERED = "logout_triggered";
  };
  return CastleLogoutEvent;
}(createjs.Event);
exports.CastleLogoutEvent = o;
o.__initialize_static_members();