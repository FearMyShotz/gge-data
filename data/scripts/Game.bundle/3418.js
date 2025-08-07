Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./21.js");
var d = require("./102.js");
var p = require("./26.js");
var h = require("./31.js");
var g = require("./19.js");
var C = require("./13.js");
var _ = require("./4.js");
var m = require("./467.js");
var f = require("./174.js");
var O = require("./27.js");
var E = require("./42.js");
var y = require("./8.js");
var b = require("./34.js");
var D = require("./807.js");
var I = createjs.Point;
var T = function (e) {
  function SeasonLeagueMainDialogEventRank(t) {
    var i = this;
    i._currentlyShowsRanking = false;
    i._currentDivisionSize = -1;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(SeasonLeagueMainDialogEventRank, e);
  SeasonLeagueMainDialogEventRank.prototype.init = function () {
    y.ButtonHelper.initButton(this.subLayerDisp.mc_payout.btn_rewards, -1, w.ClickFeedbackButtonBackground);
    y.ButtonHelper.initButton(this.subLayerDisp.mc_joinAlliance.btn_join, -1, B.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_payout.btn_rewards.txt_text, new r.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_divisionRanking_medalsoverviewButton_text"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_currentEvent, new r.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("currentEvent"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_allianceInfo.txt_text, new l.LocalizedTextVO("dialog_seasonLeague_divisionRankingAlliance_playerPointContribution_text")).autoFitToBounds = true;
    var e = this.textFieldManager.registerTextField(this.subLayerDisp.mc_joinAlliance.txt_text, new l.LocalizedTextVO("dialog_seasonLeague_divisionRankingAlliance_joinAlliance_copy"));
    e.autoFitToBounds = true;
    e.verticalAlign = E.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.subLayerDisp.mc_joinAlliance.btn_join.toolTipText = "findAlliance_tooltip";
    this._ranks = new V.SeasonLeagueMainDialogRanks(this.subLayerDisp.mc_rank, s.HighscoreConst.KINGDOMS_LEAGUE_SEASON_EVENT, -1, true);
    this._promotionIcon = new P.SeasonLeaguePromotionIconComponent(this.subLayerDisp.mc_promotion.mc_icon, P.SeasonLeaguePromotionIconComponent.TYPE_NORMAL, new I(80, 80));
    this._promotionBar = new M.SeasonLeaguePromotionProgressBarComponent(this.subLayerDisp.mc_promotion.mc_progress);
    this._rankType = new x.SeasonLeagueMainDialogRankType(this.subLayerDisp.mc_rankTypeSelector);
    this.subLayerDisp.mc_payout.mc_time.mouseChildren = false;
  };
  SeasonLeagueMainDialogEventRank.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    _.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    _.CastleModel.specialEventData.addEventListener(p.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventsChanged));
    _.CastleModel.specialEventData.addEventListener(p.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChanged));
    _.CastleModel.allianceData.addEventListener(d.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceInfoUpdated));
    this.controller.addEventListener(f.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
    this.controller.addEventListener(f.SeasonLeagueEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    this._rankType.onTypeChanged.add(this.bindFunction(this.onRankTypeChanged));
    this._rankType.onShow();
    this._ranks.onShow();
    this._currentDivisionSize = c.int(_.CastleModel.seasonLeagueData.server.divisionSize);
    this._currentlyShowsRanking = _.CastleModel.seasonLeagueData.isAnySeasonEventActive();
    this._ranks.highscore.requestDataEnabled = this._currentlyShowsRanking;
    this.updateHighscoreId();
    if (this._currentlyShowsRanking) {
      this._ranks.highscore.requestOwnRankFromServer();
    }
    _.CastleModel.seasonLeagueData.server.requestKLH();
    this.updateAllInfos();
  };
  SeasonLeagueMainDialogEventRank.prototype.hide = function () {
    _.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    _.CastleModel.specialEventData.removeEventListener(p.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventsChanged));
    _.CastleModel.specialEventData.removeEventListener(p.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChanged));
    _.CastleModel.allianceData.removeEventListener(d.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceInfoUpdated));
    this.controller.removeEventListener(f.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
    this.controller.removeEventListener(f.SeasonLeagueEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    this._rankType.onTypeChanged.remove(this.bindFunction(this.onRankTypeChanged));
    this._rankType.onHide();
    this._ranks.onHide();
    e.prototype.hide.call(this);
  };
  SeasonLeagueMainDialogEventRank.prototype.updateAllInfos = function () {
    this.updateRanking();
    this.updateInfoBox();
    this.updateBottomMenu();
    this.updateCurrentEvent();
  };
  SeasonLeagueMainDialogEventRank.prototype.updateCurrentEvent = function () {
    this.subLayerDisp.txt_currentEvent.visible = this._currentlyShowsRanking;
    this.subLayerDisp.mc_currentEventIcon.visible = this._currentlyShowsRanking;
    var e = _.CastleModel.seasonLeagueData.getActiveSeasonEventVO();
    var t = c.int(e ? e.eventId : -1);
    if (this._currentlyShowsRanking) {
      this.subLayerDisp.mc_currentEventIcon.gotoAndStop(m.ClientConstSeasonLeague.getPointsIconFrame(t));
    }
    this.subLayerDisp.mc_currentEventIcon.toolTipText = e ? e.eventBuildingNameId : "";
  };
  SeasonLeagueMainDialogEventRank.prototype.updateRanking = function () {
    this._ranks.highscore.requestDataEnabled = this._currentlyShowsRanking;
    if (this._currentlyShowsRanking) {
      this._ranks.highscore.scrollComponent.enableComponent(true);
      this._ranks.highscore.updateItems();
    } else {
      this._ranks.highscore.reset();
      if (_.CastleModel.userData.isInAlliance || this._rankType.getCurrentType() != x.SeasonLeagueMainDialogRankType.TYPE_ALLIANCE) {
        this._ranks.highscore.items[0].updateWithNewData(-1, this.getNoRankFakeHighscoreResponse());
      }
      this._ranks.highscore.scrollComponent.enableComponent(false);
    }
  };
  SeasonLeagueMainDialogEventRank.prototype.updateInfoBox = function () {
    this.subLayerDisp.mc_info.visible = !this._currentlyShowsRanking;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_info.txt_text, new l.LocalizedTextVO("dialog_seasonLeague_divisionRanking_noEvent_text")).verticalAlign = E.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  SeasonLeagueMainDialogEventRank.prototype.updatePayoutTimer = function () {
    var e = this.subLayerDisp.mc_payout.mc_time;
    if (this.subLayerDisp.mc_payout.visible) {
      if (this._currentlyShowsRanking) {
        O.CastleTimeStringHelper.setEventTime(e.txt_text, _.CastleModel.seasonLeagueData.server.getNextPayoutTimeInSec());
        e.toolTipText = "dialog_seasonLeague_divisionRanking_nextMedal_tooltip";
      } else {
        this.textFieldManager.registerTextField(e.txt_text, new r.TextVO("-")).autoFitToBounds = true;
        e.toolTipText = "dialog_seasonLeague_divisionRanking_nextMedalNoTime_tooltip";
      }
    }
  };
  SeasonLeagueMainDialogEventRank.prototype.updatePayoutReward = function () {
    var e = this.subLayerDisp.mc_payout;
    e.visible = true;
    a.MovieClipHelper.clearMovieClip(e.mc_icon);
    var t;
    var i = _.CastleModel.seasonLeagueData.getActiveSeasonEventVO();
    if (i && i.seasonLeague.participatedOnEvent) {
      this.textFieldManager.registerTextField(e.txt_title, new r.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_divisionRanking_nextMedal_text"))).autoFitToBounds = true;
      t = this._currentlyShowsRanking ? _.CastleModel.seasonLeagueData.xml.getSeasonMedalRewardForRank(_.CastleModel.seasonLeagueData.server.playerSeasonEventRank) : S.CollectableHelper.createVO(v.CollectableEnum.SEASON_LEAGUE_MEDALS, 1, 0);
      A.CollectableRenderHelper.displaySingleItemComplete(this, new h.CollectableRenderClips(e.mc_icon).addIconMc(e.mc_icon), t, new g.CollectableRenderOptions(g.CollectableRenderOptions.SET_ICON, new I(55, 55)));
    } else {
      this.textFieldManager.registerTextField(e.txt_title, new l.LocalizedTextVO("dialog_seasonLeague_divisionRanking_qualifyForMedal_text")).autoFitToBounds = true;
    }
  };
  SeasonLeagueMainDialogEventRank.prototype.updatePromotion = function () {
    this.subLayerDisp.mc_promotion.visible = true;
    var e = c.int(_.CastleModel.seasonLeagueData.server.playerSeasonEventRank);
    var t = _.CastleModel.seasonLeagueData.getCurrentPlayerPromotion();
    if (!t) {
      throw new Error("CurrentPlayerPromotion not Found. Current promotionID: " + _.CastleModel.seasonLeagueData.server.promotionId);
    }
    var i = _.CastleModel.seasonLeagueData.xml.getPromotion(t.id + 1);
    var n = _.CastleModel.seasonLeagueData.hasReachedHighestPromotion() ? "dialog_seasonLeague_divisionRanking_maxRank_text" : "dialog_seasonLeague_divisionRanking_nextRank_text";
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_promotion.txt_title, new r.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId(n))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_promotion.txt_name, new r.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId(i ? i.getNameTextId() : ""))).autoFitToBounds = true;
    this._promotionIcon.updateWithNewVO(i || t);
    this._promotionBar.update(this._currentlyShowsRanking, e);
  };
  SeasonLeagueMainDialogEventRank.prototype.updateAllianceInfo = function () {
    this.subLayerDisp.mc_allianceInfo.visible = true;
  };
  SeasonLeagueMainDialogEventRank.prototype.updateJoinAlliance = function () {
    this.subLayerDisp.mc_joinAlliance.visible = true;
  };
  SeasonLeagueMainDialogEventRank.prototype.updateBottomMenu = function () {
    var e = this._rankType.getCurrentType() == x.SeasonLeagueMainDialogRankType.TYPE_ALLIANCE;
    var t = _.CastleModel.userData.isInAlliance;
    this.subLayerDisp.mc_allianceInfo.visible = false;
    this.subLayerDisp.mc_promotion.visible = false;
    this.subLayerDisp.mc_payout.visible = false;
    this.subLayerDisp.mc_joinAlliance.visible = false;
    if (e) {
      this.updateAllianceInfo();
      if (t) {
        this.updatePayoutReward();
        this.updatePayoutTimer();
      } else {
        this.updateJoinAlliance();
      }
    } else {
      this.updatePromotion();
      this.updatePayoutReward();
      this.updatePayoutTimer();
    }
  };
  SeasonLeagueMainDialogEventRank.prototype.updateHighscoreId = function () {
    this._ranks.changeHighscoreId(this._rankType.getCurrentType() == x.SeasonLeagueMainDialogRankType.TYPE_PLAYER ? s.HighscoreConst.KINGDOMS_LEAGUE_SEASON_EVENT : s.HighscoreConst.ALLIANCE_KINGDOMS_LEAGUE_SEASON_EVENT);
  };
  SeasonLeagueMainDialogEventRank.prototype.getNoRankFakeHighscoreResponse = function () {
    var e = this._rankType.getCurrentType() == x.SeasonLeagueMainDialogRankType.TYPE_ALLIANCE;
    var t = _.CastleModel.userData.isInAlliance;
    if (e) {
      if (t) {
        return [-1, -1, [_.CastleModel.allianceData.myAllianceVO.allianceId, _.CastleModel.allianceData.myAllianceVO.allianceName, 0, 0], {
          KLMO: [[m.ClientConstSeasonLeague.MEDAL_ID_GOLD, _.CastleModel.seasonLeagueData.server.getAllianceMedalAmount(m.ClientConstSeasonLeague.MEDAL_ID_GOLD)], [m.ClientConstSeasonLeague.MEDAL_ID_SILVER, _.CastleModel.seasonLeagueData.server.getAllianceMedalAmount(m.ClientConstSeasonLeague.MEDAL_ID_SILVER)], [m.ClientConstSeasonLeague.MEDAL_ID_BRONZE, _.CastleModel.seasonLeagueData.server.getAllianceMedalAmount(m.ClientConstSeasonLeague.MEDAL_ID_BRONZE)]],
          KLRID: _.CastleModel.seasonLeagueData.server.promotionId
        }];
      } else {
        return [];
      }
    } else {
      return [-1, -1, {
        N: _.CastleModel.userData.userName,
        KLMO: [[m.ClientConstSeasonLeague.MEDAL_ID_GOLD, _.CastleModel.seasonLeagueData.server.getPlayerMedalAmount(m.ClientConstSeasonLeague.MEDAL_ID_GOLD)], [m.ClientConstSeasonLeague.MEDAL_ID_SILVER, _.CastleModel.seasonLeagueData.server.getPlayerMedalAmount(m.ClientConstSeasonLeague.MEDAL_ID_SILVER)], [m.ClientConstSeasonLeague.MEDAL_ID_BRONZE, _.CastleModel.seasonLeagueData.server.getPlayerMedalAmount(m.ClientConstSeasonLeague.MEDAL_ID_BRONZE)]],
        OID: _.CastleModel.userData.playerID,
        KLRID: _.CastleModel.seasonLeagueData.server.promotionId
      }];
    }
  };
  SeasonLeagueMainDialogEventRank.prototype.onClick = function (t) {
    if (y.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.subLayerDisp.mc_payout.btn_rewards:
          b.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(R.SeasonLeagueRewardOverviewDialog, new D.SeasonLeagueRewardOverviewDialogProperties(_.CastleModel.seasonLeagueData.xml.getSeasonEventRewardsAsOverviewItems(), "dialog_seasonLeague_medalsOverviewDialog_header", "dialog_seasonLeague_medalsOverviewDialog_copy", "help_seasonLeague_medalsOverviewDialog"));
          break;
        case this.subLayerDisp.mc_joinAlliance.btn_join:
          b.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(L.CastleAllianceTeaserDialog);
      }
    }
  };
  SeasonLeagueMainDialogEventRank.prototype.onEventsChanged = function (e) {
    var t = _.CastleModel.seasonLeagueData.isAnySeasonEventActive();
    if (this._currentlyShowsRanking != t && !this._currentlyShowsRanking && t) {
      this._ranks.highscore.requestOwnRankFromServer();
    }
    this._currentlyShowsRanking = t;
    this._ranks.highscore.requestDataEnabled = t;
    this.updateAllInfos();
  };
  SeasonLeagueMainDialogEventRank.prototype.onTickEvent = function (e) {
    this.updatePayoutTimer();
  };
  SeasonLeagueMainDialogEventRank.prototype.onSeasonInfoUpdated = function (e) {
    var t = c.int(_.CastleModel.seasonLeagueData.server.divisionSize);
    if (this._currentDivisionSize < 0 && this._currentDivisionSize != t) {
      this._ranks.highscore.requestOwnRankFromServer();
    }
    this._currentDivisionSize = t;
    this.updateAllInfos();
  };
  SeasonLeagueMainDialogEventRank.prototype.onPlayerRankUpdated = function (e) {
    this.updateBottomMenu();
  };
  SeasonLeagueMainDialogEventRank.prototype.onRankTypeChanged = function () {
    this._ranks.highscore.reset();
    this.updateHighscoreId();
    if (this._rankType.getCurrentType() != x.SeasonLeagueMainDialogRankType.TYPE_ALLIANCE || _.CastleModel.userData.isInAlliance) {
      this._ranks.highscore.requestOwnRankFromServer();
    }
    this.updateAllInfos();
  };
  SeasonLeagueMainDialogEventRank.prototype.onMyAllianceInfoUpdated = function (e) {
    this.updateAllInfos();
  };
  return SeasonLeagueMainDialogEventRank;
}(b.CastleDialogSubLayer);
exports.SeasonLeagueMainDialogEventRank = T;
o.classImplementsInterfaces(T, "ICollectableRendererList", "ISublayer");
var v = require("./12.js");
var S = require("./45.js");
var A = require("./25.js");
var L = require("./388.js");
var P = require("./359.js");
var M = require("./1656.js");
var R = require("./656.js");
var V = require("./1657.js");
var x = require("./1658.js");
var w = require("./121.js");
var B = require("./36.js");