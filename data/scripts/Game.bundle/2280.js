Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./7.js");
var a = function (e) {
  function C2SCancelEmailChangeProgress() {
    return e.call(this) || this;
  }
  n.__extends(C2SCancelEmailChangeProgress, e);
  C2SCancelEmailChangeProgress.prototype.getCmdId = function () {
    return o.ClientConstSF.C2S_CANCEL_MAIL_CHANGE;
  };
  return C2SCancelEmailChangeProgress;
}(require("./2.js").BasicCommandVO);
exports.C2SCancelEmailChangeProgress = a;