Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./116.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferParagonXPDialog() {
    return e.call(this, CastlePaymentRewardSpecialOfferParagonXPDialog.NAME) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferParagonXPDialog, e);
  CastlePaymentRewardSpecialOfferParagonXPDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_paragon_title";
    this.descriptionTextID = "dialog_primeday_paragon_description";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferParagonXPDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_PARAGON_XP;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferParagonXPDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferParagonXPDialog.NAME = "CastlePaymentRewardSpecialOfferParagonXP";
  };
  return CastlePaymentRewardSpecialOfferParagonXPDialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferParagonXPDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();