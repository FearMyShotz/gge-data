Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./123.js");
var r = require("./4.js");
var l = require("./8.js");
var c = require("./168.js");
var u = function (e) {
  function CastlePlayerGiftMerchantBuyDialog(t = CastlePlayerGiftMerchantBuyDialog.NAME) {
    CONSTRUCTOR_HACK;
    return e.call(this, t) || this;
  }
  n.__extends(CastlePlayerGiftMerchantBuyDialog, e);
  CastlePlayerGiftMerchantBuyDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = this.packageVO.packageType == s.ClientConstPackages.PACKAGE_TYPE_ITEM || this.packageVO.packageType == s.ClientConstPackages.PACKAGE_TYPE_GEM || this.packageVO.packageType == s.ClientConstPackages.PACKAGE_TYPE_HERO;
    this.dialogDisp.mc_ring.visible = !i;
  };
  Object.defineProperty(CastlePlayerGiftMerchantBuyDialog.prototype, "physicalPackageLimit", {
    get: function () {
      return Math.min(this.packageVO.maxBuyPerClick, a.PackageConst.MAX_PLAYER_GIFT_STORAGE - r.CastleModel.playerGiftData.giftPackagesInInventoryAmount, this.packageVO.remainingStock);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleGenericSliderBuyDialog.prototype, "physicalPackageLimit").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerGiftMerchantBuyDialog.prototype.handleBuyButton = function () {
    l.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
  };
  CastlePlayerGiftMerchantBuyDialog.__initialize_static_members = function () {
    CastlePlayerGiftMerchantBuyDialog.NAME = "CastlePlayerGiftMerchantBuyDialogExternal";
  };
  return CastlePlayerGiftMerchantBuyDialog;
}(c.CastleGenericSliderBuyDialog);
exports.CastlePlayerGiftMerchantBuyDialog = u;
o.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();