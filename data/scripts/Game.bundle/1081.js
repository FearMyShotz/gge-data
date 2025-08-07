Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./666.js");
var s = require("./4.js");
var r = require("./130.js");
var l = require("./116.js");
var c = function (e) {
  function CastlePrimeDayPODialog() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CastlePrimeDayPODialog, e);
  CastlePrimeDayPODialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.setTextIDs();
    s.CastleModel.privateOfferData.addEventListener(r.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved_0));
  };
  CastlePrimeDayPODialog.prototype.onOfferRemoved_0 = function (e) {
    if (this.isPrivateOffer && e.offerVO == this.dialogPropertiesPrivateOffer.offerVO) {
      this.hide();
    }
  };
  Object.defineProperty(CastlePrimeDayPODialog.prototype, "currencyValue", {
    get: function () {
      return a.CastleHardCurrencyHelper.shownCurrencyValueForPO(this.dialogPropertiesPrivateOffer.offerVO);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastlePaymentRewardSpecialOfferDialog.prototype, "currencyValue").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePrimeDayPODialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_specialoffer_title";
    if (this.isPrivateOffer && this.dialogPropertiesPrivateOffer.offerVO.isInvitationOffer) {
      this.descriptionTextID = "dialog_primeday_specialoffer_invited";
    } else {
      this.descriptionTextID = "dialog_primeday_specialoffer_hideValue_description";
    }
  };
  CastlePrimeDayPODialog.prototype.removeListeners = function () {
    e.prototype.removeListeners.call(this);
    s.CastleModel.privateOfferData.removeEventListener(r.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved_0));
  };
  CastlePrimeDayPODialog.__initialize_static_members = function () {
    CastlePrimeDayPODialog.NAME = "CastlePrimeDayPO";
  };
  return CastlePrimeDayPODialog;
}(l.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePrimeDayPODialog = c;
o.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();