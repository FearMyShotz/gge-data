Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./13.js");
var c = require("./8.js");
var u = require("./11.js");
var d = createjs.Point;
var p = function (e) {
  function SeasonLeaguePromotionDialog() {
    var t = e.call(this, SeasonLeaguePromotionDialog.NAME) || this;
    t._hasBoughtSeasonPassInThisDialog = false;
    t.hasBoughtRewardHubPassInThisDialog = false;
    return t;
  }
  n.__extends(SeasonLeaguePromotionDialog, e);
  SeasonLeaguePromotionDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    c.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_buy], I.ClickFeedbackButtonHover);
    c.ButtonHelper.initButtons([this.dialogDisp.btn_pickUp], I.ClickFeedbackButtonHover);
    this.dialogDisp.btn_buy.toolTipText = "dialog_seasonLeague_seasonPass_purchaseButton_promotionPass_tooltip";
  };
  SeasonLeaguePromotionDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_promotionGained_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward1, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_standardRewards_desc")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward2, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_bonusRewards_desc")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProperties.promotionVO.getNameTextId())));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new s.LocalizedTextVO("dialog_seasonLeague_promotionGained_copy", [a.Localize.text(this.dialogProperties.promotionVO.getNameTextId())]));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_pickUp.txt_copy, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("collect")));
    var i = a.Localize.text(O.CastleModel.seasonLeagueData.server.passSeasonActive ? "status_active" : "status_inactive");
    var n = a.Localize.text(O.CastleModel.seasonLeagueData.server.passEventActive ? "status_active" : "status_inactive");
    var o = a.Localize.text(this.promotionPassActive ? "status_active" : "status_inactive");
    this.dialogDisp.mc_info.toolTipText = a.Localize.text("dialog_seasonLeague_promotionRanks_promotionReward_tooltip", [i, n, o]);
    this.dialogDisp.mc_info.visible = !this.dialogProperties.rewardHubVO;
    this._promotionIcon = new h.SeasonLeaguePromotionIconComponent(this.dialogDisp.mc_icon, h.SeasonLeaguePromotionIconComponent.TYPE_BIG, new d(200, 200));
    this.controller.addEventListener(E.SeasonLeagueEvent.ON_PASS_PROMOTION_BOUGHT, this.bindFunction(this.onPassPurchased));
    this.controller.addEventListener(E.SeasonLeagueEvent.ON_PASS_SEASON_BOUGHT, this.bindFunction(this.onPassPurchased));
    v.CastleRewardHubMicroservice.Instance.onUpgradeRewardsSuccessSignal.add(this.bindFunction(this.onRewardHubPassPurchased));
    this.dialogDisp.mc_item0.mc_overlay.visible = false;
    this.dialogDisp.mc_item1.mc_overlay.visible = false;
    this.dialogDisp.mc_item0.mc_background.visible = false;
    this.dialogDisp.mc_item1.mc_background.visible = false;
    this.dialogDisp.mc_rewards.mc_item0.mc_background.visible = false;
    this.dialogDisp.mc_rewards.mc_item1.mc_background.visible = false;
    this.hasBoughtSeasonPassInThisDialog = false;
    this.hasBoughtRewardHubPassInThisDialog = false;
    this.updateInfos();
  };
  SeasonLeaguePromotionDialog.prototype.updateInfos = function () {
    S.MicroServiceRequestPreloader.hidePreloader();
    this._promotionIcon.updateWithNewVO(this.dialogProperties.promotionVO);
    var e = this.dialogProperties.getPromotionRewardsVO();
    if (this.isPassActive) {
      this.dialogDisp.mc_rewards.mc_item0.mc_overlay.visible = !this.dialogProperties.getPromotionRewardsVO().isUnlocked;
      this.dialogDisp.mc_rewards.mc_item1.mc_overlay.visible = !this.dialogProperties.getPromotionRewardsVO().isUnlocked;
      this.dialogDisp.mc_rewards.mc_item0.mc_background.visible = (this.hasBoughtRewardHubPassInThisDialog || this.hasBoughtSeasonPassInThisDialog || this.dialogProperties.getPromotionRewardsVO().isUnlocked) && e.premiumRewards.length > 0;
      this.dialogDisp.mc_rewards.mc_item1.mc_background.visible = (this.hasBoughtRewardHubPassInThisDialog || this.hasBoughtSeasonPassInThisDialog || this.dialogProperties.getPromotionRewardsVO().isUnlocked) && e.premiumRewards.length > 0;
      var t = this.dialogProperties.getPromotionRewardsVO().isUnlocked ? 2 : 1;
      this.dialogDisp.mc_rewards.mc_item0.mc_background.gotoAndStop(t);
      this.dialogDisp.mc_rewards.mc_item1.mc_background.gotoAndStop(t);
      this.dialogDisp.mc_rewards.mc_lockBG.visible = false;
      this.dialogDisp.mc_rewards.mc_lock0.visible = !this.dialogProperties.getPromotionRewardsVO().isUnlocked;
      this.dialogDisp.mc_rewards.mc_lock1.visible = !this.dialogProperties.getPromotionRewardsVO().isUnlocked;
      this.dialogDisp.btn_buy.visible = !this.dialogProperties.getPromotionRewardsVO().isUnlocked;
      this.dialogDisp.mc_check2.visible = this.dialogProperties.getPromotionRewardsVO().isUnlocked;
    } else {
      this.dialogDisp.mc_rewards.mc_item0.mc_overlay.visible = e.premiumRewards.length > 0;
      this.dialogDisp.mc_rewards.mc_item1.mc_overlay.visible = e.premiumRewards.length > 0;
      this.dialogDisp.mc_rewards.mc_lockBG.visible = false;
      this.dialogDisp.mc_rewards.mc_lock0.visible = e.premiumRewards.length > 0;
      this.dialogDisp.mc_rewards.mc_lock1.visible = e.premiumRewards.length > 0;
      this.dialogDisp.btn_buy.visible = e.premiumRewards.length > 0;
      this.dialogDisp.mc_check2.visible = false;
    }
    this.updateRewards();
  };
  SeasonLeaguePromotionDialog.prototype.hide = function () {
    this.controller.removeEventListener(E.SeasonLeagueEvent.ON_PASS_PROMOTION_BOUGHT, this.bindFunction(this.onPassPurchased));
    this.controller.removeEventListener(E.SeasonLeagueEvent.ON_PASS_SEASON_BOUGHT, this.bindFunction(this.onPassPurchased));
    v.CastleRewardHubMicroservice.Instance.onUpgradeRewardsSuccessSignal.remove(this.bindFunction(this.onRewardHubPassPurchased));
    e.prototype.hide.call(this);
  };
  SeasonLeaguePromotionDialog.prototype.updateRewards = function () {
    var e = this.dialogProperties.getPromotionRewardsVO();
    g.CollectableRenderHelper.displayMultipleItemsComplete(this, new C.CollectableRenderClipsList(this.dialogDisp, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addBuildingLevelMc("parent.mc_buildingLevel"), e.normalRewards, new _.CollectableRenderOptions(_.CollectableRenderOptions.SET_ADVANCED, new d(55, 55)), function (e) {
      e.getRenderer(_.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = e.itemVE && e.itemVE.textfieldBackgroundVisible() ? 0 : 7;
    });
    g.CollectableRenderHelper.displayMultipleItemsComplete(new m.CollectableRendererList(), new C.CollectableRenderClipsList(this.dialogDisp.mc_rewards, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addBuildingLevelMc("parent.mc_buildingLevel"), e.premiumRewards, new _.CollectableRenderOptions(_.CollectableRenderOptions.SET_ADVANCED, new d(55, 55)), function (e) {
      e.getRenderer(_.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = e.itemVE && e.itemVE.textfieldBackgroundVisible() ? 0 : 7;
    });
  };
  SeasonLeaguePromotionDialog.prototype.onClick = function (t) {
    if (c.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_buy:
          if (this.dialogProperties.rewardHubVO) {
            var i = new T.CollectableItemUnlockAllPassVO();
            i.hubRewardIdsToUnlock = [this.dialogProperties.rewardHubVO.hubRewardID];
            f.CastleDialogHandler.getInstance().registerDialogs(y.SeasonLeagueBuyPassConfirmDialog, new b.SeasonLeagueBuyPassConfirmDialogProperties(i, this.dialogProperties.rewardHubVO.extraTierUnlockCostC2, 0, -1, -1, -1, -1, b.SeasonLeagueBuyPassConfirmDialogProperties.SOURCE_REWARD_HUB_PROMOTION));
          } else {
            f.CastleDialogHandler.getInstance().registerDialogs(y.SeasonLeagueBuyPassConfirmDialog, new b.SeasonLeagueBuyPassConfirmDialogProperties(new D.CollectableItemSeasonLeaguePromotionPassVO(), O.CastleModel.seasonLeagueData.currentSetting.seasonPassPromotionPrice, 0, this.dialogProperties.promotionVO.id, -1, -1, this.dialogProperties.seasonID));
          }
          break;
        case this.dialogDisp.btn_pickUp:
          if (this.dialogProperties.rewardHubVO) {
            v.CastleRewardHubMicroservice.Instance.pickRewardsSignal.dispatch([this.dialogProperties.rewardHubVO.hubRewardID]);
          }
          this.hide();
      }
    }
  };
  SeasonLeaguePromotionDialog.prototype.onPassPurchased = function (e = null) {
    if (!this.hasBoughtSeasonPassInThisDialog && this.isPassActive) {
      this.hasBoughtSeasonPassInThisDialog = true;
    }
    this.updateInfos();
  };
  Object.defineProperty(SeasonLeaguePromotionDialog.prototype, "isPassActive", {
    get: function () {
      return O.CastleModel.seasonLeagueData.server.passSeasonActive || this.promotionPassActive || this.dialogProperties.isSeasonPassEnabled || this.hasBoughtSeasonPassInThisDialog || this.hasBoughtRewardHubPassInThisDialog || this.dialogProperties.getPromotionRewardsVO().isUnlocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeaguePromotionDialog.prototype, "promotionPassActive", {
    get: function () {
      return O.CastleModel.seasonLeagueData.server.boughtPromoPassForPromoID(this.dialogProperties.promotionVO.id) || this.dialogProperties.isPromoPassEnabled;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeaguePromotionDialog.prototype.onRewardHubPassPurchased = function (e = null) {
    this.hasBoughtRewardHubPassInThisDialog ||= true;
    this.updateInfos();
    O.CastleModel.seasonLeagueData.server.requestKLI();
  };
  Object.defineProperty(SeasonLeaguePromotionDialog.prototype, "hasBoughtSeasonPassInThisDialog", {
    get: function () {
      return this._hasBoughtSeasonPassInThisDialog;
    },
    set: function (e) {
      this._hasBoughtSeasonPassInThisDialog = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeaguePromotionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeaguePromotionDialog.NAME = "SeasonLeagueTitlePromotion_RewardHub";
  return SeasonLeaguePromotionDialog;
}(u.CastleExternalDialog);
exports.SeasonLeaguePromotionDialog = p;
var h = require("./359.js");
var g = require("./25.js");
var C = require("./67.js");
var _ = require("./19.js");
var m = require("./104.js");
var f = require("./9.js");
var O = require("./4.js");
var E = require("./174.js");
var y = require("./548.js");
var b = require("./403.js");
var D = require("./543.js");
var I = require("./20.js");
var T = require("./652.js");
var v = require("./360.js");
var S = require("./549.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");