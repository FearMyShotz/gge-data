Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./114.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferUSADialog() {
    return e.call(this, CastlePaymentRewardSpecialOfferUSADialog.NAME) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferUSADialog, e);
  CastlePaymentRewardSpecialOfferUSADialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_independenceDay_title";
    this.descriptionTextID = "dialog_primeday_independenceDay_description";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferUSADialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_USA;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferUSADialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferUSADialog.NAME = "CastlePaymentRewardSpecialOfferUSA";
  };
  return CastlePaymentRewardSpecialOfferUSADialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferUSADialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();