var n = require("./257.js");
var o = require("./1282.js");
var a = require("./2249.js");
var s = require("./1288.js");
function createInstance(e) {
  var t = new a(e);
  var i = o(a.prototype.request, t);
  n.extend(i, a.prototype, t);
  n.extend(i, t);
  return i;
}
var r = createInstance(require("./1285.js"));
r.Axios = a;
r.create = function create(e) {
  return createInstance(s(r.defaults, e));
};
r.Cancel = require("./1289.js");
r.CancelToken = require("./2263.js");
r.isCancel = require("./1284.js");
r.all = function all(e) {
  return Promise.all(e);
};
r.spread = require("./2264.js");
r.isAxiosError = require("./2265.js");
module.exports = r;
module.exports.default = r;