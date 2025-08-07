Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./114.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferDefenseDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePaymentRewardSpecialOfferDefenseDialog.NAME) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferDefenseDialog, e);
  CastlePaymentRewardSpecialOfferDefenseDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_defender_title";
    this.descriptionTextID = "dialog_primeday_defender_description";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferDefenseDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_DEFENSE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferDefenseDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferDefenseDialog.NAME = "CastlePaymentRewardSpecialOfferDefense";
  };
  return CastlePaymentRewardSpecialOfferDefenseDialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferDefenseDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();