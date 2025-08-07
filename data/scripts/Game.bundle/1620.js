Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./248.js");
var s = require("./73.js");
var r = require("./19.js");
var l = require("./158.js");
var c = createjs.Point;
var u = function (e) {
  function ACollectableItemGemVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ACollectableItemGemVE, e);
  ACollectableItemGemVE.prototype.init = function (t, i) {
    e.prototype.init.call(this, t, i);
    this.triggerOnAllIconDispLoadedManually = true;
    this.scaleManually = true;
  };
  ACollectableItemGemVE.prototype.iconCreate = function () {
    var e = this.renderer.getRenderer(r.CollectableRenderOptions.ICON_TRANSFORM);
    var t = 1;
    if (e) {
      t = e.transform.scale;
      e.transform.scale = 1;
    }
    var i = this.options.icon.dimension.x * t;
    i -= Math.round(6 / 55 * (i - i * (6 / 55)));
    var n = this.options.icon.dimension.y * t;
    n -= Math.round(6 / 55 * (n - n * (6 / 55)));
    var o = new c(i, n);
    this.dispCreator.addDisp(a.CastleGemRenderer.renderAsset(this.itemGemVO.gemVO, this.bindFunction(this.onAllDispClipsLoaded), o, this.renderer.options.icon.useFavIcon));
    this.updateIconDimension();
  };
  ACollectableItemGemVE.prototype.tooltipShowAdvanced = function () {
    if (this.itemGemVO.gemVO) {
      s.EquipmentIconHelper.showToolTip(this.renderer.clips.getTooltipTargetMc(), this.itemGemVO.gemVO, null, false);
    }
  };
  Object.defineProperty(ACollectableItemGemVE.prototype, "itemGemVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return ACollectableItemGemVE;
}(l.ACollectableItemVE);
exports.ACollectableItemGemVE = u;
o.classImplementsInterfaces(u, "ICollectableRendererList");