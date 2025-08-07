var n = require("./257.js");
var o = require("./2252.js");
var a = require("./1284.js");
var s = require("./1285.js");
function throwIfCancellationRequested(e) {
  if (e.cancelToken) {
    e.cancelToken.throwIfRequested();
  }
}
module.exports = function dispatchRequest(e) {
  throwIfCancellationRequested(e);
  e.headers = e.headers || {};
  e.data = o(e.data, e.headers, e.transformRequest);
  e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers);
  n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(t) {
    delete e.headers[t];
  });
  return (e.adapter || s.adapter)(e).then(function onAdapterResolution(t) {
    throwIfCancellationRequested(e);
    t.data = o(t.data, t.headers, e.transformResponse);
    return t;
  }, function onAdapterRejection(t) {
    if (!a(t)) {
      throwIfCancellationRequested(e);
      if (t && t.response) {
        t.response.data = o(t.response.data, t.response.headers, e.transformResponse);
      }
    }
    return Promise.reject(t);
  });
};