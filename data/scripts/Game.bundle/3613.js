Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./116.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferBloodcrowDialog() {
    return e.call(this, CastlePaymentRewardSpecialOfferBloodcrowDialog.NAME) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferBloodcrowDialog, e);
  CastlePaymentRewardSpecialOfferBloodcrowDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_bloodcrow_title";
    this.descriptionTextID = "dialog_primeday_bloodcrow_description";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferBloodcrowDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_BLOOD_CROW;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferBloodcrowDialog.NAME = "CastlePaymentRewardSpecialOfferBloodcrow";
  return CastlePaymentRewardSpecialOfferBloodcrowDialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferBloodcrowDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");