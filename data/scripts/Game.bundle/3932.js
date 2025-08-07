Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./31.js");
var s = require("./19.js");
var r = require("./81.js");
var l = require("./25.js");
var c = createjs.Point;
var u = function (e) {
  function GachaEventMainRewardItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GachaEventMainRewardItem, e);
  GachaEventMainRewardItem.prototype.fill = function () {
    var e = new s.CollectableRenderOptions(s.CollectableRenderOptions.SET_DEFAULT, new c(73, 71));
    l.CollectableRenderHelper.displaySingleItemComplete(this, new a.CollectableRenderClips(this.getItemMc().mc_item).addInfoBtn(this.getItemMc().btn_info), this.getReward(), e);
  };
  GachaEventMainRewardItem.prototype.getReward = function () {
    return this.data;
  };
  GachaEventMainRewardItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
  };
  return GachaEventMainRewardItem;
}(r.AInfiniteScrollListItem);
exports.GachaEventMainRewardItem = u;
o.classImplementsInterfaces(u, "ICollectableRendererList");