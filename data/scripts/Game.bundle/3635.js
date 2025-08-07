Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./227.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayEveningDialog() {
    return e.call(this, "CastlePaymentRewardSpecialOfferEvening") || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayEveningDialog, e);
  Object.defineProperty(CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayEveningDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_EVENING;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayEveningDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayEveningDialog.NAME = "CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayEvening";
  };
  return CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayEveningDialog;
}(s.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog);
exports.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayEveningDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();