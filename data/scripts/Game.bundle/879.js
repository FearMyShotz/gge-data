Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2098.js");
var s = require("./370.js");
var r = require("./4.js");
var l = function (e) {
  function CastleResourceMerchantEventBuyDialog() {
    var t = this;
    CONSTRUCTOR_HACK;
    t = e.call(this, CastleResourceMerchantEventBuyDialog.ASSET_NAME) || this;
    r.CastleModel.eventPackageData.addEventListener(s.CastlePackageEvent.PACKAGEPRICE_GOT, t.bindFunction(t.updateFillAllStoragesPackagePrice));
    return t;
  }
  n.__extends(CastleResourceMerchantEventBuyDialog, e);
  CastleResourceMerchantEventBuyDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    var i = this.dialogProperties.eventPackageVO;
    if (i.isBannerPackage && i.fillAllStorages) {
      r.CastleModel.smartfoxClient.sendCommandVO(new a.PackagePriceVO(this.dialogProperties.eventPackageVO.packageID));
    }
    this.dialogDisp.mc_titleBG.gotoAndStop(1);
  };
  CastleResourceMerchantEventBuyDialog.prototype.updateFillAllStoragesPackagePrice = function (e) {
    this.handleCost();
  };
  CastleResourceMerchantEventBuyDialog.__initialize_static_members = function () {
    CastleResourceMerchantEventBuyDialog.NAME = "CastleResourceMerchantEventBuy";
    CastleResourceMerchantEventBuyDialog.ASSET_NAME = "CastleResourceMerchantEventBuyExternal";
  };
  return CastleResourceMerchantEventBuyDialog;
}(require("./168.js").CastleGenericSliderBuyDialog);
exports.CastleResourceMerchantEventBuyDialog = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();