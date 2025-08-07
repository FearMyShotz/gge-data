Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./14.js");
var s = function (e) {
  function HTTPErrorLOFactory(t, n, i, a = "", s = null) {
    var r = e.call(this) || this;
    r._subErrorId = t;
    r._statusEvent = n;
    r._req = i;
    r._requesDataKey = a;
    r._eventData = s;
    return r;
  }
  i.__extends(HTTPErrorLOFactory, e);
  HTTPErrorLOFactory.prototype.create = function () {
    var t = e.prototype.create.call(this);
    t.logData.set(a.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, HTTPErrorLOFactory.HTTP_ERROR.toString());
    t.logData.set(a.ExternalLoggingConstants.PARAM_URL, this._req.url);
    t.logData.set(HTTPErrorLOFactory.PARAM_HTTP_CODE, this._statusEvent.status);
    if (this._req.data) {
      t.logData.set(HTTPErrorLOFactory.PARAM_REQUEST_DATA, this._req.data[this._requesDataKey]);
    }
    if (this._eventData) {
      t.logData.set(HTTPErrorLOFactory.PARAM_EVENT_DATA, this._eventData);
    }
    return t;
  };
  HTTPErrorLOFactory.GENERAL_TRACKING_HTTP_ERROR = 9001;
  HTTPErrorLOFactory.GENERAL_TRACKING_SERVER_HTTP_ERROR = 9002;
  HTTPErrorLOFactory.HTTP_ERROR = 9;
  HTTPErrorLOFactory.PARAM_HTTP_CODE = "httpCode";
  HTTPErrorLOFactory.PARAM_REQUEST_DATA = "requestData";
  HTTPErrorLOFactory.PARAM_EVENT_DATA = "eventData";
  return HTTPErrorLOFactory;
}(require("./21.js").BasicLogObjectFactory);
exports.HTTPErrorLOFactory = s;