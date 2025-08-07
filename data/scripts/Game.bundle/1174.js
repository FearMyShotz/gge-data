Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function ACollectableItemGoodsVO(t = 0) {
    return e.call(this, t) || this;
  }
  n.__extends(ACollectableItemGoodsVO, e);
  ACollectableItemGoodsVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    this.amount = t;
  };
  ACollectableItemGoodsVO.prototype.getTooltipTextId = function () {
    return this.itemType.name;
  };
  ACollectableItemGoodsVO.prototype.getDescriptionTextId = function () {
    return this.itemType.name + "_short_info";
  };
  return ACollectableItemGoodsVO;
}(require("./96.js").ACollectableItemVO);
exports.ACollectableItemGoodsVO = o;