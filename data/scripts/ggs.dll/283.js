Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./14.js");
var s = function (e) {
  function TrackingVerificationErrorLOFactory(t, n, i) {
    var a = e.call(this) || this;
    a._subErrorId = t;
    a._trackingCase = n;
    a._missingEvents = i;
    return a;
  }
  i.__extends(TrackingVerificationErrorLOFactory, e);
  TrackingVerificationErrorLOFactory.prototype.create = function () {
    var t = e.prototype.create.call(this);
    t.logData.set(a.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, TrackingVerificationErrorLOFactory.TRACKING_VERIFICATION_ERROR.toString());
    t.logData.set(TrackingVerificationErrorLOFactory.PARAM_TRACKING_CASE, this._trackingCase);
    t.logData.set(TrackingVerificationErrorLOFactory.PARAM_MISSING_EVENTS, this._missingEvents);
    return t;
  };
  TrackingVerificationErrorLOFactory.TRACKING_EVENTS_MISSING_ERROR = 8001;
  TrackingVerificationErrorLOFactory.TRACKING_VERIFICATION_ERROR = 8;
  TrackingVerificationErrorLOFactory.PARAM_MISSING_EVENTS = "listOfFaultyEvents";
  TrackingVerificationErrorLOFactory.PARAM_TRACKING_CASE = "trackingCase";
  return TrackingVerificationErrorLOFactory;
}(require("./21.js").BasicLogObjectFactory);
exports.TrackingVerificationErrorLOFactory = s;