Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleLoginEvent(t, i = false, n = false) {
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleLoginEvent, e);
  CastleLoginEvent.__initialize_static_members = function () {
    CastleLoginEvent.LOGIN_PROCESS_COMPLETE = "login_process_complete";
    CastleLoginEvent.ON_GBD_ARRIVED = "onGbdArrived";
  };
  return CastleLoginEvent;
}(createjs.Event);
exports.CastleLoginEvent = o;
o.__initialize_static_members();