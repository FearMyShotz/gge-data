Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleBuddyListDataEvent(t, i = null, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).params = i;
    return a;
  }
  n.__extends(CastleBuddyListDataEvent, e);
  CastleBuddyListDataEvent.__initialize_static_members = function () {
    CastleBuddyListDataEvent.CHANGE_BUDDYDATA = "changebuddydata";
  };
  return CastleBuddyListDataEvent;
}(createjs.Event);
exports.CastleBuddyListDataEvent = o;
o.__initialize_static_members();