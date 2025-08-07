Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./114.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferEasterDialog() {
    return e.call(this, CastlePaymentRewardSpecialOfferEasterDialog.NAME) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferEasterDialog, e);
  CastlePaymentRewardSpecialOfferEasterDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_easter_title";
    this.descriptionTextID = "dialog_primeday_easter_description";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferEasterDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_EASTER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferEasterDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferEasterDialog.NAME = "CastlePaymentRewardSpecialOfferEaster";
  };
  return CastlePaymentRewardSpecialOfferEasterDialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferEasterDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();