var n = require("./1287.js");
module.exports = function settle(e, t, i) {
  var o = i.config.validateStatus;
  if (i.status && o && !o(i.status)) {
    t(n("Request failed with status code " + i.status, i.config, null, i.request, i));
  } else {
    e(i);
  }
};