Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./153.js");
var s = require("./34.js");
var r = function (e) {
  function InGamePerformanceEvent(t) {
    return e.call(this, t) || this;
  }
  i.__extends(InGamePerformanceEvent, e);
  InGamePerformanceEvent.prototype.getVars = function () {
    var t = e.prototype.getVars.call(this);
    return {
      animations: this.animations,
      eventId: s.InGamePerformance.ID,
      fps: this.fps,
      inGameState: this.inGameState,
      maxFps: this.maxFps,
      minFps: this.minFps,
      buildVersion: t.buildVersion,
      connectionType: t.connectionType,
      deviceId: t.deviceId,
      level: t.level,
      measurementDuration: t.measurementDuration,
      memoryUsage: t.memoryUsage,
      playerId: t.playerId,
      sessionId: parseInt(t.sessionId, 10),
      sessionTime: t.sessionTime,
      storeId: t.storeId
    };
  };
  return InGamePerformanceEvent;
}(a.MeasurementResultsEvent);
exports.InGamePerformanceEvent = r;