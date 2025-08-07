Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./34.js");
var s = require("./4.js");
var r = require("./5.js");
var o = function (e) {
  function ProfilingTrackingEvent(t) {
    var n = e.call(this, t) || this;
    n.downloadSpeed = 0;
    return n;
  }
  i.__extends(ProfilingTrackingEvent, e);
  ProfilingTrackingEvent.prototype.getVars = function () {
    var e = {
      eventId: a.Profiling.ID,
      event_mapping_version: 2,
      playerId: s.BasicModel.userData ? s.BasicModel.userData.playerID : -1,
      level: this.level,
      dlr: this.downloadSpeed,
      fps: this.fps,
      deviceId: this.deviceId,
      storeId: this.storeId,
      connectionType: this.connectionType,
      maxFps: this.maxFps,
      memoryUsage: this.memoryUsage
    };
    e.user_agent = navigator.userAgent || "Not available";
    e.session_length_ms = r.EnvGlobalsHandler.globals.sessionLength * 1000;
    return e;
  };
  return ProfilingTrackingEvent;
}(require("./13.js").BasicTrackingEvent);
exports.ProfilingTrackingEvent = o;