Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleLoginBonusEvent(t, i = null, n = false, o = false) {
    var a = this;
    a.params = [];
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).params = i;
    return a;
  }
  n.__extends(CastleLoginBonusEvent, e);
  CastleLoginBonusEvent.__initialize_static_members = function () {
    CastleLoginBonusEvent.ACTIVITYBONUS_STATE_CHANGED = "ACTIVITYBONUS_STATE_CHANGED";
    CastleLoginBonusEvent.LOGINBONUS_UPDATE = "LOGINBONUS_UPDATE";
  };
  return CastleLoginBonusEvent;
}(createjs.Event);
exports.CastleLoginBonusEvent = o;
o.__initialize_static_members();