Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemWarEffortPointsVO(t = 0) {
    return e.call(this, t) || this;
  }
  n.__extends(CollectableItemWarEffortPointsVO, e);
  CollectableItemWarEffortPointsVO.prototype.getTooltipTextId = function () {
    return this.itemType.name;
  };
  CollectableItemWarEffortPointsVO.prototype.getDescriptionTextId = function () {
    return this.itemType.name + "_short_info";
  };
  return CollectableItemWarEffortPointsVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemWarEffortPointsVO = o;