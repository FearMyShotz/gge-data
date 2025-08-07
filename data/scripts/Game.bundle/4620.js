Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetSubscriptionInfoEventVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetSubscriptionInfoEventVO, e);
  C2SGetSubscriptionInfoEventVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_SUBSCRIPTION_PACKAGES;
  };
  return C2SGetSubscriptionInfoEventVO;
}(o.BasicCommandVO);
exports.C2SGetSubscriptionInfoEventVO = s;