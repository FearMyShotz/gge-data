Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetUnsentPriceTrackingVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetUnsentPriceTrackingVO, e);
  C2SGetUnsentPriceTrackingVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_UNSENT_PRICE_TRACKING;
  };
  return C2SGetUnsentPriceTrackingVO;
}(o.BasicCommandVO);
exports.C2SGetUnsentPriceTrackingVO = s;