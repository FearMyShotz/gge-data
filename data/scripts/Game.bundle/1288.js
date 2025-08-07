var n = require("./257.js");
module.exports = function mergeConfig(e, t) {
  t = t || {};
  var i = {};
  var o = ["url", "method", "data"];
  var a = ["headers", "auth", "proxy", "params"];
  var s = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"];
  var r = ["validateStatus"];
  function getMergedValue(e, t) {
    if (n.isPlainObject(e) && n.isPlainObject(t)) {
      return n.merge(e, t);
    } else if (n.isPlainObject(t)) {
      return n.merge({}, t);
    } else if (n.isArray(t)) {
      return t.slice();
    } else {
      return t;
    }
  }
  function mergeDeepProperties(o) {
    if (n.isUndefined(t[o])) {
      if (!n.isUndefined(e[o])) {
        i[o] = getMergedValue(undefined, e[o]);
      }
    } else {
      i[o] = getMergedValue(e[o], t[o]);
    }
  }
  n.forEach(o, function valueFromConfig2(e) {
    if (!n.isUndefined(t[e])) {
      i[e] = getMergedValue(undefined, t[e]);
    }
  });
  n.forEach(a, mergeDeepProperties);
  n.forEach(s, function defaultToConfig2(o) {
    if (n.isUndefined(t[o])) {
      if (!n.isUndefined(e[o])) {
        i[o] = getMergedValue(undefined, e[o]);
      }
    } else {
      i[o] = getMergedValue(undefined, t[o]);
    }
  });
  n.forEach(r, function merge(n) {
    if (n in t) {
      i[n] = getMergedValue(e[n], t[n]);
    } else if (n in e) {
      i[n] = getMergedValue(undefined, e[n]);
    }
  });
  var l = o.concat(a).concat(s).concat(r);
  var c = Object.keys(e).concat(Object.keys(t)).filter(function filterAxiosKeys(e) {
    return l.indexOf(e) === -1;
  });
  n.forEach(c, mergeDeepProperties);
  return i;
};