Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function TrackingIOErrorLOFactory(t, n, i, a, s) {
    var r = e.call(this, t, n, i) || this;
    r._eventId = a;
    r._eventData = s;
    return r;
  }
  i.__extends(TrackingIOErrorLOFactory, e);
  TrackingIOErrorLOFactory.prototype.create = function () {
    var t = e.prototype.create.call(this);
    t.logData.set(TrackingIOErrorLOFactory.PARAM_REQUEST_DATA, this._eventId.toString());
    t.logData.set(TrackingIOErrorLOFactory.PARAM_EVENT_DATA, this._eventData);
    return t;
  };
  TrackingIOErrorLOFactory.PARAM_REQUEST_DATA = "requestData";
  TrackingIOErrorLOFactory.PARAM_EVENT_DATA = "eventData";
  return TrackingIOErrorLOFactory;
}(require("./63.js").IOErrorLOFactory);
exports.TrackingIOErrorLOFactory = a;