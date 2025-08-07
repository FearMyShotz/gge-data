Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./24.js");
var l = function (e) {
  function CollectableItemEventPackageVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemEventPackageVE, e);
  CollectableItemEventPackageVE.prototype.iconCreate = function () {
    var e = "Package" + this.itemEventPackageVO.eventPackageVO.packageID;
    if (!o.BasicModel.basicLoaderData.isItemAssetVersioned(e)) {
      e = CollectableItemEventPackageVE.ASSET_NAME_DEFAULT;
    }
    if (this.itemEventPackageVO) {
      for (var t = 0; t < this.itemEventPackageVO.eventPackageVO.rewards.length; t++) {
        if (this.itemEventPackageVO.eventPackageVO.rewards.getItemByIndex(t)) {
          var i = this.itemEventPackageVO.eventPackageVO.rewards.getItemByIndex(t).equipmentVO;
          if (i && !i.isPermanent) {
            e = CollectableItemEventPackageVE.ASSET_NAME_TEMPORARY;
          }
        }
      }
    }
    var n = o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e);
    var s = new r.CastleGoodgameExternalClip(e, n, null, 0, false);
    s.clipSizeComponent = new a.ClipSizeComponent(this.options.icon.dimension.x, this.options.icon.dimension.y);
    this.dispCreator.addClip(s);
  };
  CollectableItemEventPackageVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemEventPackageVE.prototype.tooltipCreate = function () {
    return {
      t: this.itemEventPackageVO.getNameTextId(),
      p: this.itemEventPackageVO.getNameTextParams()
    };
  };
  Object.defineProperty(CollectableItemEventPackageVE.prototype, "itemEventPackageVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemEventPackageVE.ASSET_NAME_DEFAULT = "EventPackageBundle_Default";
  CollectableItemEventPackageVE.ASSET_NAME_TEMPORARY = "EventPackageBundle_Temporary";
  return CollectableItemEventPackageVE;
}(require("./158.js").ACollectableItemVE);
exports.CollectableItemEventPackageVE = l;
s.classImplementsInterfaces(l, "ICollectableRendererList");