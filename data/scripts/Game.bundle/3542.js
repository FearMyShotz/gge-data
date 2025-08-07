Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./13.js");
var c = require("./4.js");
var u = require("./174.js");
var d = require("./35.js");
var p = createjs.Point;
var h = function (e) {
  function SeasonLeagueMainDialogPromotion(t) {
    var i = e.call(this, t) || this;
    i.init();
    return i;
  }
  n.__extends(SeasonLeagueMainDialogPromotion, e);
  SeasonLeagueMainDialogPromotion.prototype.init = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new s.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_promotionRanks_header"))).autoFitToBounds = true;
    this._ranks = new C.SeasonLeagueMainDialogPromotionRanks(this.subLayerDisp.mc_ranks);
    y.ButtonHelper.initButtons([this.subLayerDisp.mc_promotion.btn_buy, this.subLayerDisp.mc_event.btn_buy], b.ClickFeedbackButtonHover);
  };
  SeasonLeagueMainDialogPromotion.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.controller.addEventListener(u.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
    this.controller.addEventListener(u.SeasonLeagueEvent.ON_PASS_SEASON_BOUGHT, this.bindFunction(this.onSeasonInfoUpdated));
    this.controller.addEventListener(u.SeasonLeagueEvent.ON_PASS_PROMOTION_BOUGHT, this.bindFunction(this.onSeasonInfoUpdated));
    this.controller.addEventListener(u.SeasonLeagueEvent.ON_PASS_EVENT_BOUGHT, this.bindFunction(this.onSeasonInfoUpdated));
    c.CastleModel.specialEventData.addEventListener(v.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this._ranks.onSelectionChanged.add(this.bindFunction(this.onSelectionChanged));
    this._ranks.onShow();
    this.updateAllInfos();
  };
  SeasonLeagueMainDialogPromotion.prototype.hide = function () {
    this.controller.removeEventListener(u.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
    this.controller.removeEventListener(u.SeasonLeagueEvent.ON_PASS_SEASON_BOUGHT, this.bindFunction(this.onSeasonInfoUpdated));
    this.controller.removeEventListener(u.SeasonLeagueEvent.ON_PASS_PROMOTION_BOUGHT, this.bindFunction(this.onSeasonInfoUpdated));
    this.controller.removeEventListener(u.SeasonLeagueEvent.ON_PASS_EVENT_BOUGHT, this.bindFunction(this.onSeasonInfoUpdated));
    c.CastleModel.specialEventData.removeEventListener(v.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this._ranks.onSelectionChanged.remove(this.bindFunction(this.onSelectionChanged));
    this._ranks.onHide();
    e.prototype.hide.call(this);
  };
  SeasonLeagueMainDialogPromotion.prototype.updateAllInfos = function () {
    S.MicroServiceRequestPreloader.hidePreloader();
    this.updateRewards();
  };
  SeasonLeagueMainDialogPromotion.prototype.updateRewards = function () {
    var e = a.Localize.text(c.CastleModel.seasonLeagueData.xml.getPromotion(this._ranks.currentSelectedId).getNameTextId());
    var t = r.int(c.CastleModel.seasonLeagueData.xml.getHighestPromotion().id);
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_promotion.txt_copy, new s.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId(this._ranks.currentSelectedId == t ? "dialog_seasonLeague_promotionRanks_promotionRewardFinal_text" : "dialog_seasonLeague_promotionRanks_promotionReward_text", [e]))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_event.txt_copy, new s.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_promotionRanks_evenEndReward_text", [e]))).autoFitToBounds = true;
    var i = a.Localize.text(c.CastleModel.seasonLeagueData.server.passSeasonActive ? "status_active" : "status_inactive");
    var n = a.Localize.text(c.CastleModel.seasonLeagueData.server.passEventActive ? "status_active" : "status_inactive");
    var o = a.Localize.text(this.promotionPassActive ? "status_active" : "status_inactive");
    this.subLayerDisp.mc_promotion.mc_info.toolTipText = a.Localize.text("dialog_seasonLeague_promotionRanks_promotionReward_tooltip", [i, o]);
    this.subLayerDisp.mc_event.mc_info.toolTipText = a.Localize.text("dialog_seasonLeague_promotionRanks_evenEndReward_tooltip", [i, n]);
    this.renderRewardColumn(this.subLayerDisp.mc_promotion, this.getCurrentPromotionRewardsVO(), false);
    this.renderRewardColumn(this.subLayerDisp.mc_event, this.getCurrentEventRewardsVO(), true);
  };
  Object.defineProperty(SeasonLeagueMainDialogPromotion.prototype, "promotionPassActive", {
    get: function () {
      return c.CastleModel.seasonLeagueData.server.boughtPromoPassForPromoID(this._ranks.currentSelectedId);
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueMainDialogPromotion.prototype.renderRewardColumn = function (e, t, i) {
    e.mc_item0.mc_background.visible = false;
    e.mc_item0.mc_overlay.visible = false;
    e.mc_item1.mc_background.visible = false;
    e.mc_item1.mc_overlay.visible = false;
    e.mc_item0.mc_background_locked.visible = false;
    e.mc_item1.mc_background_locked.visible = false;
    this.renderRewards(t.normalRewards, e);
    this.renderRewards(t.premiumRewards, e.mc_premiumRewards);
    var n = t.premiumRewards.length > 0;
    var o = i ? c.CastleModel.seasonLeagueData.server.passEventActive : this.promotionPassActive;
    e.mc_check0.visible = t.hasCollectedNormal && n;
    e.mc_check1.visible = t.hasCollectedPremium && n;
    e.btn_buy.visible = !t.hasCollectedPremium && !o && !c.CastleModel.seasonLeagueData.server.passSeasonActive && n;
    e.btn_buy.toolTipText = "dialog_seasonLeague_infoSection_seasonPassPurchase_button";
    e.mc_promotionPass.visible = !i && !t.hasCollectedPremium && o && !c.CastleModel.seasonLeagueData.server.passSeasonActive && n;
    e.mc_eventPass.visible = i && !t.hasCollectedPremium && o && !c.CastleModel.seasonLeagueData.server.passSeasonActive && n;
    e.mc_seasonPass.visible = !t.hasCollectedPremium && c.CastleModel.seasonLeagueData.server.passSeasonActive && n;
    var a = !o && !c.CastleModel.seasonLeagueData.server.passSeasonActive && n;
    e.mc_premiumRewards.mc_item0.mc_overlay.toolTipText = i ? "dialog_seasonLeague_eventRewards_locked_tooltip" : "dialog_seasonLeague_promotionRewards_locked_tooltip";
    e.mc_premiumRewards.mc_item1.mc_overlay.toolTipText = i ? "dialog_seasonLeague_eventRewards_locked_tooltip" : "dialog_seasonLeague_promotionRewards_locked_tooltip";
    e.mc_premiumRewards.mc_item0.mc_overlay.visible = a;
    e.mc_premiumRewards.mc_item0.mc_overlay.mouseChildren = false;
    e.mc_premiumRewards.mc_item1.mc_overlay.mouseChildren = false;
    e.mc_premiumRewards.mc_item0.mc_background_locked.visible = a;
    e.mc_premiumRewards.mc_item1.mc_background_locked.visible = a;
    e.mc_premiumRewards.mc_item1.mc_overlay.visible = a;
    e.mc_premiumRewards.mc_item0.mc_background.visible = (o || c.CastleModel.seasonLeagueData.server.passSeasonActive) && n;
    e.mc_premiumRewards.mc_item1.mc_background.visible = (o || c.CastleModel.seasonLeagueData.server.passSeasonActive) && n;
  };
  SeasonLeagueMainDialogPromotion.prototype.renderRewards = function (e, t) {
    _.CollectableRenderHelper.displayMultipleItemsComplete(new O.CollectableRendererList(), new m.CollectableRenderClipsList(t, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addBuildingLevelMc("parent.mc_buildingLevel"), e, new f.CollectableRenderOptions(f.CollectableRenderOptions.SET_ADVANCED, new p(55, 55)), function (e) {
      e.getRenderer(f.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = e.itemVE && e.itemVE.textfieldBackgroundVisible() ? 0 : 7;
    });
  };
  SeasonLeagueMainDialogPromotion.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    var i = this._ranks.currentSelectedId > c.CastleModel.seasonLeagueData.server.promotionId;
    switch (t.target) {
      case this.subLayerDisp.mc_promotion.btn_buy:
        E.CastleDialogHandler.getInstance().registerDialogs(A.SeasonLeagueBuyPassConfirmWithSeasonOptionDialog, new D.SeasonLeagueBuyPassConfirmDialogProperties(new I.CollectableItemSeasonLeaguePromotionPassVO(), i ? c.CastleModel.seasonLeagueData.currentSetting.seasonPassPromotionSalePrice : c.CastleModel.seasonLeagueData.currentSetting.seasonPassPromotionPrice, i ? c.CastleModel.seasonLeagueData.currentSetting.seasonPassSingleDiscount : 0, this._ranks.currentSelectedId, -1, -1));
        break;
      case this.subLayerDisp.mc_event.btn_buy:
        E.CastleDialogHandler.getInstance().registerDialogs(A.SeasonLeagueBuyPassConfirmWithSeasonOptionDialog, new D.SeasonLeagueBuyPassConfirmDialogProperties(new T.CollectableItemSeasonLeagueEventPassVO(), c.CastleModel.seasonLeagueData.currentSetting.seasonPassEventSalePrice, c.CastleModel.seasonLeagueData.currentSetting.seasonPassSingleDiscount, this._ranks.currentSelectedId, -1, -1));
    }
  };
  SeasonLeagueMainDialogPromotion.prototype.getCurrentPromotionRewardsVO = function () {
    var e = r.int(c.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO().rewardSetId);
    var t = r.int(c.CastleModel.seasonLeagueData.server.promotionId);
    var i = this._ranks.currentSelectedId;
    var n = r.int(c.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO().leaguetypeID);
    var o = new g.SeasonLeaguePromotionRewardsComponentVO();
    o.normalRewards = c.CastleModel.seasonLeagueData.xml.getPromotionRewards(e, i, false, n);
    o.premiumRewards = c.CastleModel.seasonLeagueData.xml.getPromotionRewards(e, i, true, n);
    o.hasCollectedNormal = i <= t;
    o.hasCollectedPremium = o.hasCollectedNormal && (c.CastleModel.seasonLeagueData.server.boughtPromoPassForPromoID(this._ranks.currentSelectedId) || c.CastleModel.seasonLeagueData.server.passSeasonActive);
    o.isUnlocked = c.CastleModel.seasonLeagueData.server.passSeasonActive;
    return o;
  };
  SeasonLeagueMainDialogPromotion.prototype.getCurrentEventRewardsVO = function () {
    var e = r.int(c.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO().rewardSetId);
    var t = c.CastleModel.seasonLeagueData.getActiveSeasonEventVO();
    var i = r.int(t ? t.eventId : -1);
    var n = this._ranks.currentSelectedId;
    var o = new g.SeasonLeaguePromotionRewardsComponentVO();
    o.normalRewards = c.CastleModel.seasonLeagueData.xml.getSeasonEventRewards(e, i, n, false);
    o.premiumRewards = c.CastleModel.seasonLeagueData.xml.getSeasonEventRewards(e, i, n, true);
    o.hasCollectedNormal = false;
    o.hasCollectedPremium = false;
    o.isUnlocked = c.CastleModel.seasonLeagueData.server.passSeasonActive;
    return o;
  };
  SeasonLeagueMainDialogPromotion.prototype.onSeasonInfoUpdated = function (e) {
    this.updateAllInfos();
    this._ranks.update();
  };
  SeasonLeagueMainDialogPromotion.prototype.onRemoveEvent = function (e) {
    if (e.specialEventVO.seasonLeague.isModeEnabled) {
      this.updateAllInfos();
    }
  };
  SeasonLeagueMainDialogPromotion.prototype.onSelectionChanged = function () {
    this.updateRewards();
  };
  return SeasonLeagueMainDialogPromotion;
}(d.CastleDialogSubLayer);
exports.SeasonLeagueMainDialogPromotion = h;
var g = require("./1068.js");
var C = require("./3543.js");
var _ = require("./25.js");
var m = require("./67.js");
var f = require("./19.js");
var O = require("./104.js");
var E = require("./9.js");
var y = require("./8.js");
var b = require("./20.js");
var D = require("./403.js");
var I = require("./543.js");
var T = require("./651.js");
var v = require("./26.js");
var S = require("./549.js");
var A = require("./1711.js");
o.classImplementsInterfaces(h, "ICollectableRendererList", "ISublayer");