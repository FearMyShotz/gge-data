Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function ACollectableItemGoodsVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ACollectableItemGoodsVE, e);
  ACollectableItemGoodsVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  ACollectableItemGoodsVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  ACollectableItemGoodsVE.prototype.tooltipCreate = function () {
    return this.tooltipCreateByAmount(this.vo.getTooltipTextId());
  };
  ACollectableItemGoodsVE.prototype.costTextfieldUpdate = function () {
    this.costTextfieldSetAsAmountAndStorage();
  };
  return ACollectableItemGoodsVE;
}(require("./195.js").ACollectableItemSimpleIconVE);
exports.ACollectableItemGoodsVE = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");