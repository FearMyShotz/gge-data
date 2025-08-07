Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3290.js");
var s = require("./1054.js");
var r = function (e) {
  function CollectableItemMaterialBagVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemMaterialBagVE, e);
  CollectableItemMaterialBagVE.prototype.init = function (t, i) {
    e.prototype.init.call(this, t, i);
    this.triggerOnAllIconDispLoadedManually = true;
  };
  CollectableItemMaterialBagVE.prototype.iconCreate = function () {
    this.iconContainer.visible = false;
    a.MaterialBagRenderHelper.render(this.itemMaterialBagVO.materialBagVO, this.dispCreator.dispContainer, this.bindFunction(this.onAllDispClipsLoaded), this.options.icon.dimension);
  };
  CollectableItemMaterialBagVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemMaterialBagVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemMaterialBagVE.prototype.tooltipShowAdvanced = function () {
    if (this.itemMaterialBagVO.materialBagVO) {
      s.MaterialBagTooltipHelper.showToolTip(this.renderer.clips.getTooltipTargetMc(), this.itemMaterialBagVO.materialBagVO, this.itemMaterialBagVO.amount);
    }
  };
  CollectableItemMaterialBagVE.prototype.onAllDispClipsLoaded = function (t = null) {
    e.prototype.onAllDispClipsLoaded.call(this, t);
    this.iconContainer.visible = true;
  };
  Object.defineProperty(CollectableItemMaterialBagVE.prototype, "itemMaterialBagVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemMaterialBagVE;
}(require("./158.js").ACollectableItemVE);
exports.CollectableItemMaterialBagVE = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");