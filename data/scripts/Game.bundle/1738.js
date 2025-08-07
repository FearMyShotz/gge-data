Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./116.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferWinterDialog() {
    return e.call(this, CastlePaymentRewardSpecialOfferWinterDialog.NAME) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferWinterDialog, e);
  CastlePaymentRewardSpecialOfferWinterDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_winter_title";
    this.descriptionTextID = "dialog_primeday_winter_description";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferWinterDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_WINTER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferWinterDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferWinterDialog.NAME = "CastlePaymentRewardSpecialOfferWinter";
  };
  return CastlePaymentRewardSpecialOfferWinterDialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferWinterDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();