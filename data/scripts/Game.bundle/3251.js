Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemSamuraiBoosterVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CollectableItemSamuraiBoosterVO, e);
  CollectableItemSamuraiBoosterVO.prototype.getTooltipTextId = function () {
    return "samuraiBooster_name";
  };
  CollectableItemSamuraiBoosterVO.prototype.getDescriptionTextId = function () {
    return "samuraiBooster_short_info";
  };
  CollectableItemSamuraiBoosterVO.__initialize_static_members = function () {
    CollectableItemSamuraiBoosterVO.SERVER_KEY = "STB";
  };
  return CollectableItemSamuraiBoosterVO;
}(require("./328.js").ACollectableItemPercentageBoosterVO);
exports.CollectableItemSamuraiBoosterVO = o;
o.__initialize_static_members();