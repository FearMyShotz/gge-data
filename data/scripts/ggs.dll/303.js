Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function ShopBackButtonTrackingEvent(t) {
    var n = e.call(this, t) || this;
    n.shopId = 1;
    return n;
  }
  i.__extends(ShopBackButtonTrackingEvent, e);
  ShopBackButtonTrackingEvent.prototype.getVars = function () {
    var e = {
      playerId: this.playerId,
      date: this.date,
      var_1: this.serviceId,
      var_2: this.shopId,
      var_data: this.subId
    };
    return e;
  };
  return ShopBackButtonTrackingEvent;
}(require("./13.js").BasicTrackingEvent);
exports.ShopBackButtonTrackingEvent = a;