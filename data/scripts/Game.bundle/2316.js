Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SSetApiToken() {
    return e.call(this) || this;
  }
  n.__extends(C2SSetApiToken, e);
  C2SSetApiToken.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SET_API_TOKEN;
  };
  return C2SSetApiToken;
}(o.BasicCommandVO);
exports.C2SSetApiToken = s;