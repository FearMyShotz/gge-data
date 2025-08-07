Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function SirenInteractionTrackingEvent(t) {
    return e.call(this, t) || this;
  }
  i.__extends(SirenInteractionTrackingEvent, e);
  SirenInteractionTrackingEvent.prototype.getVars = function () {
    var e = {
      var_data: this.cv,
      var_1: this.interactionType
    };
    return e;
  };
  return SirenInteractionTrackingEvent;
}(require("./13.js").BasicTrackingEvent);
exports.SirenInteractionTrackingEvent = a;