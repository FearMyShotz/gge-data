Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./530.js");
var s = require("./356.js");
var r = function (e) {
  function CollectableItemConstructionItemVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemConstructionItemVE, e);
  CollectableItemConstructionItemVE.prototype.init = function (t, i) {
    e.prototype.init.call(this, t, i);
    this.triggerOnAllIconDispLoadedManually = true;
  };
  CollectableItemConstructionItemVE.prototype.iconCreate = function () {
    this.iconContainer.visible = false;
    (this.options.icon.renderAsBroken ? a.ConstructionItemRenderer.renderBroken : a.ConstructionItemRenderer.render)(this.itemConstructionVO.constructionItemVO, this.bindFunction(this.onAllDispClipsLoaded), this.dispCreator.dispContainer);
  };
  CollectableItemConstructionItemVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemConstructionItemVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemConstructionItemVE.prototype.tooltipCreate = function () {
    return null;
  };
  CollectableItemConstructionItemVE.prototype.tooltipShowAdvanced = function () {
    if (this.itemConstructionVO.constructionItemVO) {
      s.ConstructionItemTooltipHelper.showConstructionItemToolTip(this.renderer.clips.getTooltipTargetMc(), this.itemConstructionVO.constructionItemVO);
    }
  };
  CollectableItemConstructionItemVE.prototype.onAllDispClipsLoaded = function (t = null) {
    this.iconContainer.visible = true;
    e.prototype.onAllDispClipsLoaded.call(this, t);
  };
  Object.defineProperty(CollectableItemConstructionItemVE.prototype, "itemConstructionVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemConstructionItemVE;
}(require("./158.js").ACollectableItemVE);
exports.CollectableItemConstructionItemVE = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");