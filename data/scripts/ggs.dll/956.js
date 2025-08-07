Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function ShopHelpButtonTrackingEvent(t) {
    return e.call(this, t) || this;
  }
  i.__extends(ShopHelpButtonTrackingEvent, e);
  ShopHelpButtonTrackingEvent.prototype.getVars = function () {
    var e = {
      playerId: this.playerId,
      lang: this.lang
    };
    return e;
  };
  return ShopHelpButtonTrackingEvent;
}(require("./13.js").BasicTrackingEvent);
exports.ShopHelpButtonTrackingEvent = a;