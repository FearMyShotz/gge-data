Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./14.js");
var s = require("./3.js");
var r = require("./2.js");
var l = require("./3533.js");
var c = require("./48.js");
var u = require("./157.js");
var d = require("./811.js");
var p = function (e) {
  function RewardHubManagedListItem(t, i, n = false) {
    var a = e.call(this, new (o.getDefinitionByName("Item_ManageAllRewards"))(), i, n) || this;
    a._dataVO = t;
    a.fill();
    return a;
  }
  n.__extends(RewardHubManagedListItem, e);
  RewardHubManagedListItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    r.MovieClipHelper.clearMovieClip(this.disp.icon_event.icon_event);
    r.MovieClipHelper.clearMovieClip(this.disp.icon_event.icon_sub_event);
    r.MovieClipHelper.clearMovieClip(this.disp.contentMC);
  };
  RewardHubManagedListItem.prototype.fill = function () {
    r.MovieClipHelper.clearMovieClip(this.disp.contentMC);
    a.CastleComponent.textFieldManager.registerTextField(this.disp.txt_event_name, new s.LocalizedTextVO(this._dataVO.txtTitle));
    a.CastleComponent.textFieldManager.registerTextField(this.disp.txt_player_rewards, new s.LocalizedTextVO(this._dataVO.txtSubtitle));
    this.disp.icon_event.icon_event.addChild(this._dataVO.mcIcon);
    this.disp.icon_event.icon_sub_event.addChild(this._dataVO.mcSubIcon);
    var e;
    for (var t = this.getRewardTiersData(), i = 0; i < t.length; i++) {
      (e = new l.RewardHubManagedRewardsListItem(new Library.CastleRewardHubManageAll.Item_ManageAllRewardsTier())).disp.y += this.disp.contentMC.height;
      this.disp.contentMC.addChild(e.disp);
      e.fillItem(t[i]);
    }
    this.contentMC.visible = true;
  };
  Object.defineProperty(RewardHubManagedListItem.prototype, "height", {
    get: function () {
      return this.disp.height;
    },
    enumerable: true,
    configurable: true
  });
  RewardHubManagedListItem.prototype.getRewardTiersData = function () {
    var e;
    var t = [];
    var i = {
      eventRewards: new c.CollectableList()
    };
    var n = 0;
    for (var o = 0; o < this._dataVO.rewardsTiers.length; o++) {
      e = this._dataVO.rewardsTiers[o];
      for (var a = 0; a < e.rewards.length; a++) {
        if (n == RewardHubManagedListItem.MAX_TIER_REWARDS) {
          t.push(i);
          i = {
            eventRewards: new c.CollectableList()
          };
          n = 0;
        } else {
          if (e.rewardType == d.RewardHubData.REWARD_TYPE_GUARANTEED) {
            e.rewards.list[a].isGuaranteed = true;
          } else if (e.rewardType == d.RewardHubData.REWARD_TYPE_EXTRA) {
            if (this._dataVO.isExtraTierUnlocked) {
              e.rewards.list[a].isPurchased = true;
              e.rewards.list[a].isLocked = false;
            } else {
              e.rewards.list[a].isLocked = true;
              e.rewards.list[a].isPurchased = false;
            }
          }
          i.eventRewards.addItem(e.rewards.list[a]);
          n++;
        }
      }
    }
    if (t.length == 0 && i.eventRewards.length > 0) {
      t.push(i);
    }
    return t;
  };
  RewardHubManagedListItem.MAX_TIER_REWARDS = 4;
  return RewardHubManagedListItem;
}(u.ACollapsibleItem);
exports.RewardHubManagedListItem = p;
o.classImplementsInterfaces(p, "ICollectableRendererList");