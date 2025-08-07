Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./7.js");
var a = function (e) {
  function C2SChangePlayerEmail(t) {
    var i = e.call(this) || this;
    i.PMA = t;
    return i;
  }
  n.__extends(C2SChangePlayerEmail, e);
  C2SChangePlayerEmail.prototype.getCmdId = function () {
    return o.ClientConstSF.C2S_REQUEST_MAIL_CHANGE;
  };
  return C2SChangePlayerEmail;
}(require("./2.js").BasicCommandVO);
exports.C2SChangePlayerEmail = a;