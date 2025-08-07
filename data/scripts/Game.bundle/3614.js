Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./116.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferChristmasDialog() {
    return e.call(this, CastlePaymentRewardSpecialOfferChristmasDialog.NAME) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferChristmasDialog, e);
  CastlePaymentRewardSpecialOfferChristmasDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_christmas_title";
    this.descriptionTextID = "dialog_primeday_christmas_description";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferChristmasDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_CHRISTMAS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferChristmasDialog.NAME = "CastlePaymentRewardSpecialOfferChristmas";
  return CastlePaymentRewardSpecialOfferChristmasDialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferChristmasDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");