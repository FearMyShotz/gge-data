Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./301.js");
var a = require("./1.js");
var s = function (e) {
  function RewardHubManagedRewardsListItem(t) {
    var i = e.call(this, t) || this;
    i._rewards = new o.SeasonLeagueSimpleRewardsComponent(i.disp, false, false);
    return i;
  }
  n.__extends(RewardHubManagedRewardsListItem, e);
  RewardHubManagedRewardsListItem.prototype.init = function () {
    e.prototype.init.call(this);
  };
  RewardHubManagedRewardsListItem.prototype.show = function () {
    e.prototype.show.call(this);
    this._rewards.onShow();
  };
  RewardHubManagedRewardsListItem.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._rewards.onHide();
  };
  RewardHubManagedRewardsListItem.prototype.fillItem = function (e) {
    var t;
    var i;
    var n = e.eventRewards;
    this._rewards.updateWithNewData(n);
    for (var o = 0; o < this._rewards.numberOfItems; o++) {
      t = this._rewards.disp.getChildByName("mc_item" + o);
      i = this._rewards.collectableRenderList[o].itemVO;
      t.visible = !!i;
      if (t && i) {
        t.icon_lock.visible = false;
        t.mc_locked.visible = false;
        t.mc_overlay.visible = false;
        t.mc_unlocked.visible = false;
        t.mc_overlay.mouseEnabled = false;
        t.icon_lock.visible = !!i.isLocked && !i.isGuaranteed;
        t.mc_locked.visible = !!i.isLocked && !i.isGuaranteed;
        t.mc_overlay.visible = !!i.isLocked && !i.isGuaranteed;
        t.mc_unlocked.visible = !!i.isPurchased && !i.isGuaranteed;
      }
    }
  };
  return RewardHubManagedRewardsListItem;
}(require("./2.js").FlashUIComponent);
exports.RewardHubManagedRewardsListItem = s;
a.classImplementsInterfaces(s, "ICollectableRendererList");