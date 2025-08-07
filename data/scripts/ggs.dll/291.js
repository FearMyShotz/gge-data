Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function ABTestTimeoutTrackingEvent(t) {
    var n = e.call(this, t) || this;
    n.playerId = 0;
    return n;
  }
  i.__extends(ABTestTimeoutTrackingEvent, e);
  ABTestTimeoutTrackingEvent.prototype.getVars = function () {
    var e = {
      playerId: this.playerId,
      var_2: this.testID,
      var_4: this.accountID,
      var_data: this.referrer
    };
    return e;
  };
  return ABTestTimeoutTrackingEvent;
}(require("./13.js").BasicTrackingEvent);
exports.ABTestTimeoutTrackingEvent = a;