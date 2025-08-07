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
var u = require("./5.js");
var d = require("./5.js");
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
var D = require("./821.js");
var I = require("./330.js");
var T = function (e) {
  function CastleAllianceSamuraiInvasionDialogAllianceSublayer(t) {
    var i = e.call(this, t) || this;
    i.textFieldManager.registerTextField(t.txt_title, new p.LocalizedTextVO("dialog_samuraiInvasion_alliance_header"));
    i.textFieldManager.registerTextField(t.txt_desc, new p.LocalizedTextVO("dialog_samuraiInvasion_alliance_info")).autoFitToBounds = true;
    E.ButtonHelper.initBasicButtons([t.btn_highscore, t.btn_showMe]);
    t.btn_showMe.toolTipText = "dialog_samuraiInvasion_overview_seekSamuraiButton";
    t.btn_showMe.mouseChildren = false;
    i.subLayerDisp.btn_highscore.toolTipText = "dialog_samuraiInvasion_allianceScore_tooltip";
    return i;
  }
  n.__extends(CastleAllianceSamuraiInvasionDialogAllianceSublayer, e);
  CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype.setScoreBarData = function (e) {
    this.scoreBarData = e;
  };
  CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    if (f.CastleModel.specialEventData.isEventActive(u.EventConst.EVENTTYPE_SAMURAI_INVASION)) {
      f.CastleModel.smartfoxClient.sendCommandVO(new g.C2SPointEventGetPointsVO(u.EventConst.EVENTTYPE_SAMURAI_INVASION));
    }
    var i = new (a.getDefinitionByName("AllianceSamuraiInvasionEvent_Score_Icon"))();
    i.toolTipText = "dialog_samuraiInvasion_alliance_points";
    var n = new (a.getDefinitionByName("AllianceSamuraiInvasionEvent_Background"))();
    var o = new S.RewardsDialogScoreBarProperties(this.scoreBarData.rewardLists, "samuraiInvasionAlliance", this.tooltipValues, this.levelLabels, this.descriptions);
    this.scoreBar = new P.RewardsDialogScoreBarComponentExternal();
    this.scoreBar.load(this.subLayerDisp.mc_scoreBarContainer, this.bindFunction(this.onScorebarAssetLoaded), "Scorebar_Alliance_V", i, n, CastleAllianceSamuraiInvasionDialogAllianceSublayer.openRewardsDialog, o);
    var s = R.castAs(f.CastleModel.specialEventData.getActiveEventByEventId(u.EventConst.EVENTTYPE_SAMURAI_INVASION), "SamuraiInvasionEventVO");
    if (s) {
      var r = s.daimyoInfoVO.isEnabled ? "dialog_samuraiInvasion_alliance_pointsInfo_samuraiInvasionDaimyo" : "dialog_samuraiInvasion_alliance_pointsInfo";
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_subtext, new p.LocalizedTextVO(r)).autoFitToBounds = true;
      this.subLayerDisp.mc_difficulty.visible = s.isDifficultyScalingActivated;
      if (this.subLayerDisp.mc_difficulty.visible) {
        y.DifficultyScalingHelper.addDifficultyIcon(this.subLayerDisp.mc_difficulty.mc_icon, f.CastleModel.eventDifficultyScaling.getDifficultyVOByDifficultyID(s.difficultyIDChoosen), 45, 45, this.subLayerDisp.mc_difficulty);
      }
    }
  };
  CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype.onScorebarAssetLoaded = function () {
    this.onUpdatePoints();
    m.CastleBasicController.getInstance().addEventListener(_.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleAllianceSamuraiInvasionDialogAllianceSublayer.openRewardsDialog = function () {
    v.CastleDialogHandler.getInstance().registerDefaultDialogs(M.CastleAllianceSamuraiInvasionRewardListDialog, new I.GenericEventInfoListProperties(u.EventConst.EVENTTYPE_SAMURAI_INVASION, L.AllianceAndPlayerPointEventRewardListDialog.TAB_ALLIANCE));
  };
  CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype.showHelp = function () {
    v.CastleDialogHandler.getInstance().showHelper("", h.Localize.text("help_samuraiInvasionAlliance"));
  };
  CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this.scoreBar) {
      this.scoreBar.destroy();
    }
    m.CastleBasicController.getInstance().removeEventListener(_.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.btn_showMe:
        f.CastleModel.smartfoxClient.sendCommandVO(new C.C2SFindNextMapObjectVO(s.WorldConst.AREA_TYPE_SAMURAI_CAMP, r.WorldClassic.KINGDOM_ID, -1, -1, d.DungeonConst.BASIC_SAMURAI_CAMP_PLAYER_ID));
        break;
      case this.subLayerDisp.btn_highscore:
        b.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(A.CastleAllianceSamuraiInvasionHighscoreDialog, new D.CastleGenericAllianceHighscoreDialogProperties(c.HighscoreConst.SAMURAI_ALLIANCE, CastleAllianceSamuraiInvasionDialogAllianceSublayer.eventVO.allianceBarVO.numberOfLeagues, CastleAllianceSamuraiInvasionDialogAllianceSublayer.eventVO.allianceBarVO.leagueID, CastleAllianceSamuraiInvasionDialogAllianceSublayer.eventVO.allianceBarVO.ownRank));
    }
  };
  CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype.onUpdatePoints = function (e = null) {
    this.updateProgressBars();
  };
  Object.defineProperty(CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype, "sublayerLeagueTypeEventVO", {
    get: function () {
      return CastleAllianceSamuraiInvasionDialogAllianceSublayer.eventVO.allianceBarVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype.updateProgressBars = function () {
    if (CastleAllianceSamuraiInvasionDialogAllianceSublayer.eventVO) {
      this.scoreBar.update(new O.CastleScoreBarProgressVO(this.scoreBarData.ownPoints, this.scoreBarData.ownRank, this.scoreBarData.pointThresholds, this.scoreBarData.topX, this.scoreBarData.rewardsReceived, CastleAllianceSamuraiInvasionDialogAllianceSublayer.eventVO.isPlayerQualifiedForAllianceRewards(), CastleAllianceSamuraiInvasionDialogAllianceSublayer.eventVO.allianceRewardThresholdPoints()));
    }
  };
  Object.defineProperty(CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype, "tooltipValues", {
    get: function () {
      return this.sublayerLeagueTypeEventVO.pointThresholds.concat(this.sublayerLeagueTypeEventVO.topX);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype, "levelLabels", {
    get: function () {
      var e = [];
      var t = 0;
      for (t = 0; t < this.sublayerLeagueTypeEventVO.pointThresholds.length; t++) {
        e.push(this.sublayerLeagueTypeEventVO.pointThresholds[t]);
      }
      for (t = 0; t < this.sublayerLeagueTypeEventVO.topX.length; t++) {
        e.push(h.Localize.text("Ranking_TopX", [this.sublayerLeagueTypeEventVO.topX[t]]));
      }
      e.push(h.Localize.text("Ranking_Winner"));
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype, "descriptions", {
    get: function () {
      var e = [];
      for (var t = 0; t < CastleAllianceSamuraiInvasionDialogAllianceSublayer.eventVO.allianceBarVO.rewardLists.length; t++) {
        if (CastleAllianceSamuraiInvasionDialogAllianceSublayer.eventVO.allianceBarVO.rewardLists[t].grantType == l.RewardConst.ALLIANCE) {
          e.push("dialog_alienInvasionAlliance_Treasury_tooltip");
        } else if (CastleAllianceSamuraiInvasionDialogAllianceSublayer.eventVO.allianceBarVO.rewardLists[t].grantType == l.RewardConst.ALLIANCE_MEMBER) {
          e.push("dialog_alienInvasionAlliance_Members_tooltip");
        } else {
          e.push("forAllianceFundsAndMembers");
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceSamuraiInvasionDialogAllianceSublayer, "eventVO", {
    get: function () {
      return f.CastleModel.specialEventData.getActiveEventByEventId(u.EventConst.EVENTTYPE_SAMURAI_INVASION);
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceSamuraiInvasionDialogAllianceSublayer;
}(b.CastleDialogSubLayer);
exports.CastleAllianceSamuraiInvasionDialogAllianceSublayer = T;
o.classImplementsInterfaces(T, "ICollectableRendererList", "ISublayer");
var v = require("./9.js");
var S = require("./464.js");
var A = require("./3738.js");
var L = require("./332.js");
var P = require("./465.js");
var M = require("./1773.js");
var R = require("./1.js");