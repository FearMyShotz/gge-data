Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemRageBoosterVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CollectableItemRageBoosterVO, e);
  CollectableItemRageBoosterVO.prototype.getTooltipTextId = function () {
    return "rageBooster_name";
  };
  CollectableItemRageBoosterVO.prototype.getDescriptionTextId = function () {
    return "rageBooster_short_info";
  };
  CollectableItemRageBoosterVO.__initialize_static_members = function () {
    CollectableItemRageBoosterVO.SERVER_KEY = "RPB";
  };
  return CollectableItemRageBoosterVO;
}(require("./328.js").ACollectableItemPercentageBoosterVO);
exports.CollectableItemRageBoosterVO = o;
o.__initialize_static_members();