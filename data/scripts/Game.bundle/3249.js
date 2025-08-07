Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemKhanTabletBoosterVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CollectableItemKhanTabletBoosterVO, e);
  CollectableItemKhanTabletBoosterVO.prototype.getTooltipTextId = function () {
    return "nomadeBooster_name";
  };
  CollectableItemKhanTabletBoosterVO.prototype.getDescriptionTextId = function () {
    return "nomadBooster_short_info";
  };
  CollectableItemKhanTabletBoosterVO.__initialize_static_members = function () {
    CollectableItemKhanTabletBoosterVO.SERVER_KEY = "KTB";
  };
  return CollectableItemKhanTabletBoosterVO;
}(require("./328.js").ACollectableItemPercentageBoosterVO);
exports.CollectableItemKhanTabletBoosterVO = o;
o.__initialize_static_members();