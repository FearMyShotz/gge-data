Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./26.js");
var c = require("./67.js");
var u = require("./19.js");
var d = require("./13.js");
var p = require("./4.js");
var h = require("./174.js");
var g = require("./42.js");
var C = require("./8.js");
var _ = require("./34.js");
var m = require("./807.js");
var f = createjs.Point;
var O = function (e) {
  function SeasonLeagueMainDialogSeasonRank(t) {
    var i = e.call(this, t) || this;
    i.init();
    return i;
  }
  n.__extends(SeasonLeagueMainDialogSeasonRank, e);
  SeasonLeagueMainDialogSeasonRank.prototype.init = function () {
    C.ButtonHelper.initButton(this.subLayerDisp.btn_rewards, -1, v.ClickFeedbackButtonBackground);
    C.ButtonHelper.initButton(this.subLayerDisp.mc_joinAlliance.btn_join, -1, S.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_rewards.txt_text, new s.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("rewards"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_medals.txt_medalsTitle, new s.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_seasonRanking_currentMedals_copy"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_allianceInfo.txt_text, new r.LocalizedTextVO("dialog_seasonLeague_seasonRankingAlliance_rankedByMedal_copy")).autoFitToBounds = true;
    var e = this.textFieldManager.registerTextField(this.subLayerDisp.mc_joinAlliance.txt_text, new r.LocalizedTextVO("dialog_seasonLeague_divisionRankingAlliance_joinAlliance_copy"));
    e.autoFitToBounds = true;
    e.verticalAlign = g.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.subLayerDisp.mc_joinAlliance.btn_join.toolTipText = "findAlliance_tooltip";
    this.subLayerDisp.mc_infoArea.toolTipText = "dialog_seasonLeague_seasonRanking_seasonRewards_tooltip";
    this._ranks = new I.SeasonLeagueMainDialogRanks(this.subLayerDisp.mc_rank, a.HighscoreConst.KINGDOMS_LEAGUE_SEASON, -1, false);
    this._rewards = new b.SeasonLeagueSimpleRewardsComponent(this.subLayerDisp.mc_rewards);
    this._rankType = new T.SeasonLeagueMainDialogRankType(this.subLayerDisp.mc_rankTypeSelector);
  };
  SeasonLeagueMainDialogSeasonRank.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this._ranks.highscore.onDataReceived.add(this.bindFunction(this.onHighscoreReceived));
    p.CastleModel.specialEventData.addEventListener(l.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventsChanged));
    p.CastleModel.specialEventData.addEventListener(l.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChanged));
    this.controller.addEventListener(h.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
    this.controller.addEventListener(h.SeasonLeagueEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    this._rankType.onTypeChanged.add(this.bindFunction(this.onRankTypeChanged));
    this._ranks.onShow();
    this._rewards.onShow();
    this._rankType.onShow();
    this.updateAllInfos();
    this._ranks.changeHighscoreId(this._rankType.getCurrentType() == T.SeasonLeagueMainDialogRankType.TYPE_PLAYER ? a.HighscoreConst.KINGDOMS_LEAGUE_SEASON : a.HighscoreConst.ALLIANCE_KINGDOMS_LEAGUE_SEASON);
    this._ranks.highscore.requestOwnRankFromServer();
    p.CastleModel.seasonLeagueData.server.requestKLH();
  };
  SeasonLeagueMainDialogSeasonRank.prototype.hide = function () {
    this._ranks.highscore.onDataReceived.remove(this.bindFunction(this.onHighscoreReceived));
    p.CastleModel.specialEventData.removeEventListener(l.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventsChanged));
    p.CastleModel.specialEventData.removeEventListener(l.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChanged));
    this.controller.removeEventListener(h.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
    this.controller.removeEventListener(h.SeasonLeagueEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    this._rankType.onTypeChanged.remove(this.bindFunction(this.onRankTypeChanged));
    this._ranks.onHide();
    this._rewards.onHide();
    this._rankType.onHide();
    e.prototype.hide.call(this);
  };
  SeasonLeagueMainDialogSeasonRank.prototype.updateAllInfos = function () {
    this.updateInfoBox();
    this.updateRewardInfo();
    this.updateLeftRewardSection();
  };
  SeasonLeagueMainDialogSeasonRank.prototype.updateLeftRewardSection = function () {
    this.subLayerDisp.mc_allianceInfo.visible = this._rankType.getCurrentType() == T.SeasonLeagueMainDialogRankType.TYPE_ALLIANCE;
  };
  SeasonLeagueMainDialogSeasonRank.prototype.updateInfoBox = function () {
    var e = this._ranks.highscore.getRawDataList();
    this.subLayerDisp.mc_info.visible = e && e.length <= 0;
    var t = "";
    t = this._rankType.getCurrentType() == T.SeasonLeagueMainDialogRankType.TYPE_PLAYER ? "dialog_seasonLeague_seasonRanking_nobodyQualified_copy" : "dialog_seasonLeague_seasonRankingAlliance_notQualified_copy";
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_info.txt_text, new r.LocalizedTextVO(t));
  };
  SeasonLeagueMainDialogSeasonRank.prototype.updateRewardInfo = function () {
    var e = this.subLayerDisp.mc_medals;
    var t = this.subLayerDisp.mc_rewards;
    var i = this._rankType.getCurrentType();
    this.subLayerDisp.mc_joinAlliance.visible = i == T.SeasonLeagueMainDialogRankType.TYPE_ALLIANCE && !p.CastleModel.userData.isInAlliance;
    if (this._rankType.getCurrentType() == T.SeasonLeagueMainDialogRankType.TYPE_ALLIANCE) {
      if (!this.subLayerDisp.mc_joinAlliance.visible) {
        t.visible = false;
        e.visible = true;
        E.CollectableRenderHelper.displayMultipleItemsComplete(this, new c.CollectableRenderClipsList(e, "mc_item"), p.CastleModel.seasonLeagueData.server.allianceMedals, new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_DEFAULT, new f(55, 55)));
      }
    } else {
      this.subLayerDisp.mc_joinAlliance.visible = false;
      var n = p.CastleModel.seasonLeagueData.server.getPlayerMedalAmount(A.ClientConstSeasonLeague.MEDAL_ID_GOLD) > 0;
      t.visible = n;
      e.visible = !n;
      if (n) {
        var o = p.CastleModel.seasonLeagueData.xml.getSeasonEndRewardForRank(p.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO().rewardSetId, p.CastleModel.seasonLeagueData.server.playerSeasonRank, p.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO().leaguetypeID);
        this._rewards.updateWithNewData(p.CastleModel.rewardData.getListByIdVector(o.rewardIds));
      } else {
        E.CollectableRenderHelper.displayMultipleItemsComplete(this, new c.CollectableRenderClipsList(e, "mc_item"), p.CastleModel.seasonLeagueData.server.playerMedals, new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_DEFAULT, new f(55, 55)));
      }
      var a = n ? "dialog_seasonLeague_seasonRanking_seasonReward_hasQualified_copy" : "dialog_seasonLeague_seasonRanking_seasonReward_notQualified_copy";
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewardsTitle, new s.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId(a))).autoFitToBounds = true;
    }
  };
  SeasonLeagueMainDialogSeasonRank.prototype.onClick = function (t) {
    if (C.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.subLayerDisp.btn_rewards:
          _.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(D.SeasonLeagueRewardOverviewDialog, new m.SeasonLeagueRewardOverviewDialogProperties(p.CastleModel.seasonLeagueData.xml.getSeasonEndRewardsAsOverviewItems(p.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO().rewardSetId, p.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO().leaguetypeID), "dialog_seasonLeague_seasonRewardDialog_header", "dialog_seasonLeague_seasonRewardDialog_copy", "help_seasonLeague_seasonRewardDialog"));
          break;
        case this.subLayerDisp.mc_joinAlliance.btn_join:
          _.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(y.CastleAllianceTeaserDialog);
      }
    }
  };
  SeasonLeagueMainDialogSeasonRank.prototype.onHighscoreReceived = function () {
    this.updateInfoBox();
  };
  SeasonLeagueMainDialogSeasonRank.prototype.onPlayerRankUpdated = function (e) {
    this.updateRewardInfo();
  };
  SeasonLeagueMainDialogSeasonRank.prototype.onSeasonInfoUpdated = function (e) {
    this.updateRewardInfo();
  };
  SeasonLeagueMainDialogSeasonRank.prototype.onEventsChanged = function (e) {
    this.updateAllInfos();
  };
  SeasonLeagueMainDialogSeasonRank.prototype.onRankTypeChanged = function () {
    this.updateAllInfos();
    this._ranks.changeHighscoreId(this._rankType.getCurrentType() == T.SeasonLeagueMainDialogRankType.TYPE_PLAYER ? a.HighscoreConst.KINGDOMS_LEAGUE_SEASON : a.HighscoreConst.ALLIANCE_KINGDOMS_LEAGUE_SEASON);
    this._ranks.highscore.reset();
    this._ranks.highscore.requestOwnRankFromServer();
  };
  return SeasonLeagueMainDialogSeasonRank;
}(_.CastleDialogSubLayer);
exports.SeasonLeagueMainDialogSeasonRank = O;
var E = require("./25.js");
var y = require("./388.js");
var b = require("./301.js");
var D = require("./656.js");
var I = require("./1657.js");
var T = require("./1658.js");
var v = require("./121.js");
var S = require("./36.js");
var A = require("./467.js");
o.classImplementsInterfaces(O, "ICollectableRendererList", "ISublayer");