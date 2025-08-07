Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./667.js");
var s = require("./88.js");
var r = require("./114.js");
var l = function (e) {
  function CastlePrimeDayPOSMSDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CastlePrimeDayPOSMSDialog, e);
  CastlePrimeDayPOSMSDialog.prototype.setTextIDs = function () {
    this.titleTextID = "dialog_primeday_specialoffer_title";
    this.descriptionTextID = "dialog_primeday_smsOffer_description";
    this.dialogPrimedaySpecialofferEndTimerTextID = "dialog_primeday_specialoffer_endTimer";
  };
  Object.defineProperty(CastlePrimeDayPOSMSDialog.prototype, "offerType", {
    get: function () {
      return s.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH_SMS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastlePaymentRewardSpecialOfferDialog.prototype, "offerType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeDayPOSMSDialog.prototype, "currencyValue", {
    get: function () {
      return a.CastleHardCurrencyHelper.shownCurrencyValueForPO(this.dialogPropertiesPrivateOffer.offerVO);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastlePaymentRewardSpecialOfferDialog.prototype, "currencyValue").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePrimeDayPOSMSDialog.prototype.onPaymentUpdate = function (e) {};
  CastlePrimeDayPOSMSDialog.__initialize_static_members = function () {
    CastlePrimeDayPOSMSDialog.NAME = "CastlePrimeDayPOSMS";
  };
  return CastlePrimeDayPOSMSDialog;
}(r.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePrimeDayPOSMSDialog = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();