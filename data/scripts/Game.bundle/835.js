Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AdvisorActivationEvent(t, i, n, o) {
    var a = e.call(this, t, n, o) || this;
    a._advisorType = i;
    return a;
  }
  n.__extends(AdvisorActivationEvent, e);
  Object.defineProperty(AdvisorActivationEvent.prototype, "advisorType", {
    get: function () {
      return this._advisorType;
    },
    enumerable: true,
    configurable: true
  });
  AdvisorActivationEvent.ADVISOR_ACTIVATION_CHANGED = "ADVISOR_ACTIVATION_CHANGED";
  return AdvisorActivationEvent;
}(createjs.Event);
exports.AdvisorActivationEvent = o;