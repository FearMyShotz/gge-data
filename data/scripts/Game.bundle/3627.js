Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./114.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferWorldCupDialog() {
    return e.call(this, CastlePaymentRewardSpecialOfferWorldCupDialog.NAME) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferWorldCupDialog, e);
  CastlePaymentRewardSpecialOfferWorldCupDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_worldcup_title";
    this.descriptionTextID = "dialog_primeday_worldcup_description";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferWorldCupDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_WORLD_CUP;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferWorldCupDialog.NAME = "CastlePaymentRewardSpecialOfferWorldCup";
  return CastlePaymentRewardSpecialOfferWorldCupDialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferWorldCupDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");