Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./41.js");
var s = require("./73.js");
var r = require("./19.js");
var l = function (e) {
  function ACollectableItemEquipmentVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ACollectableItemEquipmentVE, e);
  ACollectableItemEquipmentVE.prototype.init = function (t, i) {
    e.prototype.init.call(this, t, i);
    this.triggerOnAllIconDispLoadedManually = true;
    this.scaleManually = true;
  };
  ACollectableItemEquipmentVE.prototype.iconCreate = function () {
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
    s.EquipmentIconHelper.addEquipmentIcon(this.equipmentItemVO.equipmentVO, this.dispCreator.dispContainer, i, n, this.bindFunction(this.onAllDispClipsLoaded), true, false, false, true, this.options.icon.useFavIcon);
  };
  ACollectableItemEquipmentVE.prototype.tooltipCreate = function () {
    return s.EquipmentIconHelper.getToolTipByEquipmentVO(this.equipmentItemVO.equipmentVO);
  };
  ACollectableItemEquipmentVE.prototype.tooltipShowAdvanced = function () {
    if (this.equipmentItemVO.equipmentVO) {
      s.EquipmentIconHelper.showToolTip(this.renderer.clips.getTooltipTargetMc(), this.equipmentItemVO.equipmentVO, null, !this.equipmentItemVO.equipmentVO.isPermanent && this.renderer.options.tooltip.showEquipmentCountdown);
    }
  };
  ACollectableItemEquipmentVE.prototype.onAllDispClipsLoaded = function (t = null) {
    var i = this.equipmentItemVO.equipmentVO;
    if (i.visualRareID > 0) {
      t.gotoAndStop(i.visualRareID);
    }
    e.prototype.onAllDispClipsLoaded.call(this, t);
    a.CastleMovieClipHelper.createHitArea(this.dispCreator.dispContainer);
  };
  Object.defineProperty(ACollectableItemEquipmentVE.prototype, "equipmentItemVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return ACollectableItemEquipmentVE;
}(require("./158.js").ACollectableItemVE);
exports.ACollectableItemEquipmentVE = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");