Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemAquamarineVO(t = 0) {
    return e.call(this, t) || this;
  }
  n.__extends(CollectableItemAquamarineVO, e);
  CollectableItemAquamarineVO.prototype.getTooltipTextId = function () {
    return "aquamarin_tooltip";
  };
  CollectableItemAquamarineVO.prototype.getDescriptionTextId = function () {
    return "aquamarin_short_info";
  };
  CollectableItemAquamarineVO.SERVER_KEY = "A";
  CollectableItemAquamarineVO.XML_KEY = "aquamarine";
  return CollectableItemAquamarineVO;
}(require("./254.js").ACollectableItemResourceVO);
exports.CollectableItemAquamarineVO = o;