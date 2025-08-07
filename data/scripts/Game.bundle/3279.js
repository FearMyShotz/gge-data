Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./61.js");
var s = function (e) {
  function CollectableItemCrestSymbolVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemCrestSymbolVE, e);
  CollectableItemCrestSymbolVE.prototype.init = function (t, i) {
    e.prototype.init.call(this, t, i);
    this.triggerOnAllIconDispLoadedManually = true;
  };
  CollectableItemCrestSymbolVE.prototype.iconCreate = function () {
    this.dispCreator.addDisp(a.CrestHelper.getCrestSymbolGraphic(this.itemCrestSystemVO.crestSymbolVO, this.options.icon.dimension.x, this.options.icon.dimension.y, false, this.bindFunction(this.onAllDispClipsLoaded)));
  };
  CollectableItemCrestSymbolVE.prototype.tooltipCreate = function () {
    return this.tooltipCreateByAmount(this.itemCrestSystemVO.crestSymbolVO.toolTipText);
  };
  Object.defineProperty(CollectableItemCrestSymbolVE.prototype, "itemCrestSystemVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemCrestSymbolVE;
}(require("./158.js").ACollectableItemVE);
exports.CollectableItemCrestSymbolVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");