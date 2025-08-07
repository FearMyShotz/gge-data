var n = require("./257.js");
var o = require("./1283.js");
var a = require("./2251.js");
var s = require("./2252.js");
var r = require("./1288.js");
function Axios(e) {
  this.defaults = e;
  this.interceptors = {
    request: new a(),
    response: new a()
  };
}
Axios.prototype.request = function request(e) {
  if (typeof e == "string") {
    (e = arguments[1] || {}).url = arguments[0];
  } else {
    e = e || {};
  }
  if ((e = r(this.defaults, e)).method) {
    e.method = e.method.toLowerCase();
  } else if (this.defaults.method) {
    e.method = this.defaults.method.toLowerCase();
  } else {
    e.method = "get";
  }
  var t = [s, undefined];
  var i = Promise.resolve(e);
  this.interceptors.request.forEach(function unshiftRequestInterceptors(e) {
    t.unshift(e.fulfilled, e.rejected);
  });
  this.interceptors.response.forEach(function pushResponseInterceptors(e) {
    t.push(e.fulfilled, e.rejected);
  });
  while (t.length) {
    i = i.then(t.shift(), t.shift());
  }
  return i;
};
Axios.prototype.getUri = function getUri(e) {
  e = r(this.defaults, e);
  return o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
};
n.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(e) {
  Axios.prototype[e] = function (t, i) {
    return this.request(r(i || {}, {
      method: e,
      url: t,
      data: (i || {}).data
    }));
  };
});
n.forEach(["post", "put", "patch"], function forEachMethodWithData(e) {
  Axios.prototype[e] = function (t, i, n) {
    return this.request(r(n || {}, {
      method: e,
      url: t,
      data: i
    }));
  };
});
module.exports = Axios;