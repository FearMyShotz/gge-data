Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./116.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferHalloweenDialog() {
    return e.call(this, CastlePaymentRewardSpecialOfferHalloweenDialog.NAME) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferHalloweenDialog, e);
  CastlePaymentRewardSpecialOfferHalloweenDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_halloween_title";
    this.descriptionTextID = "dialog_primeday_halloween_description";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferHalloweenDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_HALLOWEEN;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferHalloweenDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferHalloweenDialog.NAME = "CastlePaymentRewardSpecialOfferHalloween";
  };
  return CastlePaymentRewardSpecialOfferHalloweenDialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferHalloweenDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();