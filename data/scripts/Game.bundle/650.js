Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemSeasonLeagueSeasonPassVO() {
    return e.call(this, 1) || this;
  }
  n.__extends(CollectableItemSeasonLeagueSeasonPassVO, e);
  CollectableItemSeasonLeagueSeasonPassVO.prototype.getTooltipTextId = function () {
    return "seasonLeague_seasonPass_name";
  };
  CollectableItemSeasonLeagueSeasonPassVO.prototype.getDescriptionTextId = function () {
    return "seasonLeague_seasonPass_short_info";
  };
  return CollectableItemSeasonLeagueSeasonPassVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemSeasonLeagueSeasonPassVO = o;