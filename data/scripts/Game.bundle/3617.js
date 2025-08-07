Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./116.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferEveningDialog() {
    return e.call(this, "CastlePaymentRewardSpecialOfferEvening") || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferEveningDialog, e);
  CastlePaymentRewardSpecialOfferEveningDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_evening_title";
    this.descriptionTextID = "dialog_primeday_evening_description";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferEveningDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_EVENING;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferEveningDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferEveningDialog.NAME = "CastlePaymentRewardSpecialOfferEvening";
  };
  return CastlePaymentRewardSpecialOfferEveningDialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferEveningDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();