Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function URLRequest(e, t = null, n = "GET") {
    this.url = e;
    this.data = t;
    this.method = n;
  }
  URLRequest.prototype.getURLWithParams = function () {
    if (!this.data || this.method.toUpperCase() !== "GET") {
      return this.url;
    }
    var e = this.data instanceof URLSearchParams ? this.data.toString() : new URLSearchParams(this.data).toString();
    if (e.length > 0) {
      return this.url + (this.url.includes("?") ? "&" : "?") + e;
    } else {
      return this.url;
    }
  };
  return URLRequest;
}();
exports.URLRequest = i;