Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./146.js");
var s = require("./88.js");
var r = require("./114.js");
var l = require("./107.js");
var c = function (e) {
  function CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog(t = r.CastlePaymentRewardSpecialOfferDialog.CLASS_NAME) {
    CONSTRUCTOR_HACK;
    return e.call(this, t) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog, e);
  Object.defineProperty(CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog.prototype, "paymentSourceId", {
    get: function () {
      return a.CastleOpenShopExecutor.SOURCE_PAYMENT_REWARD_CURRENCY_SPECIAL_OFFER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastlePaymentRewardSpecialOfferDialog.prototype, "paymentSourceId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog.prototype, "paymentCXFSourceId", {
    get: function () {
      return l.CXFSourceTrackingConstants.SOURCE_PAYMENT_REWARD_CURRENCY_SPECIAL_OFFER;
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_realCurrency_title";
    this.addGoldTextID = "dialog_primeday_realCurrency_buy_button";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog.prototype, "offerType", {
    get: function () {
      return s.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_REAL_CURRENCY;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastlePaymentRewardSpecialOfferDialog.prototype, "offerType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog.NAME = "CastlePaymentRewardSpecialOfferRealCurrencyPrimeDay";
  };
  return CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog;
}(r.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog = c;
o.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();