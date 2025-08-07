Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function OpenAfterPushNotificationTrackingEvent(t) {
    var n = e.call(this, t) || this;
    n.playerId = -1;
    return n;
  }
  i.__extends(OpenAfterPushNotificationTrackingEvent, e);
  OpenAfterPushNotificationTrackingEvent.prototype.getVars = function () {
    var e = {
      playerId: this.playerId,
      var_1: this.pushNotificationId
    };
    return e;
  };
  return OpenAfterPushNotificationTrackingEvent;
}(require("./13.js").BasicTrackingEvent);
exports.OpenAfterPushNotificationTrackingEvent = a;