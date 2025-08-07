Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleDonationEventDataEvent(t, i = null, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).params = i;
    return a;
  }
  n.__extends(CastleDonationEventDataEvent, e);
  CastleDonationEventDataEvent.__initialize_static_members = function () {
    CastleDonationEventDataEvent.ON_CURRENT_SPENT_POINTS_UPDATED = "ON_CURRENT_SPENT_POINTS_UPDATED";
  };
  return CastleDonationEventDataEvent;
}(createjs.Event);
exports.CastleDonationEventDataEvent = o;
o.__initialize_static_members();