Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemXpBoosterVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CollectableItemXpBoosterVO, e);
  CollectableItemXpBoosterVO.prototype.getTooltipTextId = function () {
    return "xpBooster_name";
  };
  CollectableItemXpBoosterVO.prototype.getDescriptionTextId = function () {
    return "xpBooster_short_info";
  };
  CollectableItemXpBoosterVO.__initialize_static_members = function () {
    CollectableItemXpBoosterVO.SERVER_KEY = "XPB";
  };
  return CollectableItemXpBoosterVO;
}(require("./328.js").ACollectableItemPercentageBoosterVO);
exports.CollectableItemXpBoosterVO = o;
o.__initialize_static_members();