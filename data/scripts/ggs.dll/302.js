Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function ShopLoadedTrackingEvent(t) {
    return e.call(this, t) || this;
  }
  i.__extends(ShopLoadedTrackingEvent, e);
  ShopLoadedTrackingEvent.prototype.getVars = function () {
    var e = {
      playerId: this.playerId,
      date: this.date,
      var_1: this.sessionId,
      var_2: this.microtime,
      var_3: this.shopId,
      var_4: this.storeId,
      var_5: this.deviceId,
      var_data: []
    };
    e.var_data[0] = this.connectionType;
    return e;
  };
  return ShopLoadedTrackingEvent;
}(require("./13.js").BasicTrackingEvent);
exports.ShopLoadedTrackingEvent = a;