Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./116.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferSummerDialog() {
    return e.call(this, CastlePaymentRewardSpecialOfferSummerDialog.NAME) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferSummerDialog, e);
  CastlePaymentRewardSpecialOfferSummerDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_summer_title";
    this.descriptionTextID = "dialog_primeday_summer_description";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferSummerDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_SUMMER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferSummerDialog.NAME = "CastlePaymentRewardSpecialOfferSummer";
  return CastlePaymentRewardSpecialOfferSummerDialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferSummerDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");