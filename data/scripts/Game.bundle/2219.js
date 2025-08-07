Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./31.js");
var u = require("./19.js");
var d = require("./4.js");
var p = require("./24.js");
var h = require("./95.js");
var g = require("./47.js");
var C = require("./59.js");
var _ = require("./42.js");
var m = require("./431.js");
var f = createjs.Point;
var O = function (e) {
  function ModernPackageShopBuyElementBundleRewards() {
    var t = this;
    t._rewardItems = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(ModernPackageShopBuyElementBundleRewards, e);
  ModernPackageShopBuyElementBundleRewards.prototype.init = function (t) {
    e.prototype.init.call(this, t);
    this._scrollComponent = new h.SimpleScrollComponent(new g.SimpleScrollVO().initByParent(this.disp.mc_scroll).addMouseWheelElements([this.disp]).addVisualElements([this.disp.mc_scroll]), new C.DynamicSizeScrollStrategyVertical(true));
  };
  ModernPackageShopBuyElementBundleRewards.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._rewardItems = [];
  };
  ModernPackageShopBuyElementBundleRewards.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
  };
  ModernPackageShopBuyElementBundleRewards.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
    e.prototype.removeEventListener.call(this);
  };
  ModernPackageShopBuyElementBundleRewards.prototype.update = function () {
    e.prototype.update.call(this);
    this.updateRewards();
  };
  ModernPackageShopBuyElementBundleRewards.prototype.updateRewards = function () {
    this._rewardItems = [];
    var e = this.disp.mc_rewards.mc_items;
    a.MovieClipHelper.clearMovieClip(e);
    var t = this.getPackageVOs();
    var i = 0;
    var n = new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_DEFAULT, new f(40, 32));
    n.tooltip.showEquipmentCountdown = false;
    for (var o = 0; o < t.length; ++o) {
      var d = t[o];
      var h = new p.CastleGoodgameExternalClip(ModernPackageShopBuyElementBundleRewards.REWARD_ITEM_ASSET_NAME, s.BasicModel.basicLoaderData.getVersionedItemAssetUrl(b.ModernPackageShopBuyDialog.NAME), null, 0, false);
      var g = h.currentshownDisplayObject;
      e.addChild(g);
      y.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new c.CollectableRenderClips(g.mc_reward).addInfoBtn(g.btn_info), d.reward, n);
      E.CastleComponent.textFieldManager.registerTextField(g.txt_text, new r.LocalizedTextVO(d.nameTextID, d.nameParams)).verticalAlign = _.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      this._rewardItems.push(h);
      g.x = 0;
      g.y = i;
      i += l.int(g.height + ModernPackageShopBuyElementBundleRewards.REWARD_ITEM_DISTANCE_Y);
    }
    var C = this.disp.mc_rewards.mc_items.getBounds(null);
    this._scrollComponent.init(0, Math.max(C.height - ModernPackageShopBuyElementBundleRewards.REWARDS_MASK_HEIGHT, 0), 10, 10);
    this._scrollComponent.show();
    this._scrollComponent.scrollToPercent(0);
    this._scrollComponent.setVisibility(C.height > ModernPackageShopBuyElementBundleRewards.REWARDS_MASK_HEIGHT);
  };
  ModernPackageShopBuyElementBundleRewards.prototype.getPackageVOs = function () {
    var e = [];
    for (var t = 0; t < this.parentDialog.dialogProperties.eventPackageVO.bundlePackageIds.length; ++t) {
      e.push(d.CastleModel.eventPackageData.getEventPackageByID(this.parentDialog.dialogProperties.eventPackageVO.bundlePackageIds[t]));
    }
    return e;
  };
  ModernPackageShopBuyElementBundleRewards.prototype.getDispHeight = function () {
    return 225;
  };
  ModernPackageShopBuyElementBundleRewards.prototype.onScrollValueChanged = function () {
    this.disp.mc_rewards.mc_items.y = -this._scrollComponent.currentValue;
  };
  ModernPackageShopBuyElementBundleRewards.REWARD_ITEM_ASSET_NAME = "ModernPackageShopBuy_BundleItem";
  ModernPackageShopBuyElementBundleRewards.REWARD_ITEM_DISTANCE_Y = 7;
  ModernPackageShopBuyElementBundleRewards.REWARDS_MASK_HEIGHT = 210.95;
  return ModernPackageShopBuyElementBundleRewards;
}(m.AModernPackageShopBuyElement);
exports.ModernPackageShopBuyElementBundleRewards = O;
o.classImplementsInterfaces(O, "ICollectableRendererList");
var E = require("./14.js");
var y = require("./25.js");
var b = require("./206.js");