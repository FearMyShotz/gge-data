Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./11.js");
var a = new RegExp("http?s?://(" + i.BasicConstants.DOMAIN_INTERNAL_DNS + "|" + i.BasicConstants.DOMAIN_INTERNAL_DNS_ALIAS + ")/web/([a-zA-Z0-9_/]+)/(release|beta)/");
exports.detectFeatureBranchEnvironment = function (e) {
  var t;
  var n;
  var i = false;
  if (e) {
    var s = e.match(a);
    if (s) {
      i = true;
      t = s[2];
      n = s[3];
    }
  }
  return {
    isFeatureBranch: i,
    id: t,
    environment: n
  };
};