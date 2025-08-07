Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./4.js");
var r = require("./174.js");
var l = require("./8.js");
var c = require("./34.js");
var u = require("./9.js");
var d = require("./25.js");
var p = require("./67.js");
var h = require("./19.js");
var g = createjs.Point;
var C = require("./104.js");
var _ = require("./20.js");
var m = require("./13.js");
var f = require("./547.js");
var O = require("./403.js");
var E = require("./650.js");
var y = require("./651.js");
var b = require("./360.js");
var D = require("./549.js");
var I = function (e) {
  function SeasonLeagueEndDialogRewardsEvent(t) {
    var i = e.call(this, t) || this;
    i.hasBoughtSeasonPassInThisDialog = false;
    i.hasBoughtEventPassInThisDialog = false;
    i.hasBoughtRewardHubPassInThisDialog = false;
    return i;
  }
  n.__extends(SeasonLeagueEndDialogRewardsEvent, e);
  SeasonLeagueEndDialogRewardsEvent.prototype.reset = function () {
    this.hasBoughtSeasonPassInThisDialog = false;
    this.hasBoughtEventPassInThisDialog = false;
    this.hasBoughtRewardHubPassInThisDialog = false;
  };
  SeasonLeagueEndDialogRewardsEvent.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    l.ButtonHelper.initButtons([this.subLayerDisp.btn_buy], _.ClickFeedbackButtonHover);
    this.controller.addEventListener(r.SeasonLeagueEvent.ON_PASS_EVENT_BOUGHT, this.bindFunction(this.onEventPassPurchased));
    this.controller.addEventListener(r.SeasonLeagueEvent.ON_PASS_SEASON_BOUGHT, this.bindFunction(this.onPassPurchased));
    b.CastleRewardHubMicroservice.Instance.onUpgradeRewardsSuccessSignal.add(this.bindFunction(this.onRewardHubPassPurchased));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_copy1, new a.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_standardRewards_desc")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_copy2, new a.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_bonusRewards_desc")));
    this.subLayerDisp.btn_buy.toolTipText = "dialog_seasonLeague_seasonPass_lockedState_eventEnd_tooltip";
    this.subLayerDisp.btn_buy.visible = !this.isPassActive;
    this.subLayerDisp.mc_item0.mc_overlay.visible = false;
    this.subLayerDisp.mc_item1.mc_overlay.visible = false;
    this.subLayerDisp.mc_item0.mc_background.visible = false;
    this.subLayerDisp.mc_item1.mc_background.visible = false;
    this.subLayerDisp.mc_items.mc_item0.mc_background.visible = false;
    this.subLayerDisp.mc_items.mc_item1.mc_background.visible = false;
    this.subLayerDisp.mc_item0.mc_left.visible = false;
    this.subLayerDisp.mc_item1.mc_left.visible = false;
    this.subLayerDisp.mc_items.mc_item0.mc_left.visible = false;
    this.subLayerDisp.mc_items.mc_item1.mc_left.visible = false;
    this.subLayerDisp.mc_item0.mc_right.visible = false;
    this.subLayerDisp.mc_item1.mc_right.visible = false;
    this.subLayerDisp.mc_items.mc_item0.mc_right.visible = false;
    this.subLayerDisp.mc_items.mc_item1.mc_right.visible = false;
    this.subLayerDisp.mc_items.mc_lock.toolTipText = "dialog_seasonLeague_infoSection_eventPassInactive_text";
    this.hasBoughtSeasonPassInThisDialog = false;
    this.hasBoughtRewardHubPassInThisDialog = false;
    this.updateRewards();
    this.updateInfo();
  };
  SeasonLeagueEndDialogRewardsEvent.prototype.hide = function () {
    this.controller.removeEventListener(r.SeasonLeagueEvent.ON_PASS_EVENT_BOUGHT, this.bindFunction(this.onEventPassPurchased));
    this.controller.removeEventListener(r.SeasonLeagueEvent.ON_PASS_SEASON_BOUGHT, this.bindFunction(this.onPassPurchased));
    b.CastleRewardHubMicroservice.Instance.onUpgradeRewardsSuccessSignal.remove(this.bindFunction(this.onRewardHubPassPurchased));
    e.prototype.hide.call(this);
  };
  SeasonLeagueEndDialogRewardsEvent.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.subLayerDisp.btn_buy) {
      if (this.dialogProperties.rewardHubVO) {
        var i = new y.CollectableItemUnlockAllPassVO();
        i.hubRewardIdsToUnlock = [this.dialogProperties.rewardHubVO.hubRewardID];
        u.CastleDialogHandler.getInstance().registerDialogs(f.SeasonLeagueBuyPassConfirmDialog, new O.SeasonLeagueBuyPassConfirmDialogProperties(i, this.dialogProperties.rewardHubVO.extraTierUnlockCostC2, 0, -1, -1, -1, -1, O.SeasonLeagueBuyPassConfirmDialogProperties.SOURCE_REWARD_HUB_EVENT_END));
      } else {
        u.CastleDialogHandler.getInstance().registerDialogs(f.SeasonLeagueBuyPassConfirmDialog, new O.SeasonLeagueBuyPassConfirmDialogProperties(new E.CollectableItemSeasonLeagueEventPassVO(), s.CastleModel.seasonLeagueData.currentSetting.seasonPassEventEndPrice, 0, s.CastleModel.seasonLeagueData.server.promotionId, this.dialogProperties.eventId, this.dialogProperties.instanceID, this.dialogProperties.seasonID));
      }
    }
  };
  SeasonLeagueEndDialogRewardsEvent.prototype.updateInfo = function () {
    D.MicroServiceRequestPreloader.hidePreloader();
    var e = this.hasBoughtSeasonPassInThisDialog || this.dialogProperties.isSeasonPassEnabled ? "status_active" : "status_inactive";
    var t = this.hasBoughtEventPassInThisDialog || this.dialogProperties.isEventPassEnabled ? "status_active" : "status_inactive";
    this.subLayerDisp.mc_help.toolTipText = a.Localize.text("dialog_seasonLeague_promotionRanks_evenEndReward_tooltip", [e, t]);
    this.subLayerDisp.mc_help.visible = !this.dialogProperties.rewardHubVO;
    if (this.isPassActive) {
      this.subLayerDisp.mc_items.mc_item0.mc_overlay.visible = !this.isRewardHubTierUnlocked;
      this.subLayerDisp.mc_items.mc_item1.mc_overlay.visible = !this.isRewardHubTierUnlocked;
      this.subLayerDisp.mc_items.mc_item0.mc_background.visible = this.hasBoughtSeasonPassInThisDialog || this.hasBoughtEventPassInThisDialog || this.hasBoughtRewardHubPassInThisDialog || this.isRewardHubTierUnlocked;
      this.subLayerDisp.mc_items.mc_item1.mc_background.visible = this.hasBoughtSeasonPassInThisDialog || this.hasBoughtEventPassInThisDialog || this.hasBoughtRewardHubPassInThisDialog || this.isRewardHubTierUnlocked;
      var i = this.isRewardHubTierUnlocked ? 2 : 1;
      this.subLayerDisp.mc_items.mc_item0.mc_background.gotoAndStop(i);
      this.subLayerDisp.mc_items.mc_item1.mc_background.gotoAndStop(i);
      this.subLayerDisp.mc_items.mc_blockedBg.visible = false;
      this.subLayerDisp.mc_items.mc_lock.visible = !this.isRewardHubTierUnlocked;
      this.subLayerDisp.btn_buy.visible = !this.isRewardHubTierUnlocked;
      this.subLayerDisp.mc_check2.visible = this.isRewardHubTierUnlocked;
    } else {
      this.subLayerDisp.mc_items.mc_item0.mc_overlay.visible = true;
      this.subLayerDisp.mc_items.mc_item1.mc_overlay.visible = true;
      this.subLayerDisp.mc_items.mc_blockedBg.visible = false;
      this.subLayerDisp.mc_items.mc_lock.visible = false;
      this.subLayerDisp.btn_buy.visible = true;
      this.subLayerDisp.mc_check2.visible = false;
    }
    this.subLayerDisp.mc_items.mc_item0.mc_overlay.toolTipText = "dialog_seasonLeague_seasonPass_lockedState_eventEnd_tooltip";
    this.subLayerDisp.mc_items.mc_item0.mc_overlay.mouseChildren = false;
    this.subLayerDisp.mc_items.mc_item1.mc_overlay.toolTipText = "dialog_seasonLeague_seasonPass_lockedState_eventEnd_tooltip";
    this.subLayerDisp.mc_items.mc_item1.mc_overlay.mouseChildren = false;
  };
  SeasonLeagueEndDialogRewardsEvent.prototype.onPassPurchased = function (e = null) {
    this.hasBoughtSeasonPassInThisDialog ||= true;
    this.updateInfo();
  };
  SeasonLeagueEndDialogRewardsEvent.prototype.onEventPassPurchased = function (e = null) {
    this.hasBoughtEventPassInThisDialog ||= true;
    this.updateInfo();
  };
  SeasonLeagueEndDialogRewardsEvent.prototype.onRewardHubPassPurchased = function (e = null) {
    this.hasBoughtRewardHubPassInThisDialog ||= true;
    this.updateInfo();
  };
  SeasonLeagueEndDialogRewardsEvent.prototype.updateRewards = function () {
    var e = this.dialogProperties.getPromotionRewardsVO();
    d.CollectableRenderHelper.displayMultipleItemsComplete(this, new p.CollectableRenderClipsList(this.subLayerDisp, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addBuildingLevelMc("parent.mc_buildingLevel"), e.normalRewards, new h.CollectableRenderOptions(h.CollectableRenderOptions.SET_ADVANCED, new g(55, 55)), function (e) {
      e.getRenderer(h.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = e.itemVE && e.itemVE.textfieldBackgroundVisible() ? 0 : 7;
    });
    d.CollectableRenderHelper.displayMultipleItemsComplete(new C.CollectableRendererList(), new p.CollectableRenderClipsList(this.subLayerDisp.mc_items, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addBuildingLevelMc("parent.mc_buildingLevel"), e.premiumRewards, new h.CollectableRenderOptions(h.CollectableRenderOptions.SET_ADVANCED, new g(55, 55)), function (e) {
      e.getRenderer(h.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = e.itemVE && e.itemVE.textfieldBackgroundVisible() ? 0 : 7;
    });
  };
  Object.defineProperty(SeasonLeagueEndDialogRewardsEvent.prototype, "dialogProperties", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogRewardsEvent.prototype, "isPassActive", {
    get: function () {
      return s.CastleModel.seasonLeagueData.server.passSeasonActive || this.dialogProperties.isEventPassEnabled || this.hasBoughtSeasonPassInThisDialog || this.hasBoughtEventPassInThisDialog || this.hasBoughtRewardHubPassInThisDialog || this.isRewardHubTierUnlocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogRewardsEvent.prototype, "isRewardHubTierUnlocked", {
    get: function () {
      return this.dialogProperties.rewardHubVO && this.dialogProperties.rewardHubVO.isExtraTierUnlocked;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueEndDialogRewardsEvent;
}(c.CastleDialogSubLayer);
exports.SeasonLeagueEndDialogRewardsEvent = I;
o.classImplementsInterfaces(I, "ICollectableRendererList", "ISublayer");