Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SNewsletterSubscriptionVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SNewsletterSubscriptionVO, e);
  C2SNewsletterSubscriptionVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_NEWSLETTER_SUBSCRIPTION;
  };
  return C2SNewsletterSubscriptionVO;
}(o.BasicCommandVO);
exports.C2SNewsletterSubscriptionVO = s;