Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function PackageDownloadEvent(t) {
    return e.call(this, t) || this;
  }
  i.__extends(PackageDownloadEvent, e);
  PackageDownloadEvent.prototype.getVars = function () {
    var e = {
      gameId: this.gameId,
      networkId: this.networkId,
      instanceId: this.instanceID,
      playerId: this.playerID,
      var_1: this.downloadSize,
      var_2: this.downloadDuration,
      var_3: this.accountID,
      var_4: this.gameSwfLoadingTime,
      var_data: this.downloadURL + ";" + this.countryCode
    };
    return e;
  };
  return PackageDownloadEvent;
}(require("./13.js").BasicTrackingEvent);
exports.PackageDownloadEvent = a;