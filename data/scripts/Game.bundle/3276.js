Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./24.js");
var r = function (e) {
  function CollectableItemResourcePointVE() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CollectableItemResourcePointVE, e);
  CollectableItemResourcePointVE.prototype.iconCreate = function () {
    this.dispCreator.addClip(new s.CastleGoodgameExternalClip(CollectableItemResourcePointVE.RESOURCE_POINTS_ICON_ASSET_NAME, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CollectableItemResourcePointVE.RESOURCE_POINTS_ICON_ASSET_NAME), null, 0, false));
  };
  CollectableItemResourcePointVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemResourcePointVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemResourcePointVE.prototype.tooltipCreate = function () {
    return this.tooltipCreateByAmount(this.vo.getTooltipTextId());
  };
  CollectableItemResourcePointVE.__initialize_static_members = function () {
    CollectableItemResourcePointVE.RESOURCE_POINTS_ICON_ASSET_NAME = "ResourcePointsIcon";
  };
  return CollectableItemResourcePointVE;
}(require("./195.js").ACollectableItemSimpleIconVE);
exports.CollectableItemResourcePointVE = r;
a.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();