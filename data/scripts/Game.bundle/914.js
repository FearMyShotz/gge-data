Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetNewsletterSubscriptionStatusVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetNewsletterSubscriptionStatusVO, e);
  C2SGetNewsletterSubscriptionStatusVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_MAIL_NEWSLETTER_STATUS;
  };
  return C2SGetNewsletterSubscriptionStatusVO;
}(o.BasicCommandVO);
exports.C2SGetNewsletterSubscriptionStatusVO = s;