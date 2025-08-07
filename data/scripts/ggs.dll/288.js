Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function TrackingSecurityErrorLOFactory(t, n, i, a, s) {
    var r = e.call(this, t, n, i) || this;
    r._eventId = a;
    r._eventData = s;
    return r;
  }
  i.__extends(TrackingSecurityErrorLOFactory, e);
  TrackingSecurityErrorLOFactory.prototype.create = function () {
    var t = e.prototype.create.call(this);
    t.logData.set(TrackingSecurityErrorLOFactory.PARAM_REQUEST_DATA, this._eventId.toString());
    t.logData.set(TrackingSecurityErrorLOFactory.PARAM_EVENT_DATA, this._eventData);
    return t;
  };
  TrackingSecurityErrorLOFactory.PARAM_REQUEST_DATA = "requestData";
  TrackingSecurityErrorLOFactory.PARAM_EVENT_DATA = "eventData";
  return TrackingSecurityErrorLOFactory;
}(require("./64.js").SecurityErrorLOFactory);
exports.TrackingSecurityErrorLOFactory = a;