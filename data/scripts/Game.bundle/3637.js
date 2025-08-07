Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./227.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayParagonXPDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, "CastlePaymentRewardSpecialOfferParagonXP") || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayParagonXPDialog, e);
  Object.defineProperty(CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayParagonXPDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_PARAGON_XP;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayParagonXPDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayParagonXPDialog.NAME = "CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayParagonXP";
  };
  return CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayParagonXPDialog;
}(s.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog);
exports.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayParagonXPDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();