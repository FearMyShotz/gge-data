Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./28.js");
var d = require("./21.js");
var p = require("./26.js");
var h = require("./13.js");
var g = require("./4.js");
var C = require("./27.js");
var _ = require("./8.js");
var m = require("./11.js");
var f = createjs.Point;
var O = function (e) {
  function SeasonLeagueBuyPassesDialog() {
    return e.call(this, SeasonLeagueBuyPassesDialog.NAME) || this;
  }
  n.__extends(SeasonLeagueBuyPassesDialog, e);
  SeasonLeagueBuyPassesDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    _.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.mc_bottom_season.mc_inactive.btn_buy, this.dialogDisp.mc_bottom_event.mc_inactive.btn_buy, this.dialogDisp.mc_bottom_promotion.mc_inactive.btn_buy], E.ClickFeedbackButton);
  };
  SeasonLeagueBuyPassesDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    D.BasicModel.smartfoxClient.sendCommandVO(new I.C2SGetSeasonPassPriceInfoEventVO());
    g.CastleModel.timerData.addEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    g.CastleModel.specialEventData.addEventListener(p.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    y.CastleBasicController.getInstance().addEventListener(b.SeasonLeagueEvent.ON_PASS_PRICES_UPDATED, this.bindFunction(this.onRefreshSpecialEvent));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_rewardPassHub_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title1, new s.LocalizedTextVO("seasonLeague_seasonPass_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title2, new s.LocalizedTextVO("seasonLeague_eventPass_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title3, new s.LocalizedTextVO("seasonLeague_promotionPass_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new s.LocalizedTextVO("seasonLeague_seasonPass_short_info")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new s.LocalizedTextVO("seasonLeague_eventPass_short_info")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy3, new s.LocalizedTextVO("seasonLeague_promotionPass_short_info")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1_1, new s.LocalizedTextVO("dialog_seasonLeague_rewardPassHub_seasonPass_rewards_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_season.mc_activeEvent.txt_copy, new s.LocalizedTextVO("eventEnd_colon"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_event.mc_activeEvent.txt_copy, new s.LocalizedTextVO("eventEnd_colon"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_promotion.mc_activeEvent.txt_copy, new s.LocalizedTextVO("eventEnd_colon"));
    this.updateInfos();
    this.updateSale();
    this.updateRewards();
  };
  SeasonLeagueBuyPassesDialog.prototype.hideLoaded = function (t = null) {
    g.CastleModel.timerData.removeEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    g.CastleModel.specialEventData.removeEventListener(p.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    y.CastleBasicController.getInstance().removeEventListener(b.SeasonLeagueEvent.ON_PASS_PRICES_UPDATED, this.bindFunction(this.onRefreshSpecialEvent));
    e.prototype.hideLoaded.call(this, t);
  };
  SeasonLeagueBuyPassesDialog.prototype.updateSale = function () {
    this.dialogDisp.mc_bottom_season.mc_inactive.mc_discount.visible = this.seasonPassSale > 0;
    this.dialogDisp.mc_bottom_event.mc_inactive.mc_discount.visible = this.dialogProps.useEventSale;
    this.dialogDisp.mc_bottom_promotion.mc_inactive.mc_discount.visible = this.isPromotionOnSale;
    if (this.seasonPassSale > 0) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_season.mc_inactive.mc_discount.txt_value, new s.LocalizedTextVO("value_percentage_subtract", [this.seasonPassSale])).autoFitToBounds = true;
    }
    if (this.dialogProps.useEventSale) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_event.mc_inactive.mc_discount.txt_value, new s.LocalizedTextVO("value_percentage_subtract", [g.CastleModel.seasonLeagueData.currentSetting.seasonPassSingleDiscount])).autoFitToBounds = true;
    }
    if (this.isPromotionOnSale) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_promotion.mc_inactive.mc_discount.txt_value, new s.LocalizedTextVO("value_percentage_subtract", [g.CastleModel.seasonLeagueData.currentSetting.seasonPassSingleDiscount])).autoFitToBounds = true;
    }
  };
  Object.defineProperty(SeasonLeagueBuyPassesDialog.prototype, "isPromotionOnSale", {
    get: function () {
      return this.dialogProps.usePromotionSale || this.dialogProps.promotionID > g.CastleModel.seasonLeagueData.server.promotionId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueBuyPassesDialog.prototype, "seasonPassSale", {
    get: function () {
      return Math.max(g.CastleModel.seasonLeagueData.server.seasonPassDiscount, g.CastleModel.seasonLeagueData.currentSetting.seasonPassFullDiscount);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueBuyPassesDialog.prototype, "eventPassPrice", {
    get: function () {
      if (this.dialogProps.useEventSale) {
        return g.CastleModel.seasonLeagueData.currentSetting.seasonPassEventSalePrice;
      } else {
        return g.CastleModel.seasonLeagueData.currentSetting.seasonPassEventEndPrice;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueBuyPassesDialog.prototype, "promotionPassPrice", {
    get: function () {
      if (this.isPromotionOnSale) {
        return g.CastleModel.seasonLeagueData.currentSetting.seasonPassPromotionSalePrice;
      } else {
        return g.CastleModel.seasonLeagueData.currentSetting.seasonPassPromotionPrice;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueBuyPassesDialog.prototype, "promotionPassActive", {
    get: function () {
      return g.CastleModel.seasonLeagueData.server.boughtPromoPassForPromoID(this.dialogProps.promotionID);
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueBuyPassesDialog.prototype.updateInfos = function () {
    B.MicroServiceRequestPreloader.hidePreloader();
    var e = c.int(g.CastleModel.seasonLeagueData.getCurrentSeasonPassCostWithSale());
    this.dialogDisp.mc_bottom_season.mc_inactive.visible = !g.CastleModel.seasonLeagueData.server.passSeasonActive && e > 0;
    this.dialogDisp.mc_bottom_event.mc_inactive.visible = !g.CastleModel.seasonLeagueData.server.passEventActive && !g.CastleModel.seasonLeagueData.server.passSeasonActive && this.activeEventID > 0;
    this.dialogDisp.mc_bottom_promotion.mc_inactive.visible = !this.promotionPassActive && !g.CastleModel.seasonLeagueData.server.passSeasonActive && this.promotionRewards.length > 0;
    this.dialogDisp.mc_bottom_season.mc_activeEvent.visible = false;
    this.dialogDisp.mc_bottom_event.mc_activeEvent.visible = (g.CastleModel.seasonLeagueData.server.passSeasonActive || g.CastleModel.seasonLeagueData.server.passEventActive) && g.CastleModel.seasonLeagueData.isAnySeasonEventActive();
    this.dialogDisp.mc_bottom_promotion.mc_activeEvent.visible = false;
    this.dialogDisp.mc_bottom_season.mc_active.visible = g.CastleModel.seasonLeagueData.server.passSeasonActive;
    this.dialogDisp.mc_bottom_event.mc_active.visible = false;
    this.dialogDisp.mc_bottom_promotion.mc_active.visible = g.CastleModel.seasonLeagueData.server.passSeasonActive || this.promotionPassActive;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_season.mc_inactive.btn_buy.txt_value, new a.LocalizedNumberVO(e)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_event.mc_inactive.btn_buy.txt_value, new a.LocalizedNumberVO(this.eventPassPrice)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_promotion.mc_inactive.btn_buy.txt_value, new a.LocalizedNumberVO(this.promotionPassPrice)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_season.mc_active.txt_copy, new s.LocalizedTextVO("rewardPass_condition_durationSeasonEnd_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_event.mc_active.txt_copy, new s.LocalizedTextVO(" "));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_promotion.mc_active.txt_copy, new s.LocalizedTextVO("rewardPass_condition_toNextPromotion_desc"));
    if (this.dialogDisp.mc_bottom_event.mc_activeEvent.visible) {
      var t = g.CastleModel.seasonLeagueData.getActiveSeasonEventVO();
      var i = c.int(t ? t.remainingEventTimeInSeconds : -1);
      this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_event.mc_activeEvent.txt_time, new r.TextVO(C.CastleTimeStringHelper.getEventTimeString(i, u.ClientConstTime.SECONDS_PER_DAY, 1))).autoFitToBounds = true;
    }
  };
  SeasonLeagueBuyPassesDialog.prototype.updateRewards = function () {
    var e = new L.CollectableList();
    if (this.activeEventID > 0) {
      e = g.CastleModel.seasonLeagueData.xml.getSeasonEventRewards(this.dialogProps.rewardSetID, this.activeEventID, g.CastleModel.seasonLeagueData.server.promotionId, true);
    }
    T.CollectableRenderHelper.displayMultipleItemsComplete(this, new v.CollectableRenderClipsList(this.dialogDisp, "mc_item1_").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addBuildingLevelMc("parent.mc_buildingLevel"), e, new S.CollectableRenderOptions(S.CollectableRenderOptions.SET_ADVANCED, new f(55, 55)), function (e) {
      e.getRenderer(S.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = e.itemVE && e.itemVE.textfieldBackgroundVisible() ? 0 : 7;
    });
    T.CollectableRenderHelper.displayMultipleItemsComplete(new A.CollectableRendererList(), new v.CollectableRenderClipsList(this.dialogDisp, "mc_item2_").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addBuildingLevelMc("parent.mc_buildingLevel"), this.promotionRewards, new S.CollectableRenderOptions(S.CollectableRenderOptions.SET_ADVANCED, new f(55, 55)), function (e) {
      e.getRenderer(S.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = e.itemVE && e.itemVE.textfieldBackgroundVisible() ? 0 : 7;
    });
  };
  Object.defineProperty(SeasonLeagueBuyPassesDialog.prototype, "activeEventID", {
    get: function () {
      if (this.dialogProps.eventID > 0) {
        return this.dialogProps.eventID;
      } else if (g.CastleModel.seasonLeagueData.isAnySeasonEventActive()) {
        return g.CastleModel.seasonLeagueData.getActiveSeasonEventVO().eventId;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueBuyPassesDialog.prototype, "promotionRewards", {
    get: function () {
      return g.CastleModel.seasonLeagueData.xml.getPromotionRewards(this.dialogProps.rewardSetID, this.dialogProps.promotionID > 0 ? this.dialogProps.promotionID : g.CastleModel.seasonLeagueData.getCurrentPlayerPromotion().id, true, this.dialogProps.leagueTypeID);
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueBuyPassesDialog.prototype.onClick = function (t) {
    if (_.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.mc_bottom_season.mc_inactive.btn_buy:
          P.CastleDialogHandler.getInstance().registerDialogs(M.SeasonLeagueBuyPassConfirmDialog, new R.SeasonLeagueBuyPassConfirmDialogProperties(new V.CollectableItemSeasonLeagueSeasonPassVO(), g.CastleModel.seasonLeagueData.getCurrentSeasonPassCostWithSale(), this.seasonPassSale, g.CastleModel.seasonLeagueData.server.promotionId, this.activeEventID, this.dialogProps.instanceID));
          break;
        case this.dialogDisp.mc_bottom_event.mc_inactive.btn_buy:
          P.CastleDialogHandler.getInstance().registerDialogs(F.SeasonLeagueBuyPassConfirmWithSeasonOptionDialog, new R.SeasonLeagueBuyPassConfirmDialogProperties(new x.CollectableItemSeasonLeagueEventPassVO(), this.eventPassPrice, this.dialogProps.useEventSale ? g.CastleModel.seasonLeagueData.currentSetting.seasonPassSingleDiscount : 0, g.CastleModel.seasonLeagueData.server.promotionId, this.dialogProps.eventID, this.dialogProps.instanceID));
          break;
        case this.dialogDisp.mc_bottom_promotion.mc_inactive.btn_buy:
          P.CastleDialogHandler.getInstance().registerDialogs(F.SeasonLeagueBuyPassConfirmWithSeasonOptionDialog, new R.SeasonLeagueBuyPassConfirmDialogProperties(new w.CollectableItemSeasonLeaguePromotionPassVO(), this.promotionPassPrice, this.dialogProps.usePromotionSale ? g.CastleModel.seasonLeagueData.currentSetting.seasonPassSingleDiscount : 0, this.dialogProps.promotionID > -1 ? this.dialogProps.promotionID : g.CastleModel.seasonLeagueData.server.promotionId, this.activeEventID, this.dialogProps.instanceID));
          break;
        case this.dialogDisp.btn_help:
          P.CastleDialogHandler.getInstance().showHelper(" ", l.Localize.text("help_seasonLeague_rewardPassHub"));
      }
    }
  };
  SeasonLeagueBuyPassesDialog.prototype.onTickEvent = function (e) {
    this.updateInfos();
  };
  SeasonLeagueBuyPassesDialog.prototype.onRefreshSpecialEvent = function (e) {
    this.updateSale();
    this.updateInfos();
  };
  Object.defineProperty(SeasonLeagueBuyPassesDialog.prototype, "dialogProps", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueBuyPassesDialog.NAME = "SeasonLeagueBuyPasses";
  return SeasonLeagueBuyPassesDialog;
}(m.CastleExternalDialog);
exports.SeasonLeagueBuyPassesDialog = O;
var E = require("./36.js");
var y = require("./15.js");
var b = require("./174.js");
var D = require("./2.js");
var I = require("./1064.js");
var T = require("./25.js");
var v = require("./67.js");
var S = require("./19.js");
var A = require("./104.js");
var L = require("./48.js");
var P = require("./9.js");
var M = require("./548.js");
var R = require("./403.js");
var V = require("./650.js");
var x = require("./651.js");
var w = require("./543.js");
var B = require("./549.js");
var F = require("./1711.js");
o.classImplementsInterfaces(O, "ICollectableRendererList");