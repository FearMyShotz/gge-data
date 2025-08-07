Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./116.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferSpringBunnyDialog() {
    return e.call(this, CastlePaymentRewardSpecialOfferSpringBunnyDialog.NAME) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferSpringBunnyDialog, e);
  CastlePaymentRewardSpecialOfferSpringBunnyDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_springBunny_title";
    this.descriptionTextID = "dialog_primeday_springBunny_description";
    this.leftTeaserText = "dialog_primeday_springBunny_banner";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferSpringBunnyDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_SPRING_BUNNY;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferSpringBunnyDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferSpringBunnyDialog.NAME = "CastlePaymentRewardSpecialOfferSpringBunny";
  };
  return CastlePaymentRewardSpecialOfferSpringBunnyDialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferSpringBunnyDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();