Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function MobileUserRatingTrackingEvent(t) {
    var n = e.call(this, t) || this;
    n.playerId = -1;
    return n;
  }
  i.__extends(MobileUserRatingTrackingEvent, e);
  MobileUserRatingTrackingEvent.prototype.getVars = function () {
    var e = {
      playerId: this.playerId,
      var_1: this.trackType,
      var_2: this.stars
    };
    return e;
  };
  MobileUserRatingTrackingEvent.TYPE_RATE_NOW = 1;
  MobileUserRatingTrackingEvent.TYPE_NOT_NOW = 2;
  MobileUserRatingTrackingEvent.TYPE_NEVER = 3;
  return MobileUserRatingTrackingEvent;
}(require("./13.js").BasicTrackingEvent);
exports.MobileUserRatingTrackingEvent = a;