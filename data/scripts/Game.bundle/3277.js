Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CollectableItemAchievementPointVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemAchievementPointVE, e);
  CollectableItemAchievementPointVE.prototype.tooltipCreate = function () {
    return this.tooltipCreateByAmount(this.vo.getTooltipTextId());
  };
  return CollectableItemAchievementPointVE;
}(require("./195.js").ACollectableItemSimpleIconVE);
exports.CollectableItemAchievementPointVE = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");