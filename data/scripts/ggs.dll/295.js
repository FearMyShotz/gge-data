Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./13.js");
var s = require("./34.js");
var r = function (e) {
  function GamePaymentShopClickEvent(t) {
    return e.call(this, t) || this;
  }
  i.__extends(GamePaymentShopClickEvent, e);
  GamePaymentShopClickEvent.prototype.getVars = function () {
    return {
      clickSourceId: this.clickSourceId,
      connectionType: this.connectionType,
      deviceId: this.deviceId,
      eventId: s.GamePaymentshopClick.ID,
      event_mapping_version: 2,
      playerId: this.playerId,
      sessionId: parseInt(this.sessionId, 10),
      storeId: this.storeId
    };
  };
  return GamePaymentShopClickEvent;
}(a.BasicTrackingEvent);
exports.GamePaymentShopClickEvent = r;