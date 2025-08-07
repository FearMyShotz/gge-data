Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./116.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferBlackFridayDialog() {
    return e.call(this, CastlePaymentRewardSpecialOfferBlackFridayDialog.NAME) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferBlackFridayDialog, e);
  CastlePaymentRewardSpecialOfferBlackFridayDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_blackFriday_title";
    this.descriptionTextID = "dialog_primeday_blackFriday_description";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferBlackFridayDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_BLACK_FRIDAY;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferBlackFridayDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferBlackFridayDialog.NAME = "CastlePaymentRewardSpecialOfferBlackFriday";
  };
  return CastlePaymentRewardSpecialOfferBlackFridayDialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferBlackFridayDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();