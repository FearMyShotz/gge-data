Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function ShopCheckoutTrackingEvent(t) {
    var n = e.call(this, t) || this;
    n.shopId = 1;
    return n;
  }
  i.__extends(ShopCheckoutTrackingEvent, e);
  ShopCheckoutTrackingEvent.prototype.getVars = function () {
    var e = {
      playerId: this.playerId,
      date: this.date,
      var_1: this.sessionId,
      var_2: this.microtime,
      var_3: this.shopId,
      var_4: this.orderId,
      var_5: "",
      var_6: this.deviceId,
      var_7: this.price
    };
    return e;
  };
  return ShopCheckoutTrackingEvent;
}(require("./13.js").BasicTrackingEvent);
exports.ShopCheckoutTrackingEvent = a;