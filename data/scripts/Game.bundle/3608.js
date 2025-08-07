Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./114.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferAlienDialog() {
    return e.call(this, CastlePaymentRewardSpecialOfferAlienDialog.NAME) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferAlienDialog, e);
  CastlePaymentRewardSpecialOfferAlienDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_alienInvasion_title";
    this.descriptionTextID = "dialog_primeday_alienInvasion_description";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferAlienDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_ALIEN;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferAlienDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferAlienDialog.NAME = "CastlePaymentRewardSpecialOfferAlien";
  };
  return CastlePaymentRewardSpecialOfferAlienDialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferAlienDialog = r;
r.__initialize_static_members();
o.classImplementsInterfaces(r, "ICollectableRendererList");