Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemOilVO(t = 0) {
    return e.call(this, t) || this;
  }
  n.__extends(CollectableItemOilVO, e);
  CollectableItemOilVO.prototype.getTooltipTextId = function () {
    return "oliveoil";
  };
  CollectableItemOilVO.prototype.getDescriptionTextId = function () {
    return "oliveoil_short_info";
  };
  CollectableItemOilVO.SERVER_KEY = "O";
  CollectableItemOilVO.XML_KEY = "oil";
  return CollectableItemOilVO;
}(require("./254.js").ACollectableItemResourceVO);
exports.CollectableItemOilVO = o;