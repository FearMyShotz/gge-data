Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemGallantryBoosterVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CollectableItemGallantryBoosterVO, e);
  CollectableItemGallantryBoosterVO.prototype.getTooltipTextId = function () {
    return "gallantryBooster_name";
  };
  CollectableItemGallantryBoosterVO.prototype.getDescriptionTextId = function () {
    return "gallantryBooster_short_info";
  };
  CollectableItemGallantryBoosterVO.__initialize_static_members = function () {
    CollectableItemGallantryBoosterVO.SERVER_KEY = "GPB";
  };
  return CollectableItemGallantryBoosterVO;
}(require("./328.js").ACollectableItemPercentageBoosterVO);
exports.CollectableItemGallantryBoosterVO = o;
o.__initialize_static_members();