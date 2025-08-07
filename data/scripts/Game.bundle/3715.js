Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./3.js");
var C = require("./3.js");
var _ = require("./241.js");
var m = require("./264.js");
var f = require("./37.js");
var O = require("./210.js");
var E = require("./15.js");
var y = require("./4.js");
var b = require("./251.js");
var D = require("./288.js");
var I = require("./34.js");
var T = require("./821.js");
var v = require("./330.js");
var S = function (e) {
  function CastleAllianceNomadInvasionPointsEventSublayer(t) {
    var i = e.call(this, t) || this;
    i.textFieldManager.registerTextField(t.txt_title, new C.LocalizedTextVO("dialog_nomadInvasionAlliance_allianceTab_title"));
    i.textFieldManager.registerTextField(t.txt_desc1, new C.LocalizedTextVO("dialog_nomadInvasionAlliance_allianceTab_desc"));
    i.textFieldManager.registerTextField(t.txt_description, new C.LocalizedTextVO("dialog_nomadInvasion_desc"));
    i.initBasicButtons([t.btn_showMe, t.btn_highscore]);
    t.btn_showMe.mouseChildren = false;
    t.btn_showMe.toolTipText = "dialog_nomadInvasion_overview_seekNomadsButton";
    t.btn_highscore.toolTipText = "dialog_nomadInvasion_allianceScore_tooltip";
    return i;
  }
  n.__extends(CastleAllianceNomadInvasionPointsEventSublayer, e);
  CastleAllianceNomadInvasionPointsEventSublayer.prototype.setScoreBarData = function (e) {
    this.scoreBarData = e;
  };
  CastleAllianceNomadInvasionPointsEventSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    if (this.eventVO && this.eventVO.khanCampBarVO && y.CastleModel.userData.userLevel >= u.PlayerConst.LEVEL_CAP) {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_desc2, new C.LocalizedTextVO("dialog_nomadInvasion_overview_pointsEventInfo_khan"));
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_desc2, new C.LocalizedTextVO("dialog_nomadInvasion_overview_pointsEventInfo"));
    }
    y.CastleModel.smartfoxClient.sendCommandVO(new _.C2SPointEventGetPointsVO(p.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE));
    var i = this.scoreBarData.pointThresholds.concat(this.scoreBarData.topX);
    var n = new (s.getDefinitionByName("NomadInvasionEvent_Score_Icon"))();
    n.toolTipText = "dialog_nomadInvasion_nomadPoints";
    var o = new (s.getDefinitionByName("NomadInvasionEvent_Background"))();
    var a = new P.RewardsDialogScoreBarProperties(this.scoreBarData.rewardLists, "nomadInvasionAlliance", i, this.levelLabels, this.descriptions);
    this.scoreBar = new V.RewardsDialogScoreBarComponentExternal();
    this.scoreBar.load(this.subLayerDisp.mc_scoreBarContainer, this.bindFunction(this.onScorebarAssetLoaded), "Scorebar_Alliance_V", n, o, CastleAllianceNomadInvasionPointsEventSublayer.openRewardsDialog, a);
    this.subLayerDisp.mc_difficulty.visible = this.eventVO.isDifficultyScalingActivated;
    if (this.subLayerDisp.mc_difficulty.visible) {
      D.DifficultyScalingHelper.addDifficultyIcon(this.subLayerDisp.mc_difficulty.mc_icon, y.CastleModel.eventDifficultyScaling.getDifficultyVOByDifficultyID(this.eventVO.difficultyIDChoosen), 45, 45, this.subLayerDisp.mc_difficulty);
    }
  };
  CastleAllianceNomadInvasionPointsEventSublayer.prototype.onScorebarAssetLoaded = function () {
    this.onUpdatePoints();
    E.CastleBasicController.getInstance().addEventListener(O.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleAllianceNomadInvasionPointsEventSublayer.openRewardsDialog = function () {
    L.CastleDialogHandler.getInstance().registerDefaultDialogs(x.CastleAllianceNomadInvasionRewardListDialog, new v.GenericEventInfoListProperties(p.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, R.AllianceAndPlayerPointEventRewardListDialog.TAB_ALLIANCE));
  };
  CastleAllianceNomadInvasionPointsEventSublayer.prototype.showHelp = function () {
    L.CastleDialogHandler.getInstance().showHelper("", g.Localize.text("help_nomadinvasionAlliance"));
  };
  CastleAllianceNomadInvasionPointsEventSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this.scoreBar) {
      this.scoreBar.destroy();
    }
    E.CastleBasicController.getInstance().removeEventListener(O.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleAllianceNomadInvasionPointsEventSublayer.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.btn_showMe:
        var i = y.CastleModel.userData.castleList.getMainCastleByKingdomID(l.WorldClassic.KINGDOM_ID);
        a.CommandController.instance.executeCommand(A.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [i.kingdomID, i.absAreaPosX, i.absAreaPosY]);
        this.controller.addEventListener(f.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAarrived));
        break;
      case this.subLayerDisp.btn_highscore:
        I.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(M.CastleAllianceNomadInvasionHighscoreDialog, new T.CastleGenericAllianceHighscoreDialogProperties(d.HighscoreConst.ALLIANCE_NOMADINVASION_ALLIANCE, this.eventVO.allianceBarVO.numberOfLeagues, this.eventVO.allianceBarVO.leagueID, this.eventVO.allianceBarVO.ownRank));
    }
  };
  CastleAllianceNomadInvasionPointsEventSublayer.prototype.onGAAarrived = function (e) {
    this.controller.removeEventListener(f.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAarrived));
    y.CastleModel.smartfoxClient.sendCommandVO(new m.C2SFindNextMapObjectVO(r.WorldConst.AREA_TYPE_NOMAD_CAMP, l.WorldClassic.KINGDOM_ID, -1, -1, h.DungeonConst.BASIC_NOMAD_CAMP_PLAYER_ID));
  };
  Object.defineProperty(CastleAllianceNomadInvasionPointsEventSublayer.prototype, "eventVO", {
    get: function () {
      return y.CastleModel.specialEventData.getActiveEventByEventId(p.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceNomadInvasionPointsEventSublayer.prototype.onUpdatePoints = function (e = null) {
    this.updateProgressBars();
  };
  Object.defineProperty(CastleAllianceNomadInvasionPointsEventSublayer.prototype, "levelLabels", {
    get: function () {
      var e = [];
      var t = 0;
      for (t = 0; t < this.scoreBarData.pointThresholds.length; t++) {
        e.push(this.scoreBarData.pointThresholds[t]);
      }
      for (t = 0; t < this.scoreBarData.topX.length; t++) {
        e.push(g.Localize.text("Ranking_TopX", [this.scoreBarData.topX[t]]));
      }
      e.push(g.Localize.text("Ranking_Winner"));
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionPointsEventSublayer.prototype, "descriptions", {
    get: function () {
      var e = [];
      for (var t = 0; t < this.scoreBarData.rewardLists.length; t++) {
        if (this.scoreBarData.rewardLists[t].grantType == c.RewardConst.ALLIANCE) {
          e.push("dialog_alienInvasionAlliance_Treasury_tooltip");
        } else if (this.scoreBarData.rewardLists[t].grantType == c.RewardConst.ALLIANCE_MEMBER) {
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
  CastleAllianceNomadInvasionPointsEventSublayer.prototype.updateProgressBars = function () {
    this.scoreBar.update(new b.CastleScoreBarProgressVO(this.scoreBarData.ownPoints, this.scoreBarData.ownRank, this.scoreBarData.pointThresholds, this.scoreBarData.topX, this.scoreBarData.rewardsReceived, this.eventVO.isPlayerQualifiedForAllianceRewards(), this.eventVO.allianceRewardThresholdPoints()));
  };
  return CastleAllianceNomadInvasionPointsEventSublayer;
}(I.CastleDialogSubLayer);
exports.CastleAllianceNomadInvasionPointsEventSublayer = S;
var A = require("./29.js");
var L = require("./9.js");
var P = require("./464.js");
var M = require("./1765.js");
var R = require("./332.js");
var V = require("./465.js");
var x = require("./1092.js");
o.classImplementsInterfaces(S, "ICollectableRendererList", "ISublayer");