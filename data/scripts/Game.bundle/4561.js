Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./52.js");
var r = require("./8.js");
var l = function (e) {
  function CastleWishingWellCoinVendorEventBuyDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleWishingWellCoinVendorEventBuyDialog.NAME) || this;
  }
  n.__extends(CastleWishingWellCoinVendorEventBuyDialog, e);
  CastleWishingWellCoinVendorEventBuyDialog.prototype.onChangeSliderAmount = function (t = null) {
    e.prototype.onChangeSliderAmount.call(this, t);
    this.updateBuyButton();
  };
  CastleWishingWellCoinVendorEventBuyDialog.prototype.onChangePackageAmount = function (t = null) {
    e.prototype.onChangePackageAmount.call(this, t);
    this.updateBuyButton();
  };
  CastleWishingWellCoinVendorEventBuyDialog.prototype.resetSlider = function (t = null) {
    e.prototype.resetSlider.call(this, t);
    this.updateBuyButton();
  };
  CastleWishingWellCoinVendorEventBuyDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateBuyButton();
  };
  CastleWishingWellCoinVendorEventBuyDialog.prototype.updateBuyButton = function () {
    r.ButtonHelper.enableButton(this.dialogDisp.btn_ok, a.CastleModel.currencyData.getAmountById(s.ClientConstCurrency.ID_WISHING_WELL_COIN) >= this.totalPrice.amount);
    this.dialogDisp.btn_ok.toolTipText = r.ButtonHelper.isButtonEnabled(this.dialogDisp.btn_ok) ? "" : "apprenticePennies_notEnough_tooltip";
  };
  CastleWishingWellCoinVendorEventBuyDialog.__initialize_static_members = function () {
    CastleWishingWellCoinVendorEventBuyDialog.NAME = "CastleWishingWellCoinVendorEventBuy";
  };
  return CastleWishingWellCoinVendorEventBuyDialog;
}(require("./168.js").CastleGenericSliderBuyDialog);
exports.CastleWishingWellCoinVendorEventBuyDialog = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();