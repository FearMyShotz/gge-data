var n = require("./257.js");
var o = require("./2256.js");
var a = require("./2258.js");
var s = require("./1283.js");
var r = require("./2259.js");
var l = require("./2262.js");
var c = require("./2263.js");
var u = require("./1287.js");
module.exports = function xhrAdapter(e) {
  return new Promise(function dispatchXhrRequest(t, i) {
    var d = e.data;
    var p = e.headers;
    if (n.isFormData(d)) {
      delete p["Content-Type"];
    }
    var h = new XMLHttpRequest();
    if (e.auth) {
      var g = e.auth.username || "";
      var C = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      p.Authorization = "Basic " + btoa(g + ":" + C);
    }
    var _ = r(e.baseURL, e.url);
    h.open(e.method.toUpperCase(), s(_, e.params, e.paramsSerializer), true);
    h.timeout = e.timeout;
    h.onreadystatechange = function handleLoad() {
      if (h && h.readyState === 4 && (h.status !== 0 || h.responseURL && h.responseURL.indexOf("file:") === 0)) {
        var n = "getAllResponseHeaders" in h ? l(h.getAllResponseHeaders()) : null;
        var a = {
          data: e.responseType && e.responseType !== "text" ? h.response : h.responseText,
          status: h.status,
          statusText: h.statusText,
          headers: n,
          config: e,
          request: h
        };
        o(t, i, a);
        h = null;
      }
    };
    h.onabort = function handleAbort() {
      if (h) {
        i(u("Request aborted", e, "ECONNABORTED", h));
        h = null;
      }
    };
    h.onerror = function handleError() {
      i(u("Network Error", e, null, h));
      h = null;
    };
    h.ontimeout = function handleTimeout() {
      var t = "timeout of " + e.timeout + "ms exceeded";
      if (e.timeoutErrorMessage) {
        t = e.timeoutErrorMessage;
      }
      i(u(t, e, "ECONNABORTED", h));
      h = null;
    };
    if (n.isStandardBrowserEnv()) {
      var m = (e.withCredentials || c(_)) && e.xsrfCookieName ? a.read(e.xsrfCookieName) : undefined;
      if (m) {
        p[e.xsrfHeaderName] = m;
      }
    }
    if ("setRequestHeader" in h) {
      n.forEach(p, function setRequestHeader(e, t) {
        if (d === undefined && t.toLowerCase() === "content-type") {
          delete p[t];
        } else {
          h.setRequestHeader(t, e);
        }
      });
    }
    if (!n.isUndefined(e.withCredentials)) {
      h.withCredentials = !!e.withCredentials;
    }
    if (e.responseType) {
      try {
        h.responseType = e.responseType;
      } catch (t) {
        if (e.responseType !== "json") {
          throw t;
        }
      }
    }
    if (typeof e.onDownloadProgress == "function") {
      h.addEventListener("progress", e.onDownloadProgress);
    }
    if (typeof e.onUploadProgress == "function" && h.upload) {
      h.upload.addEventListener("progress", e.onUploadProgress);
    }
    if (e.cancelToken) {
      e.cancelToken.promise.then(function onCanceled(e) {
        if (h) {
          h.abort();
          i(e);
          h = null;
        }
      });
    }
    d ||= null;
    h.send(d);
  });
};