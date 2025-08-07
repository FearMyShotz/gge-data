Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./241.js");
var p = require("./429.js");
var h = require("./512.js");
var g = require("./1720.js");
var C = require("./210.js");
var _ = require("./4.js");
var m = require("./251.js");
var f = function (e) {
  function FactionEventRankingsSublayer(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).textFieldManager.registerTextField(t.txt_header, new l.LocalizedTextVO("dialog_factionhighscore_header"));
    i.initBasicButtons([i.subLayerDisp.mc_rankingContainer.btn_search, i.subLayerDisp.mc_rankingContainer.btn_top, i.subLayerDisp.mc_rankingContainer.btn_up, i.subLayerDisp.mc_rankingContainer.btn_down, i.subLayerDisp.mc_rankingContainer.btn_leagueUp, i.subLayerDisp.mc_rankingContainer.btn_leagueDown]);
    i.subLayerDisp.mc_scoreBarComponent.mc_pointsTooltip.toolTipText = "dialog_berimond_nobilityPoints";
    i.subLayerDisp.mc_scoreBarComponent.mc_ownRank.toolTipText = "rank";
    i.subLayerDisp.mc_scoreBarComponent.mc_ownRank.mouseChildren = false;
    var n = i.factionEventVO.ownRank > 0 ? new r.LocalizedNumberVO(i.factionEventVO.ownRank) : new c.TextVO("-");
    i.itxt_rank = i.textFieldManager.registerTextField(i.subLayerDisp.mc_scoreBarComponent.mc_ownRank.txt_ownRank, n);
    i.ranking = new I.FactionRankingComponent(i.subLayerDisp.mc_rankingContainer);
    i.pagination = new p.Pagination(i, FactionEventRankingsSublayer.MAX_PAGES, false);
    i.pagination.addControl(new h.PaginationArrows(i, i.pagination));
    i.pagination.addControl(new O.PaginationMouseWheel(i.subLayerDisp.mc_scoreBarComponent, i.pagination));
    i.attackTowersBox = new b.FactionAttackPveBox(i.subLayerDisp.mc_objective_0);
    i.attackCampsBox = new D.FactionAttackPvpBox(i.subLayerDisp.mc_objective_1);
    return i;
  }
  n.__extends(FactionEventRankingsSublayer, e);
  FactionEventRankingsSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    _.CastleModel.smartfoxClient.sendCommandVO(new d.C2SPointEventGetPointsVO(a.EventConst.EVENTTYPE_FACTION));
    this.attackTowersBox.show();
    this.attackCampsBox.show();
    this.ranking.reset();
    this.initScoreBar();
    this.addEventListener();
  };
  FactionEventRankingsSublayer.prototype.initScoreBar = function () {
    if (this.scoreBar) {
      this.scoreBar.destroy();
    }
    var e = this.currentLeagueVO.pointThresholds.concat(this.currentLeagueVO.topX);
    var t = new E.CastleFactionEventScoreBarProperties(this.pagination, this.currentLeagueVO.rewardLists, "berimond", e, this.levelLabels);
    this.scoreBar = new y.CastleFactionScoreBarComponent(this.subLayerDisp.mc_scoreBarComponent, t);
    this.pagination.currentPage = this.getScoreBarStartPage();
    this.pagination.enable();
    this.updateScoreBar();
    this.subLayerDisp.mc_scoreBarComponent.mc_thresholdBar.gotoAndStop(this.currentLeagueVO.subTypeID + 1);
    this.subLayerDisp.mc_scoreBarComponent.mc_thresholdBar_bg.gotoAndStop(this.currentLeagueVO.subTypeID + 1);
    for (var i = 0; i < t.numThresholdRewards; i++) {
      this.subLayerDisp.mc_scoreBarComponent["reward" + i].mc_text.gotoAndStop(this.currentLeagueVO.subTypeID + 1);
    }
  };
  FactionEventRankingsSublayer.prototype.getScoreBarStartPage = function () {
    var e = 0;
    if (this.currentLeagueVO.leagueID == this.factionEventVO.ownLeagueID) {
      for (; e < this.pagination.maxPages && !(this.factionEventVO.ownPoints < this.currentLeagueVO.pointThresholds[e]); e++);
    }
    return u.int(Math.max(1, e));
  };
  FactionEventRankingsSublayer.prototype.updateScoreBar = function () {
    this.scoreBar.update(new m.CastleScoreBarProgressVO(this.currentLeagueVO.ownPoints, this.currentLeagueVO.ownRank, this.currentLeagueVO.pointThresholds, this.currentLeagueVO.topX));
    var e = this.factionEventVO.ownRank > 0 ? new r.LocalizedNumberVO(this.factionEventVO.ownRank) : new c.TextVO("-");
    this.itxt_rank = this.textFieldManager.registerTextField(this.subLayerDisp.mc_scoreBarComponent.mc_ownRank.txt_ownRank, e);
  };
  Object.defineProperty(FactionEventRankingsSublayer.prototype, "levelLabels", {
    get: function () {
      var e = [];
      var t = 0;
      for (t = 0; t < this.currentLeagueVO.pointThresholds.length; t++) {
        e.push(this.currentLeagueVO.pointThresholds[t]);
      }
      for (t = 0; t < this.currentLeagueVO.topX.length; t++) {
        e.push(s.Localize.text("Ranking_TopX", [this.currentLeagueVO.topX[t]]));
      }
      e.push(s.Localize.text("Ranking_Top1"));
      return e;
    },
    enumerable: true,
    configurable: true
  });
  FactionEventRankingsSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.attackTowersBox.hide();
    this.attackCampsBox.hide();
    this.ranking.hide();
    if (this.scoreBar) {
      this.scoreBar.destroy();
    }
    this.pagination.disable();
    this.removeEventListener();
  };
  FactionEventRankingsSublayer.prototype.onClick = function (e) {
    this.pagination.handleClick(e);
  };
  FactionEventRankingsSublayer.prototype.addEventListener = function () {
    this.controller.addEventListener(C.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
    this.ranking.addEventListener(g.CastleGenericRankingComponentEvent.LEAGUETYPE_CHANGED, this.bindFunction(this.onLeagueTypeChanged));
  };
  FactionEventRankingsSublayer.prototype.removeEventListener = function () {
    this.controller.removeEventListener(C.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
    this.ranking.removeEventListener(g.CastleGenericRankingComponentEvent.LEAGUETYPE_CHANGED, this.bindFunction(this.onLeagueTypeChanged));
  };
  FactionEventRankingsSublayer.prototype.onLeagueTypeChanged = function (e) {
    this.pagination.disable();
    this.initScoreBar();
  };
  FactionEventRankingsSublayer.prototype.onUpdatePoints = function (e) {
    this.updateScoreBar();
  };
  Object.defineProperty(FactionEventRankingsSublayer.prototype, "factionEventVO", {
    get: function () {
      return _.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  FactionEventRankingsSublayer.prototype.updatePages = function (e, t) {
    if (this.scoreBar) {
      this.scoreBar.executeFullUpdate();
    }
  };
  FactionEventRankingsSublayer.prototype.changeArrow = function (e, t) {
    return false;
  };
  FactionEventRankingsSublayer.prototype.getLeftArrow = function () {
    return this.subLayerDisp.mc_scoreBarComponent.btn_left;
  };
  FactionEventRankingsSublayer.prototype.getRightArrow = function () {
    return this.subLayerDisp.mc_scoreBarComponent.btn_right;
  };
  Object.defineProperty(FactionEventRankingsSublayer.prototype, "currentLeagueVO", {
    get: function () {
      return this.factionEventVO.leaguetypes.get(this.ranking.currentLeagueId).get(this.factionEventVO.rewardSetId);
    },
    enumerable: true,
    configurable: true
  });
  FactionEventRankingsSublayer.__initialize_static_members = function () {
    FactionEventRankingsSublayer.MAX_PAGES = 5;
  };
  return FactionEventRankingsSublayer;
}(require("./35.js").CastleDialogSubLayer);
exports.FactionEventRankingsSublayer = f;
var O = require("./717.js");
var E = require("./3558.js");
var y = require("./3559.js");
var b = require("./1717.js");
var D = require("./1719.js");
var I = require("./3560.js");
o.classImplementsInterfaces(f, "ICollectableRendererList", "ISublayer", "IPaginationContainer", "IPaginationArrowsContainer");
f.__initialize_static_members();