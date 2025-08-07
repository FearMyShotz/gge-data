Object.defineProperty(exports, "__esModule", {
  value: true
});
require("./2.js").getLogger("Tracking.BasicTrackingEvent");
var i = function () {
  function BasicTrackingEvent(e) {
    this.referrer = e;
  }
  BasicTrackingEvent.prototype.getVars = function () {
    throw new Error("TrackingEvent.getVars must be implemented by concrete classes");
  };
  return BasicTrackingEvent;
}();
exports.BasicTrackingEvent = i;