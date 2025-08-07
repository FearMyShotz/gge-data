Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemSeasonLeaguePromotionPassVO() {
    return e.call(this, 1) || this;
  }
  n.__extends(CollectableItemSeasonLeaguePromotionPassVO, e);
  CollectableItemSeasonLeaguePromotionPassVO.prototype.getTooltipTextId = function () {
    return "seasonLeague_promotionPass_name";
  };
  CollectableItemSeasonLeaguePromotionPassVO.prototype.getDescriptionTextId = function () {
    return "seasonLeague_promotionPass_short_info";
  };
  return CollectableItemSeasonLeaguePromotionPassVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemSeasonLeaguePromotionPassVO = o;