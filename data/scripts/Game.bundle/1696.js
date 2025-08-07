Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./19.js");
var s = require("./11.js");
var r = createjs.Point;
var l = function (e) {
  function ARandomDungeonRewardDialog(t) {
    var i = this;
    i.emptyRewardPosX = 0;
    i.rewardOffset = 0;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(ARandomDungeonRewardDialog, e);
  ARandomDungeonRewardDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.centeredRewardListComponent = new u.CastleCenteredRewardRendererListComponent(this.dialogDisp.mc_rewards, new r(34, 34), a.CollectableRenderOptions.SET_ADVANCED, this.bindFunction(this.preRenderFunc));
    this.emptyRewardPosX = this.dialogDisp.mc_rewardsEmpty.x;
    this.rewardOffset = (this.dialogDisp.mc_rewardsEmpty.emptyItem1.x - this.dialogDisp.mc_rewardsEmpty.emptyItem0.x) / 2;
  };
  ARandomDungeonRewardDialog.prototype.preRenderFunc = function (e) {
    if (e.itemVO) {
      var t = e.getRenderer(a.CollectableRenderOptions.ICON_TRANSFORM);
      switch (e.itemVO.itemType) {
        case c.CollectableEnum.EQUIPMENT_RARENESS:
        case c.CollectableEnum.EQUIPMENT_UNIQUE:
        case c.CollectableEnum.HERO_RANDOM:
        case c.CollectableEnum.GEM:
        case c.CollectableEnum.GEM_RANDOM:
        case c.CollectableEnum.BOOSTER:
        case c.CollectableEnum.BUILDING:
        case c.CollectableEnum.EXTINGUISH_FIRE:
        case c.CollectableEnum.ALLIANCE_GIFT:
        case c.CollectableEnum.DUNGEON_PROTECTION:
          t.transform.offset.y = 5;
      }
    }
  };
  ARandomDungeonRewardDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.centeredRewardListComponent.showRewards(this.rewards);
    if (this.rewards.length % 2) {
      this.dialogDisp.mc_rewardsEmpty.mc_lastEmptyItem.visible = false;
      this.dialogDisp.mc_rewardsEmpty.x = this.emptyRewardPosX + this.rewardOffset;
    } else {
      this.dialogDisp.mc_rewardsEmpty.mc_lastEmptyItem.visible = true;
      this.dialogDisp.mc_rewardsEmpty.x = this.emptyRewardPosX;
    }
  };
  Object.defineProperty(ARandomDungeonRewardDialog.prototype, "rewards", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  return ARandomDungeonRewardDialog;
}(s.CastleExternalDialog);
exports.ARandomDungeonRewardDialog = l;
var c = require("./12.js");
var u = require("./400.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");