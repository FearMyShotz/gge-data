Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemGloryBoosterVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CollectableItemGloryBoosterVO, e);
  CollectableItemGloryBoosterVO.prototype.getTooltipTextId = function () {
    return "fameBoost_name";
  };
  CollectableItemGloryBoosterVO.prototype.getDescriptionTextId = function () {
    return "fameBoost_short_info";
  };
  CollectableItemGloryBoosterVO.__initialize_static_members = function () {
    CollectableItemGloryBoosterVO.SERVER_KEY = "PG";
  };
  return CollectableItemGloryBoosterVO;
}(require("./328.js").ACollectableItemPercentageBoosterVO);
exports.CollectableItemGloryBoosterVO = o;
o.__initialize_static_members();