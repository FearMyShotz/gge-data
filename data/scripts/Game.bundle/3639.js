Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./227.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferRealCurrencyPrimeDaySuperDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, "CastleSuperPrimeDay") || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferRealCurrencyPrimeDaySuperDialog, e);
  Object.defineProperty(CastlePaymentRewardSpecialOfferRealCurrencyPrimeDaySuperDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_SUPER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferRealCurrencyPrimeDaySuperDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferRealCurrencyPrimeDaySuperDialog.NAME = "CastlePaymentRewardSpecialOfferRealCurrencyPrimeDaySuper";
  };
  return CastlePaymentRewardSpecialOfferRealCurrencyPrimeDaySuperDialog;
}(s.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog);
exports.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDaySuperDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();