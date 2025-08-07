Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./81.js");
var s = require("./824.js");
var r = require("./104.js");
var l = function (e) {
  function DifficultyScalingRewardOverviewDialogScrollItem() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.rewardsRenderList = new r.CollectableRendererList();
    return t;
  }
  n.__extends(DifficultyScalingRewardOverviewDialogScrollItem, e);
  DifficultyScalingRewardOverviewDialogScrollItem.prototype.fill = function () {
    s.DifficultyScalingRewardDialogListItemHelper.fillRewardMC(this.itemMc, this.data, this.rewardsRenderList);
  };
  DifficultyScalingRewardOverviewDialogScrollItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    this.rewardsRenderList.destroyCollectableRenderList();
  };
  Object.defineProperty(DifficultyScalingRewardOverviewDialogScrollItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  return DifficultyScalingRewardOverviewDialogScrollItem;
}(a.AInfiniteScrollListItem);
exports.DifficultyScalingRewardOverviewDialogScrollItem = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");