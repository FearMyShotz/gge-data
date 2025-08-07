Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./116.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferSundayDialog() {
    return e.call(this, CastlePaymentRewardSpecialOfferSundayDialog.NAME) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferSundayDialog, e);
  CastlePaymentRewardSpecialOfferSundayDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_sunday_title";
    this.descriptionTextID = "dialog_primeday_sunday_description";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferSundayDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_SUNDAY;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferSundayDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferSundayDialog.NAME = "CastlePaymentRewardSpecialOfferSunday";
  };
  return CastlePaymentRewardSpecialOfferSundayDialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferSundayDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();