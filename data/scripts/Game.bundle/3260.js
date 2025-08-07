Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemKahnMedalBoosterVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemKahnMedalBoosterVO, e);
  CollectableItemKahnMedalBoosterVO.prototype.getTooltipTextId = function () {
    return "khanMedalBooster_name";
  };
  CollectableItemKahnMedalBoosterVO.prototype.getDescriptionTextId = function () {
    return "khanMedalBooster_short_info";
  };
  CollectableItemKahnMedalBoosterVO.SERVER_KEY = "KMB";
  return CollectableItemKahnMedalBoosterVO;
}(require("./328.js").ACollectableItemPercentageBoosterVO);
exports.CollectableItemKahnMedalBoosterVO = o;