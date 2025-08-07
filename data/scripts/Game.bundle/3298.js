Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./6.js");
var l = require("./24.js");
var c = require("./12.js");
var u = require("./45.js");
var d = require("./158.js");
var p = createjs.Point;
var h = function (e) {
  function CollectableItemGiftPackageVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemGiftPackageVE, e);
  CollectableItemGiftPackageVE.prototype.init = function (t, i) {
    e.prototype.init.call(this, t, i);
    var n = this.itemGiftPackageVO.getRewardItem();
    if (n && n.itemType != c.CollectableEnum.GIFT_PACKAGE) {
      this._rewardVE = u.CollectableHelper.createVE(n, i);
      this.iconContainer.addChild(this.rewardVE.iconContainer);
    }
  };
  CollectableItemGiftPackageVE.prototype.destroy = function () {
    if (this.rewardVE) {
      this.rewardVE.destroy();
      this._rewardVE = null;
    }
    e.prototype.destroy.call(this);
  };
  CollectableItemGiftPackageVE.prototype.iconUpdate = function () {
    e.prototype.iconUpdate.call(this);
    if (this.rewardVE) {
      this.rewardVE.iconUpdate();
    }
  };
  CollectableItemGiftPackageVE.prototype.iconDestroy = function () {
    if (this.rewardVE) {
      this.rewardVE.iconDestroy();
    }
    e.prototype.iconDestroy.call(this);
  };
  CollectableItemGiftPackageVE.prototype.iconCreate = function () {
    var e = o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("GiftTraderPackageIcon");
    var t = new l.CastleGoodgameExternalClip("GiftTraderPackageIcon", e, null, 0, false);
    var i = new p(this.options.icon.dimension.x * 1.4, this.options.icon.dimension.y * 1.4);
    t.clipSizeComponent = new a.ClipSizeComponent(i.x, i.y);
    this.dispCreator.addClip(t);
  };
  CollectableItemGiftPackageVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemGiftPackageVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemGiftPackageVE.prototype.tooltipCreate = function () {
    var e = this.itemGiftPackageVO.playerGiftVO;
    var t = e.eventPackageVO.rewards.getItemByIndexSave(0);
    var i = r.int(t ? t.amount : 0);
    return {
      t: "equipmentPackage_tt_" + e.eventPackageVO.packageID,
      p: [i]
    };
  };
  Object.defineProperty(CollectableItemGiftPackageVE.prototype, "itemGiftPackageVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemGiftPackageVE.prototype, "rewardVE", {
    get: function () {
      return this._rewardVE;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemGiftPackageVE;
}(d.ACollectableItemVE);
exports.CollectableItemGiftPackageVE = h;
s.classImplementsInterfaces(h, "ICollectableRendererList");