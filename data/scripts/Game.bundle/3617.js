Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./114.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferFurysBladeDialog() {
    return e.call(this, CastlePaymentRewardSpecialOfferFurysBladeDialog.NAME) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferFurysBladeDialog, e);
  CastlePaymentRewardSpecialOfferFurysBladeDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_furysblade_title";
    this.descriptionTextID = "dialog_primeday_furysblade_description";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferFurysBladeDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_FURYS_BLADE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferFurysBladeDialog.NAME = "CastlePaymentRewardSpecialOfferFurysBlade";
  return CastlePaymentRewardSpecialOfferFurysBladeDialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferFurysBladeDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");