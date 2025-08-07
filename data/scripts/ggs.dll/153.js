Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./13.js");
var s = require("./4.js");
var r = function (e) {
  function MeasurementResultsEvent(t) {
    return e.call(this, t) || this;
  }
  i.__extends(MeasurementResultsEvent, e);
  MeasurementResultsEvent.prototype.getVars = function () {
    return {
      date: this.date,
      level: this.level,
      playerId: s.BasicModel.userData ? s.BasicModel.userData.playerID : -1,
      sessionId: this.sessionId,
      sessionTime: this.sessionTime,
      measurementDuration: this.measurementDuration,
      deviceId: this.deviceId,
      storeId: this.storeId,
      connectionType: this.connectionType,
      memoryUsage: this.memoryUsage,
      buildVersion: this.buildVersion
    };
  };
  return MeasurementResultsEvent;
}(a.BasicTrackingEvent);
exports.MeasurementResultsEvent = r;