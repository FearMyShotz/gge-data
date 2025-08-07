Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./40.js");
var r = require("./8.js");
var l = function (e) {
  function SeasonLeaguePromotionRewardsComponent(t) {
    var i = e.call(this, t) || this;
    i.init();
    return i;
  }
  n.__extends(SeasonLeaguePromotionRewardsComponent, e);
  SeasonLeaguePromotionRewardsComponent.prototype.init = function () {
    r.ButtonHelper.initButton(this.disp.btn_locked, -1, d.ClickFeedbackButton);
    this.disp.btn_locked.toolTipText = "dialog_seasonLeague_seasonPass_lockedState_tooltip";
    this._rewardsComponent = new u.SeasonLeagueSimpleRewardsComponent(this.disp, true, true, 4);
  };
  SeasonLeaguePromotionRewardsComponent.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._rewardsComponent.onShow();
  };
  SeasonLeaguePromotionRewardsComponent.prototype.onHide = function () {
    this._rewardsComponent.onHide();
    e.prototype.onHide.call(this);
  };
  SeasonLeaguePromotionRewardsComponent.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._rewardsComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  SeasonLeaguePromotionRewardsComponent.prototype.removeEventListener = function () {
    this._rewardsComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    e.prototype.removeEventListener.call(this);
  };
  SeasonLeaguePromotionRewardsComponent.prototype.updateWithNewData = function (e, t, i) {
    this._vo = e;
    this.promoID = t;
    this.seasonID = i;
    this._rewardsComponent.updateWithNewData(e.createCombinedRewardList());
    _.MicroServiceRequestPreloader.hidePreloader();
    this.update();
  };
  SeasonLeaguePromotionRewardsComponent.prototype.update = function () {
    if (this.vo) {
      var e = this._rewardsComponent.getCurrentItemScrollIndex();
      var t = a.int(this.vo.isUnlocked ? 2 : 1);
      for (var i = 0; i < this._rewardsComponent.numberOfItems; ++i) {
        var n = this._rewardsComponent.collectableRenderList[i].itemVO;
        var o = this.getItemMc(i);
        var s = e + i;
        var r = this.vo.isIndexPremiumReward(s);
        o.mc_background.visible = n && r;
        o.mc_left.visible = n && r && this.vo.isIndexPremiumReward(s - 1);
        o.mc_right.visible = n && r && this.vo.isIndexPremiumReward(s + 1);
        o.mc_overlay.visible = n && r && !this.vo.isUnlocked;
        o.mc_background.gotoAndStop(t);
        o.mc_left.gotoAndStop(t);
        o.mc_right.gotoAndStop(t);
        if (o.mc_check) {
          o.mc_check.visible = n && this.vo.hasCollectedPremium && (!r || r && this.vo.isUnlocked);
        }
      }
      this.disp.btn_locked.visible = !this.vo.isUnlocked;
      if (!this.vo.isUnlocked) {
        var l = this.getLowestShownPremiumRewardIndex();
        var c = this.getHighestShownPremiumRewardIndex();
        var u = l >= 0 && c >= 0;
        this.disp.btn_locked.visible = u;
        if (u) {
          var d = this.getItemMc(l).x;
          var p = this.getItemMc(c).x;
          this.disp.btn_locked.x = p - (p - d) * 0.5;
        }
      }
    }
  };
  SeasonLeaguePromotionRewardsComponent.prototype.getLowestShownPremiumRewardIndex = function () {
    var e = -1;
    var t = this._rewardsComponent.getCurrentItemScrollIndex();
    for (var i = this._rewardsComponent.numberOfItems; i >= 0; --i) {
      if (this.vo.isIndexPremiumReward(t + i)) {
        e = i;
      }
    }
    return e;
  };
  SeasonLeaguePromotionRewardsComponent.prototype.getHighestShownPremiumRewardIndex = function () {
    var e = -1;
    var t = this._rewardsComponent.getCurrentItemScrollIndex();
    for (var i = 0; i < this._rewardsComponent.numberOfItems; ++i) {
      if (this.vo.isIndexPremiumReward(t + i)) {
        e = i;
      }
    }
    return e;
  };
  SeasonLeaguePromotionRewardsComponent.prototype.getItemMc = function (e) {
    return this.disp.getChildByName("mc_item" + e);
  };
  SeasonLeaguePromotionRewardsComponent.prototype.onClick = function (t) {
    if (r.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.disp.btn_locked:
          p.CastleDialogHandler.getInstance().registerDialogs(c.SeasonLeagueBuyPassConfirmDialog, new h.SeasonLeagueBuyPassConfirmDialogProperties(new g.CollectableItemSeasonLeaguePromotionPassVO(), C.CastleModel.seasonLeagueData.currentSetting.seasonPassPromotionPrice, 0, this.promoID, -1, -1, this.seasonID));
      }
    }
  };
  SeasonLeaguePromotionRewardsComponent.prototype.onScroll = function () {
    this.update();
  };
  Object.defineProperty(SeasonLeaguePromotionRewardsComponent.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeaguePromotionRewardsComponent;
}(s.CastleItemRenderer);
exports.SeasonLeaguePromotionRewardsComponent = l;
var c = require("./547.js");
var u = require("./301.js");
var d = require("./36.js");
var p = require("./9.js");
var h = require("./403.js");
var g = require("./542.js");
var C = require("./4.js");
var _ = require("./549.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");