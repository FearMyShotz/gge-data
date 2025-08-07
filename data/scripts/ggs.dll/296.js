Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./15.js");
var s = require("./13.js");
var r = require("./3.js");
var o = function (e) {
  function DesktopDeviceInformationTrackingEvent(t) {
    var n = e.call(this, t) || this;
    n.playerId = 0;
    return n;
  }
  i.__extends(DesktopDeviceInformationTrackingEvent, e);
  DesktopDeviceInformationTrackingEvent.prototype.getVars = function () {
    var e = {
      eventId: a.TrackingEventIds.DESKTOP_DEVICE_INFORMATION,
      event_mapping_version: 2,
      playerId: this.playerId,
      screenResolutionX: r.Capabilities.screenResolutionX,
      screenResolutionY: r.Capabilities.screenResolutionY,
      browserString: r.Capabilities.version,
      desktopOs: r.Capabilities.os,
      flashVersion: ""
    };
    return e;
  };
  return DesktopDeviceInformationTrackingEvent;
}(s.BasicTrackingEvent);
exports.DesktopDeviceInformationTrackingEvent = o;