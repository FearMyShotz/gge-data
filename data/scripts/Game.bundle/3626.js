Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./114.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferWheelOfFortuneDialog() {
    return e.call(this, CastlePaymentRewardSpecialOfferWheelOfFortuneDialog.NAME) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferWheelOfFortuneDialog, e);
  CastlePaymentRewardSpecialOfferWheelOfFortuneDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_luckyWheel_title";
    this.descriptionTextID = "dialog_primeday_luckyWheel_description";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferWheelOfFortuneDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_WHEEL_OF_FORTUNE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferWheelOfFortuneDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferWheelOfFortuneDialog.NAME = "CastlePaymentRewardSpecialOfferWheelOfFortune";
  };
  return CastlePaymentRewardSpecialOfferWheelOfFortuneDialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferWheelOfFortuneDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();