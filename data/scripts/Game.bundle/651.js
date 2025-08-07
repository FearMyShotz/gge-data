Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemSeasonLeagueEventPassVO() {
    return e.call(this, 1) || this;
  }
  n.__extends(CollectableItemSeasonLeagueEventPassVO, e);
  CollectableItemSeasonLeagueEventPassVO.prototype.getTooltipTextId = function () {
    return "seasonLeague_eventPass_name";
  };
  CollectableItemSeasonLeagueEventPassVO.prototype.getDescriptionTextId = function () {
    return "seasonLeague_eventPass_short_info";
  };
  return CollectableItemSeasonLeagueEventPassVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemSeasonLeagueEventPassVO = o;