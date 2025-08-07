Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./13.js");
var r = require("./14.js");
var l = require("./81.js");
var c = require("./394.js");
var u = createjs.Point;
var d = function (e) {
  function GachaRankingRewardsDialogListItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GachaRankingRewardsDialogListItem, e);
  GachaRankingRewardsDialogListItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    this._rewards = new c.TempServerSimpleRewardsComponent(this.getItemMc(), true, false, 0, new u(25, 25));
  };
  GachaRankingRewardsDialogListItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._rewards.onShow();
  };
  GachaRankingRewardsDialogListItem.prototype.onHide = function () {
    this._rewards.onHide();
    e.prototype.onHide.call(this);
  };
  GachaRankingRewardsDialogListItem.prototype.fill = function () {
    var e = this.data.rank;
    var t = e.length == 1 ? "rankingRange_single" : "rankingRange_multi";
    r.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_title, new a.TextVO(s.TextHelper.toUpperCaseLocaSafeTextId(t, e))).autoFitToBounds = true;
    this.getItemMc().mc_rank1.visible = this.data.index == 0;
    this.getItemMc().mc_rank2.visible = this.data.index == 1;
    this.getItemMc().mc_rank3.visible = this.data.index == 2;
    this._rewards.updateWithNewData(this.rewards);
  };
  Object.defineProperty(GachaRankingRewardsDialogListItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  GachaRankingRewardsDialogListItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
  };
  Object.defineProperty(GachaRankingRewardsDialogListItem.prototype, "rewards", {
    get: function () {
      return this.data.rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaRankingRewardsDialogListItem.prototype, "rewardCategory", {
    get: function () {
      return this.data.rewardCategory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaRankingRewardsDialogListItem.prototype, "chance", {
    get: function () {
      return this.data.chance;
    },
    enumerable: true,
    configurable: true
  });
  return GachaRankingRewardsDialogListItem;
}(l.AInfiniteScrollListItem);
exports.GachaRankingRewardsDialogListItem = d;
o.classImplementsInterfaces(d, "ICollectableRendererList");