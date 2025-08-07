var t = require("./2254.js");
var n = require("./257.js");
var o = require("./2255.js");
var a = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(e, t) {
  if (!n.isUndefined(e) && n.isUndefined(e["Content-Type"])) {
    e["Content-Type"] = t;
  }
}
var s = {
  adapter: function getDefaultAdapter() {
    var e;
    if (typeof XMLHttpRequest != "undefined") {
      e = require("./1286.js");
    } else if (t !== undefined && Object.prototype.toString.call(t) === "[object process]") {
      e = require("./1286.js");
    }
    return e;
  }(),
  transformRequest: [function transformRequest(e, t) {
    o(t, "Accept");
    o(t, "Content-Type");
    if (n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e)) {
      return e;
    } else if (n.isArrayBufferView(e)) {
      return e.buffer;
    } else if (n.isURLSearchParams(e)) {
      setContentTypeIfUnset(t, "application/x-www-form-urlencoded;charset=utf-8");
      return e.toString();
    } else if (n.isObject(e)) {
      setContentTypeIfUnset(t, "application/json;charset=utf-8");
      return JSON.stringify(e);
    } else {
      return e;
    }
  }],
  transformResponse: [function transformResponse(e) {
    if (typeof e == "string") {
      try {
        e = JSON.parse(e);
      } catch (e) {}
    }
    return e;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
n.forEach(["delete", "get", "head"], function forEachMethodNoData(e) {
  s.headers[e] = {};
});
n.forEach(["post", "put", "patch"], function forEachMethodWithData(e) {
  s.headers[e] = n.merge(a);
});
module.exports = s;