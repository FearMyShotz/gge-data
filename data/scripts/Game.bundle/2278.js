Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./7.js");
var a = function (e) {
  function C2SResendEmail(t) {
    var i = e.call(this) || this;
    i.T = t;
    return i;
  }
  n.__extends(C2SResendEmail, e);
  C2SResendEmail.prototype.getCmdId = function () {
    return o.ClientConstSF.C2S_RESEND_MAIL;
  };
  return C2SResendEmail;
}(require("./2.js").BasicCommandVO);
exports.C2SResendEmail = a;