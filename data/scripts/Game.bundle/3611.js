Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./116.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferAttackDialog() {
    return e.call(this, CastlePaymentRewardSpecialOfferAttackDialog.NAME) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferAttackDialog, e);
  CastlePaymentRewardSpecialOfferAttackDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_attacker_title";
    this.descriptionTextID = "dialog_primeday_attacker_description";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferAttackDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_ATTACK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferAttackDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferAttackDialog.NAME = "CastlePaymentRewardSpecialOfferAttack";
  };
  return CastlePaymentRewardSpecialOfferAttackDialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferAttackDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();