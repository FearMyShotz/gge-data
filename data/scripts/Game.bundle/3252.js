Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemAllianceCoinBoosterVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CollectableItemAllianceCoinBoosterVO, e);
  CollectableItemAllianceCoinBoosterVO.prototype.getTooltipTextId = function () {
    return "royalCoinsBooster_name";
  };
  CollectableItemAllianceCoinBoosterVO.prototype.getDescriptionTextId = function () {
    return "royalCoinsBooster_short_info";
  };
  CollectableItemAllianceCoinBoosterVO.__initialize_static_members = function () {
    CollectableItemAllianceCoinBoosterVO.SERVER_KEY = "ACB";
  };
  return CollectableItemAllianceCoinBoosterVO;
}(require("./328.js").ACollectableItemPercentageBoosterVO);
exports.CollectableItemAllianceCoinBoosterVO = o;
o.__initialize_static_members();