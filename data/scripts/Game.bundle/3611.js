Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./114.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferBerimondDialog() {
    return e.call(this, CastlePaymentRewardSpecialOfferBerimondDialog.NAME) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferBerimondDialog, e);
  CastlePaymentRewardSpecialOfferBerimondDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_berimond_title";
    this.descriptionTextID = "dialog_primeday_berimond_description";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferBerimondDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_BERIMOND;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferBerimondDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferBerimondDialog.NAME = "CastlePaymentRewardSpecialOfferBerimond";
  };
  return CastlePaymentRewardSpecialOfferBerimondDialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferBerimondDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();