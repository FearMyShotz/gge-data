Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function MobileDeviceInformationTrackingEvent(t) {
    var n = e.call(this, t) || this;
    n.playerId = -1;
    n.accountID = "-1";
    n.context3DProfile = MobileDeviceInformationTrackingEvent.STAGE3D_NOT_SUPPORTED;
    return n;
  }
  i.__extends(MobileDeviceInformationTrackingEvent, e);
  MobileDeviceInformationTrackingEvent.prototype.getVars = function () {
    var e = {
      playerId: this.playerId,
      var_1: this.trackType,
      var_2: this.accountID,
      var_3: this.store,
      var_4: this.deviceID,
      var_data: this.deviceInfo
    };
    return e;
  };
  MobileDeviceInformationTrackingEvent.STAGE3D_NOT_SUPPORTED = "stage3DNotSupported";
  MobileDeviceInformationTrackingEvent.TYPE_REGISTER = 1;
  MobileDeviceInformationTrackingEvent.TYPE_LOGIN = 2;
  MobileDeviceInformationTrackingEvent.TYPE_INSTALL = 3;
  return MobileDeviceInformationTrackingEvent;
}(require("./13.js").BasicTrackingEvent);
exports.MobileDeviceInformationTrackingEvent = a;