Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./15.js");
var s = require("./17.js");
var r = require("./52.js");
var o = require("./4.js");
var l = function (e) {
  function BasicDesktopDeviceInformationTrackingCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicDesktopDeviceInformationTrackingCommand, e);
  BasicDesktopDeviceInformationTrackingCommand.prototype.execute = function (e = null) {
    s.TrackingCache.getInstance().getEvent(a.TrackingEventIds.DESKTOP_DEVICE_INFORMATION).playerId = o.BasicModel.userData.playerID;
    s.TrackingCache.getInstance().sendEvent(a.TrackingEventIds.DESKTOP_DEVICE_INFORMATION);
  };
  return BasicDesktopDeviceInformationTrackingCommand;
}(r.BasicTrackingCommand);
exports.BasicDesktopDeviceInformationTrackingCommand = l;