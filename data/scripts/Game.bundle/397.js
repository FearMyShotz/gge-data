Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleMinuteSkipEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleMinuteSkipEvent, e);
  CastleMinuteSkipEvent.__initialize_static_members = function () {
    CastleMinuteSkipEvent.MINUTESKIP_USE_SUCESS = "minuteskip_use_success";
    CastleMinuteSkipEvent.MINUTESKIP_USE_FAIL = "minuteskip_use_fail";
    CastleMinuteSkipEvent.MINUTESKIPS_UPDATED = "minuteskips_updated";
  };
  return CastleMinuteSkipEvent;
}(createjs.Event);
exports.CastleMinuteSkipEvent = o;
o.__initialize_static_members();