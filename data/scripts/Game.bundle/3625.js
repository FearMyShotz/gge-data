Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./116.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferUnderworldDialog() {
    return e.call(this, CastlePaymentRewardSpecialOfferUnderworldDialog.NAME) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferUnderworldDialog, e);
  CastlePaymentRewardSpecialOfferUnderworldDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_underworld_title";
    this.descriptionTextID = "dialog_primeday_underworld_description";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferUnderworldDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_UNDERWORLD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferUnderworldDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferUnderworldDialog.NAME = "CastlePaymentRewardSpecialOfferUnderworld";
  };
  return CastlePaymentRewardSpecialOfferUnderworldDialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferUnderworldDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();