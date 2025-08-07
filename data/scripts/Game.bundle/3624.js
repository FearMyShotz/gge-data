Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./116.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferSuperDialog() {
    return e.call(this, CastlePaymentRewardSpecialOfferSuperDialog.NAME) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferSuperDialog, e);
  CastlePaymentRewardSpecialOfferSuperDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_superPrimeDay_title";
    this.descriptionTextID = "dialog_primeday_superPrimeDay_description";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferSuperDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_SUPER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferSuperDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferSuperDialog.NAME = "CastleSuperPrimeDay";
  };
  return CastlePaymentRewardSpecialOfferSuperDialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferSuperDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();