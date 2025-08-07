Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./596.js");
var o = require("./2.js");
var a = require("./9.js");
var s = require("./38.js");
var r = require("./3.js");
var l = require("./69.js");
var c = require("./17.js");
var u = require("./154.js");
var d = function () {
  function BasicMicroservice() {
    this.initialize();
  }
  BasicMicroservice.prototype.initialize = function () {
    throw new l.AbstractMethodError();
  };
  BasicMicroservice.prototype.reset = function () {
    throw new l.AbstractMethodError();
  };
  BasicMicroservice.prototype.requestGET = function (e = null) {
    return null;
  };
  BasicMicroservice.prototype.requestPUT = function (e = null) {
    return null;
  };
  BasicMicroservice.prototype.requestPOST = function (e = null) {
    return null;
  };
  BasicMicroservice.prototype.requestDELETE = function (e = null) {
    return null;
  };
  BasicMicroservice.prototype.requestGETSuccess = function (e) {
    throw new l.AbstractMethodError();
  };
  BasicMicroservice.prototype.requestPUTSuccess = function (e) {
    throw new l.AbstractMethodError();
  };
  BasicMicroservice.prototype.requestPOSTSuccess = function (e) {
    throw new l.AbstractMethodError();
  };
  BasicMicroservice.prototype.requestDELETESuccess = function (e) {
    throw new l.AbstractMethodError();
  };
  BasicMicroservice.prototype.requestFail = function (e) {
    if (e && (!e || e.response)) {
      var t = e.response;
      var i = t.status;
      var n = "";
      var l = "";
      switch (i) {
        case BasicMicroservice.ERROR_INTERNAL_SERVER_ERROR:
          n = r.Localize.text("generic_alert_bug");
          l = r.Localize.text("errorCode_http_" + i) + "\n" + t.data.action + "\n" + t.data.ping + "\n" + t.data.timestamp + "\n" + t.data.region;
          a.CastleDialogHandler.getInstance().registerDialogs(s.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(n, l));
          break;
        case BasicMicroservice.ERROR_INVALID_AUTHENTICATION:
        case BasicMicroservice.ERROR_FORBIDDEN_AUTHENTICATION:
          n = r.Localize.text("generic_alert_bug");
          l = r.Localize.text("errorCode_http_" + i);
          a.CastleDialogHandler.getInstance().registerDialogs(s.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(n, l));
      }
      c.CastleLayoutManager.getInstance().hideDialog(u.CastleExternalPreloaderDialog);
    }
  };
  BasicMicroservice.prototype.axiosLog = function (e, t) {
    if (t) {
      n.default.interceptors.request.use(function (t) {
        console.log("Request " + e + ":", JSON.stringify(t, null, 2));
        return t;
      });
      n.default.interceptors.response.use(function (t) {
        console.log("Response " + e + ":", JSON.stringify(t, null, 2));
        return t;
      });
    }
  };
  BasicMicroservice.REQUEST_METHOD_GET = "GET";
  BasicMicroservice.REQUEST_METHOD_PUT = "PUT";
  BasicMicroservice.REQUEST_METHOD_POST = "POST";
  BasicMicroservice.REQUEST_METHOD_DELETE = "DELETE";
  BasicMicroservice.ERROR_INTERNAL_SERVER_ERROR = 500;
  BasicMicroservice.ERROR_INVALID_AUTHENTICATION = 401;
  BasicMicroservice.ERROR_FORBIDDEN_AUTHENTICATION = 403;
  return BasicMicroservice;
}();
exports.BasicMicroservice = d;