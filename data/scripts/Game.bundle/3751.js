Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./241.js");
var C = require("./264.js");
var _ = require("./210.js");
var m = require("./15.js");
var f = require("./4.js");
var O = require("./251.js");
var E = require("./8.js");
var y = require("./288.js");
var b = require("./34.js");
var D = require("./330.js");
var I = function (e) {
  function CastleAllianceSamuraiInvasionDialogPlayerSublayer(t) {
    var i = e.call(this, t) || this;
    E.ButtonHelper.initBasicButton(t.btn_showMe);
    i.textFieldManager.registerTextField(t.txt_title, new p.LocalizedTextVO("dialog_samuraiInvasion_single_header"));
    i.textFieldManager.registerTextField(t.txt_desc, new p.LocalizedTextVO("dialog_samuraiInvasion_single_info")).autoFitToBounds = true;
    t.btn_showMe.toolTipText = "dialog_samuraiInvasion_overview_seekSamuraiButton";
    t.btn_showMe.mouseChildren = false;
    i.textFieldManager.registerTextField(t.mc_disabledRanking.txt_rank, new p.LocalizedTextVO("rank")).autoFitToBounds = true;
    t.mc_disabledRanking.toolTipText = "dialog_tournament_yourRank";
    t.mc_disabledRanking.mouseChildren = false;
    i._seasonLeague = new A.SeasonLeagueEventElementComponent(t.mc_seasonLeague, r.EventConst.EVENTTYPE_SAMURAI_INVASION);
    return i;
  }
  n.__extends(CastleAllianceSamuraiInvasionDialogPlayerSublayer, e);
  CastleAllianceSamuraiInvasionDialogPlayerSublayer.prototype.setScoreBarData = function (e) {
    this.scoreBarData = e;
  };
  CastleAllianceSamuraiInvasionDialogPlayerSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    if (f.CastleModel.specialEventData.isEventActive(r.EventConst.EVENTTYPE_SAMURAI_INVASION)) {
      f.CastleModel.smartfoxClient.sendCommandVO(new g.C2SPointEventGetPointsVO(r.EventConst.EVENTTYPE_SAMURAI_INVASION));
    }
    var i = new v.RewardsDialogScoreBarProperties(this.scoreBarData.rewardLists, "samuraiInvasion", this.tooltipValues, this.levelLabels);
    var n = new (a.getDefinitionByName("AllianceSamuraiInvasionEvent_Score_Icon"))();
    n.toolTipText = "dialog_samuraiInvasion_samuraiPoints";
    var o = new (a.getDefinitionByName("AllianceSamuraiInvasionEvent_Background"))();
    this.scoreBar = new L.RewardsDialogScoreBarComponentExternal();
    this.scoreBar.load(this.subLayerDisp.mc_scoreBarContainer, this.bindFunction(this.onScorebarAssetLoaded), "Scorebar_Player", n, o, CastleAllianceSamuraiInvasionDialogPlayerSublayer.openRewardsDialog, i);
    this.subLayerDisp.mc_seasonLeague.visible = false;
    this._seasonLeague.onShow();
    var s = castAs(f.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_SAMURAI_INVASION), "SamuraiInvasionEventVO");
    if (s) {
      var l = s.daimyoInfoVO.isEnabled ? "dialog_samuraiInvasion_single_pointsInfo_samuraiInvasionDaimyo" : "dialog_samuraiInvasion_single_pointsInfo";
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_subtext, new p.LocalizedTextVO(l)).autoFitToBounds = true;
      this.subLayerDisp.mc_difficulty.visible = s.isDifficultyScalingActivated;
      if (this.subLayerDisp.mc_difficulty.visible) {
        y.DifficultyScalingHelper.addDifficultyIcon(this.subLayerDisp.mc_difficulty.mc_icon, f.CastleModel.eventDifficultyScaling.getDifficultyVOByDifficultyID(s.difficultyIDChoosen), 45, 45, this.subLayerDisp.mc_difficulty);
      }
    }
  };
  CastleAllianceSamuraiInvasionDialogPlayerSublayer.prototype.onScorebarAssetLoaded = function () {
    this.onUpdatePoints();
    m.CastleBasicController.getInstance().addEventListener(_.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleAllianceSamuraiInvasionDialogPlayerSublayer.openRewardsDialog = function () {
    T.CastleDialogHandler.getInstance().registerDefaultDialogs(P.CastleAllianceSamuraiInvasionRewardListDialog, new D.GenericEventInfoListProperties(r.EventConst.EVENTTYPE_SAMURAI_INVASION, S.AllianceAndPlayerPointEventRewardListDialog.TAB_PLAYER));
  };
  CastleAllianceSamuraiInvasionDialogPlayerSublayer.prototype.showHelp = function () {
    T.CastleDialogHandler.getInstance().showHelper("", u.Localize.text("help_samuraiInvasion_single"));
  };
  CastleAllianceSamuraiInvasionDialogPlayerSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this.scoreBar) {
      this.scoreBar.destroy();
    }
    m.CastleBasicController.getInstance().removeEventListener(_.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
    this._seasonLeague.onHide();
  };
  CastleAllianceSamuraiInvasionDialogPlayerSublayer.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.btn_showMe:
        f.CastleModel.smartfoxClient.sendCommandVO(new C.C2SFindNextMapObjectVO(c.WorldConst.AREA_TYPE_SAMURAI_CAMP, l.WorldClassic.KINGDOM_ID, -1, -1, s.DungeonConst.BASIC_SAMURAI_CAMP_PLAYER_ID));
    }
  };
  CastleAllianceSamuraiInvasionDialogPlayerSublayer.prototype.onUpdatePoints = function (e = null) {
    this.updateProgressBars();
  };
  Object.defineProperty(CastleAllianceSamuraiInvasionDialogPlayerSublayer.prototype, "tooltipValues", {
    get: function () {
      var e = [];
      for (var t = 0; t < this.scoreBarData.pointThresholds.length && this.scoreBarData.pointThresholds[t] != 0; t++) {
        e.push(this.scoreBarData.pointThresholds[t]);
      }
      for (var i = 0; i < this.scoreBarData.topX.length; i++) {
        e.push(this.scoreBarData.topX[i]);
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceSamuraiInvasionDialogPlayerSublayer.prototype, "levelLabels", {
    get: function () {
      var e = [];
      var t = 0;
      for (t = 0; t < this.scoreBarData.pointThresholds.length && this.scoreBarData.pointThresholds[t] != 0; t++) {
        e.push(this.scoreBarData.pointThresholds[t]);
      }
      for (t = 0; t < this.scoreBarData.topX.length; t++) {
        e.push(u.Localize.text("Ranking_TopX", [this.scoreBarData.topX[t]]));
      }
      e.push(u.Localize.text("Ranking_Winner"));
      return e;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceSamuraiInvasionDialogPlayerSublayer.prototype.updateProgressBars = function () {
    this.scoreBar.update(new O.CastleScoreBarProgressVO(this.scoreBarData.ownPoints, this.scoreBarData.ownRank, this.scoreBarData.pointThresholds, this.scoreBarData.topX, this.scoreBarData.rewardsReceived));
    if (this.scoreBarData.ownRank > 0) {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_disabledRanking.txt_value, new d.LocalizedNumberVO(this.scoreBarData.ownRank));
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_disabledRanking.txt_value, new h.TextVO("-"));
    }
  };
  return CastleAllianceSamuraiInvasionDialogPlayerSublayer;
}(b.CastleDialogSubLayer);
exports.CastleAllianceSamuraiInvasionDialogPlayerSublayer = I;
var T = require("./9.js");
var v = require("./464.js");
var S = require("./332.js");
var A = require("./655.js");
var L = require("./465.js");
var P = require("./1773.js");
o.classImplementsInterfaces(I, "ICollectableRendererList", "ISublayer");