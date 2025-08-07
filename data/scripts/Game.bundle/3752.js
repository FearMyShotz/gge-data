Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./31.js");
var s = require("./19.js");
var r = require("./173.js");
var l = function (e) {
  function CastleSamuraiInvasionDaimyoShopScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleSamuraiInvasionDaimyoShopScrollItem, e);
  Object.defineProperty(CastleSamuraiInvasionDaimyoShopScrollItem.prototype, "dialogKey", {
    get: function () {
      return d.ModernPackageShopBuyDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AMerchantScrollItem.prototype, "dialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleSamuraiInvasionDaimyoShopScrollItem.prototype.handleReward = function () {
    this.rewardRenderer = new u.CollectableRenderer(new a.CollectableRenderClips(this._disp.mc_reward), new s.CollectableRenderOptions(s.CollectableRenderOptions.ICON | s.CollectableRenderOptions.TEXTFIELD | s.CollectableRenderOptions.ICON_TRANSFORM, this.rewardIconSize));
    if (this.packageScrollItemVO.eventPackageVO.reward) {
      var e = this.rewardRenderer.getRenderer(s.CollectableRenderOptions.ICON_TRANSFORM);
      if (this.packageScrollItemVO.eventPackageVO.reward.itemType == c.CollectableEnum.CONSTRUCTION_ITEM) {
        e.transform.offset.y = -3;
        e.transform.scale = 0.95;
      } else {
        e.transform.offset.y = 0;
      }
    }
    this.rewardRenderer.options.textfield.forceRender = true;
    this.rewardRenderer.updateWithNewVO(this.packageScrollItemVO.eventPackageVO.reward);
  };
  return CastleSamuraiInvasionDaimyoShopScrollItem;
}(r.AMerchantScrollItem);
exports.CastleSamuraiInvasionDaimyoShopScrollItem = l;
var c = require("./12.js");
var u = require("./186.js");
var d = require("./206.js");
o.classImplementsInterfaces(l, "MovieClip");