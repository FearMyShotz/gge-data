Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./23.js");
var a = require("./286.js");
var s = require("./63.js");
var r = require("./64.js");
var o = require("./287.js");
var l = require("./288.js");
var u = require("./3.js");
var c = require("./2.js").getLogger("Tracking.TrackingLoader");
var _ = function () {
  function TrackingLoader(e) {
    var t = this;
    this._request = e;
    this._loggedHTTPError = false;
    var n = new u.URLLoaderService(this._request);
    n.load().then(function (e) {
      if (e) {
        t.status = "complete";
      }
      n.dispose();
    }).catch(function (e) {
      t.status = "error";
    });
  }
  TrackingLoader.prototype.onCountSecurityError = function (e) {
    this.logToSplunk(new l.TrackingSecurityErrorLOFactory(r.SecurityErrorLOFactory.GENERAL_TRACKING_SECURITY_ERROR, e.text, this._request.url, this._eventId, this.jsonEncodedEventData));
  };
  TrackingLoader.prototype.onIOError = function (e) {
    if (!this._loggedHTTPError) {
      this.logToSplunk(new o.TrackingIOErrorLOFactory(s.IOErrorLOFactory.GENERAL_TRACKING_IO_ERROR, e.text, this._request.url, this._eventId, this.jsonEncodedEventData));
    }
  };
  TrackingLoader.prototype.onHTTPStatus = function (e) {
    switch (e.status / 100) {
      case 1:
      case 4:
        this.logToSplunk(new a.HTTPErrorLOFactory(a.HTTPErrorLOFactory.GENERAL_TRACKING_HTTP_ERROR, e, this._request, "eventId", this.jsonEncodedEventData));
        this._loggedHTTPError = true;
        break;
      case 5:
        this.logToSplunk(new a.HTTPErrorLOFactory(a.HTTPErrorLOFactory.GENERAL_TRACKING_SERVER_HTTP_ERROR, e, this._request, "eventId", this.jsonEncodedEventData));
        this._loggedHTTPError = true;
    }
  };
  TrackingLoader.prototype.logToSplunk = function (e) {
    this.convertJsonStringToURLVarsForSplunkLogging();
    i.ExternalLog.logger.log(e);
  };
  Object.defineProperty(TrackingLoader.prototype, "jsonEncodedEventData", {
    get: function () {
      c.warn("jsonEncodedEventData TO BE IMPLEMENTED -right now is just sending empty data");
      return JSON.stringify({});
    },
    enumerable: true,
    configurable: true
  });
  TrackingLoader.prototype.convertJsonStringToURLVarsForSplunkLogging = function () {
    c.warn("convertJsonStringToURLVarsForSplunkLogging TO BE IMPLEMENTED -right now everything is commented out");
  };
  return TrackingLoader;
}();
exports.TrackingLoader = _;