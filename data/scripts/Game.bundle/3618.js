Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./88.js");
var s = require("./114.js");
var r = function (e) {
  function CastlePaymentRewardSpecialOfferMidasDialog() {
    return e.call(this, CastlePaymentRewardSpecialOfferMidasDialog.NAME) || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferMidasDialog, e);
  Object.defineProperty(CastlePaymentRewardSpecialOfferMidasDialog.prototype, "skinType", {
    get: function () {
      return a.CastlePaymentRewardSpecialOfferConstants.SKIN_MIDAS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferMidasDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferMidasDialog.NAME = "CastlePaymentRewardSpecialOfferMidas";
  };
  return CastlePaymentRewardSpecialOfferMidasDialog;
}(s.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferMidasDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();