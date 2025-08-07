Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleXPChangedEvent(t, i, n = false, o = false) {
    var a = this;
    a.previousXP = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).previousXP = i;
    return a;
  }
  n.__extends(CastleXPChangedEvent, e);
  CastleXPChangedEvent.__initialize_static_members = function () {
    CastleXPChangedEvent.CHANGE_USER_XP = "changeUserXP";
  };
  return CastleXPChangedEvent;
}(createjs.Event);
exports.CastleXPChangedEvent = o;
o.__initialize_static_members();