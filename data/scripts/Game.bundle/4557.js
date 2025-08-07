Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./32.js");
var c = require("./4.js");
var u = require("./52.js");
var d = require("./42.js");
var p = require("./256.js");
var h = function (e) {
  function CastleWishingWellCoinVendorEventDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleWishingWellCoinVendorEventDialog.NAME) || this;
  }
  n.__extends(CastleWishingWellCoinVendorEventDialog, e);
  CastleWishingWellCoinVendorEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new s.LocalizedTextVO("dialog_wishCoinTrader_desc")).verticalAlign = d.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.dialogDisp.mc_token.mouseChildren = false;
    this.dialogDisp.mc_token.toolTipText = C.CollectableHelper.createVO(g.CollectableEnum.GENERIC_CURRENCY, 0, u.ClientConstCurrency.ID_WISHING_WELL_COIN).getTooltipTextId();
    this.updateTokens();
    this.controller.addEventListener(l.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.updateTokens));
  };
  CastleWishingWellCoinVendorEventDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.controller.removeEventListener(l.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.updateTokens));
  };
  CastleWishingWellCoinVendorEventDialog.prototype.updateTokens = function (e = null) {
    this.buyPackagesComponent.update();
    var t = r.int(c.CastleModel.currencyData.getAmountById(u.ClientConstCurrency.ID_WISHING_WELL_COIN));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_token.txt_value, new a.LocalizedNumberVO(t));
  };
  Object.defineProperty(CastleWishingWellCoinVendorEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return _.CastleWishingWellCoinVendorScrollItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleGenericMerchantDialog.prototype, "merchantScrollItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleWishingWellCoinVendorEventDialog.prototype.sortPackagesByHighlightOrder = function (e) {};
  CastleWishingWellCoinVendorEventDialog.__initialize_static_members = function () {
    CastleWishingWellCoinVendorEventDialog.NAME = "CastleWishingWellCoinVendorEvent";
  };
  return CastleWishingWellCoinVendorEventDialog;
}(p.CastleGenericMerchantDialog);
exports.CastleWishingWellCoinVendorEventDialog = h;
var g = require("./12.js");
var C = require("./45.js");
var _ = require("./4558.js");
o.classImplementsInterfaces(h, "ICollectableRendererList");
h.__initialize_static_members();