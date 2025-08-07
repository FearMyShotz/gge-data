Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./26.js");
var l = require("./13.js");
var c = require("./4.js");
var u = require("./467.js");
var d = function (e) {
  function SeasonLeagueMainDialogRanks(t, i, n, o) {
    var a = this;
    a._showPoints = false;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t) || this)._showPoints = o;
    if (t) {
      t.mc_icon_rank.toolTipText = "dialog_seasonLeague_divisionRanking_position_tooltip";
      t.mc_icon_promotion.toolTipText = "dialog_seasonLeague_divisionRanking_rank_tooltip";
      t.mc_icon_gold.toolTipText = h.CollectableHelper.createVO(p.CollectableEnum.SEASON_LEAGUE_MEDALS, 1, u.ClientConstSeasonLeague.MEDAL_ID_GOLD).getTooltipTextId();
      t.mc_icon_silver.toolTipText = h.CollectableHelper.createVO(p.CollectableEnum.SEASON_LEAGUE_MEDALS, 1, u.ClientConstSeasonLeague.MEDAL_ID_SILVER).getTooltipTextId();
      t.mc_icon_bronze.toolTipText = h.CollectableHelper.createVO(p.CollectableEnum.SEASON_LEAGUE_MEDALS, 1, u.ClientConstSeasonLeague.MEDAL_ID_BRONZE).getTooltipTextId();
      if (t.mc_icon_rank_alliance) {
        t.mc_icon_rank_alliance.toolTipText = "allianceRank";
      }
    }
    a._highscore = new C.ModernHighscoreComponent(t, SeasonLeagueMainDialogRanks.MAX_VISIBLE_ITEMS, _.SeasonLeagueMainDialogRanksItem, i, n);
    for (var s = 0, r = a._highscore.items; s < r.length; s++) {
      var l = r[s];
      if (l !== undefined) {
        l.showPoints = o;
      }
    }
    return a;
  }
  n.__extends(SeasonLeagueMainDialogRanks, e);
  SeasonLeagueMainDialogRanks.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._highscore.onShow();
    this.updateHeader();
  };
  SeasonLeagueMainDialogRanks.prototype.onHide = function () {
    this._highscore.onHide();
    e.prototype.onHide.call(this);
  };
  SeasonLeagueMainDialogRanks.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    c.CastleModel.specialEventData.addEventListener(r.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventsChanged));
    c.CastleModel.specialEventData.addEventListener(r.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChanged));
  };
  SeasonLeagueMainDialogRanks.prototype.removeEventListener = function () {
    c.CastleModel.specialEventData.removeEventListener(r.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventsChanged));
    c.CastleModel.specialEventData.removeEventListener(r.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChanged));
    e.prototype.removeEventListener.call(this);
  };
  SeasonLeagueMainDialogRanks.prototype.updateHeader = function () {
    var e = this.isAllianceScore() && !!this.disp.mc_icon_rank_alliance;
    this.disp.mc_icon_rank.visible = !e;
    if (this.disp.mc_icon_rank_alliance) {
      this.disp.mc_icon_rank_alliance.visible = e;
    }
    this.disp.mc_icon_promotion.visible = !e;
    this.updatePointsIcon();
    var t = e ? "allianceName" : "generic_playerName";
    g.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new a.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId(t))).autoFitToBounds = true;
  };
  SeasonLeagueMainDialogRanks.prototype.updatePointsIcon = function () {
    if (this.disp && this.disp.mc_icon_points) {
      this.disp.mc_icon_points.visible = this.showPoints;
      var e = c.CastleModel.seasonLeagueData.getActiveSeasonEventVO();
      var t = s.int(e ? e.eventId : -1);
      if (this.showPoints) {
        this.disp.mc_icon_points.gotoAndStop(u.ClientConstSeasonLeague.getPointsIconFrame(t));
      }
      this.disp.mc_icon_points.toolTipText = u.ClientConstSeasonLeague.getPointsIconTooltipTextId(t);
    }
  };
  SeasonLeagueMainDialogRanks.prototype.changeHighscoreId = function (e) {
    this._highscore.highscoreId = e;
    this.updateHeader();
  };
  SeasonLeagueMainDialogRanks.prototype.isAllianceScore = function () {
    return this._highscore.highscoreId == m.HighscoreConst.ALLIANCE_KINGDOMS_LEAGUE_SEASON_EVENT || this._highscore.highscoreId == m.HighscoreConst.ALLIANCE_KINGDOMS_LEAGUE_SEASON;
  };
  SeasonLeagueMainDialogRanks.prototype.onEventsChanged = function (e) {
    this.updatePointsIcon();
  };
  Object.defineProperty(SeasonLeagueMainDialogRanks.prototype, "highscore", {
    get: function () {
      return this._highscore;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueMainDialogRanks.prototype, "showPoints", {
    get: function () {
      return this._showPoints;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueMainDialogRanks.MAX_VISIBLE_ITEMS = 6;
  return SeasonLeagueMainDialogRanks;
}(require("./40.js").CastleItemRenderer);
exports.SeasonLeagueMainDialogRanks = d;
var p = require("./12.js");
var h = require("./45.js");
var g = require("./14.js");
var C = require("./754.js");
var _ = require("./3421.js");
var m = require("./5.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");