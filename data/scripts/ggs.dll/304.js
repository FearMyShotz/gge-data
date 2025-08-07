Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function AssetLoadingSpeedTrackingEvent(t) {
    return e.call(this, t) || this;
  }
  i.__extends(AssetLoadingSpeedTrackingEvent, e);
  AssetLoadingSpeedTrackingEvent.prototype.getVars = function () {
    var e = {
      playerId: this.playerId,
      date: this.date,
      accountHash: this.accountHash,
      deviceId: this.deviceId,
      storeId: this.storeId,
      connectionType: this.connectionType,
      loadingSpeed: this.loadingSpeed,
      assetsSize: this.assetsSize,
      assetsAmount: this.assetsAmount
    };
    return e;
  };
  return AssetLoadingSpeedTrackingEvent;
}(require("./13.js").BasicTrackingEvent);
exports.AssetLoadingSpeedTrackingEvent = a;