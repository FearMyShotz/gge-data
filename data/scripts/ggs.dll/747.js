Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js").getLogger("LocalizationJS.URLLoaderService");
var a = function () {
  function URLLoaderService(e) {
    var t = this;
    this.onload = function () {
      if (t.request.status >= 200 && t.request.status < 300 && t.request.responseText) {
        i.debug("SERVICE RESULT - SUCCESS");
        t.resolve(t.request.responseText);
      } else {
        i.debug("SERVICE RESULT - FAILURE:", t.request.status, t.request.responseText);
        t.reject(false);
      }
    };
    this.onerror = function (e) {
      i.debug("SERVICE RESULT - ERROR:", e);
      t.reject(e);
    };
    this.url = e;
    this.request = new XMLHttpRequest();
    this.request.open("GET", this.url, true);
    this.request.onload = this.onload;
    this.request.onerror = this.onerror;
  }
  URLLoaderService.prototype.load = function () {
    var e = this;
    return new Promise(function (t, n) {
      i.debug("Service.load: ", e.url);
      if (e.request) {
        e.resolve = t;
        e.reject = n;
        e.request.send();
        i.debug("Service.load: request.send");
      } else {
        n(false);
      }
    });
  };
  URLLoaderService.prototype.dispose = function () {
    if (this.request) {
      this.request.onload = null;
      this.request.onerror = null;
      this.request = null;
    }
    this.resolve = null;
    this.reject = null;
  };
  return URLLoaderService;
}();
exports.URLLoaderService = a;