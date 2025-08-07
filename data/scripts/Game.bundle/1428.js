Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./28.js");
var s = function (e) {
  function CastleVIPBuyDialog() {
    return e.call(this, CastleVIPBuyDialog.ASSET_NAME) || this;
  }
  n.__extends(CastleVIPBuyDialog, e);
  CastleVIPBuyDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    var i = this.dialogProperties.eventPackageVO;
    if (i.reward.itemType == r.CollectableEnum.VIP_POINTS) {
      if (i.reward.amount == 1) {
        this.setDescriptionText("dialog_buyVipPoints_chooseAmount_singular_v2");
      } else {
        this.setDescriptionText("dialog_buyVipPoints_chooseAmount_plural_v2", [i.reward.amount]);
      }
    } else {
      var n = this.selectedPackagesAmount * i.reward.duration / a.ClientConstTime.SECONDS_PER_DAY;
      if (n > 1) {
        if (this.selectedPackagesAmount > 1) {
          this.setDescriptionText("dialog_buyVipTime_chooseAmount_plural");
        } else {
          this.setDescriptionText("dialog_buyVipTime_chooseAmount_singular2");
        }
        this.setDescriptionTextParams([this.selectedPackagesAmount, n]);
      } else {
        this.setDescriptionText("dialog_buyVipTime_chooseAmount_singular1");
      }
    }
  };
  CastleVIPBuyDialog.prototype.getBuyType = function () {
    return l.PackageConst.BUY_TYPE_VIP;
  };
  CastleVIPBuyDialog.NAME = "CastleVIPBuy";
  CastleVIPBuyDialog.ASSET_NAME = "CastleResourceMerchantEventBuyExternal";
  return CastleVIPBuyDialog;
}(require("./168.js").CastleGenericSliderBuyDialog);
exports.CastleVIPBuyDialog = s;
var r = require("./12.js");
var l = require("./5.js");
o.classImplementsInterfaces(s, "ICollectableRendererList");