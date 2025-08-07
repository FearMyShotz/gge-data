Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = require("./16.js");
var s = i.getLogger(a.CREATEJS_UTILITIES_LOGGER + ".URLLoaderService");
var r = function () {
  function URLLoaderService(e) {
    var t = this;
    this.urlRequest = e;
    this.onload = function () {
      if (!t.request || !t.resolve || !t.reject) {
        throw new Error("Already disposed");
      }
      if (t.request.status >= 200 && t.request.status < 300) {
        s.debug("SUCCESS: ", t.request.responseURL, t.request.status);
        t.resolve(t.request.responseText);
      } else {
        s.warn("FAILURE:", t.request.responseURL, t.request.status, t.request.responseText);
        t.reject(false);
      }
    };
    this.onerror = function (e) {
      if (!t.reject) {
        throw new Error("Already disposed");
      }
      s.error("ERROR:", e);
      t.reject(e);
    };
    this.request = new XMLHttpRequest();
    this.request.open(this.urlRequest.method, this.urlRequest.url, true);
    this.request.onload = this.onload;
    this.request.onerror = this.onerror;
  }
  URLLoaderService.prototype.load = function () {
    var e = this;
    var t = this.request;
    if (t) {
      return new Promise(function (n, i) {
        s.debug("URLLoaderService.load: " + e.urlRequest.method + " request.sent to " + e.urlRequest.url);
        t.send(e.urlRequest.data);
        e.resolve = n;
        e.reject = i;
      });
    } else {
      return Promise.reject(new Error("this.request was already disposed (undefined)"));
    }
  };
  URLLoaderService.prototype.dispose = function () {
    if (this.request) {
      this.request.onload = function () {};
      this.request.onerror = function () {};
      this.request = undefined;
    }
    this.resolve = undefined;
    this.reject = undefined;
  };
  return URLLoaderService;
}();
exports.URLLoaderService = r;