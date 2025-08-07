Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function MobileLoginTimeTrackingEvent(t) {
    return e.call(this, t) || this;
  }
  i.__extends(MobileLoginTimeTrackingEvent, e);
  MobileLoginTimeTrackingEvent.prototype.getVars = function () {
    var e = {
      gameId: this.gameId,
      networkId: this.networkId,
      instanceId: this.instanceID,
      playerId: this.playerID,
      var_1: this.accountID,
      var_2: this.deviceId,
      var_3: this.storeId,
      var_4: this.loginTime,
      var_5: this.downloadRate,
      var_6: this.downloadContentSizeExternal,
      var_7: this.downloadContentSizeLocal
    };
    e.var_data = this.connectionType + ";" + this.downloadContentAmountExternal + ";" + this.downloadContentAmountLocal + ";" + String(this.sessionType) + ";" + String(this.loginTimeMs);
    return e;
  };
  MobileLoginTimeTrackingEvent.IS_FIRST_USER = 1;
  MobileLoginTimeTrackingEvent.IS_FIRST_APP_START_AFTER_UPDATE = 2;
  MobileLoginTimeTrackingEvent.IS_REGULAR_USER = 3;
  return MobileLoginTimeTrackingEvent;
}(require("./13.js").BasicTrackingEvent);
exports.MobileLoginTimeTrackingEvent = a;