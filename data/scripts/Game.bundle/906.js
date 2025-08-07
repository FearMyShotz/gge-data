Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./31.js");
var c = require("./19.js");
var u = require("./24.js");
var d = require("./431.js");
var p = createjs.Point;
var h = function (e) {
  function ModernPackageShopBuyElementCommonInfo() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ModernPackageShopBuyElementCommonInfo, e);
  ModernPackageShopBuyElementCommonInfo.prototype.update = function () {
    e.prototype.update.call(this);
    this.updateIcon();
    this.updateText();
  };
  ModernPackageShopBuyElementCommonInfo.prototype.updateIcon = function () {
    var e;
    var t = new l.CollectableRenderClips(this.disp.mc_reward).addInfoBtn(this.disp.btn_info);
    var i = C.CollectableRenderHelper.createCollectableLevelIndicatorVO(this.eventPackageVO.reward, new p(0.8, 0.8), new p(-52, -51));
    if (i) {
      t.addDynamicLevelIndicatorVO(i);
      e = this.getRewardIconOptions(true);
    } else {
      e = this.getRewardIconOptions();
    }
    C.CollectableRenderHelper.displaySingleItemComplete(this, t, this.eventPackageVO.reward, e);
    if (this.parentDialog.dialogProperties.eventPackageVO.isGiftPackage) {
      var n = a.BasicModel.basicLoaderData.getVersionedItemAssetUrl("GiftTraderPackageIcon");
      var s = new u.CastleGoodgameExternalClip("GiftTraderPackageIcon", n, null, 0, false);
      s.clipSizeComponent = new o.ClipSizeComponent(ModernPackageShopBuyElementCommonInfo.REWARD_ICON_SIZE_GIFT_BG.x, ModernPackageShopBuyElementCommonInfo.REWARD_ICON_SIZE_GIFT_BG.y);
      s.x = 1;
      s.y = -12;
      this.disp.mc_reward.mc_icon.addChildAt(s, 0);
    }
  };
  ModernPackageShopBuyElementCommonInfo.prototype.updateText = function () {
    var e;
    var t = this.parentDialog.dialogProperties.eventPackageVO;
    g.CastleComponent.textFieldManager.registerTextField(this.disp.txt_desc, new r.LocalizedTextVO(t.descriptionTextID, t.descriptionParams)).autoFitToBounds = true;
    if (t.isStockLimited) {
      if (t.remainingStock > 1) {
        (e = new r.LocalizedTextVO("shop_limitedPackage_plural")).textReplacements = [t.remainingStock];
      } else {
        e = t.remainingStock <= 0 ? new r.LocalizedTextVO("dialog_shop_soldOut") : new r.LocalizedTextVO("shop_limitedPackage_singular");
      }
      g.CastleComponent.textFieldManager.registerTextField(this.disp.txt_limit, e).autoFitToBounds = true;
    } else {
      g.CastleComponent.textFieldManager.registerTextField(this.disp.txt_limit, new r.LocalizedTextVO("")).autoFitToBounds = true;
    }
  };
  Object.defineProperty(ModernPackageShopBuyElementCommonInfo.prototype, "eventPackageVO", {
    get: function () {
      return this.parentDialog.dialogProperties.eventPackageVO;
    },
    enumerable: true,
    configurable: true
  });
  ModernPackageShopBuyElementCommonInfo.prototype.getRewardIconOptions = function (e) {
    var t;
    if (e === undefined) {
      e = false;
    }
    var i = this.parentDialog.dialogProperties.eventPackageVO.isGiftPackage ? ModernPackageShopBuyElementCommonInfo.REWARD_ICON_SIZE_GIFT : ModernPackageShopBuyElementCommonInfo.REWARD_ICON_SIZE;
    if (e) {
      (t = new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_BASIC | c.CollectableRenderOptions.DYNAMIC_LEVEL_INDICATOR, i)).icon.selfLoadlevelIndicator = false;
    } else {
      (t = new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_BASIC, i)).tooltip.showEquipmentCountdown = false;
    }
    return t;
  };
  ModernPackageShopBuyElementCommonInfo.__initialize_static_members = function () {
    ModernPackageShopBuyElementCommonInfo.REWARD_ICON_SIZE = new p(136, 132);
    ModernPackageShopBuyElementCommonInfo.REWARD_ICON_SIZE_GIFT = new p(95, 95);
    ModernPackageShopBuyElementCommonInfo.REWARD_ICON_SIZE_GIFT_BG = new p(142, 138);
  };
  return ModernPackageShopBuyElementCommonInfo;
}(d.AModernPackageShopBuyElement);
exports.ModernPackageShopBuyElementCommonInfo = h;
var g = require("./14.js");
var C = require("./25.js");
s.classImplementsInterfaces(h, "ICollectableRendererList");
h.__initialize_static_members();