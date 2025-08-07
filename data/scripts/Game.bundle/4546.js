Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./816.js");
var s = function (e) {
  function TieredPaymentrewardEventVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TieredPaymentrewardEventVO, e);
  Object.defineProperty(TieredPaymentrewardEventVO.prototype, "skinnedSpecialOfferDialogKey", {
    get: function () {
      return r.CastleTieredPrimeDayDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.PaymentrewardEventVO.prototype, "skinnedSpecialOfferDialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return TieredPaymentrewardEventVO;
}(a.PaymentrewardEventVO);
exports.TieredPaymentrewardEventVO = s;
var r = require("./1881.js");
o.classImplementsInterfaces(s, "IEventOverviewable");