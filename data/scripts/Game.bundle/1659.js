Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./84.js");
var u = require("./13.js");
var d = require("./4.js");
var p = require("./174.js");
var h = require("./955.js");
var g = require("./956.js");
var C = createjs.Point;
var _ = function (e) {
  function SeasonLeagueMainDialogInfo(t) {
    return e.call(this, t) || this;
  }
  n.__extends(SeasonLeagueMainDialogInfo, e);
  SeasonLeagueMainDialogInfo.prototype.init = function () {
    e.prototype.init.call(this);
    this.subLayerDisp.mc_promotion.mouseChildren = false;
    this.subLayerDisp.mc_rank.mouseChildren = false;
    this.subLayerDisp.mc_pass.mouseChildren = false;
    D.ButtonHelper.initButtons([this.subLayerDisp.mc_passesActivated.btn_buy], I.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new a.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_infoSection_tab_tooltip"))).autoFitToBounds = true;
    this.subLayerDisp.mc_rank.toolTipText = "dialog_seasonLeague_divisionRanking_tooltip";
    this.subLayerDisp.mc_pass.toolTipText = "dialog_seasonLeague_infoSection_seasonPass_header";
    this.subLayerDisp.mc_passesActivated.btn_buy.toolTipText = "dialog_seasonLeague_infoSection_seasonPassPurchase_button";
    this.topics.init(this.getTopics(), SeasonLeagueMainDialogInfo.TOPIC_ASSET_CLIP_NAME, b.SeasonLeagueMainDialog.NAME, SeasonLeagueMainDialogInfo.TOPIC_MASK_HEIGHT);
    this.addPage(SeasonLeagueMainDialogInfo.PAGE_MEDALS, E.SeasonLeagueMainDialogInfoPageMedals, this.subLayerDisp.mc_pages.mc_pageMedals);
    this.addPage(SeasonLeagueMainDialogInfo.PAGE_PASS, y.SeasonLeagueMainDialogInfoPagePass, this.subLayerDisp.mc_pages.mc_pagePass);
    this.addPage(SeasonLeagueMainDialogInfo.PAGE_TEXT, m.InfoCatalogPageScrollText, this.subLayerDisp.mc_pages.mc_pageText);
    this.addPage(SeasonLeagueMainDialogInfo.PAGE_PASSES, S.SeasonLeagueMainDialogInfoPagePasses, this.subLayerDisp.mc_pages.mc_pagePasses);
    this._promotionIcon = new f.SeasonLeaguePromotionIconComponent(this.subLayerDisp.mc_promotion.mc_icon, f.SeasonLeaguePromotionIconComponent.TYPE_NORMAL, new C(90, 90));
  };
  SeasonLeagueMainDialogInfo.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.controller.addEventListener(p.SeasonLeagueEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    this.controller.addEventListener(p.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    this.updateTopInfos();
    d.CastleModel.seasonLeagueData.server.requestKLH();
  };
  SeasonLeagueMainDialogInfo.prototype.hide = function () {
    this.controller.removeEventListener(p.SeasonLeagueEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    this.controller.removeEventListener(p.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    e.prototype.hide.call(this);
  };
  SeasonLeagueMainDialogInfo.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.mc_passesActivated.btn_buy:
        T.CastleDialogHandler.getInstance().registerDialogs(v.SeasonLeagueBuyPassesDialog, new A.SeasonLeagueBuyPassesDialogProperties(true, true, -1, -1, d.CastleModel.seasonLeagueData.getCurrentPlayerPromotion().id + 1, -1, -1));
    }
  };
  SeasonLeagueMainDialogInfo.prototype.updateInfoPage = function (e, t) {
    switch (t.topicType) {
      case O.SeasonLeagueMainDialogInfoEnum.TOPIC_PASS_SEASON:
        e.update("season");
        break;
      case O.SeasonLeagueMainDialogInfoEnum.TOPIC_PASS_EVENT:
        e.update("event");
        break;
      case O.SeasonLeagueMainDialogInfoEnum.TOPIC_PASS_PROMOTION:
        e.update("promotion");
        break;
      case O.SeasonLeagueMainDialogInfoEnum.TOPIC_MEDALS:
      case O.SeasonLeagueMainDialogInfoEnum.TOPIC_PASS:
        e.update();
        break;
      default:
        e.fillContent("dialog_seasonLeague_infoSection_" + t.topicType.name + "_text_1", [d.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO().minLevel]);
    }
  };
  SeasonLeagueMainDialogInfo.prototype.updateTopInfos = function () {
    var e = d.CastleModel.seasonLeagueData.getCurrentPlayerPromotion();
    this._promotionIcon.updateWithNewVO(e);
    this.subLayerDisp.mc_promotion.toolTipText = e.getNameTextId();
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_promotion.txt_text, new a.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId(e.getNameTextId()))).autoFitToBounds = true;
    var t = l.int(d.CastleModel.seasonLeagueData.server.playerSeasonEventRank);
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_rank.txt_text, t > 0 ? new r.LocalizedNumberVO(t) : new a.TextVO("-")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_pass.txt_text, new s.LocalizedTextVO("dialog_seasonLeague_infoSection_seasonPassActive_text")).autoFitToBounds = true;
    this.subLayerDisp.mc_pass.visible = d.CastleModel.seasonLeagueData.server.passSeasonActive;
    this.subLayerDisp.mc_passesActivated.visible = !d.CastleModel.seasonLeagueData.server.passSeasonActive;
    if (this.subLayerDisp.mc_passesActivated.visible) {
      this.subLayerDisp.mc_passesActivated.mc_eventActive.visible = d.CastleModel.seasonLeagueData.server.passEventActive;
      this.subLayerDisp.mc_passesActivated.mc_eventInactive.visible = !d.CastleModel.seasonLeagueData.server.passEventActive;
      var i = false;
      var n = "dialog_seasonLeague_infoSection_promotionPassInactive_text";
      if (d.CastleModel.seasonLeagueData.hasReachedHighestPromotion()) {
        i = true;
        n = "rewardPass_condition_topPromotion_desc";
      } else if (d.CastleModel.seasonLeagueData.server.amountOfBoughtPromoPasses > 1) {
        i = true;
        n = "dialog_seasonLeague_infoSection_promotionPassActiveMultiple_text";
      } else if (i = d.CastleModel.seasonLeagueData.server.boughtPromoPassForPromoID(d.CastleModel.seasonLeagueData.getCurrentPlayerPromotion().id + 1)) {
        n = "dialog_seasonLeague_infoSection_promotionPassActive_text";
      }
      this.subLayerDisp.mc_passesActivated.mc_promotionActive.visible = i;
      this.subLayerDisp.mc_passesActivated.mc_promotionInactive.visible = !i;
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_passesActivated.txt_event, new s.LocalizedTextVO(d.CastleModel.seasonLeagueData.server.passEventActive ? "dialog_seasonLeague_infoSection_eventPassActive_text" : "dialog_seasonLeague_infoSection_eventPassInactive_text"));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_passesActivated.txt_promotion, new s.LocalizedTextVO(n, [d.CastleModel.seasonLeagueData.server.amountOfBoughtPromoPasses]));
    }
  };
  SeasonLeagueMainDialogInfo.prototype.getTopics = function () {
    var e = [];
    for (var t = 0, i = c.CastleEnum.getEnumListByClass(O.SeasonLeagueMainDialogInfoEnum); t < i.length; t++) {
      var n = i[t];
      e.push(new g.InfoCatalogTopicVO(n, "dialog_seasonLeague_infoSection_" + n.name + "_header"));
    }
    return e;
  };
  SeasonLeagueMainDialogInfo.prototype.onPlayerRankUpdated = function (e) {
    this.updateTopInfos();
  };
  SeasonLeagueMainDialogInfo.TOPIC_ASSET_CLIP_NAME = "SeasonLeagueMain_Info_Topic_Item";
  SeasonLeagueMainDialogInfo.TOPIC_MASK_HEIGHT = 332;
  SeasonLeagueMainDialogInfo.PAGE_MEDALS = "pageMedals";
  SeasonLeagueMainDialogInfo.PAGE_PASS = "pagePass";
  SeasonLeagueMainDialogInfo.PAGE_TEXT = "pageText";
  SeasonLeagueMainDialogInfo.PAGE_PASSES = "pagePasses";
  return SeasonLeagueMainDialogInfo;
}(h.AModernInfoCatalogDialogSublayer);
exports.SeasonLeagueMainDialogInfo = _;
var m = require("./748.js");
var f = require("./359.js");
var O = require("./3421.js");
var E = require("./3422.js");
var y = require("./3423.js");
var b = require("./806.js");
var D = require("./8.js");
var I = require("./20.js");
var T = require("./9.js");
var v = require("./808.js");
var S = require("./3542.js");
var A = require("./1069.js");
o.classImplementsInterfaces(_, "ICollectableRendererList", "ISublayer");