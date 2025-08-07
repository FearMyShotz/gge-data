Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SSetCredentials(t, i, n) {
    var o = e.call(this) || this;
    o.PN = t;
    o.MAIL = i;
    o.PW = n;
    return o;
  }
  n.__extends(C2SSetCredentials, e);
  C2SSetCredentials.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SET_CREDENTIALS;
  };
  return C2SSetCredentials;
}(o.BasicCommandVO);
exports.C2SSetCredentials = s;