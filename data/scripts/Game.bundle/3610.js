Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./116.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferAnniversaryDialog() {
    return e.call(this, CastlePaymentRewardSpecialOfferAnniversaryDialog.NAME) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferAnniversaryDialog, e);
  CastlePaymentRewardSpecialOfferAnniversaryDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_anniversary_title";
    this.descriptionTextID = "dialog_primeday_anniversary_description";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferAnniversaryDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_ANNIVERSARY;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferAnniversaryDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferAnniversaryDialog.NAME = "CastlePaymentRewardSpecialOfferAnniversary";
  };
  return CastlePaymentRewardSpecialOfferAnniversaryDialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferAnniversaryDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();